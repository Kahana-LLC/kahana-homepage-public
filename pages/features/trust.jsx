import Link from 'next/link';
import { FolderPlusIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import SEO from '../../components/SEO';
import FadeInSection from '../../components/FadeInSection';
import { APP_URL, EXPLORE_URL } from '../../components/nav/navConfig';
import {
  TRUST_ADULT_FACTS,
  TRUST_AGE_FACTS,
  TRUST_FEATURE_CANONICAL,
  TRUST_FEATURE_ONE_LINER,
  TRUST_FEATURE_SEO,
  TRUST_LEGAL_LINKS,
} from '../../data/trustFeatureCopy';
import { trackButtonClick } from '../../utils/analytics';

function ExploreCta({ className = '', trackingId = 'features_trust_explore' }) {
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

function CreateCta({ className = '', trackingId = 'features_trust_create' }) {
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

export default function TrustFeaturePage() {
  return (
    <>
      <SEO
        title={TRUST_FEATURE_SEO.title}
        description={TRUST_FEATURE_SEO.description}
        url={TRUST_FEATURE_CANONICAL}
        type="website"
      />

      <div className="bg-[#F8FAF2] text-[#313A00]">
        <section className="relative overflow-hidden bg-white px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.55]"
            aria-hidden
            style={{
              background:
                'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(122, 146, 0, 0.14), transparent 55%), radial-gradient(ellipse 45% 40% at 0% 100%, rgba(73, 88, 0, 0.06), transparent 50%)',
            }}
          />
          <div className="relative mx-auto max-w-3xl text-center">
            <FadeInSection eager>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#617500]">
                Trust
              </p>
              <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                {TRUST_FEATURE_ONE_LINER}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#495800] sm:text-xl">
                Intentional access for adult hubs, and a clear signal when a seller is ready to take
                charges—not a blanket safety certification of every hub.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <ExploreCta trackingId="features_trust_hero_explore" />
                <CreateCta trackingId="features_trust_hero_create" />
              </div>
            </FadeInSection>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">Adult flags and Explore defaults</h2>
              <p className="mt-3 text-lg text-[#666666]">
                Adult hubs can list, but they do not sit in the default catalog the way general hubs
                do.
              </p>
              <ul className="mt-8 space-y-4 text-lg leading-relaxed text-[#666666]">
                {TRUST_ADULT_FACTS.map((fact) => (
                  <li key={fact.slice(0, 40)} className="flex gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7a9200]" aria-hidden />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </FadeInSection>
          </div>
        </section>

        <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">Age verification</h2>
              <p className="mt-3 text-lg text-[#666666]">
                Access to adult hubs stays behind login and date of birth—not a checkbox for guests.
              </p>
              <ul className="mt-8 space-y-4 text-lg leading-relaxed text-[#666666]">
                {TRUST_AGE_FACTS.map((fact) => (
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
              <h2 className="text-2xl font-semibold sm:text-3xl">Verified creators</h2>
              <p className="mt-3 text-lg leading-relaxed text-[#666666]">
                Creators can show a verified check when Stripe Connect is ready to accept charges
                <span className="whitespace-nowrap"> (charges_enabled)</span>. You may see it on a
                profile or paywall.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                Product UI and FAQ often say Stripe Identity. The shipped condition is Connect
                charge-readiness. The badge is not Kahana editorial endorsement, not a background
                check beyond that readiness, and not an Explore ranking boost.
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">Aura vs the badge</h2>
              <p className="mt-3 text-lg leading-relaxed text-[#666666]">
                <Link
                  href="/features/aura"
                  className="font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
                >
                  Aura
                </Link>{' '}
                is community recognition for hubs—a signal of what people find worth learning from.
                It is not a Kahana safety certification.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                The verified badge is about commerce readiness: whether a seller can take charges
                through Stripe Connect. Different job from Aura.
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">Legal</h2>
              <p className="mt-3 text-lg leading-relaxed text-[#666666]">
                Policies for adult content, hub access and privacy, creator monetization, and
                content protection live in the app under{' '}
                <code className="rounded bg-white px-1.5 py-0.5 text-[0.9em] text-[#495800]">
                  /legal/…
                </code>
                .
              </p>
              <ul className="mt-6 space-y-3">
                {TRUST_LEGAL_LINKS.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </FadeInSection>
          </div>
        </section>

        <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">Related</h2>
              <p className="mt-3 text-lg leading-relaxed text-[#666666]">
                Rules and steps:{' '}
                <Link
                  href="/docs/adult-content-and-age-verification"
                  className="font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
                >
                  Adult content &amp; age verification
                </Link>
                . Adult defaults shape{' '}
                <Link
                  href="/features/explore"
                  className="font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
                >
                  Explore
                </Link>
                . Sellers show up on{' '}
                <Link
                  href="/features/profiles"
                  className="font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
                >
                  profiles
                </Link>{' '}
                and turn on paid access via{' '}
                <Link
                  href="/features/earning"
                  className="font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
                >
                  optional earning
                </Link>
                .{' '}
                <Link
                  href="/features/aura"
                  className="font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
                >
                  Aura
                </Link>{' '}
                stays the community quality signal.
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="bg-[#313A00] px-6 py-20 text-[#F8FAF2] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-2xl text-center">
            <FadeInSection>
              <h2 className="text-3xl font-semibold leading-tight !text-[#F8FAF2] sm:text-4xl">
                Browse with intention
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-[#F8FAF2]/85">
                Explore the public catalog, or Create a hub with the access settings that fit what
                you share.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a
                  href={EXPLORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center justify-center gap-2 !border-[#F8FAF2]/40 !bg-transparent no-underline !text-[#F8FAF2] hover:!border-[#F8FAF2] hover:!bg-white/10 hover:!text-[#F8FAF2]"
                  onClick={() => trackButtonClick('features_trust_footer_explore')}
                >
                  <MagnifyingGlassIcon className="h-5 w-5 shrink-0" aria-hidden />
                  Explore
                </a>
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2 no-underline"
                  onClick={() => trackButtonClick('features_trust_footer_create')}
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
                  href="/docs/adult-content-and-age-verification"
                  className="underline decoration-[#F8FAF2]/40 underline-offset-2 hover:decoration-[#F8FAF2]"
                >
                  Adult content guide
                </Link>
                {' · '}
                <Link
                  href="/features/explore"
                  className="underline decoration-[#F8FAF2]/40 underline-offset-2 hover:decoration-[#F8FAF2]"
                >
                  Explore
                </Link>
              </p>
            </FadeInSection>
          </div>
        </section>
      </div>
    </>
  );
}
