import Link from 'next/link';
import SEO from '../components/SEO';
import FadeInSection from '../components/FadeInSection';
import DarkLibraryCta from '../components/marketing/DarkLibraryCta';
import EssaySeriesNav from '../components/marketing/EssaySeriesNav';
import LibraryHubExamples from '../components/marketing/LibraryHubExamples';
import AuraQualityRisingMock from '../components/marketing/AuraQualityRisingMock';
import { ABOUT_ORIGIN } from '../config/site';
import { productHref } from '../lib/productLinks';
import { trackButtonClick } from '../utils/analytics';

const CANONICAL = `${ABOUT_ORIGIN}/do-well`;

export default function DoWellPage() {
  const libraryHref = productHref('/library', 'do_well_explore');
  const createHref = productHref('/', 'do_well_create');

  return (
    <>
      <SEO
        title="What to post on Kahana | Share work people give Aura"
        description="How to get discovered on Kahana. Share unique, helpful work. When people find it useful, they give Aura, and that hub becomes easier to find."
        url={CANONICAL}
        type="website"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'What to post on Kahana',
          description:
            'Share unique helpful work. Aura from readers is what makes a hub easier to discover.',
          url: CANONICAL,
        }}
      />

      <div className="bg-[#F7F3EA] text-[#3B2F1A]">
        <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <FadeInSection eager>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8A6622]">
                Doing well
              </p>
              <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                What to post on Kahana
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#5C4520] sm:text-xl">
                Share unique, helpful work. If people feel it is useful, helpful, noteworthy, or
                cool, they give Aura. That is what makes it rise and become easier to find.
              </p>
              <EssaySeriesNav current="/do-well" />
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-5xl">
            <FadeInSection>
              <div className="mx-auto max-w-3xl">
                <h2 className="text-2xl font-semibold sm:text-3xl">
                  Share work that is actually yours
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                  Unique, helpful work. A process you have used, a workshop you taught, a journal you
                  wrote, a packet a specific person needs. Not a pile of generic pages that could have
                  come from anywhere.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection>
              <div className="mt-10">
                <LibraryHubExamples
                  omitIntro
                  exploreHref={libraryHref}
                  createHref={createHref}
                  exploreTrack="do_well_unique_explore"
                  createTrack="do_well_unique_create"
                />
              </div>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[#5C4520]">
                Put the full piece in a hub. See{' '}
                <Link href="/success-stories" className="text-[#8A6622] underline underline-offset-2">
                  hubs that did this
                </Link>
                .
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">Skip the slop</h2>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                AI filler, repackaged listicles, and a repost of someone else&apos;s reel do not do
                well here. People can tell. They will not spend Aura on it, and Aura is what makes
                work rise.
              </p>
            </FadeInSection>
            <FadeInSection>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[20px] bg-white px-5 py-6 opacity-60">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8A6622]">
                    Does not rise
                  </p>
                  <p className="mt-3 font-semibold text-[#3B2F1A]">Generic AI pack</p>
                  <p className="mt-2 text-sm text-[#666666]">
                    Same tone everywhere. No lived process. No reason to leave Aura.
                  </p>
                </div>
                <div className="rounded-[20px] bg-[#EDE6D2] px-5 py-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8A6622]">
                    Can rise
                  </p>
                  <p className="mt-3 font-semibold text-[#3B2F1A]">Your real playbook</p>
                  <p className="mt-2 text-sm text-[#666666]">
                    Files only you could assemble. Someone spends a scarce signal so the next person finds it.
                  </p>
                </div>
              </div>
              <p className="mt-6 text-base leading-relaxed text-[#5C4520]">
                More on our stance in{' '}
                <Link href="/blog/against-ai-slop" className="text-[#8A6622] underline underline-offset-2">
                  Not a home for AI slop
                </Link>
                .
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">Let people find it</h2>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                List the hub on Explore. Give it a clear title, a real description, and the files
                inside named so a stranger knows what they are opening. A private folder cannot be
                discovered.
              </p>
            </FadeInSection>
            <FadeInSection>
              <div className="mt-10 overflow-hidden rounded-[20px] bg-white px-5 py-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8A6622]">
                  Library listing
                </p>
                <div className="mt-4 flex items-center gap-4 rounded-2xl bg-[#F7F3EA] px-4 py-3">
                  <div className="h-14 w-20 shrink-0 rounded-lg bg-[#E8DCC4]" />
                  <div className="min-w-0">
                    <p className="truncate font-semibold text-[#3B2F1A]">Clear hub title</p>
                    <p className="mt-1 text-sm text-[#666666]">
                      Real description · named files · listed on Explore
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-base leading-relaxed text-[#5C4520]">
                <Link href="/help/list-hub-on-explore" className="text-[#8A6622] underline underline-offset-2">
                  List a hub on Explore
                </Link>
                {' · '}
                <a
                  href={libraryHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8A6622] underline underline-offset-2"
                  onClick={() => trackButtonClick('do_well_find_explore')}
                >
                  Explore the Library
                </a>
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">Aura is the rise</h2>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                If someone finds the work useful, helpful, noteworthy, or cool, they can give it
                Aura. That endorsement makes the hub easier to find for the next person. It does not
                depend on a platform algorithm.
              </p>
            </FadeInSection>
            <FadeInSection>
              <div className="mt-10">
                <AuraQualityRisingMock />
              </div>
              <p className="mt-6 text-base leading-relaxed text-[#5C4520]">
                You do not boost your own work. Other people do, because they meant it.{' '}
                <Link href="/aura" className="text-[#8A6622] underline underline-offset-2">
                  Learn more about Aura
                </Link>
                .
              </p>
            </FadeInSection>
          </div>
        </section>

        <DarkLibraryCta
          title="Put one real piece of work in a hub"
          description="Then list it where people can find it."
          libraryCampaign="do_well_library"
          createCampaign="do_well_create"
          libraryTrack="do_well_library"
          createTrack="do_well_create"
          createFirst
        >
          <p className="mt-8 text-sm text-[#F7F3EA]/70">
            <Link href="/why-the-aura-library-matters" className="underline underline-offset-2">
              Our mission
            </Link>
            {' · '}
            <Link href="/aura" className="underline underline-offset-2">
              How Aura works
            </Link>
            {' · '}
            <Link href="/success-stories" className="underline underline-offset-2">
              See hubs that did this
            </Link>
          </p>
        </DarkLibraryCta>
      </div>
    </>
  );
}
