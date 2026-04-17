import React from 'react';
import dynamic from 'next/dynamic';

const EnterpriseFeatureVisualInner = dynamic(
  () => import('./EnterpriseFeatureVisualInner'),
  {
    ssr: false,
    loading: () => (
      <div
        className="min-h-[280px] w-full rounded-xl border border-oasis-green-800/10 bg-oasis-green-50 animate-pulse"
        aria-hidden
      />
    ),
  }
);

/**
 * Illustrative enterprise console scene matched to the feature slug (see enterpriseFeatureVisualMap.js).
 */
export default function EnterpriseFeatureVisual({ slug }) {
  return (
    <section className="border-b border-oasis-green-800/8 bg-oasis-green-50 py-12 md:py-16" aria-label="Illustrative product console">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-wide text-oasis-green-600">
          Illustrative console (not your tenant)
        </p>
        <EnterpriseFeatureVisualInner slug={slug} />
      </div>
    </section>
  );
}
