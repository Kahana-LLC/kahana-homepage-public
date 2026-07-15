import Link from 'next/link';
import { FolderPlusIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import SEO from '../../components/SEO';
import FadeInSection from '../../components/FadeInSection';
import { APP_URL, EXPLORE_URL } from '../../components/nav/navConfig';
import {
  HUB_ARTIFACT_TYPES,
  HUB_COLLABORATOR_ROLES,
  HUB_LIFECYCLE_STEPS,
  HUB_MARKETPLACE_SIGNALS,
  HUB_PLAN_LIMITS,
  HUB_SEO_FACTS,
  HUB_SETTINGS_AREAS,
  HUBS_FEATURE_CANONICAL,
  HUBS_FEATURE_ONE_LINER,
  HUBS_FEATURE_SEO,
} from '../../data/hubsFeatureCopy';
import { trackButtonClick } from '../../utils/analytics';

function CreateCta({ className = '', trackingId = 'features_hubs_create' }) {
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

function ExploreCta({ className = '', trackingId = 'features_hubs_explore' }) {
  return (
    <a
      href={EXPLORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-secondary inline-flex items-center justify-center gap-2 no-underline ${className}`}
      onClick={() => trackButtonClick(trackingId)}
    >
      <MagnifyingGlassIcon className="h-5 w-5 shrink-0" aria-hidden />
      Explore
    </a>
  );
}

export default function HubsFeaturePage() {
  return (
    <>
      <SEO
        title={HUBS_FEATURE_SEO.title}
        description={HUBS_FEATURE_SEO.description}
        url={HUBS_FEATURE_CANONICAL}
        type="website"
      />

      <div className="bg-[#F8FAF2] text-[#313A00]">
        <section className="relative overflow-hidden bg-white px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.55]"
            aria-hidden
            style={{
              background:
                'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(122, 146, 0, 0.14), transparent 55%), radial-gradient(ellipse 50% 40% at 0% 100%, rgba(73, 88, 0, 0.06), transparent 50%)',
            }}
          />
          <div className="relative mx-auto max-w-3xl text-center">
            <FadeInSection eager>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#617500]">
                Hubs
              </p>
              <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                {HUBS_FEATURE_ONE_LINER}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#495800] sm:text-xl">
                One hub holds the artifacts you care about, plus the people who help. Easy to open
                by link. Easy to find when you list it on Explore.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <CreateCta trackingId="features_hubs_hero_create" />
                <ExploreCta trackingId="features_hubs_hero_explore" />
              </div>
            </FadeInSection>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">What’s inside a hub</h2>
              <p className="mt-3 text-lg text-[#666666]">
                A hub is a curated place for digital artifacts—not a generic cloud dump, and not a
                full course platform.
              </p>
              <ul className="mt-8 flex flex-wrap gap-2" aria-label="Artifact types">
                {HUB_ARTIFACT_TYPES.map((label) => (
                  <li
                    key={label}
                    className="rounded-md border border-[#313A00]/12 bg-white px-3 py-1.5 text-sm font-medium text-[#495800]"
                  >
                    {label}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-lg leading-relaxed text-[#666666]">
                Each hub lives at{' '}
                <code className="rounded bg-white px-1.5 py-0.5 text-[0.9em] text-[#495800]">
                  /hub/:id
                </code>{' '}
                in the app. Open the link, and you are in.
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">Private → public → Explore</h2>
              <p className="mt-3 text-lg text-[#666666]">
                Hubs do not start public or listed. You choose each step.
              </p>
              <ol className="mt-10 space-y-0">
                {HUB_LIFECYCLE_STEPS.map((step, index) => (
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

        <section className="px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">Collaborators and roles</h2>
              <p className="mt-3 text-lg text-[#666666]">
                Invite people through the collaboration flow. Roles control what each person can
                do.
              </p>
              <ul className="mt-8 space-y-5">
                {HUB_COLLABORATOR_ROLES.map(({ role, body }) => (
                  <li key={role} className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                    <span className="shrink-0 font-mono text-sm font-semibold tracking-wide text-[#617500] sm:w-28">
                      {role}
                    </span>
                    <span className="text-lg leading-relaxed text-[#666666]">{body}</span>
                  </li>
                ))}
              </ul>
            </FadeInSection>
          </div>
        </section>

        <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">Hub settings</h2>
              <p className="mt-3 text-lg text-[#666666]">
                Settings cover how the hub looks, who can access it, and whether people pay.
              </p>
              <ul className="mt-8 flex flex-wrap gap-2" aria-label="Hub settings areas">
                {HUB_SETTINGS_AREAS.map((label) => (
                  <li
                    key={label}
                    className="rounded-md border border-[#313A00]/12 bg-[#F8FAF2] px-3 py-1.5 text-sm font-medium text-[#495800]"
                  >
                    {label}
                  </li>
                ))}
              </ul>
              <ul className="mt-10 space-y-4 text-lg leading-relaxed text-[#666666]">
                {HUB_MARKETPLACE_SIGNALS.map((fact) => (
                  <li key={fact.slice(0, 40)} className="flex gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7a9200]" aria-hidden />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
              <h3 className="mt-12 text-xl font-semibold">SEO and listing</h3>
              <ul className="mt-4 space-y-4 text-lg leading-relaxed text-[#666666]">
                {HUB_SEO_FACTS.map((fact) => (
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
              <h2 className="text-2xl font-semibold sm:text-3xl">Plan limits that matter</h2>
              <p className="mt-3 text-lg text-[#666666]">
                Start free so you can contribute. Upgrade when you need more room. Free is not
                unlimited storage.
              </p>
              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                {HUB_PLAN_LIMITS.map((plan) => (
                  <div key={plan.plan}>
                    <h3 className="text-xl font-semibold">{plan.plan}</h3>
                    <ul className="mt-3 space-y-2 text-lg leading-relaxed text-[#666666]">
                      <li>{plan.hubs}</li>
                      <li>{plan.uploads}</li>
                      <li>{plan.fileSize}</li>
                    </ul>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm leading-relaxed text-[#666666]">
                *Links and editor notes generally do not count toward the upload quota. See{' '}
                <Link
                  href="/pricing"
                  className="font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
                >
                  Plans
                </Link>{' '}
                for current details.
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">Where hubs show up next</h2>
              <p className="mt-3 text-lg leading-relaxed text-[#666666]">
                Listed hubs can be found on{' '}
                <Link
                  href="/features/explore"
                  className="font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
                >
                  Explore
                </Link>
                . Your shared hubs also show on your{' '}
                <Link
                  href="/features/profiles"
                  className="font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
                >
                  profile
                </Link>{' '}
                when people open your storefront.{' '}
                <Link
                  href="/features/earning"
                  className="font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
                >
                  Monetization stays optional
                </Link>
                —hubs remain free knowledge spaces until you choose otherwise.
              </p>
              <p className="mt-6 text-lg text-[#666666]">
                New to contributing?{' '}
                <Link
                  href="/docs/get-started-creators"
                  className="font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
                >
                  Get started as a creator
                </Link>
                . Inviting editors?{' '}
                <Link
                  href="/docs/collaborators-and-roles"
                  className="font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
                >
                  Collaborators &amp; roles
                </Link>
                . Reading the numbers?{' '}
                <Link
                  href="/docs/creator-analytics"
                  className="font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
                >
                  Analytics for creators
                </Link>
                . More on{' '}
                <Link
                  href="/features"
                  className="font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
                >
                  Features
                </Link>
                , including{' '}
                <Link
                  href="/features/trust"
                  className="font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
                >
                  trust
                </Link>
                .
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="bg-[#313A00] px-6 py-20 text-[#F8FAF2] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-2xl text-center">
            <FadeInSection>
              <h2 className="text-3xl font-semibold leading-tight !text-[#F8FAF2] sm:text-4xl">
                Create your first hub
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-[#F8FAF2]/85">
                Start private. Add what you know. Share when you are ready.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2 no-underline"
                  onClick={() => trackButtonClick('features_hubs_footer_create')}
                >
                  <FolderPlusIcon className="h-5 w-5 shrink-0" aria-hidden />
                  Create
                </a>
                <a
                  href={EXPLORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center justify-center gap-2 !border-[#F8FAF2]/40 !bg-transparent no-underline !text-[#F8FAF2] hover:!border-[#F8FAF2] hover:!bg-white/10 hover:!text-[#F8FAF2]"
                  onClick={() => trackButtonClick('features_hubs_footer_explore')}
                >
                  <MagnifyingGlassIcon className="h-5 w-5 shrink-0" aria-hidden />
                  Explore
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
                  href="/docs/get-started-creators"
                  className="underline decoration-[#F8FAF2]/40 underline-offset-2 hover:decoration-[#F8FAF2]"
                >
                  Creator guide
                </Link>
                {' · '}
                <Link
                  href="/docs/collaborators-and-roles"
                  className="underline decoration-[#F8FAF2]/40 underline-offset-2 hover:decoration-[#F8FAF2]"
                >
                  Collaborators
                </Link>
                {' · '}
                <Link
                  href="/pricing"
                  className="underline decoration-[#F8FAF2]/40 underline-offset-2 hover:decoration-[#F8FAF2]"
                >
                  Plans
                </Link>
              </p>
            </FadeInSection>
          </div>
        </section>
      </div>
    </>
  );
}
