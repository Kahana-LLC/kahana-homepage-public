import Link from 'next/link';
import { FolderPlusIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import SEO from '../components/SEO';
import FadeInSection from '../components/FadeInSection';
import { APP_URL, EXPLORE_URL } from '../components/nav/navConfig';
import { AURA_PAGE_CANONICAL, AURA_SECTIONS, AURA_SEO } from '../data/auraCopy';
import { trackButtonClick } from '../utils/analytics';

export default function AuraPage() {
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

        <section className="px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto flex max-w-3xl flex-col gap-14">
            {AURA_SECTIONS.map((section) => (
              <FadeInSection key={section.id}>
                <div id={section.id}>
                  <h2 className="text-2xl font-semibold sm:text-3xl">{section.title}</h2>
                  <div className="mt-4 space-y-4 text-lg leading-relaxed text-[#666666]">
                    {section.paragraphs.map((p) => (
                      <p key={p.slice(0, 48)}>{p}</p>
                    ))}
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </section>

        <section className="bg-[#3B2F1A] px-6 py-20 text-[#F7F3EA] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-2xl text-center">
            <FadeInSection>
              <h2 className="text-3xl font-semibold leading-tight !text-[#F7F3EA] sm:text-4xl">
                Ready to explore?
              </h2>
              <p className="mt-4 text-lg text-[#F7F3EA]/85">
                Find hubs on Explore, give Aura to strong hubs or files, or Create a hub to share
                what you know.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a
                  href={EXPLORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center justify-center gap-2 !border-[#F7F3EA]/40 !bg-transparent no-underline !text-[#F7F3EA] hover:!border-[#F7F3EA] hover:!bg-white/10 hover:!text-[#F7F3EA]"
                  onClick={() => trackButtonClick('aura_page_explore')}
                >
                  <MagnifyingGlassIcon className="h-5 w-5 shrink-0" aria-hidden />
                  Explore
                </a>
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2 no-underline"
                  onClick={() => trackButtonClick('aura_page_create')}
                >
                  <FolderPlusIcon className="h-5 w-5 shrink-0" aria-hidden />
                  Create
                </a>
              </div>
              <p className="mt-8 text-sm text-[#F7F3EA]/70">
                <Link
                  href="/help/how-aura-works"
                  className="underline decoration-[#F7F3EA]/40 underline-offset-2 hover:decoration-[#F7F3EA]"
                >
                  How Aura works
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
            </FadeInSection>
          </div>
        </section>
      </div>
    </>
  );
}
