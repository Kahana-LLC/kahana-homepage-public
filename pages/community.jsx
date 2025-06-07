import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import NavBar from '../components/NavbarDup';
import Script from 'next/script';
import { trackError } from '../utils/analytics';

const steps = [
  {
    id: 1,
    name: 'Join Our Community',
    description: 'Connect with smart, curious people passionate about cybersecurity and AI.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: 2,
    name: 'Share Your Expertise',
    description: 'Contribute to meaningful discussions and shape the future of cybersecurity and AI.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
  },
  {
    id: 3,
    name: 'Access Exclusive Content',
    description: 'Get early access to ideas, events, and discussion forums.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    id: 4,
    name: 'Shape the Future',
    description: 'Help define how our community grows and evolves.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const supportLinks = [
  {
    name: 'Community Guidelines',
    description: 'Learn about our community standards and best practices.',
    href: '/community-guidelines',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    name: 'FAQ',
    description: 'Find answers to common questions about our community.',
    href: '/community-faq',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: 'Contact Us',
    description: 'Get in touch with our community team for support.',
    href: '/contact',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Community() {
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
        <title>Join Kahana Community | Kahana</title>
        <meta name="description" content="Join the Kahana community - connect with professionals, share knowledge, and grow together" />
      </Head>

      <NavBar />

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16">
            {/* Left Column - Content */}
            <div className="lg:col-span-7">
              <div className="text-center lg:text-left mb-12">
                <h2 className="text-base font-semibold leading-7 text-[#66C2BE] mb-3">Join Us</h2>
                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                  Grow a Real Cybersecurity + AI Community
                </h1>
                <p className="mt-6 text-xl text-gray-600">
                  We are creating a space for smart, curious people to connect over cybersecurity and AI. It's open to everyone but to keep the cut-off level high, we ask that folks fill out a short form.
                </p>
                <p className="mt-4 text-xl text-gray-600">
                  Once you are in, you'll get access to events, discussion forums, early access to ideas, and the chance to shape how the community grows.
                </p>
              </div>

              {/* Form Section - Now appears first on mobile */}
              <div className="lg:hidden mb-12">
                <div className="bg-white rounded-xl shadow-xl border border-[#A5DAD8]/30 p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-semibold text-gray-900">Join Our Community</h3>
                    <p className="mt-3 text-gray-600">
                      Fill out the form below to become a member of our community.
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
                      src="https://tally.so/embed/mejRDO?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                      width="100%"
                      height="500"
                      frameBorder="0"
                      marginHeight="0"
                      marginWidth="0"
                      title="Join Community Form"
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

                  {/* HackAMonday Section */}
                  <div className="mt-16 bg-white rounded-xl shadow-xl border border-[#A5DAD8]/30 p-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">#HackAMonday Blog Series</h3>
                    <p className="text-lg text-gray-600 mb-8">
                      We're committed to sharing knowledge and keeping our community informed through our weekly blog series. Here's what you can expect:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                      <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-gray-900">Weekly Insights</h4>
                        <ul className="space-y-3 text-gray-600">
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-[#66C2BE] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Lessons learned from recent cyber incidents</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-[#66C2BE] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Community updates and discussions</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-[#66C2BE] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Security feature highlights and demo opportunities</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Community Management Section */}
                  <div className="mt-16 bg-white rounded-xl shadow-xl border border-[#A5DAD8]/30 p-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">Managing the Community</h3>
                    <p className="text-lg text-gray-600 mb-8">
                      We maintain a tight-knit community by carefully reviewing each application. Once approved, members get access to exclusive content and opportunities.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      {/* Member Benefits */}
                      <div className="space-y-6">
                        <h4 className="text-xl font-semibold text-gray-900">Member Benefits</h4>
                        <ul className="space-y-4">
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-[#66C2BE] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-gray-600">Biweekly newsletter with exclusive insights</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-[#66C2BE] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-gray-600">Community-only events and discussions</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-[#66C2BE] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-gray-600">Early previews and beta opportunities</span>
                          </li>
                        </ul>
                      </div>

                      {/* Target Audience */}
                      <div className="space-y-6">
                        <h4 className="text-xl font-semibold text-gray-900">Who We're Building For</h4>
                        <ul className="space-y-4">
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-[#66C2BE] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-gray-600">Enterprise buyers exploring secure browsing solutions</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-[#66C2BE] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-gray-600">CISOs and security leaders</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-[#66C2BE] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-gray-600">Engineers and AI/security practitioners</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-[#66C2BE] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-gray-600">Anyone trying to stay sharp on emerging threats</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Newsletter Section */}
                    <div className="mt-12 bg-[#E3DFF1]/10 rounded-lg p-8 border border-[#A5DAD8]/30">
                      <h4 className="text-xl font-semibold text-gray-900 mb-6">Biweekly Newsletter</h4>
                      <p className="text-gray-600 mb-6">
                        Stay ahead of the curve with our curated biweekly insights, specifically designed for IT leaders and security professionals managing enterprise browser deployments and organizational security policies.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h5 className="font-semibold text-gray-900">Enterprise Browser & Security</h5>
                          <ul className="space-y-3">
                            <li className="flex items-start">
                              <svg className="h-6 w-6 text-[#66C2BE] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="text-gray-600">Best practices for enterprise browser deployment and management</span>
                            </li>
                            <li className="flex items-start">
                              <svg className="h-6 w-6 text-[#66C2BE] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="text-gray-600">Real-world breach analysis and prevention strategies</span>
                            </li>
                            <li className="flex items-start">
                              <svg className="h-6 w-6 text-[#66C2BE] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="text-gray-600">Security policy templates and implementation guides</span>
                            </li>
                          </ul>
                        </div>
                        <div className="space-y-4">
                          <h5 className="font-semibold text-gray-900">AI & Emerging Tech</h5>
                          <ul className="space-y-3">
                            <li className="flex items-start">
                              <svg className="h-6 w-6 text-[#66C2BE] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="text-gray-600">AI integration strategies for enterprise security</span>
                            </li>
                            <li className="flex items-start">
                              <svg className="h-6 w-6 text-[#66C2BE] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="text-gray-600">Community insights and success stories</span>
                            </li>
                            <li className="flex items-start">
                              <svg className="h-6 w-6 text-[#66C2BE] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="text-gray-600">Early access to new features and beta opportunities</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-8 pt-6 border-t border-[#A5DAD8]/30">
                        <p className="text-gray-600 mb-4">
                          Perfect for:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <div className="flex items-center">
                            <svg className="h-5 w-5 text-[#66C2BE] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-gray-600">IT Directors</span>
                          </div>
                          <div className="flex items-center">
                            <svg className="h-5 w-5 text-[#66C2BE] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-gray-600">Security Leaders</span>
                          </div>
                          <div className="flex items-center">
                            <svg className="h-5 w-5 text-[#66C2BE] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-gray-600">Enterprise Architects</span>
                          </div>
                        </div>
                      </div>
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
                            <p className="mt-1 text-sm text-gray-500">
                              {link.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form (Desktop only) */}
            <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-24">
              <div className="bg-white rounded-xl shadow-xl border border-[#A5DAD8]/30 p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-gray-900">Join Our Community</h3>
                  <p className="mt-3 text-gray-600">
                    Fill out the form below to become a member of our community.
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
                    src="https://tally.so/embed/mejRDO?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                    width="100%"
                    height="500"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    title="Join Community Form"
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