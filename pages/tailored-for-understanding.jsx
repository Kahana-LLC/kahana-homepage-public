import Link from 'next/link';
import {
  AcademicCapIcon,
  FolderPlusIcon,
  MagnifyingGlassIcon,
  QueueListIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline';
import SEO from '../components/SEO';
import FadeInSection from '../components/FadeInSection';
import { APP_URL, EXPLORE_URL } from '../components/nav/navConfig';
import { ABOUT_ORIGIN } from '../config/site';
import { trackButtonClick } from '../utils/analytics';

const CANONICAL = `${ABOUT_ORIGIN}/tailored-for-understanding`;

const RIGID = [
  {
    title: 'Locked course sequences',
    body: 'A lot of platforms make you do module one, then module two, even when that order does not help you.',
    Icon: AcademicCapIcon,
  },
  {
    title: 'A pile of files with no curation',
    body: 'A Drive folder full of downloads is not a lesson. Nobody chose what belongs together, so you have to figure it out.',
    Icon: QueueListIcon,
  },
  {
    title: 'One format for every learner',
    body: 'Some people need a video. Some need a PDF or a checklist next to a longer ebook. One format rarely works for everyone.',
    Icon: Squares2X2Icon,
  },
];

export default function TailoredForUnderstandingPage() {
  return (
    <>
      <SEO
        title="Learning is not one size | Kahana"
        description="One-size doesn't fit all. Hubs are not rigid online courses. Mix ebooks, videos, and files in the way that actually helps people understand."
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
                Learning is not one size
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#5C4520] sm:text-xl">
                One-size doesn't fit all. Hubs are not rigid online courses. Mix ebooks, videos, and
                files in the way that actually helps people understand.
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">A locked course does not fit everyone</h2>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#666666]">
                People do not all learn in the same order, or from the same kind of file. A fixed
                path makes that harder, even when the material is good.
              </p>
            </FadeInSection>
            <ul className="mt-10 grid gap-6 md:grid-cols-3">
              {RIGID.map((item) => {
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
              <h2 className="text-2xl font-semibold sm:text-3xl">A hub can follow how you actually learn</h2>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                A hub is a library you can shape: ebooks, videos, files, images, PDFs, documents,
                links, and more. The person who knows the topic can mix them in an order that
                actually helps, instead of forcing one path.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                It is not a graded classroom and it is not a drip course. You should be able to
                understand the material, not just click through it.
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="bg-[#3B2F1A] px-6 py-20 text-[#F7F3EA] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-2xl text-center">
            <FadeInSection>
              <h2 className="text-3xl font-semibold leading-tight !text-[#F7F3EA] sm:text-4xl">
                Find hubs that fit how you learn
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
                  onClick={() => trackButtonClick('tailored_understanding_explore')}
                >
                  <MagnifyingGlassIcon className="h-5 w-5 shrink-0" aria-hidden />
                  Explore
                </a>
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2 no-underline"
                  onClick={() => trackButtonClick('tailored_understanding_create')}
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
