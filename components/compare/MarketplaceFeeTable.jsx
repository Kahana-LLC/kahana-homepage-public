import Link from 'next/link';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { productHref } from '../../lib/productLinks';
import { trackButtonClick } from '../../utils/analytics';
import {
  FEE_EXAMPLE_SALE_USD,
  MARKETPLACE_FEE_KAHANA,
  MARKETPLACE_FEE_PEERS,
  formatMoney,
  formatPct,
  platformTakeUsd,
} from '../../data/marketplace-fee-compare';
import { getComparisonBlogHref } from '../../data/platform-blog-links';
import BrandMark from './BrandMark';

const BAR_MAX = 20;

function FeeBar({ pct, highlight }) {
  const width = Math.min(100, (pct / BAR_MAX) * 100);
  return (
    <div className="mt-2 h-2 w-full max-w-[11rem] overflow-hidden rounded-full bg-[#EDE6D2]" aria-hidden>
      <div
        className={`h-full rounded-full ${highlight ? 'bg-[#8A6622]' : 'bg-[#C4B49A]'}`}
        style={{ width: `${width}%` }}
      />
    </div>
  );
}

export default function MarketplaceFeeTable({ t }) {
  const trialUrl = productHref('/billing?intent=sell&trial=growth', 'compare_fees_trial');
  const rows = [...MARKETPLACE_FEE_PEERS, MARKETPLACE_FEE_KAHANA];

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#8A6622]">
          {t('compare.feesKicker')}
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#3B2F1A] sm:text-4xl">
          {t('compare.feesTitle')}
        </h2>
        <p className="mt-3 text-base text-[#5C4520] sm:text-lg">{t('compare.feesLead')}</p>
      </div>

      <div className="mt-10 overflow-x-auto rounded-[1.75rem] bg-white shadow-[0_24px_60px_-28px_rgba(59,47,26,0.35)] ring-1 ring-[#E4D9C4]">
        <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
          <caption className="sr-only">{t('compare.feesCaption')}</caption>
          <thead>
            <tr className="border-b border-[#E4D9C4] bg-[#F7F3EA]/80">
              <th scope="col" className="px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#8A6622] sm:px-6">
                {t('compare.feesColMarket')}
              </th>
              <th scope="col" className="px-4 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#8A6622]">
                {t('compare.feesColPlatform')}
              </th>
              <th scope="col" className="px-4 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#8A6622]">
                {t('compare.feesColExample', { amount: formatMoney(FEE_EXAMPLE_SALE_USD) })}
              </th>
              <th scope="col" className="px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#8A6622] sm:px-6">
                {t('compare.feesColNote')}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const isKahana = row.id === 'kahana';
              const take = platformTakeUsd(row.platformFeePct);
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
                          onClick={() => trackButtonClick(`compare_fees_visit_${row.id}`)}
                        >
                          <BrandMark id={row.id} name={row.name} size={18} />
                          {row.name}
                          <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5 text-[#8A6622]" aria-hidden />
                        </a>
                        {getComparisonBlogHref(row.id) ? (
                          <p className="mt-2 font-normal">
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
                    <p className="mt-1 font-normal text-[#8A9378]">{row.note}</p>
                  </th>
                  <td className="px-4 py-4 align-top">
                    <p
                      className={`text-2xl font-semibold tabular-nums ${
                        isKahana ? 'text-[#8A6622]' : 'text-[#3B2F1A]'
                      }`}
                    >
                      {formatPct(row.platformFeePct)}
                    </p>
                    <FeeBar pct={row.platformFeePct} highlight={isKahana} />
                  </td>
                  <td className="px-4 py-4 align-top font-semibold tabular-nums text-[#3B2F1A]">
                    {formatMoney(take)}
                    <p className="mt-1 font-normal text-[#8A9378]">{t('compare.feesTakeHint')}</p>
                  </td>
                  <td className="px-5 py-4 align-top text-[#5C4520] sm:px-6">{row.processing}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href={trialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center justify-center no-underline"
          onClick={() => trackButtonClick('compare_fees_trial')}
        >
          {t('compare.stackTrialCta')}
        </a>
        <Link
          href="/pricing"
          className="btn-secondary inline-flex items-center justify-center no-underline"
          onClick={() => trackButtonClick('compare_fees_pricing')}
        >
          {t('compare.stackPricingCta')}
        </Link>
      </div>
    </div>
  );
}
