import Link from 'next/link';
import { getCloudinaryImageUrl } from '../utils/cloudinary-mapper';
import FadeInSection from './FadeInSection';

const tiers = [
  {
    name: 'Free (forever)',
    href: 'https://app.kahana.io/signup',
    priceMonthly: 0,
    description: 'Everything you need to get started',
    includedFeatures: [
      '3 hubs',
      'Monetize with Stripe',
      'Upload files up to 5 MB',
      'Upload up to 10 resources per hub',
    ],
    additionalLinkText: '',
    additionalLinkHref: '',
    buttonStyle: 'secondary',
  },
  {
    name: 'Growth',
    href: 'https://app.kahana.io/billing',
    priceMonthly: 9.99,
    description: 'For power users who want to do more.',
    includedFeatures: [
      'Unlimited hubs',
      'Live Chat Support',
      '100 GB cloud storage',
      'Upload files up to 5 GB',
      'Upload unlimited resources per hub',
    ],
    additionalLinkText: '',
    additionalLinkHref: '',
    buttonStyle: 'primary',
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
    buttonStyle: 'secondary',
  },
];

export default function Pricing() {
  return (
    <div className="bg-white">
      {/* Hero Section - match Oasis */}
      <section className="relative min-h-[30vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${getCloudinaryImageUrl('/images/desert-background-5.webp', { width: 1920, quality: 'auto:good' })})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 py-12">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-4"
            style={{ color: '#313A00' }}
          >
            Hubs Pricing
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4 mb-4">
            Flexible plans for creators and teams. Start for free and scale as you grow.
          </p>
        </div>
      </section>

      {/* Pricing Tiers - Oasis-style cards */}
      <FadeInSection>
        <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto md:items-stretch">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className="relative bg-white border-2 border-gray-200 rounded-2xl p-5 sm:p-6 lg:p-8 transition-all duration-300 hover:shadow-lg flex flex-col"
                >
                  {/* Fixed-height header so price + button align across cards */}
                  <div className="mb-4 min-h-[220px] flex flex-col">
                    <h3 className="text-base sm:text-lg font-semibold mb-3 text-gray-800">
                      {tier.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{tier.description}</p>
                    <div className="mb-4 flex items-baseline">
                      <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                        {tier.priceMonthly === 0 ? '$0' : `$${tier.priceMonthly}`}
                      </span>
                      {tier.name === 'Enterprise' ? (
                        <span className="text-xs sm:text-sm text-gray-600 ml-1">/mo/seat</span>
                      ) : (
                        tier.priceMonthly !== 0 && (
                          <span className="text-xs sm:text-sm text-gray-600 ml-1">/mo</span>
                        )
                      )}
                    </div>
                    <div className="mt-auto min-h-[44px] flex items-center">
                      {tier.href.startsWith('/') ? (
                        <Link
                          href={tier.href}
                          className={`btn-${tier.buttonStyle} w-full inline-flex items-center justify-center px-4 py-2.5 sm:py-3 text-sm sm:text-base font-normal rounded-full no-underline hover:no-underline focus:no-underline transition-all`}
                        >
                          Choose {tier.name.replace(' (forever)', '')}
                        </Link>
                      ) : (
                        <a
                          href={tier.href}
                          className={`btn-${tier.buttonStyle} w-full inline-flex items-center justify-center px-4 py-2.5 sm:py-3 text-sm sm:text-base font-normal rounded-full no-underline hover:no-underline focus:no-underline transition-all`}
                        >
                          Choose {tier.name.replace(' (forever)', '')}
                        </a>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-2 sm:space-y-3">
                    {tier.name === 'Free' && (
                      <li className="text-sm font-semibold mb-2 h-5 invisible" aria-hidden="true">Placeholder</li>
                    )}
                    {tier.name === 'Growth' && (
                      <li className="text-sm text-gray-600 font-semibold mb-2 h-5">Everything in Free, plus...</li>
                    )}
                    {tier.name === 'Enterprise' && (
                      <li className="text-sm text-gray-600 font-semibold mb-2 h-5">Everything in Growth, plus...</li>
                    )}
                    {tier.includedFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0"
                          style={{ color: '#495800' }}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span
                          className="text-xs sm:text-sm leading-relaxed text-gray-800"
                          dangerouslySetInnerHTML={{ __html: feature }}
                        />
                      </li>
                    ))}
                  </ul>

                  {tier.additionalLinkHref && (
                    <p className="mt-4 text-center">
                      <Link
                        href={tier.additionalLinkHref}
                        className="text-sm text-[#4A6200] no-underline hover:no-underline font-semibold"
                      >
                        {tier.additionalLinkText}
                      </Link>
                    </p>
                  )}
                </div>
              ))}
            </div>

            <p className="mt-12 text-center text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Prices are in $ USD. To be transparent, Kahana earns 5% whenever anyone pays to access any monetized hub.
            </p>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
}
