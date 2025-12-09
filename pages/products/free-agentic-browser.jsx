import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import SEO from '../../components/SEO';
import FadeInSection from '../../components/FadeInSection';
import { getCloudinaryImageUrl } from '../../utils/cloudinary-mapper';

const productivityFeatures = [
  {
    title: 'Smart Workspace Organization',
    description: 'Organize your digital workspace with intelligent hub management for maximum productivity.',
    details: [
      'Customizable productivity hubs',
      'Smart content categorization',
      'Quick access to frequently used tools',
      'Seamless workflow integration'
    ]
  },
  {
    title: 'AI-Powered Productivity Assistant',
    description: 'Get intelligent suggestions and automation to streamline your daily tasks.',
    details: [
      'Smart task recommendations',
      'Automated workflow suggestions',
      'Content discovery assistance',
      'Personalized productivity insights'
    ]
  },
  {
    title: 'Advanced Tab Management',
    description: 'Efficient tab organization and management for better focus and productivity.',
    details: [
      'Intelligent tab grouping',
      'Memory optimization',
      'Quick tab search and switching',
      'Productivity-focused layouts'
    ]
  },
  {
    title: 'Seamless Multi-Tasking',
    description: 'Enhanced multi-tasking capabilities for improved workflow efficiency.',
    details: [
      'Split-screen functionality',
      'Workspace switching',
      'Context preservation',
      'Productivity shortcuts'
    ]
  }
];

const browsingFeatures = [
  {
    title: 'Personal Hub Organization',
    description: 'Organize your favorite sites and content in personal hubs.',
    details: [
      'Customizable personal hubs',
      'Quick access dashboard',
      'Easy site organization',
      'Personal workspace'
    ]
  },
  {
    title: 'Multi-Tab Management',
    description: 'Efficient tab management for better productivity.',
    details: [
      'Tab grouping',
      'Tab search functionality',
      'Memory optimization',
      'Quick tab switching'
    ]
  },
  {
    title: 'Smart Navigation',
    description: 'Intuitive navigation features for seamless browsing.',
    details: [
      'Smart address bar',
      'Bookmark management',
      'History search',
      'Quick shortcuts'
    ]
  },
  {
    title: 'AI-Powered Assistant',
    description: 'Helpful AI assistant for enhanced browsing experience.',
    details: [
      'Smart suggestions',
      'Content recommendations',
      'Search assistance',
      'Personalized experience'
    ]
  }
];

