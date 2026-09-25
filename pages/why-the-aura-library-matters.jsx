import Link from 'next/link';
import SEO from '../components/SEO';
import FadeInSection from '../components/FadeInSection';
import DarkLibraryCta from '../components/marketing/DarkLibraryCta';
import EssaySeriesNav from '../components/marketing/EssaySeriesNav';
import LibraryHubExamples from '../components/marketing/LibraryHubExamples';
import AuraQualityRisingMock from '../components/marketing/AuraQualityRisingMock';
import AuraGiversPreview from '../components/aura/AuraGiversPreview';
import { ABOUT_ORIGIN } from '../config/site';
import { GLOBAL_READER_FLAGS } from '../data/globalReaderFlags';
import { CONTACT_URL } from '../components/nav/navConfig';
import { productHref, withProductUtm } from '../lib/productLinks';
import { fetchAuraTrails } from '../lib/auraTrails';
import { trackButtonClick } from '../utils/analytics';

const CANONICAL = `${ABOUT_ORIGIN}/why-the-aura-library-matters`;

export default function WhyTheAuraLibraryMattersPage({ trails = [] }) {
  const libraryHref = productHref('/library', 'why_aura_explore');
  const createHref = productHref('/', 'why_aura_create_unique');
  const affiliateHref = productHref('/earn', 'why_aura_affiliate');
  const collabContactHref = withProductUtm(`${CONTACT_URL}?source=creator_collabs`, {
    campaign: 'why_aura_collab',
  });

  return (
    <>
      <SEO
        title="Why the Aura Library matters | Global library of highest quality knowledge"
        description="Kahana is building a global Aura Library of unique, high-quality knowledge. Readers already come from 110+ countries. Aura helps careful work rise. Explore the Library, contribute, or collab with us."
        url={CANONICAL}
        type="website"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Why the Aura Library matters',
          description:
            'A global library of the highest quality knowledge. Aura tells careful work from noise so unique hubs and files become easier to find.',
          url: CANONICAL,
        }}
      />

      <div className="bg-[#F7F3EA] text-[#3B2F1A]">
        <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <FadeInSection eager>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8A6622]">
                The Aura Library
              </p>
              <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                Why the Aura Library matters
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#5C4520] sm:text-xl">
                We are building a global library of the highest quality knowledge. The library only
                works if the best work can be found. Aura is how people say &ldquo;this was worth
                it,&rdquo; and how that choice makes unique content easier for the next person to open.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href={libraryHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center no-underline"
                  onClick={() => trackButtonClick('why_aura_hero_explore')}
                >
                  Explore the Library
                </a>
                <Link
                  href="/philosophy"
                  className="btn-secondary inline-flex items-center justify-center no-underline"
                >
                  Kahana philosophy
                </Link>
              </div>
              <EssaySeriesNav current="/why-the-aura-library-matters" />
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Heady topics. Heady subjects. Global scale.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                The Library is a place to challenge yourself. Bring work that asks something of the
                reader: research, craft, careers, science, writing, practice. Unique knowledge travels
                further when it has one front door.
              </p>
            </FadeInSection>
            <FadeInSection>
              <ul
                className="mt-10 flex flex-wrap justify-center gap-2"
                aria-label="Readers already come from 110 or more countries"
              >
                {GLOBAL_READER_FLAGS.map(([name, flag]) => (
                  <li key={name} title={name} aria-label={name} className="text-3xl leading-none">
                    <span aria-hidden>{flag}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-base leading-relaxed text-[#5C4520]">
                That aim sits inside our{' '}
                <Link href="/philosophy" className="text-[#8A6622] underline underline-offset-2">
                  mission and philosophy
                </Link>
                : Philomaths who love to learn, Dialectic toward the truth, and a Mouseion where
                great minds work together.
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-5xl">
            <FadeInSection>
              <div className="mx-auto max-w-3xl">
                <h2 className="text-2xl font-semibold sm:text-3xl">
                  Unique work already on the Library
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                  Highlight unique content, not filler. These hubs are knowledge only their creators
                  could package this way: the process they lived, the pack they assembled, the heady
                  subject someone is ready to sit with.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection>
              <div className="mt-10">
                <LibraryHubExamples omitIntro exploreHref={libraryHref} />
              </div>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[#5C4520]">
                Upload what is yours. Aura and reports help keep low-effort AI slop from rising the
                same way careful work does. More in{' '}
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
              <h2 className="text-2xl font-semibold sm:text-3xl">
                What rises is what people chose
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                A feed forgets yesterday. A library should not. When people give Aura, the count
                grows and the work becomes easier to find. File Aura also lifts the hub it lives in.
              </p>
            </FadeInSection>
            <FadeInSection>
              <div className="mt-10">
                <AuraQualityRisingMock />
              </div>
              <p className="mt-6 text-base leading-relaxed text-[#5C4520]">
                Quality rises with scarce endorsements, not posting volume.{' '}
                <Link href="/aura" className="text-[#8A6622] underline underline-offset-2">
                  Learn more about Aura
                </Link>
                .
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] bg-[#EFE8D8] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-6xl">
            <FadeInSection>
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-2xl font-semibold sm:text-3xl">
                  A library needs a way to tell good work from noise
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                  Anyone can upload a file. That does not tell the next person whether it is worth
                  their time. Aura is a scarce daily endorsement. You spend it on a hub or a file you
                  actually found useful, helpful, noteworthy, or cool.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection>
              <div className="mt-10">
                <AuraGiversPreview hubs={trails} omitIntro />
              </div>
              <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-[#5C4520]">
                Aura is not money and not a score you give yourself. You cannot endorse your own hubs
                or files.{' '}
                <Link href="/aura" className="text-[#8A6622] underline underline-offset-2">
                  Learn more about Aura
                </Link>
                .
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">Talk beside the files</h2>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                The point is other people. Understanding deepens when discussion sits on a hub or a
                file. That is dialectic on Kahana: conversation next to the work, not a separate
                forum maze.
              </p>
            </FadeInSection>
            <FadeInSection>
              <div className="mt-10 overflow-hidden rounded-[20px] bg-white px-5 py-6 sm:px-6">
                <div className="space-y-3">
                  <div className="rounded-2xl bg-[#F7F3EA] px-4 py-3">
                    <p className="text-sm font-semibold text-[#3B2F1A]">On this hub</p>
                    <p className="mt-1 text-sm text-[#666666]">
                      Where did you start in the internship guide? The LinkedIn section helped me most.
                    </p>
                  </div>
                  <div className="ml-6 rounded-2xl bg-[#EDE6D2] px-4 py-3">
                    <p className="text-sm font-semibold text-[#3B2F1A]">Reply</p>
                    <p className="mt-1 text-sm text-[#666666]">
                      Same. I watched the discussion and got the resume template note the next day.
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-base leading-relaxed text-[#5C4520]">
                Open{' '}
                <Link href="/features/discussions" className="text-[#8A6622] underline underline-offset-2">
                  discussions and forums
                </Link>
                , the{' '}
                <Link href="/use-cases/hub-discussions" className="text-[#8A6622] underline underline-offset-2">
                  talk beside the files
                </Link>{' '}
                use case, or the{' '}
                <Link href="/help/hub-and-file-discussions" className="text-[#8A6622] underline underline-offset-2">
                  help guide
                </Link>
                .
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] bg-[#EDE6D2] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">
                The Library needs to be built with your help
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[#5C4520]">
                Unique knowledge only arrives when someone uploads it. Explore what is already here,
                share what only you know, or work with us to shape a hub.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href={libraryHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center no-underline"
                  onClick={() => trackButtonClick('why_aura_mid_explore')}
                >
                  Explore the Library
                </a>
                <a
                  href={createHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center justify-center no-underline"
                  onClick={() => trackButtonClick('why_aura_mid_create')}
                >
                  Share your unique knowledge
                </a>
              </div>
              <p className="mt-8 text-base leading-relaxed text-[#5C4520]">
                <Link href="/affiliates" className="text-[#8A6622] underline underline-offset-2">
                  Become an affiliate
                </Link>
                {' · '}
                <a
                  href={affiliateHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8A6622] underline underline-offset-2"
                >
                  Open Earn
                </a>
                {' · '}
                <Link href="/creators" className="text-[#8A6622] underline underline-offset-2">
                  Creators
                </Link>
                {' · '}
                <Link href="/collabs" className="text-[#8A6622] underline underline-offset-2">
                  Creator collab
                </Link>
                {' · '}
                <a href={collabContactHref} className="text-[#8A6622] underline underline-offset-2">
                  Contact
                </a>
              </p>
            </FadeInSection>
          </div>
        </section>

        <DarkLibraryCta
          title="Explore the Library"
          description="See what people have already endorsed. Then upload something unique, or ask us to help you build the hub."
          libraryCampaign="why_aura_library"
          createCampaign="why_aura_create"
          libraryTrack="why_aura_library"
          createTrack="why_aura_create"
          createLabel="Share unique knowledge"
        >
          <p className="mt-8 text-sm text-[#F7F3EA]/70">
            <Link href="/aura" className="underline underline-offset-2">
              Learn more about Aura
            </Link>
            {' · '}
            <Link href="/philosophy" className="underline underline-offset-2">
              Philosophy
            </Link>
            {' · '}
            <Link href="/collabs" className="underline underline-offset-2">
              Creator collabs
            </Link>
            {' · '}
            <Link href="/affiliates" className="underline underline-offset-2">
              Affiliates
            </Link>
          </p>
        </DarkLibraryCta>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const trails = await fetchAuraTrails();
  return {
    props: { trails },
    revalidate: 3600,
  };
}
