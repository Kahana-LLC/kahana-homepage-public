/**
 * Script to manually backfill a payment for a user in Supabase
 * Usage: node scripts/backfill-payment.js <email> <amount> [stripe_customer_id] [stripe_subscription_id]
 * 
 * Example: node scripts/backfill-payment.js adamthewrite@gmail.com 1
 */

require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const { createClient } = require('@supabase/supabase-js')
const Stripe = require('stripe')

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
const stripeSecretKey = process.env.STRIPE_SECRET_KEY

if (!supabaseUrl || !supabaseServiceRoleKey) {
  console.error('❌ Missing Supabase environment variables')
  console.error('Required: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY')
  process.exit(1)
}

if (!stripeSecretKey) {
  console.error('❌ Missing Stripe secret key: STRIPE_SECRET_KEY')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey)
const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2024-12-18.acacia',
})

async function getOrCreateUser(email, userData = {}) {
  // Find existing user by email
  const { data: existingUser, error: findError } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)
    .single()
  
  if (existingUser) {
    if (Object.keys(userData).length > 0) {
      const { data: updatedUser, error: updateError } = await supabase
        .from('users')
        .update({ ...userData, updated_at: new Date().toISOString() })
        .eq('user_id', existingUser.user_id)
        .select()
        .single()
      
      if (updateError) throw updateError
      return updatedUser
    }
    return existingUser
  }
  
  // Create new user
  const { data: newUser, error: createError } = await supabase
    .from('users')
    .insert({
      email,
      password_hash: '', // Required field
      status: 'active',
      ...userData,
    })
    .select()
    .single()
  
  if (createError) throw createError
  return newUser
}

// Removed upsertSubscription - now using payments and user_plans tables directly

