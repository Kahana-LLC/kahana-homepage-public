import Link from 'next/link';
import {
  ChatBubbleLeftRightIcon,
  CpuChipIcon,
  EyeSlashIcon,
  FolderPlusIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  SignalSlashIcon,
  UserPlusIcon,
} from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { SiGoogle, SiInstagram, SiOpenai, SiPerplexity, SiYoutube } from 'react-icons/si';
import SEO from '../components/SEO';
import FadeInSection from '../components/FadeInSection';
import ExplainerRelatedLinks from '../components/home/platform/ExplainerRelatedLinks';
import ProfileSocialLinksMock from '../components/marketing/ProfileSocialLinksMock';
import SuggestionEngineChatMock from '../components/marketing/SuggestionEngineChatMock';
import { APP_URL, EXPLORE_URL } from '../components/nav/navConfig';
import { ABOUT_ORIGIN } from '../config/site';
import { productHref } from '../lib/productLinks';
import { trackButtonClick } from '../utils/analytics';

const CANONICAL = `${ABOUT_ORIGIN}/gain-exposure`;

const HIDDEN = [
  {
    title: 'Work dies in private folders',
    body: 'A useful guide sits in Drive, Slack, or a DM. The people who need it never see it.',
    Icon: EyeSlashIcon,
  },
  {
    title: 'Feeds bury last week',
    body: 'A post is up for a day, then gone. You have to post the same thing again just to stay visible.',
    Icon: ChatBubbleLeftRightIcon,
  },
  {
    title: 'Hard to tell what landed',
    body: 'You might get views, or you might get none. You still do not know if anyone found it useful, or if nobody ever saw it.',
    Icon: SignalSlashIcon,
  },
];

const SEO_DISCOVERY_LOGOS = [
  { name: 'Google', Icon: SiGoogle, color: '#4285F4' },
  { name: 'ChatGPT', Icon: SiOpenai, color: '#10A37F' },
  { name: 'OpenAI', Icon: SiOpenai, color: '#000000' },
  { name: 'Perplexity', Icon: SiPerplexity, color: '#20808D' },
];

