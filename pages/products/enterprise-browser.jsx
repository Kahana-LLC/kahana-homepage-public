import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import SEO from '../../components/SEO';
import FadeInSection from '../../components/FadeInSection';

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
    stat: '100%',
    statLabel: 'Compliance Coverage'
  },
  {
    title: 'Reduced Attack Surface',
    description: 'Minimal exposed APIs and restricted resource loading.',
    stat: '90%',
    statLabel: 'Attack Surface Reduction'
  },
  {
    title: 'User Control',
    description: 'Clear permission management and security controls.',
    stat: '100%',
    statLabel: 'Granular Control'
  },
  {
    title: 'Performance Optimization',
    description: 'Efficient security implementation with minimal impact.',
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

      <main className="scroll-smooth bg-white relative">
      {/* Hero Section */}
        <FadeInSection>
          <section className="relative overflow-hidden py-24 sm:py-32">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute top-[-50%] left-[-55%] h-[660px] w-[1080px] rounded-full bg-[#FCDD9F]/28 blur-[420px]" />
              <div className="absolute bottom-[-55%] right-[-55%] h-[720px] w-[1120px] rounded-full bg-[#617500]/15 blur-[420px]" />
            </div>
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-xl font-semibold leading-8 text-[#978455] mb-4">
                Enterprise Browser
              </h2>
              <h1 className="text-4xl font-semibold leading-tight text-[#313A00] sm:text-5xl mb-6">
              Oasis
            </h1>
              <p className="text-lg text-[#4A5745] max-w-3xl mx-auto mb-10">
              A secure, modern browser designed for enterprise environments, featuring enhanced security controls, collaboration tools, and a seamless user experience.
            </p>
              <div className="flex flex-col gap-3 sm:flex-row justify-center">
                <Link href="/schedule-demo" className="btn-primary inline-flex items-center justify-center px-8 py-3 text-base no-underline hover:no-underline focus:no-underline">
                  Schedule Demo
              </Link>
                <Link href="/buyers-guide" className="btn-secondary inline-flex items-center justify-center px-8 py-3 text-base no-underline hover:no-underline focus:no-underline">
                  Read Buyer's Guide
              </Link>
          </div>
        </div>
      </section>
        </FadeInSection>

        {/* Elegant section divider */}
        <div className="relative h-px bg-gradient-to-r from-transparent via-[#30400D]/20 to-transparent mx-auto max-w-4xl"></div>

      {/* Security Features Section */}
        <FadeInSection delay={100}>
          <section className="relative overflow-hidden py-20 sm:py-28">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-[#FCDD9F]/40 blur-[220px]" />
              <div className="absolute bottom-0 right-6 h-96 w-96 rounded-full bg-[#617500]/20 blur-[250px]" />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-xl font-semibold leading-8 text-[#978455] mb-2">
            Enterprise-Grade Security
          </h2>
                <h1 className="text-3xl font-semibold tracking-tight text-[#313A00] sm:text-4xl mb-4">
                  Built-In Protections for Your Organization
                </h1>
                <p className="text-lg text-[#4A5745] max-w-3xl mx-auto">
                  Discover how Oasis delivers <Link href="/blog/enterprise-vs-consumer-browsers-securing-modern-workforce-part-1" className="text-[#4A6200] hover:text-[#3E5300] underline">enterprise-grade security</Link> through built-in protections and centralized management. Our security-first approach helps organizations <Link href="/blog/data-leaks-in-2025-prevention-strategies-for-enterprises" className="text-[#4A6200] hover:text-[#3E5300] underline">prevent data leaks</Link> and maintain compliance.
          </p>
              </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="relative bg-white/90 border border-white/80 rounded-[26px] px-6 py-8 shadow-[0_25px_70px_rgba(32,47,0,0.14)] backdrop-blur-lg hover:shadow-[0_35px_90px_rgba(32,47,0,0.18)] transition-all duration-300"
                  >
                    <h3 className="text-2xl font-semibold leading-tight text-[#1F2D00] mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-base text-[#4E5534] mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                  {feature.details.map((detail, dIndex) => (
                        <li key={dIndex} className="flex items-start text-base text-[#4E5534]">
                          <svg className="w-5 h-5 mr-3 text-[#4A6200] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                          <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
        </FadeInSection>

        {/* Elegant section divider */}
        <div className="relative h-px bg-gradient-to-r from-transparent via-[#30400D]/20 to-transparent mx-auto max-w-4xl"></div>

      {/* Browsing Features Section */}
        <FadeInSection delay={150}>
          <section className="relative overflow-hidden py-20 sm:py-28">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute top-[-50%] left-[-55%] h-[660px] w-[1080px] rounded-full bg-[#FCDD9F]/28 blur-[420px]" />
              <div className="absolute bottom-[-55%] right-[-55%] h-[720px] w-[1120px] rounded-full bg-[#617500]/15 blur-[420px]" />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-xl font-semibold leading-8 text-[#978455] mb-2">
                  Modern Browsing
          </h2>
                <h1 className="text-3xl font-semibold tracking-tight text-[#313A00] sm:text-4xl mb-4">
                  Experience a New Way of Working
                </h1>
                <p className="text-lg text-[#4A5745] max-w-3xl mx-auto">
                  Experience a new way of working with <Link href="/blog/oasis-browser-thinks-in-projects-not-tabs" className="text-[#4A6200] hover:text-[#3E5300] underline">project-based organization</Link> and enhanced productivity features. Learn how Oasis is <Link href="/blog/enterprise-vs-consumer-browsers-productivity-management-modern-workplace-part-2" className="text-[#4A6200] hover:text-[#3E5300] underline">transforming workplace productivity</Link>.
          </p>
              </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {browsingFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="relative bg-white/90 border border-white/80 rounded-[26px] px-6 py-8 shadow-[0_25px_70px_rgba(32,47,0,0.14)] backdrop-blur-lg hover:shadow-[0_35px_90px_rgba(32,47,0,0.18)] transition-all duration-300"
                  >
                    <h3 className="text-2xl font-semibold leading-tight text-[#1F2D00] mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-base text-[#4E5534] mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                  {feature.details.map((detail, dIndex) => (
                        <li key={dIndex} className="flex items-start text-base text-[#4E5534]">
                          <svg className="w-5 h-5 mr-3 text-[#4A6200] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                          <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
        </FadeInSection>

        {/* Elegant section divider */}
        <div className="relative h-px bg-gradient-to-r from-transparent via-[#30400D]/20 to-transparent mx-auto max-w-4xl"></div>

      {/* Enterprise Benefits Section */}
        <FadeInSection delay={200}>
          <section className="relative overflow-hidden py-20 sm:py-28">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-[#FCDD9F]/40 blur-[220px]" />
              <div className="absolute bottom-0 right-6 h-96 w-96 rounded-full bg-[#617500]/20 blur-[250px]" />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-xl font-semibold leading-8 text-[#978455] mb-2">
            Enterprise Benefits
          </h2>
                <h1 className="text-3xl font-semibold tracking-tight text-[#313A00] sm:text-4xl mb-4">
                  Measurable Results for Your Organization
                </h1>
                <p className="text-lg text-[#4A5745] max-w-3xl mx-auto">
                  See how organizations are <Link href="/blog/byod-zero-trust-rise-enterprise-browser" className="text-[#4A6200] hover:text-[#3E5300] underline">implementing zero trust</Link> and <Link href="/blog/what-is-enterprise-browser-2025" className="text-[#4A6200] hover:text-[#3E5300] underline">transforming their security posture</Link> with Oasis.
          </p>
              </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {enterpriseBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="relative bg-white/90 border border-white/80 rounded-[26px] px-6 py-8 shadow-[0_25px_70px_rgba(32,47,0,0.14)] backdrop-blur-lg hover:shadow-[0_35px_90px_rgba(32,47,0,0.18)] transition-all duration-300 text-center"
                  >
                <div className="mb-4">
                      <div className="text-3xl font-bold text-[#4A6200] mb-2">
                    {benefit.stat}
                  </div>
                      <div className="text-sm font-semibold text-[#4A5745] uppercase tracking-wide">
                    {benefit.statLabel}
                  </div>
                </div>
                    <h3 className="text-xl font-semibold leading-tight text-[#1F2D00] mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-base text-[#4E5534] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
        </FadeInSection>

        {/* Elegant section divider */}
        <div className="relative h-px bg-gradient-to-r from-transparent via-[#30400D]/20 to-transparent mx-auto max-w-4xl"></div>

      {/* Technical Features Section */}
        <FadeInSection delay={250}>
          <section className="relative overflow-hidden py-20 sm:py-28">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute top-[-50%] left-[-55%] h-[660px] w-[1080px] rounded-full bg-[#FCDD9F]/28 blur-[420px]" />
              <div className="absolute bottom-[-55%] right-[-55%] h-[720px] w-[1120px] rounded-full bg-[#617500]/15 blur-[420px]" />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-xl font-semibold leading-8 text-[#978455] mb-2">
                  Technical Excellence
          </h2>
                <h1 className="text-3xl font-semibold tracking-tight text-[#313A00] sm:text-4xl mb-4">
                  Built for Reliability and Performance
                </h1>
              </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="relative bg-white/90 border border-white/80 rounded-[26px] px-6 py-8 shadow-[0_25px_70px_rgba(32,47,0,0.14)] backdrop-blur-lg hover:shadow-[0_35px_90px_rgba(32,47,0,0.18)] transition-all duration-300"
                  >
                    <h3 className="text-2xl font-semibold leading-tight text-[#1F2D00] mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-base text-[#4E5534] mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                  {feature.details.map((detail, dIndex) => (
                        <li key={dIndex} className="flex items-start text-base text-[#4E5534]">
                          <svg className="w-5 h-5 mr-3 text-[#4A6200] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                          <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
        </FadeInSection>

        {/* Elegant section divider */}
        <div className="relative h-px bg-gradient-to-r from-transparent via-[#30400D]/20 to-transparent mx-auto max-w-4xl"></div>

      {/* CTA Section */}
        <FadeInSection delay={300}>
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
            Ready to Transform Your Enterprise Browsing?
          </h2>
              <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed font-bold" style={{ color: '#313A00' }}>
            Schedule a demo to see how Oasis can enhance security, improve collaboration, and streamline your workflow.
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
      </main>
    </>
  );
} 
