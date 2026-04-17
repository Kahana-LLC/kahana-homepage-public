import React, { useMemo, useState } from 'react';
import Script from 'next/script';
import SEO from '../../components/SEO';
import { FeatureCatalogCard } from '../../components/features/FeatureDiscoveryGrid';
import { oasisFeaturesCatalog } from '../../data/oasisFeaturesCatalog';

const CANONICAL = 'https://kahana.co/features';

const FILTER_OPTIONS = [
  { id: 'all', label: 'All' },
  { id: 'browser', label: 'Oasis Browser' },
  { id: 'enterprise', label: 'Oasis Enterprise' },
];

export default function FeaturesIndexPage() {
  const [query, setQuery] = useState('');
  const [productLine, setProductLine] = useState('all');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return oasisFeaturesCatalog.filter((item) => {
      if (productLine !== 'all' && item.productLine !== productLine) return false;
      if (!q) return true;
      return (
        item.searchText.includes(q) ||
        item.cardTitle.toLowerCase().includes(q) ||
        item.slug.toLowerCase().includes(q)
      );
    });
  }, [query, productLine]);

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Oasis features',
    url: CANONICAL,
    description:
      'Search and browse Oasis Browser and Oasis Enterprise feature deep-dives: assistant, voice, import, governance, identity, DLP, and more.',
    isPartOf: { '@type': 'WebSite', name: 'Kahana', url: 'https://kahana.co' },
  };

  return (
    <>
      <SEO
        title="Oasis features"
        description="Browse every Oasis Browser and Oasis Enterprise capability: AI assistant, voice, guided import, confirmations, session governance, IdP and DLP integration, and more."
        url={CANONICAL}
        type="website"
        schema={pageSchema}
      />
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-KQHFL9605P" strategy="afterInteractive" />
      <Script id="google-analytics-features-index" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KQHFL9605P');
        `}
      </Script>

      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <h1 className="text-center text-3xl font-bold tracking-tight text-oasis-green-800 sm:text-4xl md:text-5xl">
            Oasis features
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-oasis-green-800/90">
            Explore deep-dives on Oasis Browser and Oasis Enterprise. Search by name or topic, or filter by product line.
          </p>

          <div className="mx-auto mt-10 max-w-xl">
            <label htmlFor="features-search" className="sr-only">
              Search features
            </label>
            <input
              id="features-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search features…"
              autoComplete="off"
              className="w-full rounded-xl border border-oasis-green-800/20 bg-oasis-green-50 px-4 py-3 text-oasis-green-800 shadow-sm placeholder:text-oasis-green-800/50 focus:border-brand-link focus:outline-none focus:ring-2 focus:ring-brand-link/40"
            />
          </div>

          <div
            className="mt-6 flex flex-wrap items-center justify-center gap-2"
            role="group"
            aria-label="Filter by product line"
          >
            {FILTER_OPTIONS.map((opt) => {
              const pressed = productLine === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setProductLine(opt.id)}
                  aria-pressed={pressed}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-link ${
                    pressed
                      ? 'border-[#617500] bg-[#617500] text-white'
                      : 'border-oasis-green-800/25 bg-white text-oasis-green-800 hover:border-[#617500]/50'
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>

          {filtered.length === 0 ? (
            <p className="mt-14 text-center text-oasis-green-800/85">
              No features match that search. Try different keywords or clear the filter.
            </p>
          ) : (
            <ul className="mt-12 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
              {filtered.map((item) => (
                <li key={item.slug}>
                  <FeatureCatalogCard item={item} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
