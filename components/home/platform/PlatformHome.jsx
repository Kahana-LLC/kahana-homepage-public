import dynamic from 'next/dynamic';
import Link from 'next/link';
import {
  AdjustmentsHorizontalIcon,
  ArrowTrendingUpIcon,
  ArrowsRightLeftIcon,
  BanknotesIcon,
  BookOpenIcon,
  ChartBarIcon,
  ClockIcon,
  CurrencyDollarIcon,
  EyeIcon,
  FolderPlusIcon,
  GlobeAltIcon,
  MegaphoneIcon,
  NoSymbolIcon,
  ShieldCheckIcon,
  SparklesIcon,
  Squares2X2Icon,
  TagIcon,
} from '@heroicons/react/24/outline';
import FadeInSection from '../../FadeInSection';
import { APP_URL } from '../../nav/navConfig';
import { trackButtonClick } from '../../../utils/analytics';
import AuraLikeAnimation from './AuraLikeAnimation';
import CategoryMarquee from './CategoryMarquee';
import FaqBrowse from '../../faq/FaqBrowse';
import { EXPLORE_CATEGORIES } from '../../../data/exploreCategories';

const HeroOwlLottie = dynamic(() => import('./HeroOwlLottie'), { ssr: false });

const EXPLORE_URL = `${APP_URL}/explore`;

function PrimaryCta({ children = 'Contribute', className = '', trackingId }) {
  return (
    <a
      href={APP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-primary inline-flex items-center justify-center no-underline ${className}`}
      onClick={() => trackingId && trackButtonClick(trackingId)}
    >
      {children}
    </a>
  );
}

function SecondaryCta({ children, className = '' }) {
  return (
    <a
      href={EXPLORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-secondary inline-flex items-center justify-center no-underline ${className}`}
    >
      {children}
    </a>
  );
}

