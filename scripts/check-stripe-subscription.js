#!/usr/bin/env node
/**
 * Check Stripe subscription status for a customer
 * 
 * Usage: node scripts/check-stripe-subscription.js <email>
 */

require('dotenv').config({ path: '.env.local' });
const Stripe = require('stripe');

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  console.error('❌ Missing STRIPE_SECRET_KEY');
  process.exit(1);
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2024-12-18.acacia',
});

async function checkSubscription(email) {
  console.log('\n🔍 Checking Stripe Subscription Status\n');
  console.log('='.repeat(60));
  console.log(`📧 Email: ${email}\n`);

  try {
    // Find customer
    const customers = await stripe.customers.list({
      email: email,
      limit: 1,
    });

    if (customers.data.length === 0) {
      console.log('❌ Customer not found in Stripe');
      return;
    }

    const customer = customers.data[0];
    console.log(`✅ Customer found: ${customer.id}`);
    console.log(`   Created: ${new Date(customer.created * 1000).toLocaleString()}\n`);

    // Get subscriptions
    const subscriptions = await stripe.subscriptions.list({
      customer: customer.id,
      limit: 10,
    });

    if (subscriptions.data.length === 0) {
      console.log('ℹ️  No subscriptions found');
      return;
    }

    console.log(`📦 Found ${subscriptions.data.length} subscription(s):\n`);

    subscriptions.data.forEach((sub, index) => {
      const amount = sub.items.data[0]?.price?.unit_amount || 0;
      const amountInDollars = amount / 100;
      
      console.log(`Subscription ${index + 1}:`);
      console.log(`   ID: ${sub.id}`);
      console.log(`   Status: ${sub.status}`);
      console.log(`   Amount: $${amountInDollars}`);
      console.log(`   Cancel at Period End: ${sub.cancel_at_period_end ? '✅ Yes' : '❌ No'}`);
      console.log(`   Canceled At: ${sub.canceled_at ? new Date(sub.canceled_at * 1000).toLocaleString() : 'N/A'}`);
      console.log(`   Current Period: ${new Date(sub.current_period_start * 1000).toLocaleDateString()} - ${new Date(sub.current_period_end * 1000).toLocaleDateString()}`);
      
      if (sub.status === 'canceled' || sub.cancel_at_period_end) {
        console.log(`   ⚠️  Subscription is canceled or scheduled to cancel`);
      }
      console.log('');
    });

    // Check webhook events
    console.log('\n📡 Recent Webhook Events (last 10):\n');
    const events = await stripe.events.list({
      limit: 10,
      types: [
        'checkout.session.completed',
        'customer.subscription.updated',
        'customer.subscription.deleted',
        'invoice.payment_succeeded',
      ],
    });

    const relevantEvents = events.data.filter(e => {
      if (e.type === 'checkout.session.completed') {
        return e.data.object.customer === customer.id;
      }
      if (e.type === 'customer.subscription.updated' || e.type === 'customer.subscription.deleted') {
        return e.data.object.customer === customer.id;
      }
      if (e.type === 'invoice.payment_succeeded') {
        return e.data.object.customer === customer.id;
      }
      return false;
    });

    if (relevantEvents.length === 0) {
      console.log('   ⚠️  No relevant webhook events found');
    } else {
      relevantEvents.slice(0, 5).forEach((event, index) => {
        console.log(`   ${index + 1}. ${event.type}`);
        console.log(`      Time: ${new Date(event.created * 1000).toLocaleString()}`);
        console.log(`      ID: ${event.id}`);
        console.log(`      Status: ${event.request ? '✅ Processed' : '❌ Not processed'}`);
        console.log('');
      });
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

const email = process.argv[2];

if (!email) {
  console.error('❌ Email is required');
  console.error('   Usage: node scripts/check-stripe-subscription.js <email>');
  process.exit(1);
}

checkSubscription(email).catch((error) => {
  console.error('\n❌ Fatal error:', error);
  process.exit(1);
});

