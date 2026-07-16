import Link from 'next/link';
import FadeInSection from './FadeInSection';

const tiers = [
  {
    name: 'Free',
    href: 'https://app.kahana.io',
    priceLabel: '$0',
    priceSuffix: 'forever',
    featuresHeading: 'What you get',
    includedFeatures: [
      '3 hubs',
      'Up to 10 uploads per hub',
      'Unlimited collaborators',
      'Integrate with Stripe to monetize hubs',
      'Upload files up to 5 MB',
    ],
    cta: 'Start free',
    buttonStyle: 'secondary',
  },
  {
    name: 'Growth',
    href: 'https://app.kahana.io/billing',
    priceLabel: '$9.99',
    priceSuffix: 'per month',
    featuresHeading: 'Everything in Free, plus...',
    includedFeatures: [
      'Unlimited hubs',
      'Unlimited uploads per hub',
      'Priority support',
      '100 GB cloud storage',
      'Upload files up to 5 GB',
    ],
    annualNote: 'Save 17% with annual billing',
    cta: 'Get Growth',
    buttonStyle: 'primary',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    href: '/contact',
    priceLabel: 'Custom',
    priceSuffix: 'pricing for teams',
    featuresHeading: 'Everything in Growth, plus...',
    includedFeatures: [
      'Unified administration and billing',
      'Flexible storage as needed',
      'Dedicated 24/7 white-glove support',
      'Custom branding and white-labeling',
      'Custom integrations',
      'Onboarding and migration support',
      'Analytics (Beta)',
    ],
    cta: 'Contact us',
    buttonStyle: 'secondary',
  },
];

export default function Pricing() {
  return (
    <div className="bg-[#F8FAF2]">
      <section className="px-4 pb-6 pt-8 text-center sm:px-6 sm:pt-12 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-[#313A00] sm:text-5xl">
          Plans &amp; billing
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-[#666666]">
          Choose the plan that fits your hubs
        </p>
      </section>

      <FadeInSection>
        <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 md:items-stretch lg:gap-8">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative flex flex-col rounded-2xl border-2 bg-white p-5 transition-all duration-300 hover:shadow-lg sm:p-6 lg:p-8 ${
                    tier.highlighted ? 'border-[#617500]' : 'border-[#E0E8D4]'
                  }`}
                >
                  <div className="mb-4 flex min-h-[200px] flex-col">
                    <h3 className="mb-3 text-base font-semibold text-[#313A00] sm:text-lg">
                      {tier.name}
                    </h3>
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
                      {tier.href.startsWith('/') ? (
                        <Link
                          href={tier.href}
                          className={`btn-${tier.buttonStyle} inline-flex w-full items-center justify-center rounded-full px-4 py-2.5 text-sm font-normal no-underline transition-all hover:no-underline focus:no-underline sm:py-3 sm:text-base`}
                        >
                          {tier.cta}
                        </Link>
                      ) : (
                        <a
                          href={tier.href}
                          className={`btn-${tier.buttonStyle} inline-flex w-full items-center justify-center rounded-full px-4 py-2.5 text-sm font-normal no-underline transition-all hover:no-underline focus:no-underline sm:py-3 sm:text-base`}
                        >
                          {tier.cta}
                        </a>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-2 sm:space-y-3">
                    <li className="mb-2 h-5 text-sm font-semibold text-[#666666]">
                      {tier.featuresHeading}
                    </li>
                    {tier.includedFeatures.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <svg
                          className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0"
                          style={{ color: '#495800' }}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-xs leading-relaxed text-[#333333] sm:text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-[#666666] sm:text-base">
              Prices are in $ USD. To be transparent, Kahana earns 5% whenever anyone pays to access
              any monetized hub.
            </p>

            <div
              id="when-to-upgrade"
              className="mx-auto mt-14 max-w-2xl scroll-mt-24 rounded-2xl border border-[#E0E8D4] bg-white px-6 py-8 text-left sm:px-8"
            >
              <h2 className="text-xl font-semibold text-[#313A00] sm:text-2xl">
                When to upgrade
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#666666]">
                Stay on Free until you hit a limit (4th hub, upload cap, files over ~5&nbsp;MB) or
                want live chat. You can list on Explore and sell with Stripe on Free—Growth is
                capacity and support, not permission to monetize. The 5% marketplace fee is the
                same on Free and Growth.
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
