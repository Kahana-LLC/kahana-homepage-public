import Link from 'next/link';
import FeaturesCatalog from '../../components/features/FeaturesCatalog';
import SEO from '../../components/SEO';
import FadeInSection from '../../components/FadeInSection';
import { ABOUT_ORIGIN } from '../../config/site';
import { useMarketingI18n } from '../../contexts/MarketingI18n';
import { productHref } from '../../lib/productLinks';
import { trackButtonClick } from '../../utils/analytics';

const CANONICAL = `${ABOUT_ORIGIN}/features`;

export default function FeaturesIndexPage() {
  const { t } = useMarketingI18n();
  const suggestLinks = [
    {
      href: productHref('/survey/improve?source=features', 'features_send_feedback'),
      label: t('featuresPage.sendFeedback'),
      track: 'features_send_feedback',
    },
    {
      href: productHref('/support?source=features', 'features_support'),
      label: t('featuresPage.support'),
      track: 'features_support',
    },
    {
      href: productHref('/contact?source=features', 'features_contact'),
      label: t('featuresPage.contact'),
      track: 'features_contact',
    },
  ];

  return (
    <>
      <SEO
        title="Features | Kahana"
        description="Kahana is a digital library for hubs, clubs, and files. Dive into features for creators and learners: Library, paid access, Aura, analytics, and more."
        url={CANONICAL}
        type="website"
      />
      <div className="bg-[#F7F3EA] text-[#3B2F1A]">
        <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <FadeInSection eager>
              <p className="text-sm font-semibold tracking-wide text-[#8A6622]">{t('featuresPage.eyebrow')}</p>
              <h1 className="mt-2 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                {t('featuresPage.title')}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#5C4520] sm:text-xl">{t('featuresPage.lead')}</p>
              <div
                className="mt-6 flex flex-wrap justify-center gap-2"
                aria-label={t('featuresPage.suggestLabel')}
              >
                {suggestLinks.map((item) => (
                  <a
                    key={item.track}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="compare-filter-chip compare-filter-chip--off no-underline"
                    onClick={() => trackButtonClick(item.track)}
                  >
                    {item.label}
                  </a>
                ))}
                <Link
                  href="/roadmap"
                  className="compare-filter-chip compare-filter-chip--off no-underline"
                  onClick={() => trackButtonClick('features_roadmap')}
                >
                  {t('featuresPage.roadmap')}
                </Link>
              </div>
            </FadeInSection>
          </div>
        </section>
        <section className="px-6 pb-20 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-6xl">
            <FeaturesCatalog t={t} />
          </div>
        </section>
      </div>
    </>
  );
}
