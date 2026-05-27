import { createClient as createSupabaseClient } from '@supabase/supabase-js'
import { logger } from './logger'

// Read env vars (ensure these are set in .env.local)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  logger.warn('Missing Supabase env vars: NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY')
}

export function createClient() {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase env vars')
  }
  return createSupabaseClient(supabaseUrl, supabaseAnonKey, {
    auth: { persistSession: true, autoRefreshToken: true },
  })
}

export function createServerClient() {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase env vars')
  }
  return createSupabaseClient(supabaseUrl, supabaseAnonKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
}

export function createServiceClient() {
  if (!supabaseUrl || !supabaseServiceRoleKey) {
    throw new Error('Missing Supabase service role key (server-side only)')
  }
  return createSupabaseClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
}

/**
 * Helper function to get or create a user by email
 * Since public.users is not linked to auth.users, we match by email
 */
export async function getOrCreateUser(email, userData = {}) {
  const supabase = createServiceClient()
  
  if (!email) {
    throw new Error('Email is required to get or create user')
  }
  
  // Find existing user by email
  const { data: existingUser } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)
    .single()
  
  if (existingUser) {
    if (Object.keys(userData).length > 0) {
      const { data: updatedUser, error } = await supabase
        .from('users')
        .update({ ...userData, updated_at: new Date().toISOString() })
        .eq('user_id', existingUser.user_id)
        .select()
        .single()
      
      if (error) throw error
      return updatedUser
    }
    return existingUser
  }
  
  // Create new user (user_id will be auto-generated)
  const { data: newUser, error } = await supabase
    .from('users')
    .insert({
      email,
      password_hash: '', // Required field
      status: 'active',
      ...userData,
    })
    .select()
    .single()
  
  if (error) throw error
  return newUser
}

// Keep old function name for backward compatibility
export const getOrCreateProfile = getOrCreateUser

/**
 * Helper function to create a payment record in payments table
 */
export async function createPayment(paymentData) {
  const supabase = createServiceClient()
  
  const paymentRecord = {
    user_id: paymentData.user_id,
    amount: paymentData.amount,
    currency: paymentData.currency || 'USD',
    status: paymentData.status || 'success', // 'success' or 'failed'
    provider: paymentData.provider || 'stripe',
    timestamp: paymentData.timestamp || new Date().toISOString(),
    customer_subscription_status: paymentData.customer_subscription_status || null, // 'Paid' or 'free'
  }
  
  const { data, error } = await supabase
    .from('payments')
    .insert(paymentRecord)
    .select()
    .single()
  
  if (error) throw error
  
  // Sync user's payment_status with the payment's customer_subscription_status
  if (paymentRecord.customer_subscription_status) {
    await supabase
      .from('users')
      .update({
        payment_status: paymentRecord.customer_subscription_status,
        updated_at: new Date().toISOString()
      })
      .eq('user_id', paymentData.user_id)
  }
  
  return data
}

/**
 * Helper function to create or update user_plan in user_plans table
 * 
 * IMPORTANT: The user_plans table needs a stripe_subscription_id column added to properly track subscriptions.
 * For now, we find existing plans by user_id and most recent active plan.
 * 
 * To add the column, run this SQL in Supabase:
 * ALTER TABLE public.user_plans ADD COLUMN stripe_subscription_id text;
 */
