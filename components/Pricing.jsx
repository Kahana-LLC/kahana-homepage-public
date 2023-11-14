import { CheckIcon } from '@heroicons/react/20/solid';

const tiers = [
  {
    name: 'Creator',
    href: '#',
    priceMonthly: 0,
    description: 'Get all the basics to monetize your expertise.',
    includedFeatures: [
      'Get subscription revenue',
      'Real-time collaboration',
      'Admin tools',
      'Sync across devices',
      '2 hubs',
      '1 GB storage',
    ],
  },
  {
    name: 'Expert',
    href: '#',
    priceMonthly: 9.99,
    description: 'For power users who want unlimited revenue streams.',
    includedFeatures: [
      'Monetize your hubs.',
      'Number of hubs - Unlimited',
      'Storage - 5 GB',
    ],
  },
  {
    name: 'Team Collaboration',
    href: '#',
    priceMonthly: 19.99,
    description: 'Create, collaborate, and monetize with your team.',
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
    description: 'Advanced controls & support to run your entire organization.',
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
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 text-center">
            Pricing Plans
          </h1>
          <p className="mt-5 text-xl text-gray-500 text-center">
            We only win when you win - it’s completely free to get started. Kahana takes a 5% transaction fee every time someone pays to access your hub. For example, if you set a $10 price point for your hub and someone pays for access, Kahana will earn $0.50.
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
        <div className="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-3">
          {/* Start adding different pricing plans from here  */}
          <div className="divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm">
            <div className="p-6">
              <h2 className="text-lg font-medium leading-6 text-[#038270]">
                Creator (Free Forever)
              </h2>
              <p className="mt-4 text-sm text-gray-500">
                Get all the basics to monetize your expertise.
              </p>
              <p className="mt-8">
                <span className="text-4xl font-bold tracking-tight text-[#038270]">
                  $0
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
                What&apos;s included
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                <li className="flex space-x-3">
                  <CheckIcon
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-500">2 hubs</span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-500">
                    5% transaction fee
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-500">
                    Real-time collaboration
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-500">Admin tools</span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-500">
                    Sync across devices
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-500">1 GB storage</span>
                </li>
              </ul>
              <a
                href="https://app.kahana.co/signup"
                className="mt-8 block w-full rounded-md border border-[#3B675E] bg-[#3B675E] py-2 text-center text-sm font-semibold text-white hover:bg-[#024324]"
              >
                Sign up for free
              </a>
            </div>
          </div>
          <div className="divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm">
            <div className="p-6">
              <h2 className="text-lg font-medium leading-6 text-[#038270]">
                Expert
              </h2>
              <p className="mt-4 text-sm text-gray-500">
                For power users who want unlimited revenue streams.
              </p>
              <p className="mt-8">
                <span className="text-4xl font-bold tracking-tight text-[#038270]">
                  $29.99
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
                Everything in Creator, plus
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                <li className="flex space-x-3">
                  <CheckIcon
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-500">Unlimited hubs</span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-500">No transaction fee</span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-500">Remove ads</span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-500">AI tools</span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-500">Custom branding</span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-500">5 GB storage</span>
                </li>
              </ul>
              <a
                href="https://app.kahana.co/signup"
                className="mt-8 block w-full rounded-md border border-[#3B675E] bg-[#3B675E] py-2 text-center text-sm font-semibold text-white hover:bg-[#024324]"
              >
                Buy now
              </a>
            </div>
          </div>
          <div className="divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm">
            <div className="p-6">
              <h2 className="text-lg font-medium leading-6 text-[#038270]">
                Enterprise
              </h2>
              <p className="mt-4 text-sm text-gray-500">
                Advanced controls & support to monetize your organization&apos;s collective knowledge.
              </p>
              <p className="mt-8">
                <span className="text-4xl font-bold tracking-tight text-[#038270]">
                  $99.99
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
                Everything in Expert, plus
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                <li className="flex space-x-3">
                  <CheckIcon
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-500">
                    Advanced permissions & controls
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-500">
                    SAML, Single-Sign On (SSO)
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-500">
                    White glove 24/7 support
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-500">
                    Custom & advanced reporting
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-500">
                    Time & usage reporting
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-500">
                    Custom integrations
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-500">
                    100 GB storage
                  </span>
                </li>
              </ul>
              <a
                href="https://7hkdcfzbmr0.typeform.com/to/ZYLHazEf"
                className="mt-8 block w-full rounded-md border border-[#3B675E] bg-[#3B675E] py-2 text-center text-sm font-semibold text-white hover:bg-[#024324]"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
