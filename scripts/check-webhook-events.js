#!/usr/bin/env node
/**
 * Check recent webhook events from Stripe to see if they're being sent
 * and if they're succeeding or failing
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

async function checkWebhookEvents() {
  console.log('\n🔍 Checking Recent Webhook Events\n');
  console.log('='.repeat(60));

  try {
    // Get recent events
    const events = await stripe.events.list({
      limit: 20,
      types: [
        'checkout.session.completed',
        'customer.subscription.created',
        'customer.subscription.updated',
        'customer.subscription.deleted',
        'invoice.payment_succeeded',
      ],
    });

    if (events.data.length === 0) {
      console.log('⚠️  No recent webhook events found');
      return;
    }

    console.log(`Found ${events.data.length} recent events:\n`);

    for (const event of events.data) {
      const timestamp = new Date(event.created * 1000).toLocaleString();
      const request = event.request;
      
      console.log(`📅 ${timestamp}`);
      console.log(`   Type: ${event.type}`);
      console.log(`   ID: ${event.id}`);
      
      if (request) {
        console.log(`   Request ID: ${request.id}`);
        if (request.idempotency_key) {
          console.log(`   Idempotency: ${request.idempotency_key}`);
        }
      } else {
        console.log(`   ⚠️  No request info (event not processed yet)`);
      }

      // Check if it's a checkout.session.completed
      if (event.type === 'checkout.session.completed') {
        const session = event.data.object;
        console.log(`   Email: ${session.customer_email || session.customer_details?.email || 'N/A'}`);
        console.log(`   Customer: ${session.customer || 'N/A'}`);
        console.log(`   Subscription: ${session.subscription || 'N/A'}`);
        console.log(`   Amount: $${(session.amount_total || 0) / 100}`);
      }

      console.log('');
    }

    // Check webhook endpoints
    console.log('\n' + '='.repeat(60));
    console.log('\n📡 Checking Webhook Endpoints\n');

    const endpoints = await stripe.webhookEndpoints.list({ limit: 10 });

    if (endpoints.data.length === 0) {
      console.log('❌ NO WEBHOOK ENDPOINTS CONFIGURED!');
      console.log('\n💡 This is the problem! You need to:');
      console.log('   1. Go to Stripe Dashboard → Developers → Webhooks');
      console.log('   2. Click "Add endpoint"');
      console.log('   3. Set URL to: https://your-domain.com/api/webhooks/stripe');
      console.log('   4. Select events: checkout.session.completed, customer.subscription.*, invoice.payment_*');
      console.log('   5. Copy the signing secret and add to STRIPE_WEBHOOK_SECRET\n');
    } else {
      endpoints.data.forEach((endpoint, index) => {
        console.log(`\nEndpoint ${index + 1}:`);
        console.log(`   URL: ${endpoint.url}`);
        console.log(`   Status: ${endpoint.status === 'enabled' ? '✅ Enabled' : '❌ Disabled'}`);
        console.log(`   Events: ${endpoint.enabled_events.length} event(s)`);
        
        if (endpoint.enabled_events.includes('checkout.session.completed')) {
          console.log(`   ✅ Has checkout.session.completed`);
        } else {
          console.log(`   ❌ MISSING checkout.session.completed event!`);
        }

        // Check recent attempts
        if (endpoint.status === 'enabled') {
          console.log(`   💡 Check recent delivery attempts in Stripe Dashboard`);
        }
      });
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

checkWebhookEvents().catch(console.error);



