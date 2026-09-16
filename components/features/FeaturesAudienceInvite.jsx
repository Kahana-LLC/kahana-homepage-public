import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import FadeInSection from '../FadeInSection';
import FeatureCatalogCard from './FeatureCatalogCard';
import { FEATURES, filterFeaturesByAudience } from '../../data/marketingTaxonomy';

const PREVIEW = 3;

export default function FeaturesAudienceInvite({ t, audience }) {
  const items = filterFeaturesByAudience(audience, FEATURES).slice(0, PREVIEW);
  const href = `/features?for=${audience}`;
  const isCreator = audience === 'creator';

  return (
    <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-6xl">
        <FadeInSection eager>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-[#3B2F1A] sm:text-4xl">
              {isCreator ? t('featuresPage.inviteCreatorsTitle') : t('featuresPage.inviteLearnersTitle')}
            </h2>
            <p className="mt-3 text-lg text-[#5C4520]">
              {isCreator ? t('featuresPage.inviteCreatorsLead') : t('featuresPage.inviteLearnersLead')}
            </p>
          </div>
          <ul className="mt-10 grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <FeatureCatalogCard
                key={item.slug}
                href={`/features/${item.slug}`}
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
              {isCreator ? t('featuresPage.inviteCreatorsCta') : t('featuresPage.inviteLearnersCta')}
              <ArrowRightIcon className="h-5 w-5 shrink-0" aria-hidden />
            </Link>
          </p>
        </FadeInSection>
      </div>
    </section>
  );
}
