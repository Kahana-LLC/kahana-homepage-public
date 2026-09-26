import Link from 'next/link';
import {
  ArrowPathIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';
import SEO from '../../components/SEO';
import FadeInSection from '../../components/FadeInSection';
import DarkLibraryCta from '../../components/marketing/DarkLibraryCta';
import DiscussionThreadMock from '../../components/marketing/DiscussionThreadMock';
import { ExploreLibraryButton } from '../../components/marketing/LibraryActionButtons';
import { ABOUT_ORIGIN } from '../../config/site';
import { productHref } from '../../lib/productLinks';
import { trackButtonClick } from '../../utils/analytics';

const CANONICAL = `${ABOUT_ORIGIN}/features/discussions`;

const FEATURES = [
  {
    title: 'Upvotes and Best sorting',
    body: 'Score comments like a forum. Sort by Best, Top, Newest, or Oldest so useful replies rise.',
    Icon: ArrowPathIcon,
  },
  {
    title: 'Nested replies',
    body: 'Reply in-thread with left-border nesting. Collapse long branches behind “more replies.”',
    Icon: ChatBubbleLeftRightIcon,
  },
  {
    title: 'Markdown beside the work',
    body: 'Bold, lists, and links in the comment body—so people can point at a section or leave a clear path.',
    Icon: DocumentTextIcon,
  },
];

export default function DiscussionsFeaturePage() {
  const libraryHref = productHref('/library', 'feature_discussions');

  return (
    <>
      <SEO
        title="Discussions and forums | Kahana"
        description="Hub and file discussions with upvotes, nested replies, markdown, and watch—Reddit-style conversation beside the work, not another empty feed."
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
                the work: upvote what helps, reply in-thread, write in markdown, and watch the
                conversation.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <ExploreLibraryButton
                  href={libraryHref}
                  onClick={() => trackButtonClick('feature_discussions_hero')}
                />
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
          <div className="mx-auto max-w-5xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">Conversation beside the work</h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#666666]">
                Open discussion from a hub or a file. The thread looks like a familiar forum:
                scores, nested replies, reactions, and a watch so you hear when it moves.
              </p>
            </FadeInSection>
            <FadeInSection>
              <div className="mt-10">
                <DiscussionThreadMock />
              </div>
            </FadeInSection>
            <FadeInSection>
              <ul className="mt-10 grid list-none gap-3 sm:grid-cols-3">
                {FEATURES.map(({ title, body, Icon }) => (
                  <li
                    key={title}
                    className="rounded-[20px] bg-white px-5 py-5 ring-1 ring-[#E4D9C4]"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EDE6D2] text-[#5C4520]">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="mt-3 font-bricolage text-lg font-semibold tracking-tight text-[#3B2F1A]">
                      {title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#666666]">{body}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-base text-[#5C4520]">
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
                  <p className="mt-2 text-sm text-[#666666]">
                    Upvotes, nested replies, markdown next to the files
                  </p>
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
