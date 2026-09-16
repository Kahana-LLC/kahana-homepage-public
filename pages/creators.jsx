import Link from 'next/link';
import { FolderPlusIcon } from '@heroicons/react/24/outline';
import SEO from '../components/SEO';
import FadeInSection from '../components/FadeInSection';
import CreatorStackLedger from '../components/compare/CreatorStackLedger';
import MarketplaceFeeTable from '../components/compare/MarketplaceFeeTable';
import ComparePageInvite from '../components/compare/ComparePageInvite';
import { ABOUT_ORIGIN } from '../config/site';
import { productHref } from '../lib/productLinks';
import { trackButtonClick } from '../utils/analytics';
import { useMarketingI18n } from '../contexts/MarketingI18n';
import FeaturesAudienceInvite from '../components/features/FeaturesAudienceInvite';
import UseCasesAudienceInvite from '../components/use-cases/UseCasesAudienceInvite';

const CANONICAL = `${ABOUT_ORIGIN}/creators`;

const GROWTH_TODAY = [
  'Unlimited hubs',
  'Unlimited counted uploads per hub',
  'Files up to 5 GB',
  '100 GB cloud storage',
  'Priority live chat',
];

const GROWTH_AHEAD = [
  'Free trial of Growth for new creators',
  'Advanced analytics',
  'Email list export',
  'Newsletters and mass messaging',
  'Advanced Kahana agent (create and update hubs)',
];

export default function CreatorsPage() {
  const { t } = useMarketingI18n();
  const createUrl = productHref('/', 'creators_page_create');

  return (
    <>
      <SEO
        title="Kahana for creators"
        description="Upload to the Kahana library. Share it for free, or set a price and earn whenever someone pays to access it."
        url={CANONICAL}
        type="website"
      />

      <div className="bg-[#F7F3EA] text-[#3B2F1A]">
        <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <FadeInSection eager>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#8A6622]">
                {t('creatorsPage.kicker')}
              </p>
              <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                {t('creatorsPage.title')}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#5C4520] sm:text-xl">
                {t('creatorsPage.lead')}
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a
                  href={createUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2 no-underline"
                  onClick={() => trackButtonClick('creators_hero_create')}
                >
                  <FolderPlusIcon className="h-5 w-5 shrink-0" aria-hidden />
                  {t('creatorsPage.cta')}
                </a>
                <Link href="/pricing" className="btn-secondary inline-flex items-center justify-center no-underline">
                  {t('compare.stackPricingCta')}
                </Link>
              </div>
              <p className="mt-4 text-sm text-[#8A9378]">{t('creatorsPage.ctaHint')}</p>
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <FadeInSection eager>
            <CreatorStackLedger t={t} />
          </FadeInSection>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <FadeInSection eager>
            <MarketplaceFeeTable t={t} />
          </FadeInSection>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
            <div className="rounded-[1.75rem] bg-white p-8 ring-1 ring-[#E4D9C4]">
              <h2 className="text-2xl font-semibold">{t('creatorsPage.growthTodayTitle')}</h2>
              <p className="mt-2 text-[#5C4520]">{t('creatorsPage.growthTodayLead')}</p>
              <ul className="mt-6 list-disc space-y-2 pl-5 text-[#5C4520]">
                {GROWTH_TODAY.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-[1.75rem] bg-white p-8 ring-1 ring-[#E4D9C4]">
              <h2 className="text-2xl font-semibold">{t('creatorsPage.growthAheadTitle')}</h2>
              <p className="mt-2 text-[#5C4520]">{t('creatorsPage.growthAheadLead')}</p>
              <ul className="mt-6 list-disc space-y-2 pl-5 text-[#5C4520]">
                {GROWTH_AHEAD.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <FeaturesAudienceInvite t={t} audience="creator" />
        <UseCasesAudienceInvite t={t} audience="creator" />

        <ComparePageInvite t={t} href="/compare?view=creator" />

        <section className="bg-[#3B2F1A] px-6 py-20 text-[#F7F3EA] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold leading-tight !text-[#F7F3EA] sm:text-4xl">
              {t('creatorsPage.closingTitle')}
            </h2>
            <p className="mt-4 text-lg text-[#F7F3EA]/85">{t('creatorsPage.closingBody')}</p>
            <a
              href={createUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-10 inline-flex items-center justify-center gap-2 !bg-[#F7F3EA] !text-[#3B2F1A] no-underline hover:!bg-white"
              onClick={() => trackButtonClick('creators_footer_create')}
            >
              <FolderPlusIcon className="h-5 w-5 shrink-0" aria-hidden />
              {t('creatorsPage.cta')}
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
