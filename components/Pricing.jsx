import { useState } from 'react';
import Link from 'next/link';
import FadeInSection from './FadeInSection';
import CreatorStackLedger from './compare/CreatorStackLedger';
import { useMarketingI18n } from '../contexts/MarketingI18n';

const INCLUDED = { included: true };

const FREE_HREF = 'https://kahana.io/?utm_source=marketing&utm_medium=website&utm_campaign=pricing_free';
const GROWTH_HREF = 'https://kahana.io/billing?intent=sell&trial=growth&utm_source=marketing&utm_medium=website&utm_campaign=pricing_growth_trial';

const FREE_FEATURES = [
  { text: '3 hubs', included: true },
  { text: '10 file uploads per hub', included: true },
  { text: 'Unlimited members', included: true },
  { text: 'Files up to 5 MB', included: 'muted' },
  { text: '5% transaction fee', included: 'muted' },
  { text: 'Custom hub and profile URLs', included: false },
  { text: 'Affiliate links for your hubs', included: false },
];

const GROWTH_FEATURES = [
  { text: 'Unlimited hubs', included: true },
  { text: 'Unlimited file uploads', included: true },
  { text: 'Unlimited members', included: true },
  { text: 'Files up to 5 GB', included: true },
  { text: '3% transaction fee', included: true },
  { text: 'Custom hub and profile URLs', included: true },
  { text: 'Affiliate links for your hubs', included: true },
];

const comparisonGroups = [
  {
    heading: 'Where Growth is different',
    differs: true,
    rows: [
      { feature: 'Hubs you can create', free: '3 hubs', growth: 'Unlimited' },
      { feature: 'Custom hub link', free: 'Not included', growth: 'Included' },
      { feature: 'Custom profile link', free: 'Not included', growth: 'Included' },
      {
        feature: 'Affiliate links for your hubs',
        hint: 'Let others earn a share when they send a buyer to a hub you price.',
        free: 'Not included',
        growth: 'Included',
      },
      {
        feature: 'Counted uploads per hub',
        hint: 'Notes, links, and many embeds do not count toward this cap.',
        free: '10',
        growth: 'Unlimited',
      },
      {
        feature: 'File size',
        hint: 'Hub files and media inside notes.',
        free: 'Up to 5 MB',
        growth: 'Up to 5 GB',
      },
      { feature: 'Cloud storage', free: 'Within file limits', growth: '100 GB' },
      {
        feature: 'Support',
        free: 'Help center and tickets',
        growth: 'Priority live chat',
      },
    ],
  },
  {
    heading: 'Create and share',
    rows: [
      { feature: 'Create hubs (private by default)', ...INCLUDED },
      { feature: 'Files, folders, and notes', ...INCLUDED },
      { feature: 'YouTube and webpage embeds', ...INCLUDED },
      { feature: 'Preview reels on Library cards', ...INCLUDED },
      { feature: 'Internet Archive ebook import', ...INCLUDED },
      { feature: 'Unlimited collaborators with roles', ...INCLUDED },
      {
        feature: 'Private, invite-only, unlisted, or Library visibility',
        ...INCLUDED,
      },
    ],
  },
  {
    heading: 'Discover and learn',
    rows: [
      { feature: 'Browse and search Library', ...INCLUDED },
      { feature: 'Filters by topic, free or paid, and more', ...INCLUDED },
      { feature: 'For You and taste marks', ...INCLUDED },
      { feature: 'Save hubs to collections', ...INCLUDED },
      { feature: 'Give and receive Aura', ...INCLUDED },
      { feature: 'Cognition streaks', ...INCLUDED },
    ],
  },
  {
    heading: 'Earn',
    rows: [
      { feature: 'Stripe Connect payouts', ...INCLUDED },
      { feature: 'One-time or monthly hub access', ...INCLUDED },
      { feature: 'Optional free trial on paid hubs', ...INCLUDED },
      { feature: 'List paid or free hubs on Library', ...INCLUDED },
      { feature: 'Creator analytics', ...INCLUDED },
      { feature: 'Transaction fee on hub sales', free: '5%', growth: '3%' },
    ],
  },
  {
    heading: 'Community and account',
    rows: [
      { feature: 'Public profile and follows', ...INCLUDED },
      { feature: 'Messages', ...INCLUDED },
      { feature: 'Create and join Clubs', ...INCLUDED },
      { feature: 'Stripe Identity verified badge', ...INCLUDED },
      { feature: 'Adult flags, age checks, and reports', ...INCLUDED },
      { feature: 'Web app on desktop and mobile browsers', ...INCLUDED },
    ],
  },
];

function CheckIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function CrossIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function FeatureRow({ feature, emphasize }) {
  const muted = feature.included === 'muted';
  const included = feature.included === true || muted;
  const iconClass = emphasize && feature.included === true
    ? 'mt-0.5 h-5 w-5 flex-shrink-0 text-[#2b8a3e]'
    : 'mt-0.5 h-[18px] w-[18px] flex-shrink-0 text-[#9aa0a6]';
  const includedIconClass = feature.included === true && !emphasize
    ? 'mt-0.5 h-[18px] w-[18px] flex-shrink-0 text-[#40c057]'
    : iconClass;

  return (
    <li className="flex min-h-8 items-start gap-3">
      {included ? <CheckIcon className={includedIconClass} /> : <CrossIcon className={iconClass} />}
      <span className={`text-sm leading-snug ${muted ? 'text-[#666666]' : 'text-[#3B2F1A]'}`}>
        {feature.text}
      </span>
    </li>
  );
}

