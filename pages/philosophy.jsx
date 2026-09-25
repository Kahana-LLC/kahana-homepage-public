import Link from 'next/link';
import {
  AcademicCapIcon,
  ChatBubbleLeftRightIcon,
  LightBulbIcon,
} from '@heroicons/react/24/outline';
import SEO from '../components/SEO';
import FadeInSection from '../components/FadeInSection';
import DarkLibraryCta from '../components/marketing/DarkLibraryCta';
import RainbowHoverCard from '../components/home/platform/RainbowHoverCard';
import {
  PHILOSOPHY_INTRO,
  PHILOSOPHY_PAGE_CANONICAL,
  PHILOSOPHY_PILLARS,
  PHILOSOPHY_TONE_STYLES,
} from '../data/philosophyCopy';
import { GLOBAL_READER_FLAGS } from '../data/globalReaderFlags';
import { productHref } from '../lib/productLinks';
import { trackButtonClick } from '../utils/analytics';

const ICONS = {
  philomaths: AcademicCapIcon,
  dialectic: ChatBubbleLeftRightIcon,
  mouseion: LightBulbIcon,
};

function PhilosophyMark({ Icon, wellClass, iconClass }) {
  return (
    <span
      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${wellClass}`}
    >
      <Icon className={`h-5 w-5 ${iconClass}`} aria-hidden />
    </span>
  );
}

export default function PhilosophyPage() {
  const libraryHref = productHref('/library', 'philosophy_explore');

  return (
    <>
      <SEO
        title="Kahana philosophy | Philomaths, Dialectic, Mouseion"
        description="Kahana's philosophy in full: Philomaths who love to learn, Dialectic toward the truth with Aura and discussion, and a Mouseion where great minds work together. A global library of the highest quality knowledge."
        url={PHILOSOPHY_PAGE_CANONICAL}
        type="website"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Kahana philosophy',
          description:
            'Philomaths, Dialectic, and Mouseion: the mission, vision, and dream behind the Aura Library.',
          url: PHILOSOPHY_PAGE_CANONICAL,
        }}
      />

      <div className="bg-[#F7F3EA] text-[#3B2F1A]">
        <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <FadeInSection eager>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8A6622]">
                Mission and philosophy
              </p>
              <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                Kahana philosophy
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#5C4520] sm:text-xl">
                {PHILOSOPHY_INTRO}
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
                Create, learn, and research on a global scale. Readers already come from over 110
                countries and speak many languages.
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-12 sm:px-10 lg:px-16">
          <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3 md:items-stretch">
            {PHILOSOPHY_PILLARS.map((pillar) => {
              const styles = PHILOSOPHY_TONE_STYLES[pillar.tone];
              const Icon = ICONS[pillar.id];
              return (
                <FadeInSection key={pillar.id}>
                  <RainbowHoverCard
                    as="article"
                    className="h-full"
                    innerClassName={`flex h-full flex-col ${styles.bg} px-5 py-5 sm:px-6 sm:py-6`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h2
                        className={`text-[0.65rem] font-semibold tracking-[0.16em] uppercase ${styles.role}`}
                      >
                        {pillar.role}
                      </h2>
                      <PhilosophyMark
                        Icon={Icon}
                        wellClass={styles.well}
                        iconClass={styles.icon}
                      />
                    </div>
                    <p
                      className={`philosophy-word mt-3 font-bricolage text-xl italic leading-none tracking-tight ${styles.word}`}
                      title={pillar.etymology}
                    >
                      {pillar.word}
                    </p>
                    <p className="mt-1.5 text-xs tracking-tight text-[#3B2F1A]/70">{pillar.gloss}</p>
                    <p className="mt-4 text-[#666666]">{pillar.cardBody}</p>
                  </RainbowHoverCard>
                </FadeInSection>
              );
            })}
          </div>
        </section>

        {PHILOSOPHY_PILLARS.map((pillar) => (
          <section
            key={`${pillar.id}-expand`}
            className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16"
          >
            <div className="mx-auto max-w-3xl">
              <FadeInSection>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8A6622]">
                  {pillar.role}
                </p>
                <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
                  {pillar.word}: {pillar.gloss}
                </h2>
                <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
                  {pillar.expand.map((para) => (
                    <p key={para.slice(0, 48)}>{para}</p>
                  ))}
                </div>
              </FadeInSection>
            </div>
          </section>
        ))}

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">
                The Library needs to be built with your help
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                Philosophy is only real if the shelves fill with unique knowledge. Explore what is
                already endorsed. Upload what only you can share. Or{' '}
                <Link href="/collabs" className="text-[#8A6622] underline underline-offset-2">
                  collab with us
                </Link>{' '}
                as a creator.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={libraryHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center no-underline"
                  onClick={() => trackButtonClick('philosophy_explore')}
                >
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

        <DarkLibraryCta
          title="Contribute to the global library"
          description="Open the Library, share unique knowledge, or read how Aura keeps quality visible."
          libraryCampaign="philosophy_library"
          createCampaign="philosophy_create"
          libraryTrack="philosophy_library"
          createTrack="philosophy_create"
          createLabel="Share unique knowledge"
        >
          <p className="mt-8 text-sm text-[#F7F3EA]/70">
            <Link href="/aura" className="underline underline-offset-2">
              Aura
            </Link>
            {' · '}
            <Link href="/features/discussions" className="underline underline-offset-2">
              Discussions
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
