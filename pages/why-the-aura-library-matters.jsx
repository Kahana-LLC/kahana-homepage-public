import Link from 'next/link';
import SEO from '../components/SEO';
import FadeInSection from '../components/FadeInSection';
import LibraryHubExamples from '../components/marketing/LibraryHubExamples';
import AuraQualityRisingMock from '../components/marketing/AuraQualityRisingMock';
import AuraGiversPreview from '../components/aura/AuraGiversPreview';
import {
  ExploreLibraryButton,
  ShareUniqueKnowledgeButton,
} from '../components/marketing/LibraryActionButtons';
import GlobalReaderFlags from '../components/marketing/GlobalReaderFlags';
import { ABOUT_ORIGIN } from '../config/site';
import { PARTNERSHIP_CONTACT_URL } from '../components/nav/navConfig';
import { productHref } from '../lib/productLinks';
import { fetchAuraTrails } from '../lib/auraTrails';
import { trackButtonClick } from '../utils/analytics';

const CANONICAL = `${ABOUT_ORIGIN}/why-the-aura-library-matters`;

export default function OurMissionPage({ trails = [] }) {
  const libraryHref = productHref('/library', 'our_mission_explore');
  const createHref = productHref('/', 'our_mission_create');
  const affiliateHref = productHref('/earn', 'our_mission_affiliate');
  const partnershipHref = PARTNERSHIP_CONTACT_URL;
  return (
    <>
      <SEO
        title="Our mission | Accessible global library of human knowledge | Kahana"
        description="Kahana's mission is to create an accessible global library of human knowledge. Unique work, Aura, and conversation beside the files so careful knowledge can travel."
        url={CANONICAL}
        type="website"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Our mission',
          description:
            'Create an accessible global library of human knowledge: unique hubs, scarce Aura, and conversation beside the work.',
          url: CANONICAL,
        }}
      />

      <div className="bg-[#F7F3EA] text-[#3B2F1A]">
        <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <FadeInSection eager>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8A6622]">
                Our mission
              </p>
              <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                An accessible global library of human knowledge
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#5C4520] sm:text-xl">
                Kahana exists to build that library: a house for unique human knowledge that people
                can find, reopen, talk about, and pass on. Not another feed. A living Mouseion for
                the whole world.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <ExploreLibraryButton
                  href={libraryHref}
                  onClick={() => trackButtonClick('our_mission_hero_explore')}
                />
                <Link
                  href="/philosophy"
                  className="btn-secondary inline-flex items-center justify-center no-underline"
                >
                  Kahana philosophy
                </Link>
              </div>
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Human knowledge, at global scale
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                The mission is not more posts. It is work that asks something of the reader:
                research, craft, careers, science, writing, practice. Unique knowledge travels
                further when it has one front door in a library people can trust.
              </p>
            </FadeInSection>
            <FadeInSection>
              <div className="mt-10 flex justify-center">
                <GlobalReaderFlags size="lg" />
              </div>
              <p className="mt-6 text-base leading-relaxed text-[#5C4520]">
                Readers already open hubs from 110+ countries. That reach only matters if the
                shelf holds something worthy.{' '}
                <Link href="/philosophy" className="text-[#8A6622] underline underline-offset-2">
                  Philomaths, Dialectic, and Mouseion
                </Link>{' '}
                are how we hold the mission steady.
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
                  A global library of human knowledge is built hub by hub. These packs are knowledge
                  only their creators could assemble: the process they lived, the files they
                  gathered, the subject someone is ready to sit with.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection>
              <div className="mt-10">
                <LibraryHubExamples
                  omitIntro
                  exploreHref={libraryHref}
                  createHref={createHref}
                  exploreTrack="our_mission_examples_explore"
                  createTrack="our_mission_examples_create"
                />
              </div>
              <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-[#5C4520]">
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
                Aura helps the best work rise
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                A feed forgets yesterday. A library should not. When people give Aura, careful work
                becomes easier to find. That is how a mission-scale library stays useful as it
                grows: scarce human endorsement, not posting volume.
              </p>
            </FadeInSection>
            <FadeInSection>
              <div className="mt-10">
                <AuraQualityRisingMock />
              </div>
              <p className="mt-6 text-base leading-relaxed text-[#5C4520]">
                Quality rises with scarce endorsements.{' '}
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
                  Good work must be distinguishable from noise
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
                Human knowledge deepens in conversation. Discussion sits on a hub or a file so
                dialectic stays next to the work, not buried in a separate forum maze. The library
                is for minds meeting, not only files sitting still.
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
                This library is built with your help
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[#5C4520]">
                An accessible global library of human knowledge only arrives when people share what
                only they know. Explore what is already here, contribute a hub, or work with us to
                shape one.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <ExploreLibraryButton
                  href={libraryHref}
                  onClick={() => trackButtonClick('our_mission_mid_explore')}
                />
                <ShareUniqueKnowledgeButton
                  href={createHref}
                  onClick={() => trackButtonClick('our_mission_mid_create')}
                />
              </div>
              <p className="mt-8 text-base leading-relaxed text-[#5C4520]">
                <Link href="/aura" className="text-[#8A6622] underline underline-offset-2">
                  Learn more about Aura
                </Link>
                {' · '}
                <Link href="/philosophy" className="text-[#8A6622] underline underline-offset-2">
                  Philosophy
                </Link>
                {' · '}
                <a
                  href={partnershipHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8A6622] underline underline-offset-2"
                >
                  Partnerships
                </a>
                {' · '}
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
                <a
                  href={partnershipHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8A6622] underline underline-offset-2"
                >
                  Contact
                </a>
              </p>
            </FadeInSection>
          </div>
        </section>
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
