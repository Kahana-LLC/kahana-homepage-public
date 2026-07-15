import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../components/SEO';
import FadeInSection from '../components/FadeInSection';
import SharedCTA from '../components/SharedCTA';
import OasisPlatformLogos from '../components/OasisPlatformLogos';
import { getCloudinaryImageUrl } from '../utils/cloudinary-mapper';

const BILLING_PORTAL_URL = 'https://billing.stripe.com/p/login/bIYg16d6l3FqelieUU';

const pricingTiers = [
  {
    name: 'Free plan',
    tagline: 'Perfect for getting started',
    price: '$0',
    priceLabel: 'per month',
    features: [
      '100,000 tokens per day, plus bonuses',
      'No data collected without your permission',
      'Import data from your other browsers',
      'AI assistant built into the core',
      'Built-in ad-blocking',
    ],
    creditNote: 'No credit card required',
    cta: 'Install on Mac',
    ctaLink: '/installations',
    buttonStyle: 'primary'
  },
  {
    name: 'Zen plan',
    tagline: 'Ideal for regular use',
    price: '$20',
    priceLabel: 'per month',
    features: [
      '1,000,000 tokens per day',
      'Everything in Free',
      'Priority support'
    ],
    creditNote: '',
    cta: 'Install on Mac',
    ctaLink: '/oasis-auth?plan=zen',
    buttonStyle: 'primary',
    highlight: true
  },
  {
    name: 'Enterprise',
    tagline: 'For organizations at scale',
    price: 'Custom',
    priceLabel: '',
    features: [
      'Volume licensing & centralized billing',
      'SSO, security & compliance options',
      'Dedicated onboarding & success',
      'Custom usage limits & SLAs',
      'Org-wide priority support'
    ],
    creditNote: '',
    cta: 'Schedule a demo',
    ctaLink: '/contact',
    buttonStyle: 'primary'
  }
];

const teamPlan = {
  name: 'Team plan',
  title: 'Usage based',
  features: [
    'Unified billing',
    'Pro: $40/seat/mo – 8,000 credits per seat',
    'Ultra: $250/seat/mo – 50,000 credits per seat',
    'Overage billed at $10 per 1,000 credits',
    'Custom usage limits',
    'Dedicated onboarding'
  ],
  cta: 'Join waitlist',
  ctaLink: '/oasis-pricing'
};

const faqs = [
  {
    question: 'What platforms does Oasis support?',
    answer: (
      <>
        Oasis is currently available for Mac (Apple Silicon and Intel). Windows, Linux, and Chromium versions are in
        development.{' '}
        <Link href="/contact" className="text-[#4A6200] no-underline hover:no-underline font-semibold">
          Get early access
        </Link>{' '}
        for early access.
      </>
    ),
  },
  {
    question: 'How do AI tokens work in Oasis?',
    answer: 'Tokens are consumed when you use the AI assistant for chat, actions like opening tabs, searches, organizing content, and automated workflows. Core workspace access and basic navigation do not use tokens. You can monitor your usage in real time and upgrade your plan when needed.'
  },
  {
    question: 'What does Oasis cost?',
    answer: 'Oasis offers flexible pricing starting with a free plan that includes 100,000 tokens per day. The Zen plan is $20/month with 1,000,000 tokens per day. Enterprise offers custom pricing, volume licensing, and advanced requirements; contact us via Schedule a demo. Team plans feature per-seat pricing starting at $40/month with custom options for larger organizations.'
  },
  {
    question: 'Can I change plans or cancel anytime?',
    answer: 'Yes, you have complete flexibility to upgrade, downgrade, or cancel your plan at any time. Changes take effect at your next billing cycle. Daily token allowances reset each day; billing changes apply on your next renewal.'
  },
  {
    question: 'Where can I review the Terms and Conditions and Privacy Policy?',
    answer: (
      <>
        You can review our{' '}
        <Link href="/terms-and-conditions" className="text-[#4A6200] no-underline hover:no-underline font-semibold">
          Terms and Conditions
        </Link>
        {' '}and{' '}
        <Link href="/privacy-policy" className="text-[#4A6200] no-underline hover:no-underline font-semibold">
          Privacy Policy
        </Link>
        {' '}at any time. These documents outline how we handle your data, your rights as a user, and the terms of service for using Oasis.
      </>
    )
  }
];

