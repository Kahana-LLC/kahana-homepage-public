import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRightIcon,
  ArrowTopRightOnSquareIcon,
  ArrowTrendingUpIcon,
  BanknotesIcon,
  BookOpenIcon,
  CpuChipIcon,
  CurrencyDollarIcon,
  EyeIcon,
  FolderPlusIcon,
  GlobeAltIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  TicketIcon,
  UserGroupIcon,
  UserPlusIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { SiGoogle, SiInstagram, SiOpenai, SiPerplexity, SiYoutube } from 'react-icons/si';
import SEO from '../components/SEO';
import FadeInSection from '../components/FadeInSection';
import BenefitStats from '../components/marketing/BenefitStats';
import DarkLibraryCta from '../components/marketing/DarkLibraryCta';
import GrowthTrialPill from '../components/marketing/GrowthTrialPill';
import ProfileSocialLinksMock from '../components/marketing/ProfileSocialLinksMock';
import SuggestionEngineChatMock from '../components/marketing/SuggestionEngineChatMock';
import FaqAccordion from '../components/faq/FaqAccordion';
import { ABOUT_ORIGIN } from '../config/site';
import { PARTNERSHIP_CONTACT_URL } from '../components/nav/navConfig';
import { productHref } from '../lib/productLinks';
import { CREATOR_BENEFITS_FAQS } from '../data/creatorPageFaqs';
import { USE_CASE_STORIES } from '../data/use-case-stories';
import { trackButtonClick } from '../utils/analytics';

const CANONICAL = `${ABOUT_ORIGIN}/creator-benefits`;

const AMY = USE_CASE_STORIES.find((s) => s.id === 'amy');
const KELSEY = USE_CASE_STORIES.find((s) => s.id === 'kelsey');

const AMY_YOUTUBE = 'https://www.youtube.com/@wamyy5';
const AMY_YOUTUBE_SUBSCRIBERS = '851k';
const KELSEY_SITE = 'https://kelseyvetter.com/';

const SAFETY_PROTECTIONS = [
  {
    title: 'Viewed in the hub',
    body: 'Access is a license to open work on Kahana, not a zip of files to resell. The shelf is the product.',
  },
  {
    title: 'Media download controls off',
    body: 'Video and audio players disable the browser download button so casual rip-and-repost is harder.',
  },
  {
    title: 'Short-lived file links',
    body: 'File access uses time-limited links. Access events can be logged when we investigate unusual patterns.',
  },
  {
    title: 'No bulk scrape or resell',
    body: 'Terms ban account sharing for redistribution, bulk downloading, scraping, and re-uploading creator packs elsewhere.',
  },
  {
    title: 'Rights attestation',
    body: 'Before a hub goes unlisted, listed, or paid, you confirm you have the right to share (and sell access to) what is inside.',
  },
  {
    title: 'AI crawl off by default',
    body: 'Listed hubs advertise noai and noimageai unless you explicitly opt in to AI indexing.',
  },
  {
    title: 'Human-reviewed reports',
    body: 'Anyone can report copyright, AI slop, spam, adult misflags, and more. Reports reach a human review path.',
  },
  {
    title: 'You choose who finds it',
    body: 'Private, invite, unlisted, or Library. Adult hubs are flagged, age-gated, and kept out of default browse and SEO.',
  },
];

const SUGGESTION_POINTS = [
  {
    title: 'Cover, title, description, tags',
    body: 'Every piece of listing data you add when you create a hub feeds how the Library understands your work.',
  },
  {
    title: 'Natural-language search',
    body: 'Learners type what they need in plain language. Hubs with strong listing data come back as rich results.',
  },
  {
    title: 'Rich Library results',
    body: 'Cover, title, and description show up in search so people can tell your hub is the one they meant.',
  },
  {
    title: 'Creator analytics',
    body: 'Watch hub views, then tighten the title, cover, and copy so the right people find you more often.',
  },
  {
    title: 'Nothing unique stays buried',
    body: 'The Aura Library surfaces niche, valuable expertise when people look for it, not only creators with a huge following.',
  },
  {
    title: 'Aura lifts careful work',
    body: 'Scarce endorsements help unique knowledge rise. Audience size is not the gate to being found.',
  },
];

