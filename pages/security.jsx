import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import TableOfContents from '../components/TableOfContents';
import { APP_URL } from '../components/nav/navConfig';

const CANONICAL = 'https://about.kahana.io/security';

const tocStructure = [
  { id: 'how-we-think', label: 'How we think about security' },
  { id: 'accounts-access', label: 'Accounts & access' },
  { id: 'hubs-visibility', label: 'Hubs & visibility' },
  { id: 'adult-age', label: 'Adult content & age' },
  { id: 'payments', label: 'Payments' },
  { id: 'infrastructure', label: 'Infrastructure' },
  { id: 'analytics-logging', label: 'Analytics' },
  { id: 'responsible-disclosure', label: 'Report an issue' },
  { id: 'faq', label: 'FAQ' },
];

const linkClass =
  'font-semibold text-[#4A6200] no-underline underline-offset-4 hover:underline';

export default function Security() {
  return (
    <>
      <SEO
        title="Security | Kahana"
        description="How Kahana protects accounts, hubs, and payments in the Digital Library."
        url={CANONICAL}
        type="website"
      />

      <TableOfContents items={tocStructure} />

      <div className="min-h-screen bg-white lg:ml-80">
        <div className="bg-gradient-to-b from-[#F3F8E4] to-white py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#617500]">
                Security
              </p>
              <h1 className="mb-6 text-4xl font-extrabold text-[#313A00] sm:text-5xl lg:text-6xl">
                Security for the Digital Library
              </h1>
              <p className="mx-auto max-w-2xl text-xl leading-relaxed text-gray-700 sm:text-2xl">
                Kahana is a Digital Library of curated hubs. We protect accounts, who can open what,
                and how payments work.
              </p>
              <p className="mt-8 flex flex-wrap justify-center gap-x-4 gap-y-2 text-base">
                <Link href="/privacy-policy" className={linkClass}>
                  Privacy
                </Link>
                <Link href="/help/trust" className={linkClass}>
                  Trust
                </Link>
                <Link href="https://kahana.io/contact" className={linkClass}>
                  Contact
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col border-b border-gray-200 pb-8 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="mb-2 text-2xl font-bold text-[#313A00] sm:mb-0">Security @ Kahana</h2>
            <p className="text-sm text-gray-600">
              Effective <span className="font-semibold text-[#313A00]">July 15, 2026</span>
            </p>
          </div>

          <article className="prose prose-lg max-w-none">
            <section id="how-we-think" className="mb-14 scroll-mt-8">
              <h2 className="mb-4 text-3xl font-bold text-[#313A00]">How we think about security</h2>
              <p className="mb-3 leading-relaxed text-gray-700">Three surfaces matter:</p>
              <ul className="list-disc space-y-2 pl-6 text-gray-700">
                <li>
                  <strong className="text-[#313A00]">Identity:</strong> sign-in and sessions
                </li>
                <li>
                  <strong className="text-[#313A00]">Access:</strong> private hubs, roles, paywalls,
                  adult gates
                </li>
                <li>
                  <strong className="text-[#313A00]">Payments:</strong> Stripe Connect
                </li>
              </ul>
              <p className="mt-4 leading-relaxed text-gray-700">
                Creators choose what stays private, what appears on Explore, and what is paid. No
                system is perfectly secure; we keep improving the basics.
              </p>
            </section>

            <section id="accounts-access" className="mb-14 scroll-mt-8">
              <h2 className="mb-4 text-3xl font-bold text-[#313A00]">Accounts &amp; access</h2>
              <ul className="list-disc space-y-2 pl-6 text-gray-700">
                <li>
                  Sign-in via <strong className="text-[#313A00]">Firebase Authentication</strong>{' '}
                  (email and supported providers).
                </li>
                <li>
                  Collaborators use roles (OWNER, ADMIN, WRITE, COMMENT, READ).{' '}
                  <Link href="/help/collaborators-and-roles" className={linkClass}>
                    Roles guide
                  </Link>
                </li>
                <li>Paid access unlocks under the Kahana account that completed checkout.</li>
                <li>
                  Adult hubs need login and age verification. No anonymous &ldquo;I&apos;m 18&rdquo;
                  unlock.
                </li>
                <li>
                  Help:{' '}
                  <a
                    href={`${APP_URL}/support`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    in-app Support
                  </a>
                </li>
              </ul>
            </section>

            <section id="hubs-visibility" className="mb-14 scroll-mt-8">
              <h2 className="mb-4 text-3xl font-bold text-[#313A00]">Hubs &amp; visibility</h2>
              <ul className="list-disc space-y-2 pl-6 text-gray-700">
                <li>Hubs start private.</li>
                <li>
                  Public + listed on Explore is how work joins the library catalog.{' '}
                  <Link href="/help/list-hub-on-explore" className={linkClass}>
                    Listing checklist
                  </Link>
                </li>
                <li>
                  Public but unlisted: shareable by link; not treated like Explore-listed pages for
                  discovery or SEO.
                </li>
                <li>Private collaboration is by invite, not open to the internet.</li>
              </ul>
            </section>

            <section id="adult-age" className="mb-14 scroll-mt-8">
              <h2 className="mb-4 text-3xl font-bold text-[#313A00]">Adult content &amp; age</h2>
              <ul className="mb-3 list-disc space-y-2 pl-6 text-gray-700">
                <li>Creators set adult yes or no before listing.</li>
                <li>Adult hubs are hidden from default Explore and are not SEO-indexed like the rest of the library.</li>
                <li>Access requires sign-in and a date of birth proving 18+.</li>
              </ul>
              <p className="text-gray-700">
                <Link href="/help/adult-content-and-age-verification" className={linkClass}>
                  Full guide
                </Link>
                {' · '}
                <Link href="/help/trust" className={linkClass}>
                  Trust
                </Link>
              </p>
            </section>

            <section id="payments" className="mb-14 scroll-mt-8">
              <h2 className="mb-4 text-3xl font-bold text-[#313A00]">Payments</h2>
              <ul className="mb-3 list-disc space-y-2 pl-6 text-gray-700">
                <li>
                  Checkout runs on <strong className="text-[#313A00]">Stripe Connect</strong>. Kahana
                  does not store full card numbers.
                </li>
                <li>
                  Creators connect Stripe for payouts. A verified badge means charge-ready Connect, not Explore ranking.
                </li>
                <li>
                  Platform fee: <strong className="text-[#313A00]">5%</strong>, plus Stripe
                  processing.
                </li>
              </ul>
              <p className="text-gray-700">
                <Link href="/help/buying-and-access" className={linkClass}>
                  Buying
                </Link>
                {' · '}
                <Link href="/help/turn-on-paid-access" className={linkClass}>
                  Selling
                </Link>
              </p>
            </section>

            <section id="infrastructure" className="mb-14 scroll-mt-8">
              <h2 className="mb-4 text-3xl font-bold text-[#313A00]">Infrastructure</h2>
              <ul className="mb-3 list-disc space-y-2 pl-6 text-gray-700">
                <li>Web app over HTTPS</li>
                <li>
                  <strong className="text-[#313A00]">Firebase</strong> for Auth, data, functions, and
                  storage
                </li>
                <li>
                  <strong className="text-[#313A00]">Stripe</strong> for payments
                </li>
              </ul>
              <p className="leading-relaxed text-gray-700">
                Production access is limited. We do not claim SOC 2 or ISO certification on this
                page unless we publish it separately.
              </p>
            </section>

            <section id="analytics-logging" className="mb-14 scroll-mt-8">
              <h2 className="mb-4 text-3xl font-bold text-[#313A00]">Analytics</h2>
              <p className="leading-relaxed text-gray-700">
                Product analytics (for example Mixpanel when enabled) help us improve the library.
                On this website, non-essential analytics follow your cookie choices. See the{' '}
                <Link href="/privacy-policy" className={linkClass}>
                  Privacy Policy
                </Link>
                .
              </p>
            </section>

            <section id="responsible-disclosure" className="mb-14 scroll-mt-8">
              <h2 className="mb-4 text-3xl font-bold text-[#313A00]">Report an issue</h2>
              <p className="mb-3 leading-relaxed text-gray-700">
                Found a security or privacy problem? Use the{' '}
                <Link href="https://kahana.io/contact" className={linkClass}>
                  contact form
                </Link>{' '}
                with steps to reproduce. Act in good faith, avoid harm, and give us time to fix
                before public disclosure.
              </p>
            </section>

            <section id="faq" className="mb-14 scroll-mt-8">
              <h2 className="mb-4 text-3xl font-bold text-[#313A00]">FAQ</h2>
              <ul className="space-y-6">
                <li>
                  <strong className="text-[#313A00]">Is Kahana a browser?</strong>
                  <p className="mt-1 text-gray-700">
                    No. Kahana is the Digital Library at{' '}
                    <a href={APP_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      app.kahana.io
                    </a>
                    . Older Oasis browser materials are not the current product.
                  </p>
                </li>
                <li>
                  <strong className="text-[#313A00]">Do you sell personal data?</strong>
                  <p className="mt-1 text-gray-700">
                    No. We earn from optional Growth plans and a fee on paid hub access, not by
                    selling Personal Data.
                  </p>
                </li>
                <li>
                  <strong className="text-[#313A00]">SOC 2 / ISO?</strong>
                  <p className="mt-1 text-gray-700">
                    Not claimed here. We&apos;ll update this page if we publish certifications.
                  </p>
                </li>
                <li>
                  <strong className="text-[#313A00]">Policies</strong>
                  <p className="mt-1 text-gray-700">
                    <Link href="/privacy-policy" className={linkClass}>
                      Privacy
                    </Link>
                    {' · '}
                    <Link href="/terms-and-conditions" className={linkClass}>
                      Terms
                    </Link>
                    {' · '}
                    in-app <code className="text-sm">/legal/*</code>
                  </p>
                </li>
              </ul>
            </section>
          </article>

          <hr className="my-10 border-gray-200" />
          <footer className="py-6 text-center text-gray-700">
            <Link href="/help/trust" className={linkClass}>
              Trust
            </Link>
            {' · '}
            <Link href="https://kahana.io/contact" className={linkClass}>
              Report an issue
            </Link>
          </footer>
        </div>
      </div>
    </>
  );
}