async function backfillPayment(email, amount, stripeCustomerId = null, stripeSubscriptionId = null) {
  try {
    console.log(`\n🔍 Looking up payment for: ${email}`)
    console.log(`💰 Amount: $${amount}`)
    
    // If Stripe customer ID provided, fetch from Stripe
    if (stripeCustomerId) {
      console.log(`\n📡 Fetching customer data from Stripe...`)
      try {
        const customer = await stripe.customers.retrieve(stripeCustomerId)
        console.log(`✅ Found Stripe customer: ${customer.email || customer.id}`)
        
        // Get subscriptions for this customer
        const subscriptions = await stripe.subscriptions.list({
          customer: stripeCustomerId,
          limit: 10,
        })
        
        if (subscriptions.data.length > 0) {
          const latestSub = subscriptions.data[0]
          stripeSubscriptionId = latestSub.id
          console.log(`✅ Found subscription: ${latestSub.id}`)
          console.log(`   Status: ${latestSub.status}`)
          console.log(`   Amount: $${(latestSub.items.data[0]?.price?.unit_amount || 0) / 100}/month`)
        }
      } catch (error) {
        console.warn(`⚠️  Could not fetch from Stripe: ${error.message}`)
      }
    }
    
    // If subscription ID provided, fetch from Stripe
    if (stripeSubscriptionId && !stripeCustomerId) {
      console.log(`\n📡 Fetching subscription data from Stripe...`)
      try {
        const subscription = await stripe.subscriptions.retrieve(stripeSubscriptionId)
        stripeCustomerId = subscription.customer
        console.log(`✅ Found subscription: ${subscription.id}`)
        console.log(`   Customer: ${subscription.customer}`)
        console.log(`   Status: ${subscription.status}`)
      } catch (error) {
        console.warn(`⚠️  Could not fetch subscription from Stripe: ${error.message}`)
      }
    }
    
    // Get or create user
    console.log(`\n👤 Getting or creating user in Supabase...`)
    let user = null
    
    // Find existing user by email
    const { data: existingUser } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .maybeSingle()
    
    if (existingUser) {
      user = existingUser
      // Update stripe_customer_id if provided (payment_status will be synced from payment record)
      const updateData = {
        updated_at: new Date().toISOString()
      }
      
      if (stripeCustomerId) {
        updateData.stripe_customer_id = stripeCustomerId
      }
      
      if (Object.keys(updateData).length > 1) { // More than just updated_at
        const { data: updatedUser, error } = await supabase
          .from('users')
          .update(updateData)
          .eq('user_id', user.user_id)
          .select()
          .single()
        
        if (error) throw error
        user = updatedUser
      }
      console.log(`✅ User found: ${user.user_id}`)
    } else {
      // Create new user (payment_status will be synced from payment record)
      const { data: newUser, error } = await supabase
        .from('users')
        .insert({
          email,
          password_hash: '', // Required field
          status: 'active',
          stripe_customer_id: stripeCustomerId || null,
          // payment_status will be set when payment record is created
        })
        .select()
        .single()
      
      if (error) throw error
      user = newUser
      console.log(`✅ User created: ${user.user_id}`)
    }
    
    // Determine payment status based on amount
    let paymentStatus = 'free'
    if (amount > 0) {
      if (amount === 1) {
        paymentStatus = 'paid $1' // One-time $1 payment
      } else {
        paymentStatus = `$${amount}/month` // Monthly subscription
      }
    }
    
    // Create payment record in payments table
    console.log(`\n💳 Creating payment record...`)
    const customerSubscriptionStatus = amount > 0 ? 'Paid' : 'free'
    
    const { data: paymentRecord, error: paymentError } = await supabase
      .from('payments')
      .insert({
        user_id: user.user_id,
        amount: amount,
        currency: 'USD',
        status: 'success',
        provider: 'stripe',
        timestamp: new Date().toISOString(),
        customer_subscription_status: customerSubscriptionStatus, // 'Paid' or 'free'
      })
      .select()
      .single()
    
    if (paymentError) throw paymentError
    console.log(`✅ Payment record created: ${paymentRecord.payment_id}`)
    console.log(`   Amount: $${amount}`)
    console.log(`   Status: ${paymentRecord.status}`)
    console.log(`   Customer Subscription Status: ${customerSubscriptionStatus}`)
    
    // Sync user's payment_status with payment's customer_subscription_status
    const { error: userUpdateError } = await supabase
      .from('users')
      .update({
        payment_status: customerSubscriptionStatus,
        updated_at: new Date().toISOString()
      })
      .eq('user_id', user.user_id)
    
    if (userUpdateError) {
      console.warn(`⚠️  Could not update user payment_status: ${userUpdateError.message}`)
    } else {
      console.log(`✅ User payment_status synced to: ${customerSubscriptionStatus}`)
    }

    // Create or update user_plan record
    if (stripeSubscriptionId) {
      console.log(`\n📋 Creating/updating user plan record...`)
      
      let periodStart = new Date().toISOString()
      let periodEnd = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
      let subscriptionStatus = 'active'
      let cancelAtPeriodEnd = false
      
      try {
        const subscription = await stripe.subscriptions.retrieve(stripeSubscriptionId)
        subscriptionStatus = subscription.status
        periodStart = new Date(subscription.current_period_start * 1000).toISOString()
        periodEnd = new Date(subscription.current_period_end * 1000).toISOString()
        cancelAtPeriodEnd = subscription.cancel_at_period_end || false
      } catch (error) {
        console.warn(`⚠️  Could not fetch subscription details: ${error.message}`)
      }
      
      // Check if user_plan exists
      const { data: existingPlan } = await supabase
        .from('user_plans')
        .select('*')
        .eq('user_id', user.user_id)
        .order('start_date', { ascending: false })
        .limit(1)
        .maybeSingle()
      
      const isActive = subscriptionStatus === 'active' || subscriptionStatus === 'trialing'
      
      if (existingPlan) {
        // Update existing plan
        const { data: updatedPlan, error: planError } = await supabase
          .from('user_plans')
          .update({
            start_date: periodStart,
            end_date: periodEnd,
            is_active: isActive,
            auto_renew: !cancelAtPeriodEnd,
            payment_method_id: paymentRecord.payment_id,
          })
          .eq('user_plan_id', existingPlan.user_plan_id)
          .select()
          .single()
        
        if (planError) throw planError
        console.log(`✅ User plan updated: ${updatedPlan.user_plan_id}`)
        console.log(`   Is Active: ${updatedPlan.is_active}`)
        console.log(`   Auto Renew: ${updatedPlan.auto_renew}`)
      } else {
        // Create new plan
        const { data: newPlan, error: planError } = await supabase
          .from('user_plans')
          .insert({
            user_id: user.user_id,
            plan_id: null, // Not mapping to plans table yet
            start_date: periodStart,
            end_date: periodEnd,
            is_active: isActive,
            auto_renew: !cancelAtPeriodEnd,
            payment_method_id: paymentRecord.payment_id,
          })
          .select()
          .single()
        
        if (planError) throw planError
        console.log(`✅ User plan created: ${newPlan.user_plan_id}`)
        console.log(`   Is Active: ${newPlan.is_active}`)
        console.log(`   Auto Renew: ${newPlan.auto_renew}`)
      }
    } else {
      // One-time payment - still create a user_plan record
      console.log(`\n📋 Creating user plan record for one-time payment...`)
      
      const { data: newPlan, error: planError } = await supabase
        .from('user_plans')
        .insert({
          user_id: user.user_id,
          plan_id: null,
          start_date: new Date().toISOString(),
          end_date: new Date().toISOString(), // Same as start for one-time
          is_active: true,
          auto_renew: false,
          payment_method_id: paymentRecord.payment_id,
        })
        .select()
        .single()
      
      if (planError) throw planError
      console.log(`✅ User plan created: ${newPlan.user_plan_id}`)
    }
    
    // Verify the records
    console.log(`\n🔍 Verifying records...`)
    
    // Check payment
    const { data: verifyPayment } = await supabase
      .from('payments')
      .select('*')
      .eq('user_id', user.user_id)
      .order('timestamp', { ascending: false })
      .limit(1)
      .maybeSingle()
    
    // Check user_plan
    const { data: verifyPlan } = await supabase
      .from('user_plans')
      .select('*')
      .eq('user_id', user.user_id)
      .order('start_date', { ascending: false })
      .limit(1)
      .maybeSingle()
    
    if (verifyPayment && verifyPlan) {
      console.log(`\n✅ VERIFICATION SUCCESSFUL:`)
      console.log(`   Email: ${email}`)
      console.log(`\n   Payment Record:`)
      console.log(`      Payment ID: ${verifyPayment.payment_id}`)
      console.log(`      Amount: $${verifyPayment.amount}`)
      console.log(`      Status: ${verifyPayment.status}`)
      console.log(`      Provider: ${verifyPayment.provider}`)
      console.log(`\n   User Plan Record:`)
      console.log(`      Plan ID: ${verifyPlan.user_plan_id}`)
      console.log(`      Is Active: ${verifyPlan.is_active}`)
      console.log(`      Auto Renew: ${verifyPlan.auto_renew}`)
      console.log(`      Start Date: ${verifyPlan.start_date}`)
      console.log(`      End Date: ${verifyPlan.end_date}`)
      console.log(`\n   User Record:`)
      console.log(`      Stripe Customer ID: ${user.stripe_customer_id || 'N/A'}`)
    } else {
      console.log(`\n⚠️  Could not verify all records - please check manually`)
      if (!verifyPayment) console.log(`   ❌ Payment record not found`)
      if (!verifyPlan) console.log(`   ❌ User plan record not found`)
    }
    
    console.log(`\n✨ Backfill complete!\n`)
    
  } catch (error) {
    console.error(`\n❌ Error:`, error.message)
    console.error(error)
    process.exit(1)
  }
}

// Parse command line arguments
const args = process.argv.slice(2)
if (args.length < 2) {
  console.log(`
Usage: node scripts/backfill-payment.js <email> <amount> [stripe_customer_id] [stripe_subscription_id]

Example:
  node scripts/backfill-payment.js adamthewrite@gmail.com 1
  node scripts/backfill-payment.js adamthewrite@gmail.com 1 cus_xxxxx sub_xxxxx
`)
  process.exit(1)
}

const [email, amount, stripeCustomerId, stripeSubscriptionId] = args
backfillPayment(email, parseFloat(amount), stripeCustomerId, stripeSubscriptionId)