const SEO_DISCOVERY_POINTS = [
  {
    title: 'Built for Google search',
    body: 'Library-listed public hubs get crawlable pages and sitemap inclusion so Google and other major search engines can find and index them.',
  },
  {
    title: 'SEO-ready hub pages',
    body: 'Title, description, and listing data shape how your hub appears when someone searches—clear enough to click, specific enough to match intent.',
  },
  {
    title: 'AI search, when you opt in',
    body: 'Allow AI indexing and your hub can surface in ChatGPT, Perplexity, OpenAI search, and similar assistants. Off by default until you choose.',
  },
  {
    title: 'Traffic beyond the feed',
    body: 'People can land from Google, AI answers, Library search, a shared link, or your profile. Discovery is not locked to one algorithm.',
  },
  {
    title: 'You control the gate',
    body: 'Private and invite hubs stay off search. Unlisted stays shareable by link without Google indexing. Adult hubs stay out of SEO.',
  },
  {
    title: 'Everywhere your work can travel',
    body: 'List once. The same hub can earn views from search, social, and the Library—so traffic compounds instead of living in one post.',
  },
];

const SEO_DISCOVERY_LOGOS = [
  { name: 'Google', Icon: SiGoogle, color: '#4285F4' },
  { name: 'ChatGPT', Icon: SiOpenai, color: '#10A37F' },
  { name: 'OpenAI', Icon: SiOpenai, color: '#000000' },
  { name: 'Perplexity', Icon: SiPerplexity, color: '#20808D' },
];

const CREATORS_HUB_LINKS = [
  {
    href: '/#how-it-works',
    title: 'How it works',
    body: 'Create a hub, add context, list on Library, and grow from the exposure you earn.',
    Icon: QuestionMarkCircleIcon,
    track: 'creator_benefits_how_it_works',
  },
  {
    href: '/pricing',
    title: 'Pricing',
    body: 'Free to start. Growth is $29.99/mo after a 14-day trial. Same 5% fee on paid hub access.',
    Icon: CurrencyDollarIcon,
    track: 'creator_benefits_pricing',
    showTrialPill: true,
  },
  {
    href: '/features?for=creator',
    title: 'Features for creators',
    body: 'Hubs, preview reels, paid access, analytics, clubs, and the rest of the toolkit.',
    Icon: Squares2X2Icon,
    track: 'creator_benefits_features',
  },
  {
    href: '/use-cases?for=creator',
    title: 'Use cases for creators',
    body: 'Sell access, host premium subscriptions, get discovered, collaborate, and more.',
    Icon: BookOpenIcon,
    track: 'creator_benefits_use_cases',
  },
  {
    href: '/affiliates',
    title: 'Become an affiliate',
    body: 'Invite creators to Growth. They get 30% off forever. You earn 30% of what they pay after the trial.',
    Icon: BanknotesIcon,
    track: 'creator_benefits_affiliates',
    badgeLabel: 'Earn 30%',
  },
  {
    href: PARTNERSHIP_CONTACT_URL,
    title: 'Partnerships',
    body: 'Brand deals, co-marketing, and creator partnerships. Reach out and tell us what you have in mind.',
    Icon: UserGroupIcon,
    track: 'creator_benefits_partnerships',
    external: true,
  },
];

/** Gross hub sales from listed price × subscriber count (marketing snapshot). */
function hubGrossEarned(story) {
  if (!story) return null;
  const price = Number(String(story.price || '').replace(/[^0-9.]/g, ''));
  const subscribers = Number(String(story.subscribers || '').replace(/[^0-9]/g, ''));
  if (!Number.isFinite(price) || !Number.isFinite(subscribers) || price <= 0 || subscribers <= 0) {
    return null;
  }
  return price * subscribers;
}

function formatUsd(amount) {
  if (amount == null) return '—';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
}

const AMY_EARNED = formatUsd(hubGrossEarned(AMY));
const KELSEY_EARNED = formatUsd(hubGrossEarned(KELSEY));

