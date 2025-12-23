#!/usr/bin/env node
/**
 * Verify that STRIPE_SECRET_KEY and SUPABASE_SERVICE_ROLE_KEY are correct
 * 
 * Usage: node scripts/verify-credentials.js
 */

require('dotenv').config({ path: '.env.local' });
const Stripe = require('stripe');
const { createClient } = require('@supabase/supabase-js');

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

console.log('\n🔐 Credential Verification\n');
console.log('='.repeat(60));

// Check if variables are set
console.log('\n📋 Environment Variables:');
console.log(`  STRIPE_SECRET_KEY: ${stripeSecretKey ? '✅ Set (' + stripeSecretKey.substring(0, 12) + '...)' : '❌ Missing'}`);
console.log(`  NEXT_PUBLIC_SUPABASE_URL: ${supabaseUrl ? '✅ Set (' + supabaseUrl + ')' : '❌ Missing'}`);
console.log(`  SUPABASE_SERVICE_ROLE_KEY: ${supabaseServiceKey ? '✅ Set (' + supabaseServiceKey.substring(0, 12) + '...)' : '❌ Missing'}`);

if (!stripeSecretKey || !supabaseUrl || !supabaseServiceKey) {
  console.error('\n❌ Missing required environment variables');
  console.error('   Make sure all variables are set in .env.local or Heroku config vars');
  process.exit(1);
}

// Test Stripe Connection
async function testStripe() {
  console.log('\n💳 Testing Stripe Connection...');
  try {
    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: '2024-12-18.acacia',
    });
    
    const account = await stripe.account.retrieve();
    
    console.log('  ✅ Stripe connection successful!');
    console.log(`     Account ID: ${account.id}`);
    console.log(`     Mode: ${account.livemode ? '🔴 LIVE' : '🟢 TEST'}`);
    console.log(`     Country: ${account.country || 'N/A'}`);
    console.log(`     Email: ${account.email || 'N/A'}`);
    
    // Verify key type matches mode
    const isTestKey = stripeSecretKey.startsWith('sk_test_');
    const isLiveKey = stripeSecretKey.startsWith('sk_live_');
    
    if (isTestKey && account.livemode) {
      console.log('  ⚠️  WARNING: Using test key (sk_test_...) but account is in LIVE mode');
      console.log('     This is unusual - check your Stripe key');
    } else if (isLiveKey && !account.livemode) {
      console.log('  ⚠️  WARNING: Using live key (sk_live_...) but account is in TEST mode');
      console.log('     This is unusual - check your Stripe key');
    } else {
      console.log('  ✅ Key type matches account mode');
    }
    
    return true;
  } catch (error) {
    console.error('  ❌ Stripe connection failed!');
    console.error(`     Error: ${error.message}`);
    
    if (error.type === 'StripeAuthenticationError') {
      console.error('     💡 This means your STRIPE_SECRET_KEY is invalid or incorrect');
    } else if (error.type === 'StripeAPIError') {
      console.error('     💡 This might be a temporary API issue, try again');
    }
    
    return false;
  }
}

// Test Supabase Connection
async function testSupabase() {
  console.log('\n🗄️  Testing Supabase Connection...');
  try {
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    
    // Try a simple query to verify the service role key works
    // We'll query the users table (should work with service role key)
    const { data, error } = await supabase
      .from('users')
      .select('user_id')
      .limit(1);
    
    if (error) {
      // Check if it's a permissions error
      if (error.code === 'PGRST301' || error.message.includes('permission') || error.message.includes('policy')) {
        console.error('  ❌ Supabase connection failed - Permission denied');
        console.error(`     Error: ${error.message}`);
        console.error('     💡 This might mean your SUPABASE_SERVICE_ROLE_KEY is incorrect');
        console.error('     💡 Or the service role key doesn\'t have the right permissions');
        return false;
      } else if (error.code === 'PGRST116') {
        // No rows found - this is actually OK, it means the connection works
        console.log('  ✅ Supabase connection successful!');
        console.log('     (No users found, but connection works)');
        return true;
      } else {
        throw error;
      }
    }
    
    console.log('  ✅ Supabase connection successful!');
    console.log(`     URL: ${supabaseUrl}`);
    console.log(`     Service role key is valid`);
    console.log(`     Can query database tables`);
    
    // Verify the key format
    if (supabaseServiceKey.length < 100) {
      console.log('  ⚠️  WARNING: Service role key seems short');
      console.log('     💡 Service role keys are usually long (100+ characters)');
    } else {
      console.log('  ✅ Service role key format looks correct');
    }
    
    return true;
  } catch (error) {
    console.error('  ❌ Supabase connection failed!');
    console.error(`     Error: ${error.message}`);
    
    if (error.message.includes('Invalid API key')) {
      console.error('     💡 This means your SUPABASE_SERVICE_ROLE_KEY is invalid');
    } else if (error.message.includes('Failed to fetch') || error.message.includes('ENOTFOUND')) {
      console.error('     💡 This means your NEXT_PUBLIC_SUPABASE_URL might be incorrect');
      console.error(`     💡 Check that the URL is correct: ${supabaseUrl}`);
    }
    
    return false;
  }
}

// Main function
async function main() {
  const stripeOk = await testStripe();
  const supabaseOk = await testSupabase();
  
  console.log('\n' + '='.repeat(60));
  console.log('\n📊 Verification Summary\n');
  
  if (stripeOk && supabaseOk) {
    console.log('✅ All credentials are valid!');
    console.log('   - Stripe key: ✅ Working');
    console.log('   - Supabase key: ✅ Working');
    console.log('\n💡 Your credentials are correctly configured.');
  } else {
    console.log('❌ Some credentials failed verification:');
    if (!stripeOk) {
      console.log('   - Stripe key: ❌ Failed');
    } else {
      console.log('   - Stripe key: ✅ Working');
    }
    if (!supabaseOk) {
      console.log('   - Supabase key: ❌ Failed');
    } else {
      console.log('   - Supabase key: ✅ Working');
    }
    console.log('\n💡 Fix the issues above and run this script again.');
    process.exit(1);
  }
  
  console.log('');
}

main().catch((error) => {
  console.error('\n❌ Fatal error:', error);
  process.exit(1);
});

