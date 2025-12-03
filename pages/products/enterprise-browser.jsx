import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import SEO from '../../components/SEO';

const securityFeatures = [
  {
    title: 'Enhanced Content Security Policy',
    description: 'Strict CSP rules restricting resource loading to trusted sources.',
    details: [
      'Default-src limited to HTTPS and same-origin',
      'Protection against XSS attacks',
      'Frame-ancestors protection',
      'Form-action restrictions'
    ]
  },
  {
    title: 'Advanced Certificate Management',
    description: 'Robust SSL/TLS certificate validation and control.',
    details: [
      'Detailed certificate information',
      'Granular control over acceptance',
      'User-friendly notifications',
      'Certificate validation'
    ]
  },
  {
    title: 'Comprehensive Permission Management',
    description: 'Granular controls for sensitive browser features.',
    details: [
      'Default deny policy',
      'Clear visual indicators',
      'Persistent permission storage',
      'Origin-based controls'
    ]
  },
  {
    title: 'Mixed Content Protection',
    description: 'Automatic HTTPS enforcement and protection.',
    details: [
      'HTTP to HTTPS upgrade',
      'Mixed content blocking',
      'Strict referrer policy',
      'Secure connections'
    ]
  }
];

const browsingFeatures = [
  {
    title: 'Hub-Based Organization',
    description: 'Organize content in customizable hubs for better workflow.',
    details: [
      'Customizable hubs',
      'Dashboard view',
      'Easy navigation',
      'Real-time collaboration'
    ]
  },
  {
    title: 'Multi-View Capabilities',
    description: 'View multiple sites side-by-side for enhanced productivity.',
    details: [
      'Triple view support',
      'Split-screen viewing',
      'No extensions needed',
      'Flexible layouts'
    ]
  },
  {
    title: 'Smart Navigation',
    description: 'Intuitive navigation features for seamless browsing.',
    details: [
      'Back/Forward navigation',
      'Refresh functionality',
      'Home button access',
      'Multiple window support'
    ]
  },
  {
    title: 'AI-Powered Assistant',
    description: 'Natural language interaction for enhanced productivity.',
    details: [
      'Natural language commands',
      'Content organization help',
      'Integrated search',
      'Smart suggestions'
    ]
  }
];

const enterpriseBenefits = [
  {
    title: 'Compliance Ready',
    description: 'Built-in security features align with compliance requirements.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    stat: '100%',
    statLabel: 'Compliance Coverage'
  },
  {
    title: 'Reduced Attack Surface',
    description: 'Minimal exposed APIs and restricted resource loading.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    stat: '90%',
    statLabel: 'Attack Surface Reduction'
  },
  {
    title: 'User Control',
    description: 'Clear permission management and security controls.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    stat: '100%',
    statLabel: 'Granular Control'
  },
  {
    title: 'Performance Optimization',
    description: 'Efficient security implementation with minimal impact.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    stat: '99.9%',
    statLabel: 'Uptime'
  }
];

const technicalFeatures = [
  {
    title: 'Modern Architecture',
    description: 'Built with cutting-edge technology for reliability.',
    details: [
      'Electron-based',
      'Chromium-powered',
      'TypeScript implementation',
      'Modular design'
    ]
  },
  {
    title: 'Automatic Updates',
    description: 'Seamless update system for continuous improvement.',
    details: [
      'Built-in updates',
      'Version management',
      'Release notes',
      'Seamless process'
    ]
  },
  {
    title: 'Data Management',
    description: 'Secure handling of sensitive data and cookies.',
    details: [
      'Encrypted storage',
      'Secure cookie handling',
      'Origin isolation',
      'Theft protection'
    ]
  },
  {
    title: 'User Interface',
    description: 'Modern, responsive design for optimal experience.',
    details: [
      'Minimalist design',
      'Responsive layout',
      'Custom toolbar',
      'Smooth animations'
    ]
  }
];