function CreatorPhotos({ story }) {
  if (!story?.image) return null;

  const isAvatar = story.photoStyle === 'avatar';
  const handle = story.aka ? `@${String(story.aka).replace(/^@/, '')}` : null;
  const socialLinks = [];
  if (story.youtubeUrl) {
    socialLinks.push({
      href: story.youtubeUrl,
      label: 'YouTube',
      Icon: SiYoutube,
      track: `creator_benefits_${story.id}_youtube`,
    });
  }
  if (story.websiteUrl) {
    socialLinks.push({
      href: story.websiteUrl,
      label: 'Website',
      Icon: GlobeAltIcon,
      track: `creator_benefits_${story.id}_website`,
    });
  }
  if (story.instagramUrl || story.socialUrl) {
    socialLinks.push({
      href: story.instagramUrl || story.socialUrl,
      label: handle || 'Instagram',
      Icon: SiInstagram,
      track: `creator_benefits_${story.id}_social`,
    });
  }

  const socialRow =
    socialLinks.length > 0 ? (
      <div className="mt-3 flex flex-wrap items-center gap-3">
        {socialLinks.map(({ href, label, Icon, track }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#8A6622] no-underline underline-offset-2 hover:underline"
            onClick={() => trackButtonClick(track)}
          >
            <Icon className="h-3.5 w-3.5" aria-hidden />
            {label}
            <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5" aria-hidden />
          </a>
        ))}
      </div>
    ) : handle ? (
      <p className="mt-2 text-sm text-[#666666]">{handle}</p>
    ) : null;

  return (
    <div className={`flex min-w-0 flex-col gap-3 ${isAvatar ? 'lg:pt-2' : ''}`}>
      {isAvatar ? (
        <div className="flex items-start gap-4">
          <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full bg-[#EDE6D2] ring-2 ring-[#E4D9C4] sm:h-32 sm:w-32">
            <Image
              src={story.image}
              alt={story.name}
              fill
              sizes="128px"
              className="object-cover object-top"
              priority={story.id === 'amy' || story.id === 'kelsey'}
            />
          </div>
          <div className="min-w-0 pt-1">
            <p className="font-bricolage text-xl font-semibold tracking-tight text-[#3B2F1A]">
              {story.name}
            </p>
            <p className="mt-0.5 text-sm text-[#666666]">{story.persona}</p>
            {socialRow}
            {story.socialFollowers || story.socialFollowing ? (
              <p className="mt-2 text-sm text-[#5C4520]">
                {story.socialFollowers ? (
                  <span>
                    <span className="font-semibold text-[#3B2F1A]">
                      {story.socialFollowers}
                    </span>{' '}
                    followers
                  </span>
                ) : null}
                {story.socialFollowers && story.socialFollowing ? (
                  <span className="text-[#C4B89A]"> · </span>
                ) : null}
                {story.socialFollowing ? (
                  <span>
                    <span className="font-semibold text-[#3B2F1A]">
                      {story.socialFollowing}
                    </span>{' '}
                    following
                  </span>
                ) : null}
              </p>
            ) : null}
          </div>
        </div>
      ) : (
        <>
          <div className="relative aspect-[3/4] overflow-hidden rounded-[20px] bg-[#EDE6D2]">
            <Image
              src={story.image}
              alt={story.name}
              fill
              sizes="(min-width: 1024px) 360px, 100vw"
              className="object-cover object-top"
              priority={story.id === 'amy'}
            />
          </div>
          <div>
            <p className="font-bricolage text-xl font-semibold tracking-tight text-[#3B2F1A]">
              {story.name}
            </p>
            <p className="mt-0.5 text-sm text-[#666666]">
              {handle}
              {handle && story.persona ? ' · ' : null}
              {story.persona}
            </p>
            {socialRow}
          </div>
        </>
      )}
    </div>
  );
}

function HubPanel({ story, eyebrow, blurb, links, children }) {
  if (!story) return null;

  return (
    <div className="min-w-0 overflow-hidden rounded-[20px] bg-white">
      <a
        href={story.hubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block aspect-[16/10] bg-[#EDE6D2] no-underline"
        onClick={() => trackButtonClick(`creator_benefits_hub_cover_${story.id}`)}
      >
        {story.coverSrc ? (
          <Image
            src={story.coverSrc}
            alt={story.coverAlt || story.hubTitle}
            fill
            sizes="(min-width: 1024px) 480px, 100vw"
            className={`object-cover ${story.coverObjectPosition || 'object-center'}`}
          />
        ) : null}
        {story.price ? (
          <span className="absolute right-3 top-3 rounded-full bg-[#3B2F1A]/90 px-2.5 py-1 text-xs font-semibold text-[#F7F3EA]">
            {story.price}
          </span>
        ) : null}
      </a>
      <div className="px-5 py-5 sm:px-6">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8A6622]">
            {eyebrow}
          </p>
        ) : null}
        <h3 className="mt-2 font-bricolage text-xl font-semibold tracking-tight text-[#3B2F1A]">
          {story.hubTitle}
        </h3>
        {blurb ? (
          <p className="mt-2 text-sm leading-relaxed text-[#666666]">{blurb}</p>
        ) : null}
        {children}
        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
          {links.map((link) => {
            const Icon = link.Icon;
            const className =
              'inline-flex items-center gap-1.5 text-sm font-semibold text-[#8A6622] no-underline underline-offset-2 hover:underline';
            const onClick = () =>
              trackButtonClick(link.track || `creator_benefits_link_${story.id}`);
            const external = /^https?:\/\//.test(link.href);
            const content = (
              <>
                {Icon ? <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden /> : null}
                {link.label}
                {external ? (
                  <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5" aria-hidden />
                ) : null}
              </>
            );
            if (external) {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                  onClick={onClick}
                >
                  {content}
                </a>
              );
            }
            return (
              <Link key={link.href} href={link.href} className={className} onClick={onClick}>
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/** Creator photos + stats left, hub panel right. */
function CreatorHubSection({ id, Icon, title, lead, story, hub, stats, footer }) {
  return (
    <section
      id={id}
      className="border-t border-[#E4D9C4] px-6 py-14 sm:px-10 sm:py-16 lg:px-16"
    >
      <div className="mx-auto max-w-5xl">
        <FadeInSection>
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EDE6D2] text-[#5C4520]">
            <Icon className="h-5 w-5" aria-hidden />
          </span>
          <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">{title}</h2>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-[#666666]">{lead}</p>
        </FadeInSection>

        <div className="mt-10 grid min-w-0 gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <FadeInSection>
            <div className="flex min-w-0 flex-col gap-5">
              <CreatorPhotos story={story} />
              {stats ? <div className="min-w-0">{stats}</div> : null}
            </div>
          </FadeInSection>
          <FadeInSection>
            <HubPanel {...hub}>{hub.children}</HubPanel>
            {footer}
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}

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

export default function CreatorBenefitsPage() {
  return (
    <>
      <SEO
        title="Benefits for Kahana creators | Reach, SEO, earnings"
        description="What creators get on Kahana: Library discovery, SEO for Google and AI search, traffic from everywhere, followers, potential earnings, and a way to share knowledge that is yours."
        url={CANONICAL}
        type="website"
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebPage',
              name: 'Benefits for Kahana creators',
              description:
                'Library discovery, Google and AI search SEO, traffic from everywhere, followers, potential earnings, and impact for people who publish hubs on Kahana.',
              url: CANONICAL,
            },
            {
              '@type': 'FAQPage',
              mainEntity: CREATOR_BENEFITS_FAQS.map((item) => ({
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
                For creators
              </p>
              <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                Benefits for creators
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-[#5C4520] sm:text-xl">
                Put the work in a hub. People find it, follow you, pay if you charge, and gather
                around it.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <GrowthTrialPill
                  href={productHref('/billing?intent=sell&trial=growth', 'creator_benefits_trial')}
                  onClick={() => trackButtonClick('creator_benefits_hero_trial_pill')}
                />
                <Link
                  href="/affiliates"
                  className="text-sm font-semibold text-[#8A6622] underline underline-offset-2"
                  onClick={() => trackButtonClick('creator_benefits_hero_affiliate')}
                >
                  Become an affiliate
                </Link>
              </div>
            </FadeInSection>
          </div>
        </section>

        <CreatorHubSection
          id="more-reach"
          Icon={ArrowTrendingUpIcon}
          title="More reach"
          lead="Amy published on the Library, then grew hub reach, revenue, and YouTube together."
          story={AMY}
          stats={
            <BenefitStats
              items={[
                { value: AMY?.views || '28k', label: 'Hub views', Icon: EyeIcon },
                {
                  value: AMY?.subscribers || '210',
                  label: 'Hub subscribers',
                  Icon: UsersIcon,
                },
                {
                  value: AMY_EARNED,
                  label: 'Earned',
                  Icon: CurrencyDollarIcon,
                },
                {
                  value: AMY_YOUTUBE_SUBSCRIBERS,
                  label: 'YouTube',
                  hint: 'and counting',
                  Icon: SiYoutube,
                },
              ]}
            />
          }
          hub={{
            story: AMY,
            eyebrow: 'Her hub',
            blurb:
              AMY?.hubDescription ||
              'Internship and research process, networking, interviews, LinkedIn, and templates.',
            links: [
              {
                href: AMY?.hubUrl,
                label: 'Open the hub',
                track: 'creator_benefits_amy_hub',
              },
              {
                href: AMY_YOUTUBE,
                label: 'YouTube',
                Icon: SiYoutube,
                track: 'creator_benefits_amy_youtube',
              },
            ],
          }}
          footer={
            <p className="mt-5 text-base leading-relaxed text-[#5C4520]">
              The hub stays findable on Explore. She has earned about {AMY_EARNED} from listed
              access, and her channel grew to {AMY_YOUTUBE_SUBSCRIBERS} subscribers and counting.{' '}
              <Link href="/do-well" className="text-[#8A6622] underline underline-offset-2">
                What to post
              </Link>
            </p>
          }
        />

        <CreatorHubSection
          id="earnings"
          Icon={BanknotesIcon}
          title="Potential earnings"
          lead="Share free, or set a price. Kahana takes 5%. The rest is yours."
          story={KELSEY}
          stats={
            <BenefitStats
              items={[
                {
                  value: KELSEY?.price || '$97',
                  label: 'Hub price',
                  Icon: TicketIcon,
                },
                {
                  value: KELSEY?.subscribers || '27',
                  label: 'Subscribers',
                  Icon: UsersIcon,
                },
                {
                  value: KELSEY_EARNED,
                  label: 'Earned',
                  Icon: CurrencyDollarIcon,
                },
                { value: '5%', label: 'Platform fee', Icon: BanknotesIcon },
              ]}
            />
          }
          hub={{
            story: KELSEY,
            eyebrow: 'Her hub',
            blurb:
              'Pinterest workshop pack: session video, slides, keyword research, pin uploads, and checklists in one unlockable hub.',
            links: [
              {
                href: KELSEY?.hubUrl,
                label: 'Open the hub',
                track: 'creator_benefits_kelsey_hub',
              },
              {
                href: KELSEY_SITE,
                label: 'kelseyvetter.com',
                Icon: GlobeAltIcon,
                track: 'creator_benefits_kelsey_site',
              },
            ],
            children: KELSEY?.quote ? (
              <blockquote className="mt-5 border-l-2 border-[#8A6622] pl-4 text-[#5C4520]">
                <p className="line-clamp-3 text-sm leading-relaxed">“{KELSEY.quote}”</p>
                <footer className="mt-2 text-sm font-semibold text-[#3B2F1A]">
                  {KELSEY.name}
                </footer>
              </blockquote>
            ) : null,
          }}
          footer={
            <p className="mt-5 text-base leading-relaxed text-[#5C4520]">
              About {KELSEY_EARNED} from listed access so far.{' '}
              <Link href="/earn-money" className="text-[#8A6622] underline underline-offset-2">
                Earning on Kahana
              </Link>
            </p>
          }
        />

        <section
          id="suggestion-engine"
          className="border-t border-[#E4D9C4] px-6 py-14 sm:px-10 sm:py-16 lg:px-16"
        >
          <div className="mx-auto max-w-5xl">
            <FadeInSection>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EDE6D2] text-[#5C4520]">
                <CpuChipIcon className="h-5 w-5" aria-hidden />
              </span>
              <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
                Content surfaced through suggestion engine
              </h2>
              <p className="mt-3 max-w-2xl text-lg leading-relaxed text-[#666666]">
                When you list a hub, cover, title, description, and tags feed the suggestion engine.
                Natural-language Library search returns rich results. Unique work does not get
                buried.
              </p>
            </FadeInSection>

            <FadeInSection>
              <div className="mt-10">
                <SuggestionEngineChatMock />
              </div>
            </FadeInSection>

            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {SUGGESTION_POINTS.map((item) => (
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

            <FadeInSection>
              <p className="mt-8 max-w-2xl text-sm leading-relaxed text-[#5C4520]">
                Learners, students, and curious browsers ask in plain language. Hubs with strong
                listing data show up. Use creator analytics to watch views and keep improving how
                the Library understands your work.
              </p>
              <p className="mt-4">
                <Link
                  href="/suggestion-engine"
                  className="text-sm font-semibold text-[#8A6622] underline underline-offset-2"
                  onClick={() => trackButtonClick('creator_benefits_suggestions_section')}
                >
                  How the suggestion engine works
                </Link>
              </p>
            </FadeInSection>
          </div>
        </section>

        <section
          id="seo-discovery"
          className="border-t border-[#E4D9C4] px-6 py-14 sm:px-10 sm:py-16 lg:px-16"
        >
          <div className="mx-auto max-w-5xl">
            <FadeInSection>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EDE6D2] text-[#5C4520]">
                <GlobeAltIcon className="h-5 w-5" aria-hidden />
              </span>
              <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
                Discovered on Google, AI search, and beyond
              </h2>
              <p className="mt-3 max-w-2xl text-lg leading-relaxed text-[#666666]">
                Listed hubs are SEO-optimized for search engines and ready for AI discovery when
                you opt in. Get found from everywhere—and bring traffic to the work itself.
              </p>
            </FadeInSection>

            <FadeInSection>
              <div className="mt-10 overflow-hidden rounded-[20px] bg-white px-5 py-6 sm:px-8 sm:py-8">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8A6622]">
                  Show up where people already search
                </p>
                <ul className="mt-6 flex list-none flex-wrap items-center justify-center gap-3 sm:gap-5">
                  {SEO_DISCOVERY_LOGOS.map(({ name, Icon, color }) => (
                    <li
                      key={name}
                      className="flex min-w-[6.5rem] flex-col items-center gap-2 rounded-2xl bg-[#F7F3EA] px-4 py-4 sm:min-w-[7.5rem]"
                    >
                      <span
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-[0_1px_0_rgba(59,47,26,0.06)]"
                        style={{ color }}
                        aria-hidden
                      >
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="text-sm font-semibold text-[#3B2F1A]">{name}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-center text-sm leading-relaxed text-[#666666]">
                  Crawlable hub pages for Google. Opt in for ChatGPT, OpenAI, and Perplexity
                  discovery—plus Library search and shared links.
                </p>
              </div>
            </FadeInSection>

            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {SEO_DISCOVERY_POINTS.map((item) => (
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

            <FadeInSection>
              <p className="mt-8 max-w-2xl text-sm leading-relaxed text-[#5C4520]">
                Listing helps people find you. It is not a ranking promise. Strong titles,
                covers, and descriptions still matter—on Google, in AI answers, and inside the
                Library.
              </p>
              <p className="mt-4">
                <Link
                  href="/help/list-hub-on-explore"
                  className="text-sm font-semibold text-[#8A6622] underline underline-offset-2"
                  onClick={() => trackButtonClick('creator_benefits_seo_list_hub')}
                >
                  How to list a hub on Library
                </Link>
              </p>
            </FadeInSection>
          </div>
        </section>

        <section
          id="safety"
          className="border-t border-[#E4D9C4] px-6 py-14 sm:px-10 sm:py-16 lg:px-16"
        >
          <div className="mx-auto max-w-5xl">
            <FadeInSection>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EDE6D2] text-[#5C4520]">
                <ShieldCheckIcon className="h-5 w-5" aria-hidden />
              </span>
              <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
                Content Safety Protocols
              </h2>
              <p className="mt-3 max-w-2xl text-lg leading-relaxed text-[#666666]">
                Checking the platform first? These are the unique ways Kahana protects creator work
                and reduces piracy.
              </p>
            </FadeInSection>

            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {SAFETY_PROTECTIONS.map((item) => (
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

            <FadeInSection>
              <p className="mt-8">
                <Link
                  href="/creator-safety"
                  className="text-sm font-semibold text-[#8A6622] underline underline-offset-2"
                  onClick={() => trackButtonClick('creator_benefits_safety_section')}
                >
                  Full Content Safety Protocols guide
                </Link>
              </p>
            </FadeInSection>
          </div>
        </section>

        <BenefitSection
          id="profile"
          Icon={UserPlusIcon}
          title="Your profile connects everything"
          lead="Library discovery lands on your public profile. Customize photo and cover, earn follows, and add profile links so people find you on Instagram, TikTok, LinkedIn, and YouTube—the hub, the Library, and your other socials stay one path."
          invert
          callout={<ProfileSocialLinksMock />}
        >
          <p className="mt-5 text-base leading-relaxed text-[#5C4520]">
            Useful hubs earn follows. The next thing you publish already has people waiting. Set your
            look and handles after you{' '}
            <a
              href={productHref('/', 'creator_benefits_create_profile')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8A6622] underline underline-offset-2"
              onClick={() => trackButtonClick('creator_benefits_create_profile')}
            >
              create an account
            </a>
            .
          </p>
        </BenefitSection>

        <section
          id="beside-social"
          className="border-t border-[#E4D9C4] px-6 py-14 sm:px-10 sm:py-16 lg:px-16"
        >
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">Beside Instagram and YouTube</h2>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                Kahana does not replace the places you already post. The hub is where the tutorial,
                the files, and paid access live, so a reel is not the whole product.
              </p>
            </FadeInSection>
            <FadeInSection>
              <div className="mt-10 overflow-hidden rounded-[20px] bg-white px-5 py-6">
                <div className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr] sm:items-center">
                  <div className="rounded-2xl bg-[#F7F3EA] px-4 py-5 text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8A6622]">
                      The reel
                    </p>
                    <div className="mx-auto mt-3 h-40 w-24 rounded-xl bg-[#E8DCC4]" />
                    <p className="mt-3 text-sm text-[#666666]">A door on Instagram or YouTube</p>
                  </div>
                  <div className="rounded-2xl bg-[#EDE6D2] px-4 py-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8A6622]">
                      The hub
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-[#666666]">
                      <li className="rounded-xl bg-white/70 px-3 py-2">Tutorial video</li>
                      <li className="rounded-xl bg-white/70 px-3 py-2">Files and templates</li>
                      <li className="rounded-xl bg-white/70 px-3 py-2">Optional paid access</li>
                    </ul>
                    <p className="mt-3 text-sm text-[#666666]">The room behind the post</p>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-base leading-relaxed text-[#5C4520]">
                People who want the longer work can talk beside the files, gather in a club, and you
                can see what they open.{' '}
                <Link href="/features/discussions" className="text-[#8A6622] underline underline-offset-2">
                  Discussion
                </Link>
                ,{' '}
                <Link href="/features/clubs" className="text-[#8A6622] underline underline-offset-2">
                  clubs
                </Link>
                , and{' '}
                <Link href="/features/analytics" className="text-[#8A6622] underline underline-offset-2">
                  analytics
                </Link>
                .{' '}
                <Link href="/blog/the-feed-ends-here" className="text-[#8A6622] underline underline-offset-2">
                  The feed ends here
                </Link>
              </p>
            </FadeInSection>
          </div>
        </section>

        <section
          id="kahana-for-creators"
          className="border-t border-[#E4D9C4] px-6 py-14 sm:px-10 sm:py-16 lg:px-16"
        >
          <div className="mx-auto max-w-5xl">
            <FadeInSection>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EDE6D2] text-[#5C4520]">
                <FolderPlusIcon className="h-5 w-5" aria-hidden />
              </span>
              <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
                Learn more about Kahana for creators
              </h2>
              <p className="mt-3 max-w-2xl text-lg leading-relaxed text-[#666666]">
                Benefits above are the why. The creators hub is the how: trial, pricing, features,
                use cases, and the path to publish.
              </p>
              <p className="mt-4">
                <Link
                  href="/creators"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#8A6622] underline underline-offset-2"
                  onClick={() => trackButtonClick('creator_benefits_creators_hub')}
                >
                  Learn more about Kahana for creators
                  <ArrowRightIcon className="h-4 w-4 shrink-0" aria-hidden />
                </Link>
              </p>
            </FadeInSection>

            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {CREATORS_HUB_LINKS.map((item) => {
                const { Icon } = item;
                const cardClass =
                  'flex h-full gap-3 rounded-[20px] bg-white px-4 py-5 no-underline sm:gap-4 sm:px-5';

                if (item.showTrialPill) {
                  return (
                    <li key={item.href}>
                      <FadeInSection>
                        <article className={cardClass}>
                          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EDE6D2] text-[#5C4520]">
                            <Icon className="h-4 w-4" aria-hidden />
                          </span>
                          <div className="min-w-0">
                            <h3 className="font-bricolage text-lg font-semibold tracking-tight text-[#3B2F1A]">
                              <Link
                                href={item.href}
                                className="text-inherit no-underline hover:text-[#8A6622]"
                                onClick={() => trackButtonClick(item.track)}
                              >
                                {item.title}
                              </Link>
                            </h3>
                            <p className="mt-1.5 text-sm leading-relaxed text-[#666666]">
                              {item.body}
                            </p>
                            <div className="mt-3 flex flex-wrap items-center gap-2">
                              <GrowthTrialPill
                                href={productHref(
                                  '/billing?intent=sell&trial=growth',
                                  'creator_benefits_pricing_trial',
                                )}
                                onClick={() =>
                                  trackButtonClick('creator_benefits_pricing_trial_pill')
                                }
                              />
                            </div>
                            <p className="mt-3">
                              <Link
                                href={item.href}
                                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#8A6622] no-underline"
                                onClick={() => trackButtonClick(item.track)}
                              >
                                Learn more
                                <ArrowRightIcon className="h-3.5 w-3.5 shrink-0" aria-hidden />
                              </Link>
                            </p>
                          </div>
                        </article>
                      </FadeInSection>
                    </li>
                  );
                }

                return (
                  <li key={item.href}>
                    <FadeInSection>
                      <Link
                        href={item.href}
                        className={cardClass}
                        onClick={() => trackButtonClick(item.track)}
                      >
                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EDE6D2] text-[#5C4520]">
                          <Icon className="h-4 w-4" aria-hidden />
                        </span>
                        <div className="min-w-0">
                          <h3 className="font-bricolage text-lg font-semibold tracking-tight text-[#3B2F1A]">
                            {item.title}
                          </h3>
                          <p className="mt-1.5 text-sm leading-relaxed text-[#666666]">{item.body}</p>
                          {item.badgeLabel ? (
                            <p className="mt-3">
                              <span className="inline-flex items-center rounded-full bg-[#EDE6D2] px-2.5 py-1 text-[0.7rem] font-semibold tracking-wide text-[#5C4520] ring-1 ring-[#E4D9C4]">
                                {item.badgeLabel}
                              </span>
                            </p>
                          ) : null}
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
                Discovery, earnings, safety, Growth trial, and becoming an affiliate.
              </p>
              <FaqAccordion className="mt-8" items={CREATOR_BENEFITS_FAQS} />
              <p className="mt-8 text-base text-[#5C4520]">
                Also see{' '}
                <Link href="/creators" className="text-[#8A6622] underline underline-offset-2">
                  Kahana for creators
                </Link>
                ,{' '}
                <Link href="/affiliates" className="text-[#8A6622] underline underline-offset-2">
                  become an affiliate
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
          title="Start with one hub"
          description="Share it free, or set a price. Try Growth free for 14 days when you need more capacity."
          libraryCampaign="creator_benefits_library"
          createCampaign="creator_benefits_create"
          libraryTrack="creator_benefits_library"
          createTrack="creator_benefits_create"
          createFirst
        >
          <div className="mt-6 flex justify-center">
            <GrowthTrialPill
              href={productHref('/billing?intent=sell&trial=growth', 'creator_benefits_cta_trial')}
              dark
              onClick={() => trackButtonClick('creator_benefits_cta_trial_pill')}
            />
          </div>
          <p className="mt-8 text-sm text-[#F7F3EA]/70">
            <Link href="/creator-safety" className="underline underline-offset-2">
              Content Safety Protocols
            </Link>
            {' · '}
            <Link href="/suggestion-engine" className="underline underline-offset-2">
              Suggestion engine
            </Link>
            {' · '}
            <Link href="/creators" className="underline underline-offset-2">
              Kahana for creators
            </Link>
            {' · '}
            <Link href="/affiliates" className="underline underline-offset-2">
              Become an affiliate
            </Link>
            {' · '}
            <a
              href={PARTNERSHIP_CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              Partnerships
            </a>
            {' · '}
            <Link href="/podcast-guest" className="underline underline-offset-2">
              Podcast guest
            </Link>
          </p>
        </DarkLibraryCta>
      </div>
    </>
  );
}
