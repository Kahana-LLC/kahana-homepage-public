import Link from 'next/link';
import { FolderPlusIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import SEO from '../../components/SEO';
import FadeInSection from '../../components/FadeInSection';
import { APP_URL, EXPLORE_URL } from '../../components/nav/navConfig';
import { EXPLORE_CATEGORIES } from '../../data/exploreCategories';
import {
  EXPLORE_DISCOVERY_STEPS,
  EXPLORE_FEATURE_CANONICAL,
  EXPLORE_FEATURE_ONE_LINER,
  EXPLORE_FEATURE_SEO,
  EXPLORE_FILTER_CHIPS,
  EXPLORE_GUEST_FACTS,
  EXPLORE_LISTING_FACTS,
  EXPLORE_TABS,
} from '../../data/exploreFeatureCopy';
import { trackButtonClick } from '../../utils/analytics';

function ExploreCta({ className = '', trackingId = 'features_explore_open' }) {
  return (
    <a
      href={EXPLORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-primary inline-flex items-center justify-center gap-2 no-underline ${className}`}
      onClick={() => trackButtonClick(trackingId)}
    >
      <MagnifyingGlassIcon className="h-5 w-5 shrink-0" aria-hidden />
      Explore
    </a>
  );
}

function CreateCta({ className = '', trackingId = 'features_explore_create' }) {
  return (
    <a
      href={APP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-secondary inline-flex items-center justify-center gap-2 no-underline ${className}`}
      onClick={() => trackButtonClick(trackingId)}
    >
      <FolderPlusIcon className="h-5 w-5 shrink-0" aria-hidden />
      Create
    </a>
  );
}

export default function ExploreFeaturePage() {
  return (
    <>
      <SEO
        title={EXPLORE_FEATURE_SEO.title}
        description={EXPLORE_FEATURE_SEO.description}
        url={EXPLORE_FEATURE_CANONICAL}
        type="website"
      />

      <div className="bg-[#F8FAF2] text-[#313A00]">
        <section className="relative overflow-hidden bg-white px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.55]"
            aria-hidden
            style={{
              background:
                'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(122, 146, 0, 0.14), transparent 55%), radial-gradient(ellipse 50% 40% at 100% 100%, rgba(73, 88, 0, 0.06), transparent 50%)',
            }}
          />
          <div className="relative mx-auto max-w-3xl text-center">
            <FadeInSection eager>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#617500]">
                Explore
              </p>
              <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                {EXPLORE_FEATURE_ONE_LINER}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#495800] sm:text-xl">
                Browse hubs contributed by people worldwide. Search, filter, and open what
                matters. No social feed to scroll.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <ExploreCta trackingId="features_explore_hero_explore" />
                <CreateCta trackingId="features_explore_hero_create" />
              </div>
            </FadeInSection>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">How discovery works</h2>
              <p className="mt-3 text-lg text-[#666666]">
                Explore is a catalog. You search, refine, then open a hub or a creator.
              </p>
              <ol className="mt-10 space-y-0">
                {EXPLORE_DISCOVERY_STEPS.map((step, index) => (
                  <li
                    key={step.title}
                    className="relative flex gap-5 border-l border-[#313A00]/15 pb-10 pl-6 last:pb-0"
                  >
                    <span
                      className="absolute -left-[0.55rem] top-0 flex h-4 w-4 items-center justify-center rounded-full bg-[#7a9200] text-[10px] font-bold text-white"
                      aria-hidden
                    >
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                      <p className="mt-2 text-lg leading-relaxed text-[#666666]">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </FadeInSection>
          </div>
        </section>

        <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">Categories and filters</h2>
              <p className="mt-3 text-lg text-[#666666]">
                Sixteen standard categories, plus search and filters so you can narrow the
                catalog without wading through a timeline.
              </p>
              <ul className="mt-8 flex flex-wrap gap-2" aria-label="Explore filters">
                {EXPLORE_FILTER_CHIPS.map((label) => (
                  <li
                    key={label}
                    className="rounded-md border border-[#313A00]/12 bg-[#F8FAF2] px-3 py-1.5 text-sm font-medium text-[#495800]"
                  >
                    {label}
                  </li>
                ))}
              </ul>
              <ul className="mt-10 flex flex-wrap gap-2" aria-label="Explore categories">
                {EXPLORE_CATEGORIES.map(({ label, tag, Icon }) => (
                  <li key={tag}>
                    <a
                      href={`${EXPLORE_URL}?tags=${encodeURIComponent(tag)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md border border-[#313A00]/12 bg-white px-3 py-1.5 text-sm font-medium text-[#313A00] no-underline transition-colors hover:border-[#7a9200]/50 hover:bg-[#F8FAF2]"
                    >
                      <Icon className="h-4 w-4 shrink-0 text-[#617500]" aria-hidden />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </FadeInSection>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">Hubs and Creators</h2>
              <p className="mt-3 text-lg text-[#666666]">
                Explore has two tabs on{' '}
                <a
                  href={EXPLORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
                >
                  /explore
                </a>
                . Switch with{' '}
                <code className="rounded bg-white px-1.5 py-0.5 text-[0.9em] text-[#495800]">
                  ?tab=hubs
                </code>{' '}
                or{' '}
                <code className="rounded bg-white px-1.5 py-0.5 text-[0.9em] text-[#495800]">
                  ?tab=creators
                </code>
                .
              </p>
              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                {EXPLORE_TABS.map((tab) => (
                  <div key={tab.id}>
                    <h3 className="text-xl font-semibold">{tab.title}</h3>
                    <p className="mt-2 text-lg leading-relaxed text-[#666666]">{tab.body}</p>
                    <p className="mt-3">
                      <a
                        href={`${EXPLORE_URL}${tab.query}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
                      >
                        Open {tab.title} tab
                      </a>
                    </p>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </section>

        <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">What gets listed</h2>
              <ul className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
                {EXPLORE_LISTING_FACTS.map((fact) => (
                  <li key={fact.slice(0, 40)} className="flex gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7a9200]" aria-hidden />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
              <h3 className="mt-12 text-xl font-semibold">Guests and adult content</h3>
              <ul className="mt-4 space-y-4 text-lg leading-relaxed text-[#666666]">
                {EXPLORE_GUEST_FACTS.map((fact) => (
                  <li key={fact.slice(0, 40)} className="flex gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7a9200]" aria-hidden />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </FadeInSection>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">What you open next</h2>
              <p className="mt-3 text-lg leading-relaxed text-[#666666]">
                A card opens a{' '}
                <Link
                  href="/features/hubs"
                  className="font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
                >
                  hub
                </Link>{' '}
                of digital artifacts, or a creator’s{' '}
                <Link
                  href="/features/profiles"
                  className="font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
                >
                  profile
                </Link>
                . Quality rises when people give{' '}
                <Link
                  href="/features/aura"
                  className="font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
                >
                  Aura
                </Link>
                : a careful community signal, not an endless stream of likes.
              </p>
              <p className="mt-6 text-lg text-[#666666]">
                New here?{' '}
                <Link
                  href="/docs/get-started-learners"
                  className="font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
                >
                  Get started as a learner
                </Link>
                . Ready to list a hub?{' '}
                <Link
                  href="/docs/list-hub-on-explore"
                  className="font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
                >
                  List a hub on Explore
                </Link>
                . More on{' '}
                <Link
                  href="/features"
                  className="font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
                >
                  Features
                </Link>
                , including hubs, trust, and optional earning.
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="bg-[#313A00] px-6 py-20 text-[#F8FAF2] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-2xl text-center">
            <FadeInSection>
              <h2 className="text-3xl font-semibold leading-tight !text-[#F8FAF2] sm:text-4xl">
                Start with Explore
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-[#F8FAF2]/85">
                Browse the public catalog, or Create a hub when you are ready to contribute.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a
                  href={EXPLORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center justify-center gap-2 !border-[#F8FAF2]/40 !bg-transparent no-underline !text-[#F8FAF2] hover:!border-[#F8FAF2] hover:!bg-white/10 hover:!text-[#F8FAF2]"
                  onClick={() => trackButtonClick('features_explore_footer_explore')}
                >
                  <MagnifyingGlassIcon className="h-5 w-5 shrink-0" aria-hidden />
                  Explore
                </a>
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2 no-underline"
                  onClick={() => trackButtonClick('features_explore_footer_create')}
                >
                  <FolderPlusIcon className="h-5 w-5 shrink-0" aria-hidden />
                  Create
                </a>
              </div>
              <p className="mt-8 text-sm text-[#F8FAF2]/70">
                <Link
                  href="/features"
                  className="underline decoration-[#F8FAF2]/40 underline-offset-2 hover:decoration-[#F8FAF2]"
                >
                  All features
                </Link>
                {' · '}
                <Link
                  href="/docs/get-started-learners"
                  className="underline decoration-[#F8FAF2]/40 underline-offset-2 hover:decoration-[#F8FAF2]"
                >
                  Learner guide
                </Link>
                {' · '}
                <Link
                  href="/faq"
                  className="underline decoration-[#F8FAF2]/40 underline-offset-2 hover:decoration-[#F8FAF2]"
                >
                  FAQ
                </Link>
              </p>
            </FadeInSection>
          </div>
        </section>
      </div>
    </>
  );
}
