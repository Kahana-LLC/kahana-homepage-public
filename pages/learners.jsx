import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import SEO from '../components/SEO';
import FadeInSection from '../components/FadeInSection';
import ViewerStreamTable from '../components/compare/ViewerStreamTable';
import ComparePageInvite from '../components/compare/ComparePageInvite';
import { ABOUT_ORIGIN } from '../config/site';
import { productHref } from '../lib/productLinks';
import { trackButtonClick } from '../utils/analytics';
import { useMarketingI18n } from '../contexts/MarketingI18n';
import FeaturesAudienceInvite from '../components/features/FeaturesAudienceInvite';
import UseCasesAudienceInvite from '../components/use-cases/UseCasesAudienceInvite';
import FeatureCatalogCard from '../components/features/FeatureCatalogCard';
import { FEATURES } from '../data/marketingTaxonomy';
import LibraryMission from '../components/marketing/LibraryMission';
import Link from 'next/link';

const CANONICAL = `${ABOUT_ORIGIN}/learners`;

const HABIT_SLUGS = ['cognition-streak', 'analytics', 'notifications'];

export default function LearnersPage() {
  const { t } = useMarketingI18n();
  const exploreUrl = productHref('/library', 'learners_page_explore');
  const accountUrl = productHref('/', 'learners_page_account');
  const analyticsUrl = productHref('/analytics', 'learners_page_analytics');
  const habitItems = HABIT_SLUGS.map((slug) => FEATURES.find((item) => item.slug === slug)).filter(
    Boolean,
  );

  return (
    <>
      <SEO
        title="Kahana for learners"
        description="A free, ad-free library with Cognition streak, learning analytics, and optional reminders to keep reading."
        url={CANONICAL}
        type="website"
      />

      <div className="bg-[#F7F3EA] text-[#3B2F1A]">
        <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <FadeInSection eager>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#8A6622]">
                {t('learnersPage.kicker')}
              </p>
              <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                {t('learnersPage.title')}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#5C4520] sm:text-xl">
                {t('learnersPage.lead')}
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a
                  href={exploreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2 no-underline"
                  onClick={() => trackButtonClick('learners_hero_explore')}
                >
                  <MagnifyingGlassIcon className="h-5 w-5 shrink-0" aria-hidden />
                  {t('home.explore')}
                </a>
                <a
                  href={accountUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center justify-center no-underline"
                  onClick={() => trackButtonClick('learners_hero_account')}
                >
                  {t('learnersPage.accountCta')}
                </a>
              </div>
              <p className="mt-4 text-sm text-[#8A9378]">{t('learnersPage.ctaHint')}</p>
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-6xl">
            <FadeInSection eager>
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-[#3B2F1A] sm:text-4xl">
                  {t('learnersPage.habitsTitle')}
                </h2>
                <p className="mt-3 text-lg text-[#5C4520]">{t('learnersPage.habitsLead')}</p>
              </div>
              <ul className="mt-10 grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3">
                {habitItems.map((item) => (
                  <FeatureCatalogCard
                    key={item.slug}
                    href={`/features/${item.slug}`}
                    slug={item.slug}
                    title={
                      item.slug === 'notifications' ? 'Reminder emails' : item.title
                    }
                    summary={
                      item.slug === 'notifications'
                        ? 'Opt in to same-day streak reminders, weekly snapshots, and restart emails so you finish what you started.'
                        : item.summary
                    }
                  />
                ))}
              </ul>
              <p className="mt-10 text-center">
                <a
                  href={analyticsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center justify-center no-underline"
                  onClick={() => trackButtonClick('learners_habits_analytics')}
                >
                  {t('learnersPage.habitsCta')}
                </a>
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <FadeInSection eager>
            <ViewerStreamTable t={t} />
          </FadeInSection>
        </section>

        <FeaturesAudienceInvite t={t} audience="learner" />
        <UseCasesAudienceInvite t={t} audience="learner" />

        <ComparePageInvite t={t} href="/compare?view=learner" />

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">Someone left you a path</h2>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                Search gives you results. A person can give you a path. You open what they
                arranged, save it, and if it helped, leave Aura so the next person can find the
                door. That signal is not a like. Creators can also charge for access. That money
                is separate from Aura.
              </p>
              <p className="mt-4 text-lg">
                <Link href="/blog/someone-left-you-a-path" className="font-semibold text-[#8A6622] underline underline-offset-2">
                  Read the guide
                </Link>
              </p>
            </FadeInSection>
          </div>
        </section>

        <LibraryMission />

        <section className="bg-[#3B2F1A] px-6 py-20 text-[#F7F3EA] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold leading-tight !text-[#F7F3EA] sm:text-4xl">
              {t('learnersPage.closingTitle')}
            </h2>
            <p className="mt-4 text-lg text-[#F7F3EA]/85">{t('learnersPage.closingBody')}</p>
            <a
              href={accountUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-10 inline-flex items-center justify-center !bg-[#F7F3EA] !text-[#3B2F1A] no-underline hover:!bg-white"
              onClick={() => trackButtonClick('learners_footer_account')}
            >
              {t('learnersPage.accountCta')}
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
