#!/usr/bin/env node
/**
 * List recent Stripe customers to find missing payments
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

async function listRecentCustomers() {
  console.log('\n📋 Recent Stripe Customers (Last 10)\n');
  console.log('='.repeat(60));

  try {
    const customers = await stripe.customers.list({
      limit: 10,
    });

    if (customers.data.length === 0) {
      console.log('No customers found');
      return;
    }

    for (const customer of customers.data) {
      console.log(`\n📧 Email: ${customer.email || 'N/A'}`);
      console.log(`   Customer ID: ${customer.id}`);
      console.log(`   Created: ${new Date(customer.created * 1000).toLocaleString()}`);

      // Get subscriptions
      const subscriptions = await stripe.subscriptions.list({
        customer: customer.id,
        limit: 5,
      });

      if (subscriptions.data.length > 0) {
        console.log(`   Subscriptions: ${subscriptions.data.length}`);
        subscriptions.data.forEach((sub, index) => {
          const amount = sub.items.data[0]?.price?.unit_amount || 0;
          const amountInDollars = amount / 100;
          console.log(`      ${index + 1}. ${sub.id} - $${amountInDollars}/month - Status: ${sub.status}`);
        });
      } else {
        console.log(`   ⚠️  No subscriptions found`);
      }
    }

    console.log('\n' + '='.repeat(60));
    console.log('\n💡 To check and sync a specific customer, run:');
    console.log('   node scripts/check-missing-payment.js <email> --sync\n');

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

listRecentCustomers().catch(console.error);




