import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import SEO from '../../components/SEO';

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

      {/* Enterprise Browser Image */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <Image
              src="/images/enterprise.jpeg"
              alt="Oasis Enterprise Browser Interface"
              width={1200}
              height={800}
              className="rounded-lg shadow-xl"
              priority
            />
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