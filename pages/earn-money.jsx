import Link from 'next/link';
import {
  BanknotesIcon,
  FolderPlusIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
  UserPlusIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import SEO from '../components/SEO';
import FaqAccordion from '../components/faq/FaqAccordion';
import FadeInSection from '../components/FadeInSection';
import ExplainerRelatedLinks from '../components/home/platform/ExplainerRelatedLinks';
import AffiliateEarningsMock from '../components/marketing/AffiliateEarningsMock';
import { APP_URL, EXPLORE_URL } from '../components/nav/navConfig';
import { productHref } from '../lib/productLinks';
import { ABOUT_ORIGIN } from '../config/site';
import { trackButtonClick } from '../utils/analytics';

const CANONICAL = `${ABOUT_ORIGIN}/earn-money`;

const EARN_FAQS = [
  {
    id: 'earn-must-charge',
    question: 'Do I have to charge for my hubs?',
    answer:
      'No. Free hubs are the point. Paid access is optional. Turn it on when you want people to pay to open a hub.',
  },
  {
    id: 'earn-how-paid',
    question: 'How do I get paid on Kahana?',
    answer:
      'Connect Stripe, set a one-time or monthly price on a hub, and list it when you are ready. Buyers unlock access in the hub. Payouts go to the Stripe account you connect.',
  },
  {
    id: 'earn-fee',
    question: 'What fee does Kahana take?',
    answer:
      'Kahana takes 5% of paid hub access. Card processing is separate. You can sell on the Free plan. Growth raises hub, file, and storage limits. It is not required to charge.',
  },
  {
    id: 'earn-hub-affiliates',
    question: 'Can other people earn when they share my hub?',
    answer:
      'Yes. My affiliates lets you give community members a link to a priced hub. They earn a percent of what you keep after fees. Drafts on Free; live links need Growth and a price. That is separate from the Earn signup program.',
  },
];

const FRICTION = [
  {
    title: 'Selling means a whole new store',
    body: 'A lot of tools start with a shop. You build checkout before you know if anyone wants the knowledge.',
    Icon: BanknotesIcon,
  },
  {
    title: 'A paywall too early',
    body: 'If you charge before people can even see the hub, you never find out what lands.',
    Icon: LockClosedIcon,
  },
  {
    title: 'Tools stacked on tools',
    body: 'Checkout in one tool, files in another, numbers somewhere else. Fees add up, and the knowledge is still split.',
    Icon: WrenchScrewdriverIcon,
  },
];

const RELATED = [
  { kind: 'Feature', title: 'Paid access', href: '/features/earning' },
  { kind: 'Feature', title: 'Analytics', href: '/features/analytics' },
  { kind: 'Feature', title: 'Hubs', href: '/features/hubs' },
  { kind: 'Affiliates', title: 'My affiliates', href: '/hub-affiliates' },
  { kind: 'Program', title: 'Become an affiliate', href: '/affiliates' },
  { kind: 'Pricing', title: 'Plans', href: '/pricing' },
  { kind: 'Help', title: 'Optional earning', href: '/help/earning' },
  { kind: 'Help', title: 'Turn on paid access', href: '/help/turn-on-paid-access' },
  { kind: 'Help', title: 'Hub affiliate links', href: '/help/hub-affiliate-links' },
  { kind: 'Help', title: 'When to upgrade', href: '/help/when-to-upgrade' },
  { kind: 'Help', title: 'Creator analytics', href: '/help/creator-analytics' },
];

const HUB_AFFILIATE_POINTS = [
  {
    title: 'Your price, their share',
    body: 'Affiliates earn a percent of what is left after Kahana and Stripe fees, not a cut of the sticker price.',
  },
  {
    title: 'Open, or approval required',
    body: 'Anyone with a Kahana account can use an open link. Approval-required links stay pending until you say yes.',
  },
  {
    title: 'Drafts on Free, live on Growth',
    body: 'Save a link on Free. It pays only after you are on Growth and the hub has a price.',
  },
  {
    title: 'Watch the campaign',
    body: 'Filter all links or one hub. Switch today, this month, and all time. Earnings or views.',
  },
];

export default function EarnMoneyPage() {
  return (
    <>
      <SEO
        title="How creators get paid on Kahana"
        description="You do not have to sell. When you want to, connect Stripe and set a price on a hub. Kahana takes 5% of paid access. Free hubs stay free."
        schema={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: EARN_FAQS.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
          })),
        }}
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
                You don't have to sell. You can later if you want.
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#5C4520] sm:text-xl">
                Income does not have to be whatever the feed paid this week. Make money if you
                choose to monetize access to your hubs.
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">A lot of tools only work if you're selling</h2>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#666666]">
                Sharing is useful even when it's free. If the product is really a store, people
                charge too soon, or they don't share at all.
              </p>
            </FadeInSection>
            <ul className="mt-10 grid gap-6 md:grid-cols-3">
              {FRICTION.map((item) => {
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
              <h2 className="text-2xl font-semibold sm:text-3xl">Charge when you want to</h2>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                A hub can stay free. If you want to earn, connect Stripe, pick a one-time or monthly
                price, and turn on paid access.
              </p>
            </FadeInSection>
            <FadeInSection>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[20px] bg-white px-5 py-6 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8A6622]">
                    Your price
                  </p>
                  <p className="mt-3 text-2xl font-semibold tabular-nums">$30</p>
                  <p className="mt-2 text-sm text-[#666666]">Example hub access</p>
                </div>
                <div className="rounded-[20px] bg-[#EDE6D2] px-5 py-6 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8A6622]">
                    Kahana
                  </p>
                  <p className="mt-3 text-2xl font-semibold tabular-nums">5%</p>
                  <p className="mt-2 text-sm text-[#666666]">Plus Stripe&apos;s fee</p>
                </div>
                <div className="rounded-[20px] bg-white px-5 py-6 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8A6622]">
                    You keep
                  </p>
                  <p className="mt-3 text-2xl font-semibold tabular-nums">~95%</p>
                  <p className="mt-2 text-sm text-[#666666]">Before Stripe processing</p>
                </div>
              </div>
              <p className="mt-6 text-base leading-relaxed text-[#5C4520]">
                You can sell on Free. Growth is about hub and storage limits, not permission to
                charge. Analytics shows views and purchasers. Money detail lives in Stripe.
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="px-6 pb-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">Share a link and earn too</h2>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                People who upgrade through your affiliate link get 30% off Growth forever. After the
                trial, you earn 30% of what they actually pay.
              </p>
            </FadeInSection>
            <FadeInSection>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[20px] bg-white px-5 py-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8A6622]">
                    Invitee pays
                  </p>
                  <p className="mt-3 text-3xl font-semibold tabular-nums">~$20.99</p>
                  <p className="mt-2 text-sm text-[#666666]">30% off $29.99 Growth</p>
                </div>
                <div className="rounded-[20px] bg-[#EDE6D2] px-5 py-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8A6622]">
                    You earn
                  </p>
                  <p className="mt-3 text-3xl font-semibold tabular-nums">~$6.30</p>
                  <p className="mt-2 text-sm text-[#666666]">30% of amount paid, each month</p>
                </div>
              </div>
              <p className="mt-6 text-base leading-relaxed text-[#5C4520]">
                Hub sales from people you invite still pay 1% of GMV. Full steps on the{' '}
                <Link href="/affiliates" className="text-[#8A6622] underline underline-offset-2">
                  affiliate page
                </Link>
                .{' '}
                <a
                  href={productHref('/earn', 'affiliate_earn_money')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8A6622] underline underline-offset-2"
                  onClick={() => trackButtonClick('earn_money_affiliate')}
                >
                  Open affiliate Earn
                </a>
              </p>
            </FadeInSection>
          </div>
        </section>

        <section
          id="hub-affiliates"
          className="border-t border-[#E4D9C4] px-6 pb-16 pt-16 sm:px-10 lg:px-16"
        >
          <div className="mx-auto max-w-5xl">
            <FadeInSection>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EDE6D2] text-[#5C4520]">
                <UserPlusIcon className="h-5 w-5" aria-hidden />
              </span>
              <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
                Affiliates for hubs you sell
              </h2>
              <p className="mt-3 max-w-2xl text-lg leading-relaxed text-[#666666]">
                My affiliates is for your own priced hubs. Let your community share a link and earn
                a percentage. Separate from the Earn signup program above.
              </p>
            </FadeInSection>
            <FadeInSection>
              <div className="mt-10">
                <AffiliateEarningsMock />
              </div>
            </FadeInSection>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {HUB_AFFILIATE_POINTS.map((item) => (
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
              <p className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold">
                <Link
                  href="/hub-affiliates"
                  className="text-[#8A6622] underline underline-offset-2"
                  onClick={() => trackButtonClick('earn_money_hub_affiliates')}
                >
                  My affiliates page
                </Link>
                <Link
                  href="/help/hub-affiliate-links"
                  className="text-[#8A6622] underline underline-offset-2"
                  onClick={() => trackButtonClick('earn_money_hub_affiliates_help')}
                >
                  How hub affiliate links work
                </Link>
                <a
                  href={productHref('/my-affiliates', 'earn_money_my_affiliates')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8A6622] underline underline-offset-2"
                  onClick={() => trackButtonClick('earn_money_open_my_affiliates')}
                >
                  Open My affiliates
                </a>
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">Questions</h2>
              <FaqAccordion className="mt-8" items={EARN_FAQS} />
            </FadeInSection>
          </div>
        </section>

        <ExplainerRelatedLinks
          lead="Paid access, Stripe, plans, and how to tell if people are finding you or buying."
          items={RELATED}
        />

        <section className="bg-[#3B2F1A] px-6 py-20 text-[#F7F3EA] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-2xl text-center">
            <FadeInSection>
              <h2 className="text-3xl font-semibold leading-tight !text-[#F7F3EA] sm:text-4xl">
                Start with a hub. Charge later if you want.
              </h2>
              <p className="mt-4 text-lg text-[#F7F3EA]/85">
                Create a hub, or browse what people already share in the Library.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2 no-underline"
                  onClick={() => trackButtonClick('earn_money_create')}
                >
                  <FolderPlusIcon className="h-5 w-5 shrink-0" aria-hidden />
                  Create
                </a>
                <a
                  href={EXPLORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center justify-center gap-2 !border-[#F7F3EA]/40 !bg-transparent no-underline !text-[#F7F3EA] hover:!border-[#F7F3EA] hover:!bg-white/10 hover:!text-[#F7F3EA]"
                  onClick={() => trackButtonClick('earn_money_explore')}
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
