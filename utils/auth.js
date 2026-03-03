import { createClient } from '@/utils/supabase'

/**
 * Sign up a user via Supabase Auth, then create their user record server-side.
 * Returns the auth user and session.
 */
export async function signupAndCreateProfile(email, password, fullName) {
  const supabase = createClient()

  const emailRedirectTo =
    typeof window !== 'undefined'
      ? `${window.location.origin}/confirm-success`
      : undefined

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: fullName ? { full_name: fullName } : {},
      emailRedirectTo,
    },
  })
  if (error) throw error

  const user = data.user
  if (!user?.id) {
    throw new Error('Failed to create auth user')
  }

  // Call server-side API to create user record (uses service role)
  // Note: public.users is matched by email, not by auth.users.id
  const res = await fetch('/api/create-profile', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId: user.id, email, fullName }),
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

/** Sign in/up with an OAuth provider. */
export async function signInWithOAuthProvider(provider) {
  const supabase = createClient()
  const redirectUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/oauth-callback`
    : undefined
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: { redirectTo: redirectUrl },
  })
  if (error) throw error
  return data
}

/** Sign in/up with Google */
export async function signInWithGoogle() {
  return signInWithOAuthProvider('google')
}

/** Sign in/up with Apple */
export async function signInWithApple() {
  return signInWithOAuthProvider('apple')
}

/** Sign in/up with Microsoft */
export async function signInWithMicrosoft() {
  return signInWithOAuthProvider('azure')
}

/**
 * Request a password reset email for the given address.
 * Always show a generic success message in UI (do not reveal if user exists).
 */
export async function requestPasswordReset(email) {
  const supabase = createClient()
  const redirectTo =
    typeof window !== 'undefined'
      ? `${window.location.origin}/forgot-password`
      : undefined

  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo,
  })
  if (error) throw error
  return data
}

/** Update current user's password (after recovery link is processed). */
export async function updatePassword(newPassword) {
  const supabase = createClient()
  const { data, error } = await supabase.auth.updateUser({ password: newPassword })
  if (error) throw error
  return data
}
