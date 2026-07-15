import Link from 'next/link';
import { FolderPlusIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import SEO from '../../components/SEO';
import FadeInSection from '../../components/FadeInSection';
import { APP_URL, EXPLORE_URL } from '../../components/nav/navConfig';
import {
  AURA_FEATURE_CANONICAL,
  AURA_FEATURE_HOW_TO_GIVE,
  AURA_FEATURE_ONE_LINER,
  AURA_FEATURE_RULES,
  AURA_FEATURE_SEO,
  AURA_FEATURE_WHY,
} from '../../data/auraFeatureCopy';
import { trackButtonClick } from '../../utils/analytics';

function ExploreCta({ className = '', trackingId = 'features_aura_explore' }) {
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

function CreateCta({ className = '', trackingId = 'features_aura_create' }) {
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

export default function AuraFeaturePage() {
  return (
    <>
      <SEO
        title={AURA_FEATURE_SEO.title}
        description={AURA_FEATURE_SEO.description}
        url={AURA_FEATURE_CANONICAL}
        type="website"
      />

      <div className="bg-[#F8FAF2] text-[#313A00]">
        <section className="relative overflow-hidden bg-white px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.55]"
            aria-hidden
            style={{
              background:
                'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(122, 146, 0, 0.14), transparent 55%), radial-gradient(ellipse 45% 40% at 0% 90%, rgba(73, 88, 0, 0.06), transparent 50%)',
            }}
          />
          <div className="relative mx-auto max-w-3xl text-center">
            <FadeInSection eager>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#617500]">
                Aura
              </p>
              <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                {AURA_FEATURE_ONE_LINER}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#495800] sm:text-xl">
                Community recognition for hubs—not money, crypto, or star ratings. A small daily
                budget you control.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <ExploreCta trackingId="features_aura_hero_explore" />
                <CreateCta trackingId="features_aura_hero_create" />
              </div>
              <p className="mt-4 text-sm text-[#666666]">
                Give Aura on hubs while signed in on Explore.
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">Rules in plain language</h2>
              <ul className="mt-10 space-y-8">
                {AURA_FEATURE_RULES.map((rule) => (
                  <li key={rule.title}>
                    <h3 className="text-xl font-semibold">{rule.title}</h3>
                    <p className="mt-2 text-lg leading-relaxed text-[#666666]">{rule.body}</p>
                  </li>
                ))}
              </ul>
            </FadeInSection>
          </div>
        </section>

        <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">Why it matters</h2>
              <ul className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
                {AURA_FEATURE_WHY.map((fact) => (
                  <li key={fact.slice(0, 40)} className="flex gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7a9200]" aria-hidden />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-lg leading-relaxed text-[#666666]">
                Streaks near account UI help you notice your own giving habit. Creators see Aura
                earned alongside other analytics—not a wallet to transfer or stake.
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">How to give</h2>
              <ol className="mt-10 space-y-0">
                {AURA_FEATURE_HOW_TO_GIVE.map((step, index) => (
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
              <h2 className="text-2xl font-semibold sm:text-3xl">Want the full story?</h2>
              <p className="mt-3 text-lg leading-relaxed text-[#666666]">
                Why Aura instead of star ratings, how your daily budget renews, and more—read the
                long-form page.
              </p>
              <p className="mt-4">
                <Link
                  href="/aura"
                  className="font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
                >
                  Full Aura guide
                </Link>
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">Related</h2>
              <p className="mt-3 text-lg leading-relaxed text-[#666666]">
                Short how-to:{' '}
                <Link
                  href="/docs/how-aura-works"
                  className="font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
                >
                  How Aura works
                </Link>
                . Give Aura from{' '}
                <Link
                  href="/features/explore"
                  className="font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
                >
                  Explore
                </Link>
                , on{' '}
                <Link
                  href="/features/hubs"
                  className="font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
                >
                  hubs
                </Link>
                . Recognition shows on{' '}
                <Link
                  href="/features/profiles"
                  className="font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
                >
                  profiles
                </Link>{' '}
                through product signals—not a single vanity score.
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="bg-[#313A00] px-6 py-20 text-[#F8FAF2] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-2xl text-center">
            <FadeInSection>
              <h2 className="text-3xl font-semibold leading-tight !text-[#F8FAF2] sm:text-4xl">
                Give Aura carefully
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-[#F8FAF2]/85">
                Open Explore, endorse hubs worth learning from, or Create to contribute your own.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a
                  href={EXPLORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center justify-center gap-2 !border-[#F8FAF2]/40 !bg-transparent no-underline !text-[#F8FAF2] hover:!border-[#F8FAF2] hover:!bg-white/10 hover:!text-[#F8FAF2]"
                  onClick={() => trackButtonClick('features_aura_footer_explore')}
                >
                  <MagnifyingGlassIcon className="h-5 w-5 shrink-0" aria-hidden />
                  Explore
                </a>
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2 no-underline"
                  onClick={() => trackButtonClick('features_aura_footer_create')}
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
                  href="/docs/how-aura-works"
                  className="underline decoration-[#F8FAF2]/40 underline-offset-2 hover:decoration-[#F8FAF2]"
                >
                  How Aura works
                </Link>
                {' · '}
                <Link
                  href="/aura"
                  className="underline decoration-[#F8FAF2]/40 underline-offset-2 hover:decoration-[#F8FAF2]"
                >
                  Full Aura guide
                </Link>
              </p>
            </FadeInSection>
          </div>
        </section>
      </div>
    </>
  );
}
