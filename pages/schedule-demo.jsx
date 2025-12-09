import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import NavBar from '../components/NavbarDup';
import Script from 'next/script';
import { trackError } from '../utils/analytics';

const steps = [
  {
    id: 1,
    name: 'Schedule Demo',
    description: 'Book a personalized demo to see how Oasis can transform your enterprise.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 2,
    name: 'Custom Setup',
    description: "Our team will work with you to configure Oasis for your organization's needs.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: 3,
    name: 'Enterprise Deployment',
    description: 'Receive a secure download link and get Oasis deployed across your organization.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: 4,
    name: 'Ongoing Support',
    description: 'Receive dedicated enterprise support and regular updates.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

const supportLinks = [
  {
    name: 'Support',
    description: 'Get help with deployment and technical assistance.',
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

export default function ScheduleDemo() {
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
        <title>Enterprise Browser Demo | Kahana</title>
        <meta name="description" content="Schedule a demo of Oasis - the secure enterprise browser that transforms how organizations explore and organize knowledge" />
      </Head>

      <NavBar />

      <main className="min-h-screen bg-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16">
            {/* Left Column - Content */}
            <div className="lg:col-span-7">
              <div className="text-center lg:text-left mb-12">
                <h2 className="text-base font-semibold leading-7 text-[#66C2BE] mb-3">Get Started with Oasis</h2>
                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                  Deploy Oasis Across Your Enterprise
                </h1>
                <p className="mt-6 text-xl text-gray-600">
                  Ready to transform your organization's digital workspace? Schedule a demo to see Oasis in action and learn how we'll help you deploy it securely across your organization.
                </p>
              </div>

              {/* Form Section - Now appears first on mobile */}
              <div className="lg:hidden mb-12">
                <div className="bg-white rounded-xl shadow-xl border border-[#A5DAD8]/30 p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-semibold text-gray-900">Schedule Your Demo</h3>
                    <p className="mt-3 text-gray-600">
                      Book a personalized demo to see how Oasis can transform your enterprise.
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
                      src="https://tally.so/embed/3xzNKv?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&redirectUrl=https://kahana.is/thankyou-demo"
                      width="100%"
                      height="500"
                      frameBorder="0"
                      marginHeight="0"
                      marginWidth="0"
                      title="Demo Request Form"
                      style={{ 
                        minWidth: '100%',
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
                  <h3 className="text-2xl font-semibold text-gray-900">Schedule Your Demo</h3>
                  <p className="mt-3 text-gray-600">
                    Book a personalized demo to see how Oasis can transform your enterprise.
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
                    src="https://tally.so/embed/3xzNKv?alignLeft=1&hideTitle=1&transparentBackground=1&redirectUrl=https://kahana.is/thankyou-demo"
                    width="100%"
                    height="500"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    title="Demo Request Form"
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