import Link from 'next/link';
import SEO from '../components/SEO';
import FadeInSection from '../components/FadeInSection';
import EssaySeriesNav from '../components/marketing/EssaySeriesNav';
import { ABOUT_ORIGIN } from '../config/site';
import { CONTACT_URL } from '../components/nav/navConfig';
import { withProductUtm } from '../lib/productLinks';
import { trackButtonClick } from '../utils/analytics';

const CANONICAL = `${ABOUT_ORIGIN}/collabs`;

const STEPS = [
  {
    title: 'You bring something only you know',
    body: 'A process, a course, a body of research, a practice. Heady subjects welcome: ideas, craft, careers, science, writing, the kind of knowledge that takes a person to hold. Everyone has something unique. The library is looking for that, not a copy of what is already everywhere.',
  },
  {
    title: 'We help you shape the hub',
    body: 'The Kahana team works with you on creation, format, and what the hub should look like. We talk through the tweaks, and we can build it that way. Free or priced. If you want to earn, we help you set the hub up so people can pay for access.',
  },
  {
    title: 'You publish it',
    body: 'When it is ready, you post it. It is your work, on your profile, in your voice. We do not publish it for you under our name.',
  },
  {
    title: 'We help it get found',
    body: 'Once it is up, we feature it and help it get extra views and extra traffic. Aura from readers is still what makes work rise. Featuring is a start, not a substitute for work people actually find useful.',
  },
];

const READING = [
  {
    href: '/why-the-aura-library-matters',
    title: 'Why the Aura Library matters',
    body: 'How careful endorsements help unique work get found.',
  },
  {
    href: '/creator-benefits',
    title: 'Benefits for creators',
    body: 'Reach, traffic, followers, earnings, community, and impact.',
  },
  {
    href: '/do-well',
    title: 'How to do well on Kahana',
    body: 'Share work you would stand behind. Skip the filler.',
  },
  {
    href: '/story-gallery',
    title: 'Success stories',
    body: 'Hubs that are already up, and how they were built.',
  },
];

