import React, { useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import SEO from '../components/SEO';
import FadeInSection from '../components/FadeInSection';
import { getCloudinaryImageUrl } from '../utils/cloudinary-mapper';

const pricingTiers = [
  {
    name: 'Free plan',
    tagline: 'Perfect for getting started',
    price: '$0',
    priceLabel: 'per month',
    features: [
      'Perfect for getting started',
      '2,000 credits included'
    ],
    creditNote: '',
    cta: 'Join waitlist',
    ctaLink: '/oasis-waitlist',
    buttonStyle: 'secondary'
  },
  {
    name: 'Zen plan',
    tagline: 'Ideal for regular use',
    price: '$20',
    priceLabel: 'per month',
    features: [
      'Ideal for regular use',
      '8,000 credits included',
      '$10 per additional 1,000 credits',
      'Priority support'
    ],
    creditNote: '',
    cta: 'Get instant access',
    ctaLink: '/oasis-auth?plan=zen',
    buttonStyle: 'primary',
    highlight: true
  },
  {
    name: 'Nirvana plan',
    tagline: 'Built for power users',
    price: '$250',
    priceLabel: 'per month',
    features: [
      'Built for power users',
      '50,000 credits included',
      '$10 per additional 1,000 credits',
      'Dedicated support'
    ],
    creditNote: '',
    cta: 'Get instant access',
    ctaLink: '/oasis-auth?plan=nirvana',
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
  ctaLink: '/oasis-waitlist'
};

const faqs = [
  {
    question: 'What platforms does Oasis support?',
    answer: 'Oasis is available across all major operating systems including Windows, macOS, and Linux.'
  },
  {
    question: 'How does Oasis integrate with my existing tools?',
    answer: 'Oasis connects with popular productivity platforms, cloud storage services, and business applications through secure APIs. Our integration framework supports custom connections, allowing you to sync data and automate workflows across your entire tech stack.'
  },
  {
    question: 'How is my data handled and protected?',
    answer: 'We implement enterprise-grade encryption for data in transit and at rest. Your workspace data remains private and is never used to train our AI models. All processing happens in secure, isolated environments with strict access controls and regular security audits.'
  },
  {
    question: 'How do credits work in Oasis?',
    answer: 'Credits are consumed when you use AI-powered features like content summarization, data extraction, automated workflows, and advanced analysis. Core workspace access and basic navigation never require credits. You can monitor your usage in real-time and purchase additional credits instantly when needed.'
  },
  {
    question: 'What does Oasis cost?',
    answer: 'Oasis offers flexible pricing starting with a free plan that includes 2,000 credits monthly. Paid plans range from $20/month for Zen users to $250/month for Nirvana power users. Team plans feature per-seat pricing starting at $40/month with custom options for larger organizations.'
  },
  {
    question: 'Can I change plans or cancel anytime?',
    answer: 'Yes, you have complete flexibility to upgrade, downgrade, or cancel your plan at any time. Changes take effect at your next billing cycle, and unused credits from your current plan will remain available until they expire according to your plan terms.'
  },
  {
    question: 'Where can I review the Terms and Conditions and Privacy Policy?',
    answer: (
      <>
        You can review our{' '}
        <Link href="/terms-and-conditions" className="text-[#4A6200] hover:underline font-semibold">
          Terms and Conditions
        </Link>
        {' '}and{' '}
        <Link href="/privacy-policy" className="text-[#4A6200] hover:underline font-semibold">
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
    description: 'Flexible pricing plans for Oasis AI-powered workspace. Choose from Free, Pro, Ultra, or Team plans to match your workflow needs.',
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
        name: 'Pro',
        price: '20',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock'
      },
      {
        '@type': 'Offer',
        name: 'Ultra',
        price: '250',
        priceCurrency: 'USD',
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
        url="https://kahana.co/oasis-pricing"
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
      <section className="relative min-h-[30vh] flex items-center justify-center overflow-hidden">
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
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 py-12">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight"
            style={{ color: '#313A00' }}
          >
            Pricing
          </h1>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <FadeInSection>
        <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <div
                  key={tier.name}
                  className="relative bg-white border-2 border-gray-200 rounded-2xl p-5 sm:p-6 lg:p-8 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="mb-4">
                    <h3 className="text-base sm:text-lg font-semibold mb-3 text-gray-800">
                      {tier.name}
                    </h3>
                    <div className="mb-6">
                      <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                        {tier.price}
                      </span>
                      {tier.priceLabel && (
                        <span className="text-xs sm:text-sm text-gray-600 ml-1">
                          {tier.priceLabel}
                        </span>
                      )}
                    </div>
                    <div className="mb-6">
                      <Link
                        href={tier.ctaLink}
                        className={`btn-${tier.buttonStyle} w-full inline-flex items-center justify-center px-4 py-2.5 sm:py-3 text-sm sm:text-base font-normal rounded-full no-underline hover:no-underline focus:no-underline transition-all`}
                      >
                        {tier.cta}
                      </Link>
                    </div>
                  </div>

                  <ul className="space-y-2 sm:space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg
                          className="w-3 h-3 mr-2 mt-0.5 sm:mt-1 flex-shrink-0"
                          style={{ color: '#495800' }}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 2L12 8L10 14L8 8L10 2Z" />
                        </svg>
                        <span className="text-xs sm:text-sm text-gray-800 leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Legal Links */}
            <div className="max-w-5xl mx-auto mt-6 sm:mt-8 text-center">
              <p className="text-xs sm:text-sm text-gray-600">
                By using Oasis, you agree to our{' '}
                <Link href="/terms-and-conditions" className="text-[#4A6200] hover:underline font-semibold">
                  Terms and Conditions
                </Link>
                {' '}and{' '}
                <Link href="/privacy-policy" className="text-[#4A6200] hover:underline font-semibold">
                  Privacy Policy
                </Link>
              </p>
            </div>

            {/* Existing User Card */}
            <div className="max-w-md mx-auto mt-8 sm:mt-10">
              <div className="relative bg-gradient-to-br from-[#F8FAF2] to-white border-2 border-gray-300 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-lg">
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-800">
                    Existing User ?
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed">
                    Access your customer dashboard
                  </p>
                  <Link
                    href="https://billing.stripe.com/p/login/bIYg16d6l3FqelieUU"
                    className="btn-secondary w-full inline-flex items-center justify-center px-4 py-2.5 sm:py-3 text-sm sm:text-base font-normal rounded-full no-underline hover:no-underline focus:no-underline transition-all"
                  >
                    Sign in to your Oasis Account
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </section>
      </FadeInSection>

      {/* How Credits Work Section */}
      <FadeInSection>
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAF2]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <div className="tracking-wider mb-3 sm:mb-4 font-semibold text-sm sm:text-base lg:text-lg capitalize" style={{ color: '#978455' }}>
                Understanding Credits
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4" style={{ color: '#313A00' }}>
                How Credits Work
              </h2>
            </div>

            <div className="space-y-3 sm:space-y-4 text-left max-w-3xl mx-auto">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Accessing your Oasis workspace and navigating through your content is completely free. No credits required. Your workspace, files, and basic organizational tools are always available without any usage limits.
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Credits are used when you activate AI-powered features that require processing power. This includes generating intelligent summaries, extracting structured data from documents, automating complex workflows, performing advanced content analysis, and running custom AI-assisted operations.
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                You maintain full control over your credit usage with real-time monitoring and instant top-up options. Additional credits are available for purchase at any time to ensure your productivity never gets interrupted.
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

      {/* CTA Section */}
      <FadeInSection>
        <section 
          className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-12 sm:py-16 md:py-20 lg:py-28 mb-0 bg-[#F8FAF2]"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
              Need More Than These Plans?
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed font-bold" style={{ color: '#313A00' }}>
              For enterprises with larger teams, custom requirements, or advanced security needs, we offer tailored solutions designed to scale with your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Link href="/schedule-demo" className="btn-primary inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-bold no-underline hover:no-underline focus:no-underline w-full sm:w-auto">
                Schedule a Demo
              </Link>
              <Link href="/contact" className="btn-secondary inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-bold no-underline hover:no-underline focus:no-underline w-full sm:w-auto">
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </FadeInSection>
    </>
  );
}
