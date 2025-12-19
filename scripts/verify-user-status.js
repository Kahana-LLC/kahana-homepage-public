#!/usr/bin/env node
/**
 * Script to verify user payment status in Supabase
 * Checks if cancellation was properly reflected in the database
 * 
 * Usage: node scripts/verify-user-status.js <email>
 */

require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase credentials');
  console.error('   Required: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function verifyUserStatus(email) {
  console.log('\n🔍 Verifying User Status\n');
  console.log('='.repeat(60));
  console.log(`📧 Email: ${email}\n`);

  try {
    // 1. Check user record
    console.log('1️⃣  Checking users table...');
    const { data: user, error: userError } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single();

    if (userError) {
      if (userError.code === 'PGRST116') {
        console.log('   ❌ User not found in database');
        return;
      }
      throw userError;
    }

    console.log(`   ✅ User found: ${user.user_id}`);
    console.log(`   📊 Payment Status: ${user.payment_status || '❌ NOT SET'}`);
    console.log(`   💳 Stripe Customer ID: ${user.stripe_customer_id || '❌ NOT SET'}`);
    console.log(`   📅 Updated: ${user.updated_at ? new Date(user.updated_at).toLocaleString() : 'N/A'}`);

    // Check if status is 'free' (expected after cancellation)
    if (user.payment_status === 'free') {
      console.log('   ✅ Status is correctly set to "free"');
    } else {
      console.log(`   ⚠️  Status is "${user.payment_status}" - expected "free" after cancellation`);
    }

    // 2. Check payment records
    console.log('\n2️⃣  Checking payments table...');
    const { data: payments, error: paymentsError } = await supabase
      .from('payments')
      .select('*')
      .eq('user_id', user.user_id)
      .order('timestamp', { ascending: false });

    if (paymentsError) throw paymentsError;

    if (!payments || payments.length === 0) {
      console.log('   ⚠️  No payment records found');
    } else {
      console.log(`   📦 Found ${payments.length} payment record(s):\n`);
      payments.forEach((payment, index) => {
        console.log(`   Payment ${index + 1}:`);
        console.log(`      Amount: $${payment.amount || 0}`);
        console.log(`      Status: ${payment.status || 'N/A'}`);
        console.log(`      Customer Subscription Status: ${payment.customer_subscription_status || '❌ NOT SET'}`);
        console.log(`      Provider: ${payment.provider || 'N/A'}`);
        console.log(`      Timestamp: ${payment.timestamp ? new Date(payment.timestamp).toLocaleString() : 'N/A'}`);
        
        // Check if all payments are set to 'free' (expected after cancellation)
        if (payment.customer_subscription_status === 'free') {
          console.log(`      ✅ Correctly set to "free"`);
        } else {
          console.log(`      ⚠️  Should be "free" after cancellation`);
        }
        console.log('');
      });

      // Check if all payments are 'free'
      const allFree = payments.every(p => p.customer_subscription_status === 'free');
      if (allFree) {
        console.log('   ✅ All payment records correctly set to "free"');
      } else {
        const nonFreeCount = payments.filter(p => p.customer_subscription_status !== 'free').length;
        console.log(`   ⚠️  ${nonFreeCount} payment record(s) not set to "free"`);
      }
    }

    // 3. Check user_plans
    console.log('\n3️⃣  Checking user_plans table...');
    const { data: userPlans, error: plansError } = await supabase
      .from('user_plans')
      .select('*')
      .eq('user_id', user.user_id)
      .order('start_date', { ascending: false });

    if (plansError) throw plansError;

    if (!userPlans || userPlans.length === 0) {
      console.log('   ⚠️  No user plan records found');
    } else {
      console.log(`   📋 Found ${userPlans.length} plan record(s):\n`);
      userPlans.forEach((plan, index) => {
        console.log(`   Plan ${index + 1}:`);
        console.log(`      Status: ${plan.status || 'N/A'}`);
        console.log(`      Is Active: ${plan.is_active ? '✅ Yes' : '❌ No'}`);
        console.log(`      Stripe Subscription ID: ${plan.stripe_subscription_id || 'N/A'}`);
        console.log(`      Stripe Customer ID: ${plan.stripe_customer_id || 'N/A'}`);
        console.log(`      Cancel at Period End: ${plan.cancel_at_period_end ? 'Yes' : 'No'}`);
        if (plan.current_period_start) {
          console.log(`      Period Start: ${new Date(plan.current_period_start).toLocaleString()}`);
        }
        if (plan.current_period_end) {
          console.log(`      Period End: ${new Date(plan.current_period_end).toLocaleString()}`);
        }
        console.log('');
      });

      // Check if plans are inactive (expected after cancellation)
      const allInactive = userPlans.every(p => !p.is_active || p.status === 'canceled');
      if (allInactive) {
        console.log('   ✅ All plans correctly marked as inactive/canceled');
      } else {
        const activePlans = userPlans.filter(p => p.is_active && p.status !== 'canceled');
        console.log(`   ⚠️  ${activePlans.length} plan(s) still marked as active`);
      }
    }

    // 4. Summary
    console.log('\n' + '='.repeat(60));
    console.log('\n📊 SUMMARY\n');

    const issues = [];
    
    if (user.payment_status !== 'free') {
      issues.push(`❌ users.payment_status is "${user.payment_status}" (should be "free")`);
    }

    if (payments && payments.length > 0) {
      const nonFreePayments = payments.filter(p => p.customer_subscription_status !== 'free');
      if (nonFreePayments.length > 0) {
        issues.push(`❌ ${nonFreePayments.length} payment record(s) not set to "free"`);
      }
    }

    if (userPlans && userPlans.length > 0) {
      const activePlans = userPlans.filter(p => p.is_active && p.status !== 'canceled');
      if (activePlans.length > 0) {
        issues.push(`❌ ${activePlans.length} plan(s) still marked as active`);
      }
    }

    if (issues.length === 0) {
      console.log('✅ All checks passed! Cancellation is properly reflected in the database.\n');
    } else {
      console.log('⚠️  Issues found:\n');
      issues.forEach(issue => console.log(`   ${issue}`));
      console.log('\n💡 Possible causes:');
      console.log('   - Webhook not received/processed');
      console.log('   - Webhook handler error');
      console.log('   - Database update failed');
      console.log('   - Check webhook logs in Stripe Dashboard\n');
    }

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    if (error.details) {
      console.error('   Details:', error.details);
    }
    process.exit(1);
  }
}

// Main
const email = process.argv[2];

if (!email) {
  console.error('❌ Email is required');
  console.error('   Usage: node scripts/verify-user-status.js <email>');
  process.exit(1);
}

verifyUserStatus(email).catch((error) => {
  console.error('\n❌ Fatal error:', error);
  process.exit(1);
});

