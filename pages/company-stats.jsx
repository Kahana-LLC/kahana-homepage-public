import Link from 'next/link';
import SEO from '../components/SEO';
import FadeInSection from '../components/FadeInSection';
import LibraryPriceChart from '../components/marketing/LibraryPriceChart';
import LibraryYearChart from '../components/marketing/LibraryYearChart';
import {
  ExploreLibraryButton,
  ShareUniqueKnowledgeButton,
} from '../components/marketing/LibraryActionButtons';
import { ABOUT_ORIGIN } from '../config/site';
import { productHref } from '../lib/productLinks';
import { trackButtonClick } from '../utils/analytics';
import {
  CREATOR_EARNINGS_BY_YEAR,
  LIBRARY_HUBS_BY_YEAR,
  LIBRARY_NUMBERS,
  LIBRARY_NUMBERS_AS_OF,
  PRICING_BY_CATEGORY,
  PURCHASES_BY_PRICE,
  formatCount,
  formatMoney,
} from '../data/libraryInNumbers';

const CANONICAL = `${ABOUT_ORIGIN}/company-stats`;
const N = LIBRARY_NUMBERS;

const LEDGER = [
  {
    id: 'started',
    kicker: 'When it started',
    title: N.firstHubCreated,
    body: `The oldest hub still in the Library was created on ${N.firstHubCreated}. Kahana was called Curio then. The first account followed on ${N.firstAccount}. Those hubs are part of the Aura Library now.`,
  },
  {
    id: 'people',
    kicker: 'People',
    title: formatCount(N.accounts),
    body: `${formatCount(N.accounts)} accounts. ${formatCount(N.publicCreators)} of them have a public creator profile. Most accounts have not chosen a role, so this page does not split the rest into learners.`,
  },
  {
    id: 'value',
    kicker: 'Creator earnings',
    title: formatMoney(N.creatorEarningsUsd),
    body: `Creators kept this from ${formatCount(N.creatorTransactions)} hub purchases after Kahana’s 5% fee. Buyers paid ${formatMoney(N.buyerPaidUsd)}. Purchases under $3 are left out. No creator or buyer is named. Alongside that, people have saved ${formatCount(N.allNotes)} notes and ${formatCount(N.allFiles)} files, and given ${formatCount(N.auraGiven)} Aura.`,
  },
  {
    id: 'catalog',
    kicker: 'In the Library',
    title: formatCount(N.libraryHubs),
    body: `${formatCount(N.libraryHubs)} hubs are public and listed, holding ${formatCount(N.libraryFiles)} files, ${formatCount(N.libraryNotes)} notes, and ${formatCount(N.libraryLinks)} links. ${formatCount(N.allHubs)} hubs exist in all, including private ones. ${formatCount(N.freeLibraryHubs)} listed hubs are free and ${formatCount(N.pricedLibraryHubs)} have a price. ${formatCount(N.clubs)} clubs exist.`,
  },
];