function PlanValue({ value, included, emphasize }) {
  if (included) {
    return (
      <span className="inline-flex items-center gap-1.5 text-[#5C4520]">
        <CheckIcon className="h-4 w-4 flex-shrink-0" />
        <span className="sr-only">Included</span>
        <span className="text-sm font-medium" aria-hidden>
          Included
        </span>
      </span>
    );
  }

  return (
    <span
      className={`text-sm leading-snug ${
        emphasize ? 'font-semibold text-[#3B2F1A]' : 'text-[#333333]'
      }`}
    >
      {value}
    </span>
  );
}

export default function Pricing() {
  const { t } = useMarketingI18n();
  const [yearly, setYearly] = useState(false);
  const growthPrice = yearly ? '$299.99/year' : '$29.99/month';

  return (
    <div className="bg-[#F7F3EA]">
      <section className="px-4 pb-6 pt-8 text-center sm:px-6 sm:pt-12 lg:px-8">
        <h1 className="text-xl font-bold text-[#3B2F1A]">
          Simple pricing
        </h1>
        <div className="relative mt-8 inline-flex">
          <div className="inline-flex rounded-full bg-[#ececec] p-1">
            <button
              type="button"
              className={`billing-cadence-option ${yearly ? '' : 'billing-cadence-option--on'}`}
              onClick={() => setYearly(false)}
            >
              Monthly
            </button>
            <span className="relative">
              <button
                type="button"
                className={`billing-cadence-option ${yearly ? 'billing-cadence-option--on' : ''}`}
                onClick={() => setYearly(true)}
              >
                Yearly
              </button>
              <span className="pointer-events-none absolute right-0 top-0 -translate-y-1/2 translate-x-1/4 rounded bg-[#e7f6ec] px-1 py-px text-[10px] font-medium leading-tight text-[#2b8a3e]">
                2 months free
              </span>
            </span>
          </div>
        </div>
      </section>

      <FadeInSection>
        <section className="px-4 pb-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto grid max-w-4xl grid-cols-1 items-stretch gap-6 md:grid-cols-2">
              <article className="flex min-h-[420px] flex-col rounded-md border border-[#E4D9C4] bg-[#FBF6EC] p-6 shadow-sm">
                <h2 className="text-xl font-bold text-[#3B2F1A]">
                  Free
                  <span className="ml-2">$0</span>
                </h2>
                <p className="mb-4 min-h-6 text-sm text-[#666666]" />
                <ul className="flex-1 space-y-1">
                  {FREE_FEATURES.map((feature) => (
                    <FeatureRow key={feature.text} feature={feature} />
                  ))}
                </ul>
                <a
                  href={FREE_HREF}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-md border-2 border-[#6B5420] bg-transparent px-5 py-3 text-base font-semibold text-[#6B5420] no-underline hover:bg-[#EDE6D2]"
                >
                  Start free
                </a>
              </article>
              <article className="flex min-h-[420px] flex-col rounded-md border border-[#E4D9C4] bg-[#FBF6EC] p-6 shadow-sm">
                <h2 className="text-xl font-bold text-[#3B2F1A]">
                  Growth
                  <span className="ml-2">{growthPrice}</span>
                </h2>
                <p className="mb-4 min-h-6 text-sm text-[#666666]">14-day free trial</p>
                <ul className="flex-1 space-y-1">
                  {GROWTH_FEATURES.map((feature) => (
                    <FeatureRow key={feature.text} feature={feature} emphasize />
                  ))}
                </ul>
                <a
                  href={GROWTH_HREF}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-md border-2 border-transparent bg-[#6B5420] px-5 py-3 text-base font-semibold text-[#FBF6EC] no-underline hover:bg-[#5C4520]"
                >
                  Start 14-day trial
                </a>
              </article>
            </div>

            <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-[#666666] sm:text-base">
              Prices are in $ USD. Kahana keeps 5% of hub sales on Free and 3% on Growth. That fee is separate from Stripe processing.
            </p>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="px-4 pb-10 sm:px-6 lg:px-8">
          <CreatorStackLedger t={t} showPricingLink={false} />
        </section>
      </FadeInSection>

      <FadeInSection>
        <section
          id="compare"
          className="scroll-mt-24 px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8"
        >
          <div className="mx-auto max-w-5xl">
            <div className="mb-6 text-center sm:mb-8">
              <h2 className="text-2xl font-extrabold tracking-tight text-[#3B2F1A] sm:text-3xl">
                Every feature, side by side
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-base text-[#666666]">
                The highlighted column is what changes on Growth. Everything else is
                already on Free.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-[#E4D9C4] bg-white shadow-sm">
              <table className="w-full min-w-[36rem] border-collapse text-left">
                <caption className="sr-only">
                  Comparison of Kahana Free and Growth plans
                </caption>
                <thead>
                  <tr className="border-b border-[#E4D9C4] bg-[#F7F3EA]">
                    <th
                      scope="col"
                      className="sticky left-0 z-10 bg-[#F7F3EA] px-4 py-3.5 text-sm font-semibold text-[#3B2F1A] sm:px-6"
                    >
                      Feature
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-semibold text-[#666666] sm:w-[28%] sm:px-6"
                    >
                      Free
                    </th>
                    <th
                      scope="col"
                      className="bg-[#EDE6D2] px-4 py-3.5 text-sm font-semibold text-[#3B2F1A] sm:w-[28%] sm:px-6"
                    >
                      Growth
                    </th>
                  </tr>
                </thead>
                {comparisonGroups.map((group) => (
                  <tbody key={group.heading}>
                    <tr>
                      <th
                        scope="colgroup"
                        colSpan={3}
                        className={`border-t border-[#E4D9C4] px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.12em] sm:px-6 ${
                          group.differs
                            ? 'bg-[#EDE6D2] text-[#5C4520]'
                            : 'bg-[#F7F3EA] text-[#666666]'
                        }`}
                      >
                        {group.heading}
                      </th>
                    </tr>
                    {group.rows.map((row) => (
                      <tr
                        key={row.feature}
                        className="border-t border-[#EFEFE6] align-top"
                      >
                        <th
                          scope="row"
                          className="sticky left-0 z-10 bg-white px-4 py-3.5 text-sm font-medium text-[#3B2F1A] sm:px-6"
                        >
                          {row.feature}
                          {row.hint ? (
                            <span className="mt-1 block text-xs font-normal leading-snug text-[#666666]">
                              {row.hint}
                            </span>
                          ) : null}
                        </th>
                        <td className="px-4 py-3.5 sm:px-6">
                          <PlanValue
                            value={row.free}
                            included={Boolean(row.included)}
                          />
                        </td>
                        <td
                          className={`px-4 py-3.5 sm:px-6 ${
                            group.differs ? 'bg-[#EDE6D2]' : 'bg-[#F7F3EA]'
                          }`}
                        >
                          <PlanValue
                            value={row.growth}
                            included={Boolean(row.included)}
                            emphasize={Boolean(group.differs)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                ))}
              </table>
            </div>

            <div
              id="when-to-upgrade"
              className="mx-auto mt-14 max-w-2xl scroll-mt-24 rounded-2xl border border-[#E4D9C4] bg-white px-6 py-8 text-left sm:px-8"
            >
              <h2 className="text-xl font-semibold text-[#3B2F1A] sm:text-2xl">
                When to upgrade
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#666666]">
                Stay on Free until you hit a limit (4th hub, upload cap, files
                over ~5&nbsp;MB) or want live chat. You can list on Library and
                sell with Stripe on Free. Growth adds higher limits, custom hub and profile URLs, live chat, and a 3% hub sales fee instead of 5%.
              </p>
              <p className="mt-4 text-base">
                <Link
                  href="/help/when-to-upgrade"
                  className="font-medium text-[#8A6622] no-underline underline-offset-4 hover:underline"
                >
                  Plans: when to upgrade
                </Link>
                {' · '}
                <a
                  href="https://kahana.io/billing?utm_source=marketing&utm_medium=website&utm_campaign=pricing_billing"
                  className="font-medium text-[#8A6622] no-underline underline-offset-4 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Billing
                </a>
                {' · '}
                <Link
                  href="/affiliates"
                  className="font-medium text-[#8A6622] no-underline underline-offset-4 hover:underline"
                >
                  Affiliate: become an affiliate — 30% off forever for them, 30% for you
                </Link>
              </p>
            </div>

            <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-[#E4D9C4] bg-[#EDE6D2] px-6 py-8 text-left sm:px-8">
              <h2 className="text-xl font-semibold text-[#3B2F1A] sm:text-2xl">
                Invite Growth, share the savings
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#666666]">
                People who upgrade through your affiliate link get 30% off Growth forever. You earn
                30% of what they pay after the free trial.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl bg-white px-4 py-4 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8A6622]">
                    Growth
                  </p>
                  <p className="mt-1 text-2xl font-semibold tabular-nums">$29.99</p>
                </div>
                <div className="rounded-xl bg-white px-4 py-4 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8A6622]">
                    They pay
                  </p>
                  <p className="mt-1 text-2xl font-semibold tabular-nums">~$20.99</p>
                </div>
                <div className="rounded-xl bg-[#3B2F1A] px-4 py-4 text-center text-[#F7F3EA]">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#EDE6D2]">
                    You earn
                  </p>
                  <p className="mt-1 text-2xl font-semibold tabular-nums">~$6.30</p>
                </div>
              </div>
              <p className="mt-4 text-base text-[#5C4520]">
                Full program on{' '}
                <Link href="/affiliates" className="text-[#8A6622] underline underline-offset-2">
                  Become an affiliate
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
}