export default function EnterpriseBrowser() {
  // Enterprise browser specific schema
  const browserSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Kahana Oasis - Enterprise Browser',
    description: 'A secure, modern browser designed to help teams stay organized and focused. Features enterprise-grade security, organization tools, and collaboration features for enhanced productivity.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Cross-platform',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock'
    },
    featureList: [
      'Enhanced Content Security Policy',
      'Advanced Certificate Management',
      'Comprehensive Permission Management',
      'Mixed Content Protection',
      'Hub-Based Organization',
      'Multi-View Capabilities',
      'Smart Navigation',
      'AI-Powered Assistant'
    ],
    screenshot: 'https://kahana.co/assets/oasis-browser-preview.png',
    softwareVersion: '1.0',
    publisher: {
      '@type': 'Organization',
      name: 'Kahana',
      url: 'https://kahana.co',
      description: 'Kahana develops enterprise-grade productivity tools focused on organization, security, and collaboration'
    }
  };

  return (
    <>
      <SEO 
        title="Oasis - Enterprise Browser for Secure Organization & Productivity"
        description="Stay organized and focused with Kahana's Oasis Enterprise Browser. Features enterprise-grade security, organization tools, and collaboration features for enhanced productivity."
        image="https://kahana.co/assets/oasis-browser-preview.png"
        url="https://kahana.co/products/enterprise-browser"
        type="product"
        schema={browserSchema}
      />
      <Head>
        <title>Oasis - Enterprise Browser | Kahana</title>
        <meta
          name="description"
          content="Kahana's Oasis Enterprise Browser helps teams stay organized and focused while maintaining enterprise-grade security. Features include hub-based organization, multi-view capabilities, and AI-powered assistance."
        />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-KQHFL9605P"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KQHFL9605P');
        `}
      </Script>

      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold leading-7 text-[#728552] mb-3">Enterprise Browser</h2>
            <h1 className="text-5xl font-bold text-[#4A5745] mb-6">
              Oasis
            </h1>
            <p className="text-xl text-[#4A5745] max-w-3xl mx-auto mb-8">
              A secure, modern browser designed for enterprise environments, featuring enhanced security controls, collaboration tools, and a seamless user experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/schedule-demo" className="btn-primary inline-flex items-center justify-center px-6 py-3 text-base no-underline hover:no-underline focus:no-underline">
                  Schedule Demo
              </Link>
              <Link href="/enterprise-buyer-guide" className="btn-secondary inline-flex items-center justify-center px-6 py-3 text-base no-underline hover:no-underline focus:no-underline">
                  Read Buyer's Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#4A5745] text-center mb-12">
            Enterprise-Grade Security
          </h2>
          <p className="text-[#4A5745] text-center mb-8 max-w-3xl mx-auto">
            Discover how Oasis delivers <Link href="/blog/enterprise-vs-consumer-browsers-securing-modern-workforce-part-1" className="text-[#728552] hover:text-[#728552]-dark">enterprise-grade security</Link> through built-in protections and centralized management. Our security-first approach helps organizations <Link href="/blog/data-leaks-in-2025-prevention-strategies-for-enterprises" className="text-[#728552] hover:text-[#728552]-dark">prevent data leaks</Link> and maintain compliance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 rounded-xl overflow-hidden p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-kahana-primary via-kahana-secondary-300 to-kahana-accent-sky rounded-full flex items-center justify-center mr-3 shadow-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-[#4A5745]">{feature.title}</h3>
                </div>
                <p className="text-[#4A5745] text-sm mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, dIndex) => (
                    <li key={dIndex} className="flex items-center text-[#4A5745] text-sm">
                      <svg className="w-4 h-4 mr-2 text-[#728552]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Browsing Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#4A5745] text-center mb-12">
            Modern Browsing Experience
          </h2>
          <p className="text-[#4A5745] text-center mb-8 max-w-3xl mx-auto">
            Experience a new way of working with <Link href="/blog/oasis-browser-thinks-in-projects-not-tabs" className="text-[#728552] hover:text-[#728552]-dark">project-based organization</Link> and enhanced productivity features. Learn how Oasis is <Link href="/blog/enterprise-vs-consumer-browsers-productivity-management-modern-workplace-part-2" className="text-[#728552] hover:text-[#728552]-dark">transforming workplace productivity</Link>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {browsingFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 rounded-xl overflow-hidden p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-kahana-primary via-kahana-secondary-300 to-kahana-accent-sky rounded-full flex items-center justify-center mr-3 shadow-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-[#4A5745]">{feature.title}</h3>
                </div>
                <p className="text-[#4A5745] text-sm mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, dIndex) => (
                    <li key={dIndex} className="flex items-center text-[#4A5745] text-sm">
                      <svg className="w-4 h-4 mr-2 text-[#728552]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Benefits Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#4A5745] text-center mb-12">
            Enterprise Benefits
          </h2>
          <p className="text-[#4A5745] text-center mb-8 max-w-3xl mx-auto">
            See how organizations are <Link href="/blog/byod-zero-trust-rise-enterprise-browser" className="text-[#728552] hover:text-[#728552]-dark">implementing zero trust</Link> and <Link href="/blog/what-is-enterprise-browser-2025" className="text-[#728552] hover:text-[#728552]-dark">transforming their security posture</Link> with Oasis.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {enterpriseBenefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 rounded-xl overflow-hidden p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-kahana-primary via-kahana-secondary-300 to-kahana-accent-sky rounded-full flex items-center justify-center mr-3 shadow-md">
                    <div className="text-white">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-[#4A5745]">
                    {benefit.title}
                  </h3>
                </div>
                <div className="mb-4">
                  <div className="text-2xl font-bold text-[#728552] mb-1">
                    {benefit.stat}
                  </div>
                  <div className="text-sm text-[#4A5745]">
                    {benefit.statLabel}
                  </div>
                </div>
                <p className="text-[#4A5745] text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#4A5745] text-center mb-12">
            Technical Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 rounded-xl overflow-hidden p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-kahana-primary via-kahana-secondary-300 to-kahana-accent-sky rounded-full flex items-center justify-center mr-3 shadow-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-[#4A5745]">{feature.title}</h3>
                </div>
                <p className="text-[#4A5745] text-sm mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, dIndex) => (
                    <li key={dIndex} className="flex items-center text-[#4A5745] text-sm">
                      <svg className="w-4 h-4 mr-2 text-[#728552]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#788B59] to-[#728552] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6" >
            Ready to Transform Your Enterprise Browsing?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a demo to see how Oasis can enhance security, improve collaboration, and streamline your workflow.
          </p>
          <Link href="/schedule-demo" className="btn-primary inline-flex items-center justify-center px-6 py-3 text-base no-underline hover:no-underline focus:no-underline">
              Schedule Demo
          </Link>
        </div>
      </section>
    </>
  );
} 