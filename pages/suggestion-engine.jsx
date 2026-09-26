import Link from 'next/link';
import {
  ChartBarIcon,
  DocumentTextIcon,
  MagnifyingGlassIcon,
  PhotoIcon,
  SparklesIcon,
  TagIcon,
} from '@heroicons/react/24/outline';
import SEO from '../components/SEO';
import FadeInSection from '../components/FadeInSection';
import DarkLibraryCta from '../components/marketing/DarkLibraryCta';
import { ABOUT_ORIGIN } from '../config/site';
import { productHref } from '../lib/productLinks';
import { trackButtonClick } from '../utils/analytics';

const CANONICAL = `${ABOUT_ORIGIN}/suggestion-engine`;

const HUB_SIGNALS = [
  {
    Icon: PhotoIcon,
    title: 'Cover',
    body: 'The image people see first in Library cards and rich results.',
  },
  {
    Icon: DocumentTextIcon,
    title: 'Title and description',
    body: 'Plain language about what the hub is for. This is what search matches against.',
  },
  {
    Icon: TagIcon,
    title: 'Tags and categories',
    body: 'Niche labels that connect your work to how learners filter and browse.',
  },
  {
    Icon: MagnifyingGlassIcon,
    title: 'Natural-language search',
    body: 'When someone types what they need, hubs with strong listing data come back as rich results.',
  },
  {
    Icon: ChartBarIcon,
    title: 'Creator analytics',
    body: 'Watch hub views, then tighten the title, cover, and copy so the right people find you.',
  },
  {
    Icon: SparklesIcon,
    title: 'Aura surfaces unique work',
    body: 'Scarce endorsements lift careful expertise. Audience size is not the gate.',
  },
];

const RELATED = [
  { kind: 'Feature', title: 'Library / Explore', href: '/features/explore' },
  { kind: 'Feature', title: 'For You', href: '/features/for-you' },
  { kind: 'Help', title: 'List a hub on Library', href: '/help/list-hub-on-explore' },
  { kind: 'Help', title: 'Creator analytics', href: '/help/creator-analytics' },
  { kind: 'Benefits', title: 'Benefits for creators', href: '/creator-benefits' },
  { kind: 'Essay', title: 'Our mission', href: '/why-the-aura-library-matters' },
];

export default function SuggestionEnginePage() {
  return (
    <>
      <SEO
        title="Suggestion engine for Kahana | How Library discovery works"
        description="When you list a hub with a cover, title, description, and tags, Kahana's suggestion engine turns that into rich Library search results. Use creator analytics to improve discovery. Unique expertise does not get buried."
        url={CANONICAL}
        type="website"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Kahana suggestion engine',
          description:
            'How hub listing data powers natural-language Library search, creator analytics, and Aura discovery.',
          url: CANONICAL,
        }}
      />

      <div className="bg-[#F7F3EA] text-[#3B2F1A]">
        <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <FadeInSection eager>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8A6622]">
                Discovery
              </p>
              <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                The Kahana suggestion engine
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-[#5C4520] sm:text-xl">
                When you create a hub on the Library, every piece of listing data you add feeds how
                people find you. Learners search in natural language. Your hub comes back as a rich
                result. You do not need a huge audience for valuable work to surface.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href="/creator-benefits"
                  className="btn-primary inline-flex items-center justify-center no-underline"
                  onClick={() => trackButtonClick('suggestion_engine_to_benefits')}
                >
                  Benefits for creators
                </Link>
                <a
                  href={productHref('/library', 'suggestion_engine_library')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center justify-center no-underline"
                  onClick={() => trackButtonClick('suggestion_engine_library_hero')}
                >
                  Open the Library
                </a>
              </div>
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-14 sm:px-10 sm:py-16 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Listing data is discovery fuel
              </h2>
              <p className="mt-3 text-lg leading-relaxed text-[#666666]">
                Cover photo, title, description, tags, and the rest of your Library listing are not
                decoration. They are how the suggestion engine understands what your hub is for, so
                students, learners, and curious browsers can find it when they ask for that thing.
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-14 sm:px-10 sm:py-16 lg:px-16">
          <div className="mx-auto max-w-5xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">What already happens</h2>
              <p className="mt-3 max-w-2xl text-lg leading-relaxed text-[#666666]">
                From the moment a hub is listed, these pieces work together.
              </p>
            </FadeInSection>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {HUB_SIGNALS.map((item) => {
                const { Icon } = item;
                return (
                  <li key={item.title}>
                    <FadeInSection>
                      <article className="flex h-full gap-3 rounded-[20px] bg-white px-4 py-5 sm:gap-4 sm:px-5">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EDE6D2] text-[#5C4520]">
                          <Icon className="h-5 w-5" aria-hidden />
                        </span>
                        <div className="min-w-0">
                          <h3 className="font-bricolage text-lg font-semibold tracking-tight text-[#3B2F1A]">
                            {item.title}
                          </h3>
                          <p className="mt-1.5 text-sm leading-relaxed text-[#666666]">
                            {item.body}
                          </p>
                        </div>
                      </article>
                    </FadeInSection>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-14 sm:px-10 sm:py-16 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Nothing unique has to stay buried
              </h2>
              <p className="mt-3 text-lg leading-relaxed text-[#666666]">
                Feeds bury niche work under whoever already has reach. The Aura Library was built so
                unique, valuable expertise can be discovered and surfaced when people are looking
                for it, no matter who it is from or how large their following is.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#5C4520]">
                Use creator analytics to see hub views. Tweak the title, cover, description, and
                tags. Search and Aura keep working for you while you refine how the Library
                understands the hub.
              </p>
              <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                <Link
                  href="/help/creator-analytics"
                  className="text-sm font-semibold text-[#8A6622] underline underline-offset-2"
                >
                  Creator analytics
                </Link>
                <Link
                  href="/help/list-hub-on-explore"
                  className="text-sm font-semibold text-[#8A6622] underline underline-offset-2"
                >
                  List a hub on Library
                </Link>
                <Link
                  href="/why-the-aura-library-matters"
                  className="text-sm font-semibold text-[#8A6622] underline underline-offset-2"
                >
                  Our mission
                </Link>
              </div>
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-14 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">Keep reading</h2>
              <ul className="mt-6 divide-y divide-[#E4D9C4]">
                {RELATED.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="flex items-baseline justify-between gap-4 py-4 no-underline hover:opacity-80"
                    >
                      <span>
                        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8A6622]">
                          {item.kind}
                        </span>
                        <span className="mt-1 block font-semibold text-[#3B2F1A]">
                          {item.title}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </FadeInSection>
          </div>
        </section>

        <DarkLibraryCta
          title="List a hub people can find"
          description="Add a cover, title, description, and tags. Then open creator analytics and keep improving."
          libraryCampaign="suggestion_engine_library"
          createCampaign="suggestion_engine_create"
          libraryTrack="suggestion_engine_library"
          createTrack="suggestion_engine_create"
          createFirst
        >
          <p className="mt-8 text-sm text-[#F7F3EA]/70">
            <Link href="/creator-benefits" className="underline underline-offset-2">
              Benefits for creators
            </Link>
            {' / '}
            <Link href="/features/explore" className="underline underline-offset-2">
              Library
            </Link>
            {' / '}
            <Link href="/help/creator-analytics" className="underline underline-offset-2">
              Analytics
            </Link>
          </p>
        </DarkLibraryCta>
      </div>
    </>
  );
}
