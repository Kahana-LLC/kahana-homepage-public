import Link from 'next/link';
import SEO from '../components/SEO';
import FadeInSection from '../components/FadeInSection';
import FaqAccordion from '../components/faq/FaqAccordion';
import { ABOUT_ORIGIN } from '../config/site';
import { CONTACT_URL } from '../components/nav/navConfig';
import { withProductUtm } from '../lib/productLinks';
import { trackButtonClick } from '../utils/analytics';

const CANONICAL = `${ABOUT_ORIGIN}/podcast-guest`;

const DETAILS = [
  {
    title: 'Eight minutes, recorded',
    body: 'This is a real podcast guest spot, not a written Q and A. The conversation lasts about eight minutes. We record it. Come ready to talk about the hub you published, why you shared the knowledge, and what you hope happens next.',
  },
  {
    title: 'YouTube and podcast platforms',
    body: 'The full episode goes out on YouTube and other popular podcast sites. If you are looking for a podcasting opportunity that reaches people outside your usual feed, this is that channel.',
  },
  {
    title: 'Snippets on Kahana social',
    body: 'We break the recording into short clips. Those snippets are featured on Kahana social media so more people can find your hub, your voice, and your story.',
  },
];

const FAQ_ITEMS = [
  {
    id: 'who',
    question: 'Who can apply to be a podcast guest?',
    answer:
      'Creators who have published at least one hub on the Kahana Library. If you are still building that first hub, start with a creator collab, then apply here when it is live.',
  },
  {
    id: 'length',
    question: 'How long is the Kahana podcast episode?',
    answer:
      'About eight minutes. It is recorded. Inspired by How I Built This, focused on the knowledge in your hub.',
  },
  {
    id: 'where',
    question: 'Where does the podcast appear?',
    answer:
      'YouTube and other popular podcast platforms. We also cut snippets for Kahana social media.',
  },
  {
    id: 'apply',
    question: 'How do I apply for this podcast guest opportunity?',
    answer:
      'Open the contact page from this page. Include your name, email, hub link, and anything else you want us to know. Say you want to be a podcast guest. We reply by email.',
  },
];

export default function PodcastGuestPage() {
  const applyHref = withProductUtm(`${CONTACT_URL}?source=podcast_guest`, {
    campaign: 'podcast_guest',
  });

  return (
    <>
      <SEO
        title="Be a Podcast Guest on Kahana | Open Podcast Opportunity"
        description="Looking for a podcasting opportunity? Apply to be a guest on Kahana's 8-minute creator podcast. Recorded episodes go on YouTube and podcast platforms, with social snippets. Name, email, and hub link to apply."
        url={CANONICAL}
        type="website"
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebPage',
              name: 'Be a podcast guest on Kahana',
              description:
                'Open podcast guest opportunity for Kahana creators. Eight-minute recorded episodes on YouTube and podcast platforms, with social snippets.',
              url: CANONICAL,
            },
            {
              '@type': 'FAQPage',
              mainEntity: FAQ_ITEMS.map((item) => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: item.answer,
                },
              })),
            },
          ],
        }}
      />

      <div className="bg-[#F7F3EA] text-[#3B2F1A]">
        <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <FadeInSection eager>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8A6622]">
                Podcast guest opportunity
              </p>
              <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                Be a guest on the Kahana podcast
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#5C4520] sm:text-xl">
                Looking for a podcasting opportunity? Apply to join our short creator podcast,
                Tell your story. Record a real episode about the hub you built, then reach listeners
                on YouTube, podcast platforms, and Kahana social.
              </p>
              <p className="mt-4 text-base text-[#666666]">
                Part of{' '}
                <Link href="/collabs" className="text-[#8A6622] underline underline-offset-2">
                  Creator collabs
                </Link>
                .
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href={applyHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center no-underline"
                  onClick={() => trackButtonClick('podcast_guest_apply')}
                >
                  Apply to be a podcast guest
                </a>
                <Link
                  href="/collabs"
                  className="btn-secondary inline-flex items-center justify-center no-underline"
                >
                  Creator collabs
                </Link>
              </div>
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Why creators apply for this podcast spot
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                Most podcast guest lists ask you to pitch cold. Here the door is open for people who
                already put knowledge on the Library. You get a clear format, a short recorded
                episode, and distribution that is built for discovery, not another forgotten inbox
                form.
              </p>
            </FadeInSection>
            <ol className="mt-10 space-y-10">
              {DETAILS.map((item, index) => (
                <FadeInSection key={item.title}>
                  <li>
                    <p className="text-sm font-semibold tracking-wide text-[#8A6622]">{index + 1}</p>
                    <h3 className="mt-2 text-xl font-semibold sm:text-2xl">{item.title}</h3>
                    <p className="mt-3 text-lg leading-relaxed text-[#666666]">{item.body}</p>
                  </li>
                </FadeInSection>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">Who this podcast opportunity is for</h2>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                You have published at least one hub on the Library. You can talk about the work
                behind it: what you put in, what you left out, and who you hope finds it. If you are
                still shaping that first hub, start with a{' '}
                <Link href="/collabs" className="text-[#8A6622] underline underline-offset-2">
                  creator collab
                </Link>{' '}
                first, then come back to apply as a podcast guest.
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">How to apply for the podcast</h2>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                Use the{' '}
                <a href={applyHref} className="text-[#8A6622] underline underline-offset-2">
                  contact page
                </a>
                . Include your name, email, hub link, and anything else you want us to know. Say you
                want to be a guest on the Kahana podcast. We reply by email.
              </p>
              <p className="mt-6">
                <a
                  href={applyHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center no-underline"
                  onClick={() => trackButtonClick('podcast_guest_apply_mid')}
                >
                  Open Contact to apply
                </a>
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">Podcast guest FAQ</h2>
              <FaqAccordion className="mt-8" items={FAQ_ITEMS} />
            </FadeInSection>
          </div>
        </section>

        <section className="bg-[#3B2F1A] px-6 py-20 text-[#F7F3EA] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-2xl text-center">
            <FadeInSection>
              <h2 className="text-3xl font-semibold leading-tight !text-[#F7F3EA] sm:text-4xl">
                Ready to be a podcast guest?
              </h2>
              <p className="mt-4 text-lg text-[#F7F3EA]/85">
                Send your name, email, hub link, and anything else on Contact. Eight minutes.
                Recorded. YouTube, podcast platforms, and Kahana social snippets.
              </p>
              <a
                href={applyHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-8 inline-flex items-center justify-center no-underline"
                onClick={() => trackButtonClick('podcast_guest_apply_footer')}
              >
                Apply to be a podcast guest
              </a>
              <p className="mt-8 text-sm text-[#F7F3EA]/70">
                <Link href="/collabs" className="underline underline-offset-2">
                  Creator collabs
                </Link>
                {' · '}
                <Link href="/story-gallery" className="underline underline-offset-2">
                  Success stories
                </Link>
                {' · '}
                <Link href="/creator-benefits" className="underline underline-offset-2">
                  Benefits for creators
                </Link>
              </p>
            </FadeInSection>
          </div>
        </section>
      </div>
    </>
  );
}
