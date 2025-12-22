#!/usr/bin/env node
/**
 * Comprehensive check of webhook setup and potential issues
 */

require('dotenv').config({ path: '.env.local' });
const Stripe = require('stripe');

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

console.log('\n🔍 Comprehensive Webhook Setup Check\n');
console.log('='.repeat(60));

// 1. Check environment variables
console.log('\n1️⃣  Environment Variables:');
const envIssues = [];

if (!stripeSecretKey) {
  envIssues.push('❌ STRIPE_SECRET_KEY is missing');
} else {
  console.log(`   ✅ STRIPE_SECRET_KEY: Set (${stripeSecretKey.substring(0, 12)}...)`);
}

if (!webhookSecret) {
  envIssues.push('❌ STRIPE_WEBHOOK_SECRET is missing');
} else {
  console.log(`   ✅ STRIPE_WEBHOOK_SECRET: Set (${webhookSecret.substring(0, 12)}...)`);
}

if (!supabaseUrl) {
  envIssues.push('❌ NEXT_PUBLIC_SUPABASE_URL is missing');
} else {
  console.log(`   ✅ NEXT_PUBLIC_SUPABASE_URL: Set`);
}

if (!supabaseServiceKey) {
  envIssues.push('❌ SUPABASE_SERVICE_ROLE_KEY is missing (required for webhook handler)');
} else {
  console.log(`   ✅ SUPABASE_SERVICE_ROLE_KEY: Set`);
}

if (envIssues.length > 0) {
  console.log('\n   ⚠️  Issues found:');
  envIssues.forEach(issue => console.log(`   ${issue}`));
}

// 2. Check Stripe connection
console.log('\n2️⃣  Stripe Connection:');
if (!stripeSecretKey) {
  console.log('   ⚠️  Cannot test - STRIPE_SECRET_KEY missing');
} else {
  try {
    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: '2024-12-18.acacia',
    });
    const account = await stripe.account.retrieve();
    console.log(`   ✅ Connected to Stripe`);
    console.log(`      Mode: ${account.livemode ? '🔴 LIVE' : '🟢 TEST'}`);
  } catch (error) {
    console.log(`   ❌ Connection failed: ${error.message}`);
  }
}

// 3. Check webhook endpoints
console.log('\n3️⃣  Webhook Endpoints:');
if (!stripeSecretKey) {
  console.log('   ⚠️  Cannot check - STRIPE_SECRET_KEY missing');
} else {
  try {
    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: '2024-12-18.acacia',
    });
    const endpoints = await stripe.webhookEndpoints.list({ limit: 10 });
    
    if (endpoints.data.length === 0) {
      console.log('   ❌ NO WEBHOOK ENDPOINTS CONFIGURED!');
      console.log('   💡 This is a critical issue - webhooks won\'t work');
    } else {
      let hasCorrectEndpoint = false;
      let hasCheckoutEvent = false;
      
      endpoints.data.forEach((endpoint, index) => {
        console.log(`\n   Endpoint ${index + 1}:`);
        console.log(`      URL: ${endpoint.url}`);
        console.log(`      Status: ${endpoint.status === 'enabled' ? '✅ Enabled' : '❌ Disabled'}`);
        
        // Check if it's pointing to the right place
        if (endpoint.url.includes('/api/webhooks/stripe')) {
          hasCorrectEndpoint = true;
          console.log(`      ✅ Points to correct API endpoint`);
        } else if (endpoint.url.includes('hooks.slack.com')) {
          console.log(`      ❌ Points to SLACK (wrong!)`);
        } else {
          console.log(`      ⚠️  Unknown endpoint URL`);
        }
        
        // Check events
        if (endpoint.enabled_events.includes('checkout.session.completed')) {
          hasCheckoutEvent = true;
          console.log(`      ✅ Has checkout.session.completed event`);
        } else {
          console.log(`      ❌ MISSING checkout.session.completed event!`);
        }
        
        console.log(`      Total events: ${endpoint.enabled_events.length}`);
      });
      
      if (!hasCorrectEndpoint) {
        console.log('\n   ❌ CRITICAL: No endpoint pointing to /api/webhooks/stripe');
        console.log('   💡 You need to add a webhook endpoint with your API URL');
      }
      
      if (!hasCheckoutEvent) {
        console.log('\n   ❌ CRITICAL: No endpoint has checkout.session.completed event');
        console.log('   💡 Payments won\'t sync without this event');
      }
    }
  } catch (error) {
    console.log(`   ❌ Error checking endpoints: ${error.message}`);
  }
}

// 4. Check recent webhook delivery attempts
console.log('\n4️⃣  Recent Webhook Delivery Status:');
console.log('   💡 Check Stripe Dashboard → Webhooks → Recent attempts');
console.log('   💡 Look for failed deliveries (red X marks)');
console.log('   💡 Common failure reasons:');
console.log('      - 404: Endpoint URL is wrong');
console.log('      - 401: Webhook secret mismatch');
console.log('      - 500: Server error in webhook handler');
console.log('      - Timeout: Server not responding');

// 5. Check webhook handler code
console.log('\n5️⃣  Webhook Handler Code:');
const fs = require('fs');
const path = require('path');
const handlerPath = path.join(process.cwd(), 'pages/api/webhooks/stripe.js');

if (fs.existsSync(handlerPath)) {
  const handlerCode = fs.readFileSync(handlerPath, 'utf8');
  
  if (handlerCode.includes('checkout.session.completed')) {
    console.log('   ✅ Handler has checkout.session.completed case');
  } else {
    console.log('   ❌ Handler missing checkout.session.completed case');
  }
  
  if (handlerCode.includes('STRIPE_WEBHOOK_SECRET')) {
    console.log('   ✅ Handler uses webhook secret for verification');
  } else {
    console.log('   ❌ Handler not verifying webhook signature (security risk!)');
  }
  
  if (handlerCode.includes('res.status(200)')) {
    console.log('   ✅ Handler returns 200 on success');
  } else {
    console.log('   ⚠️  Handler might not return proper status codes');
  }
} else {
  console.log('   ❌ Webhook handler file not found!');
}

// 6. Summary
console.log('\n' + '='.repeat(60));
console.log('\n📊 SUMMARY\n');

const criticalIssues = [];
if (!stripeSecretKey) criticalIssues.push('Missing STRIPE_SECRET_KEY');
if (!webhookSecret) criticalIssues.push('Missing STRIPE_WEBHOOK_SECRET');
if (!supabaseServiceKey) criticalIssues.push('Missing SUPABASE_SERVICE_ROLE_KEY');

if (criticalIssues.length > 0) {
  console.log('❌ CRITICAL ISSUES:');
  criticalIssues.forEach(issue => console.log(`   - ${issue}`));
  console.log('\n💡 Fix these first before webhooks can work\n');
} else {
  console.log('✅ Environment variables are set');
  console.log('\n💡 Next steps:');
  console.log('   1. Verify webhook endpoint URL is correct (not Slack!)');
  console.log('   2. Check Stripe Dashboard for failed webhook deliveries');
  console.log('   3. Test with a small payment and monitor logs');
  console.log('   4. If still failing, check server logs for errors\n');
}