export default function FreeAgenticBrowser() {
  const browserSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Kahana Oasis - Free Agentic Browser',
    description: 'A productivity-focused, modern browser designed for personal use. Features smart organization tools, AI-powered assistance, and a seamless browsing experience for enhanced productivity.',
    applicationCategory: 'WebApplication',
    operatingSystem: 'Cross-platform',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock'
    },
    featureList: [
      'Smart Workspace Organization',
      'AI-Powered Productivity Assistant',
      'Advanced Tab Management',
      'Seamless Multi-Tasking',
      'Personal Hub Organization',
      'Multi-Tab Management',
      'Smart Navigation',
      'AI-Powered Assistant'
    ],
    screenshot: 'https://kahana.co/assets/oasis-browser-preview.png',
    softwareVersion: '1.0',
    publisher: {
      '@type': 'Organization',
      name: 'Kahana',
      url: 'https://kahana.co',
      description: 'Kahana develops productivity-focused tools for personal and professional use'
    }
  };

  return (
    <>
      <SEO 
        title="Oasis - Free Agentic Browser for Enhanced Productivity"
        description="Boost your productivity with Kahana's Free Agentic Browser. Features smart organization tools, AI-powered assistance, and a seamless browsing experience designed for maximum efficiency."
        image="https://kahana.co/assets/oasis-browser-preview.png"
        url="https://kahana.co/products/free-agentic-browser"
        type="product"
        schema={browserSchema}
      />
      <Head>
        <title>Oasis - Free Agentic Browser | Kahana</title>
        <meta
          name="description"
          content="Kahana's Free Agentic Browser helps you boost productivity. Features include smart organization, AI-powered assistance, and seamless multi-tasking for enhanced personal productivity."
        />
        {/* Inline critical CSS for LCP h1 to render immediately */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS for LCP h1 - render immediately without waiting for external CSS */
            h1.text-4xl.font-semibold.leading-tight.text-\\[\\#313A00\\].sm\\:text-5xl,
            h1[class*="text-4xl"][class*="font-semibold"][class*="text-[#313A00]"] {
              font-size: 2.25rem;
              line-height: 1.25;
              font-weight: 600;
              color: #313A00;
              font-family: 'Bricolage Grotesque', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              display: block;
              margin: 0;
              padding: 0;
            }
            @media (min-width: 640px) {
              h1.text-4xl.font-semibold.leading-tight.text-\\[\\#313A00\\].sm\\:text-5xl,
              h1[class*="text-4xl"][class*="font-semibold"][class*="text-[#313A00]"] {
                font-size: 3rem;
              }
            }
          `
        }} />
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
      {/* Hero Section - Skip fade-in for LCP element */}
        <FadeInSection skipFade={true}>
          <section className="relative overflow-hidden py-24 sm:py-32">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute top-[-50%] left-[-55%] h-[660px] w-[1080px] rounded-full bg-[#FCDD9F]/28 blur-[420px]" />
              <div className="absolute bottom-[-55%] right-[-55%] h-[720px] w-[1120px] rounded-full bg-[#617500]/15 blur-[420px]" />
            </div>
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-xl font-semibold leading-8 text-[#978455] mb-4">
                Free Agentic Browser
              </h2>
              {/* Render h1 immediately for LCP - no fade-in delay */}
              <h1 className="text-4xl font-semibold leading-tight text-[#313A00] sm:text-5xl mb-6">
              Oasis
            </h1>
              <p className="text-lg text-[#4A5745] max-w-3xl mx-auto mb-10">
              A productivity-focused, modern browser designed for personal use, featuring smart organization tools, AI-powered assistance, and a seamless browsing experience. Boost your productivity and take control of your digital workflow.
            </p>
              <div className="flex flex-col gap-3 sm:flex-row justify-center">
                <Link href="/oasis-waitlist" className="btn-primary inline-flex items-center justify-center px-8 py-3 text-base no-underline hover:no-underline focus:no-underline">
                Join Waitlist
            </Link>
          </div>
        </div>
      </section>
        </FadeInSection>

        {/* Elegant section divider */}
        <div className="relative h-px bg-gradient-to-r from-transparent via-[#30400D]/20 to-transparent mx-auto max-w-4xl"></div>

      {/* Productivity Features Section */}
        <FadeInSection delay={100}>
          <section className="relative overflow-hidden py-20 sm:py-28">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-[#FCDD9F]/40 blur-[220px]" />
              <div className="absolute bottom-0 right-6 h-96 w-96 rounded-full bg-[#617500]/20 blur-[250px]" />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-xl font-semibold leading-8 text-[#978455] mb-2">
                  Productivity-First
          </h2>
                <h1 className="text-3xl font-semibold tracking-tight text-[#313A00] sm:text-4xl mb-4">
                  Features Designed for Maximum Efficiency
                </h1>
                <p className="text-lg text-[#4A5745] max-w-3xl mx-auto">
            Boost your productivity with intelligent features designed to streamline your workflow and enhance your browsing experience.
          </p>
              </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productivityFeatures.map((feature, index) => (
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
                  Smart Browsing
          </h2>
                <h1 className="text-3xl font-semibold tracking-tight text-[#313A00] sm:text-4xl mb-4">
                  Experience a New Way of Browsing
                </h1>
                <p className="text-lg text-[#4A5745] max-w-3xl mx-auto">
            Experience a new way of browsing with intelligent organization and productivity features designed for personal use.
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

      {/* CTA Section */}
        <FadeInSection delay={200}>
          <section 
            className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-20 md:py-28 mb-0"
            style={{
              backgroundImage: `url(${getCloudinaryImageUrl('/images/desert-background-5.webp')})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-white/60"></div>
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
            Ready to Boost Your Productivity?
          </h2>
              <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed font-bold" style={{ color: '#313A00' }}>
            Download Oasis Free Agentic Browser today and experience enhanced productivity with smart organization tools and AI-powered assistance.
          </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/oasis-waitlist" className="btn-primary inline-flex items-center justify-center px-10 py-4 text-lg font-bold no-underline hover:no-underline focus:no-underline">
              Join Waitlist
          </Link>
              </div>
        </div>
      </section>
        </FadeInSection>
      </main>
    </>
  );
} 
