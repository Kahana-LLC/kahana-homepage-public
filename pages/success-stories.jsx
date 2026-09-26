import Link from 'next/link';
import SEO from '../components/SEO';
import FadeInSection from '../components/FadeInSection';
import DarkLibraryCta from '../components/marketing/DarkLibraryCta';
import EssaySeriesNav from '../components/marketing/EssaySeriesNav';
import LibraryStats from '../components/use-cases/LibraryStats';
import UseCaseStoryCards from '../components/use-cases/UseCaseStoryCards';
import { ABOUT_ORIGIN } from '../config/site';
import { productHref } from '../lib/productLinks';
import { useMarketingI18n } from '../contexts/MarketingI18n';
import {
  fetchKahanaLibraryStats,
  KAHANA_STATS_FALLBACK,
} from '../lib/kahanaLibraryStats';

const CANONICAL = `${ABOUT_ORIGIN}/success-stories`;

export default function SuccessStoriesPage({ stats = KAHANA_STATS_FALLBACK }) {
  const { t } = useMarketingI18n();
  const exploreUrl = productHref('/library', 'success_stories_explore');

  return (
    <>
      <SEO
        title="Creator stories | Kahana"
        description="Live Kahana hubs with price and member stats. Open a card to read the creator story, then open the hub on the Library."
        url={CANONICAL}
        type="website"
      />

      <div className="bg-[#F7F3EA] text-[#3B2F1A]">
        <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <FadeInSection eager>
              <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                {t('home.storiesPageTitle')}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#5C4520] sm:text-xl">
                {t('home.storiesPageLead')}
              </p>
              <EssaySeriesNav current="/success-stories" />
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-6xl">
            <FadeInSection eager>
              <LibraryStats stats={stats} t={t} />
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-6xl">
            <FadeInSection eager>
              <UseCaseStoryCards
                t={t}
                compact
                exploreHref={exploreUrl}
                exploreTrackId="success_stories_explore_nudge"
              />
            </FadeInSection>
          </div>
        </section>

        <DarkLibraryCta
          title={t('home.storiesClosingTitle')}
          description={t('home.storiesClosingBody')}
          libraryCampaign="success_stories_library"
          createCampaign="success_stories_create"
          libraryTrack="success_stories_library"
          createTrack="success_stories_create"
          createFirst
        >
          <p className="mt-8 text-sm text-[#F7F3EA]/70">
            <Link href="/do-well" className="underline underline-offset-2">
              What to post
            </Link>
            {' · '}
            <Link href="/creator-benefits" className="underline underline-offset-2">
              Benefits for creators
            </Link>
            {' · '}
            <Link
              href="/blog?category=Creator%20stories"
              className="underline underline-offset-2"
            >
              Creator story blogs
            </Link>
          </p>
        </DarkLibraryCta>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const stats = await fetchKahanaLibraryStats();
  return {
    props: { stats },
    revalidate: 3600,
  };
}
