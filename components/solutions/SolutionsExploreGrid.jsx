'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { GALLERY_PAGE_SIZE, getGalleryGradientStyle } from '../../data/oasisFeaturesCatalog';
import { GalleryCardSurface } from '../features/GalleryCardSurface';
import GalleryPaginationControls from '../features/GalleryPaginationControls';

export const SOLUTION_EXPLORE_TILES = [
  {
    href: '/solutions/remote-workforce',
    label: 'Remote & BYOD workforce',
    searchText: 'remote byod workforce distributed work from home hybrid laptop',
  },
  {
    href: '/solutions/merger-integration',
    label: 'M&A onboarding',
    searchText: 'm&a merger acquisition integration onboarding day one divestiture',
  },
  {
    href: '/solutions/external-workforce',
    label: 'Third-party onboarding',
    searchText: 'third party vendor contractor external workforce partner access',
  },
  {
    href: '/solutions/vdi-reduction',
    label: 'VDI reduction',
    searchText: 'vdi virtual desktop citrix vmware cost reduction thin client',
  },
  {
    href: '/solutions/saas-and-web-apps',
    label: 'SaaS & web apps',
    searchText: 'saas web applications cloud apps salesforce workday',
  },
  {
    href: '/solutions/privileged-user-management',
    label: 'Privileged user access',
    searchText: 'privileged admin break glass elevated access iam',
  },
  {
    href: '/solutions/zero-trust-security',
    label: 'Zero trust',
    searchText: 'zero trust zta identity device posture continuous verification',
  },
  {
    href: '/solutions/secure-browsing',
    label: 'Secure browsing',
    searchText: 'secure browsing isolation safe web malware phishing',
  },
  {
    href: '/solutions/workplace-enablement',
    label: 'Workplace enablement',
    searchText: 'workplace productivity employee experience digital workplace',
  },
];

function normalizeHref(href) {
  if (!href) return '';
  const h = href.split('?')[0];
  return h.endsWith('/') ? h.slice(0, -1) : h;
}

function tileMatchesQuery(tile, q) {
  if (!q) return true;
  return tile.searchText.includes(q) || tile.label.toLowerCase().includes(q);
}

export default function SolutionsExploreGrid({
  currentHref,
  heading = 'Why enterprises adopt Oasis',
  intro = 'Oasis meets teams where work happens: browser-first SaaS, external collaborators, and governance in the session. Explore how each use case fits your program.',
}) {
  const current = normalizeHref(currentHref);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SOLUTION_EXPLORE_TILES.filter((tile) => tileMatchesQuery(tile, q));
  }, [query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / GALLERY_PAGE_SIZE));

  useEffect(() => {
    setPage(1);
  }, [query]);

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  const pageTiles = useMemo(() => {
    const start = (page - 1) * GALLERY_PAGE_SIZE;
    return filtered.slice(start, start + GALLERY_PAGE_SIZE);
  }, [filtered, page]);

  const shell =
    'group relative block overflow-hidden rounded-2xl sm:rounded-3xl border border-white/25 shadow-md outline-none transition-shadow hover:shadow-lg focus-visible:ring-2 focus-visible:ring-brand-link focus-visible:ring-offset-2 focus-visible:ring-offset-oasis-green-50';

  return (
    <section className="border-y border-oasis-green-800/8 bg-oasis-green-50 py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-3 text-center text-3xl font-bold tracking-tight text-oasis-green-800">{heading}</h2>
        <p className="mx-auto mb-8 max-w-2xl text-center text-sm leading-relaxed text-oasis-green-800/90 sm:mb-10 sm:text-base">
          {intro}
        </p>

        <div className="mx-auto max-w-xl">
          <label htmlFor="solutions-explore-search" className="sr-only">
            Search use cases
          </label>
          <input
            id="solutions-explore-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search use cases…"
            autoComplete="off"
            className="w-full rounded-xl border border-oasis-green-800/20 bg-white px-4 py-3 text-oasis-green-800 shadow-sm placeholder:text-oasis-green-800/50 focus:border-brand-link focus:outline-none focus:ring-2 focus:ring-brand-link/40"
          />
        </div>

        <p className="mt-3 text-center text-sm text-oasis-green-800/75" aria-live="polite">
          {filtered.length === 0 ? 'No matches' : `${filtered.length} ${filtered.length === 1 ? 'use case' : 'use cases'}`}
        </p>

        {filtered.length === 0 ? (
          <p className="mt-10 text-center text-oasis-green-800/85">
            No use cases match that search. Try different keywords.
          </p>
        ) : (
          <>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              {pageTiles.map((tile, i) => {
                const globalIndex = SOLUTION_EXPLORE_TILES.findIndex((t) => t.href === tile.href);
                const variantIndex = globalIndex >= 0 ? globalIndex : i;
                const gradientStyle = getGalleryGradientStyle(variantIndex);
                const isActive = current === normalizeHref(tile.href);

                const inner = (
                  <>
                    <GalleryCardSurface gradientStyle={gradientStyle} />
                    <span className="relative z-10 flex min-h-[120px] items-center justify-center px-4 text-center text-base font-bold leading-snug tracking-tight text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] sm:min-h-[132px] sm:text-lg">
                      {tile.label}
                    </span>
                  </>
                );

                if (isActive) {
                  return (
                    <div
                      key={tile.href}
                      className={`${shell} cursor-default ring-2 ring-brand-link ring-offset-2 ring-offset-oasis-green-50`}
                      aria-current="page"
                      title="Current page"
                    >
                      {inner}
                    </div>
                  );
                }

                return (
                  <Link
                    key={tile.href}
                    href={tile.href}
                    className={`${shell} no-underline hover:no-underline focus:no-underline`}
                  >
                    {inner}
                  </Link>
                );
              })}
            </div>
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
