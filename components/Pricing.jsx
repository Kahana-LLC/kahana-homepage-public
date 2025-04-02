import { CheckIcon } from '@heroicons/react/20/solid';

const tiers = [
  {
    name: 'Free (forever)',
    href: 'https://app.kahana.co/signup',
    priceMonthly: 0,
    description: 'Everything you need to get started',
    includedFeatures: [
      '3 hubs',
      'Monetize with Stripe',
      'Upload files up to 5 MB',
      'Upload up to 10 resources per hub',
    ],
    additionalLinkText: '', // No additional link for Free plan
    additionalLinkHref: '',
  },
  {
    name: 'Growth',
    href: 'https://app.kahana.co/billing',
    priceMonthly: 9.99,
    description: 'For power users who want to do more.',
    includedFeatures: [
      'Unlimited hubs',
      'Live Chat Support',
      '100 GB cloud storage',
      'Upload files up to 5 GB',
      'Upload unlimited resources per hub',
    ],
    additionalLinkText: '', // No additional link for Growth plan
    additionalLinkHref: '',
  },
  {
    name: 'Enterprise',
    href: '/contact',
    priceMonthly: 99.99,
    description: 'For organizations.',
    includedFeatures: [
      'Unified administration and billing',
      'Flexible storage as needed',
      'Dedicated 24/7 white-glove support',
      'Custom branding and white-labeling',
      'Custom integrations',
      'Onboarding and migration support',
      'Hub engagement analytics',
      'Built-in AI & ML tools <span class="inline-block bg-yellow-300 text-yellow-800 px-2 py-0.5 rounded-full text-xs">new</span>',
    ],
    additionalLinkText: 'Request a Live Demo',
    additionalLinkHref: '/contact',
  },
];

export default function Pricing() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 px-4 sm:px-6 lg:px-8">
        <div className="sm:align-center sm:flex sm:flex-col">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 text-center">
            Pricing
          </h1>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.name} className="rounded-lg border border-gray-200 shadow-sm">
              <div className="p-6">
                <h2 className="text-lg font-bold text-center leading-6 text-[#000000]">
                  {tier.name}
                </h2>
                <p className="mt-8 text-center">
                  <span className="text-4xl font-bold tracking-tight text-[#000000]">
                    {tier.priceMonthly === 0 ? '$0.00' : `$${tier.priceMonthly}`}
                  </span>
                  {tier.name === 'Enterprise' ? (
                    <span className="text-base font-medium text-gray-500">
                      /mo/seat
                    </span>
                  ) : (
                    tier.priceMonthly !== 0 && (
                      <span className="text-base font-medium text-gray-500">
                        /mo
                      </span>
                    )
                  )}
                </p>
              </div>

              <div className="px-6">
                <a
                  href={tier.href}
                  className={`block w-full rounded-md py-2 text-center text-sm font-semibold
                    ${tier.name === 'Free (forever)' ? 'bg-gray-500 text-white hover:bg-gray-400' : ''}
                    ${tier.name === 'Growth' ? 'bg-[#038270] text-white hover:bg-[#026a5a]' : ''}
                    ${tier.name === 'Enterprise' ? 'bg-black text-white hover:bg-gray-800' : ''}
                  `}
                >
                  Choose {tier.name}
                </a>
                {tier.name === 'Enterprise' && (
                  <p className="mt-3 text-center">
                    <a
                      href={tier.additionalLinkHref}
                      className="text-sm text-[#038270] underline"
                    >
                      {tier.additionalLinkText}
                    </a>
                  </p>
                )}
              </div>

              <div className="px-6 pt-6 pb-8">
                {tier.name === 'Growth' && (
                  <p className="text-sm text-gray-500 font-semibold mb-2">
                    Everything in Free, plus...
                  </p>
                )}
                {tier.name === 'Enterprise' && (
                  <p className="text-sm text-gray-500 font-semibold mb-2">
                    Everything in Growth, plus...
                  </p>
                )}
                <ul role="list" className="mt-6 space-y-4">
                  {tier.includedFeatures.map((feature, index) => (
                    <li key={index} className="flex space-x-3">
                      <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" />
                      <span
                        className="text-sm text-gray-500"
                        dangerouslySetInnerHTML={{ __html: feature }} // Used to render HTML for Beta badge
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-lg text-gray-500 text-center">
          Prices are in $ USD. To be transparent, Kahana earns 5% whenever anyone pays to access any monetized hub.
        </p>
      </div>
    </div>
  );
}
