import { createClient as createSupabaseClient } from '@supabase/supabase-js'

// Read env vars (ensure these are set in .env.local)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Missing Supabase env vars: NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY')
}

export function createClient() {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase env vars')
  }
  return createSupabaseClient(supabaseUrl, supabaseAnonKey, {
    auth: { persistSession: true, autoRefreshToken: true },
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
 * Helper function to create or update subscription in subscriptions table
 */
export async function upsertSubscription(subscriptionData) {
  const supabase = createServiceClient()
  
  // Default payment_status to 'free' if not provided
  const dataWithDefaults = {
    payment_status: 'free',
    ...subscriptionData,
  }
  
  if (subscriptionData.stripe_subscription_id) {
    const { data: existing } = await supabase
      .from('subscriptions')
      .select('*')
      .eq('stripe_subscription_id', subscriptionData.stripe_subscription_id)
      .single()
    
    if (existing) {
      const { data, error } = await supabase
        .from('subscriptions')
        .update(dataWithDefaults)
        .eq('stripe_subscription_id', subscriptionData.stripe_subscription_id)
        .select()
        .single()
      
      if (error) throw error
      return data
    }
  }
  
  const { data, error } = await supabase
    .from('subscriptions')
    .insert(dataWithDefaults)
    .select()
    .single()
  
  if (error) throw error
  return data
}

/**
 * Helper function to log subscription history event
 */
export async function logSubscriptionHistory(subscriptionId, eventType, stripeEventId = null, metadata = {}) {
  const supabase = createServiceClient()
  
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
}