function SectionShell({ id, children, className = '' }) {
  return (
    <section id={id} className={`px-6 py-20 sm:px-10 lg:px-16 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Contribute',
    body: 'Upload files and links into a hub on any topic. You gain exposure, get discovered, help others learn, and earn recognition through Aura.',
    Icon: FolderPlusIcon,
  },
  {
    step: '02',
    title: 'Learn',
    body: 'Explore Kahana and access knowledge others have shared, curated and easy to reach in one place. When you like a contribution, give it Aura.',
    Icon: EyeIcon,
  },
  {
    step: '03',
    title: 'Grow',
    body: 'You grow from learning and exposure you earn by contributing (views, saves, purchases, and Aura).',
    Icon: ArrowTrendingUpIcon,
  },
];

const AURA_RULES = [
  {
    title: 'Daily budget',
    body: '5 Aura to give each day',
    Icon: SparklesIcon,
  },
  {
    title: 'Spend freely',
    body: 'All on one hub, or split across a few',
    Icon: ArrowsRightLeftIcon,
  },
  {
    title: 'Resets overnight',
    body: 'Replenishes at midnight UTC',
    Icon: ClockIcon,
  },
  {
    title: 'No self-Aura',
    body: 'You cannot give Aura to your own contributions',
    Icon: NoSymbolIcon,
  },
  {
    title: 'Not money',
    body: 'Endorsement only. Not crypto. Not payment.',
    Icon: BanknotesIcon,
  },
];

const CREATOR_BENEFITS = [
  {
    title: 'Gain exposure',
    body: 'Get views, saves, follows, and Aura when people discover what you share.',
    Icon: MegaphoneIcon,
  },
  {
    title: 'Help others learn',
    body: 'Teaching what you know builds mastery, reputation, and relationships with people.',
    Icon: BookOpenIcon,
  },
  {
    title: 'Earn money',
    body: 'Make money if you choose to monetize access to your hubs.',
    Icon: CurrencyDollarIcon,
  },
];

const OPTIMIZE_STEPS = [
  {
    step: '01',
    title: 'Contribute a hub',
    body: 'Fill it with real content: files, links, and notes worth opening.',
    Icon: FolderPlusIcon,
  },
  {
    step: '02',
    title: 'Add context',
    body: 'Title, cover, description, category, and tags help search surface niche expertise.',
    Icon: TagIcon,
  },
  {
    step: '03',
    title: 'List on Explore',
    body: 'Make the hub public and turn on Explore listing so people can find you.',
    Icon: GlobeAltIcon,
  },
  {
    step: '04',
    title: 'Check analytics',
    body: 'Watch views, saves, and purchases, then iterate on what is landing.',
    Icon: ChartBarIcon,
  },
  {
    step: '05',
    title: 'Optionally monetize',
    body: 'Connect Stripe and set a price when you want to earn from access.',
    Icon: CurrencyDollarIcon,
  },
];

const SEEKER_BENEFITS = [
  {
    title: 'Easy access',
    body: 'Save hubs into collections you can open on your phone or computer. You are one click away from the knowledge in Kahana.',
    Icon: Squares2X2Icon,
  },
  {
    title: 'Credibility',
    body: 'See who contributed and their track record before you dive in. Profiles with a check mark have completed Stripe Identity verification. Aura on a hub is community proof that others found it worth noticing.',
    Icon: ShieldCheckIcon,
  },
  {
    title: 'Flexibility',
    body: 'Hubs are not rigid online courses. Their flexibility lets contributors enhance your learning with curated files and links in the right order.',
    Icon: AdjustmentsHorizontalIcon,
  },
];

function BenefitTiles({ items }) {
  return (
    <ul className="mt-10 flex flex-col gap-6 lg:flex-row lg:items-stretch">
      {items.map((item) => {
        const { Icon } = item;
        return (
          <li
            key={item.title}
            className="flex flex-1 flex-row items-start gap-4 rounded-2xl border border-[#E0E8D4] bg-white/80 px-6 py-7 sm:px-8"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EEF3D8] text-[#495800]">
              <Icon className="h-6 w-6" aria-hidden />
            </span>
            <div className="min-w-0">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-[#666666]">{item.body}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default function PlatformHome() {
  return (
    <div className="bg-[#F8FAF2] text-[#313A00]">
      <section className="relative overflow-hidden bg-white">
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1fr_minmax(240px,360px)] lg:gap-16 lg:px-16 lg:py-24">
          <FadeInSection eager>
            <h1 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight text-[#313A00] sm:text-4xl md:text-5xl">
              The Digital Library With Aura
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#495800] sm:text-xl">
              You learn. You contribute. You give your Aura to recognize the greatest contributions
              to preserve quality.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryCta trackingId="platform_hero_contribute">Contribute</PrimaryCta>
              <SecondaryCta>Explore</SecondaryCta>
            </div>
          </FadeInSection>
          <FadeInSection eager delay={120} isImage>
            <HeroOwlLottie />
          </FadeInSection>
        </div>
      </section>

      <SectionShell id="how-it-works">
        <FadeInSection>
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">How it works</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-lg text-[#666666]">
            Kahana integrates learning, teaching, and growth into daily life.
          </p>
          <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {HOW_IT_WORKS.map((item) => {
              const { Icon } = item;
              return (
                <li
                  key={item.step}
                  className="rounded-2xl border border-[#E0E8D4] bg-white/80 px-6 py-7 sm:px-8"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EEF3D8] text-[#495800]">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <p className="text-sm font-semibold tracking-widest text-[#7A9200]">
                        {item.step}
                      </p>
                      <h3 className="mt-1 text-xl font-semibold">{item.title}</h3>
                      <p className="mt-2 text-[#666666]">{item.body}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
          <p className="mt-8 text-center">
            <Link
              href="/features"
              className="text-base font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
            >
              See features
            </Link>
          </p>
        </FadeInSection>
      </SectionShell>

      <SectionShell id="aura" className="border-t border-[#E0E8D4]">
        <FadeInSection>
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Aura</h2>
            <p className="mt-3 max-w-2xl text-lg text-[#666666]">
              Give carefully. Lift what belongs in Kahana.
            </p>

            <div className="mt-8 rounded-2xl border border-[#E0E8D4] bg-[#EEF3D8]/60 px-6 py-5 sm:px-8">
              <p className="text-xl font-semibold text-[#313A00]">Aura is limited.</p>
              <p className="mt-1 text-base text-[#495800]">
                5 Aura per day · replenishes midnight UTC
              </p>
            </div>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {AURA_RULES.map((rule) => {
                const { Icon } = rule;
                return (
                  <li
                    key={rule.title}
                    className="rounded-2xl border border-[#E0E8D4] bg-white/80 px-5 py-5 sm:px-6"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EEF3D8] text-[#495800]">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-[#313A00]">{rule.title}</h3>
                        <p className="mt-1 text-[#666666]">{rule.body}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-12 grid items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-16">
              <AuraLikeAnimation />
              <p className="max-w-xl text-lg text-[#666666]">
                Because Aura is scarce, people give it carefully. That is why Kahana is different from
                online courses, marketplaces, and creator monetization platforms, and why you can
                trust Kahana as a place to learn.
              </p>
            </div>
          </div>
        </FadeInSection>
      </SectionShell>

      <SectionShell id="for-learners" className="bg-white/60">
        <FadeInSection>
          <h2 className="text-3xl font-semibold sm:text-4xl">Benefits for learners</h2>
          <p className="mt-3 max-w-2xl text-lg text-[#666666]">
            Find curated knowledge because experts chose to contribute it.
          </p>
          <BenefitTiles items={SEEKER_BENEFITS} />
          <p className="mt-8">
            <SecondaryCta>Explore</SecondaryCta>
          </p>
        </FadeInSection>
      </SectionShell>

      <SectionShell id="for-creators">
        <FadeInSection>
          <h2 className="text-3xl font-semibold sm:text-4xl">Benefits for creators and experts</h2>
          <p className="mt-3 max-w-2xl text-lg text-[#666666]">
            Share what you know so more people can benefit from it.
          </p>
          <BenefitTiles items={CREATOR_BENEFITS} />
          <p className="mt-8">
            <PrimaryCta trackingId="platform_creators_contribute">Contribute</PrimaryCta>
          </p>
        </FadeInSection>
      </SectionShell>

      <SectionShell id="optimize" className="border-t border-[#E0E8D4]">
        <FadeInSection>
          <h2 className="text-3xl font-semibold sm:text-4xl">How to optimize</h2>
          <p className="mt-3 max-w-2xl text-lg text-[#666666]">
            Don&apos;t overthink it. Share what you know. Clear names, tags, and descriptions help
            people find niche expertise when they search. Then watch analytics and improve.
          </p>
          <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {OPTIMIZE_STEPS.map((item) => {
              const { Icon } = item;
              return (
                <li
                  key={item.step}
                  className="rounded-2xl border border-[#E0E8D4] bg-white/80 px-6 py-7 sm:px-8"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EEF3D8] text-[#495800]">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <p className="text-sm font-semibold tracking-widest text-[#7A9200]">
                        {item.step}
                      </p>
                      <h3 className="mt-1 text-xl font-semibold">{item.title}</h3>
                      <p className="mt-2 text-[#666666]">{item.body}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
          <p className="mt-8">
            <PrimaryCta trackingId="platform_optimize_contribute">Contribute</PrimaryCta>
          </p>
        </FadeInSection>
      </SectionShell>

      <section id="categories" className="border-t border-[#E0E8D4] py-20">
        <FadeInSection>
          <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16">
            <h2 className="text-3xl font-semibold sm:text-4xl">Browse by category</h2>
            <p className="mt-3 max-w-2xl text-lg text-[#666666]">
              Niche expertise across Kahana. Pick a topic and explore hubs people have
              contributed.
            </p>
          </div>
          <div className="mt-10 w-full overflow-hidden">
            <CategoryMarquee categories={EXPLORE_CATEGORIES} href={EXPLORE_URL} />
          </div>
          <p className="mx-auto mt-10 w-full max-w-6xl px-6 sm:px-10 lg:px-16">
            <SecondaryCta>Explore</SecondaryCta>
          </p>
        </FadeInSection>
      </section>

      <SectionShell id="philosophy" className="border-t border-[#E0E8D4]">
        <FadeInSection>
          <h2 className="text-3xl font-semibold sm:text-4xl">Mission &amp; Philosophy</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#666666]">
            Our core belief is that people are naturally curious and creative. We created a space
            where people can easily connect with others and get rewarded for being themselves. When
            you feel like you could spend an eternity creating and exploring in Kahana, our mission
            will be complete.
          </p>
        </FadeInSection>
      </SectionShell>

      <SectionShell id="faq-teaser">
        <FadeInSection>
          <h2 className="text-3xl font-semibold sm:text-4xl">FAQ</h2>
          <p className="mt-3 max-w-2xl text-lg text-[#666666]">
            Benefits, what makes Kahana different, and how to get the most from it.
          </p>
          <div className="mt-8">
            <FaqBrowse variant="home" />
          </div>
        </FadeInSection>
      </SectionShell>

      <SectionShell className="bg-[#313A00] pb-24 pt-20 text-[#F8FAF2]">
        <FadeInSection>
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-semibold leading-tight !text-[#F8FAF2] sm:text-4xl">
            Contribute what you know. Let Kahana carry it further.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-center text-lg leading-relaxed text-[#F8FAF2]/85">
            Share on any topic. Get discovered. Help others learn from curated hubs in one place.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <PrimaryCta trackingId="platform_closing_contribute">Contribute</PrimaryCta>
            <a
              href={EXPLORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center !border-[#F8FAF2]/40 !bg-transparent no-underline !text-[#F8FAF2] hover:!border-[#F8FAF2] hover:!bg-white/10 hover:!text-[#F8FAF2]"
            >
              Explore
            </a>
          </div>
        </FadeInSection>
      </SectionShell>
    </div>
  );
}
