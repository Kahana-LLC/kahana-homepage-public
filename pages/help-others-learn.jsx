import Link from 'next/link';
import {
  AcademicCapIcon,
  FolderPlusIcon,
  LightBulbIcon,
  MagnifyingGlassIcon,
  PuzzlePieceIcon,
} from '@heroicons/react/24/outline';
import SEO from '../components/SEO';
import FadeInSection from '../components/FadeInSection';
import ExplainerRelatedLinks from '../components/home/platform/ExplainerRelatedLinks';
import { APP_URL, EXPLORE_URL } from '../components/nav/navConfig';
import { ABOUT_ORIGIN } from '../config/site';
import { trackButtonClick } from '../utils/analytics';

const CANONICAL = `${ABOUT_ORIGIN}/help-others-learn`;

const GAPS = [
  {
    title: 'It stays in your head',
    body: 'You already know how to help someone. If it stays in a conversation or a private note, the next person has to ask you all over again.',
    Icon: LightBulbIcon,
  },
  {
    title: 'A full course is too much',
    body: 'Not every lesson needs modules and quizzes. That bar makes people wait to share something that would help today.',
    Icon: AcademicCapIcon,
  },
  {
    title: 'The pieces live in different places',
    body: 'Slides in one tab, a video in another, a checklist in chat. Nobody can see how it fits, and you do not have one link to send.',
    Icon: PuzzlePieceIcon,
  },
];

const RELATED = [
  { kind: 'Feature', title: 'Hubs', href: '/features/hubs' },
  { kind: 'Feature', title: 'Profiles', href: '/features/profiles' },
  { kind: 'Feature', title: 'Preview reels', href: '/features/preview-reels' },
  { kind: 'Who it is for', title: 'For creators', href: '/for/creators' },
  { kind: 'Help', title: 'Hubs', href: '/help/hubs' },
  { kind: 'Help', title: 'Adding files and embeds', href: '/help/adding-files-and-embeds' },
  { kind: 'Help', title: 'Collaborators and roles', href: '/help/collaborators-and-roles' },
  { kind: 'Help', title: 'Get started for creators', href: '/help/get-started-creators' },
];

export default function HelpOthersLearnPage() {
  return (
    <>
      <SEO
        title="Other people should be able to learn from you | Kahana"
        description="Teaching what you know builds mastery, reputation, and relationships with people. Package ebooks, videos, and files in a hub others can learn from."
        url={CANONICAL}
        type="website"
      />

      <div className="bg-[#F7F3EA] text-[#3B2F1A]">
        <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <FadeInSection eager>
              <p className="text-sm font-semibold tracking-[0.2em] text-[#8A6622] uppercase">
                The problem we are solving
              </p>
              <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                Other people should be able to learn from you
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#5C4520] sm:text-xl">
                Teaching what you know builds mastery, reputation, and relationships with people.
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">It is too hard to share what you know</h2>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#666666]">
                You know something useful, but you wait until the format is perfect. Meanwhile the
                people who need it are still hunting around.
              </p>
            </FadeInSection>
            <ul className="mt-10 grid gap-6 md:grid-cols-3">
              {GAPS.map((item) => {
                const { Icon } = item;
                return (
                  <li key={item.title}>
                    <article className="flex h-full flex-col rounded-[28px] bg-white px-6 py-7 sm:px-8">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EDE6D2] text-[#5C4520]">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                      <p className="mt-2 text-[#666666]">{item.body}</p>
                    </article>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section className="px-6 pb-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">A hub is enough to start teaching</h2>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                Put ebooks, videos, files, images, PDFs, documents, and links in one hub. It starts
                private so you can get it ready. When you want people to learn from it, list it on
                Explore.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                You can invite editors or admins. You do not need a full course. You need one place
                people can come back to.{' '}
                <Link
                  href="/tailored-for-understanding"
                  className="font-medium text-[#8A6622] underline decoration-[#8A6622]/40 underline-offset-2 hover:decoration-[#8A6622]"
                >
                  Why hubs stay flexible
                </Link>
              </p>
            </FadeInSection>
          </div>
        </section>

        <ExplainerRelatedLinks
          lead="How to make a hub, add files, and work with other people."
          items={RELATED}
        />

        <section className="bg-[#3B2F1A] px-6 py-20 text-[#F7F3EA] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-2xl text-center">
            <FadeInSection>
              <h2 className="text-3xl font-semibold leading-tight !text-[#F7F3EA] sm:text-4xl">
                Share what you know in a hub
              </h2>
              <p className="mt-4 text-lg text-[#F7F3EA]/85">
                Create a hub, or see how other people have shared what they teach.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2 no-underline"
                  onClick={() => trackButtonClick('help_others_learn_create')}
                >
                  <FolderPlusIcon className="h-5 w-5 shrink-0" aria-hidden />
                  Create
                </a>
                <a
                  href={EXPLORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center justify-center gap-2 !border-[#F7F3EA]/40 !bg-transparent no-underline !text-[#F7F3EA] hover:!border-[#F7F3EA] hover:!bg-white/10 hover:!text-[#F7F3EA]"
                  onClick={() => trackButtonClick('help_others_learn_explore')}
                >
                  <MagnifyingGlassIcon className="h-5 w-5 shrink-0" aria-hidden />
                  Explore
                </a>
              </div>
              <p className="mt-8 text-sm text-[#F7F3EA]/70">
                <Link
                  href="/#for-creators"
                  className="underline decoration-[#F7F3EA]/40 underline-offset-2 hover:decoration-[#F7F3EA]"
                >
                  Back to benefits for creators
                </Link>
              </p>
            </FadeInSection>
          </div>
        </section>
      </div>
    </>
  );
}
