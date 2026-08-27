import Link from 'next/link';
import FadeInSection from './FadeInSection';

const INCLUDED = { included: true };

const tiers = [
  {
    name: 'Free',
    href: 'https://app.kahana.io',
    priceLabel: '$0',
    priceSuffix: 'forever',
    featuresHeading: 'What you get',
    includedFeatures: [
      '3 hubs',
      'Up to 10 counted uploads per hub',
      'Upload files up to 5 MB',
      'Unlimited collaborators',
      'Monetize hubs with Stripe',
      'List on Library, Clubs, Aura, and the rest of the product',
    ],
    cta: 'Start free',
    buttonStyle: 'secondary',
  },
  {
    name: 'Growth',
    href: 'https://app.kahana.io/billing',
    priceLabel: '$9.99',
    priceSuffix: 'per month',
    featuresHeading: 'Everything in Free, plus',
    includedFeatures: [
      'Unlimited hubs',
      'Unlimited uploads per hub',
      'Upload files up to 5 GB',
      '100 GB cloud storage',
      'Priority live chat',
    ],
    annualNote: 'Save 17% with annual billing',
    cta: 'Get Growth',
    buttonStyle: 'primary',
    highlighted: true,
  },
];

const comparisonGroups = [
  {
    heading: 'Where Growth is different',
    differs: true,
    rows: [
      { feature: 'Hubs you can create', free: '3', growth: 'Unlimited' },
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
      { feature: 'Marketplace fee on hub sales', free: '5%', growth: '5%' },
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
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function PlanValue({ value, included, emphasize }) {
  if (included) {
    return (
      <span className="inline-flex items-center gap-1.5 text-[#495800]">
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
        emphasize ? 'font-semibold text-[#313A00]' : 'text-[#333333]'
      }`}
    >
      {value}
    </span>
  );
}

export default function Pricing() {
  return (
    <div className="bg-[#F8FAF2]">
      <section className="px-4 pb-6 pt-8 text-center sm:px-6 sm:pt-12 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-[#313A00] sm:text-5xl">
          Plans &amp; billing
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-[#666666]">
          Free includes the product. Growth raises hub, upload, and file limits,
          and adds live chat.
        </p>
      </section>

      <FadeInSection>
        <section className="px-4 pb-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2 md:items-stretch lg:gap-8">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative flex flex-col rounded-2xl border-2 bg-white p-5 transition-all duration-300 hover:shadow-lg sm:p-6 lg:p-8 ${
                    tier.highlighted ? 'border-[#617500]' : 'border-[#E0E8D4]'
                  }`}
                >
                  {tier.highlighted ? (
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#617500]">
                      Recommended when you hit a limit
                    </p>
                  ) : null}
                  <div className="mb-4 flex min-h-[180px] flex-col">
                    <h2 className="mb-3 text-base font-semibold text-[#313A00] sm:text-lg">
                      {tier.name}
                    </h2>
                    <div className="mb-4 flex flex-wrap items-baseline gap-x-1">
                      <span className="text-3xl font-bold text-[#313A00] sm:text-4xl lg:text-5xl">
                        {tier.priceLabel}
                      </span>
                      <span className="text-sm text-[#666666]">{tier.priceSuffix}</span>
                    </div>
                    {tier.annualNote ? (
                      <p className="mb-3 text-sm font-medium text-[#495800]">{tier.annualNote}</p>
                    ) : (
                      <p className="mb-3 h-5" aria-hidden="true" />
                    )}
                    <div className="mt-auto min-h-[44px] flex items-center">
                      <a
                        href={tier.href}
                        className={`btn-${tier.buttonStyle} inline-flex w-full items-center justify-center rounded-full px-4 py-2.5 text-sm font-normal no-underline transition-all hover:no-underline focus:no-underline sm:py-3 sm:text-base`}
                      >
                        {tier.cta}
                      </a>
                    </div>
                  </div>

                  <ul className="space-y-2 sm:space-y-3">
                    <li className="mb-2 h-5 text-sm font-semibold text-[#666666]">
                      {tier.featuresHeading}
                    </li>
                    {tier.includedFeatures.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckIcon className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#495800]" />
                        <span className="text-xs leading-relaxed text-[#333333] sm:text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-[#666666] sm:text-base">
              Prices are in $ USD. Kahana earns 5% whenever anyone pays to access
              a monetized hub — the same on Free and Growth.
            </p>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section
          id="compare"
          className="scroll-mt-24 px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8"
        >
          <div className="mx-auto max-w-5xl">
            <div className="mb-6 text-center sm:mb-8">
              <h2 className="text-2xl font-extrabold tracking-tight text-[#313A00] sm:text-3xl">
                Every feature, side by side
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-base text-[#666666]">
                The olive column is what changes on Growth. Everything else is
                already on Free.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-[#E0E8D4] bg-white shadow-sm">
              <table className="w-full min-w-[36rem] border-collapse text-left">
                <caption className="sr-only">
                  Comparison of Kahana Free and Growth plans
                </caption>
                <thead>
                  <tr className="border-b border-[#E0E8D4] bg-[#F8FAF2]">
                    <th
                      scope="col"
                      className="sticky left-0 z-10 bg-[#F8FAF2] px-4 py-3.5 text-sm font-semibold text-[#313A00] sm:px-6"
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
                      className="bg-[#EEF3D8] px-4 py-3.5 text-sm font-semibold text-[#313A00] sm:w-[28%] sm:px-6"
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
                        className={`border-t border-[#E0E8D4] px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.12em] sm:px-6 ${
                          group.differs
                            ? 'bg-[#E7EED0] text-[#495800]'
                            : 'bg-[#F8FAF2] text-[#666666]'
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
                          className="sticky left-0 z-10 bg-white px-4 py-3.5 text-sm font-medium text-[#313A00] sm:px-6"
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
                            group.differs ? 'bg-[#F4F7E6]' : 'bg-[#F8FAF2]'
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
              className="mx-auto mt-14 max-w-2xl scroll-mt-24 rounded-2xl border border-[#E0E8D4] bg-white px-6 py-8 text-left sm:px-8"
            >
              <h2 className="text-xl font-semibold text-[#313A00] sm:text-2xl">
                When to upgrade
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#666666]">
                Stay on Free until you hit a limit (4th hub, upload cap, files
                over ~5&nbsp;MB) or want live chat. You can list on Library and
                sell with Stripe on Free — Growth is capacity and support, not
                permission to monetize. The 5% marketplace fee is the same on
                both plans.
              </p>
              <p className="mt-4 text-base">
                <Link
                  href="/help/when-to-upgrade"
                  className="font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
                >
                  Plans: when to upgrade
                </Link>
                {' · '}
                <a
                  href="https://app.kahana.io/billing"
                  className="font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Billing
                </a>
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
}
