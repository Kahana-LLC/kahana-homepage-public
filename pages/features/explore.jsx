import Link from 'next/link';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import SEO from '../../components/SEO';
import FadeInSection from '../../components/FadeInSection';
import LibraryHubExamples from '../../components/marketing/LibraryHubExamples';
import DarkLibraryCta from '../../components/marketing/DarkLibraryCta';
import { ABOUT_ORIGIN } from '../../config/site';
import { GLOBAL_READER_FLAGS } from '../../data/globalReaderFlags';
import { productHref } from '../../lib/productLinks';
import { trackButtonClick } from '../../utils/analytics';

const CANONICAL = `${ABOUT_ORIGIN}/features/explore`;

export default function ExploreFeaturePage() {
  const libraryHref = productHref('/library', 'feature_explore');

  return (
    <>
      <SEO
        title="Library | Kahana"
        description="Search and browse public hubs, authors, and clubs. A library of heady ebooks, videos, and knowledge, not a feed. Explore the Library."
        url={CANONICAL}
        type="website"
      />

      <div className="bg-[#F7F3EA] text-[#3B2F1A]">
        <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <FadeInSection eager>
              <p className="text-sm font-semibold tracking-wide text-[#8A6622]">Feature</p>
              <h1 className="mt-2 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                Library
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#5C4520] sm:text-xl">
                Kahana&apos;s public catalog. Discover heady ebooks, videos, knowledge, files, and
                artifacts. It is a library, not a feed like TikTok or Instagram. Guests can browse
                most public, non-adult listings.
              </p>
              <ul
                className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-2"
                aria-label="A sample of countries readers already come from. Kahana reaches 110 or more."
              >
                {GLOBAL_READER_FLAGS.map(([name, flag]) => (
                  <li key={name} title={name} aria-label={name} className="text-2xl leading-none">
                    <span aria-hidden>{flag}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-[#666666]">
                People already create, learn, and research here from over 110 countries.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href={libraryHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2 no-underline"
                  onClick={() => trackButtonClick('feature_explore_hero')}
                >
                  <MagnifyingGlassIcon className="h-5 w-5 shrink-0" aria-hidden />
                  Explore the Library
                </a>
                <Link
                  href="/why-the-aura-library-matters"
                  className="btn-secondary inline-flex items-center justify-center no-underline"
                >
                  Why the Aura Library matters
                </Link>
              </div>
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">Search, filter, arrive</h2>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                Search hubs, authors, and files. Filter by category, free or paid, price, and tags.
                Authors and Clubs tabs sit next to hubs. For You personalizes from Aura, saves,
                follows, and taste.
              </p>
              <div className="mt-8 overflow-hidden rounded-[20px] border border-[#E4D9C4] bg-white">
                <div className="flex items-center gap-3 border-b border-[#E4D9C4] bg-[#EDE6D2] px-5 py-3">
                  <MagnifyingGlassIcon className="h-5 w-5 text-[#8A6622]" aria-hidden />
                  <p className="text-sm text-[#5C4520]">Search the Library…</p>
                </div>
                <div className="flex flex-wrap gap-2 border-b border-[#E4D9C4] px-5 py-3">
                  {['Hubs', 'Authors', 'Clubs', 'Free', 'Paid'].map((tab) => (
                    <span
                      key={tab}
                      className="rounded-full bg-[#F7F3EA] px-3 py-1 text-xs font-semibold text-[#5C4520]"
                    >
                      {tab}
                    </span>
                  ))}
                </div>
                <div className="space-y-3 px-5 py-4">
                  {[
                    { title: 'Internship and research process', meta: 'Hub · paid' },
                    { title: 'Path into a heady subject', meta: 'Hub · free' },
                    { title: 'Creator profile', meta: 'Author' },
                  ].map((row) => (
                    <div
                      key={row.title}
                      className="flex items-center justify-between gap-3 rounded-xl bg-[#F7F3EA] px-4 py-3"
                    >
                      <p className="font-medium text-[#3B2F1A]">{row.title}</p>
                      <p className="shrink-0 text-xs text-[#8A6622]">{row.meta}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-4 text-base text-[#5C4520]">
                Listing a hub on Library is a separate step from creating it. Unlisted hubs stay
                link-only. See{' '}
                <Link href="/learners" className="text-[#8A6622] underline underline-offset-2">
                  learners
                </Link>{' '}
                and{' '}
                <Link href="/philosophy" className="text-[#8A6622] underline underline-offset-2">
                  philosophy
                </Link>
                .
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">Heady work, already listed</h2>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                Real hubs people can open today. Unique knowledge rises when readers leave Aura.
              </p>
              <div className="mt-8">
                <LibraryHubExamples
                  omitIntro
                  exploreHref={libraryHref}
                  exploreTrack="feature_explore_hubs"
                />
              </div>
              <p className="mt-4 text-base text-[#5C4520]">
                More on{' '}
                <Link
                  href="/why-the-aura-library-matters"
                  className="text-[#8A6622] underline underline-offset-2"
                >
                  why the Aura Library matters
                </Link>{' '}
                and{' '}
                <Link href="/aura" className="text-[#8A6622] underline underline-offset-2">
                  Aura
                </Link>
                .
              </p>
            </FadeInSection>
          </div>
        </section>

        <DarkLibraryCta
          title="Open the catalog"
          description="Browse public hubs, authors, and clubs. Arrive somewhere worth staying."
          libraryCampaign="feature_explore_library"
          createCampaign="feature_explore_create"
          libraryTrack="feature_explore_library"
          createTrack="feature_explore_create"
        />
      </div>
    </>
  );
}