export default function OasisPricing() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pricingSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Oasis Pricing',
    description: 'Flexible pricing plans for Oasis AI-powered workspace. Choose from Free, Zen, Enterprise, or Team plans to match your workflow needs.',
    offers: [
      {
        '@type': 'Offer',
        name: 'Free',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock'
      },
      {
        '@type': 'Offer',
        name: 'Zen',
        price: '20',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock'
      },
      {
        '@type': 'Offer',
        name: 'Enterprise',
        description: 'Custom pricing. Contact us for a quote.',
        priceCurrency: 'USD',
        url: 'https://kahana.io/contact',
        availability: 'https://schema.org/InStock'
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Oasis Pricing - Choose Your Plan"
        description="Select the perfect Oasis plan for your workflow. From free exploration to enterprise-scale solutions, find the right fit for your AI-powered workspace needs."
        image={getCloudinaryImageUrl('/assets/oasis-browser-preview.png', { width: 1200, quality: 'auto:good' })}
        url="https://kahana.io/oasis-pricing"
        type="website"
        schema={pricingSchema}
      />
      <Head>
        <title>Oasis Pricing | Kahana</title>
        <meta
          name="description"
          content="Select the perfect Oasis plan for your workflow. From free exploration to enterprise-scale solutions, find the right fit for your AI-powered workspace needs."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative overflow-hidden pb-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${getCloudinaryImageUrl('/images/desert-background-5.webp', { width: 1920, quality: 'auto:good' })})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 pt-6 sm:pt-8 pb-4 sm:pb-5">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-2"
            style={{ color: '#313A00' }}
          >
            Oasis Pricing
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-xs sm:text-sm text-gray-600">
            By using Oasis, you agree to our{' '}
            <Link href="/terms-and-conditions" className="text-[#4A6200] no-underline hover:no-underline font-semibold">
              Terms and Conditions
            </Link>
            {' '}and{' '}
            <Link href="/privacy-policy" className="text-[#4A6200] no-underline hover:no-underline font-semibold">
              Privacy Policy
            </Link>
          </p>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <FadeInSection>
        <section className="pt-2 pb-6 sm:pt-3 sm:pb-8 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 md:items-stretch gap-4 lg:gap-6 max-w-5xl mx-auto">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.name}
                  className="relative flex flex-col h-full bg-white border-2 border-gray-200 rounded-2xl p-4 sm:p-5 lg:p-6 transition-all duration-300 hover:shadow-lg"
                >
                  {tier.name === 'Zen plan' && (
                    <span
                      className="absolute right-3 top-3 z-10 inline-flex items-center rounded-md bg-[#EDF5F8] px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-wide text-[#1D3E48] sm:right-4 sm:top-4"
                      title="Public beta"
                    >
                      Beta
                    </span>
                  )}
                  {tier.creditNote && (
                    <span
                      className="absolute right-3 top-3 z-10 inline-flex items-center rounded-md bg-[#EDF5F8] px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-wide text-[#1D3E48] sm:right-4 sm:top-4"
                      title={tier.creditNote}
                    >
                      {tier.creditNote}
                    </span>
                  )}
                  <div className="mb-3">
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-800">
                      {tier.name}
                    </h3>
                    <div className="mb-4">
                      <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                        {tier.price}
                      </span>
                      {tier.priceLabel && (
                        <span className="text-xs sm:text-sm text-gray-600 ml-1">
                          {tier.priceLabel}
                        </span>
                      )}
                    </div>
                    <div className="mb-4">
                      <Link
                        href={tier.ctaLink}
                        className={`btn-${tier.buttonStyle} w-full inline-flex items-center justify-center px-4 py-2.5 sm:py-3 text-sm sm:text-base font-normal rounded-full no-underline hover:no-underline focus:no-underline transition-all`}
                      >
                        {tier.cta}
                      </Link>
                    </div>
                  </div>

                  <ul className="space-y-1.5 sm:space-y-2">
                    {tier.features.map((feature, featureIndex) => {
                      const isMacOnly = typeof feature === 'string' && feature.startsWith('Available for Mac');
                      const accentColor = isMacOnly ? '#489CB5' : '#495800';

                      return (
                        <li
                          key={featureIndex}
                          className={`flex items-start ${isMacOnly ? 'px-3 py-2 rounded-lg -mx-3' : ''}`}
                          style={isMacOnly ? { backgroundColor: '#EDF5F8', border: '1px solid #489CB5' } : {}}
                        >
                          <svg
                            className="w-3 h-3 mr-2 mt-0.5 sm:mt-1 flex-shrink-0"
                            style={{ color: accentColor }}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 2L12 8L10 14L8 8L10 2Z" />
                          </svg>
                          <span
                            className={`text-xs sm:text-sm leading-relaxed ${isMacOnly ? 'font-semibold' : 'text-gray-800'}`}
                            style={isMacOnly ? { color: '#1D3E48' } : {}}
                          >
                            {feature}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>

            {/* Non-Mac waitlist */}
            <div className="max-w-5xl mx-auto mt-5 sm:mt-6 w-full">
              <div className="relative bg-gradient-to-br from-[#F8FAF2] to-white border-2 border-gray-300 rounded-2xl p-5 sm:p-6 lg:p-8 transition-all duration-300 hover:shadow-lg">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                  <div className="text-center sm:text-left sm:flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">
                      Windows, Linux, and Chromium access
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      Get early access to Windows, Linux, and Chromium versions of Oasis.
                    </p>
                  </div>
                  <OasisPlatformLogos
                    className="sm:shrink-0"
                    labelClassName="text-xs font-medium text-gray-700"
                  />
                  <Link
                    href="/contact"
                    className="btn-primary w-full sm:w-auto shrink-0 inline-flex items-center justify-center px-6 py-2.5 sm:py-3 text-sm sm:text-base font-normal rounded-full no-underline hover:no-underline focus:no-underline transition-all"
                  >
                    Get early access
                  </Link>
                </div>
              </div>
            </div>

            {/* Existing Customer */}
            <div className="max-w-md mx-auto mt-5 sm:mt-6">
              <div className="relative bg-gradient-to-br from-[#F8FAF2] to-white border-2 border-gray-300 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:shadow-lg">
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">
                    Existing Customer?
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
                    Manage your billing, subscription, and payment methods
                  </p>
                  <Link
                    href={BILLING_PORTAL_URL}
                    className="btn-secondary w-full inline-flex items-center justify-center px-4 py-2.5 sm:py-3 text-sm sm:text-base font-normal rounded-full no-underline hover:no-underline focus:no-underline transition-all"
                  >
                    Access Billing Portal
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </section>
      </FadeInSection>

      {/* How AI tokens work */}
      <FadeInSection>
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAF2]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <div className="tracking-wider mb-3 sm:mb-4 font-semibold text-sm sm:text-base lg:text-lg capitalize" style={{ color: '#978455' }}>
                Understanding AI tokens
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4" style={{ color: '#313A00' }}>
                How AI tokens work
              </h2>
            </div>

            <div className="space-y-3 sm:space-y-4 text-left max-w-3xl mx-auto">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Accessing your Oasis workspace and navigating through your content is completely free. No tokens required. Your workspace, files, and basic organizational tools are always available without usage limits.
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Tokens are used when you interact with the AI assistant—for chat, opening tabs, searches, organizing content, creating tab groups, and running automated workflows. Usage counts toward your plan&apos;s daily token allowance.
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                You maintain full control with real-time monitoring. The Free plan includes 100,000 tokens per day; Zen includes 1,000,000 tokens per day. Allowances reset daily. Upgrade anytime if you need more capacity.
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* FAQ Section */}
      <FadeInSection>
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              {/* Left Side - FAQ Heading and CTA */}
              <div className="mb-8 lg:mb-0">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6" style={{ color: '#313A00' }}>
                  FAQ
                </h2>
                <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                  Have questions? We'd love to hear from you.
                </p>
                <Link 
                  href="/contact" 
                  className="btn-primary inline-block px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold no-underline hover:no-underline focus:no-underline"
                >
                  Get in touch
                </Link>
              </div>

              {/* Right Side - Questions List */}
              <div>
                <div className="space-y-3">
                  {faqs.map((faq, index) => (
                    <div key={index}>
                      <button
                        onClick={() => toggleFaq(index)}
                        className="btn-secondary w-full text-left flex justify-between items-center py-2.5 sm:py-3 px-3 sm:px-4 rounded-full focus:outline-none"
                        aria-expanded={openFaq === index}
                      >
                        <h3 className="text-sm sm:text-base font-bold pr-3 sm:pr-4 flex-1">
                          {faq.question}
                        </h3>
                        <span className="text-lg sm:text-xl flex-shrink-0 font-bold">
                          {openFaq === index ? '−' : '+'}
                        </span>
                      </button>
                      {openFaq === index && (
                        <div className="pt-3 sm:pt-4 pl-3 sm:pl-4">
                          <div className="text-sm sm:text-base text-gray-700 leading-relaxed">
                            {faq.answer}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        </section>
      </FadeInSection>

      {/* CTA Section — gradient card + white pills (SharedCTA) */}
      <FadeInSection>
        <SharedCTA
          title="Need More Than These Plans?"
          description="For enterprises with larger teams, custom requirements, or advanced security needs, we offer tailored solutions designed to scale with your organization."
          primaryHref="/contact"
          primaryLabel="Schedule a Demo"
          secondaryHref="/contact"
          secondaryLabel="Get in Touch"
        />
      </FadeInSection>
    </>
  );
}
