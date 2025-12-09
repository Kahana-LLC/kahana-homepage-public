import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import NavBar from '../components/NavbarDup';
import Script from 'next/script';
import { trackError } from '../utils/analytics';

const steps = [
  {
    id: 1,
    name: 'Subscribe to Insights',
    description: 'Stay informed with the latest updates and insights from Kahana.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 2,
    name: 'Weekly Updates',
    description: 'Receive curated insights and updates delivered to your inbox.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
  },
  {
    id: 3,
    name: 'Industry Trends',
    description: 'Stay ahead with analysis of emerging trends and technologies.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    id: 4,
    name: 'Expert Analysis',
    description: 'Get insights from our team of industry experts and thought leaders.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

const supportLinks = [
  {
    name: 'Support',
    description: 'Get help with your subscription and technical assistance.',
    href: '/support',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    name: 'Privacy Policy',
    description: 'Learn how we protect and handle your data.',
    href: '/privacy-policy',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    name: 'Terms & Conditions',
    description: 'Review our terms of service and usage guidelines.',
    href: '/terms-and-conditions',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

export default function SubscribeToInsights() {
  const [hoveredStep, setHoveredStep] = useState(0);
  const [isFormLoaded, setIsFormLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const MAX_RETRIES = 3;

  const initializeTally = () => {
    if (window.Tally) {
      window.Tally.loadEmbeds();
      setIsFormLoaded(true);
      setLoadError(false);
    }
  };

  const handleTallyLoad = () => {
    // Wait a brief moment to ensure Tally is fully loaded
    setTimeout(() => {
      initializeTally();
    }, 100);
  };

  const handleTallyError = (error) => {
    console.error('Tally form loading error:', error);
    trackError('tally_form_load_error', error.message);
    setLoadError(true);
    
    if (retryCount < MAX_RETRIES) {
      setRetryCount(prev => prev + 1);
      // Attempt to reload the script
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.async = true;
      script.onload = handleTallyLoad;
      script.onerror = () => handleTallyError(new Error('Failed to load Tally script'));
      document.body.appendChild(script);
    }
  };

  useEffect(() => {
    // Reset states when component mounts
    setIsFormLoaded(false);
    setLoadError(false);
    setRetryCount(0);

    // If Tally is already loaded, initialize immediately
    if (window.Tally) {
      initializeTally();
    }

    // Cleanup function
    return () => {
      // Only remove Tally-related elements, not the script
      const tallyElements = document.querySelectorAll('[data-tally-loaded]');
      tallyElements.forEach(element => element.remove());
    };
  }, []);

  return (
    <>
      <Head>
        <title>Subscribe to Kahana Insights | Kahana</title>
        <meta name="description" content="Stay informed with the latest insights and updates from Kahana - subscribe to our newsletter" />
      </Head>

      <NavBar />

      <main className="min-h-screen bg-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16">
            {/* Left Column - Content */}
            <div className="lg:col-span-7">
              <div className="text-center lg:text-left mb-12">
                <h2 className="text-base font-semibold leading-7 text-[#66C2BE] mb-3">Stay Informed</h2>
                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                  Subscribe to Kahana Insights
                </h1>
                <p className="mt-6 text-xl text-gray-600">
                  Get the latest updates, industry insights, and expert analysis delivered straight to your inbox. Stay ahead of the curve with Kahana's weekly newsletter.
                </p>
              </div>

              {/* Form Section - Now appears first on mobile */}
              <div className="lg:hidden mb-12">
                <div className="bg-white rounded-xl shadow-xl border border-[#A5DAD8]/30 p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-semibold text-gray-900">Subscribe to Insights</h3>
                    <p className="mt-3 text-gray-600">
                      Join our community and stay informed with the latest updates.
                    </p>
                  </div>
                  <div className="relative min-h-[500px]">
                    {!isFormLoaded && !loadError && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#66C2BE]"></div>
                      </div>
                    )}

                    {loadError && retryCount < MAX_RETRIES && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                        <p className="text-gray-600 mb-4">Having trouble loading the form? We'll try again automatically.</p>
                        <p className="text-sm text-[#4A5745]">Attempt {retryCount + 1} of {MAX_RETRIES}</p>
                      </div>
                    )}

                    {loadError && retryCount >= MAX_RETRIES && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                        <p className="text-gray-600 mb-4">We're having trouble loading the form. Please try refreshing the page.</p>
                        <button
                          onClick={() => window.location.reload()}
                          className="px-4 py-2 bg-[#66C2BE] text-white rounded-md hover:bg-[#4A9E9A] transition-colors"
                        >
                          Refresh Page
                        </button>
                      </div>
                    )}

                    {/* Fixed height to prevent CLS - remove dynamicHeight */}
                    <iframe
                      src="https://tally.so/embed/wvbeyQ?alignLeft=1&hideTitle=1&transparentBackground=1"
                      width="100%"
                      height="500"
                      frameBorder="0"
                      marginHeight="0"
                      marginWidth="0"
                      title="Subscribe to Insights Form"
                      style={{ 
                        minWidth: '100%',
                        minHeight: '500px',
                        opacity: isFormLoaded ? 1 : 0,
                        transition: 'opacity 0.3s ease-in-out'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Steps Section */}
              <div className="mb-12 lg:mb-0">
                <div className="mx-auto">
                  {/* Progress Bar */}
                  <div className="relative h-1 bg-gray-100 rounded-full mb-12">
                    <div 
                      className="absolute h-full bg-gradient-to-r from-[#E3DFF1] via-[#8CB7D0] to-[#66C2BE] rounded-full transition-all duration-300 ease-in-out"
                      style={{ width: `${(hoveredStep / (steps.length - 1)) * 100}%` }}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 gap-6">
                    {steps.map((step, index) => (
                      <div 
                        key={step.id} 
                        className="bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 rounded-xl overflow-hidden p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                        onMouseEnter={() => setHoveredStep(index)}
                        onMouseLeave={() => setHoveredStep(0)}
                      >
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#66C2BE] via-[#8CB7D0] to-[#E3DFF1] shadow-md shadow-[#E3DFF1]/20">
                              <div className="text-white">
                                {step.icon}
                              </div>
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="text-lg font-semibold leading-7 text-gray-900">
                              {step.name}
                            </div>
                            <div className="mt-2 text-base leading-7 text-gray-600">
                              {step.description}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Support Links */}
                  <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {supportLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="group flex items-center p-4 bg-white rounded-lg border border-[#A5DAD8]/30 shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        <div className="flex-shrink-0">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#66C2BE]/10 via-[#8CB7D0]/10 to-[#E3DFF1]/10 group-hover:from-[#66C2BE]/20 group-hover:via-[#8CB7D0]/20 group-hover:to-[#E3DFF1]/20 transition-all duration-300">
                            <div className="text-[#66C2BE]">
                              {link.icon}
                            </div>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900 group-hover:text-[#66C2BE] transition-colors duration-300">
                            {link.name}
                          </p>
                          <p className="mt-1 text-sm text-[#4A5745]">
                            {link.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form (Desktop only) */}
            <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-24">
              <div className="bg-white rounded-xl shadow-xl border border-[#A5DAD8]/30 p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-gray-900">Subscribe to Insights</h3>
                  <p className="mt-3 text-gray-600">
                    Join our community and stay informed with the latest updates.
                  </p>
                </div>
                <div className="relative min-h-[500px]">
                  {!isFormLoaded && !loadError && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#66C2BE]"></div>
                    </div>
                  )}

                  {loadError && retryCount < MAX_RETRIES && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                      <p className="text-gray-600 mb-4">Having trouble loading the form? We'll try again automatically.</p>
                      <p className="text-sm text-[#4A5745]">Attempt {retryCount + 1} of {MAX_RETRIES}</p>
                    </div>
                  )}

                  {loadError && retryCount >= MAX_RETRIES && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                      <p className="text-gray-600 mb-4">We're having trouble loading the form. Please try refreshing the page.</p>
                      <button
                        onClick={() => window.location.reload()}
                        className="px-4 py-2 bg-[#66C2BE] text-white rounded-md hover:bg-[#4A9E9A] transition-colors"
                      >
                        Refresh Page
                      </button>
                    </div>
                  )}

                  <iframe
                    src="https://tally.so/embed/wvbeyQ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                    width="100%"
                    height="500"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    title="Subscribe to Insights Form"
                    style={{ 
                      minWidth: '100%',
                      opacity: isFormLoaded ? 1 : 0,
                      transition: 'opacity 0.3s ease-in-out'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Script 
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
        onLoad={handleTallyLoad}
        onError={handleTallyError}
      />
    </>
  );
} 