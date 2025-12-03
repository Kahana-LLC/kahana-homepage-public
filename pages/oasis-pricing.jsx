import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import SEO from '../components/SEO';
import FadeInSection from '../components/FadeInSection';

const pricingTiers = [
  {
    name: 'Free Agentic Browser',
    description: 'Perfect for individuals and small teams',
    price: '$0',
    priceLabel: 'per month',
    features: [
      'Smart workspace organization',
      'AI-powered productivity assistant',
      'Advanced tab management',
      'Seamless multi-tasking',
      'Personal hub organization',
      'Multi-tab management',
      'Smart navigation',
      'AI-powered assistant'
    ],
    cta: 'Get Started',
    ctaLink: '/products/free-agentic-browser'
  },
  {
    name: 'Enterprise Browser',
    description: 'For organizations requiring enterprise-grade security',
    price: 'Custom',
    priceLabel: 'Contact Sales',
    features: [
      'Everything in Free Agentic Browser',
      'Enterprise-grade security & compliance',
      'SSO (SAML/OIDC) integration',
      'DLP controls & data protection',
      'Centralized administration',
      'Audit logging & monitoring',
      'Advanced threat protection',
      'Dedicated support & onboarding'
    ],
    cta: 'Schedule a Demo',
    ctaLink: '/schedule-demo'
  }
];

export default function OasisPricing() {
  const pricingSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Oasis Browser Pricing',
    description: 'Flexible pricing plans for Oasis Browser - Free Agentic Browser for individuals and Enterprise Browser for organizations.',
    offers: [
      {
        '@type': 'Offer',
        name: 'Free Agentic Browser',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock'
      },
      {
        '@type': 'Offer',
        name: 'Enterprise Browser',
        price: 'Custom',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock'
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Oasis Browser Pricing - Free & Enterprise Plans"
        description="Explore Oasis Browser pricing plans. Free Agentic Browser for individuals and Enterprise Browser for organizations requiring advanced security and compliance."
        image="https://kahana.co/assets/oasis-browser-preview.png"
        url="https://kahana.co/oasis-pricing"
        type="website"
        schema={pricingSchema}
      />
      <Head>
        <title>Oasis Browser Pricing | Kahana</title>
        <meta
          name="description"
          content="Explore Oasis Browser pricing plans. Free Agentic Browser for individuals and Enterprise Browser for organizations requiring advanced security and compliance."
        />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-KQHFL9605P"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KQHFL9605P');
          `,
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/desert-background-5.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 py-20">
          <div className="tracking-wider mb-4 font-semibold text-base lg:text-lg capitalize" style={{ color: '#978455' }}>
            Pricing
          </div>
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-8 leading-[1.1] tracking-tight"
            style={{ color: '#313A00' }}
          >
            Choose Your Oasis
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto leading-relaxed font-medium mb-10" style={{ color: '#313A00' }}>
            From free productivity tools to enterprise-grade security, find the perfect plan for your needs.
          </p>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <FadeInSection>
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <div
                  key={tier.name}
                  className="relative bg-white border-2 border-gray-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:border-[#4A6200]/30"
                >
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-3" style={{ color: '#495800' }}>
                      {tier.name}
                    </h3>
                    <div className="mb-4">
                      <span className="text-5xl font-extrabold" style={{ color: '#495800' }}>
                        {tier.price}
                      </span>
                      {tier.priceLabel && (
                        <span className="block text-base mt-2" style={{ color: '#495800' }}>
                          {tier.priceLabel}
                        </span>
                      )}
                    </div>
                    <p className="text-sm mb-6" style={{ color: '#495800' }}>
                      {tier.description}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8 text-left">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg
                          className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-[#4A6200]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={tier.ctaLink}
                    className="block w-full text-center py-3 px-6 rounded-full font-semibold text-base transition-all duration-200 btn-primary no-underline hover:no-underline focus:no-underline"
                  >
                    {tier.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Comparison Section */}
      <FadeInSection>
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAF2]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="tracking-wider mb-4 font-semibold text-base lg:text-lg capitalize" style={{ color: '#978455' }}>
                Compare Plans
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: '#313A00' }}>
                Which Plan is Right for You?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Both plans include our core productivity features. Enterprise adds security, compliance, and administrative controls.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#F8FAF2] border-b-2 border-gray-200">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-[#313A00]">Feature</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-[#313A00]">Free Agentic Browser</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-[#313A00]">Enterprise Browser</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-700 font-medium">AI-Powered Assistant</td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-5 h-5 text-[#4A6200] mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-5 h-5 text-[#4A6200] mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-700 font-medium">Smart Workspace Organization</td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-5 h-5 text-[#4A6200] mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-5 h-5 text-[#4A6200] mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-700 font-medium">SSO Integration</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-gray-400">—</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-5 h-5 text-[#4A6200] mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-700 font-medium">DLP Controls</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-gray-400">—</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-5 h-5 text-[#4A6200] mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-700 font-medium">Centralized Administration</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-gray-400">—</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-5 h-5 text-[#4A6200] mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-700 font-medium">Audit Logging</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-gray-400">—</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-5 h-5 text-[#4A6200] mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-700 font-medium">Dedicated Support</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-gray-400">Community</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-5 h-5 text-[#4A6200] mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* CTA Section */}
      <FadeInSection>
        <section 
          className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-20 md:py-28 mb-0"
          style={{
            backgroundImage: 'url(/images/desert-background-5.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-white/60"></div>
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
              Ready to Transform Your Enterprise Browsing Experience?
            </h2>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed font-bold" style={{ color: '#313A00' }}>
              See Oasis in action and discover how it can revolutionize your organization's productivity and security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/schedule-demo" className="btn-primary inline-flex items-center justify-center px-10 py-4 text-lg font-bold no-underline hover:no-underline focus:no-underline">
                Schedule a Demo
              </Link>
              <Link href="/contact" className="btn-secondary inline-flex items-center justify-center px-10 py-4 text-lg font-bold no-underline hover:no-underline focus:no-underline">
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </FadeInSection>
    </>
  );
}

