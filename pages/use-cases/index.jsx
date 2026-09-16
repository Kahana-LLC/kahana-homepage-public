import UseCasesCatalog from '../../components/use-cases/UseCasesCatalog';
import SEO from '../../components/SEO';
import FadeInSection from '../../components/FadeInSection';
import { ABOUT_ORIGIN } from '../../config/site';
import { useMarketingI18n } from '../../contexts/MarketingI18n';

const CANONICAL = `${ABOUT_ORIGIN}/use-cases`;

export default function UseCasesIndexPage() {
  const { t } = useMarketingI18n();

  return (
    <>
      <SEO
        title="Use cases | Kahana"
        description="Looking to learn? Looking to create? Browse Kahana use cases and find ways to get more out of hubs, clubs, and Library."
        url={CANONICAL}
        type="website"
      />
      <div className="bg-[#F7F3EA] text-[#3B2F1A]">
        <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <FadeInSection eager>
              <p className="text-sm font-semibold tracking-wide text-[#8A6622]">Make the most of Kahana</p>
              <h1 className="mt-2 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                Use cases
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#5C4520] sm:text-xl">
                Looking to learn? Looking to create? Peruse our collection of use cases and discover ways to
                get more out of Kahana.
              </p>
            </FadeInSection>
          </div>
        </section>
        <section className="px-6 pb-20 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-6xl">
            <UseCasesCatalog t={t} />
          </div>
        </section>
      </div>
    </>
  );
}