export default function CompanyStatsPage() {
  const libraryHref = productHref('/library', 'company_stats_explore');
  const createHref = productHref('/', 'company_stats_create');

  return (
    <>
      <SEO
        title="Historical creator earnings | Kahana"
        description="What creators have kept from hub purchases on Kahana, how public hubs are priced, and the size of the Library."
        url={CANONICAL}
        type="website"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Historical creator earnings',
          description:
            'Historical creator earnings on Kahana, how public hubs are priced, and the size of the Library.',
          url: CANONICAL,
        }}
      />

      <div className="bg-[#F7F3EA] text-[#3B2F1A]">
        <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <FadeInSection eager>
              <p className="inline-flex rounded-full bg-[#EDE6D2] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#5C4520]">
                Last calculated {LIBRARY_NUMBERS_AS_OF}
              </p>
              <h1 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                Historical creator earnings
              </h1>
            </FadeInSection>
          </div>
          <div className="mx-auto mt-12 max-w-3xl">
            <FadeInSection eager>
              <LibraryYearChart
                earnings={CREATOR_EARNINGS_BY_YEAR}
                hubs={LIBRARY_HUBS_BY_YEAR}
                earningsTotal={N.creatorEarningsUsd}
              />
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
            {LEDGER.map((item) => (
              <FadeInSection key={item.id}>
                <article className="h-full rounded-[20px] bg-white px-6 py-6 shadow-[0_1px_0_rgba(59,47,26,0.06)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8A6622]">
                    {item.kicker}
                  </p>
                  <h2 className="mt-3 font-bricolage text-4xl font-semibold tracking-tight text-[#3B2F1A]">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-[#666666]">{item.body}</p>
                </article>
              </FadeInSection>
            ))}
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8A6622]">
                How hubs are priced
              </p>
              <h2 className="mt-3 font-bricolage text-3xl font-semibold tracking-tight text-[#3B2F1A] sm:text-4xl">
                The middle one-time price is {formatMoney(N.oneTimeMedianUsd)}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#5C4520]">
                {formatCount(N.freeLibraryHubs)} of the {formatCount(N.libraryHubs)} public hubs are free.
                {' '}
                {formatCount(N.oneTimeLibraryHubs)} charge once, and the middle of those list prices is {formatMoney(N.oneTimeMedianUsd)}.
                The average is {formatMoney(N.oneTimeAverageUsd)}, because a few high prices pull it up.
                {' '}
                {formatCount(N.monthlyLibraryHubs)} hubs charge every month, and those prices cluster at {formatMoney(N.monthlyMedianUsd)}.
              </p>
            </FadeInSection>
            <FadeInSection>
              <aside className="mt-8 overflow-hidden rounded-[20px] bg-white shadow-[0_1px_0_rgba(59,47,26,0.06)]">
                <div className="border-b border-[#E4D9C4] px-5 py-4 sm:px-6">
                  <p className="font-bricolage text-lg font-semibold tracking-tight text-[#3B2F1A]">
                    Purchases by price
                  </p>
                  <p className="mt-1 text-sm text-[#666666]">
                    Each point is an exact price. The line is how many purchases were made there. The curve behind it is a smoothed estimate. The scale runs through $500.
                  </p>
                </div>
                <div className="space-y-4 px-5 py-5 sm:px-6">
                  <div className="flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-[0.08em] text-[#5C4520]">
                    <span className="inline-flex items-center gap-2">
                      <span className="inline-block h-2 w-5 rounded-full bg-[#8A6622]/40" />
                      Estimate
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <span className="inline-block h-0.5 w-5 rounded-full bg-[#8A6622]" />
                      Purchases
                    </span>
                  </div>
                  <LibraryPriceChart points={PURCHASES_BY_PRICE} />
                  <p className="text-sm leading-relaxed text-[#666666]">
                    Purchases under $3 are left out. Creator and hub names are left out. The tallest point is $375, with 65 purchases.
                    In Knowledge, creators kept {formatMoney(PRICING_BY_CATEGORY[0].earnings)} from {formatCount(PRICING_BY_CATEGORY[0].purchases)} purchases, and the middle one-time price is {formatMoney(PRICING_BY_CATEGORY[0].oneTimeMedian)}.
                    Hubs without a category kept {formatMoney(PRICING_BY_CATEGORY[1].earnings)} from {formatCount(PRICING_BY_CATEGORY[1].purchases)} purchases.
                  </p>
                  <p className="text-sm leading-relaxed text-[#5C4520]">
                    Creators can open the same view in the app. Library pricing is in beta.{' '}
                    <Link
                      href={productHref('/analytics/pricing', 'company_stats_pricing')}
                      className="font-semibold text-[#8A6622] underline underline-offset-2"
                    >
                      See Library pricing
                    </Link>
                  </p>
                </div>
              </aside>
            </FadeInSection>
          </div>
        </section>

        <section className="px-6 pb-20 sm:px-10 lg:px-16">
          <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
            <ExploreLibraryButton
              href={libraryHref}
              onClick={() => trackButtonClick('company_stats_explore')}
            />
            <ShareUniqueKnowledgeButton
              href={createHref}
              onClick={() => trackButtonClick('company_stats_create')}
            />
          </div>
        </section>
      </div>
    </>
  );
}
