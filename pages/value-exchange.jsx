import Link from 'next/link';
import {
  AcademicCapIcon,
  ArrowPathIcon,
  ArrowsRightLeftIcon,
  BanknotesIcon,
  BookOpenIcon,
  CurrencyDollarIcon,
  GiftIcon,
  HeartIcon,
  LightBulbIcon,
  MagnifyingGlassIcon,
  SparklesIcon,
  UserGroupIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import SEO from '../components/SEO';
import FadeInSection from '../components/FadeInSection';
import {
  ExploreLibraryButton,
  ShareUniqueKnowledgeButton,
} from '../components/marketing/LibraryActionButtons';
import {
  VALUE_EXCHANGE_CANONICAL,
  VALUE_EXCHANGE_HUB_URL,
  VALUE_EXCHANGE_INTRO,
  VALUE_EXCHANGE_SECTIONS,
} from '../data/valueExchangeCopy';
import { productHref } from '../lib/productLinks';
import { trackButtonClick } from '../utils/analytics';

const SECTION_ICONS = {
  'no-one-is-only-one-thing': UsersIcon,
  'living-cycle': ArrowPathIcon,
  aura: SparklesIcon,
  monetary: CurrencyDollarIcon,
  principles: CheckCircleIcon,
  final: SparklesIcon,
};

const HERO_CYCLE = [
  { label: 'Creators', detail: 'Build pathways', Icon: GiftIcon },
  { label: 'Learners', detail: 'Bring paths to life', Icon: AcademicCapIcon },
  { label: 'Community', detail: 'Make value visible', Icon: UserGroupIcon },
  { label: 'Kahana', detail: 'Helps value travel', Icon: BookOpenIcon },
];

const MOTION_CHIPS = [
  { label: 'Discover', Icon: MagnifyingGlassIcon },
  { label: 'Create', Icon: LightBulbIcon },
  { label: 'Recognize', Icon: SparklesIcon },
  { label: 'Share', Icon: ArrowsRightLeftIcon },
  { label: 'Support', Icon: HeartIcon },
  { label: 'Carry forward', Icon: ArrowPathIcon },
];

const CYCLE_STEPS = [
  { n: '01', title: 'Enter', body: 'Curiosity, a need, a question, or a body of work.' },
  { n: '02', title: 'Discover', body: 'A hub, creator, collection, source, community, or path.' },
  { n: '03', title: 'Learn', body: 'Enjoy, reflect, practice, or find something useful.' },
  { n: '04', title: 'Give back', body: 'Save, share, discuss, give Aura, or contribute.' },
  { n: '05', title: 'Continue', body: 'Someone else finds the strengthened path.' },
];

const GIVE_HIGHLIGHTS = [
  {
    id: 'creators',
    title: 'Creators give',
    body: 'Knowledge, craft, care—and a path someone else can enter.',
    Icon: GiftIcon,
    tone: 'bg-[#EDE6D2]',
  },
  {
    id: 'learners',
    title: 'Learners give',
    body: 'Attention, questions, Aura, discussion, and future hubs of their own.',
    Icon: AcademicCapIcon,
    tone: 'bg-[#E8DCC4]',
  },
  {
    id: 'community',
    title: 'Community gives',
    body: 'Recognition, belonging, and meaning that grows through encounter.',
    Icon: UserGroupIcon,
    tone: 'bg-[#D9DACB]',
  },
  {
    id: 'kahana',
    title: 'Kahana gives',
    body: 'Structure so value can move: hubs, discovery, Aura, and fair exchange.',
    Icon: BookOpenIcon,
    tone: 'bg-white',
  },
];

function SectionIcon({ Icon }) {
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EDE6D2] text-[#5C4520]">
      <Icon className="h-5 w-5" aria-hidden />
    </span>
  );
}

function PullQuotes({ quotes }) {
  if (!quotes?.length) return null;
  return (
    <blockquote className="mt-8 space-y-2 rounded-[20px] bg-white/70 px-5 py-5 sm:px-6">
      <SparklesIcon className="mb-3 h-5 w-5 text-[#8A6622]" aria-hidden />
      {quotes.map((line) => (
        <p
          key={line}
          className="font-bricolage text-lg font-medium leading-relaxed text-[#5C4520] sm:text-xl"
        >
          {line}
        </p>
      ))}
    </blockquote>
  );
}

