import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import SEO from '../../components/SEO';
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
  const [currentBrowsingIndex, setCurrentBrowsingIndex] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBrowsingIndex((prev) => (prev + 1) % 4); // 4 browsing features
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const nextBrowsingFeature = () => {
    setCurrentBrowsingIndex((prev) => (prev + 1) % 4);
  };

  const prevBrowsingFeature = () => {
    setCurrentBrowsingIndex((prev) => (prev - 1 + 4) % 4);
  };

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
      <section className="bg-white py-20 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold leading-7 text-[#728552] mb-3">Free Agentic Browser</h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4A5745] mb-6 break-words">
              Oasis
            </h1>
            <p className="text-lg sm:text-xl text-[#4A5745] max-w-3xl mx-auto mb-8 break-words">
              A productivity-focused, modern browser designed for personal use, featuring smart organization tools, AI-powered assistance, and a seamless browsing experience. Boost your productivity and take control of your digital workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/oasis-waitlist" className="btn-primary inline-flex items-center justify-center px-6 py-3 text-base no-underline hover:no-underline focus:no-underline">
                  Join Waitlist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Browser Image */}
      <section className="bg-white py-16 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center w-full">
            <div className="w-full max-w-full">
              <Image
                src={getCloudinaryImageUrl("/figma-imports/Personalization Features.webp", { width: 1200, quality: 'auto:good' })}
                alt="Oasis Free Agentic Browser - Homepage Personalization"
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

      {/* Productivity Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#4A5745] text-center mb-12">
            Productivity-First Features
          </h2>
          <p className="text-[#4A5745] text-center mb-8 max-w-3xl mx-auto">
            Boost your productivity with intelligent features designed to streamline your workflow and enhance your browsing experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {productivityFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 flex flex-col border border-gray-100 hover:shadow-lg transition-all">
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-14 h-14 flex items-center justify-center">
                    <svg className="w-10 h-10" style={{ color: '#4A6200' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-left mb-4" style={{ color: '#313A00' }}>{feature.title}</h3>
                
                {/* Feature list - all with green highlight */}
                <div className="space-y-2 flex-grow">
                  {feature.details.map((detail, dIndex) => (
                    <div 
                      key={dIndex} 
                      className="text-sm text-[#4A5745] text-left py-2 px-3 rounded-lg bg-[#F8FAF2]"
                    >
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Browsing Features Section - Animated Carousel */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#4A5745] text-center mb-12">
            Smart Browsing Experience
          </h2>
          <p className="text-[#4A5745] text-center mb-8 max-w-3xl mx-auto">
            Experience a new way of browsing with intelligent organization and productivity features designed for personal use.
          </p>
          
          {/* Carousel Container - Full Screen Size */}
          <div className="relative w-full max-w-7xl mx-auto">
            {/* Navigation Arrows */}
            <button
              onClick={prevBrowsingFeature}
              className="btn-primary absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group"
              aria-label="Previous feature"
            >
              <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextBrowsingFeature}
              className="btn-primary absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group"
              aria-label="Next feature"
            >
              <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Carousel Cards - Full Width */}
            <div className="relative overflow-hidden rounded-3xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentBrowsingIndex * 100}%)` }}
              >
                {browsingFeatures.map((feature, index) => (
                  <div 
                    key={index} 
                    className="min-w-full"
                  >
                    <div className={`bg-white rounded-2xl p-8 md:p-12 flex flex-col border-2 transition-all duration-500 ${
                      index === currentBrowsingIndex 
                        ? 'border-[#E5EFD8] shadow-[0_8px_30px_rgba(74,98,0,0.12)] scale-100' 
                        : 'border-gray-100 shadow-md opacity-60 scale-95'
                    }`}>
                      {/* Icon */}
                      <div className="mb-6">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 ${
                          index === currentBrowsingIndex 
                            ? 'bg-[#F8FAF2] scale-110' 
                            : 'bg-gray-50 scale-100'
                        }`}>
                          <svg className={`w-8 h-8 transition-all duration-500 ${index === currentBrowsingIndex ? 'text-[#4A6200]' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className={`text-2xl md:text-3xl font-bold text-left mb-4 transition-all duration-500 ${
                        index === currentBrowsingIndex ? 'text-[#313A00]' : 'text-gray-500'
                      }`}>
                        {feature.title}
                      </h3>
                      
                      {/* Description */}
                      <p className={`text-base md:text-lg mb-6 text-left leading-relaxed transition-all duration-500 ${
                        index === currentBrowsingIndex ? 'text-[#4A5745]' : 'text-gray-400'
                      }`}>
                        {feature.description}
                      </p>
                      
                      {/* Feature list */}
                      <div className="space-y-3">
                        {feature.details.map((detail, dIndex) => (
                          <div 
                            key={dIndex} 
                            className={`text-base md:text-lg text-left py-3 px-4 rounded-lg transition-all duration-500 ${
                              index === currentBrowsingIndex 
                                ? 'bg-[#F8FAF2] text-[#4A5745]' 
                                : 'bg-gray-50 text-gray-400'
                            }`}
                          >
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {browsingFeatures.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentBrowsingIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentBrowsingIndex
                      ? 'w-8 h-2 bg-[#4A6200]'
                      : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to feature ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#4A5745] text-center mb-12">
            Technical Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {technicalFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex flex-col hover:shadow-xl transition-all">
                <div className="flex justify-start mb-4">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #d6e3f4 0%, #e5efd8 100%)' }}>
                    <svg className="w-10 h-10" style={{ color: '#4A6200' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-left mb-4" style={{ color: '#313A00' }}>{feature.title}</h3>
                <p className="text-sm text-gray-700 mb-4 text-left">{feature.description}</p>
                <div className="space-y-2 mb-6 flex-grow">
                  {feature.details.map((detail, dIndex) => (
                    <div key={dIndex} className="text-sm text-gray-700 text-left px-3 py-2 rounded-lg" style={{ backgroundColor: '#F8FAF2' }}>
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-12 sm:py-16 md:py-20 lg:py-28 mb-0 bg-[#F8FAF2]"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
            Ready to Boost Your Productivity?
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed font-bold" style={{ color: '#313A00' }}>
            Download Oasis Free Agentic Browser today and experience enhanced productivity with smart organization tools and AI-powered assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Link href="/oasis-waitlist" className="btn-primary inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-bold no-underline hover:no-underline focus:no-underline w-full sm:w-auto">
              Join Waitlist
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