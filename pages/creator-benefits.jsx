import Link from 'next/link';
import SEO from '../components/SEO';
import FadeInSection from '../components/FadeInSection';
import DarkLibraryCta from '../components/marketing/DarkLibraryCta';
import EssaySeriesNav from '../components/marketing/EssaySeriesNav';
import { ABOUT_ORIGIN } from '../config/site';

const CANONICAL = `${ABOUT_ORIGIN}/creator-benefits`;

const BENEFITS = [
  {
    title: 'More reach',
    body: 'A reel disappears when the algorithm moves on, and a copied clip can outrun the original. A hub listed on Explore stays findable. Search and Aura point people toward the work that holds up, not only toward whoever posted today.',
  },
  {
    title: 'Traffic back to Instagram and YouTube',
    body: 'The hub is the room behind the post, not a replacement for Instagram or YouTube. Readers who want more can follow you and open the links you put on your profile and in the hub.',
  },
  {
    title: 'Followers',
    body: 'Someone who opens a hub and finds it useful can follow you. The next thing you publish has a person waiting, not only a feed that already moved on.',
  },
  {
    title: 'Potential earnings',
    body: 'Share a hub for free, or set a price. A workshop, an exclusive pack, or a tutorial series can live in one hub, and you earn when someone pays to open it.',
  },
  {
    title: 'A community around the work',
    body: 'Clubs and discussion give people a room next to the files. They can respond, ask, and stay with the practice. The point is people gathered around something specific, not a bigger audience for its own sake.',
  },
  {
    title: 'Impact, which is the point',
    body: 'The reason to put the work here is so someone else can use what you know. The process behind the clip does more when a stranger can find it, keep it, and pass it on with Aura.',
  },
];

export default function CreatorBenefitsPage() {
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
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
            {BENEFITS.map((item) => (
              <FadeInSection key={item.title}>
                <article className="h-full rounded-[20px] bg-white px-6 py-6">
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="mt-3 text-base leading-relaxed text-[#666666]">{item.body}</p>
                </article>
              </FadeInSection>
            ))}
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">What you give, and what you get</h2>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-[#666666]">
                <p>
                  A seeker gets a path: files someone arranged, a place to start, and five sparks a
                  day to leave on work that helped. A creator gets a home the feed cannot erase,
                  people who can follow, and the choice to charge for access.
                </p>
                <p>
                  Money is the paid half of that exchange. Set a price on a workshop, a tutorial
                  series, or an exclusive pack. When someone pays, Kahana takes 5% and the rest is
                  yours. Aura is the other half. It is not payment. It is a finite signal that the
                  work should travel further.
                </p>
                <p>
                  The longer versions are{' '}
                  <Link href="/blog/the-feed-ends-here" className="text-[#8A6622] underline underline-offset-2">
                    The feed ends here
                  </Link>
                  ,{' '}
                  <Link href="/blog/build-a-world-not-an-audience" className="text-[#8A6622] underline underline-offset-2">
                    Build a world, not an audience
                  </Link>
                  , and{' '}
                  <Link href="/blog/five-sparks" className="text-[#8A6622] underline underline-offset-2">
                    Five sparks
                  </Link>
                  .
                </p>
              </div>
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
            <Link href="/do-well" className="underline underline-offset-2">
              How to do well
            </Link>
            {' · '}
            <Link href="/story-gallery" className="underline underline-offset-2">
              Success stories
            </Link>
            {' · '}
            <Link href="/collabs" className="underline underline-offset-2">
              Creator collabs
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
