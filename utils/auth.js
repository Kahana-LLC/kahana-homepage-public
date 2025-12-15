import { createClient } from '@/utils/supabase'

/**
 * Sign up a user via Supabase Auth, then create their user record server-side.
 * Returns the auth user and session.
 */
export async function signupAndCreateProfile(email, password, fullName) {
  const supabase = createClient()

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: fullName ? { full_name: fullName } : {},
    },
  })
  if (error) throw error

  const user = data.user

  // Call server-side API to create user record (uses service role)
  // Note: public.users is matched by email, not by auth.users.id
  const res = await fetch('/api/create-profile', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, fullName }),
  })

  if (!res.ok) {
    const body = await res.json().catch(() => ({}))
    throw new Error(body.error || 'Failed to create user')
  }

  return { user, session: data.session }
}

/** Sign in with email/password */
export async function signInWithEmail(email, password) {
  const supabase = createClient()
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) throw error
  return data
}

/** Sign in/up with Google (opens popup) */
export async function signInWithGoogle() {
  const supabase = createClient()
  const redirectUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/oauth-callback` 
    : undefined
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: redirectUrl },
  })
  if (error) throw error
  return data
}

