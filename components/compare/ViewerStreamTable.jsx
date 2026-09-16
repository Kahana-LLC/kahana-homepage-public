import Link from 'next/link';
import { ArrowTopRightOnSquareIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { productHref } from '../../lib/productLinks';
import { trackButtonClick } from '../../utils/analytics';
import { VIEWER_KAHANA, VIEWER_STREAMERS } from '../../data/viewer-stream-compare';
import BrandMark from './BrandMark';
import { getComparisonBlogHref } from '../../data/platform-blog-links';

function AdsBadge({ kind }) {
  if (kind === 'none') {
    return (
      <span className="inline-flex rounded-full bg-[#E8F0D8] px-2.5 py-0.5 text-xs font-semibold text-[#3D5A1A]">
        Zero ads
      </span>
    );
  }
  return (
    <span className="inline-flex rounded-full bg-[#F4E4D8] px-2.5 py-0.5 text-xs font-semibold text-[#8A3B12]">
      Ads
    </span>
  );
}

function PriceBadge({ kind }) {
  if (kind === 'free') {
    return (
      <span className="inline-flex rounded-full bg-[#E8F0D8] px-2.5 py-0.5 text-xs font-semibold text-[#3D5A1A]">
        Free
      </span>
    );
  }
  return (
    <span className="inline-flex rounded-full bg-[#EDE6D2] px-2.5 py-0.5 text-xs font-semibold text-[#5C4520]">
      Paid
    </span>
  );
}

export default function ViewerStreamTable({ t }) {
  const exploreUrl = productHref('/library', 'compare_viewer_explore');
  const rows = [...VIEWER_STREAMERS, VIEWER_KAHANA];

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#8A6622]">
          {t('compare.viewerKicker')}
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#3B2F1A] sm:text-4xl">
          {t('compare.viewerTitle')}
        </h2>
        <p className="mt-3 text-base text-[#5C4520] sm:text-lg">{t('compare.viewerLead')}</p>
      </div>

      <div className="mt-10 overflow-x-auto rounded-[1.75rem] bg-white shadow-[0_24px_60px_-28px_rgba(59,47,26,0.35)] ring-1 ring-[#E4D9C4]">
        <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
          <caption className="sr-only">{t('compare.viewerCaption')}</caption>
          <thead>
            <tr className="border-b border-[#E4D9C4] bg-[#F7F3EA]/80">
              <th scope="col" className="px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#8A6622] sm:px-6">
                {t('compare.viewerColService')}
              </th>
              <th scope="col" className="px-4 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#8A6622]">
                {t('compare.viewerColAccess')}
              </th>
              <th scope="col" className="px-4 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#8A6622]">
                {t('compare.viewerColAds')}
              </th>
              <th scope="col" className="px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#8A6622] sm:px-6">
                {t('compare.viewerColFor')}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const isKahana = row.id === 'kahana';
              return (
                <tr
                  key={row.id}
                  className={
                    isKahana
                      ? 'bg-[#F7F3EA] ring-1 ring-inset ring-[#8A6622]/25'
                      : 'border-b border-[#EDE6D2]'
                  }
                >
                  <th scope="row" className="px-5 py-4 align-top font-semibold text-[#3B2F1A] sm:px-6">
                    {isKahana ? (
                      <span className="inline-flex items-center gap-2">
                        <BrandMark id={row.id} name={row.name} size={18} />
                        {row.name}
                      </span>
                    ) : (
                      <div>
                        <a
                          href={row.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[#3B2F1A] no-underline hover:underline"
                          onClick={() => trackButtonClick(`compare_viewer_visit_${row.id}`)}
                        >
                          <BrandMark id={row.id} name={row.name} size={18} />
                          {row.name}
                          <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5 text-[#8A6622]" aria-hidden />
                        </a>
                        {getComparisonBlogHref(row.id) ? (
                          <p className="mt-2">
                            <Link
                              href={getComparisonBlogHref(row.id)}
                              className="text-xs font-medium text-[#8A6622] no-underline underline-offset-4 hover:underline"
                            >
                              {t('compare.readVs', { name: row.name })}
                            </Link>
                          </p>
                        ) : null}
                      </div>
                    )}
                  </th>
                  <td className="px-4 py-4 align-top text-[#5C4520]">
                    <div className="flex flex-col gap-1.5">
                      <PriceBadge kind={isKahana ? 'free' : 'paid'} />
                      <span>{row.access}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 align-top text-[#5C4520]">
                    <div className="flex flex-col gap-1.5">
                      <AdsBadge kind={isKahana ? 'none' : 'ads'} />
                      <span>{row.ads}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 align-top text-[#5C4520] sm:px-6">{row.catalog}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href={exploreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center justify-center gap-2 no-underline"
          onClick={() => trackButtonClick('compare_viewer_explore')}
        >
          <MagnifyingGlassIcon className="h-5 w-5 shrink-0" aria-hidden />
          {t('home.explore')}
        </a>
        <Link
          href="/ad-free-commitment"
          className="btn-secondary inline-flex items-center justify-center no-underline"
        >
          {t('compare.viewerAdFreeCta')}
        </Link>
      </div>

      <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-[#8A9378]">
        {t('compare.viewerFinePrint')}
      </p>
    </div>
  );
}
