import Link from 'next/link';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import SEO from '../components/SEO';
import FadeInSection from '../components/FadeInSection';
import { ABOUT_ORIGIN } from '../config/site';
import { productHref } from '../lib/productLinks';
import { trackButtonClick } from '../utils/analytics';

const CANONICAL = `${ABOUT_ORIGIN}/ad-free-commitment`;

export default function AdFreeCommitmentPage() {
  return (
    <>
      <SEO
        title="Kahana’s ad-free commitment"
        description="Kahana is an ad-free digital library so we can stay on high-quality, accessible education. We do not sell your data. We earn from subscriptions and creator–learner payments."
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
                Kahana’s ad-free commitment
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#5C4520] sm:text-xl">
                The library stays <strong className="font-semibold text-[#3B2F1A]">ad-free</strong> so
                we can stay on our mission: making high-quality education accessible. We do not
                sell your data, and we do not intend to.
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl space-y-12">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">Why we refuse ads</h2>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-[#666666]">
                <p>
                  Many social and content platforms — Netflix, Pinterest, TikTok, Instagram, YouTube
                  — monetize attention with ads. That model is built to interrupt you. A library
                  should help you stay with a hub, a book, a club.
                </p>
                <p>
                  Kahana will not put display ads, sponsored slots, or tracking pixels in the
                  catalog to fund the product. If the page is about learning, it should feel like
                  learning.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">How we actually earn</h2>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-[#666666]">
                <p>
                  We earn from <strong className="font-semibold text-[#3B2F1A]">paid subscriptions</strong>{' '}
                  (Kahana Growth) and when we{' '}
                  <strong className="font-semibold text-[#3B2F1A]">
                    facilitate a transaction
                  </strong>{' '}
                  between a creator and a learner — paid hub access on the library. That is
                  optional for both sides. Free hubs stay first-class.
                </p>
                <p>
                  We do not sell your personal data to advertisers. We do not build a second
                  business on your reading list.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">Education first</h2>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-[#666666]">
                <p>
                  Ads pull a product toward whatever holds attention. We want the opposite: rooms
                  where people can learn deeply, share what they know, and stay with a hub long
                  enough for it to matter.
                </p>
                <p>
                  Keeping Kahana ad-free is how we protect that mission. High-quality education
                  should be accessible without a second screen of sponsorships.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">Learning and climate</h2>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                We think learning can be a force that drives improvements across climate: better
                science, better craft, better choices. An ad-free library keeps us focused on
                that work. Directing 1% of Kahana revenue to carbon removal is the other half of
                the same spirit.
              </p>
              <p className="mt-6">
                <Link
                  href="/climate-commitment"
                  className="font-medium text-[#8A6622] underline-offset-4 hover:underline"
                >
                  Kahana’s climate commitment
                </Link>
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="bg-[#3B2F1A] px-6 py-20 text-[#F7F3EA] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-2xl text-center">
            <FadeInSection>
              <h2 className="text-3xl font-semibold leading-tight !text-[#F7F3EA] sm:text-4xl">
                Browse without ads
              </h2>
              <p className="mt-4 text-lg text-[#F7F3EA]/85">
                Open the library. Subscribe only if you need Growth capacity. Pay a creator only
                when their hub is worth it.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a
                  href={productHref('/library', 'adfree_explore')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center justify-center gap-2 !border-[#F7F3EA]/40 !bg-transparent no-underline !text-[#F7F3EA] hover:!border-[#F7F3EA] hover:!bg-white/10 hover:!text-[#F7F3EA]"
                  onClick={() => trackButtonClick('adfree_page_explore')}
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
