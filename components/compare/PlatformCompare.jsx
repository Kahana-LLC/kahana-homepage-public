import { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ArrowTopRightOnSquareIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import RainbowHoverCard from '../home/platform/RainbowHoverCard';
import BrandMark from './BrandMark';
import { productHref } from '../../lib/productLinks';
import { trackButtonClick } from '../../utils/analytics';
import { getComparisonBlogHref } from '../../data/platform-blog-links';
import {
  COMPARE_AUDIENCES,
  COMPARE_PLATFORMS,
  PLATFORM_COMPARE_CATEGORIES,
  categoryLabel,
  filterComparePlatforms,
} from '../../data/platform-compare';

const PAGE_SIZE = 6;

function visitLabel(name) {
  return `Visit ${name}`;
}

function pageNumbers(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const set = new Set([1, total, current - 1, current, current + 1]);
  return [...set].filter((n) => n >= 1 && n <= total).sort((a, b) => a - b);
}

function parseAudience(queryView) {
  const raw = Array.isArray(queryView) ? queryView[0] : queryView;
  if (raw === 'learner' || raw === 'creator') return raw;
  return 'all';
}

export default function PlatformCompare({ t }) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [categoryId, setCategoryId] = useState('all');
  const [audienceId, setAudienceId] = useState(() => parseAudience(router.query.view));
  const [openId, setOpenId] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!router.isReady) return;
    setAudienceId(parseAudience(router.query.view));
  }, [router.isReady, router.query.view]);

  const setAudience = useCallback(
    (next) => {
      const parsed = parseAudience(next);
      setAudienceId(parsed);
      trackButtonClick(`compare_audience_${parsed}`);
      router.replace(
        {
          pathname: '/compare',
          query: parsed === 'all' ? {} : { view: parsed },
        },
        parsed === 'all' ? '/compare' : `/compare?view=${parsed}`,
        { shallow: true },
      );
    },
    [router],
  );

  const visible = useMemo(
    () => filterComparePlatforms(COMPARE_PLATFORMS, { categoryId, query, audienceId }),
    [categoryId, query, audienceId],
  );

  useEffect(() => {
    setPage(1);
  }, [query, categoryId, audienceId]);

  const totalPages = Math.max(1, Math.ceil(visible.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const pageItems = visible.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);
  const from = visible.length === 0 ? 0 : (safePage - 1) * PAGE_SIZE + 1;
  const to = Math.min(safePage * PAGE_SIZE, visible.length);

  function goToPage(next) {
    const clamped = Math.min(Math.max(1, next), totalPages);
    setPage(clamped);
    document.getElementById('compare-library')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  const counts = useMemo(() => {
    const scoped = filterComparePlatforms(COMPARE_PLATFORMS, {
      categoryId: 'all',
      query: '',
      audienceId,
    });
    const byCat = { all: scoped.length };
    for (const cat of PLATFORM_COMPARE_CATEGORIES) {
      if (cat.id === 'all') continue;
      byCat[cat.id] = scoped.filter((p) => p.category === cat.id).length;
    }
    return byCat;
  }, [audienceId]);

  const exploreUrl = productHref('/library', 'compare_explore');
  const createUrl = productHref('/', 'compare_create');

  return (
    <div>
      <div className="mx-auto max-w-xl">
        <label htmlFor="platform-compare-search" className="sr-only">
          {t('compare.searchLabel')}
        </label>
        <div className="relative">
          <MagnifyingGlassIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#8A6622]" />
          <input
            id="platform-compare-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('compare.searchPlaceholder')}
            autoComplete="off"
            className="w-full rounded-full border border-[#E4D9C4] bg-white py-3 pl-12 pr-4 text-base text-[#3B2F1A] outline-none placeholder:text-[#8A9378] focus:border-[#8A6622] focus:ring-2 focus:ring-[#8A6622]/20"
          />
        </div>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-2" role="group" aria-label={t('compare.audienceLabel')}>
        {COMPARE_AUDIENCES.map((aud) => {
          const active = audienceId === aud.id;
          return (
            <button
              key={aud.id}
              type="button"
              onClick={() => setAudience(aud.id)}
              className={`compare-filter-chip ${
                active ? 'compare-filter-chip--on' : 'compare-filter-chip--off'
              }`}
            >
              {aud.id === 'all'
                ? t('compare.audienceAll')
                : aud.id === 'creator'
                  ? t('compare.audienceCreator')
                  : t('compare.audienceLearner')}
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-2" role="group" aria-label={t('compare.filterLabel')}>
        {PLATFORM_COMPARE_CATEGORIES.map((cat) => {
          const active = categoryId === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setCategoryId(cat.id)}
              className={`compare-filter-chip ${
                active ? 'compare-filter-chip--on' : 'compare-filter-chip--off'
              }`}
            >
              {cat.label}
              <span className="compare-filter-chip__count">{counts[cat.id] ?? 0}</span>
            </button>
          );
        })}
      </div>

      <p id="compare-library" className="mt-6 scroll-mt-24 text-center text-sm text-[#666666]">
        {visible.length === 0
          ? t('compare.resultCount', { count: 0 })
          : t('compare.pageShowing', { from, to, count: visible.length })}
      </p>

      {visible.length === 0 ? (
        <p className="mt-10 text-center text-[#5C4520]">{t('compare.empty')}</p>
      ) : (
        <ul className="mt-8 grid list-none gap-5 lg:grid-cols-2">
          {pageItems.map((platform) => {
            const open = openId === platform.id;
            const vsHref = getComparisonBlogHref(platform.id);
            return (
              <li key={platform.id}>
                <RainbowHoverCard className="h-full" innerClassName="flex h-full flex-col bg-white px-6 py-6 sm:px-7">
                  <article className="flex h-full flex-col">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#8A6622]">
                      {categoryLabel(platform.category)}
                    </p>
                    <h2 className="mt-1 flex items-center gap-2.5 text-xl font-semibold text-[#3B2F1A]">
                      <BrandMark id={platform.id} name={platform.name} size={22} />
                      {platform.name}
                    </h2>
                    <p className="mt-3 text-[#666666]">{platform.blurb}</p>
                    <p className="mt-4 text-[#5C4520]">
                      <span className="font-semibold text-[#3B2F1A]">{t('compare.withKahana')} </span>
                      {platform.withKahana}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <a
                        href={platform.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-base font-medium text-[#8A6622] no-underline underline-offset-4 hover:underline"
                        onClick={() => trackButtonClick(`compare_visit_${platform.id}`)}
                      >
                        {visitLabel(platform.name)}
                        <ArrowTopRightOnSquareIcon className="h-4 w-4" aria-hidden />
                      </a>
                      {vsHref ? (
                        <Link
                          href={vsHref}
                          className="inline-flex items-center text-base font-medium text-[#5C4520] no-underline underline-offset-4 hover:underline"
                        >
                          {t('compare.readVs', { name: platform.name })}
                        </Link>
                      ) : null}
                    </div>
                    <button
                      type="button"
                      className="mt-4 self-start text-sm font-medium text-[#5C4520] underline-offset-4 hover:underline"
                      onClick={() => setOpenId(open ? null : platform.id)}
                      aria-expanded={open}
                    >
                      {open ? t('compare.hideCtas') : t('compare.showCtas')}
                    </button>
                    {open ? (
                      <div className="mt-4 flex flex-wrap gap-3 border-t border-[#E4D9C4] pt-4">
                        <a
                          href={exploreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary inline-flex items-center justify-center no-underline"
                          onClick={() => trackButtonClick(`compare_explore_${platform.id}`)}
                        >
                          {t('home.explore')}
                        </a>
                        <a
                          href={createUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary inline-flex items-center justify-center no-underline"
                          onClick={() => trackButtonClick(`compare_create_${platform.id}`)}
                        >
                          {t('home.create')}
                        </a>
                      </div>
                    ) : null}
                  </article>
                </RainbowHoverCard>
              </li>
            );
          })}
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
