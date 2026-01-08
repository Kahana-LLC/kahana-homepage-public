import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import SEO from '../../components/SEO';
import { getCloudinaryImageUrl } from '../../utils/cloudinary-mapper';

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
    screenshot: getCloudinaryImageUrl('/assets/oasis-browser-preview.png', { width: 1200, quality: 'auto:good' }),
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
        image={getCloudinaryImageUrl('/assets/oasis-browser-preview.png', { width: 1200, quality: 'auto:good' })}
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
      <section className="bg-white py-20 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold leading-7 text-[#728552] mb-3">Enterprise Browser</h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4A5745] mb-6 break-words">
              Oasis
            </h1>
            <p className="text-lg sm:text-xl text-[#4A5745] max-w-3xl mx-auto mb-8 break-words">
              Fall in love with enterprise-grade security, ergonomic workflows, and the most elegant user experience.
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

      {/* Enterprise Browser Image */}
      <section className="bg-white py-16 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center w-full">
            <div className="w-full max-w-full">
              <Image
                src={getCloudinaryImageUrl("/images/enterprise.jpeg", { width: 1200, quality: 'auto:good' })}
                alt="Oasis Enterprise Browser Interface"
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg shadow-xl"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                priority
              />
              </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-12 sm:py-16 md:py-20 lg:py-28 mb-0 bg-[#F8FAF2]"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
            Ready to Transform Your Enterprise Browsing?
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed font-bold" style={{ color: '#313A00' }}>
            Schedule a demo to see how Oasis can enhance security, improve collaboration, and streamline your workflow.
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
    </>
  );
} 