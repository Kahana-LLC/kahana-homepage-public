import Link from 'next/link';
import { FolderPlusIcon } from '@heroicons/react/24/outline';
import SEO from '../components/SEO';
import FadeInSection from '../components/FadeInSection';
import CreatorStackLedger from '../components/compare/CreatorStackLedger';
import MarketplaceFeeTable from '../components/compare/MarketplaceFeeTable';
import ComparePageInvite from '../components/compare/ComparePageInvite';
import FaqAccordion from '../components/faq/FaqAccordion';
import GrowthTrialPill from '../components/marketing/GrowthTrialPill';
import { ABOUT_ORIGIN } from '../config/site';
import { productHref } from '../lib/productLinks';
import { CREATORS_PAGE_FAQS } from '../data/creatorPageFaqs';
import { trackButtonClick } from '../utils/analytics';
import { useMarketingI18n } from '../contexts/MarketingI18n';
import FeaturesAudienceInvite from '../components/features/FeaturesAudienceInvite';
import UseCasesAudienceInvite from '../components/use-cases/UseCasesAudienceInvite';

const CANONICAL = `${ABOUT_ORIGIN}/creators`;

export default function CreatorsPage() {
  const { t } = useMarketingI18n();
  const createUrl = productHref('/billing?intent=sell&trial=growth', 'creators_page_create');

  return (
    <>
      <SEO
        title="Kahana for creators"
        description="Upload to the Kahana library. Share it for free, or set a price and earn whenever someone pays to access it. 14-day Growth trial available."
        url={CANONICAL}
        type="website"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: CREATORS_PAGE_FAQS.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer.replace(/\n\n/g, ' ') },
          })),
        }}
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
              <div className="mt-6 flex justify-center">
                <GrowthTrialPill
                  href={createUrl}
                  onClick={() => trackButtonClick('creators_hero_trial_pill')}
                />
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href={createUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2 no-underline"
                  onClick={() => trackButtonClick('creators_hero_trial')}
                >
                  <FolderPlusIcon className="h-5 w-5 shrink-0" aria-hidden />
                  {t('creatorsPage.cta')}
                </a>
                <Link href="/pricing" className="btn-secondary inline-flex items-center justify-center no-underline">
                  {t('compare.stackPricingCta')}
                </Link>
                <Link
                  href="/affiliates"
                  className="btn-secondary inline-flex items-center justify-center no-underline"
                  onClick={() => trackButtonClick('creators_hero_affiliate')}
                >
                  Become an affiliate
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

        <FeaturesAudienceInvite t={t} audience="creator" />
        <UseCasesAudienceInvite t={t} audience="creator" />

        <ComparePageInvite t={t} href="/compare?view=creator" />

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">Creators FAQ</h2>
              <p className="mt-3 text-lg text-[#666666]">
                Growth trial, fees, Library listing, and becoming an affiliate.
              </p>
              <FaqAccordion className="mt-8" items={CREATORS_PAGE_FAQS} />
              <p className="mt-8 text-base text-[#5C4520]">
                More on{' '}
                <Link href="/creator-benefits" className="text-[#8A6622] underline underline-offset-2">
                  benefits for creators
                </Link>
                ,{' '}
                <Link href="/affiliates" className="text-[#8A6622] underline underline-offset-2">
                  becoming an affiliate
                </Link>
                , and{' '}
                <Link href="/faq" className="text-[#8A6622] underline underline-offset-2">
                  the full FAQ
                </Link>
                .
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="bg-[#3B2F1A] px-6 py-20 text-[#F7F3EA] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold leading-tight !text-[#F7F3EA] sm:text-4xl">
              {t('creatorsPage.closingTitle')}
            </h2>
            <p className="mt-4 text-lg text-[#F7F3EA]/85">{t('creatorsPage.closingBody')}</p>
            <div className="mt-6 flex justify-center">
              <GrowthTrialPill
                href={createUrl}
                dark
                onClick={() => trackButtonClick('creators_footer_trial_pill')}
              />
            </div>
            <a
              href={createUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8 inline-flex items-center justify-center gap-2 !bg-[#F7F3EA] !text-[#3B2F1A] no-underline hover:!bg-white"
              onClick={() => trackButtonClick('creators_footer_trial')}
            >
              <FolderPlusIcon className="h-5 w-5 shrink-0" aria-hidden />
              {t('creatorsPage.cta')}
            </a>
            <p className="mt-6">
              <Link
                href="/affiliates"
                className="text-sm font-semibold text-[#F7F3EA]/85 underline underline-offset-2 hover:text-[#F7F3EA]"
                onClick={() => trackButtonClick('creators_footer_affiliate')}
              >
                Become an affiliate
              </Link>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
