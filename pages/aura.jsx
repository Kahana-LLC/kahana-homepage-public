import Link from 'next/link';
import SEO from '../components/SEO';
import FadeInSection from '../components/FadeInSection';
import FaqAccordion from '../components/faq/FaqAccordion';
import DarkLibraryCta from '../components/marketing/DarkLibraryCta';
import AuraGiversPreview from '../components/aura/AuraGiversPreview';
import {
  AURA_FAQ_ITEMS,
  AURA_PAGE_CANONICAL,
  AURA_RULES,
  AURA_SEO,
} from '../data/auraCopy';
import { fetchAuraTrails } from '../lib/auraTrails';

export default function AuraPage({ trails = [] }) {
  return (
    <>
      <SEO
        title={AURA_SEO.title}
        description={AURA_SEO.description}
        url={AURA_PAGE_CANONICAL}
        type="website"
      />

      <div className="bg-[#F7F3EA] text-[#3B2F1A]">
        <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <FadeInSection eager>
              <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                Aura is how Kahana promotes quality
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#5C4520] sm:text-xl">
                Each day you get a small Aura budget to endorse hubs and noteworthy files inside
                them. Scarcity keeps the signal careful, so the best work can rise.
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto flex max-w-3xl flex-col gap-12">
            <FadeInSection eager>
              <p className="text-sm font-semibold tracking-wide text-[#8A6622]">How Aura works</p>
              <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">The rules in one place</h2>
            </FadeInSection>
            {AURA_RULES.map((section) => (
              <FadeInSection key={section.id}>
                <div id={section.id}>
                  <h3 className="text-xl font-semibold sm:text-2xl">{section.title}</h3>
                  <div className="mt-3 space-y-3 text-base leading-relaxed text-[#666666] sm:text-lg">
                    {section.paragraphs.map((p) => (
                      <p key={p.slice(0, 48)}>{p}</p>
                    ))}
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </section>

        <AuraGiversPreview hubs={trails} />

        <section className="px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <p className="text-sm font-semibold tracking-wide text-[#8A6622]">FAQ</p>
              <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">More about Aura</h2>
              <p className="mt-3 text-lg leading-relaxed text-[#5C4520]">
                Open a question if you want the longer why, or how creating a hub relates to earning
                Aura.
              </p>
              <FaqAccordion className="mt-8" items={AURA_FAQ_ITEMS} />
            </FadeInSection>
          </div>
        </section>

        <DarkLibraryCta
          title="Ready to browse the library?"
          description="Find hubs in the Library, give Aura to strong hubs or files, or Create a hub to share what you know."
          libraryCampaign="aura_library"
          createCampaign="aura_create"
          libraryTrack="aura_page_library"
          createTrack="aura_page_create"
        >
          <p className="mt-8 text-sm text-[#F7F3EA]/70">
            <Link
              href="/features/aura-pathways"
              className="underline decoration-[#F7F3EA]/40 underline-offset-2 hover:decoration-[#F7F3EA]"
            >
              Aura pathways
            </Link>
            {' · '}
            <Link
              href="/features/aura-and-trust"
              className="underline decoration-[#F7F3EA]/40 underline-offset-2 hover:decoration-[#F7F3EA]"
            >
              Aura and trust
            </Link>
            {' · '}
            <Link
              href="/help/how-aura-works"
              className="underline decoration-[#F7F3EA]/40 underline-offset-2 hover:decoration-[#F7F3EA]"
            >
              How Aura works
            </Link>
            {' · '}
            <Link
              href="/blog/against-ai-slop"
              className="underline decoration-[#F7F3EA]/40 underline-offset-2 hover:decoration-[#F7F3EA]"
            >
              Against AI slop
            </Link>
            {' · '}
            <Link
              href="/faq"
              className="underline decoration-[#F7F3EA]/40 underline-offset-2 hover:decoration-[#F7F3EA]"
            >
              FAQ
            </Link>
            {' · '}
            <Link
              href="/help"
              className="underline decoration-[#F7F3EA]/40 underline-offset-2 hover:decoration-[#F7F3EA]"
            >
              Help center
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
