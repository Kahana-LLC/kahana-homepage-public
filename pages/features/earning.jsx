import Link from 'next/link';
import { FolderPlusIcon } from '@heroicons/react/24/outline';
import SEO from '../../components/SEO';
import FadeInSection from '../../components/FadeInSection';
import { APP_URL } from '../../components/nav/navConfig';
import {
  EARNING_EXTRA_FACTS,
  EARNING_FEATURE_CANONICAL,
  EARNING_FEATURE_ONE_LINER,
  EARNING_FEATURE_SEO,
  EARNING_FEE_FACTS,
  EARNING_FREE_FIRST_FACTS,
  EARNING_TURN_ON_STEPS,
} from '../../data/earningFeatureCopy';
import { trackButtonClick } from '../../utils/analytics';

function CreateCta({ className = '', trackingId = 'features_earning_create' }) {
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

function PricingCta({ className = '', trackingId = 'features_earning_pricing' }) {
  return (
    <Link
      href="/pricing"
      className={`btn-secondary inline-flex items-center justify-center gap-2 no-underline ${className}`}
      onClick={() => trackButtonClick(trackingId)}
    >
      See pricing
    </Link>
  );
}

export default function EarningFeaturePage() {
  return (
    <>
      <SEO
        title={EARNING_FEATURE_SEO.title}
        description={EARNING_FEATURE_SEO.description}
        url={EARNING_FEATURE_CANONICAL}
        type="website"
      />

      <div className="bg-[#F8FAF2] text-[#313A00]">
        <section className="relative overflow-hidden bg-white px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.55]"
            aria-hidden
            style={{
              background:
                'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(122, 146, 0, 0.14), transparent 55%), radial-gradient(ellipse 45% 40% at 100% 100%, rgba(73, 88, 0, 0.06), transparent 50%)',
            }}
          />
          <div className="relative mx-auto max-w-3xl text-center">
            <FadeInSection eager>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#617500]">
                Optional earning
              </p>
              <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                {EARNING_FEATURE_ONE_LINER}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#495800] sm:text-xl">
                Share first. Charge for access later if you want. Plans govern capacity; earning is
                not locked behind Growth.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <CreateCta trackingId="features_earning_hero_create" />
                <PricingCta trackingId="features_earning_hero_pricing" />
              </div>
            </FadeInSection>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">Free sharing stays first-class</h2>
              <p className="mt-3 text-lg text-[#666666]">
                Kahana is not primarily a paid course marketplace. Paid access is a tool you can
                turn on—not the default identity of every hub.
              </p>
              <ul className="mt-8 space-y-4 text-lg leading-relaxed text-[#666666]">
                {EARNING_FREE_FIRST_FACTS.map((fact) => (
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
              <h2 className="text-2xl font-semibold sm:text-3xl">How to turn on paid access</h2>
              <p className="mt-3 text-lg text-[#666666]">
                Connect Stripe, set a price, and let the paywall handle checkout. Optional trial
                and storefront peek when you want them.
              </p>
              <ol className="mt-10 space-y-0">
                {EARNING_TURN_ON_STEPS.map((step, index) => (
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
              <h2 className="text-2xl font-semibold sm:text-3xl">Fees</h2>
              <p className="mt-3 text-lg text-[#666666]">
                Be precise: Kahana’s cut is 5%. Stripe processing is separate.
              </p>
              <ul className="mt-8 space-y-4 text-lg leading-relaxed text-[#666666]">
                {EARNING_FEE_FACTS.map((fact) => (
                  <li key={fact.slice(0, 40)} className="flex gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7a9200]" aria-hidden />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
              <h3 className="mt-12 text-xl font-semibold">What else to know</h3>
              <ul className="mt-4 space-y-4 text-lg leading-relaxed text-[#666666]">
                {EARNING_EXTRA_FACTS.map((fact) => (
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
              <h2 className="text-2xl font-semibold sm:text-3xl">Related</h2>
              <p className="mt-3 text-lg leading-relaxed text-[#666666]">
                Step-by-step in the app:{' '}
                <Link
                  href="/docs/turn-on-paid-access"
                  className="font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
                >
                  Turn on paid access
                </Link>
                . For buyers:{' '}
                <Link
                  href="/docs/buying-and-access"
                  className="font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
                >
                  Buying &amp; access
                </Link>
                . After you publish:{' '}
                <Link
                  href="/docs/creator-analytics"
                  className="font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
                >
                  Analytics for creators
                </Link>
                . You monetize{' '}
                <Link
                  href="/features/hubs"
                  className="font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
                >
                  hubs
                </Link>
                . Buyers and followers find you on{' '}
                <Link
                  href="/features/profiles"
                  className="font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
                >
                  profiles
                </Link>
                .{' '}
                <Link
                  href="/pricing"
                  className="font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
                >
                  Pricing
                </Link>{' '}
                covers hub and upload capacity—not whether you can earn.{' '}
                <Link
                  href="/features/trust"
                  className="font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
                >
                  Trust
                </Link>{' '}
                covers verified sellers and adult access.
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="bg-[#313A00] px-6 py-20 text-[#F8FAF2] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-2xl text-center">
            <FadeInSection>
              <h2 className="text-3xl font-semibold leading-tight !text-[#F8FAF2] sm:text-4xl">
                Share first. Earn when it fits.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-[#F8FAF2]/85">
                Create a hub, list it when ready, and turn on paid access only if demand shows up.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2 no-underline"
                  onClick={() => trackButtonClick('features_earning_footer_create')}
                >
                  <FolderPlusIcon className="h-5 w-5 shrink-0" aria-hidden />
                  Create
                </a>
                <Link
                  href="/pricing"
                  className="btn-secondary inline-flex items-center justify-center gap-2 !border-[#F8FAF2]/40 !bg-transparent no-underline !text-[#F8FAF2] hover:!border-[#F8FAF2] hover:!bg-white/10 hover:!text-[#F8FAF2]"
                  onClick={() => trackButtonClick('features_earning_footer_pricing')}
                >
                  See pricing
                </Link>
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
                  href="/docs/turn-on-paid-access"
                  className="underline decoration-[#F8FAF2]/40 underline-offset-2 hover:decoration-[#F8FAF2]"
                >
                  Paid access guide
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
