import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import FadeInSection from '../FadeInSection';
import FeatureCatalogCard from '../features/FeatureCatalogCard';
import { USE_CASES, filterUseCases, getUseCase } from '../../data/marketingTaxonomy';

/** Curated order for the creators page invite (includes premium subscriptions). */
const CREATOR_INVITE_SLUGS = [
  'selling-digital-products',
  'paid-memberships',
  'get-discovered',
  'collaborate-on-hubs',
  'cohorts-and-communities',
  'selling-ebooks',
  'selling-courses',
  'workshops',
  'playbooks',
  'share-your-profile',
  'newsletter-companion',
];

const LEARNER_INVITE_SLUGS = [
  'finish-more-books',
  'learn-a-skill',
  'unlock-paid-hubs',
  'meet-people',
  'learn-in-depth',
  'book-clubs',
  'personal-library',
];

function inviteItems(audience) {
  const preferred = audience === 'creator' ? CREATOR_INVITE_SLUGS : LEARNER_INVITE_SLUGS;
  const fromPreferred = preferred.map((slug) => getUseCase(slug)).filter(Boolean);
  const rest = filterUseCases(USE_CASES, { audienceId: audience }).filter(
    (item) => !preferred.includes(item.slug)
  );
  return [...fromPreferred, ...rest];
}

export default function UseCasesAudienceInvite({ t, audience }) {
  const items = inviteItems(audience);
  const href = `/use-cases?for=${audience}`;
  const isCreator = audience === 'creator';

  return (
    <section className="border-t border-[#E4D9C4] py-16">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16">
        <FadeInSection eager>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-[#3B2F1A] sm:text-4xl">
              {isCreator
                ? t('useCasesPage.inviteCreatorsTitle')
                : t('useCasesPage.inviteLearnersTitle')}
            </h2>
            <p className="mt-3 text-lg text-[#5C4520]">
              {isCreator
                ? t('useCasesPage.inviteCreatorsLead')
                : t('useCasesPage.inviteLearnersLead')}
            </p>
            <p className="mt-2 text-sm text-[#8A9378]">{t('useCasesPage.inviteScrollHint')}</p>
          </div>
        </FadeInSection>
      </div>

      <FadeInSection eager>
        <div className="relative mt-10">
          <ul
            className="use-cases-invite-scroll flex list-none gap-5 overflow-x-auto scroll-smooth px-6 pb-4 pt-1 sm:px-10 lg:px-16"
            aria-label={
              isCreator
                ? t('useCasesPage.inviteCreatorsTitle')
                : t('useCasesPage.inviteLearnersTitle')
            }
          >
            {items.map((item) => (
              <FeatureCatalogCard
                key={item.slug}
                href={`/use-cases/${item.slug}`}
                slug={item.slug}
                title={item.title}
                summary={item.summary}
                scrollItem
              />
            ))}
          </ul>
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#F7F3EA] to-transparent sm:w-16"
            aria-hidden
          />
        </div>
      </FadeInSection>

      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16">
        <FadeInSection eager>
          <p className="mt-8 text-center">
            <Link
              href={href}
              className="btn-secondary inline-flex items-center justify-center gap-2 no-underline"
            >
              {isCreator
                ? t('useCasesPage.inviteCreatorsCta')
                : t('useCasesPage.inviteLearnersCta')}
              <ArrowRightIcon className="h-5 w-5 shrink-0" aria-hidden />
            </Link>
          </p>
        </FadeInSection>
      </div>

      <style jsx>{`
        .use-cases-invite-scroll {
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: thin;
          scrollbar-color: #c4b89a transparent;
        }
        .use-cases-invite-scroll::-webkit-scrollbar {
          height: 6px;
        }
        .use-cases-invite-scroll::-webkit-scrollbar-thumb {
          background: #c4b89a;
          border-radius: 999px;
        }
      `}</style>
    </section>
  );
}
