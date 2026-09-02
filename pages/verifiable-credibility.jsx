import Link from 'next/link';
import {
  FolderPlusIcon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  StarIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import SEO from '../components/SEO';
import FadeInSection from '../components/FadeInSection';
import { APP_URL, EXPLORE_URL } from '../components/nav/navConfig';
import { ABOUT_ORIGIN } from '../config/site';
import { trackButtonClick } from '../utils/analytics';

const CANONICAL = `${ABOUT_ORIGIN}/verifiable-credibility`;

const TRUST_GAPS = [
  {
    title: 'Unknown authors',
    body: 'A lot of what you find online has no name on it. You do not know who wrote it, or if they have done this kind of work before.',
    Icon: QuestionMarkCircleIcon,
  },
  {
    title: 'Ratings that are easy to game',
    body: 'Star ratings and written reviews are easy to fake. One loud review can drown out careful ones. A pile of 5-stars can feel off.',
    Icon: StarIcon,
  },
  {
    title: 'No track record before you commit',
    body: 'You spend the time first. Only later do you find out who made it, what else they have shared, or if anyone thought it was worth it.',
    Icon: ClockIcon,
  },
];

export default function VerifiableCredibilityPage() {
  return (
    <>
      <SEO
        title="You should know who you are learning from | Kahana"
        description="See who shared it, and what else they have listed, before you dive in. A check mark means they finished Stripe Identity. Aura is how real people say a contribution was worth noticing."
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
                You should know who you are learning from
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#5C4520] sm:text-xl">
                See who shared it, and what else they have listed, before you dive in. A check mark
                means they finished Stripe Identity. Aura is how real people say a contribution was
                worth noticing.
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">It is hard to know who to trust</h2>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#666666]">
                There is plenty to read and watch. The hard part is telling who made it. If you
                cannot see the person, or whether anyone else stood behind the work, you are
                guessing.
              </p>
            </FadeInSection>
            <ul className="mt-10 grid gap-6 md:grid-cols-3">
              {TRUST_GAPS.map((item) => {
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
              <h2 className="text-2xl font-semibold sm:text-3xl">See the person, then the work</h2>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                On Kahana you can see who shared a hub, and what else they have listed, before you
                dive in. You are not learning from a nameless pile of files.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                A check mark means they finished Stripe Identity. It is about who they are. It does
                not boost ranking.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                Aura comes from real people. It is a way to say this was worth noticing, not another
                star rating.{' '}
                <Link
                  href="/aura"
                  className="font-medium text-[#8A6622] underline decoration-[#8A6622]/40 underline-offset-2 hover:decoration-[#8A6622]"
                >
                  How Aura works
                </Link>
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="bg-[#3B2F1A] px-6 py-20 text-[#F7F3EA] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-2xl text-center">
            <FadeInSection>
              <h2 className="text-3xl font-semibold leading-tight !text-[#F7F3EA] sm:text-4xl">
                Learn from people you can see
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
                  onClick={() => trackButtonClick('verifiable_credibility_explore')}
                >
                  <MagnifyingGlassIcon className="h-5 w-5 shrink-0" aria-hidden />
                  Explore
                </a>
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2 no-underline"
                  onClick={() => trackButtonClick('verifiable_credibility_create')}
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