export default function CollaboratePage() {
  const contactHref = withProductUtm(`${CONTACT_URL}?source=creator_collabs`, {
    campaign: 'creator_collabs',
  });

  return (
    <>
      <SEO
        title="Creator collabs | Kahana"
        description="The Library needs to be built with your help. Work with Kahana to set up a free or priced hub, publish it, and get help reaching readers in 110+ countries."
        url={CANONICAL}
        type="website"
      />

      <div className="bg-[#F7F3EA] text-[#3B2F1A]">
        <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <FadeInSection eager>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8A6622]">
                A library that still needs building
              </p>
              <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                Creator collabs
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#5C4520] sm:text-xl">
                The Library needs to be built with your help. This is a creative, collaborative,
                knowledge-focused effort on a global scale. People already come to Kahana from 110+
                countries. Joining means adding something only you can add, and helping the next
                person find it.
              </p>
              <EssaySeriesNav current="/collabs" />
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection eager>
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Unique work, on purpose
              </h2>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-[#666666]">
                <p>
                The library gets better when it holds work that does not already exist in ten
                other places. We want more of that. Upload what is yours: the thing you have spent
                years getting right.
                </p>
                <p>
                  That is also{' '}
                  <Link href="/do-well" className="text-[#8A6622] underline underline-offset-2">
                    how work does well here
                  </Link>
                  . If people find it useful, helpful, noteworthy, or cool, they give Aura, and it
                  becomes easier to discover. Read{' '}
                  <Link
                    href="/why-the-aura-library-matters"
                    className="text-[#8A6622] underline underline-offset-2"
                  >
                    why the Aura Library matters
                  </Link>
                  .
                </p>
              </div>
            </FadeInSection>
          </div>
        </section>

        <section className="px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8A6622]">
                Work with us
              </p>
              <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
                We can help with the hub, and with revenue
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                Some creators want a free hub people can open immediately. Some want a priced hub
                and a path to earnings. Both are welcome. The Kahana team helps you set up and
                publish a hub that is ready for the library.
              </p>
            </FadeInSection>
            <ol className="mt-12 flex flex-col gap-10">
              {STEPS.map((step, index) => (
                <FadeInSection key={step.title}>
                  <li>
                    <p className="text-sm font-semibold tracking-wide text-[#8A6622]">{index + 1}</p>
                    <h3 className="mt-2 text-xl font-semibold sm:text-2xl">{step.title}</h3>
                    <p className="mt-3 text-lg leading-relaxed text-[#666666]">{step.body}</p>
                  </li>
                </FadeInSection>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8A6622]">
                After you publish
              </p>
              <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Tell your story</h2>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                Once your first hub is on the Library, you can join us for an 8-minute podcast
                inspired by How I Built This. Tell the story of the hub, why you shared the
                knowledge, and what you hope happens next. The episode goes on YouTube, with short
                clips on social.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                The way to reach us is the{' '}
                <a href={contactHref} className="text-[#8A6622] underline underline-offset-2">
                  contact page
                </a>
                . Include your name, email, and hub link, and say you want to record.
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
            <FadeInSection>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8A6622]">
                Example
              </p>
              <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Amy Wang&apos;s profile</h2>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                Amy (wAmy) is the shape we walk creators through. Her public profile is the front
                door. Behind it is a priced hub: the internship and research process she actually
                used, plus the resume and email templates that go with it. One place, listed so
                students can find it, instead of a scattered set of tips.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                That is the kind of hub we help build. Format, files, and how it should read when
                a stranger opens it. Then you post it, and we help it travel.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="https://kahana.io/hub/UMKtgp76MN1MvZuD6p7W"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-semibold text-[#8A6622] underline underline-offset-2"
                  onClick={() => trackButtonClick('collaborate_amy_hub')}
                >
                  Open Amy&apos;s hub
                </a>
                <Link
                  href="/story-gallery"
                  className="text-base font-semibold text-[#8A6622] underline underline-offset-2"
                >
                  More success stories
                </Link>
              </div>
            </FadeInSection>
            <FadeInSection>
              <div className="rounded-[20px] bg-white px-6 py-6">
                <h3 className="text-lg font-semibold">What you get from a collaboration</h3>
                <ul className="mt-4 space-y-3 text-base leading-relaxed text-[#666666]">
                  <li>Help deciding what belongs in the hub, and what to leave out.</li>
                  <li>A format and look we build with you, free or priced.</li>
                  <li>A path to revenue if you choose to charge for access.</li>
                  <li>A feature and extra traffic once you publish.</li>
                </ul>
                <p className="mt-4 text-base leading-relaxed text-[#5C4520]">
                  The longer list of what creators get on Kahana is on{' '}
                  <Link href="/creator-benefits" className="text-[#8A6622] underline underline-offset-2">
                    Benefits for creators
                  </Link>
                  .
                </p>
              </div>
            </FadeInSection>
          </div>
        </section>

        <section className="px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-5xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">Read the rest of this</h2>
            </FadeInSection>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {READING.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex h-full flex-col rounded-[20px] bg-white px-5 py-5 no-underline hover:bg-[#D9DACB]"
                  >
                    <span className="text-base font-semibold text-[#3B2F1A]">{item.title}</span>
                    <span className="mt-2 text-sm leading-relaxed text-[#666666]">{item.body}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-[#3B2F1A] px-6 py-20 text-[#F7F3EA] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-2xl text-center">
            <FadeInSection>
              <h2 className="text-3xl font-semibold leading-tight !text-[#F7F3EA] sm:text-4xl">
                Reach us on the contact page
              </h2>
              <p className="mt-4 text-lg text-[#F7F3EA]/85">
                That is how to start a creator collab or a Tell your story recording. Share your
                name, email, and hub link. Say whether the hub should be free or priced.
              </p>
              <a
                href={contactHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-10 inline-flex items-center justify-center no-underline"
                onClick={() => trackButtonClick('collaborate_contact')}
              >
                Contact us
              </a>
            </FadeInSection>
          </div>
        </section>
      </div>
    </>
  );
}
