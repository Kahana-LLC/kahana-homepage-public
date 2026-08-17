import Link from 'next/link';
import { FolderPlusIcon } from '@heroicons/react/24/outline';
import SEO from '../components/SEO';
import FadeInSection from '../components/FadeInSection';
import LibraryStats from '../components/use-cases/LibraryStats';
import UseCaseStoryCards from '../components/use-cases/UseCaseStoryCards';
import { APP_URL } from '../components/nav/navConfig';
import { ABOUT_ORIGIN } from '../config/site';
import { trackButtonClick } from '../utils/analytics';
import { useMarketingI18n } from '../contexts/MarketingI18n';
import {
  fetchKahanaLibraryStats,
  KAHANA_STATS_FALLBACK,
} from '../lib/kahanaLibraryStats';

const CANONICAL = `${ABOUT_ORIGIN}/success-stories`;

export default function SuccessStoriesPage({ stats = KAHANA_STATS_FALLBACK }) {
  const { t } = useMarketingI18n();

  return (
    <>
      <SEO
        title="Success stories | Kahana"
        description="Success stories from Kahana: live hubs from people who packaged what they know. Open them on Explore."
        url={CANONICAL}
        type="website"
      />

      <div className="bg-[#F8FAF2] text-[#313A00]">
        <section className="bg-white px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <FadeInSection eager>
              <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                {t('home.storiesPageTitle')}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#495800] sm:text-xl">
                {t('home.storiesPageLead')}
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E0E8D4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-6xl">
            <FadeInSection eager>
              <LibraryStats stats={stats} t={t} />
            </FadeInSection>
          </div>
        </section>

        <section className="px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-6xl">
            <FadeInSection eager>
              <UseCaseStoryCards t={t} compact={false} />
            </FadeInSection>
          </div>
        </section>

        <section className="bg-[#313A00] px-6 py-20 text-[#F8FAF2] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-2xl text-center">
            <FadeInSection>
              <h2 className="text-3xl font-semibold leading-tight !text-[#F8FAF2] sm:text-4xl">
                {t('home.storiesClosingTitle')}
              </h2>
              <p className="mt-4 text-lg text-[#F8FAF2]/85">{t('home.storiesClosingBody')}</p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2 no-underline"
                  onClick={() => trackButtonClick('success_stories_create')}
                >
                  <FolderPlusIcon className="h-5 w-5 shrink-0" aria-hidden />
                  {t('home.create')}
                </a>
                <Link
                  href="/faq"
                  className="btn-secondary inline-flex items-center justify-center !border-[#F8FAF2]/40 !bg-transparent no-underline !text-[#F8FAF2] hover:!border-[#F8FAF2] hover:!bg-white/10 hover:!text-[#F8FAF2]"
                >
                  {t('footer.faq')}
                </Link>
              </div>
            </FadeInSection>
          </div>
        </section>
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
