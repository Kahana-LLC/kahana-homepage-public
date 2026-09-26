import Link from 'next/link';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import SEO from '../components/SEO';
import FadeInSection from '../components/FadeInSection';
import PlatformCompare from '../components/compare/PlatformCompare';
import { ABOUT_ORIGIN } from '../config/site';
import { productHref } from '../lib/productLinks';
import { trackButtonClick } from '../utils/analytics';
import { useMarketingI18n } from '../contexts/MarketingI18n';
import UseWithMarquee from '../components/compare/UseWithMarquee';
import { INTEGRATION_CONTACT_URL } from '../components/nav/navConfig';

const CANONICAL = `${ABOUT_ORIGIN}/compare`;

export default function ComparePage() {
  const { t } = useMarketingI18n();
  const exploreUrl = productHref('/library', 'compare_page_explore');

  return (
    <>
      <SEO
        title="Your stack | Kahana"
        description="Use Kahana with YouTube, Discord, Substack, Patreon, and the tools you already love. Build a creator or learner stack without ripping anything out."
        url={CANONICAL}
        type="website"
      />

      <div className="bg-[#F7F3EA] text-[#3B2F1A]">
        <section className="px-6 pb-8 pt-14 sm:px-10 sm:pt-16 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <FadeInSection eager>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#8A6622]">
                {t('compare.kicker')}
              </p>
              <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                {t('compare.title')}
              </h1>
              <p className="mt-4 text-lg text-[#5C4520]">{t('compare.lead')}</p>
            </FadeInSection>
          </div>
        </section>

        <section className="pb-10">
          <UseWithMarquee label={t('compare.kicker')} />
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-6xl">
            <FadeInSection eager>
              <div className="mx-auto mb-10 max-w-3xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-[#3B2F1A] sm:text-4xl">
                  {t('compare.databaseTitle')}
                </h2>
                <p className="mt-3 text-lg text-[#5C4520]">{t('compare.databaseLead')}</p>
              </div>
              <PlatformCompare t={t} />
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-12 sm:px-10 lg:px-16">
          <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-[#666666]">
            {t('compare.disclaimer')}
          </p>
        </section>

        <section className="bg-[#3B2F1A] px-6 py-20 text-[#F7F3EA] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-2xl text-center">
            <FadeInSection>
              <h2 className="text-3xl font-semibold leading-tight !text-[#F7F3EA] sm:text-4xl">
                {t('compare.closingTitle')}
              </h2>
              <p className="mt-4 text-lg text-[#F7F3EA]/85">{t('compare.closingBody')}</p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a
                  href={exploreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2 !bg-[#F7F3EA] !text-[#3B2F1A] no-underline hover:!bg-white"
                  onClick={() => trackButtonClick('compare_footer_explore')}
                >
                  <MagnifyingGlassIcon className="h-5 w-5 shrink-0" aria-hidden />
                  {t('home.explore')}
                </a>
                <a
                  href={INTEGRATION_CONTACT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center justify-center !border-[#F7F3EA]/40 !bg-transparent no-underline !text-[#F7F3EA] hover:!border-[#F7F3EA] hover:!bg-white/10 hover:!text-[#F7F3EA]"
                  onClick={() => trackButtonClick('compare_integrations_contact')}
                >
                  {t('compare.integrateCta')}
                </a>
                <Link
                  href="/success-stories"
                  className="btn-secondary inline-flex items-center justify-center !border-[#F7F3EA]/40 !bg-transparent no-underline !text-[#F7F3EA] hover:!border-[#F7F3EA] hover:!bg-white/10 hover:!text-[#F7F3EA]"
                >
                  {t('nav.useCases')}
                </Link>
              </div>
            </FadeInSection>
          </div>
        </section>
      </div>
    </>
  );
}
