import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../components/SEO';
import OasisPlatformLogos from '../components/OasisPlatformLogos';

export default function OasisWaitlist() {
  return (
    <>
      <SEO
        title="Get Early Access"
        description="Join the Oasis browser waitlist and be among the first to get early access."
        url="https://kahana.co/oasis-waitlist"
        type="website"
      />
      <Head>
        <title>Get Early Access | Oasis Waitlist | Kahana</title>
      </Head>

      <main className="min-h-screen bg-white pt-24 pb-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-center text-4xl font-bold text-oasis-green-900 sm:text-5xl">
            Get Early Access
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-center text-base leading-relaxed text-oasis-green-800 sm:text-lg">
            Get early access to Windows, Linux, and Chromium versions of Oasis. We&apos;ll notify you when
            you&apos;re ready. This is a waitlist, not an email newsletter. We promise not to spam.
          </p>

          <OasisPlatformLogos className="mt-6 mb-10 gap-8 sm:gap-10" />

          <div className="rounded-xl bg-white p-6 shadow-xl sm:p-8">
            <iframe
              src="https://tally.so/r/w8V8GA"
              width="100%"
              height="620"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Oasis Waitlist"
              style={{
                border: 0,
                borderRadius: 0,
                backgroundColor: 'transparent',
                display: 'block',
              }}
            />

            <div className="mt-4 border-t border-gray-200 pt-6">
              <p className="mb-3 text-center text-sm text-gray-600">
                <strong>Contact us</strong> — for an immediate response,{' '}
                <Link
                  href="/contact"
                  className="text-brand-link no-underline hover:text-brand-link-hover hover:no-underline"
                >
                  reach out here
                </Link>
                .
              </p>
              <p className="text-center text-xs text-oasis-green-800">
                By submitting this form you consent to be contacted by Kahana, and acknowledge our{' '}
                <Link
                  href="/privacy-policy"
                  className="text-brand-link no-underline hover:text-brand-link-hover hover:no-underline"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
