import Link from 'next/link';
import { BookOpenIcon, FilmIcon, FolderPlusIcon, MagnifyingGlassIcon, PlayCircleIcon } from '@heroicons/react/24/outline';
import SEO from '../components/SEO';
import FadeInSection from '../components/FadeInSection';
import { APP_URL, EXPLORE_URL } from '../components/nav/navConfig';
import { ABOUT_ORIGIN } from '../config/site';
import { trackButtonClick } from '../utils/analytics';

const CANONICAL = `${ABOUT_ORIGIN}/one-place`;

const SCATTERED = [
  {
    title: 'Watch a movie or show',
    body: 'You open Netflix, or Hulu, or HBO. The story you want lives on whichever app still has the rights.',
    Icon: FilmIcon,
  },
  {
    title: 'Read a book',
    body: 'You switch to Amazon Kindle to read, or Goodreads to track what you have read. The library is in another product.',
    Icon: BookOpenIcon,
  },
  {
    title: 'Watch a short video',
    body: 'You switch again to Instagram, TikTok, or YouTube. Same person, same curiosity, new app.',
    Icon: PlayCircleIcon,
  },
];

export default function OnePlacePage() {
  return (
    <>
      <SEO
        title="Too many apps for the same curiosity | Kahana"
        description="The world is stuck bouncing between apps for movies, books, and short videos. Kahana brings reading, watching, highlighting, discussing, and selling into one place."
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
                Too many apps for the same curiosity
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#5C4520] sm:text-xl">
                The world is stuck bouncing between 5 or more apps for different digital content. It
                is exhausting.
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">A different app for every format</h2>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#666666]">
                When we want to watch a movie or TV show, we go to Netflix, Hulu, HBO, and the rest.
                When we want to read a book, we switch to Goodreads or Amazon Kindle. When we want
                to watch short videos, we switch again to Instagram, TikTok, or YouTube.
              </p>
            </FadeInSection>
            <ul className="mt-10 grid gap-6 md:grid-cols-3">
              {SCATTERED.map((item) => {
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
              <h2 className="text-2xl font-semibold sm:text-3xl">This should be easier</h2>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                If one place had the books, videos, and files you actually want, you would not have
                to open a new app every time the format changed.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                Kahana is that place. You can read, watch, highlight, discuss, and sell without
                living across a pile of platforms.
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="bg-[#3B2F1A] px-6 py-20 text-[#F7F3EA] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-2xl text-center">
            <FadeInSection>
              <h2 className="text-3xl font-semibold leading-tight !text-[#F7F3EA] sm:text-4xl">
                One library, not five apps
              </h2>
              <p className="mt-4 text-lg text-[#F7F3EA]/85">
                Explore hubs people have already shared, or create one of your own.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a
                  href={EXPLORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center justify-center gap-2 !border-[#F7F3EA]/40 !bg-transparent no-underline !text-[#F7F3EA] hover:!border-[#F7F3EA] hover:!bg-white/10 hover:!text-[#F7F3EA]"
                  onClick={() => trackButtonClick('one_place_explore')}
                >
                  <MagnifyingGlassIcon className="h-5 w-5 shrink-0" aria-hidden />
                  Explore
                </a>
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2 no-underline"
                  onClick={() => trackButtonClick('one_place_create')}
                >
                  <FolderPlusIcon className="h-5 w-5 shrink-0" aria-hidden />
                  Create
                </a>
              </div>
              <p className="mt-8 text-sm text-[#F7F3EA]/70">
                <Link
                  href="/#for-learners"
                  className="underline decoration-[#F7F3EA]/40 underline-offset-2 hover:decoration-[#F7F3EA]"
                >
                  Back to benefits for learners
                </Link>
              </p>
            </FadeInSection>
          </div>
        </section>
      </div>
    </>
  );
}
