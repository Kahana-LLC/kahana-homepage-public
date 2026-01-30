import Head from 'next/head'
import Link from 'next/link'

/**
 * Email confirmation success page.
 * Users land here after clicking "Confirm your email" in the Supabase confirmation email.
 *
 * Supabase Dashboard: Authentication > URL Configuration
 * - Site URL: Production = https://kahana.co, Local = http://localhost:3000
 * - Redirect URLs: Add both:
 *   - https://kahana.co/confirm-success
 *   - http://localhost:3000/confirm-success
 */
export default function ConfirmSuccess() {
  return (
    <>
      <Head>
        <title>Email confirmed · Kahana</title>
        <meta
          name="description"
          content="Your email is confirmed. You're all set to use Oasis by Kahana."
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
            Oasis by Kahana
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#313A00] mb-4">
            Email confirmed
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Your email is verified. You're all set.
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
            <Link href="/" className="text-[#4A6200] font-semibold hover:underline">
              Back to home
            </Link>
          </p>
        </div>
      </main>
    </>
  )
}
