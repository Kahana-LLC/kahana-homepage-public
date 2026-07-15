import Link from 'next/link';
import { FolderPlusIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import SEO from '../../components/SEO';
import FadeInSection from '../../components/FadeInSection';
import { APP_URL, EXPLORE_URL } from '../../components/nav/navConfig';
import {
  PROFILE_PRODUCT_FACTS,
  PROFILE_REPUTATION_SIGNALS,
  PROFILE_SURFACE_ITEMS,
  PROFILES_FEATURE_CANONICAL,
  PROFILES_FEATURE_ONE_LINER,
  PROFILES_FEATURE_SEO,
} from '../../data/profilesFeatureCopy';
import { trackButtonClick } from '../../utils/analytics';

const CREATORS_EXPLORE_URL = `${EXPLORE_URL}?tab=creators`;

function CreateCta({ className = '', trackingId = 'features_profiles_create' }) {
  return (
    <a
      href={APP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-primary inline-flex items-center justify-center gap-2 no-underline ${className}`}
      onClick={() => trackButtonClick(trackingId)}
    >
      <FolderPlusIcon className="h-5 w-5 shrink-0" aria-hidden />
      Create
    </a>
  );
}

function ExploreCreatorsCta({ className = '', trackingId = 'features_profiles_explore_creators' }) {
  return (
    <a
      href={CREATORS_EXPLORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-secondary inline-flex items-center justify-center gap-2 no-underline ${className}`}
      onClick={() => trackButtonClick(trackingId)}
    >
      <MagnifyingGlassIcon className="h-5 w-5 shrink-0" aria-hidden />
      Explore creators
    </a>
  );
}

export default function ProfilesFeaturePage() {
  return (
    <>
      <SEO
        title={PROFILES_FEATURE_SEO.title}
        description={PROFILES_FEATURE_SEO.description}
        url={PROFILES_FEATURE_CANONICAL}
        type="website"
      />

      <div className="bg-[#F8FAF2] text-[#313A00]">
        <section className="relative overflow-hidden bg-white px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.55]"
            aria-hidden
            style={{
              background:
                'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(122, 146, 0, 0.14), transparent 55%), radial-gradient(ellipse 45% 40% at 100% 80%, rgba(73, 88, 0, 0.06), transparent 50%)',
            }}
          />
          <div className="relative mx-auto max-w-3xl text-center">
            <FadeInSection eager>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#617500]">
                Profiles
              </p>
              <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                {PROFILES_FEATURE_ONE_LINER}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#495800] sm:text-xl">
                A public creator page you can share like a link-in-bio, tied to real hubs and
                marketplace signals—not a social feed.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <CreateCta trackingId="features_profiles_hero_create" />
                <ExploreCreatorsCta trackingId="features_profiles_hero_explore" />
              </div>
              <p className="mt-4 text-sm text-[#666666]">
                Create or claim your presence in the app. Guests can open public profiles.
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">What’s on a profile</h2>
              <p className="mt-3 text-lg text-[#666666]">
                Your page lives at{' '}
                <code className="rounded bg-white px-1.5 py-0.5 text-[0.9em] text-[#495800]">
                  /profile/:userId
                </code>
                . One link for bio, links, and the hubs you’ve made public.
              </p>
              <ul className="mt-10 space-y-8">
                {PROFILE_SURFACE_ITEMS.map((item) => (
                  <li key={item.title}>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-2 text-lg leading-relaxed text-[#666666]">{item.body}</p>
                  </li>
                ))}
              </ul>
            </FadeInSection>
          </div>
        </section>

        <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">How reputation shows up</h2>
              <p className="mt-3 text-lg text-[#666666]">
                There is no single vanity score. Reputation shows through product signals people
                can see as they browse and buy.
              </p>
              <ul className="mt-10 space-y-6">
                {PROFILE_REPUTATION_SIGNALS.map((signal) => (
                  <li key={signal.title} className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                    <span className="shrink-0 font-semibold text-[#617500] sm:w-28">
                      {signal.title}
                    </span>
                    <span className="text-lg leading-relaxed text-[#666666]">{signal.body}</span>
                  </li>
                ))}
              </ul>
            </FadeInSection>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">Verified creators</h2>
              <p className="mt-3 text-lg leading-relaxed text-[#666666]">
                Creators can show a verified check when Stripe Connect is ready to accept charges
                (<span className="whitespace-nowrap"> (charges_enabled)</span>. That helps buyers
                trust who they are paying.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                Product copy and FAQ often mention Stripe Identity alongside verification. The
                badge you see in the UI is tied to Connect being charge-ready. It is not a ranking
                guarantee on Explore.
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">How profiles fit the product</h2>
              <ul className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
                {PROFILE_PRODUCT_FACTS.map((fact) => (
                  <li key={fact.slice(0, 40)} className="flex gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7a9200]" aria-hidden />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8">
                <a
                  href={CREATORS_EXPLORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
                >
                  Browse creators on Explore
                </a>
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">What you stack next</h2>
              <p className="mt-3 text-lg leading-relaxed text-[#666666]">
                Step-by-step:{' '}
                <Link
                  href="/docs/profile-and-sharing"
                  className="font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
                >
                  Your profile &amp; sharing
                </Link>
                . Profiles showcase the{' '}
                <Link
                  href="/features/hubs"
                  className="font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
                >
                  hubs
                </Link>{' '}
                you share. Quality rises when people give{' '}
                <Link
                  href="/features/aura"
                  className="font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
                >
                  Aura
                </Link>
                .{' '}
                <Link
                  href="/features/earning"
                  className="font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
                >
                  Optional earning
                </Link>{' '}
                and{' '}
                <Link
                  href="/features/trust"
                  className="font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
                >
                  trust
                </Link>{' '}
                (adult filters and verification) round out the picture.
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="bg-[#313A00] px-6 py-20 text-[#F8FAF2] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-2xl text-center">
            <FadeInSection>
              <h2 className="text-3xl font-semibold leading-tight !text-[#F8FAF2] sm:text-4xl">
                Claim your presence
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-[#F8FAF2]/85">
                Create in the app, fill in your profile, and share one link. Or browse creators
                first.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2 no-underline"
                  onClick={() => trackButtonClick('features_profiles_footer_create')}
                >
                  <FolderPlusIcon className="h-5 w-5 shrink-0" aria-hidden />
                  Create
                </a>
                <a
                  href={CREATORS_EXPLORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center justify-center gap-2 !border-[#F8FAF2]/40 !bg-transparent no-underline !text-[#F8FAF2] hover:!border-[#F8FAF2] hover:!bg-white/10 hover:!text-[#F8FAF2]"
                  onClick={() => trackButtonClick('features_profiles_footer_explore')}
                >
                  <MagnifyingGlassIcon className="h-5 w-5 shrink-0" aria-hidden />
                  Explore creators
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
                  href="/docs/profile-and-sharing"
                  className="underline decoration-[#F8FAF2]/40 underline-offset-2 hover:decoration-[#F8FAF2]"
                >
                  Profile guide
                </Link>
                {' · '}
                <Link
                  href="/features/hubs"
                  className="underline decoration-[#F8FAF2]/40 underline-offset-2 hover:decoration-[#F8FAF2]"
                >
                  Hubs
                </Link>
                {' · '}
                <Link
                  href="/features/aura"
                  className="underline decoration-[#F8FAF2]/40 underline-offset-2 hover:decoration-[#F8FAF2]"
                >
                  Aura
                </Link>
              </p>
            </FadeInSection>
          </div>
        </section>
      </div>
    </>
  );
}
