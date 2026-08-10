import React from 'react';
import Link from 'next/link';

/**
 * @param {{ title: string; description: string; slug: string; category: string }[]} docs
 */
export default function FeatureRelatedDocsSection({ docs }) {
  if (!docs || docs.length === 0) return null;

  return (
    <section className="border-b border-oasis-green-800/8 bg-oasis-green-50/60 py-12 md:py-16" aria-labelledby="feature-related-docs-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="feature-related-docs-heading"
          className="text-center text-2xl font-bold tracking-tight text-oasis-green-900 md:text-3xl"
        >
          In the Help center
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-base text-oasis-green-800/90">
          Short reference articles that mirror how these capabilities work in Kahana—not marketing fluff.
        </p>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {docs.map((doc) => (
            <li key={doc.slug}>
              <Link
                href={`/help/${doc.slug}`}
                className="group flex h-full flex-col rounded-xl border border-oasis-green-800/15 bg-white p-5 shadow-sm transition-shadow hover:shadow-md no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-link"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-oasis-green-600 capitalize">
                  {doc.category}
                </span>
                <span className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-oasis-green-700">
                  {doc.title}
                </span>
                <span className="mt-2 line-clamp-3 text-sm text-gray-600">{doc.description}</span>
                <span className="mt-4 text-sm font-semibold text-oasis-green-600 group-hover:text-oasis-green-700">
                  Read article →
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center text-sm text-oasis-green-800/85">
          <Link
            href="/help"
            className="font-semibold text-brand-link no-underline hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-link"
          >
            Browse all Help
          </Link>
        </p>
      </div>
    </section>
  );
}
