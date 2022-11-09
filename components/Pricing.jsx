import { CheckIcon } from '@heroicons/react/20/solid';

const tiers = [
  {
    name: 'Free',
    href: '#',
    priceMonthly: 0,
    description: 'All the basics for starting a new business',
    includedFeatures: [
      'Monetize your hubs.',
      'Number of hubs - 2',
      'Storage - 1 GB',
    ],
  },
  {
    name: 'Premium',
    href: '#',
    priceMonthly: 9.99,
    description: 'All the basics for starting a new business',
    includedFeatures: [
      'Monetize your hubs.',
      'Number of hubs - Unlimited',
      'Storage - 5 GB',
    ],
  },
  {
    name: 'Teams',
    href: '#',
    priceMonthly: 19.99,
    description: 'All the basics for starting a new business',
    includedFeatures: [
      'Monetize your hubs.',
      'Number of hubs - Unlimited',
      'Storage - 50 GB',
      'Admin permissions & control',
    ],
  },
  {
    name: 'Enterprise',
    href: '#',
    priceMonthly: 29.99,
    description: 'All the basics for starting a new business',
    includedFeatures: [
      'Monetize your hubs.',
      'Number of hubs - Unlimited',
      'Storage - As needed',
      'Admin permissions & control',
      'Customized billing',
      'Enterprise time & usage reporting',
      'SAML, Single-Sign On (SSO)',
      'White labeling',
      'White glove 24/7 support',
      'Customized and advanced reporting',
      'Custom development & templates',
    ],
  },
];

export default function Pricing() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 px-4 sm:px-6 lg:px-8">
        <div className="sm:align-center sm:flex sm:flex-col">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-center">
            Pricing Plans
          </h1>
          <p className="mt-5 text-xl text-gray-500 sm:text-center">
            Start building for free, then add a site plan to go live. Account
            plans unlock additional features.
          </p>

          {/* monthly vs yearly  */}
          {/* <div className="relative mt-6 flex self-center rounded-lg bg-gray-100 p-0.5 sm:mt-8">
            <button
              type="button"
              className="relative w-1/2 whitespace-nowrap rounded-md border-gray-200 bg-white py-2 text-sm font-medium text-gray-900 shadow-sm focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8"
            >
              Monthly billing
            </button>
            <button
              type="button"
              className="relative ml-0.5 w-1/2 whitespace-nowrap rounded-md border border-transparent py-2 text-sm font-medium text-gray-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8"
            >
              Yearly billing
            </button>
          </div> */}
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm"
            >
              <div className="p-6">
                <h2 className="text-lg font-medium leading-6 text-[#038270]">
                  {tier.name}
                </h2>
                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-bold tracking-tight text-[#038270]">
                    ${tier.priceMonthly}
                  </span>{' '}
                  <span className="text-base font-medium text-gray-500">
                    /mo/seat
                  </span>
                </p>
                {/* <a
                  href={tier.href}
                  className="mt-8 block w-full rounded-md border border-[#038270] bg-[#038270] py-2 text-center text-sm font-semibold text-white hover:bg-[#024324]"
                >
                  Get {tier.name}
                </a> */}
              </div>
              <div className="px-6 pt-6 pb-8">
                <h3 className="text-sm font-medium text-gray-900">
                  Whats included
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {tier.includedFeatures.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <CheckIcon
                        className="h-5 w-5 flex-shrink-0 text-green-500"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