export async function upsertUserPlan(planData) {
  const supabase = createServiceClient()
  
  // Map subscription status to is_active
  // is_active = true if subscription is active/trialing (user has access)
  // is_active = false only when subscription is actually canceled/ended
  // Note: cancel_at_period_end doesn't affect is_active - user still has access until period ends
  const isActive = planData.status === 'active' || planData.status === 'trialing'
  
  const userPlanData = {
    user_id: planData.user_id,
    plan_id: planData.plan_id || null, // Can be null for now (not mapping to plans table yet)
    start_date: planData.start_date || planData.current_period_start,
    end_date: planData.end_date || planData.current_period_end,
    is_active: isActive,
    auto_renew: !planData.cancel_at_period_end,
    payment_method_id: planData.payment_id || null,
    stripe_customer_id: planData.stripe_customer_id || null,
    stripe_subscription_id: planData.stripe_subscription_id || null,
  }
  
  // Try to find existing user_plan
  // Priority: 1) stripe_subscription_id, 2) stripe_customer_id, 3) most recent plan for user
  let existing = null
  
  if (planData.stripe_subscription_id) {
    const { data } = await supabase
      .from('user_plans')
      .select('*')
      .eq('stripe_subscription_id', planData.stripe_subscription_id)
      .maybeSingle()
    existing = data
  }
  
  // If not found by subscription ID, try customer ID
  if (!existing && planData.stripe_customer_id) {
    const { data } = await supabase
      .from('user_plans')
      .select('*')
      .eq('stripe_customer_id', planData.stripe_customer_id)
      .order('start_date', { ascending: false })
      .limit(1)
      .maybeSingle()
    existing = data
  }
  
  // If still not found, find the most recent active plan for this user
  if (!existing) {
    const { data } = await supabase
      .from('user_plans')
      .select('*')
      .eq('user_id', planData.user_id)
      .order('start_date', { ascending: false })
      .limit(1)
      .maybeSingle()
    existing = data
  }
  
  if (existing) {
    // Update existing plan
    const { data, error } = await supabase
      .from('user_plans')
      .update(userPlanData)
      .eq('user_plan_id', existing.user_plan_id)
      .select()
      .single()
    
    if (error) {
      console.error('Error updating user_plan:', error)
      console.error('User plan data:', userPlanData)
      throw new Error(`Failed to update user_plan: ${error.message} (${error.code || 'unknown'})`)
    }
    return data
  }
  
  // Create new user_plan
  const { data, error } = await supabase
    .from('user_plans')
    .insert(userPlanData)
    .select()
    .single()
  
  if (error) {
    console.error('Error creating user_plan:', error)
    console.error('User plan data:', userPlanData)
    throw new Error(`Failed to create user_plan: ${error.message} (${error.code || 'unknown'})`)
  }
  return data
}

/**
 * Helper function to find user_plan by stripe_subscription_id
 */
export async function findUserPlanByStripeSubscriptionId(stripeSubscriptionId) {
  const supabase = createServiceClient()
  const { data, error } = await supabase
    .from('user_plans')
    .select('*')
    .eq('stripe_subscription_id', stripeSubscriptionId)
    .maybeSingle()
  
  if (error) throw error
  return data
}

/**
 * Helper function to find user_plan by stripe_customer_id
 */
export async function findUserPlanByStripeCustomerId(stripeCustomerId) {
  const supabase = createServiceClient()
  const { data, error } = await supabase
    .from('user_plans')
    .select('*')
    .eq('stripe_customer_id', stripeCustomerId)
    .order('start_date', { ascending: false })
    .limit(1)
    .maybeSingle()
  
  if (error) throw error
  return data
}

// Keep old function for backward compatibility (deprecated - use createPayment + upsertUserPlan)
export async function upsertSubscription(subscriptionData) {
  console.warn('upsertSubscription is deprecated - use createPayment + upsertUserPlan instead')
  // This function is kept for backward compatibility but should not be used
  // It references a non-existent 'subscriptions' table
  throw new Error('upsertSubscription is deprecated - subscriptions table does not exist. Use createPayment + upsertUserPlan instead.')
}

/**
 * Helper function to log subscription history event
 * Note: subscription_history table may not exist - this is kept for backward compatibility
 */
export async function logSubscriptionHistory(subscriptionId, eventType, stripeEventId = null, metadata = {}) {
  const supabase = createServiceClient()
  
  // Check if subscription_history table exists before trying to insert
  // For now, we'll just log to console since this table may not exist
  console.log('Subscription history event:', {
    subscriptionId,
    eventType,
    stripeEventId,
    metadata,
  })
  
  // If subscription_history table exists, uncomment below:
  /*
  const { data, error } = await supabase
    .from('subscription_history')
    .insert({
      subscription_id: subscriptionId,
      event_type: eventType,
      stripe_event_id: stripeEventId,
      metadata: metadata,
    })
    .select()
    .single()
  
  if (error) {
    console.error('Error logging subscription history:', error)
    // Don't throw - history logging is non-critical
  }
  
  return data
  */
  
  return null
}


