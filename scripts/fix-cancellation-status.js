#!/usr/bin/env node
/**
 * Manually fix cancellation status for a user
 * Updates database to reflect canceled subscription status
 * 
 * Usage: node scripts/fix-cancellation-status.js <email>
 */

require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const Stripe = require('stripe');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase credentials');
  process.exit(1);
}

if (!stripeSecretKey) {
  console.error('❌ Missing Stripe credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);
const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2024-12-18.acacia',
});

async function fixCancellationStatus(email) {
  console.log('\n🔧 Fixing Cancellation Status\n');
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

    // 2. Check Stripe subscription status
    if (!user.stripe_customer_id) {
      console.error('❌ User has no stripe_customer_id');
      process.exit(1);
    }

    console.log(`\n📡 Checking Stripe subscription...`);
    const subscriptions = await stripe.subscriptions.list({
      customer: user.stripe_customer_id,
      limit: 1,
    });

    if (subscriptions.data.length === 0) {
      console.log('ℹ️  No active subscriptions found');
    } else {
      const sub = subscriptions.data[0];
      console.log(`   Subscription ID: ${sub.id}`);
      console.log(`   Status: ${sub.status}`);
      console.log(`   Cancel at Period End: ${sub.cancel_at_period_end ? 'Yes' : 'No'}`);
      
      const isCanceled = sub.status === 'canceled' || 
                        sub.status === 'unpaid' || 
                        sub.status === 'past_due' ||
                        sub.cancel_at_period_end === true;

      if (!isCanceled) {
        console.log('\n⚠️  Subscription is not canceled. Nothing to fix.');
        return;
      }

      console.log(`\n✅ Subscription is canceled/scheduled to cancel. Updating database...\n`);

      // 3. Update payment records
      console.log('1️⃣  Updating payment records...');
      const { data: updatedPayments, error: paymentsError } = await supabase
        .from('payments')
        .update({ customer_subscription_status: 'free' })
        .eq('user_id', user.user_id)
        .neq('customer_subscription_status', 'free')
        .select();

      if (paymentsError) {
        console.error(`   ❌ Error: ${paymentsError.message}`);
      } else {
        console.log(`   ✅ Updated ${updatedPayments?.length || 0} payment record(s) to 'free'`);
      }

      // 4. Update user payment_status
      console.log('\n2️⃣  Updating user payment_status...');
      const { error: userUpdateError } = await supabase
        .from('users')
        .update({
          payment_status: 'free',
          updated_at: new Date().toISOString()
        })
        .eq('user_id', user.user_id);

      if (userUpdateError) {
        console.error(`   ❌ Error: ${userUpdateError.message}`);
      } else {
        console.log(`   ✅ Updated user payment_status to 'free'`);
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
            status: sub.status === 'canceled' ? 'canceled' : plan.status,
            is_active: false,
            stripe_subscription_id: sub.id,
            stripe_customer_id: user.stripe_customer_id,
            auto_renew: !sub.cancel_at_period_end, // Use auto_renew instead of cancel_at_period_end
          };

          const { error: planUpdateError } = await supabase
            .from('user_plans')
            .update(updateData)
            .eq('user_plan_id', plan.user_plan_id);

          if (planUpdateError) {
            console.error(`   ❌ Error updating plan ${plan.user_plan_id}: ${planUpdateError.message}`);
          } else {
            console.log(`   ✅ Updated plan ${plan.user_plan_id}`);
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
            status: sub.status,
            is_active: false,
            start_date: new Date(sub.current_period_start * 1000).toISOString(),
            end_date: new Date(sub.current_period_end * 1000).toISOString(),
            auto_renew: !sub.cancel_at_period_end, // Use auto_renew instead of cancel_at_period_end
          });

        if (createPlanError) {
          console.error(`   ❌ Error creating plan: ${createPlanError.message}`);
        } else {
          console.log(`   ✅ Created user_plan record`);
        }
      }

      console.log('\n' + '='.repeat(60));
      console.log('\n✅ Status fixed successfully!\n');
      console.log('Verification:');
      console.log(`   Run: node scripts/verify-user-status.js ${email}\n`);
    }

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
}

const email = process.argv[2];

if (!email) {
  console.error('❌ Email is required');
  console.error('   Usage: node scripts/fix-cancellation-status.js <email>');
  process.exit(1);
}

fixCancellationStatus(email).catch((error) => {
  console.error('\n❌ Fatal error:', error);
  process.exit(1);
});

