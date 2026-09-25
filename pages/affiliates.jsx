import Link from 'next/link';
import SEO from '../components/SEO';
import FadeInSection from '../components/FadeInSection';
import { ABOUT_ORIGIN } from '../config/site';
import { productHref } from '../lib/productLinks';
import { trackButtonClick } from '../utils/analytics';

const CANONICAL = `${ABOUT_ORIGIN}/affiliates`;

export default function AffiliatesPage() {
  const earnHref = productHref('/earn', 'affiliates');

  return (
    <>
      <SEO
        title="Kahana affiliate program: earn 30% of Growth"
        description="Two-sided affiliate program. People who upgrade through your link get 30% off Growth forever. You earn 30% of what they pay after the free trial, and 1% when they sell a hub. Payouts go to Stripe."
        url={CANONICAL}
        type="website"
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebPage',
              name: 'Kahana affiliate program',
              description:
                'Invite with your Earn link. Invitees get 30% off Growth forever. You earn 30% of what they pay after the trial and 1% of hub sales.',
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
                    text: 'People who upgrade through your link get 30% off Growth forever. You earn 30% of what they pay. Growth is $29.99 a month, so with the discount they pay about $20.99 and you earn about $6.30 per paid month. If they sell a hub, you earn 1% of that sale, which is 20% of Kahana’s 5% fee.',
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
                Share Kahana. Earn 30%.
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#5C4520] sm:text-xl">
                Invite someone with your link. They get 30% off Growth forever. When they pay, you
                earn 30% of that payment. If they sell hubs, you earn 1% of those sales.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href={earnHref}
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
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">Get your link</h2>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                Sign in and open Earn. Kahana gives you a signup link. Copy it and share it. When
                someone creates an account from that link, they are tied to you.
              </p>
              <div className="mt-8 overflow-hidden rounded-[20px] border border-[#E4D9C4] bg-white px-6 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8A6622]">
                  Earn · your link
                </p>
                <p className="mt-3 break-all font-mono text-sm text-[#5C4520]">
                  kahana.io/?ref=your-code
                </p>
                <p className="mt-3 text-sm text-[#666666]">Copy · share · they sign up</p>
              </div>
              <p className="mt-4 text-base text-[#5C4520]">
                Open{' '}
                <a
                  href={earnHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8A6622] underline underline-offset-2"
                  onClick={() => trackButtonClick('affiliates_earn_key')}
                >
                  Earn
                </a>{' '}
                after you sign in.
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">How much</h2>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                Growth is $29.99 a month. With your invitee&apos;s 30% off forever, they pay about
                $20.99. You earn 30% of what they pay: about $6.30 each paid month they stay.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[20px] border border-[#E4D9C4] bg-white px-5 py-6 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8A6622]">
                    List price
                  </p>
                  <p className="mt-2 text-3xl font-semibold tabular-nums">$29.99</p>
                  <p className="mt-1 text-sm text-[#666666]">Growth / month</p>
                </div>
                <div className="rounded-[20px] border border-[#E4D9C4] bg-white px-5 py-6 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8A6622]">
                    They pay
                  </p>
                  <p className="mt-2 text-3xl font-semibold tabular-nums">~$20.99</p>
                  <p className="mt-1 text-sm text-[#666666]">30% off forever</p>
                </div>
                <div className="rounded-[20px] border border-[#8A6622]/35 bg-[#EDE6D2] px-5 py-6 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8A6622]">
                    You earn
                  </p>
                  <p className="mt-2 text-3xl font-semibold tabular-nums">~$6.30</p>
                  <p className="mt-1 text-sm text-[#666666]">per paid month</p>
                </div>
              </div>
              <p className="mt-4 text-base text-[#5C4520]">
                Hub sales are separate: you also earn 1% of their hub sales (20% of Kahana&apos;s 5%
                fee). On a $100 hub sale, that is $1. Details on{' '}
                <Link href="/earn-money" className="text-[#8A6622] underline underline-offset-2">
                  earn money
                </Link>
                .
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">When you earn</h2>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                Growth has a free trial. You earn after they pay, not during the trial, and you keep
                earning 30% of what they pay for as long as that subscription is paid. Hub earnings
                land when someone pays them for a hub.
              </p>
              <div className="mt-8 overflow-hidden rounded-[20px] border border-[#E4D9C4] bg-white">
                <div className="grid grid-cols-3 divide-x divide-[#E4D9C4] text-center text-sm">
                  <div className="px-3 py-5">
                    <p className="font-semibold text-[#3B2F1A]">Sign up</p>
                    <p className="mt-1 text-[#666666]">Tied to you</p>
                  </div>
                  <div className="px-3 py-5">
                    <p className="font-semibold text-[#3B2F1A]">Trial</p>
                    <p className="mt-1 text-[#666666]">No payout yet</p>
                  </div>
                  <div className="bg-[#EDE6D2] px-3 py-5">
                    <p className="font-semibold text-[#3B2F1A]">Paid month</p>
                    <p className="mt-1 text-[#666666]">~$6.30</p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-base text-[#5C4520]">
                Rates stay at 30% / 30% for as long as the referred Growth subscription is paid.
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">How you get paid</h2>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                Connect Stripe on Earn. Once that account is verified, Kahana sends affiliate
                earnings there, the same account used for hub sales. Until Stripe is connected,
                earnings stay pending.
              </p>
              <div className="mt-8 rounded-[20px] border border-[#E4D9C4] bg-white px-6 py-5">
                <p className="text-sm font-semibold text-[#3B2F1A]">Stripe Connect on Earn</p>
                <p className="mt-2 text-base text-[#666666]">
                  Verified → payouts · Pending until connected
                </p>
              </div>
              <p className="mt-4 text-base text-[#5C4520]">
                Same Stripe path as selling a hub on{' '}
                <Link href="/earn-money" className="text-[#8A6622] underline underline-offset-2">
                  earn money
                </Link>
                . Growth plan detail is on{' '}
                <Link href="/pricing" className="text-[#8A6622] underline underline-offset-2">
                  pricing
                </Link>
                .
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl text-base leading-relaxed text-[#666666]">
            <p>
              Kahana can change or end this program. The current rates are 30% off Growth forever
              for people who upgrade through an affiliate link, 30% of those referred Growth
              payments for the affiliate, and 1% of hub sales those people make.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
