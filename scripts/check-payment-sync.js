/**
 * Script to check if a Stripe customer is synced with Supabase
 * Usage: node scripts/check-payment-sync.js <email> [stripe_customer_id]
 * 
 * Example: node scripts/check-payment-sync.js adamthewrite@gmail.com cus_Tce6kMvWuLFqF9
 */

require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const { createClient } = require('@supabase/supabase-js')
const Stripe = require('stripe')

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
const stripeSecretKey = process.env.STRIPE_SECRET_KEY

if (!supabaseUrl || !supabaseServiceRoleKey) {
  console.error('❌ Missing Supabase environment variables')
  process.exit(1)
}

if (!stripeSecretKey) {
  console.error('❌ Missing Stripe secret key')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey)
const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2024-12-18.acacia',
})

async function checkPaymentSync(email, stripeCustomerId = null) {
  console.log('\n' + '='.repeat(60))
  console.log('🔍 PAYMENT SYNC VERIFICATION')
  console.log('='.repeat(60))
  console.log(`📧 Email: ${email}`)
  if (stripeCustomerId) {
    console.log(`💳 Stripe Customer ID: ${stripeCustomerId}`)
  }
  console.log('')

  try {
    // Step 1: Check Stripe
    console.log('📡 STEP 1: Checking Stripe...')
    let stripeCustomer = null
    let stripeSubscriptions = []

    if (stripeCustomerId) {
      try {
        stripeCustomer = await stripe.customers.retrieve(stripeCustomerId)
        console.log(`   ✅ Found customer in Stripe`)
        console.log(`      Email: ${stripeCustomer.email || 'N/A'}`)
        console.log(`      Created: ${new Date(stripeCustomer.created * 1000).toLocaleString()}`)
        
        // Get subscriptions
        const subs = await stripe.subscriptions.list({
          customer: stripeCustomerId,
          limit: 10,
        })
        stripeSubscriptions = subs.data
        console.log(`      Active Subscriptions: ${stripeSubscriptions.length}`)
        
        if (stripeSubscriptions.length > 0) {
          stripeSubscriptions.forEach((sub, idx) => {
            const amount = sub.items.data[0]?.price?.unit_amount || 0
            console.log(`      Subscription ${idx + 1}:`)
            console.log(`         ID: ${sub.id}`)
            console.log(`         Status: ${sub.status}`)
            console.log(`         Amount: $${amount / 100}/month`)
            console.log(`         Current Period End: ${new Date(sub.current_period_end * 1000).toLocaleString()}`)
          })
        }
      } catch (error) {
        console.log(`   ⚠️  Could not retrieve customer from Stripe: ${error.message}`)
      }
    } else {
      console.log(`   ⚠️  No Stripe Customer ID provided - skipping Stripe check`)
    }

    // Step 2: Check Supabase Users Table
    console.log('\n📊 STEP 2: Checking Supabase Users Table...')
    const { data: user, error: userError } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .maybeSingle()

    if (userError) {
      console.log(`   ❌ Error querying users table: ${userError.message}`)
    } else if (user) {
      console.log(`   ✅ User found in Supabase`)
      console.log(`      User ID: ${user.user_id}`)
      console.log(`      Email: ${user.email}`)
      console.log(`      Stripe Customer ID: ${user.stripe_customer_id || '❌ NOT SET'}`)
      console.log(`      Payment Status: ${user.payment_status || '❌ NOT SET'}`)
      console.log(`      Status: ${user.status || 'N/A'}`)
      console.log(`      Created: ${user.created_at ? new Date(user.created_at).toLocaleString() : 'N/A'}`)
      
      // Check if Stripe Customer ID matches
      if (stripeCustomerId && user.stripe_customer_id) {
        if (user.stripe_customer_id === stripeCustomerId) {
          console.log(`   ✅ Stripe Customer ID matches!`)
        } else {
          console.log(`   ⚠️  Stripe Customer ID mismatch!`)
          console.log(`      Supabase has: ${user.stripe_customer_id}`)
          console.log(`      Expected: ${stripeCustomerId}`)
        }
      } else if (stripeCustomerId && !user.stripe_customer_id) {
        console.log(`   ⚠️  User exists but Stripe Customer ID is missing!`)
      }
    } else {
      console.log(`   ❌ User NOT found in Supabase`)
      console.log(`      This means the payment sync has NOT happened yet`)
    }

    // Step 3: Check Supabase Payments Table
    console.log('\n💳 STEP 3: Checking Supabase Payments Table...')
    let payments = []
    
    if (user) {
      const { data: payRecords, error: payError } = await supabase
        .from('payments')
        .select('*')
        .eq('user_id', user.user_id)
        .order('timestamp', { ascending: false })

      if (payError) {
        console.log(`   ❌ Error querying payments: ${payError.message}`)
      } else if (payRecords && payRecords.length > 0) {
        payments = payRecords
        console.log(`   ✅ Found ${payments.length} payment record(s)`)
        
        payRecords.forEach((pay, idx) => {
          console.log(`\n   Payment ${idx + 1}:`)
          console.log(`      Payment ID: ${pay.payment_id}`)
          console.log(`      Amount: $${pay.amount}`)
          console.log(`      Status: ${pay.status || '❌ NOT SET'}`)
          console.log(`      Customer Subscription Status: ${pay.customer_subscription_status || '❌ NOT SET'}`)
          console.log(`      Currency: ${pay.currency || 'N/A'}`)
          console.log(`      Provider: ${pay.provider || 'N/A'}`)
          console.log(`      Timestamp: ${pay.timestamp ? new Date(pay.timestamp).toLocaleString() : 'N/A'}`)
        })
      } else {
        console.log(`   ❌ No payment records found`)
        console.log(`      This means the payment was NOT synced to Supabase`)
      }
    } else {
      console.log(`   ⚠️  Cannot check payments - user not found`)
    }

    // Step 4: Check Supabase User Plans Table
    console.log('\n📋 STEP 4: Checking Supabase User Plans Table...')
    let userPlans = []
    
    if (user) {
      const { data: plans, error: planError } = await supabase
        .from('user_plans')
        .select('*')
        .eq('user_id', user.user_id)
        .order('start_date', { ascending: false })

      if (planError) {
        console.log(`   ❌ Error querying user_plans: ${planError.message}`)
      } else if (plans && plans.length > 0) {
        userPlans = plans
        console.log(`   ✅ Found ${userPlans.length} user plan record(s)`)
        
        plans.forEach((plan, idx) => {
          console.log(`\n   User Plan ${idx + 1}:`)
          console.log(`      Plan ID: ${plan.user_plan_id}`)
          console.log(`      Is Active: ${plan.is_active ? '✅ YES' : '❌ NO'}`)
          console.log(`      Auto Renew: ${plan.auto_renew ? '✅ YES' : '❌ NO'}`)
          console.log(`      Start Date: ${plan.start_date ? new Date(plan.start_date).toLocaleString() : 'N/A'}`)
          console.log(`      End Date: ${plan.end_date ? new Date(plan.end_date).toLocaleString() : 'N/A'}`)
          console.log(`      Plan ID (FK): ${plan.plan_id || 'NULL (not mapped yet)'}`)
          console.log(`      Payment Method ID: ${plan.payment_method_id || 'N/A'}`)
        })
      } else {
        console.log(`   ❌ No user plan records found`)
        console.log(`      This means the subscription was NOT synced to Supabase`)
      }
    } else {
      console.log(`   ⚠️  Cannot check user plans - user not found`)
    }

    // Step 5: Summary
    console.log('\n' + '='.repeat(60))
    console.log('📋 SYNC STATUS SUMMARY')
    console.log('='.repeat(60))
    
    const userExists = !!user
    const userHasStripeId = user && user.stripe_customer_id
    const hasPayments = payments.length > 0
    const hasUserPlans = userPlans.length > 0
    const hasActivePlan = userPlans.some(plan => plan.is_active)
    const paymentStatus = user && user.payment_status

    console.log(`User in Supabase: ${userExists ? '✅ YES' : '❌ NO'}`)
    console.log(`Stripe Customer ID synced: ${userHasStripeId ? '✅ YES' : '❌ NO'}`)
    console.log(`Payment Status: ${paymentStatus || '❌ NOT SET'}`)
    console.log(`Payment records exist: ${hasPayments ? '✅ YES' : '❌ NO'}`)
    console.log(`User plan records exist: ${hasUserPlans ? '✅ YES' : '❌ NO'}`)
    console.log(`Active subscription: ${hasActivePlan ? '✅ YES' : '❌ NO'}`)

    // Final verdict
    console.log('\n' + '='.repeat(60))
    if (userExists && userHasStripeId && hasPayments && hasUserPlans) {
      console.log('✅ SYNC STATUS: FULLY SYNCED')
      console.log('   The customer payment is properly synced with Supabase!')
      console.log('   - User record exists ✅')
      console.log('   - Payment record exists ✅')
      console.log('   - User plan record exists ✅')
      if (paymentStatus) {
        console.log(`   - Payment Status: ${paymentStatus} ✅`)
      }
    } else if (userExists && (!hasPayments || !hasUserPlans)) {
      console.log('⚠️  SYNC STATUS: PARTIALLY SYNCED')
      if (!hasPayments) {
        console.log('   ❌ Payment record is missing')
      }
      if (!hasUserPlans) {
        console.log('   ❌ User plan record is missing')
      }
      if (!paymentStatus) {
        console.log('   ❌ Payment status is not set')
      }
      console.log('   You may need to run the backfill script.')
    } else if (!userExists) {
      console.log('❌ SYNC STATUS: NOT SYNCED')
      console.log('   The customer payment has NOT been synced to Supabase.')
      console.log('   You need to run the backfill script to fix this.')
    }
    console.log('='.repeat(60) + '\n')

  } catch (error) {
    console.error('\n❌ Error during verification:', error.message)
    console.error(error)
    process.exit(1)
  }
}

// Parse command line arguments
const args = process.argv.slice(2)
if (args.length < 1) {
  console.log(`
Usage: node scripts/check-payment-sync.js <email> [stripe_customer_id]

Example:
  node scripts/check-payment-sync.js adamthewrite@gmail.com
  node scripts/check-payment-sync.js adamthewrite@gmail.com cus_Tce6kMvWuLFqF9
`)
  process.exit(1)
}

const [email, stripeCustomerId] = args
checkPaymentSync(email, stripeCustomerId)

