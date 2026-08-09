import { useEffect, useMemo, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { createClient } from '@/utils/supabase'
import { updatePassword } from '@/utils/auth'

function safeGet(paramSource, key) {
  try {
    return paramSource?.get(key) || ''
  } catch {
    return ''
  }
}

export default function ForgotPassword() {
  const router = useRouter()
  const [phase, setPhase] = useState('loading') // loading | gate | ready | done | error | info
  const [message, setMessage] = useState('Processing your password reset link…')
  const [confirmationUrl, setConfirmationUrl] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const canSubmit = useMemo(() => {
    return (
      !submitting &&
      newPassword.length >= 8 &&
      confirmPassword.length >= 8 &&
      newPassword === confirmPassword
    )
  }, [confirmPassword, newPassword, submitting])

  useEffect(() => {
    if (typeof window === 'undefined') return
    processRecoveryLink()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const processRecoveryLink = async () => {
    const urlParams = new URLSearchParams(window.location.search)

    // Mitigation for email link scanners/prefetch:
    // If the email links to /forgot-password?confirmation_url=<supabase_verify_link>,
    // we do NOT automatically navigate there. We wait for a real user click.
    const confirmationFromQuery = safeGet(urlParams, 'confirmation_url')
    if (confirmationFromQuery) {
      setConfirmationUrl(confirmationFromQuery)
      setPhase('gate')
      setMessage('Click continue to open the secure password reset link.')
      return
    }

    let supabase
    try {
      supabase = createClient()
    } catch (e) {
      setPhase('error')
      setMessage(
        'Supabase is not configured. Please verify NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.'
      )
      return
    }

    const hash = window.location.hash.startsWith('#')
      ? window.location.hash.substring(1)
      : window.location.hash
    const hashParams = new URLSearchParams(hash)

    const code = safeGet(urlParams, 'code')
    const error = safeGet(urlParams, 'error') || safeGet(hashParams, 'error')
    const errorDescription =
      safeGet(urlParams, 'error_description') || safeGet(hashParams, 'error_description')

    if (error) {
      setPhase('error')
      setMessage(`This reset link is not valid: ${error}${errorDescription ? `: ${errorDescription}` : ''}`)
      return
    }

    try {
      // Support both flows:
      // 1) Hash token flow (#access_token=...&refresh_token=...&type=recovery)
      // 2) Code flow (?code=...)
      const accessToken = safeGet(hashParams, 'access_token')
      const refreshToken = safeGet(hashParams, 'refresh_token')

      if (code) {
        const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code)
        if (exchangeError) throw exchangeError
      } else if (accessToken && refreshToken) {
        const { error: sessionError } = await supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken,
        })
        if (sessionError) throw sessionError
      } else {
        // If user landed here without tokens, see if there's already a session.
        const { data } = await supabase.auth.getSession()
        if (!data?.session) {
          setPhase('info')
          setMessage('Please request a new password reset link from the sign-in page.')
          return
        }
      }

      // Clean URL (remove tokens/code) to avoid leaking credentials via history/screenshots
      try {
        window.history.replaceState({}, document.title, '/forgot-password')
      } catch {
        // ignore
      }

      setPhase('ready')
      setMessage('Set a new password for your account.')
    } catch (e) {
      setPhase('error')
      setMessage(e?.message || 'Failed to process reset link. Please request a new one.')
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!canSubmit) return
    setSubmitting(true)
    try {
      await updatePassword(newPassword)

      // Best-effort sign out to avoid leaving a recovery session around.
      try {
        const supabase = createClient()
        await supabase.auth.signOut()
      } catch {
        // ignore
      }

      setPhase('done')
      setMessage('Password updated. Redirecting…')
      router.push('/password-reset-success')
    } catch (err) {
      setPhase('error')
      setMessage(err?.message || 'Failed to update password. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const onContinueToSupabase = () => {
    if (!confirmationUrl) return
    // Navigate only after user click (prevents scanners from consuming OTP).
    window.location.assign(confirmationUrl)
  }

  return (
    <>
      <Head>
        <title>Reset password · Aura Library</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <main className="min-h-screen bg-white px-4 py-12 sm:py-16">
        <div className="mx-auto w-full max-w-xl">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-[0_25px_80px_rgba(9,12,0,0.08)]">
            <p className="text-xs font-semibold tracking-wide uppercase text-[#978455] mb-2">
              Oasis by Aura Library
            </p>
            <h1 className="text-3xl font-extrabold text-[#313A00] mb-2">Reset your password</h1>
            <p className="text-base text-neutral-700 mb-6">{message}</p>

            {phase === 'gate' && (
              <div className="space-y-3">
                <button type="button" className="btn-primary w-full py-3.5 text-base" onClick={onContinueToSupabase}>
                  Continue
                </button>
                <p className="text-sm text-neutral-600">
                  If you didn’t request a reset, you can close this page.
                </p>
              </div>
            )}

            {phase === 'ready' && (
              <form className="space-y-4" onSubmit={onSubmit}>
                <div>
                  <label className="block text-sm font-medium text-neutral-800 mb-1">
                    New password
                  </label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="At least 8 characters"
                    className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A6200]"
                    autoComplete="new-password"
                    minLength={8}
                    required
                    disabled={submitting}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-800 mb-1">
                    Confirm new password
                  </label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Re-enter your new password"
                    className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A6200]"
                    autoComplete="new-password"
                    minLength={8}
                    required
                    disabled={submitting}
                  />
                </div>

                {confirmPassword && newPassword !== confirmPassword && (
                  <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                    Passwords do not match.
                  </div>
                )}

                <button
                  type="submit"
                  className="btn-primary w-full py-3.5 text-base"
                  disabled={!canSubmit}
                >
                  {submitting ? 'Updating…' : 'Update password'}
                </button>
              </form>
            )}

            {(phase === 'info' || phase === 'error' || phase === 'done') && (
              <div className="mt-2">
                <Link
                  href="/oasis-auth?mode=login"
                  className="text-sm font-semibold text-[#4A6200] no-underline hover:no-underline"
                >
                  Back to sign in
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}

