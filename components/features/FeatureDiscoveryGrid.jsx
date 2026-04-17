'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { GALLERY_PAGE_SIZE, getGalleryGradientStyle, oasisFeaturesCatalog } from '../../data/oasisFeaturesCatalog';
import { GalleryCardSurface } from './GalleryCardSurface';
import GalleryPaginationControls from './GalleryPaginationControls';

/** Single gradient card linking to a feature page. */
export function FeatureCatalogCard({ item, className = '' }) {
  const gradientStyle = getGalleryGradientStyle(item.gradientVariant);
  const lineLabel = item.productLine === 'enterprise' ? 'Oasis Enterprise' : 'Oasis Browser';

  return (
    <Link
      href={item.href}
      className={`group relative flex min-h-[112px] items-center justify-center overflow-hidden rounded-2xl border-2 border-white/25 px-4 py-5 text-center shadow-md transition-[border-color,box-shadow] duration-200 hover:border-brand-link hover:shadow-lg focus-visible:border-brand-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-link focus-visible:ring-offset-2 focus-visible:ring-offset-oasis-green-50 no-underline hover:no-underline ${className}`}
      aria-label={`${item.cardTitle}: ${lineLabel} feature`}
    >
      <GalleryCardSurface gradientStyle={gradientStyle} />
      <span className="relative z-10 text-base font-semibold leading-snug text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)] sm:text-lg">
        {item.cardTitle}
      </span>
    </Link>
  );
}

const DEFAULT_TITLE = 'Explore more Oasis capabilities';
const DEFAULT_DESCRIPTION =
  'Deep dives on Oasis Browser and Oasis Enterprise: assistant, voice, governance, onboarding paths, and more.';

function matchesQuery(item, q) {
  if (!q) return true;
  return (
    item.searchText.includes(q) ||
    item.cardTitle.toLowerCase().includes(q) ||
    item.slug.toLowerCase().includes(q)
  );
}

/** Grid of links to other feature pages (excludes currentSlug when set). */
export default function FeatureDiscoveryGrid({
  currentSlug = null,
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  className = '',
}) {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const items = useMemo(
    () => oasisFeaturesCatalog.filter((x) => x.slug !== currentSlug),
    [currentSlug],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => matchesQuery(item, q));
  }, [items, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / GALLERY_PAGE_SIZE));

  useEffect(() => {
    setPage(1);
  }, [query, currentSlug]);

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  const pageItems = useMemo(() => {
    const start = (page - 1) * GALLERY_PAGE_SIZE;
    return filtered.slice(start, start + GALLERY_PAGE_SIZE);
  }, [filtered, page]);

  if (!items.length) return null;

  return (
    <section
      className={`border-t border-oasis-green-800/8 bg-oasis-green-50 py-12 md:py-16 ${className}`}
      aria-label="More Oasis feature pages"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold tracking-tight text-oasis-green-800 md:text-3xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-oasis-green-800/90">{description}</p>

        <div className="mx-auto mt-8 max-w-xl">
          <label htmlFor="feature-discovery-search" className="sr-only">
            Search features in this section
          </label>
          <input
            id="feature-discovery-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search capabilities…"
            autoComplete="off"
            className="w-full rounded-xl border border-oasis-green-800/20 bg-white px-4 py-3 text-oasis-green-800 shadow-sm placeholder:text-oasis-green-800/50 focus:border-brand-link focus:outline-none focus:ring-2 focus:ring-brand-link/40"
          />
        </div>

        <p className="mt-3 text-center text-sm text-oasis-green-800/75" aria-live="polite">
          {filtered.length === 0
            ? 'No matches'
            : `${filtered.length} ${filtered.length === 1 ? 'capability' : 'capabilities'}`}
        </p>

        {filtered.length === 0 ? (
          <p className="mt-10 text-center text-oasis-green-800/85">
            No capabilities match that search. Try different keywords.
          </p>
        ) : (
          <>
            <ul className="mt-8 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
              {pageItems.map((item) => (
                <li key={item.slug}>
                  <FeatureCatalogCard item={item} />
                </li>
              ))}
            </ul>
            <GalleryPaginationControls
              page={page}
              totalPages={totalPages}
              onPrev={() => setPage((p) => Math.max(1, p - 1))}
              onNext={() => setPage((p) => Math.min(totalPages, p + 1))}
            />
          </>
        )}
      </div>
    </section>
  );
}
