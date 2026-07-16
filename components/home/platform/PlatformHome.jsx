import dynamic from 'next/dynamic';
import Link from 'next/link';
import {
  AdjustmentsHorizontalIcon,
  ArrowTrendingUpIcon,
  ArrowsRightLeftIcon,
  BanknotesIcon,
  BookOpenIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  EyeIcon,
  FolderPlusIcon,
  GlobeAltIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
  MegaphoneIcon,
  NoSymbolIcon,
  RectangleStackIcon,
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
import RainbowHoverCard from './RainbowHoverCard';
import FaqBrowse from '../../faq/FaqBrowse';
import { EXPLORE_CATEGORIES } from '../../../data/exploreCategories';

const HeroOwlLottie = dynamic(() => import('./HeroOwlLottie'), { ssr: false });

/** Public Explore (marketing host) — not app.kahana.io */
const EXPLORE_URL = 'https://kahana.io/explore';

function PrimaryCta({ children = 'Create', className = '', trackingId }) {
  return (
    <a
      href={APP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-primary inline-flex items-center justify-center gap-2 no-underline ${className}`}
      onClick={() => trackingId && trackButtonClick(trackingId)}
    >
      <FolderPlusIcon className="h-5 w-5 shrink-0" aria-hidden />
      {children}
    </a>
  );
}

function SecondaryCta({ children = 'Explore', className = '' }) {
  return (
    <a
      href={EXPLORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-secondary inline-flex items-center justify-center gap-2 no-underline ${className}`}
    >
      <MagnifyingGlassIcon className="h-5 w-5 shrink-0" aria-hidden />
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
    title: 'Learn',
    body: 'Explore Kahana and access knowledge others have shared, curated and easy to reach in one place. When you like a contribution, give it Aura.',
    Icon: EyeIcon,
  },
  {
    title: 'Create',
    body: 'Create a hub. It starts private so you can add digital artifacts (files, videos, images, PDFs, documents, links, and more) and get it ready. When you want to contribute it to the public feed, flip a switch to list it on Explore. Invite editors or admins if you want to collaborate.',
    Icon: FolderPlusIcon,
  },
  {
    title: 'Grow',
    body: 'You grow from learning and the exposure you earn by contributing: views, saves, purchases, followers, and Aura. Gain exposure as people discover what you create.',
    Icon: ArrowTrendingUpIcon,
  },
];

const AURA_RULES = [
  {
    title: 'Your daily budget',
    body: '5 Aura to give each day. Your Aura replenishes at midnight UTC.',
    Icon: SparklesIcon,
  },
  {
    title: 'Give your way',
    body: 'Give all your Aura to one hub, or split it across a few',
    Icon: ArrowsRightLeftIcon,
  },
  {
    title: 'Yours to give and take',
    body: 'Aura you give stays on a hub until you remove it. You control it.',
    Icon: LockClosedIcon,
  },
  {
    title: 'Hubs only',
    body: 'Give your Aura to hubs, not to people or profiles',
    Icon: RectangleStackIcon,
  },
  {
    title: 'No self-Aura',
    body: 'You cannot give your Aura to your own hubs',
    Icon: NoSymbolIcon,
  },
  {
    title: 'Not money',
    body: 'Promotion only. Not crypto. Not payment.',
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
    title: 'Create a hub',
    body: 'Your hub starts private. Fill it with digital artifacts: files, videos, images, PDFs, documents, links, and more. Invite editors or admins if you want help.',
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
    body: 'When you are ready to contribute to the public feed, flip a switch to make the hub public and list it on Explore.',
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
    title: 'Easy to access',
    body: 'Save hubs of digital artifacts into collections you can open on your phone or computer. You are one click away from the knowledge in Kahana.',
    Icon: Squares2X2Icon,
  },
  {
    title: 'Verifiable credibility',
    body: 'See who contributed and their track record before you dive in. Profiles with a check mark have completed Stripe Identity verification. Aura is community proof that others found a contribution worth noticing.',
    Icon: ShieldCheckIcon,
  },
  {
    title: 'Tailored for understanding',
    body: 'One-size doesn\'t fit all. Hubs are not rigid online courses. Their flexibility lets contributors adapt and curate digital artifacts in strategic ways to enhance your learning and understanding.',
    Icon: AdjustmentsHorizontalIcon,
  },
];

function BenefitTiles({ items }) {
  return (
    <ul className="mt-10 flex flex-col gap-6 lg:flex-row lg:items-stretch">
      {items.map((item) => {
        const { Icon } = item;
        return (
          <li key={item.title} className="flex flex-1">
            <RainbowHoverCard
              className="h-full w-full"
              innerClassName="flex flex-row items-start gap-4 bg-white px-6 py-7 sm:px-8"
            >
              <span className="rainbow-hover-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EEF3D8] text-[#495800]">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <div className="min-w-0">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-[#666666]">{item.body}</p>
              </div>
            </RainbowHoverCard>
          </li>
        );
      })}
    </ul>
  );
}

export default function PlatformHome() {
  return (
    <div className="bg-[#F8FAF2] text-[#313A00]">
      <section className="relative overflow-x-hidden overflow-y-visible bg-white">
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1fr_minmax(240px,360px)] lg:gap-16 lg:px-16 lg:py-24">
          <FadeInSection eager>
            <h1 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight text-[#313A00] sm:text-4xl md:text-5xl">
              The Digital Library With Aura
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#495800] sm:text-xl">
              You learn. You create. You give your Aura to recognize the greatest contributions
              to promote quality.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryCta trackingId="platform_hero_create">Create</PrimaryCta>
              <SecondaryCta>Explore</SecondaryCta>
            </div>
          </FadeInSection>
          <FadeInSection eager delay={120} isImage>
            <HeroOwlLottie />
          </FadeInSection>
        </div>
      </section>

      <SectionShell id="aura" className="border-t border-[#E0E8D4]">
        <FadeInSection>
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">What is Aura?</h2>

            <RainbowHoverCard
              className="mt-8"
              innerClassName="bg-[#EEF3D8] px-6 py-5 sm:px-8"
            >
              <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-10">
                <AuraLikeAnimation />
                <div>
                  <p className="text-xl font-semibold text-[#313A00]">
                    Aura is energy you give to recognize great contributions and promote quality.
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-[#495800] sm:text-lg">
                    Aura is limited. Giving and taking Aura is your power to influence and regulate
                    quality across the library. It is not money, not crypto, and not a star rating.
                    Aura is meant to signal the wisdom of the crowd.
                  </p>
                </div>
              </div>
            </RainbowHoverCard>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {AURA_RULES.map((rule) => {
                const { Icon } = rule;
                return (
                  <li key={rule.title}>
                    <RainbowHoverCard
                      className="h-full"
                      innerClassName="bg-white px-5 py-5 sm:px-6"
                    >
                      <div className="flex items-start gap-3">
                        <span className="rainbow-hover-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EEF3D8] text-[#495800]">
                          <Icon className="h-5 w-5" aria-hidden />
                        </span>
                        <div>
                          <h3 className="text-lg font-semibold text-[#313A00]">{rule.title}</h3>
                          <p className="mt-1 text-[#666666]">{rule.body}</p>
                        </div>
                      </div>
                    </RainbowHoverCard>
                  </li>
                );
              })}
            </ul>

            <p className="mt-8">
              <Link
                href="/aura"
                className="text-base font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
              >
                Learn more about Aura
              </Link>
            </p>
          </div>
        </FadeInSection>
      </SectionShell>

      <SectionShell id="how-it-works" className="border-t border-[#E0E8D4]">
        <FadeInSection>
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">How to use Kahana</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-lg text-[#666666]">
            Kahana integrates learning, teaching, and growth into daily life.
          </p>
          <ul className="mt-14 grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {HOW_IT_WORKS.map((item) => {
              const { Icon } = item;
              return (
                <li key={item.title}>
                  <RainbowHoverCard
                    className="h-full"
                    innerClassName="bg-white px-6 py-7 sm:px-8"
                  >
                    <div className="flex items-start gap-4">
                      <span className="rainbow-hover-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EEF3D8] text-[#495800]">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="mt-2 text-[#666666]">{item.body}</p>
                      </div>
                    </div>
                  </RainbowHoverCard>
                </li>
              );
            })}
          </ul>
          <p className="mt-8 text-center">
            <Link
              href="/help"
              className="text-base font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
            >
              Browse Help
            </Link>
          </p>
        </FadeInSection>
      </SectionShell>

      <SectionShell id="for-learners" className="bg-white/60">
        <FadeInSection>
          <h2 className="text-3xl font-semibold sm:text-4xl">Benefits for learners</h2>
          <p className="mt-3 max-w-2xl text-lg text-[#666666]">
            Explore curated hubs of digital artifacts because people chose to share them.
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
            <PrimaryCta trackingId="platform_creators_create">Create</PrimaryCta>
          </p>
        </FadeInSection>
      </SectionShell>

      <SectionShell id="optimize" className="border-t border-[#E0E8D4]">
        <FadeInSection>
          <h2 className="text-3xl font-semibold sm:text-4xl">How to Optimize on Kahana</h2>
          <p className="mt-3 max-w-2xl text-lg text-[#666666]">
            Don&apos;t overthink it. Share what you know. Clear names, tags, and descriptions help
            people find your hubs and digital artifacts when they search. Then watch analytics and
            improve.
          </p>
          <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {OPTIMIZE_STEPS.map((item) => {
              const { Icon } = item;
              return (
                <li key={item.step}>
                  <RainbowHoverCard
                    className="h-full"
                    innerClassName="bg-white px-6 py-7 sm:px-8"
                  >
                    <div className="flex items-start gap-4">
                      <span className="rainbow-hover-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EEF3D8] text-[#495800]">
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
                  </RainbowHoverCard>
                </li>
              );
            })}
          </ol>
          <p className="mt-8">
            <PrimaryCta trackingId="platform_optimize_create">Create</PrimaryCta>
          </p>
        </FadeInSection>
      </SectionShell>

      <section id="categories" className="border-t border-[#E0E8D4] py-20">
        <FadeInSection>
          <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16">
            <h2 className="text-3xl font-semibold sm:text-4xl">Browse by category</h2>
            <p className="mt-3 max-w-2xl text-lg text-[#666666]">
              Discover niche expertise across Kahana. Pick a topic and explore hubs of digital
              artifacts people have contributed.
            </p>
          </div>
          <div className="mt-10 w-full overflow-hidden">
            <CategoryMarquee categories={EXPLORE_CATEGORIES} baseHref={EXPLORE_URL} />
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
            Our core belief is that people are naturally curious and creative. We wanted to create a
            special space where people can easily connect with each other and get rewarded for being
            themselves.
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
            <PrimaryCta trackingId="platform_closing_create">Create</PrimaryCta>
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
