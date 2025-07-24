import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import SEO from '../../components/SEO';

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
      'Background updates',
      'Version management',
      'Release notes',
      'Seamless process'
    ]
  },
  {
    title: 'Data Management',
    description: 'Secure handling of personal data and preferences.',
    details: [
      'Local data storage',
      'Encrypted preferences',
      'Sync capabilities',
      'Data portability'
    ]
  },
  {
    title: 'User Interface',
    description: 'Clean, modern design for optimal user experience.',
    details: [
      'Minimalist design',
      'Responsive layout',
      'Custom themes',
      'Smooth animations'
    ]
  }
];

export default function FreeAgenticBrowser() {
  // Free Agentic Browser specific schema
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
      <section className="bg-gradient-to-b from-[#E3DFF1]/20 via-[#8CB7D0]/10 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold leading-7 text-[#66C2BE] mb-3">Free Agentic Browser</h2>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Oasis
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              A productivity-focused, modern browser designed for personal use, featuring smart organization tools, AI-powered assistance, and a seamless browsing experience. Boost your productivity and take control of your digital workflow.
            </p>
            <Link href="/oasis-waitlist">
              <button className="bg-[#66C2BE] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#55B3AF] transition-colors shadow-lg shadow-[#E3DFF1]/20 hover:shadow-xl hover:shadow-[#E3DFF1]/30">
                Join Waitlist
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Productivity Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Productivity-First Features
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Boost your productivity with intelligent features designed to streamline your workflow and enhance your browsing experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productivityFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-r from-[#E3DFF1]/20 via-[#8CB7D0]/10 to-[#E3DFF1]/30 rounded-xl overflow-hidden border border-[#A5DAD8]/30 p-6 shadow-lg shadow-[#E3DFF1]/20 hover:shadow-xl hover:shadow-[#E3DFF1]/30 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#66C2BE] via-[#8CB7D0] to-[#E3DFF1] rounded-full flex items-center justify-center mr-3 shadow-md shadow-[#E3DFF1]/20">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, dIndex) => (
                    <li key={dIndex} className="flex items-center text-gray-600 text-sm">
                      <svg className="w-4 h-4 mr-2 text-[#66C2BE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Smart Browsing Experience
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Experience a new way of browsing with intelligent organization and productivity features designed for personal use.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {browsingFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-r from-[#E3DFF1]/20 via-[#8CB7D0]/10 to-[#E3DFF1]/30 rounded-xl overflow-hidden border border-[#A5DAD8]/30 p-6 shadow-lg shadow-[#E3DFF1]/20 hover:shadow-xl hover:shadow-[#E3DFF1]/30 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#66C2BE] via-[#8CB7D0] to-[#E3DFF1] rounded-full flex items-center justify-center mr-3 shadow-md shadow-[#E3DFF1]/20">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, dIndex) => (
                    <li key={dIndex} className="flex items-center text-gray-600 text-sm">
                      <svg className="w-4 h-4 mr-2 text-[#66C2BE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Technical Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Technical Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-r from-[#E3DFF1]/20 via-[#8CB7D0]/10 to-[#E3DFF1]/30 rounded-xl overflow-hidden border border-[#A5DAD8]/30 p-6 shadow-lg shadow-[#E3DFF1]/20 hover:shadow-xl hover:shadow-[#E3DFF1]/30 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#66C2BE] via-[#8CB7D0] to-[#E3DFF1] rounded-full flex items-center justify-center mr-3 shadow-md shadow-[#E3DFF1]/20">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, dIndex) => (
                    <li key={dIndex} className="flex items-center text-gray-600 text-sm">
                      <svg className="w-4 h-4 mr-2 text-[#66C2BE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section className="bg-gradient-to-r from-[#66C2BE] to-[#8CB7D0] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Boost Your Productivity?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Download Oasis Free Agentic Browser today and experience enhanced productivity with smart organization tools and AI-powered assistance.
          </p>
          <Link href="/oasis-waitlist">
            <button className="bg-white text-[#66C2BE] px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Join Waitlist
            </button>
          </Link>
        </div>
      </section>
    </>
  );
} 