import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

/**
 * Email confirmation success page.
 * Users land here after clicking "Confirm your email" in the Supabase confirmation email.
 *
 * Supabase Dashboard: Authentication > URL Configuration
 * - Site URL: Production = https://kahana.io, Local = http://localhost:3000
 * - Redirect URLs: Add both:
 *   - https://kahana.io/confirm-success
 *   - http://localhost:3000/confirm-success
 */
export default function ConfirmSuccess() {
  const [oasisRedirecting, setOasisRedirecting] = useState(false)

  const logAssistantOAuth = (flowId, message, details) => {
    const prefix = flowId ? `[Oasis OAuth][${flowId}]` : '[Oasis OAuth]'
    if (details !== undefined) {
      console.log(`${prefix} ${message}`, details)
      return
    }
    console.log(`${prefix} ${message}`)
  }

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const hash = window.location.hash.replace(/^#/, '')
    if (!hash) {
      return
    }

    const params = new URLSearchParams(hash)
    const accessToken = params.get('access_token')
    const refreshToken = params.get('refresh_token')
    if (!accessToken && !refreshToken) {
      return
    }

    const marker = document.cookie
      .split('; ')
      .find((entry) => entry.startsWith('oasis_firefox_oauth_target='))

    if (!marker) {
      return
    }

    try {
      const payload = JSON.parse(
        decodeURIComponent(marker.split('=').slice(1).join('='))
      )
      const target =
        payload?.target === 'onboarding' ? 'onboarding' : 'assistant'
      const flowId =
        typeof payload?.flowId === 'string' && payload.flowId ? payload.flowId : ''
      const callbackBaseUrl =
        typeof payload?.callbackBaseUrl === 'string' &&
        /^https?:\/\//i.test(payload.callbackBaseUrl)
          ? payload.callbackBaseUrl.replace(/\/+$/, '')
          : window.location.origin
      document.cookie =
        'oasis_firefox_oauth_target=; Max-Age=0; Path=/; SameSite=Lax'
      setOasisRedirecting(true)
      logAssistantOAuth(flowId, 'Recovering Oasis OAuth flow from confirm-success', {
        target,
        callbackBaseUrl,
      })
      window.location.replace(
        `${callbackBaseUrl}/oauth-callback${window.location.hash}`
      )
    } catch (error) {
      console.error('Failed to recover Oasis OAuth flow from confirm-success:', error)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Email confirmed · Aura Library</title>
        <meta
          name="description"
          content="Your email is confirmed. You're all set to use Oasis by Aura Library."
        />
      </Head>
      <main className="min-h-screen bg-white px-4 py-12 sm:py-16 flex items-center justify-center">
        <div className="mx-auto w-full max-w-md text-center">
          <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#F8FAF2] border-2 border-[#7F9E36]">
            <svg
              className="w-8 h-8 text-[#4A6200]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#978455] mb-2">
            Oasis by Aura Library
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#313A00] mb-4">
            {oasisRedirecting ? 'Completing sign-in' : 'Email confirmed'}
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            {oasisRedirecting
              ? 'Finishing Oasis sign-in and returning control to Oasis.'
              : "Your email is verified. You're all set."}
          </p>
          <p className="text-base text-gray-600 mb-8 max-w-sm mx-auto">
            You can install the newest version of Oasis and use your login credentials to use the AI assistant. While you don't need to sign in to use the browser, you will need to sign in in order to use AI commands in the AI assistant.
          </p>
          <div className="flex justify-center">
            <Link
              href="/installations"
              className="btn-primary inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-full no-underline"
            >
              Install Oasis
            </Link>
          </div>
          <p className="mt-8 text-sm text-gray-500">
            <Link href="/" className="text-[#4A6200] font-semibold no-underline hover:no-underline">
              Back to home
            </Link>
          </p>
        </div>
      </main>
    </>
  )
}
