import Head from 'next/head'
import Link from 'next/link'

/**
 * Password reset success confirmation page.
 * Users land here after successfully updating their password via the forgot-password flow.
 * Keeps them from being auto-redirected to sign-in (which could push them to create a paid account).
 */
export default function PasswordResetSuccess() {
  return (
    <>
      <Head>
        <title>Password updated · Kahana</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <main className="min-h-screen bg-[#F7F3EA] px-4 py-12 sm:py-16 flex items-center justify-center">
        <div className="mx-auto w-full max-w-md text-center">
          <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#F7F3EA] border-2 border-[#8A6622]">
            <svg
              className="w-8 h-8 text-[#8A6622]"
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
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#3B2F1A] mb-4">
            Password updated
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Your password has been changed successfully. You can sign in with your new password inside the browser.
          </p>
          <div className="flex justify-center">
            <Link
              href="/installations"
              className="btn-primary inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-full no-underline"
            >
              Install the latest version
            </Link>
          </div>
          <p className="mt-8 text-sm text-gray-500">
            <Link href="/" className="text-[#8A6622] font-semibold hover:underline">
              Back to home
            </Link>
          </p>
        </div>
      </main>
    </>
  )
}
