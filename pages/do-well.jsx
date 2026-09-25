import Link from 'next/link';
import SEO from '../components/SEO';
import FadeInSection from '../components/FadeInSection';
import DarkLibraryCta from '../components/marketing/DarkLibraryCta';
import EssaySeriesNav from '../components/marketing/EssaySeriesNav';
import { ABOUT_ORIGIN } from '../config/site';

const CANONICAL = `${ABOUT_ORIGIN}/do-well`;

const STEPS = [
  {
    title: 'Share work that is actually yours',
    body: 'Unique, helpful work. A process you have used, a workshop you taught, a journal you wrote, a packet a specific person needs. Not a pile of generic pages that could have come from anywhere.',
  },
  {
    title: 'Skip the slop',
    body: 'AI filler, repackaged listicles, and a repost of someone else’s reel do not do well here. People can tell. They will not spend Aura on it, and Aura is what makes work rise.',
  },
  {
    title: 'Let people find it',
    body: 'List the hub on Explore. Give it a clear title, a real description, and the files inside named so a stranger knows what they are opening. A private folder cannot be discovered.',
  },
  {
    title: 'Aura is the rise',
    body: 'If someone finds the work useful, helpful, noteworthy, or cool, they can give it Aura. That endorsement makes the hub easier to find for the next person. It does not depend on a platform algorithm. You do not boost your own work. Other people do, because they meant it.',
  },
];

export default function DoWellPage() {
  return (
    <>
      <SEO
        title="How to do well on Kahana | Share work people give Aura"
        description="How to get discovered on Kahana. Share unique, helpful work. When people find it useful, they give Aura, and that hub becomes easier to find."
        url={CANONICAL}
        type="website"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'How to do well on Kahana',
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
                How to do well on Kahana
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
          <ol className="mx-auto flex max-w-3xl flex-col gap-12">
            {STEPS.map((step, index) => (
              <FadeInSection key={step.title}>
                <li>
                  <p className="text-sm font-semibold tracking-wide text-[#8A6622]">
                    {index + 1}
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">{step.title}</h2>
                  <p className="mt-4 text-lg leading-relaxed text-[#666666]">{step.body}</p>
                </li>
              </FadeInSection>
            ))}
          </ol>
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
            <Link href="/help/list-hub-on-explore" className="underline underline-offset-2">
              List a hub on Explore
            </Link>
            {' · '}
            <Link href="/aura" className="underline underline-offset-2">
              How Aura works
            </Link>
            {' · '}
            <Link href="/story-gallery" className="underline underline-offset-2">
              See hubs that did this
            </Link>
          </p>
        </DarkLibraryCta>
      </div>
    </>
  );
}
