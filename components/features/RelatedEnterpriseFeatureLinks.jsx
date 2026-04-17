import React from 'react';
import Link from 'next/link';
import { getRelatedEnterpriseFeatureLinks } from '../../data/oasisFeaturePages';

/**
 * Contextual links to Oasis Enterprise feature deep-dives for solution pages.
 * @param {{ pageKey: string }} props
 */
export default function RelatedEnterpriseFeatureLinks({ pageKey }) {
  const links = getRelatedEnterpriseFeatureLinks(pageKey);
  if (!links.length) return null;

  return (
    <section className="border-b border-[#4A5745]/8 bg-white py-8 md:py-10" aria-label="Related Oasis enterprise capabilities">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-wide text-[#7a9200] mb-3">
          Go deeper on Oasis Enterprise
        </p>
        <ul className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:flex-wrap sm:gap-x-4 sm:gap-y-2">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm font-semibold text-[#66C2BE] no-underline hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#66C2BE]"
              >
                {label} →
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-center text-xs text-[#4A5745]/70">
          Prefer the full story?{' '}
          <Link
            href="/products/oasis-enterprise-browser"
            className="font-semibold text-[#66C2BE] no-underline hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#66C2BE]"
          >
            Oasis Enterprise Browser overview
          </Link>
        </p>
      </div>
    </section>
  );
}
