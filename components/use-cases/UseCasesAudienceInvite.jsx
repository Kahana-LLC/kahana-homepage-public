import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import FadeInSection from '../FadeInSection';
import FeatureCatalogCard from '../features/FeatureCatalogCard';
import { USE_CASES, filterUseCases } from '../../data/marketingTaxonomy';

const PREVIEW = 3;

export default function UseCasesAudienceInvite({ t, audience }) {
  const items = filterUseCases(USE_CASES, { audienceId: audience }).slice(0, PREVIEW);
  const href = `/use-cases?for=${audience}`;
  const isCreator = audience === 'creator';

  return (
    <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-6xl">
        <FadeInSection eager>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-[#3B2F1A] sm:text-4xl">
              {isCreator ? t('useCasesPage.inviteCreatorsTitle') : t('useCasesPage.inviteLearnersTitle')}
            </h2>
            <p className="mt-3 text-lg text-[#5C4520]">
              {isCreator ? t('useCasesPage.inviteCreatorsLead') : t('useCasesPage.inviteLearnersLead')}
            </p>
          </div>
          <ul className="mt-10 grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <FeatureCatalogCard
                key={item.slug}
                href={`/use-cases/${item.slug}`}
                slug={item.slug}
                title={item.title}
                summary={item.summary}
              />
            ))}
          </ul>
          <p className="mt-10 text-center">
            <Link
              href={href}
              className="btn-secondary inline-flex items-center justify-center gap-2 no-underline"
            >
              {isCreator ? t('useCasesPage.inviteCreatorsCta') : t('useCasesPage.inviteLearnersCta')}
              <ArrowRightIcon className="h-5 w-5 shrink-0" aria-hidden />
            </Link>
          </p>
        </FadeInSection>
      </div>
    </section>
  );
}
