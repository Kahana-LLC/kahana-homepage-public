import Link from 'next/link';
import SEO from '../components/SEO';
import FadeInSection from '../components/FadeInSection';
import DarkLibraryCta from '../components/marketing/DarkLibraryCta';
import EssaySeriesNav from '../components/marketing/EssaySeriesNav';
import { ABOUT_ORIGIN } from '../config/site';

const CANONICAL = `${ABOUT_ORIGIN}/why-the-aura-library-matters`;

const POINTS = [
  {
    title: 'A library needs a way to tell good work from noise',
    body: 'Anyone can upload a file. That does not tell the next person whether it is worth their time. Aura is a scarce daily endorsement. You spend it on a hub or a file you actually found useful, helpful, noteworthy, or cool. Because you only have a little, the signal stays careful.',
  },
  {
    title: 'What rises is what people chose, not what was posted last',
    body: 'A feed forgets yesterday. A library should not. When people give Aura, that work becomes easier to find. File Aura also lifts the hub it lives in. The library gets a public record of what readers thought was worth passing on.',
  },
  {
    title: 'The point is other people',
    body: 'Kahana is a place to share unique knowledge and the work that carries it. Aura matters because it helps that work reach someone who needed it, instead of sitting in a private folder or disappearing after one post.',
  },
];

export default function WhyTheAuraLibraryMattersPage() {
  return (
    <>
      <SEO
        title="Why the Aura Library matters | Kahana"
        description="Aura is how Kahana tells careful work from noise. People endorse hubs and files they found useful, and that work becomes easier to find."
        url={CANONICAL}
        type="website"
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
                The library only works if the best work can be found. Aura is how people say
                &ldquo;this was worth it,&rdquo; and how that choice makes the work easier for the
                next person to open.
              </p>
              <EssaySeriesNav current="/why-the-aura-library-matters" />
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto flex max-w-3xl flex-col gap-12">
            {POINTS.map((point) => (
              <FadeInSection key={point.title}>
                <h2 className="text-2xl font-semibold sm:text-3xl">{point.title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-[#666666]">{point.body}</p>
              </FadeInSection>
            ))}
            <FadeInSection>
              <p className="text-lg leading-relaxed text-[#5C4520]">
                Aura is not money and not a score you give yourself. You cannot endorse your own
                hubs or files. The rules live on{' '}
                <Link href="/aura" className="text-[#8A6622] underline underline-offset-2">
                  the Aura page
                </Link>
                .
              </p>
            </FadeInSection>
          </div>
        </section>

        <DarkLibraryCta
          title="See what people have already endorsed"
          description="Open the Library, or read how giving Aura actually works."
          libraryCampaign="why_aura_library"
          createCampaign="why_aura_create"
          libraryTrack="why_aura_library"
          createTrack="why_aura_create"
        >
          <p className="mt-8 text-sm text-[#F7F3EA]/70">
            <Link href="/do-well" className="underline underline-offset-2">
              How to do well
            </Link>
            {' · '}
            <Link href="/creator-benefits" className="underline underline-offset-2">
              Benefits for creators
            </Link>
          </p>
        </DarkLibraryCta>
      </div>
    </>
  );
}
