import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import FeatureCatalogCard from './FeatureCatalogCard';
import { trackButtonClick } from '../../utils/analytics';
import {
  FEATURE_AUDIENCES,
  FEATURES,
  filterFeatures,
  parseFeatureAudience,
} from '../../data/marketingTaxonomy';

const PAGE_SIZE = 9;

function pageNumbers(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const set = new Set([1, total, current - 1, current, current + 1]);
  return [...set].filter((n) => n >= 1 && n <= total).sort((a, b) => a - b);
}

function queryFromPath(asPath = '') {
  const raw = asPath.includes('?') ? asPath.slice(asPath.indexOf('?') + 1) : '';
  const params = new URLSearchParams(raw);
  const pageRaw = Number(params.get('page') || '1');
  return {
    audience: parseFeatureAudience(params.get('for')),
    query: params.get('q') || '',
    page: Number.isFinite(pageRaw) && pageRaw > 0 ? pageRaw : 1,
  };
}

export default function FeaturesCatalog({ t }) {
  const router = useRouter();
  const initial = queryFromPath(router.asPath);
  const [audience, setAudienceState] = useState(initial.audience);
  const [query, setQuery] = useState(initial.query);
  const [page, setPage] = useState(initial.page);

  const replaceQuery = useCallback(
    ({ audience: nextAudience, query: nextQuery, page: nextPage }) => {
      const params = new URLSearchParams();
      if (nextAudience && nextAudience !== 'all') params.set('for', nextAudience);
      if (nextQuery.trim()) params.set('q', nextQuery.trim());
      if (nextPage > 1) params.set('page', String(nextPage));
      const search = params.toString();
      const href = search ? `/features?${search}` : '/features';
      if (router.asPath.split('#')[0] === href) return;
      router.replace(
        { pathname: '/features', query: Object.fromEntries(params.entries()) },
        href,
        { shallow: true },
      );
    },
    [router],
  );

  useEffect(() => {
    if (!router.isReady) return;
    const searchEl = typeof document !== 'undefined' ? document.getElementById('features-search') : null;
    if (searchEl && document.activeElement === searchEl) return;
    const next = queryFromPath(router.asPath);
    setAudienceState(next.audience);
    setQuery(next.query);
    setPage(next.page);
  }, [router.isReady, router.asPath]);

  useEffect(() => {
    if (!router.isReady) return;
    const handle = setTimeout(() => {
      replaceQuery({ audience, query, page });
    }, 280);
    return () => clearTimeout(handle);
  }, [audience, query, page, replaceQuery, router.isReady]);

  const setAudience = (next) => {
    const parsed = parseFeatureAudience(next);
    trackButtonClick(`features_audience_${parsed}`);
    setAudienceState(parsed);
    setPage(1);
  };

  const visible = useMemo(
    () => filterFeatures(FEATURES, { audienceId: audience, query }),
    [audience, query],
  );

  const totalPages = Math.max(1, Math.ceil(visible.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const pageItems = visible.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);
  const from = visible.length === 0 ? 0 : (safePage - 1) * PAGE_SIZE + 1;
  const to = Math.min(safePage * PAGE_SIZE, visible.length);

  function goToPage(next) {
    const clamped = Math.min(Math.max(1, next), totalPages);
    setPage(clamped);
    document.getElementById('features-gallery')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div>
      <div className="mx-auto max-w-xl">
        <label htmlFor="features-search" className="sr-only">
          {t('featuresPage.searchLabel')}
        </label>
        <div className="relative">
          <MagnifyingGlassIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#8A6622]" />
          <input
            id="features-search"
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder={t('featuresPage.searchPlaceholder')}
            autoComplete="off"
            className="w-full rounded-full border border-[#E4D9C4] bg-white py-3 pl-12 pr-4 text-base text-[#3B2F1A] outline-none placeholder:text-[#8A9378] focus:border-[#8A6622] focus:ring-2 focus:ring-[#8A6622]/20"
          />
        </div>
      </div>

      <div
        className="mt-8 flex flex-wrap justify-center gap-2"
        role="tablist"
        aria-label={t('featuresPage.filterLabel')}
      >
        {FEATURE_AUDIENCES.map((option) => {
          const selected = audience === option.id;
          const count = filterFeatures(FEATURES, { audienceId: option.id, query }).length;
          return (
            <button
              key={option.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setAudience(option.id)}
              className={`compare-filter-chip ${
                selected ? 'compare-filter-chip--on' : 'compare-filter-chip--off'
              }`}
            >
              {option.id === 'all'
                ? t('featuresPage.filterAll')
                : option.id === 'creator'
                  ? t('featuresPage.filterCreators')
                  : t('featuresPage.filterLearners')}
              <span className="compare-filter-chip__count">{count}</span>
            </button>
          );
        })}
      </div>

      <p id="features-gallery" className="mt-6 scroll-mt-24 text-center text-sm text-[#666666]">
        {visible.length === 0
          ? t('featuresPage.resultCount', { count: 0 })
          : t('compare.pageShowing', { from, to, count: visible.length })}
      </p>

      {visible.length === 0 ? (
        <p className="mt-10 text-center text-[#5C4520]">{t('featuresPage.empty')}</p>
      ) : (
        <ul className="mt-8 grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {pageItems.map((item) => (
            <FeatureCatalogCard
              key={item.slug}
              href={`/features/${item.slug}`}
              slug={item.slug}
              title={item.title}
              summary={item.summary}
            />
          ))}
        </ul>
      )}

      {visible.length > PAGE_SIZE ? (
        <nav
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
          aria-label={t('compare.pageOf', { page: safePage, pages: totalPages })}
        >
          <button
            type="button"
            className="compare-pager-btn compare-pager-btn--off"
            disabled={safePage <= 1}
            onClick={() => goToPage(safePage - 1)}
          >
            {t('compare.pagePrev')}
          </button>
          {pageNumbers(safePage, totalPages).map((n, i, arr) => (
            <span key={n} className="inline-flex items-center gap-2">
              {i > 0 && n - arr[i - 1] > 1 ? (
                <span className="px-1 text-[#8A9378]" aria-hidden>
                  …
                </span>
              ) : null}
              <button
                type="button"
                aria-current={n === safePage ? 'page' : undefined}
                className={`compare-pager-btn ${
                  n === safePage ? 'compare-pager-btn--on' : 'compare-pager-btn--off'
                }`}
                onClick={() => goToPage(n)}
              >
                {n}
              </button>
            </span>
          ))}
          <button
            type="button"
            className="compare-pager-btn compare-pager-btn--off"
            disabled={safePage >= totalPages}
            onClick={() => goToPage(safePage + 1)}
          >
            {t('compare.pageNext')}
          </button>
        </nav>
      ) : null}
    </div>
  );
}
