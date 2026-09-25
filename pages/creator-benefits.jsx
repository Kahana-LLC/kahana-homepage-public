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
    body: 'A hub listed on Explore can be found by people who were never in your comments. Search, categories, and Aura all point readers toward work that holds up, instead of only toward whoever posted today.',
  },
  {
    title: 'Traffic back to your work and your socials',
    body: 'The hub is a destination, not a replacement for the places you already publish. Readers who want more can follow you and open the links you put on your profile and in the hub.',
  },
  {
    title: 'Followers',
    body: 'Someone who opens a hub and finds it useful can follow you. The next thing you publish has a person waiting, not only a feed that already moved on.',
  },
  {
    title: 'Potential earnings',
    body: 'You can share a hub for free, or set a price and earn when someone pays for access. A workshop, a playbook, or a journal can live in one hub instead of a checkout page plus a folder of attachments.',
  },
  {
    title: 'A community around the work',
    body: 'Clubs, discussion, and shared lists give people a room next to the files. The point is not a bigger audience for its own sake. It is people gathered around something specific.',
  },
  {
    title: 'Impact, which is the point',
    body: 'The reason to put the work here is so someone else can use what you know. Unique knowledge does more when a stranger can find it, keep it, and pass it on with Aura.',
  },
];

export default function CreatorBenefitsPage() {
  return (
    <>
      <SEO
        title="Benefits for creators | Kahana"
        description="Reach, traffic back to your work and socials, followers, potential earnings, community, and a way to impact people with knowledge that is actually yours."
        url={CANONICAL}
        type="website"
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
          </p>
        </DarkLibraryCta>
      </div>
    </>
  );
}
