import Link from 'next/link';
import {
  AcademicCapIcon,
  ArrowRightIcon,
  BookOpenIcon,
  ChartBarIcon,
  FireIcon,
  LightBulbIcon,
  MagnifyingGlassIcon,
  SparklesIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import SEO from '../components/SEO';
import FadeInSection from '../components/FadeInSection';
import DarkLibraryCta from '../components/marketing/DarkLibraryCta';
import FaqAccordion from '../components/faq/FaqAccordion';
import { ABOUT_ORIGIN } from '../config/site';
import { productHref } from '../lib/productLinks';
import { LEARNER_BENEFITS_FAQS } from '../data/learnerPageFaqs';
import { trackButtonClick } from '../utils/analytics';

const CANONICAL = `${ABOUT_ORIGIN}/learner-benefits`;

const COMMITMENT_POINTS = [
  {
    title: 'Sharper, not noisier',
    body: 'People feel their minds dulling in feeds built for reaction. Kahana is for reading more, knowing more, and challenging yourself with heady material on purpose.',
  },
  {
    title: 'An environment that sparks',
    body: 'The Aura Library is a place to discover unique educational content, set goals, decompress, and leave a session clearer than you arrived.',
  },
  {
    title: 'Timely, high-quality work',
    body: 'Suggestion and Library search aim for relevant, engaging hubs so you feel more mentally stimulated, with more clarity, day after day.',
  },
  {
    title: 'See that showing up works',
    body: 'Cognition streak and Learning analytics make habit and time visible. You get tools to keep improving, not a black box of “engagement.”',
  },
];

const OUTCOME_POINTS = [
  {
    title: 'Deep understanding',
    body: 'Stay with complex material until it clicks. Hubs hold ebooks, video, notes, and files together so you can return and go deeper, not bounce off a clip.',
  },
  {
    title: 'Paths, not piles',
    body: 'Someone can leave you an ordered path through a hub. Search finds results; a path gives you an entrance and a next step.',
  },
  {
    title: 'Talk beside the files',
    body: 'Discussion lives next to the work. Ask, answer, and clarify while the material is still open. Understanding grows in conversation.',
  },
  {
    title: 'Flexible formats',
    body: 'One-size courses freeze learning in a fixed sequence. Hubs let creators mix formats so the shape of the shelf matches how you actually learn.',
  },
];

const STREAK_POINTS = [
  {
    title: 'Show up to learn',
    body: 'A day counts when you visit or open library material, not when you give Aura or hit a paywall.',
  },
  {
    title: 'UTC days, clear rules',
    body: 'The streak uses UTC so the rules are honest and shared. A chip in the app shows your current count.',
  },
  {
    title: 'Optional reminders',
    body: 'Opt in to same-day, weekly snapshot, and restart emails when you want a nudge. Defaults stay off until you choose.',
  },
  {
    title: 'Habit, not currency',
    body: 'Streak is not money, not Aura, and not a ranking of quality. It is a quiet record that you kept showing up.',
  },
];

const ANALYTICS_POINTS = [
  {
    title: 'Private by design',
    body: 'The Learning tab is about your time and streak, not how your hubs convert, and not a public leaderboard.',
  },
  {
    title: 'Time and recent activity',
    body: 'See learning time accumulate so a cozy session with poetry or a dense book is not invisible the next morning.',
  },
  {
    title: 'Streak in context',
    body: 'Cognition streak sits next to your activity so habit and effort stay connected in one place.',
  },
  {
    title: 'Room to grow',
    body: 'We want learners to see minds transforming in a positive way, and to have tools to keep improving every day.',
  },
];

const LEARNERS_HUB_LINKS = [
  {
    href: '/learners',
    title: 'Kahana for learners',
    body: 'Free Library access, habits, features, and use cases for people who come to learn.',
    Icon: AcademicCapIcon,
    track: 'learner_benefits_learners_hub',
  },
  {
    href: '/features/cognition-streak',
    title: 'Cognition streak',
    body: 'How the streak works, what it is not, and where to open Learning analytics.',
    Icon: FireIcon,
    track: 'learner_benefits_streak_feature',
  },
  {
    href: '/features/analytics',
    title: 'Learning analytics',
    body: 'Private time and streak on the Learning tab. Author analytics is separate if you also create.',
    Icon: ChartBarIcon,
    track: 'learner_benefits_analytics_feature',
  },
  {
    href: '/tailored-for-understanding',
    title: 'Tailored for understanding',
    body: 'Why hubs are not rigid courses, and how flexible shelves support deeper learning.',
    Icon: LightBulbIcon,
    track: 'learner_benefits_understanding',
  },
  {
    href: '/features?for=learner',
    title: 'Features for learners',
    body: 'Explore, Saved, For You, clubs, discussions, and the rest of the learner toolkit.',
    Icon: Squares2X2Icon,
    track: 'learner_benefits_features',
  },
  {
    href: '/use-cases?for=learner',
    title: 'Use cases for learners',
    body: 'Book clubs, reading habits, paths someone left you, and more ways people learn here.',
    Icon: BookOpenIcon,
    track: 'learner_benefits_use_cases',
  },
];

function BenefitSection({ id, Icon, title, lead, children, callout, invert }) {
  return (
    <section
      id={id}
      className="border-t border-[#E4D9C4] px-6 py-14 sm:px-10 sm:py-16 lg:px-16"
    >
      <div
        className={`mx-auto grid gap-8 lg:items-start ${
          callout
            ? 'max-w-5xl lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]'
            : 'max-w-3xl'
        }`}
      >
        <div
          className={`min-w-0 overflow-hidden ${
            invert && callout ? 'lg:order-2' : ''
          }`.trim()}
        >
          <FadeInSection>
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EDE6D2] text-[#5C4520]">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">{title}</h2>
            <p className="mt-3 text-lg leading-relaxed text-[#666666]">{lead}</p>
            {children}
          </FadeInSection>
        </div>
        {callout ? (
          <div className={`min-w-0 ${invert ? 'lg:order-1' : ''}`.trim()}>
            <FadeInSection>{callout}</FadeInSection>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function PointGrid({ items }) {
  return (
    <ul className="mt-10 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item.title}>
          <FadeInSection>
            <article className="flex h-full gap-3 rounded-[20px] bg-white px-4 py-5 sm:gap-4 sm:px-5">
              <CheckCircleIcon
                className="mt-0.5 h-6 w-6 shrink-0 text-[#8A6622]"
                aria-hidden
              />
              <div className="min-w-0">
                <h3 className="font-bricolage text-lg font-semibold tracking-tight text-[#3B2F1A]">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#666666]">{item.body}</p>
              </div>
            </article>
          </FadeInSection>
        </li>
      ))}
    </ul>
  );
}

function StreakMock() {
  return (
    <div className="overflow-hidden rounded-[20px] bg-white px-5 py-6 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8A6622]">
        Cognition streak
      </p>
      <div className="mt-5 flex items-end gap-3">
        <FireIcon className="h-10 w-10 text-[#C45C26]" aria-hidden />
        <div>
          <p className="font-bricolage text-4xl font-semibold tracking-tight text-[#3B2F1A]">
            12
          </p>
          <p className="text-sm text-[#666666]">days this chain</p>
        </div>
      </div>
      <div className="mt-6 flex gap-1.5">
        {Array.from({ length: 7 }).map((_, i) => (
          <span
            key={i}
            className={`h-8 flex-1 rounded-md ${
              i < 5 ? 'bg-[#8A6622]' : 'bg-[#EDE6D2]'
            }`}
            aria-hidden
          />
        ))}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-[#666666]">
        Five days this week so far. Open material today to keep the chain.
      </p>
    </div>
  );
}

function AnalyticsMock() {
  return (
    <div className="overflow-hidden rounded-[20px] bg-white px-5 py-6 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8A6622]">
        Learning analytics
      </p>
      <p className="mt-1 text-sm text-[#666666]">Private · only you</p>
      <dl className="mt-6 space-y-4">
        <div className="flex items-baseline justify-between gap-3 border-b border-[#EDE6D2] pb-3">
          <dt className="text-sm text-[#666666]">Learning time (7 days)</dt>
          <dd className="font-bricolage text-xl font-semibold text-[#3B2F1A]">4h 22m</dd>
        </div>
        <div className="flex items-baseline justify-between gap-3 border-b border-[#EDE6D2] pb-3">
          <dt className="text-sm text-[#666666]">Cognition streak</dt>
          <dd className="font-bricolage text-xl font-semibold text-[#3B2F1A]">12 days</dd>
        </div>
        <div className="flex items-baseline justify-between gap-3">
          <dt className="text-sm text-[#666666]">Hubs opened</dt>
          <dd className="font-bricolage text-xl font-semibold text-[#3B2F1A]">7</dd>
        </div>
      </dl>
      <p className="mt-5 text-sm leading-relaxed text-[#666666]">
        A quiet readout that your time in the Library is compounding.
      </p>
    </div>
  );
}

export default function LearnerBenefitsPage() {
  const analyticsUrl = productHref('/analytics', 'learner_benefits_analytics');
  const exploreUrl = productHref('/library', 'learner_benefits_explore');

  return (
    <>
      <SEO
        title="Benefits for Kahana learners | Streak, analytics, deep understanding"
        description="Kahana’s commitment to learners: Cognition streak, private Learning analytics, and genuine outcomes like deep understanding of material, in an Aura Library built to spark the mind."
        url={CANONICAL}
        type="website"
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebPage',
              name: 'Benefits for Kahana learners',
              description:
                'Cognition streak, Learning analytics, and deep understanding in the Aura Library: Kahana’s commitment to people who come to learn.',
              url: CANONICAL,
            },
            {
              '@type': 'FAQPage',
              mainEntity: LEARNER_BENEFITS_FAQS.map((item) => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: item.answer.replace(/\n\n/g, ' '),
                },
              })),
            },
          ],
        }}
      />

      <div className="bg-[#F7F3EA] text-[#3B2F1A]">
        <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <FadeInSection eager>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8A6622]">
                For learners
              </p>
              <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                Benefits for learners
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-[#5C4520] sm:text-xl">
                Read more. Know more. Get sharper. The Aura Library is built so time spent learning
                leaves you clearer, and so you can see that progress taking shape.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={exploreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2 no-underline"
                  onClick={() => trackButtonClick('learner_benefits_hero_explore')}
                >
                  <MagnifyingGlassIcon className="h-5 w-5 shrink-0" aria-hidden />
                  Explore the Library
                </a>
                <Link
                  href="/learners"
                  className="btn-secondary inline-flex items-center justify-center gap-2 no-underline"
                  onClick={() => trackButtonClick('learner_benefits_hero_learners')}
                >
                  Kahana for learners
                  <ArrowRightIcon className="h-5 w-5 shrink-0" aria-hidden />
                </Link>
              </div>
            </FadeInSection>
          </div>
        </section>

        <section
          id="commitment"
          className="border-t border-[#E4D9C4] px-6 py-14 sm:px-10 sm:py-16 lg:px-16"
        >
          <div className="mx-auto max-w-5xl">
            <FadeInSection>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EDE6D2] text-[#5C4520]">
                <SparklesIcon className="h-5 w-5" aria-hidden />
              </span>
              <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
                Our commitment to learning
              </h2>
              <p className="mt-3 max-w-2xl text-lg leading-relaxed text-[#666666]">
                Everything you spend time with shapes the mind. People come to get unstuck, feel
                calm, and reset mentally. We want the Library to deliver stimulation and clarity, and
                to give you a way to see that the work is working.
              </p>
            </FadeInSection>
            <PointGrid items={COMMITMENT_POINTS} />
          </div>
        </section>

        <section
          id="deep-understanding"
          className="border-t border-[#E4D9C4] px-6 py-14 sm:px-10 sm:py-16 lg:px-16"
        >
          <div className="mx-auto max-w-5xl">
            <FadeInSection>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EDE6D2] text-[#5C4520]">
                <LightBulbIcon className="h-5 w-5" aria-hidden />
              </span>
              <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
                Genuine learning outcomes
              </h2>
              <p className="mt-3 max-w-2xl text-lg leading-relaxed text-[#666666]">
                The goal is not another finished module badge. It is deep understanding of material
                you chose on purpose: complex enough to challenge you, curated enough to stick.
              </p>
            </FadeInSection>
            <PointGrid items={OUTCOME_POINTS} />
            <FadeInSection>
              <p className="mt-8">
                <Link
                  href="/tailored-for-understanding"
                  className="text-sm font-semibold text-[#8A6622] underline underline-offset-2"
                  onClick={() => trackButtonClick('learner_benefits_understanding_section')}
                >
                  How hubs support understanding
                </Link>
              </p>
            </FadeInSection>
          </div>
        </section>

        <BenefitSection
          id="cognition-streak"
          Icon={FireIcon}
          title="Cognition streak"
          lead="A quiet chain of days you showed up to learn. Imagine closing a session with a book or a hub, and knowing the habit is visible, not lost in the scroll."
          invert
          callout={<StreakMock />}
        >
          <ul className="mt-6 space-y-4">
            {STREAK_POINTS.map((item) => (
              <li key={item.title} className="flex gap-3">
                <CheckCircleIcon
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#8A6622]"
                  aria-hidden
                />
                <div>
                  <p className="font-semibold text-[#3B2F1A]">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-[#666666]">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6">
            <Link
              href="/features/cognition-streak"
              className="text-sm font-semibold text-[#8A6622] underline underline-offset-2"
              onClick={() => trackButtonClick('learner_benefits_streak_section')}
            >
              Cognition streak details
            </Link>
            {' · '}
            <Link
              href="/help/cognition-streak"
              className="text-sm font-semibold text-[#8A6622] underline underline-offset-2"
              onClick={() => trackButtonClick('learner_benefits_streak_help')}
            >
              Help guide
            </Link>
          </p>
        </BenefitSection>

        <BenefitSection
          id="learning-analytics"
          Icon={ChartBarIcon}
          title="Learning analytics"
          lead="Private readout of your time and streak. The Library is where you restore focus; analytics is how you see that time taking hold, without performing for anyone else."
          callout={<AnalyticsMock />}
        >
          <ul className="mt-6 space-y-4">
            {ANALYTICS_POINTS.map((item) => (
              <li key={item.title} className="flex gap-3">
                <CheckCircleIcon
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#8A6622]"
                  aria-hidden
                />
                <div>
                  <p className="font-semibold text-[#3B2F1A]">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-[#666666]">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
            <a
              href={analyticsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[#8A6622] underline underline-offset-2"
              onClick={() => trackButtonClick('learner_benefits_open_analytics')}
            >
              Open Learning analytics
            </a>
            <Link
              href="/help/learning-analytics"
              className="text-sm font-semibold text-[#8A6622] underline underline-offset-2"
              onClick={() => trackButtonClick('learner_benefits_analytics_help')}
            >
              Help guide
            </Link>
          </p>
        </BenefitSection>

        <section
          id="kahana-for-learners"
          className="border-t border-[#E4D9C4] px-6 py-14 sm:px-10 sm:py-16 lg:px-16"
        >
          <div className="mx-auto max-w-5xl">
            <FadeInSection>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EDE6D2] text-[#5C4520]">
                <AcademicCapIcon className="h-5 w-5" aria-hidden />
              </span>
              <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
                Learn more about Kahana for learners
              </h2>
              <p className="mt-3 max-w-2xl text-lg leading-relaxed text-[#666666]">
                Benefits above are the why. The learners hub is the how: Library, features, use
                cases, and the path to start.
              </p>
              <p className="mt-4">
                <Link
                  href="/learners"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#8A6622] underline underline-offset-2"
                  onClick={() => trackButtonClick('learner_benefits_learners_hub_link')}
                >
                  Kahana for learners
                  <ArrowRightIcon className="h-4 w-4 shrink-0" aria-hidden />
                </Link>
              </p>
            </FadeInSection>

            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {LEARNERS_HUB_LINKS.map((item) => {
                const { Icon } = item;
                return (
                  <li key={item.href}>
                    <FadeInSection>
                      <Link
                        href={item.href}
                        className="flex h-full gap-3 rounded-[20px] bg-white px-4 py-5 no-underline sm:gap-4 sm:px-5"
                        onClick={() => trackButtonClick(item.track)}
                      >
                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EDE6D2] text-[#5C4520]">
                          <Icon className="h-4 w-4" aria-hidden />
                        </span>
                        <div className="min-w-0">
                          <h3 className="font-bricolage text-lg font-semibold tracking-tight text-[#3B2F1A]">
                            {item.title}
                          </h3>
                          <p className="mt-1.5 text-sm leading-relaxed text-[#666666]">
                            {item.body}
                          </p>
                          <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#8A6622]">
                            Learn more
                            <ArrowRightIcon className="h-3.5 w-3.5 shrink-0" aria-hidden />
                          </p>
                        </div>
                      </Link>
                    </FadeInSection>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section
          id="faq"
          className="border-t border-[#E4D9C4] px-6 py-14 sm:px-10 sm:py-16 lg:px-16"
        >
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">Benefits FAQ</h2>
              <p className="mt-3 text-lg text-[#666666]">
                Commitment, Cognition streak, Learning analytics, and deep understanding.
              </p>
              <FaqAccordion className="mt-8" items={LEARNER_BENEFITS_FAQS} />
              <p className="mt-8 text-base text-[#5C4520]">
                Also see{' '}
                <Link href="/learners" className="text-[#8A6622] underline underline-offset-2">
                  Kahana for learners
                </Link>
                ,{' '}
                <Link href="/ad-free-commitment" className="text-[#8A6622] underline underline-offset-2">
                  our ad-free commitment
                </Link>
                , and the{' '}
                <Link href="/faq" className="text-[#8A6622] underline underline-offset-2">
                  full FAQ
                </Link>
                .
              </p>
            </FadeInSection>
          </div>
        </section>

        <DarkLibraryCta
          title="Open the Library"
          description="Discover unique educational content. Keep a Cognition streak. Watch Learning analytics grow as understanding deepens."
          libraryCampaign="learner_benefits_library"
          createCampaign="learner_benefits_create"
          libraryTrack="learner_benefits_library"
          createTrack="learner_benefits_create"
        >
          <p className="mt-8 text-sm text-[#F7F3EA]/70">
            <Link href="/features/cognition-streak" className="underline underline-offset-2">
              Cognition streak
            </Link>
            {' · '}
            <Link href="/help/learning-analytics" className="underline underline-offset-2">
              Learning analytics
            </Link>
            {' · '}
            <Link href="/learners" className="underline underline-offset-2">
              Kahana for learners
            </Link>
            {' · '}
            <Link href="/tailored-for-understanding" className="underline underline-offset-2">
              Deep understanding
            </Link>
          </p>
        </DarkLibraryCta>
      </div>
    </>
  );
}