const SEO_DISCOVERY_POINTS = [
  {
    title: 'Built for Google search',
    body: 'Library-listed public hubs get crawlable pages and sitemap inclusion so Google and other major search engines can find them.',
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
];

const SUGGESTION_POINTS = [
  {
    title: 'Cover, title, description, tags',
    body: 'Listing data you add when you publish a hub is what the suggestion engine uses to match a question to your work.',
  },
  {
    title: 'Natural-language search',
    body: 'Learners type what they need in plain language. Hubs with strong listing data come back as rich results.',
  },
  {
    title: 'Kahana assistant',
    body: 'The in-app assistant can point people to listed hubs the same way Library search does—another door into your work.',
  },
  {
    title: 'Aura lifts careful work',
    body: 'Scarce endorsements help unique knowledge rise. Audience size is not the gate to being found.',
  },
];

const RELATED = [
  { kind: 'Feature', title: 'Explore', href: '/features/explore' },
  { kind: 'Feature', title: 'Aura', href: '/features/aura' },
  { kind: 'Feature', title: 'Analytics', href: '/features/analytics' },
  { kind: 'Feature', title: 'Profiles', href: '/features/profiles' },
  { kind: 'Benefits', title: 'Benefits for creators', href: '/creator-benefits' },
  { kind: 'Safety', title: 'AI indexing and content safety', href: '/ai-content-safety' },
  { kind: 'Help', title: 'List a hub on Explore', href: '/help/list-hub-on-explore' },
  { kind: 'Help', title: 'How Aura works', href: '/help/how-aura-works' },
  { kind: 'Help', title: 'Get started for creators', href: '/help/get-started-creators' },
  { kind: 'Stories', title: 'Creator stories', href: '/success-stories' },
];

export default function GainExposurePage() {
  return (
    <>
      <SEO
        title="People should be able to find what you know | Kahana"
        description="Get views, saves, follows, and Aura when people discover what you share. List a hub on Explore so the right people can find it."
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
                People should be able to find what you know
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#5C4520] sm:text-xl">
                Get views, saves, follows, and Aura when people discover what you share.
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">Good work still gets buried</h2>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#666666]">
                You already share what you know. A lot of it never reaches the people looking for
                it. It sits in the wrong place, or it vanishes after a day.
              </p>
            </FadeInSection>
            <ul className="mt-10 grid gap-6 md:grid-cols-3">
              {HIDDEN.map((item) => {
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
              <h2 className="text-2xl font-semibold sm:text-3xl">List it where people search</h2>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                Create a hub, add what you know, and list it on Explore when you are ready. People
                can find it later, not only in the hour you posted. Views, saves, and follows tell
                you it is being found.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                If someone gives Aura, a real person thought a hub or file was worth noticing. That
                is promotion, not payment.{' '}
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
                Listed hubs are crawlable for Google. AI assistants only see them if you opt in.
                Traffic can also come from Library search, a shared link, or your profile.
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
                  Crawlable hub pages for Google. Opt in for ChatGPT, OpenAI, and Perplexity—plus
                  Library search and shared links.
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
              <p className="mt-8">
                <Link
                  href="/ai-content-safety"
                  className="text-sm font-semibold text-[#8A6622] underline underline-offset-2"
                  onClick={() => trackButtonClick('gain_exposure_ai_indexing')}
                >
                  How AI indexing works
                </Link>
                {' · '}
                <Link
                  href="/help/list-hub-on-explore"
                  className="text-sm font-semibold text-[#8A6622] underline underline-offset-2"
                  onClick={() => trackButtonClick('gain_exposure_list_hub')}
                >
                  How to list a hub on Library
                </Link>
              </p>
            </FadeInSection>
          </div>
        </section>

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
                Found through the Kahana assistant
              </h2>
              <p className="mt-3 max-w-2xl text-lg leading-relaxed text-[#666666]">
                People can ask in plain language. Listed hubs with a clear title, cover, and
                description show up as results—inside Library search and the in-app assistant.
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
              <p className="mt-8">
                <Link
                  href="/suggestion-engine"
                  className="text-sm font-semibold text-[#8A6622] underline underline-offset-2"
                  onClick={() => trackButtonClick('gain_exposure_suggestion_engine')}
                >
                  How the suggestion engine works
                </Link>
              </p>
            </FadeInSection>
          </div>
        </section>

        <section
          id="profile"
          className="border-t border-[#E4D9C4] px-6 py-14 sm:px-10 sm:py-16 lg:px-16"
        >
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start">
            <div className="min-w-0 lg:order-2">
              <FadeInSection>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EDE6D2] text-[#5C4520]">
                  <UserPlusIcon className="h-5 w-5" aria-hidden />
                </span>
                <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
                  Profile links and link in bio
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-[#666666]">
                  Library discovery lands on your public profile. Add Instagram, TikTok, LinkedIn,
                  YouTube, and X so a hub, the Library, and your other socials stay one path. Put
                  your Kahana profile or hub in the Instagram or YouTube bio so the reel is a door,
                  not the whole product.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#E4405F] shadow-[0_1px_0_rgba(59,47,26,0.06)]">
                    <SiInstagram className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#FF0000] shadow-[0_1px_0_rgba(59,47,26,0.06)]">
                    <SiYoutube className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-sm text-[#5C4520]">Link in bio → Kahana hub or profile</span>
                </div>
                <p className="mt-5 text-base leading-relaxed text-[#5C4520]">
                  Useful hubs earn follows. The next thing you publish already has people waiting.{' '}
                  <a
                    href={productHref('/', 'gain_exposure_create_profile')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8A6622] underline underline-offset-2"
                    onClick={() => trackButtonClick('gain_exposure_create_profile')}
                  >
                    Create an account
                  </a>
                </p>
              </FadeInSection>
            </div>
            <div className="min-w-0 lg:order-1">
              <FadeInSection>
                <ProfileSocialLinksMock />
              </FadeInSection>
            </div>
          </div>
        </section>

        <ExplainerRelatedLinks
          lead="More on Explore, Aura, and listing a hub."
          items={RELATED}
        />

        <section className="bg-[#3B2F1A] px-6 py-20 text-[#F7F3EA] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-2xl text-center">
            <FadeInSection>
              <h2 className="text-3xl font-semibold leading-tight !text-[#F7F3EA] sm:text-4xl">
                Put it where people can find it
              </h2>
              <p className="mt-4 text-lg text-[#F7F3EA]/85">
                Create a hub, or see how others have already listed theirs in the Library.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2 no-underline"
                  onClick={() => trackButtonClick('gain_exposure_create')}
                >
                  <FolderPlusIcon className="h-5 w-5 shrink-0" aria-hidden />
                  Create
                </a>
                <a
                  href={EXPLORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center justify-center gap-2 !border-[#F7F3EA]/40 !bg-transparent no-underline !text-[#F7F3EA] hover:!border-[#F7F3EA] hover:!bg-white/10 hover:!text-[#F7F3EA]"
                  onClick={() => trackButtonClick('gain_exposure_explore')}
                >
                  <MagnifyingGlassIcon className="h-5 w-5 shrink-0" aria-hidden />
                  Library
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
