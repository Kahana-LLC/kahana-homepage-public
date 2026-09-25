import Link from 'next/link';
import SEO from '../components/SEO';
import FadeInSection from '../components/FadeInSection';
import { ABOUT_ORIGIN } from '../config/site';
import { productHref } from '../lib/productLinks';
import { trackButtonClick } from '../utils/analytics';

const CANONICAL = `${ABOUT_ORIGIN}/affiliates`;

const STEPS = [
  {
    title: 'Get your link',
    body: 'Sign in and open Earn. Kahana gives you a signup link. Copy it and share it. When someone creates an account from that link, they are tied to you.',
  },
  {
    title: 'How much',
    body: 'You earn 20% of what they pay for Growth. Growth is $29.99 a month, so that is about $6 for each paid month they stay. If they sell a hub, you also earn 1% of that sale. That 1% is 20% of Kahana’s 5% fee. On a $100 hub sale, that is $1.',
  },
  {
    title: 'When you earn',
    body: 'Growth has a free trial. You earn after they pay, not during the trial, and you keep earning 20% for as long as that subscription is paid. Hub earnings land when someone pays them for a hub.',
  },
  {
    title: 'How you get paid',
    body: 'Connect Stripe on Earn. Once that account is verified, Kahana sends affiliate earnings there, the same account used for hub sales. Until Stripe is connected, earnings stay pending.',
  },
];

export default function AffiliatesPage() {
  return (
    <>
      <SEO
        title="Kahana affiliate program: earn 20% of Growth"
        description="How the Kahana affiliate program works. Copy your signup link on Earn, earn 20% of Growth after the free trial, and earn 1% when people you invite sell a hub. Payouts go to Stripe."
        url={CANONICAL}
        type="website"
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebPage',
              name: 'Kahana affiliate program',
              description:
                'Copy your signup link on Earn. Earn 20% of Growth after the trial and 1% of hub sales from people you invite.',
              url: CANONICAL,
            },
            {
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'How do I get a Kahana affiliate link?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Sign in and open Earn. Kahana gives you a signup link. When someone creates an account from that link, they are tied to you.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How much do Kahana affiliates earn?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'You earn 20% of what they pay for Growth. Growth is $29.99 a month, about $6 for each paid month. If they sell a hub, you earn 1% of that sale, which is 20% of Kahana’s 5% fee.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'When do Kahana affiliates get paid?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'You earn after they pay for Growth, not during the free trial, for as long as that subscription is paid. Hub earnings land when someone pays them for a hub. Connect Stripe on Earn. Once it is verified, Kahana sends earnings there. Until then, earnings stay pending.',
                  },
                },
              ],
            },
          ],
        }}
      />

      <div className="bg-[#F7F3EA] text-[#3B2F1A]">
        <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <FadeInSection eager>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8A6622]">
                Affiliates
              </p>
              <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                Share Kahana. Earn 20%.
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#5C4520] sm:text-xl">
                Invite someone with your link. When they pay for Growth, you earn 20% of that
                payment. If they sell hubs, you earn 1% of those sales.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href={productHref('/earn', 'affiliates')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center no-underline"
                  onClick={() => trackButtonClick('affiliates_open_earn')}
                >
                  Get your link
                </a>
                <Link href="/pricing" className="btn-secondary inline-flex items-center justify-center no-underline">
                  See Growth pricing
                </Link>
              </div>
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <ol className="mx-auto flex max-w-3xl flex-col gap-12">
            {STEPS.map((step, index) => (
              <FadeInSection key={step.title}>
                <li>
                  <p className="text-sm font-semibold tracking-wide text-[#8A6622]">{index + 1}</p>
                  <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">{step.title}</h2>
                  <p className="mt-4 text-lg leading-relaxed text-[#666666]">{step.body}</p>
                </li>
              </FadeInSection>
            ))}
          </ol>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl text-lg leading-relaxed text-[#5C4520]">
            <p>
              Growth is the paid plan on the{' '}
              <Link href="/pricing" className="text-[#8A6622] underline underline-offset-2">
                pricing page
              </Link>
              . Selling a hub is separate, and you can charge on Free or Growth. That path is on{' '}
              <Link href="/earn-money" className="text-[#8A6622] underline underline-offset-2">
                earn money
              </Link>
              .
            </p>
            <p className="mt-4 text-base text-[#666666]">
              Kahana can change or end this program. The current rates are 20% of referred Growth
              payments and 1% of hub sales those people make.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
