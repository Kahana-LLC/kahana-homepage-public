import { CheckIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';


const tiers = [
  {
    name: 'Free',
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
    name: 'Grow',
    href: '#',
    priceMonthly: 9.99,
    description: 'For power users who want do more.',
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
Start building for free and only pay as you grow. To be completely transparent, Kahana earns 5% on all hub transactions. 
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
                FREE 🛠️
              </h2>
              <p className="mt-4 text-sm text-gray-500">
                All the tools you need to start building.
              </p>
              <p className="mt-8">
                <span className="text-4xl font-bold tracking-tight text-[#038270]">
                  $0
                </span>{' '}
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
                  <span className="text-sm text-gray-500">Upload .mp4, .mp3, .pdf, .png, .jpg & other files</span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-500">
                    Add Google Drive, Notion, and other links
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-500">
                    Charge one-time payments and subscriptions
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-500">Protection against unauthorized sharing</span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-500">Collaboration & Admin Tools</span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-500">Upload files up to 5 MB (per file)</span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-500">1 GB total cloud storage</span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-500">Build 3 hubs</span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-500">Community Support</span>
                </li>
              </ul>
              <a
                href="https://app.kahana.co/signup"
                className="mt-8 block w-full rounded-md border border-[#3B675E] bg-[#3B675E] py-2 text-center text-sm font-semibold text-white hover:bg-[#024324]"
              >
                Create an account
              </a>
            </div>
          </div>
          <div className="divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm">
            <div className="p-6">
              <h2 className="text-lg font-medium leading-6 text-[#038270]">
                GROWTH ⚡️
              </h2>
              <p className="mt-4 text-sm text-gray-500">
                Upload larger files and build unlimited hubs.
              </p>
              <p className="mt-8">
                <span className="text-4xl font-bold tracking-tight text-[#038270]">
                  $9.99
                </span>{' '}
                <span className="text-base font-medium text-gray-500">
                  /mo
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
                Everything in Free, plus
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                <li className="flex space-x-3">
                  <CheckIcon
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-500">Upload files up to 5 GB (per file)</span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-500">100 GB total cloud storage</span>
                </li>
                
                <li className="flex space-x-3">
                  <CheckIcon
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-500">Build unlimited hubs</span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-500">Live Chat Support</span>
                </li>
              </ul>
              <a
                href="https://app.kahana.co/billing"
                className="mt-8 block w-full rounded-md border border-[#3B675E] bg-[#3B675E] py-2 text-center text-sm font-semibold text-white hover:bg-[#024324]"
              >
                Manage billing
              </a>
            </div>
          </div>
          <div className="divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm">
            <div className="p-6">
              <h2 className="text-lg font-medium leading-6 text-[#038270]">
                ENTERPRISE 🚀
              </h2>
              <p className="mt-4 text-sm text-gray-500">
                Custom plans for groups and organizations.
              </p>
              <p className="mt-8">
                <span className="text-4xl font-bold tracking-tight text-[#038270]">
                  Custom billing
                </span>{' '}
                {/* <span className="text-base font-medium text-gray-500">
                  /mo/person
                </span> */}
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
                Everything in Growth, plus
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                <li className="flex space-x-3">
                  <CheckIcon
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-500">
                    Bulk pricing for multiple Growth accounts
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-500">
                    Flexible storage options
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-500">
                    Dedicated Support Team
                  </span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-500">
                    White-labeling & Custom branding
                  </span>
                </li>
        
              </ul>
    <Link href="/sales" legacyBehavior>
      <a
        className="mt-8 block w-full max-w-xs rounded-md border border-[#3B675E] bg-[#3B675E] py-2 text-center text-sm font-semibold text-white hover:bg-[#024324]"
      >
        Contact 
      </a>
    </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
