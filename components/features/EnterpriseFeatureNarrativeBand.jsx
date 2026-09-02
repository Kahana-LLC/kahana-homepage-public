import React from 'react';
import Link from 'next/link';
import { getEnterpriseFeatureNarrative } from '../../data/enterpriseFeatureNarrative';
import { oasisCapabilities } from '../../data/oasisEnterpriseCapabilities';

function titleForSlug(slug) {
  return oasisCapabilities.find((c) => c.slug === slug)?.title ?? slug;
}

/**
 * Narrative spine from docs/narrative-framework.md: market tension, promise, related capabilities.
 * @param {{ slug: string }} props
 */
export default function EnterpriseFeatureNarrativeBand({ slug }) {
  const narrative = getEnterpriseFeatureNarrative(slug);
  if (!narrative) return null;

  return (
    <div className="space-y-4 border-b border-oasis-green-800/10 pb-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[#8A6622]">{narrative.deckBeat}</p>
        {narrative.pillarLabel && (
          <p className="mt-1 text-xs font-medium text-oasis-green-800/70">{narrative.pillarLabel}</p>
        )}
      </div>
      <p className="text-oasis-green-800/95 leading-relaxed">{narrative.marketTension}</p>
      <p className="text-oasis-green-800/95 leading-relaxed font-medium">{narrative.promiseBridge}</p>
      <div className="pt-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-oasis-green-800/70 mb-2">Related capabilities</p>
        <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
          {narrative.relatedSlugs.map((related) => (
            <li key={related}>
              <Link
                href={`/features/${related}`}
                className="font-semibold text-brand-link no-underline hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-link"
              >
                {titleForSlug(related)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
