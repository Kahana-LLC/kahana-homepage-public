#!/usr/bin/env node
/**
 * Check if a payment exists in Stripe but not in Supabase
 * Can also manually sync a payment if needed
 * 
 * Usage: 
 *   node scripts/check-missing-payment.js <email>
 *   node scripts/check-missing-payment.js <email> --sync
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

async function checkMissingPayment(email, shouldSync = false) {
  console.log('\n🔍 Checking Payment Sync\n');
  console.log('='.repeat(60));
  console.log(`📧 Email: ${email}\n`);

  try {
    // 1. Check Supabase
    console.log('1️⃣  Checking Supabase...');
    const { data: user, error: userError } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single();

    if (userError && userError.code !== 'PGRST116') {
      throw userError;
    }

    if (!user) {
      console.log('   ⚠️  User not found in Supabase');
    } else {
      console.log(`   ✅ User found: ${user.user_id}`);
      console.log(`      payment_status: ${user.payment_status || 'NOT SET'}`);
      console.log(`      stripe_customer_id: ${user.stripe_customer_id || 'NOT SET'}`);
    }

    // 2. Check Stripe
    console.log('\n2️⃣  Checking Stripe...');
    const customers = await stripe.customers.list({
      email: email,
      limit: 10,
    });

    if (customers.data.length === 0) {
      console.log('   ⚠️  No customer found in Stripe with this email');
      return;
    }

    console.log(`   ✅ Found ${customers.data.length} customer(s) in Stripe\n`);

    for (const customer of customers.data) {
      console.log(`   Customer: ${customer.id}`);
      console.log(`   Created: ${new Date(customer.created * 1000).toLocaleString()}`);

      // Get subscriptions
      const subscriptions = await stripe.subscriptions.list({
        customer: customer.id,
        limit: 10,
      });

      console.log(`   Subscriptions: ${subscriptions.data.length}\n`);

      if (subscriptions.data.length === 0) {
        console.log('   ⚠️  No subscriptions found for this customer\n');
        continue;
      }

      for (const sub of subscriptions.data) {
        const amount = sub.items.data[0]?.price?.unit_amount || 0;
        const amountInDollars = amount / 100;

        console.log(`   📦 Subscription: ${sub.id}`);
        console.log(`      Status: ${sub.status}`);
        console.log(`      Amount: $${amountInDollars}`);
        console.log(`      Created: ${new Date(sub.created * 1000).toLocaleString()}`);
        console.log(`      Period: ${new Date(sub.current_period_start * 1000).toLocaleDateString()} - ${new Date(sub.current_period_end * 1000).toLocaleDateString()}\n`);

        // Check if this subscription exists in Supabase
        if (user) {
          const { data: userPlans } = await supabase
            .from('user_plans')
            .select('*')
            .eq('stripe_subscription_id', sub.id)
            .maybeSingle();

          if (!userPlans) {
            console.log(`   ⚠️  Subscription ${sub.id} NOT found in Supabase user_plans`);
            
            if (shouldSync) {
              console.log(`   🔄 Syncing subscription to Supabase...`);
              await syncSubscription(user, customer, sub);
            }
          } else {
            console.log(`   ✅ Subscription found in Supabase (user_plan_id: ${userPlans.user_plan_id})`);
          }

          // Check payments
          const { data: payments } = await supabase
            .from('payments')
            .select('*')
            .eq('user_id', user.user_id)
            .order('timestamp', { ascending: false });

          if (!payments || payments.length === 0) {
            console.log(`   ⚠️  No payment records found in Supabase`);
            
            if (shouldSync) {
              console.log(`   🔄 Creating payment record...`);
              await syncPayment(user, sub, amountInDollars);
            }
          } else {
            console.log(`   ✅ Found ${payments.length} payment record(s) in Supabase`);
          }
        } else if (shouldSync) {
          console.log(`   🔄 User doesn't exist - creating user and syncing...`);
          await createUserAndSync(customer, sub, amountInDollars);
        }
      }
    }

    if (shouldSync) {
      console.log('\n' + '='.repeat(60));
      console.log('\n✅ Sync complete!\n');
    } else {
      console.log('\n' + '='.repeat(60));
      console.log('\n💡 To sync missing data, run:');
      console.log(`   node scripts/check-missing-payment.js ${email} --sync\n`);
    }

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    if (error.stack) {
      console.error(error.stack);
    }
    process.exit(1);
  }
}

async function createUserAndSync(customer, subscription, amount) {
  const { createServiceClient, getOrCreateUser, createPayment, upsertUserPlan } = require('../utils/supabase');
  const supabase = createServiceClient();

  // Create user
  const user = await getOrCreateUser(customer.email, {
    stripe_customer_id: customer.id,
    payment_status: 'Paid',
  });

  console.log(`   ✅ Created user: ${user.user_id}`);

  // Create payment
  await createPayment({
    user_id: user.user_id,
    amount: amount,
    currency: 'usd',
    status: 'success',
    provider: 'stripe',
    timestamp: new Date(subscription.created * 1000).toISOString(),
    customer_subscription_status: 'Paid',
  });

  console.log(`   ✅ Created payment record`);

  // Create user plan
  await upsertUserPlan({
    user_id: user.user_id,
    stripe_customer_id: customer.id,
    stripe_subscription_id: subscription.id,
    status: subscription.status,
    current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
    current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
    cancel_at_period_end: subscription.cancel_at_period_end || false,
  });

  console.log(`   ✅ Created user plan`);
}

async function syncSubscription(user, customer, subscription) {
  const { createServiceClient, upsertUserPlan } = require('../utils/supabase');
  const supabase = createServiceClient();

  await upsertUserPlan({
    user_id: user.user_id,
    stripe_customer_id: customer.id,
    stripe_subscription_id: subscription.id,
    status: subscription.status,
    current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
    current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
    cancel_at_period_end: subscription.cancel_at_period_end || false,
  });

  // Update user stripe_customer_id if not set
  if (!user.stripe_customer_id) {
    await supabase
      .from('users')
      .update({ stripe_customer_id: customer.id })
      .eq('user_id', user.user_id);
  }
}

async function syncPayment(user, subscription, amount) {
  const { createServiceClient, createPayment } = require('../utils/supabase');

  await createPayment({
    user_id: user.user_id,
    amount: amount,
    currency: 'usd',
    status: 'success',
    provider: 'stripe',
    timestamp: new Date(subscription.created * 1000).toISOString(),
    customer_subscription_status: 'Paid',
  });
}

const email = process.argv[2];
const shouldSync = process.argv[3] === '--sync';

if (!email) {
  console.error('❌ Email is required');
  console.error('   Usage: node scripts/check-missing-payment.js <email> [--sync]');
  process.exit(1);
}

checkMissingPayment(email, shouldSync).catch((error) => {
  console.error('\n❌ Fatal error:', error);
  process.exit(1);
});