function SectionTable({ table }) {
  if (!table) return null;
  const colCount = table.headers.length;
  return (
    <div className="mt-8 overflow-x-auto rounded-[20px] bg-white ring-1 ring-[#E4D9C4]">
      <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
        <caption className="sr-only">{table.caption}</caption>
        <thead>
          <tr className="border-b border-[#E4D9C4] bg-[#EDE6D2]/50">
            {table.headers.map((header) => (
              <th
                key={header}
                className="px-4 py-3 font-bricolage text-sm font-semibold tracking-tight text-[#3B2F1A]"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr key={row.join('|')} className="border-b border-[#E4D9C4]/70 last:border-0">
              {row.map((cell, i) => (
                <td
                  key={`${cell}-${i}`}
                  className={`px-4 py-3 align-top leading-relaxed text-[#666666] ${
                    colCount === 2 && i === 0 ? 'font-semibold text-[#3B2F1A]' : ''
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function HeroCycle() {
  return (
    <ul className="mt-10 grid list-none gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {HERO_CYCLE.map(({ label, detail, Icon }, index) => (
        <li key={label} className="relative">
          <div className="flex h-full flex-col items-center rounded-[20px] bg-white px-4 py-5 text-center ring-1 ring-[#E4D9C4]">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EDE6D2] text-[#8A6622]">
              <Icon className="h-6 w-6" aria-hidden />
            </span>
            <p className="mt-3 font-bricolage text-base font-semibold tracking-tight text-[#3B2F1A]">
              {label}
            </p>
            <p className="mt-1 text-sm leading-snug text-[#666666]">{detail}</p>
          </div>
          {index < HERO_CYCLE.length - 1 ? (
            <span
              className="pointer-events-none absolute -right-2 top-1/2 hidden -translate-y-1/2 text-[#C4B089] lg:block"
              aria-hidden
            >
              →
            </span>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

function MotionChips() {
  return (
    <ul className="mt-8 flex list-none flex-wrap justify-center gap-2">
      {MOTION_CHIPS.map(({ label, Icon }) => (
        <li
          key={label}
          className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-[#5C4520] ring-1 ring-[#E4D9C4]"
        >
          <Icon className="h-3.5 w-3.5 text-[#8A6622]" aria-hidden />
          {label}
        </li>
      ))}
    </ul>
  );
}

function CycleSteps() {
  return (
    <ol className="mt-10 grid list-none gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {CYCLE_STEPS.map((step) => (
        <li
          key={step.n}
          className="rounded-[20px] bg-white px-4 py-4 ring-1 ring-[#E4D9C4]"
        >
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#8A6622]">{step.n}</p>
          <p className="mt-2 font-bricolage text-base font-semibold tracking-tight text-[#3B2F1A]">
            {step.title}
          </p>
          <p className="mt-1.5 text-sm leading-snug text-[#666666]">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}

function GiveGrid() {
  return (
    <ul className="mt-10 grid list-none gap-3 sm:grid-cols-2">
      {GIVE_HIGHLIGHTS.map(({ id, title, body, Icon, tone }) => (
        <li key={id} className={`rounded-[20px] ${tone} px-5 py-5`}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/80 text-[#8A6622]">
            <Icon className="h-5 w-5" aria-hidden />
          </span>
          <p className="mt-3 font-bricolage text-lg font-semibold tracking-tight text-[#3B2F1A]">
            {title}
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-[#666666]">{body}</p>
        </li>
      ))}
    </ul>
  );
}

export default function ValueExchangePage() {
  const libraryHref = productHref('/library', 'value_exchange_explore');
  const createHref = productHref('/', 'value_exchange_create');

  return (
    <>
      <SEO
        title="Value exchange | Creators, learners, and a living Library | Kahana"
        description="Kahana is a living exchange: everyone is a creator and a learner. Aura, payment, free and paid hubs, and a win-win-win Library—not a one-way feed."
        url={VALUE_EXCHANGE_CANONICAL}
        type="website"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Value exchange',
          description:
            'Kahana’s value exchange: creators build pathways, learners bring them to life, Aura makes recognition visible, and payment helps meaningful work continue.',
          url: VALUE_EXCHANGE_CANONICAL,
        }}
      />

      <div className="bg-[#F7F3EA] text-[#3B2F1A]">
        <section className="relative overflow-hidden px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            aria-hidden
            style={{
              background:
                'radial-gradient(ellipse 80% 50% at 50% -10%, #E8DCC4 0%, transparent 55%), radial-gradient(ellipse 40% 40% at 90% 80%, #D9DACB 0%, transparent 50%)',
            }}
          />
          <div className="relative mx-auto max-w-4xl text-center">
            <FadeInSection eager>
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#8A6622] shadow-[0_8px_24px_rgba(59,47,26,0.08)] ring-1 ring-[#E4D9C4]">
                <ArrowsRightLeftIcon className="h-7 w-7" aria-hidden />
              </span>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#8A6622]">
                {VALUE_EXCHANGE_INTRO.eyebrow}
              </p>
              <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                {VALUE_EXCHANGE_INTRO.title}
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#5C4520] sm:text-xl">
                {VALUE_EXCHANGE_INTRO.lead}
              </p>
              <MotionChips />
              <HeroCycle />
              <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-[#666666]">
                A short public form of the idea. The full note lives in the{' '}
                <a
                  href={VALUE_EXCHANGE_HUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8A6622] underline underline-offset-2"
                  onClick={() => trackButtonClick('value_exchange_source_hub')}
                >
                  Kahana HQ hub
                </a>
                . Guide:{' '}
                <Link
                  href="/blog/value-exchange"
                  className="text-[#8A6622] underline underline-offset-2"
                >
                  Value Exchange
                </Link>
                .
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <ExploreLibraryButton
                  href={libraryHref}
                  onClick={() => trackButtonClick('value_exchange_hero_explore')}
                />
                <Link
                  href="/philosophy"
                  className="btn-secondary inline-flex items-center justify-center no-underline"
                >
                  Kahana philosophy
                </Link>
              </div>
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-14 sm:px-10 sm:py-16 lg:px-16">
          <div className="mx-auto max-w-4xl">
            <FadeInSection>
              <div className="flex items-center gap-3">
                <SectionIcon Icon={GiftIcon} />
                <h2 className="text-2xl font-semibold sm:text-3xl">Who gives what</h2>
              </div>
              <p className="mt-3 max-w-2xl text-lg leading-relaxed text-[#666666]">
                Value is not a one-way gift from creator to consumer. Every role adds something the
                Library needs.
              </p>
              <GiveGrid />
            </FadeInSection>
          </div>
        </section>

        {VALUE_EXCHANGE_SECTIONS.map((section, index) => {
          const Icon = SECTION_ICONS[section.id] || SparklesIcon;
          const tinted = index % 2 === 1;
          return (
            <section
              key={section.id}
              id={section.id}
              className={`border-t border-[#E4D9C4] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 ${
                tinted ? 'bg-[#EDE6D2]/45' : ''
              }`}
            >
              <div className="mx-auto max-w-3xl">
                <FadeInSection>
                  <div className="flex items-start gap-3">
                    <SectionIcon Icon={Icon} />
                    <h2 className="text-2xl font-semibold sm:text-3xl">{section.title}</h2>
                  </div>
                  <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
                    {section.paragraphs.map((para) => (
                      <p key={para.slice(0, 56)}>{para}</p>
                    ))}
                  </div>
                  {section.id === 'living-cycle' ? <CycleSteps /> : null}
                  <PullQuotes quotes={section.pullQuotes} />
                  <SectionTable table={section.table} />
                </FadeInSection>
              </div>
            </section>
          );
        })}

        <section className="relative overflow-hidden border-t border-[#E4D9C4] bg-[#EDE6D2] px-6 py-16 sm:px-10 lg:px-16">
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#D9DACB]/80"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-[#E8DCC4]/90"
            aria-hidden
          />
          <div className="relative mx-auto max-w-3xl text-center">
            <FadeInSection>
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#8A6622] ring-1 ring-[#E4D9C4]">
                <UsersIcon className="h-6 w-6" aria-hidden />
              </span>
              <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
                Everyone is a creator and a learner
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                Put work in a hub. Discover someone else’s path. Give Aura. Pay when it is fair.
                The Library grows because value moves both ways.
              </p>
              <ul className="mx-auto mt-8 flex max-w-lg list-none flex-wrap justify-center gap-2">
                {[
                  { label: 'Give Aura', Icon: SparklesIcon, href: '/aura' },
                  { label: 'Earn fairly', Icon: BanknotesIcon, href: '/earn-money' },
                  { label: 'For creators', Icon: GiftIcon, href: '/creators' },
                  { label: 'For learners', Icon: AcademicCapIcon, href: '/learners' },
                ].map(({ label, Icon, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-[#5C4520] no-underline ring-1 ring-[#E4D9C4] transition hover:bg-[#FFFDF8]"
                    >
                      <Icon className="h-3.5 w-3.5 text-[#8A6622]" aria-hidden />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <ShareUniqueKnowledgeButton
                  href={createHref}
                  onClick={() => trackButtonClick('value_exchange_cta_create')}
                />
                <ExploreLibraryButton
                  href={libraryHref}
                  onClick={() => trackButtonClick('value_exchange_cta_explore')}
                />
              </div>
              <p className="mt-8 text-base leading-relaxed text-[#5C4520]">
                <Link href="/philosophy" className="text-[#8A6622] underline underline-offset-2">
                  Philosophy
                </Link>
                {' · '}
                <Link href="/aura" className="text-[#8A6622] underline underline-offset-2">
                  Aura
                </Link>
                {' · '}
                <Link
                  href="/why-the-aura-library-matters"
                  className="text-[#8A6622] underline underline-offset-2"
                >
                  Our mission
                </Link>
                {' · '}
                <Link
                  href="/creator-benefits"
                  className="text-[#8A6622] underline underline-offset-2"
                >
                  Benefits for creators
                </Link>
                {' · '}
                <Link href="/learners" className="text-[#8A6622] underline underline-offset-2">
                  For learners
                </Link>
                {' · '}
                <Link
                  href="/blog/value-exchange"
                  className="text-[#8A6622] underline underline-offset-2"
                >
                  Blog
                </Link>
              </p>
            </FadeInSection>
          </div>
        </section>
      </div>
    </>
  );
}
