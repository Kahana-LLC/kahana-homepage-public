import Link from 'next/link';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import SEO from '../../components/SEO';
import FadeInSection from '../../components/FadeInSection';
import { ABOUT_ORIGIN } from '../../config/site';
import { productHref } from '../../lib/productLinks';
import { trackButtonClick } from '../../utils/analytics';

const CANONICAL = `${ABOUT_ORIGIN}/features/aura-pathways`;

export default function AuraPathwaysFeaturePage() {
  return (
    <>
      <SEO
        title="Aura pathways | Kahana"
        description="Aura pathways show where scarce endorsement went: file to hub, who gave it, and how that signal shows up in Library, For You, and analytics."
        url={CANONICAL}
        type="website"
      />

      <div className="bg-[#F7F3EA] text-[#3B2F1A]">
        <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection eager>
              <p className="text-sm font-semibold tracking-wide text-[#8A6622]">Feature</p>
              <h1 className="mt-2 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                Aura pathways
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#5C4520] sm:text-xl">
                Aura is scarce on purpose: five to give each day. A pathway is how you{' '}
                <strong className="font-semibold text-[#3B2F1A]">trace what happened</strong> after
                someone spent it—not a mysterious like count.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={productHref('/library', 'aura_pathways_explore')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2 no-underline"
                  onClick={() => trackButtonClick('feature_aura_pathways_cta')}
                >
                  <MagnifyingGlassIcon className="h-5 w-5 shrink-0" aria-hidden />
                  Browse Library
                </a>
                <Link
                  href="/help/how-aura-works"
                  className="btn-secondary inline-flex items-center justify-center no-underline"
                >
                  How Aura works
                </Link>
              </div>
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl space-y-14">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">What you can trace</h2>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-[#666666]">
                <p>
                  On a hub or a file with Aura, you can open{' '}
                  <strong className="font-semibold text-[#3B2F1A]">who gave it</strong>. That is
                  the start of the pathway: real members, not an anonymous heap of hearts.
                </p>
                <p>
                  Creators also see Aura on cards and in{' '}
                  <Link
                    href="/help/creator-analytics"
                    className="font-medium text-[#8A6622] underline-offset-4 hover:underline"
                  >
                    analytics
                  </Link>
                  — enough to tell “people found this worth a scarce vote” from “this hub has
                  views but no conviction.”
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">File to hub (and not the reverse)</h2>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-[#666666]">
                <p>
                  Give Aura to a noteworthy file inside a hub, and that{' '}
                  <strong className="font-semibold text-[#3B2F1A]">hub also receives 1 Aura</strong>.
                  The file keeps its own count. Giving Aura only to the hub does{' '}
                  <em>not</em> sprinkle Aura onto every file inside it.
                </p>
                <p>
                  That one-way lift is the pathway in the catalog: a strong page or clip can pull
                  the whole hub up without pretending every file earned the same signal.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">How it shows up in discovery</h2>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-[#666666]">
                <p>
                  File Aura helps noteworthy files surface in search and ranking. Hub Aura does
                  not roll down. For You can weigh Aura as one of several signals—alongside saves,
                  follows, and taste—not as a paid boost.
                </p>
                <p>
                  You cannot give Aura to your own hubs or files. Daily budget resets at midnight
                  UTC. You can take Aura back (as the product allows) and spend it somewhere else;
                  past endorsements are not wiped at midnight.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">What a pathway is not</h2>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                Aura is not money, crypto, or a star rating. It does not unlock a paywall. A
                pathway will not show you a secret ranking formula—it shows the human trail: who
                spent scarce recognition, on which file or hub, and that the hub felt a +1 when a
                file did.
              </p>
              <p className="mt-6 text-lg">
                <Link
                  href="/aura"
                  className="font-medium text-[#8A6622] underline-offset-4 hover:underline"
                >
                  Why Aura exists
                </Link>
                {' · '}
                <Link
                  href="/features/aura-and-trust"
                  className="font-medium text-[#8A6622] underline-offset-4 hover:underline"
                >
                  Aura and trust
                </Link>
                {' · '}
                <Link
                  href="/features/aura"
                  className="font-medium text-[#8A6622] underline-offset-4 hover:underline"
                >
                  Aura feature
                </Link>
                {' · '}
                <Link
                  href="/help/for-you-and-taste"
                  className="font-medium text-[#8A6622] underline-offset-4 hover:underline"
                >
                  For You and taste
                </Link>
              </p>
            </FadeInSection>
          </div>
        </section>
      </div>
    </>
  );
}
