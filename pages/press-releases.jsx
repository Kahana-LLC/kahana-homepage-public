import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import { pressReleases } from '../data/press-releases';

export default function PressReleasesPage() {
  const sorted = [...pressReleases].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      <SEO
        title="Press releases"
        description="Official Aura Library press releases and announcements. Curated links for journalists and partners."
        url="https://kahana.io/press-releases"
        type="website"
      />

      <div className="min-h-screen bg-white">
        <section className="border-b border-oasis-green-100 bg-gradient-to-br from-oasis-green-50 via-white to-oasis-blue-50">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <p className="text-sm font-semibold uppercase tracking-wide text-oasis-green-600">Media</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-oasis-green-900 sm:text-5xl">Press releases</h1>
            <p className="mt-4 text-lg text-oasis-green-800">
              Official announcements from Aura Library. For logos, colors, and imagery, see the{' '}
              <Link href="/press-kit" className="font-semibold text-oasis-green-700 underline decoration-oasis-green-300 underline-offset-2 hover:text-oasis-green-900">
                press kit
              </Link>
              .
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          {sorted.length === 0 ? (
            <div className="rounded-xl border border-dashed border-oasis-green-200 bg-oasis-green-50/40 px-6 py-12 text-center">
              <p className="text-lg font-medium text-oasis-green-900">No releases published yet</p>
              <p className="mt-2 text-oasis-green-800">
                When we publish official press, we&apos;ll list it here. Questions? Use the{' '}
                <Link
                  href="/press-kit#press-inquiries"
                  className="font-semibold text-oasis-green-700 underline underline-offset-2 hover:text-oasis-green-900"
                >
                  press inquiries form
                </Link>{' '}
                on our press kit.
              </p>
              <Link
                href="/press-kit"
                className="mt-6 inline-flex items-center text-sm font-semibold text-oasis-green-700 hover:text-oasis-green-900"
              >
                ← Back to press kit
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-oasis-green-100">
              {sorted.map((item) => {
                const isInternal = item.href.startsWith('/');

                return (
                  <li key={item.href} className="py-8 first:pt-0">
                    <p className="text-sm font-medium text-oasis-green-600">{item.date}</p>
                    <h2 className="mt-1 text-xl font-semibold text-oasis-green-900">
                      {isInternal ? (
                        <Link href={item.href} className="no-underline text-oasis-green-900 hover:text-oasis-green-700">
                          {item.title}
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="no-underline text-oasis-green-900 hover:text-oasis-green-700"
                        >
                          {item.title}
                        </a>
                      )}
                    </h2>
                    {item.summary ? <p className="mt-2 text-oasis-green-800">{item.summary}</p> : null}
                    {isInternal ? (
                      <Link href={item.href} className="mt-3 inline-flex text-sm font-semibold text-oasis-green-700 hover:text-oasis-green-900 no-underline">
                        Read release
                        <span aria-hidden className="ml-1">
                          →
                        </span>
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex text-sm font-semibold text-oasis-green-700 hover:text-oasis-green-900 no-underline"
                      >
                        Read release
                        <span aria-hidden className="ml-1">
                          ↗
                        </span>
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
