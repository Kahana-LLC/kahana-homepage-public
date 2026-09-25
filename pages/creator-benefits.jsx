import Link from 'next/link';
import SEO from '../components/SEO';
import FadeInSection from '../components/FadeInSection';
import DarkLibraryCta from '../components/marketing/DarkLibraryCta';
import EssaySeriesNav from '../components/marketing/EssaySeriesNav';
import LibraryHubExamples from '../components/marketing/LibraryHubExamples';
import { ABOUT_ORIGIN } from '../config/site';
import { productHref } from '../lib/productLinks';

const CANONICAL = `${ABOUT_ORIGIN}/creator-benefits`;

const BENEFITS = [
  {
    title: 'More reach',
    body: 'A reel disappears when the algorithm moves on. A hub listed on Explore stays findable. Search and Aura point people toward work that holds up.',
  },
  {
    title: 'Traffic back to Instagram and YouTube',
    body: 'The hub is the room behind the post, not a replacement. Readers who want more follow you and open the links you put on your profile.',
  },
  {
    title: 'Followers',
    body: 'Someone who opens a hub and finds it useful can follow you. The next thing you publish has a person waiting.',
  },
  {
    title: 'Potential earnings',
    body: 'Share free, or set a price. When someone pays, Kahana takes 5% and the rest is yours.',
  },
  {
    title: 'A community around the work',
    body: 'Clubs and discussion give people a room next to the files. People gather around something specific.',
  },
  {
    title: 'Impact, which is the point',
    body: 'Put the work here so someone else can use what you know. Aura helps that work pass on.',
  },
];

export default function CreatorBenefitsPage() {
  const libraryHref = productHref('/library', 'creator_benefits_explore');

  return (
    <>
      <SEO
        title="Benefits for Kahana creators | Reach, followers, earnings"
        description="What creators get on Kahana: reach beyond a feed, traffic back to your work and socials, followers, potential earnings, a community, and a way to share knowledge that is yours."
        url={CANONICAL}
        type="website"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Benefits for Kahana creators',
          description:
            'Reach, traffic, followers, potential earnings, community, and impact for people who publish hubs on Kahana.',
          url: CANONICAL,
        }}
      />

      <div className="bg-[#F7F3EA] text-[#3B2F1A]">
        <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <FadeInSection eager>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8A6622]">
                For creators
              </p>
              <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                Benefits for creators
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#5C4520] sm:text-xl">
                Put the full piece of work in a hub. People can find it, follow you, pay if you
                charge, and gather around it. The outcome that matters most is that your knowledge
                reaches someone it helps.
              </p>
              <EssaySeriesNav current="/creator-benefits" />
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-5xl">
            <FadeInSection>
              <div className="mx-auto max-w-3xl">
                <h2 className="text-2xl font-semibold sm:text-3xl">What creators get</h2>
                <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                  Reach after the feed moves on, a path back to your socials, followers, optional
                  pay, community beside the files, and impact.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection>
              <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {BENEFITS.map((item) => (
                  <li key={item.title}>
                    <article className="flex h-full flex-col rounded-[20px] bg-white px-5 py-6">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="mt-2 flex-1 text-base leading-relaxed text-[#666666]">{item.body}</p>
                    </article>
                  </li>
                ))}
              </ul>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[#5C4520]">
                How work rises is on{' '}
                <Link href="/do-well" className="text-[#8A6622] underline underline-offset-2">
                  how to do well
                </Link>
                .
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-5xl">
            <FadeInSection>
              <div className="mx-auto max-w-3xl">
                <h2 className="text-2xl font-semibold sm:text-3xl">Hubs that already show the shape</h2>
                <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                  Workshops, playbooks, and journals listed so people can open one place instead of
                  chasing folders.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection>
              <div className="mt-10">
                <LibraryHubExamples omitIntro exploreHref={libraryHref} exploreTrack="creator_benefits_explore" />
              </div>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[#5C4520]">
                More stories on the{' '}
                <Link href="/story-gallery" className="text-[#8A6622] underline underline-offset-2">
                  story gallery
                </Link>
                .
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">What you give, and what you get</h2>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                A seeker gets a path and five sparks a day. A creator gets a home the feed cannot
                erase, and the choice to charge for access.
              </p>
            </FadeInSection>
            <FadeInSection>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[20px] bg-white px-5 py-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8A6622]">
                    Aura
                  </p>
                  <p className="mt-3 text-2xl font-semibold tabular-nums text-[#3B2F1A]">5 / day</p>
                  <p className="mt-2 text-sm text-[#666666]">
                    Scarce signal that work should travel. Not payment.
                  </p>
                </div>
                <div className="rounded-[20px] bg-[#EDE6D2] px-5 py-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8A6622]">
                    Paid access
                  </p>
                  <p className="mt-3 text-2xl font-semibold tabular-nums text-[#3B2F1A]">5% fee</p>
                  <p className="mt-2 text-sm text-[#666666]">
                    When someone pays for your hub, Kahana takes 5%. The rest is yours.
                  </p>
                </div>
              </div>
              <p className="mt-6 text-base leading-relaxed text-[#5C4520]">
                <Link href="/blog/five-sparks" className="text-[#8A6622] underline underline-offset-2">
                  Five sparks
                </Link>
                {' · '}
                <Link href="/blog/the-feed-ends-here" className="text-[#8A6622] underline underline-offset-2">
                  The feed ends here
                </Link>
                {' · '}
                <Link href="/aura" className="text-[#8A6622] underline underline-offset-2">
                  Learn more about Aura
                </Link>
                {' · '}
                <Link href="/earn-money" className="text-[#8A6622] underline underline-offset-2">
                  Earn money
                </Link>
              </p>
            </FadeInSection>
          </div>
        </section>

        <DarkLibraryCta
          title="Start with one hub"
          description="Share it free, or set a price. The setup path is on the creators page."
          libraryCampaign="creator_benefits_library"
          createCampaign="creator_benefits_create"
          libraryTrack="creator_benefits_library"
          createTrack="creator_benefits_create"
          createFirst
        >
          <p className="mt-8 text-sm text-[#F7F3EA]/70">
            <Link href="/creators" className="underline underline-offset-2">
              Kahana for creators
            </Link>
            {' · '}
            <Link href="/collabs" className="underline underline-offset-2">
              Creator collabs
            </Link>
            {' · '}
            <Link href="/podcast-guest" className="underline underline-offset-2">
              Podcast guest
            </Link>
            {' · '}
            <Link href="/affiliates" className="underline underline-offset-2">
              Affiliates
            </Link>
          </p>
        </DarkLibraryCta>
      </div>
    </>
  );
}
