#!/usr/bin/env node
/**
 * Fix subscription status for a user who has an active subscription
 * that's scheduled to cancel but still has access until period ends
 * 
 * Usage: node scripts/fix-active-subscription-status.js <email>
 */

require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const Stripe = require('stripe');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!supabaseUrl || !supabaseServiceKey || !stripeSecretKey) {
  console.error('❌ Missing credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);
const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2024-12-18.acacia',
});

async function fixActiveSubscriptionStatus(email) {
  console.log('\n🔧 Fixing Active Subscription Status\n');
  console.log('='.repeat(60));
  console.log(`📧 Email: ${email}\n`);

  try {
    // 1. Get user from Supabase
    const { data: user, error: userError } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single();

    if (userError || !user) {
      console.error('❌ User not found');
      process.exit(1);
    }

    console.log(`✅ Found user: ${user.user_id}`);
    console.log(`   Current payment_status: ${user.payment_status}`);
    console.log(`   Stripe Customer ID: ${user.stripe_customer_id || 'N/A'}\n`);

    if (!user.stripe_customer_id) {
      console.error('❌ User has no stripe_customer_id');
      process.exit(1);
    }

    // 2. Check Stripe subscription status
    console.log('📡 Checking Stripe subscription...');
    const subscriptions = await stripe.subscriptions.list({
      customer: user.stripe_customer_id,
      limit: 1,
    });

    if (subscriptions.data.length === 0) {
      console.log('ℹ️  No active subscriptions found');
      return;
    }

    const sub = subscriptions.data[0];
    const amount = sub.items.data[0]?.price?.unit_amount || 0;
    const amountInDollars = amount / 100;
    
    console.log(`   Subscription ID: ${sub.id}`);
    console.log(`   Status: ${sub.status}`);
    console.log(`   Amount: $${amountInDollars}`);
    console.log(`   Cancel at Period End: ${sub.cancel_at_period_end ? 'Yes' : 'No'}`);
    console.log(`   Period End: ${new Date(sub.current_period_end * 1000).toLocaleString()}\n`);

    // Determine correct payment status - use simple "Paid" for all active subscriptions
    let correctPaymentStatus = 'free';
    if (sub.status === 'active' || sub.status === 'trialing') {
      if (amountInDollars > 0) {
        correctPaymentStatus = 'Paid'; // Simple "Paid" status for all active subscriptions
      } else {
        correctPaymentStatus = 'Paid';
      }
    }

    console.log(`📊 Correct payment_status should be: "${correctPaymentStatus}"`);
    console.log(`   (Subscription is ${sub.status} until ${new Date(sub.current_period_end * 1000).toLocaleDateString()})\n`);

    if (user.payment_status === correctPaymentStatus) {
      console.log('✅ Status is already correct!');
      return;
    }

    // 3. Update payment records
    console.log('1️⃣  Updating payment records...');
    const { data: payments, error: paymentsError } = await supabase
      .from('payments')
      .select('*')
      .eq('user_id', user.user_id)
      .order('timestamp', { ascending: false });

    if (paymentsError) {
      console.error(`   ❌ Error: ${paymentsError.message}`);
    } else if (payments && payments.length > 0) {
      // Update the most recent payment record
      const latestPayment = payments[0];
      if (latestPayment.customer_subscription_status !== correctPaymentStatus) {
        const { error: updateError } = await supabase
          .from('payments')
          .update({ customer_subscription_status: correctPaymentStatus })
          .eq('payment_id', latestPayment.payment_id);

        if (updateError) {
          console.error(`   ❌ Error: ${updateError.message}`);
        } else {
          console.log(`   ✅ Updated payment record to "${correctPaymentStatus}"`);
        }
      } else {
        console.log(`   ✅ Payment record already correct`);
      }
    }

    // 4. Update user payment_status
    console.log('\n2️⃣  Updating user payment_status...');
    const { error: userUpdateError } = await supabase
      .from('users')
      .update({
        payment_status: correctPaymentStatus,
        updated_at: new Date().toISOString()
      })
      .eq('user_id', user.user_id);

    if (userUpdateError) {
      console.error(`   ❌ Error: ${userUpdateError.message}`);
    } else {
      console.log(`   ✅ Updated user payment_status to "${correctPaymentStatus}"`);
    }

    // 5. Update user_plans
    console.log('\n3️⃣  Updating user_plans...');
    const { data: userPlans, error: plansError } = await supabase
      .from('user_plans')
      .select('*')
      .eq('user_id', user.user_id);

    if (plansError) {
      console.error(`   ❌ Error fetching plans: ${plansError.message}`);
    } else if (userPlans && userPlans.length > 0) {
      for (const plan of userPlans) {
        const updateData = {
          stripe_subscription_id: sub.id,
          stripe_customer_id: user.stripe_customer_id,
          is_active: (sub.status === 'active' || sub.status === 'trialing'), // Active if subscription is active, regardless of cancel_at_period_end
          start_date: new Date(sub.current_period_start * 1000).toISOString(),
          end_date: new Date(sub.current_period_end * 1000).toISOString(),
          auto_renew: !sub.cancel_at_period_end,
        };

        const { error: planUpdateError } = await supabase
          .from('user_plans')
          .update(updateData)
          .eq('user_plan_id', plan.user_plan_id);

        if (planUpdateError) {
          console.error(`   ❌ Error updating plan ${plan.user_plan_id}: ${planUpdateError.message}`);
        } else {
          console.log(`   ✅ Updated plan ${plan.user_plan_id}`);
          console.log(`      is_active: ${updateData.is_active} (scheduled to cancel: ${sub.cancel_at_period_end})`);
        }
      }
    } else {
      // Create user_plan if it doesn't exist
      const { error: createPlanError } = await supabase
        .from('user_plans')
        .insert({
          user_id: user.user_id,
          stripe_customer_id: user.stripe_customer_id,
          stripe_subscription_id: sub.id,
          is_active: (sub.status === 'active' || sub.status === 'trialing'), // Active if subscription is active, regardless of cancel_at_period_end
          start_date: new Date(sub.current_period_start * 1000).toISOString(),
          end_date: new Date(sub.current_period_end * 1000).toISOString(),
          auto_renew: !sub.cancel_at_period_end,
        });

      if (createPlanError) {
        console.error(`   ❌ Error creating plan: ${createPlanError.message}`);
      } else {
        console.log(`   ✅ Created user_plan record`);
      }
    }

    console.log('\n' + '='.repeat(60));
    console.log('\n✅ Status fixed successfully!\n');
    console.log(`Summary:`);
    console.log(`   - payment_status: "${correctPaymentStatus}" (active until ${new Date(sub.current_period_end * 1000).toLocaleDateString()})`);
    console.log(`   - is_active: ${(sub.status === 'active' || sub.status === 'trialing')} (scheduled to cancel: ${sub.cancel_at_period_end})`);
    console.log(`\nVerification:`);
    console.log(`   Run: node scripts/verify-user-status.js ${email}\n`);

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
}

const email = process.argv[2];

if (!email) {
  console.error('❌ Email is required');
  console.error('   Usage: node scripts/fix-active-subscription-status.js <email>');
  process.exit(1);
}

fixActiveSubscriptionStatus(email).catch((error) => {
  console.error('\n❌ Fatal error:', error);
  process.exit(1);
});

