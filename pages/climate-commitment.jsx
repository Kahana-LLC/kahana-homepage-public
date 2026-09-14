import Link from 'next/link';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import SEO from '../components/SEO';
import FadeInSection from '../components/FadeInSection';
import { ABOUT_ORIGIN } from '../config/site';
import { productHref } from '../lib/productLinks';
import { trackButtonClick } from '../utils/analytics';

const CANONICAL = `${ABOUT_ORIGIN}/climate-commitment`;
const STRIPE_CLIMATE = 'https://stripe.com/climate';

export default function ClimateCommitmentPage() {
  return (
    <>
      <SEO
        title="Kahana’s climate commitment"
        description="Kahana directs 1% of revenue to carbon removal through Stripe Climate. Paid library access helps fund that commitment."
        url={CANONICAL}
        type="website"
      />

      <div className="bg-[#F7F3EA] text-[#3B2F1A]">
        <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <FadeInSection eager>
              <p className="text-[0.65rem] font-semibold tracking-[0.16em] text-[#8A6622] uppercase">
                Mission · vision · spirit
              </p>
              <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                Kahana’s climate commitment
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#5C4520] sm:text-xl">
                We direct <strong className="font-semibold text-[#3B2F1A]">1% of Kahana revenue</strong> to
                permanent carbon removal through{' '}
                <a
                  href={STRIPE_CLIMATE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#8A6622] underline-offset-4 hover:underline"
                >
                  Stripe Climate
                </a>
                . When someone pays to access a hub on the library, that purchase helps fund the
                next generation of carbon-removal technology.
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl space-y-12">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">How paid access helps the climate</h2>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-[#666666]">
                <p>
                  Kahana is a digital library. Creators list hubs. Learners browse, save, and
                  sometimes pay for access. We take a small platform fee on those transactions, and
                  we offer an optional Kahana Growth subscription. That is our revenue.
                </p>
                <p>
                  Through Stripe Climate Commitments, we send 1% of that revenue to{' '}
                  <a
                    href={STRIPE_CLIMATE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#8A6622] underline-offset-4 hover:underline"
                  >
                    Frontier’s carbon-removal portfolio
                  </a>
                  — early technologies that pull CO₂ out of the air and store it for the long term.
                  Stripe Climate is built for this: a percentage of revenue, not a one-off offset
                  badge.
                </p>
                <p>
                  This is not a claim that your purchase erases a specific ton of CO₂ on the
                  receipt. It is a standing commitment: as the library earns, carbon removal gets
                  a share.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">Learning as a climate force</h2>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-[#666666]">
                <p>
                  We think learning can drive improvements across climate — clearer science, better
                  tools, people who can actually use them. The library exists to make that kind of
                  education accessible.
                </p>
                <p>
                  Staying{' '}
                  <Link
                    href="/ad-free-commitment"
                    className="font-medium text-[#8A6622] underline-offset-4 hover:underline"
                  >
                    ad-free
                  </Link>{' '}
                  keeps us on that mission instead of selling attention. Directing 1% of revenue to
                  carbon removal is how the business itself participates.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">Read Stripe’s case for removal</h2>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                Carbon removal is behind where it needs to be. Early buyers help new methods get
                cheaper and larger. That is the problem Stripe Climate and Frontier were created
                to solve.
              </p>
              <p className="mt-6">
                <a
                  href={STRIPE_CLIMATE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center justify-center no-underline"
                >
                  stripe.com/climate
                </a>
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="bg-[#3B2F1A] px-6 py-20 text-[#F7F3EA] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-2xl text-center">
            <FadeInSection>
              <h2 className="text-3xl font-semibold leading-tight !text-[#F7F3EA] sm:text-4xl">
                Browse the library
              </h2>
              <p className="mt-4 text-lg text-[#F7F3EA]/85">
                Paid hubs and Kahana subscriptions are how this commitment is funded. Free
                browsing stays free.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a
                  href={productHref('/library', 'climate_explore')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center justify-center gap-2 !border-[#F7F3EA]/40 !bg-transparent no-underline !text-[#F7F3EA] hover:!border-[#F7F3EA] hover:!bg-white/10 hover:!text-[#F7F3EA]"
                  onClick={() => trackButtonClick('climate_page_explore')}
                >
                  <MagnifyingGlassIcon className="h-5 w-5 shrink-0" aria-hidden />
                  Open Library
                </a>
                <Link
                  href="/pricing"
                  className="btn-primary inline-flex items-center justify-center no-underline"
                >
                  Pricing
                </Link>
              </div>
            </FadeInSection>
          </div>
        </section>
      </div>
    </>
  );
}
