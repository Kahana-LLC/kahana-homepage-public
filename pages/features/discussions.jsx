import Link from 'next/link';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import SEO from '../../components/SEO';
import FadeInSection from '../../components/FadeInSection';
import DarkLibraryCta from '../../components/marketing/DarkLibraryCta';
import { ABOUT_ORIGIN } from '../../config/site';
import { productHref } from '../../lib/productLinks';
import { trackButtonClick } from '../../utils/analytics';

const CANONICAL = `${ABOUT_ORIGIN}/features/discussions`;

const THREAD = [
  {
    name: 'Maya',
    body: 'Where should I start if I only have an hour this week?',
    meta: 'Hub discussion · 2h ago',
  },
  {
    name: 'Jordan',
    body: 'Open the Start here note, then the first PDF. Skip the appendix until you need it.',
    meta: 'Reply · 1h ago',
  },
  {
    name: 'Maya',
    body: 'That path worked. Watching this thread for the next file drop.',
    meta: 'Reply · 40m ago · watching',
  },
];

export default function DiscussionsFeaturePage() {
  const libraryHref = productHref('/library', 'feature_discussions');

  return (
    <>
      <SEO
        title="Discussions and forums | Kahana"
        description="Forums beside hubs and files. Comments, replies, and a watch so you hear when the thread moves. Dialectic next to the work, not another empty feed."
        url={CANONICAL}
        type="website"
      />

      <div className="bg-[#F7F3EA] text-[#3B2F1A]">
        <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <FadeInSection eager>
              <p className="text-sm font-semibold tracking-wide text-[#8A6622]">Feature</p>
              <h1 className="mt-2 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                Discussions and forums
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#5C4520] sm:text-xl">
                A discussion sits on a hub or on a file inside it. Think of it as a forum next to
                the work, not a separate social feed. People who can open the hub can read the
                thread, comment, reply, and watch it.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href={libraryHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2 no-underline"
                  onClick={() => trackButtonClick('feature_discussions_hero')}
                >
                  <MagnifyingGlassIcon className="h-5 w-5 shrink-0" aria-hidden />
                  Explore the Library
                </a>
                <Link
                  href="/help/hub-and-file-discussions"
                  className="btn-secondary inline-flex items-center justify-center no-underline"
                >
                  How discussions work
                </Link>
              </div>
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">Conversation beside the work</h2>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                Open the discussion from a hub or from a file. Comment, reply, or watch the thread
                and turn the watch off when you are done. This is separate from the club feed, which
                lives on the club.
              </p>
              <div className="mt-8 overflow-hidden rounded-[20px] border border-[#E4D9C4] bg-white">
                <div className="flex items-center justify-between border-b border-[#E4D9C4] bg-[#EDE6D2] px-5 py-3">
                  <p className="text-sm font-semibold text-[#3B2F1A]">Discussion · Start here</p>
                  <p className="text-xs font-semibold text-[#8A6622]">Watching</p>
                </div>
                <ul className="divide-y divide-[#E4D9C4]">
                  {THREAD.map((item) => (
                    <li key={`${item.name}-${item.meta}`} className="px-5 py-4">
                      <div className="flex items-baseline justify-between gap-3">
                        <p className="font-semibold text-[#3B2F1A]">{item.name}</p>
                        <p className="shrink-0 text-xs text-[#8A6622]">{item.meta}</p>
                      </div>
                      <p className="mt-2 text-base leading-relaxed text-[#666666]">{item.body}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-4 text-base text-[#5C4520]">
                Dialectic next to unique knowledge. More in{' '}
                <Link href="/philosophy" className="text-[#8A6622] underline underline-offset-2">
                  philosophy
                </Link>{' '}
                and the{' '}
                <Link
                  href="/use-cases/hub-discussions"
                  className="text-[#8A6622] underline underline-offset-2"
                >
                  hub discussions
                </Link>{' '}
                use case.
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">Not the club feed</h2>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                Club posts, comments, and reactions stay on the club. Hub and file discussions stay
                on the work. That split keeps conversation attached to what people actually opened.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[20px] border border-[#E4D9C4] bg-white px-5 py-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8A6622]">
                    Hub / file
                  </p>
                  <p className="mt-2 font-semibold">Discussion forum</p>
                  <p className="mt-2 text-sm text-[#666666]">Next to the files you can open</p>
                </div>
                <div className="rounded-[20px] border border-[#E4D9C4] bg-white px-5 py-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8A6622]">
                    Club
                  </p>
                  <p className="mt-2 font-semibold">Club feed</p>
                  <p className="mt-2 text-sm text-[#666666]">Room for the group, not the catalog</p>
                </div>
              </div>
              <p className="mt-4 text-base text-[#5C4520]">
                Help article:{' '}
                <Link
                  href="/help/hub-and-file-discussions"
                  className="text-[#8A6622] underline underline-offset-2"
                >
                  hub and file discussions
                </Link>
                .
              </p>
            </FadeInSection>
          </div>
        </section>

        <DarkLibraryCta
          title="Find a hub worth discussing"
          description="Open the Library, then open the discussion beside the work."
          libraryCampaign="feature_discussions_library"
          createCampaign="feature_discussions_create"
          libraryTrack="feature_discussions_library"
          createTrack="feature_discussions_create"
        />
      </div>
    </>
  );
}
