#!/usr/bin/env node
/**
 * Script to test Stripe webhook integration
 * Verifies environment variables and can simulate webhook events
 * 
 * Usage: node scripts/test-stripe-webhook.js [email]
 */

require('dotenv').config({ path: '.env.local' });
const Stripe = require('stripe');

// Check environment variables
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

console.log('\n🔍 Stripe Webhook Integration Test\n');
console.log('=' .repeat(50));

// Check Stripe keys
console.log('\n📋 Environment Variables:');
console.log(`  STRIPE_SECRET_KEY: ${stripeSecretKey ? '✅ Set (' + stripeSecretKey.substring(0, 12) + '...)' : '❌ Missing'}`);
console.log(`  STRIPE_WEBHOOK_SECRET: ${webhookSecret ? '✅ Set (' + webhookSecret.substring(0, 12) + '...)' : '❌ Missing'}`);
console.log(`  NEXT_PUBLIC_SUPABASE_URL: ${supabaseUrl ? '✅ Set' : '❌ Missing'}`);
console.log(`  SUPABASE_SERVICE_ROLE_KEY: ${supabaseServiceKey ? '✅ Set' : '❌ Missing'}`);

if (!stripeSecretKey) {
  console.error('\n❌ Error: STRIPE_SECRET_KEY is required');
  console.error('   Add it to your .env.local file');
  process.exit(1);
}

// Initialize Stripe
const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2024-12-18.acacia',
});

// Test Stripe connection
async function testStripeConnection() {
  console.log('\n🔌 Testing Stripe Connection...');
  try {
    const account = await stripe.account.retrieve();
    console.log(`  ✅ Connected to Stripe`);
    console.log(`     Account: ${account.id}`);
    console.log(`     Mode: ${account.livemode ? '🔴 LIVE' : '🟢 TEST'}`);
    return true;
  } catch (error) {
    console.error(`  ❌ Failed to connect: ${error.message}`);
    return false;
  }
}

// Check if customer exists
async function checkCustomer(email) {
  if (!email) {
    console.log('\n💡 Tip: Pass an email to check customer status');
    console.log('   Usage: node scripts/test-stripe-webhook.js adam@test.com');
    return;
  }

  console.log(`\n👤 Checking Customer: ${email}`);
  try {
    const customers = await stripe.customers.list({
      email: email,
      limit: 1,
    });

    if (customers.data.length === 0) {
      console.log(`  ⚠️  No customer found with email: ${email}`);
      return null;
    }

    const customer = customers.data[0];
    console.log(`  ✅ Customer found: ${customer.id}`);
    console.log(`     Created: ${new Date(customer.created * 1000).toLocaleString()}`);

    // Check subscriptions
    const subscriptions = await stripe.subscriptions.list({
      customer: customer.id,
      limit: 10,
    });

    if (subscriptions.data.length === 0) {
      console.log(`  ℹ️  No active subscriptions`);
    } else {
      console.log(`  📦 Subscriptions (${subscriptions.data.length}):`);
      subscriptions.data.forEach((sub, index) => {
        const amount = sub.items.data[0]?.price?.unit_amount || 0;
        const amountInDollars = amount / 100;
        console.log(`     ${index + 1}. ${sub.id}`);
        console.log(`        Status: ${sub.status}`);
        console.log(`        Amount: $${amountInDollars}`);
        console.log(`        Period: ${new Date(sub.current_period_start * 1000).toLocaleDateString()} - ${new Date(sub.current_period_end * 1000).toLocaleDateString()}`);
        console.log(`        Cancel at period end: ${sub.cancel_at_period_end ? 'Yes' : 'No'}`);
      });
    }

    return customer;
  } catch (error) {
    console.error(`  ❌ Error checking customer: ${error.message}`);
    return null;
  }
}

// Check webhook endpoint
async function checkWebhookEndpoints() {
  console.log('\n🔗 Checking Webhook Endpoints...');
  try {
    const endpoints = await stripe.webhookEndpoints.list({ limit: 10 });
    
    if (endpoints.data.length === 0) {
      console.log('  ⚠️  No webhook endpoints configured');
      console.log('  💡 Create one at: https://dashboard.stripe.com/test/webhooks');
      return;
    }

    console.log(`  Found ${endpoints.data.length} endpoint(s):`);
    endpoints.data.forEach((endpoint, index) => {
      console.log(`\n     ${index + 1}. ${endpoint.url}`);
      console.log(`        Status: ${endpoint.status === 'enabled' ? '✅ Enabled' : '❌ Disabled'}`);
      console.log(`        Events: ${endpoint.enabled_events.length} event(s)`);
      if (endpoint.enabled_events.length > 0) {
        console.log(`        ${endpoint.enabled_events.slice(0, 3).join(', ')}${endpoint.enabled_events.length > 3 ? '...' : ''}`);
      }
    });
  } catch (error) {
    console.error(`  ❌ Error checking webhooks: ${error.message}`);
  }
}

// Main function
async function main() {
  const email = process.argv[2];

  const connected = await testStripeConnection();
  if (!connected) {
    process.exit(1);
  }

  await checkWebhookEndpoints();
  
  if (email) {
    await checkCustomer(email);
  }

  console.log('\n' + '='.repeat(50));
  console.log('\n✅ Test complete!\n');
  console.log('Next steps:');
  console.log('  1. Ensure webhook endpoint is configured');
  console.log('  2. Test a payment with a test card (4242 4242 4242 4242)');
  console.log('  3. Verify webhook events are received');
  console.log('  4. Check Supabase for updated records\n');
}

main().catch((error) => {
  console.error('\n❌ Fatal error:', error);
  process.exit(1);
});

