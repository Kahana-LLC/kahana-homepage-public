import React from 'react';
import Link from 'next/link';
import { oasisFeaturesCatalog, FEATURE_CARD_GRADIENTS } from '../../data/oasisFeaturesCatalog';

/** Single gradient card linking to a feature page. */
export function FeatureCatalogCard({ item, className = '' }) {
  const bg = FEATURE_CARD_GRADIENTS[item.gradientVariant % FEATURE_CARD_GRADIENTS.length];
  const lineLabel = item.productLine === 'enterprise' ? 'Oasis Enterprise' : 'Oasis Browser';

  return (
    <Link
      href={item.href}
      className={`group flex min-h-[112px] items-center justify-center rounded-2xl border-2 border-transparent px-4 py-5 text-center shadow-sm transition-[border-color,box-shadow] duration-200 hover:border-brand-link focus-visible:border-brand-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-link focus-visible:ring-offset-2 focus-visible:ring-offset-[#f8faf9] no-underline hover:no-underline ${className}`}
      style={{ background: bg }}
      aria-label={`${item.cardTitle}: ${lineLabel} feature`}
    >
      <span className="text-base font-semibold leading-snug text-white sm:text-lg">{item.cardTitle}</span>
    </Link>
  );
}

const DEFAULT_TITLE = 'Explore more Oasis capabilities';
const DEFAULT_DESCRIPTION =
  'Deep dives on Oasis Browser and Oasis Enterprise: assistant, voice, governance, onboarding paths, and more.';

/** Grid of links to other feature pages (excludes currentSlug when set). */
export default function FeatureDiscoveryGrid({
  currentSlug = null,
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  className = '',
}) {
  const items = oasisFeaturesCatalog.filter((x) => x.slug !== currentSlug);
  if (!items.length) return null;

  return (
    <section
      className={`border-t border-oasis-green-800/8 bg-oasis-green-50 py-12 md:py-16 ${className}`}
      aria-label="More Oasis feature pages"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold tracking-tight text-oasis-green-800 md:text-3xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-oasis-green-800/90">{description}</p>
        <ul className="mt-10 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {items.map((item) => (
            <li key={item.slug}>
              <FeatureCatalogCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
