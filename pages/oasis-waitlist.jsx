import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import NavBar from '../components/NavbarDup';
import Script from 'next/script';
import { trackError } from '../utils/analytics';

const steps = [
  {
    id: 1,
    name: 'Sign up for waitlist',
    description: 'Join the waitlist to be among the first to experience the future of browsing with Oasis.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    ),
  },
  {
    id: 2,
    name: 'Only get notified when it\'s ready',
    description: 'We promise not to spam. You\'ll only hear from us when Oasis is ready for download.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4 19h6v-2H4v2zM4 15h6v-2H4v2zM4 11h6V9H4v2zM4 7h6V5H4v2z" />
      </svg>
    ),
  },
  {
    id: 3,
    name: 'Early-bird discount bonus',
    description: 'As a bonus, by joining the waitlist you get an early-bird discount on Oasis enterprise if you ever decide to deploy across your organization.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      </svg>
    ),
  },
];

const supportLinks = [
  {
    name: 'Learn More About Oasis',
    description: 'Discover what makes Oasis the future of browsing.',
    href: '/products/free-agentic-browser',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: 'FAQ',
    description: 'Find answers to common questions about Oasis and the waitlist.',
    href: '/faq',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: 'Contact Us',
    description: 'Get in touch with our team for support or questions.',
    href: '/contact',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function OasisWaitlist() {
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
        <title>Join Oasis Waitlist | Kahana</title>
        <meta name="description" content="Join the Oasis browser waitlist - be among the first to experience the future of privacy-focused browsing" />
      </Head>

      <NavBar />

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16">
            {/* Left Column - Content */}
            <div className="lg:col-span-7">
              <div className="text-center lg:text-left mb-12">
                <h2 className="text-base font-semibold leading-7 text-[#66C2BE] mb-3">Your Agentic Browser Companion Awaits</h2>
                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                  Join the Oasis Waitlist
                </h1>
                <p className="mt-6 text-xl text-gray-600">
                  Meet Oasis, the agenticbrowser that transforms how you explore and organize the web. Instead of hunting through endless tabs, scrolling through browser history, or juggling multiple windows, simply tell Oasis what you need. It finds and arranges everything you've ever saved with perfect layouts, turning information chaos into organized productivity.
                </p>
                <p className="mt-4 text-xl text-gray-600">
                  <strong>Straight to the point.</strong> This is a genuine waitlist, not a marketing trap. You'll get one notification when the <Link href="/products/free-agentic-browser" className="text-[#66C2BE] hover:text-[#55B3AF]">free Oasis Agentic Browser</Link> launches. The free version is <strong>100% free forever—no credit card, no catches</strong>. As a bonus, you'll also receive exclusive early access to the <Link href="/products/enterprise-browser" className="text-[#66C2BE] hover:text-[#55B3AF]">Oasis Enterprise Browser</Link> with special launch pricing.
                </p>
              </div>

              {/* Form Section - Now appears first on mobile */}
              <div className="lg:hidden mb-12">
                <div className="bg-white rounded-xl shadow-xl border border-[#A5DAD8]/30 p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-semibold text-gray-900">Join the Waitlist</h3>
                    <p className="mt-3 text-gray-600">
                      Fill out the form below to join the Oasis waitlist.
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
                        <p className="text-sm text-gray-500">Attempt {retryCount + 1} of {MAX_RETRIES}</p>
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
                      src="https://tally.so/r/w8V8GA?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                      width="100%"
                      height="500"
                      frameBorder="0"
                      marginHeight="0"
                      marginWidth="0"
                      title="Oasis Waitlist Form"
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
                        className="bg-gradient-to-r from-[#E3DFF1]/20 via-[#8CB7D0]/10 to-[#E3DFF1]/30 rounded-xl overflow-hidden border border-[#A5DAD8]/30 p-6 shadow-lg shadow-[#E3DFF1]/20 hover:shadow-xl hover:shadow-[#E3DFF1]/30 transition-all duration-300"
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

                  {/* Oasis Features Section */}
                  <div className="mt-16 bg-white rounded-xl shadow-xl border border-[#A5DAD8]/30 p-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">The Oasis Advantage</h3>
                    <p className="text-lg text-gray-600 mb-8">
                      Oasis isn't just another browser—it's a productivity powerhouse built from the ground up with AI at its core. Experience unprecedented control over your digital workspace while maintaining lightning-fast performance.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                      <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-gray-900">AI-Powered Intelligence</h4>
                        <ul className="space-y-3 text-gray-600">
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-[#66C2BE] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Patented AI assistant integrated into the browser core</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-[#66C2BE] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Seamless link organization and retrieval</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-[#66C2BE] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Dynamic layout manipulation to meet your needs</span>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-gray-900">Designed for Productivity</h4>
                        <ul className="space-y-3 text-gray-600">
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-[#66C2BE] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Ask your AI to find anything you've ever saved</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-[#66C2BE] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Perfect layouts automatically organized for efficiency</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-[#66C2BE] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>No more tab hunting or search history digging</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form (Desktop only) */}
            <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-24">
              <div className="bg-white rounded-xl shadow-xl border border-[#A5DAD8]/30 p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-gray-900">Join the Waitlist</h3>
                  <p className="mt-3 text-gray-600">
                    Fill out the form below to join the Oasis waitlist.
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
                      <p className="text-sm text-gray-500">Attempt {retryCount + 1} of {MAX_RETRIES}</p>
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
                    src="https://tally.so/r/w8V8GA?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                    width="100%"
                    height="500"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    title="Oasis Waitlist Form"
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