import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import VideoSection from '../components/VideoSection';
import Script from 'next/script';
import OasisYouTubeEmbed from '../components/OasisYouTubeEmbed';

const steps = [
  {
    id: 1,
    name: 'Sign up for waitlist',
    description: 'Join the waitlist to be among the first to experience the future of browsing with Oasis AR.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Only get notified when it's ready",
    description: "We promise not to spam. You'll only hear from us when Oasis AR is ready for download.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4 19h6v-2H4v2zM4 15h6v-2H4v2zM4 11h6V9H4v2zM4 7h6V5H4v2z" />
      </svg>
    ),
  },
  {
    id: 3,
    name: 'Early-bird discount bonus',
    description: 'As a bonus, by joining the waitlist you get an early-bird discount on Oasis AR enterprise if you ever decide to deploy across your organization.',
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
    href: '/products/oasis-browser',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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

export default function OasisAugmentedReality() {
  const [hoveredStep, setHoveredStep] = useState(0);

  const renderForm = () => (
    <div className="w-full">
      <iframe
        src="https://tally.so/r/3q9AlO"
        width="100%"
        height="400"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Oasis AR Waitlist"
        style={{ border: 0,
          borderRadius: 0,
          backgroundColor: 'transparent',
          display: 'block' }}
      />
    </div>
  );

  // Video embed with heading
  const videoEmbed = (
    <div className="w-full flex flex-col items-center mt-8">
      <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center lg:text-left w-full">See Oasis AR in action</h3>
      <div className="w-full h-56 sm:h-72 md:h-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center bg-black">
        <OasisYouTubeEmbed wrapperClassName="w-full h-full min-h-[14rem]" />
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <title>Join Oasis AR Waitlist | Kahana</title>
        <meta name="description" content="Join the Oasis augmented reality browser waitlist - be among the first to experience the future of AR-powered browsing" />
      </Head>
      <div className="oasis-ar">
        <main className="min-h-screen bg-white pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-16">
              {/* Left Column - Content */}
              <div className="lg:col-span-7">
                <div className="text-center lg:text-left mb-12">
                  <h2 className="text-base font-semibold leading-7 text-brand-link mb-3">Your story deserves an Oasis</h2>
                  <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                    Start your next chapter with Oasis AR
                  </h1>
                  <p className="mt-6 text-xl text-gray-600">
                    Meet Oasis AR, the augmented reality browser that revolutionizes how you interact with the digital world. Experience the web like never before with spatial computing, gesture controls, and immersive AI assistance that brings information to life in your physical space.
                  </p>
                  {/* Desktop: Show video below intro paragraph */}
                  <div className="hidden lg:block">
                    {videoEmbed}
                  </div>
                </div>

                {/* Form Section - Now appears first on mobile */}
                <div className="lg:hidden mb-12">
                  <div className="bg-white rounded-xl shadow-xl p-8">
                    {renderForm()}
                  </div>
                  {/* Mobile: Show video below form */}
                  <div className="block mt-8">
                    {videoEmbed}
                  </div>
                </div>

                {/* Steps Section */}
                <div className="mb-12 lg:mb-0">
                  <div className="mx-auto">
                    {/* Progress Bar */}
                    <div className="relative h-1 bg-gray-100 rounded-full mb-12">
                      <div 
                        className="absolute h-full bg-gradient-to-r from-oasis-blue-100 via-oasis-blue-300 to-brand-link rounded-full transition-all duration-300 ease-in-out"
                        style={{ width: `${(hoveredStep / (steps.length - 1)) * 100}%` }}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 gap-6">
                      {steps.map((step, index) => (
                        <div 
                          key={step.id} 
                          className="bg-gradient-to-br from-desert-yellow-100/20 to-oasis-blue-300/10 rounded-xl overflow-hidden p-6 shadow-lg shadow-oasis-blue-100/20 hover:shadow-xl hover:shadow-oasis-blue-100/30 transition-all duration-300"
                          onMouseEnter={() => setHoveredStep(index)}
                          onMouseLeave={() => setHoveredStep(0)}
                        >
                          <div className="flex items-start">
                            <div className="flex-shrink-0">
                              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-brand-link via-oasis-blue-300 to-oasis-blue-100 shadow-md shadow-oasis-blue-100/20">
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
                    <div className="mt-16 bg-white rounded-xl shadow-xl p-8">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-6">The Oasis AR Advantage</h3>
                      <p className="text-lg text-gray-600 mb-8">
                        Oasis AR isn&apos;t just another browser. It&apos;s a spatial computing revolution that brings the web into your physical world. Experience unprecedented immersion and control with AI-powered augmented reality that understands your environment and adapts to your needs.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="space-y-4">
                          <h4 className="text-xl font-semibold text-gray-900">Spatial AI Intelligence</h4>
                          <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start">
                              <svg className="h-6 w-6 text-brand-link mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>AI assistant that understands your physical environment</span>
                            </li>
                            <li className="flex items-start">
                              <svg className="h-6 w-6 text-brand-link mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>Gesture and voice-controlled web navigation</span>
                            </li>
                            <li className="flex items-start">
                              <svg className="h-6 w-6 text-brand-link mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>3D spatial organization of digital content</span>
                            </li>
                          </ul>
                        </div>
                        <div className="space-y-4">
                          <h4 className="text-xl font-semibold text-gray-900">Immersive AR Experience</h4>
                          <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start">
                              <svg className="h-6 w-6 text-brand-link mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>Web content projected into your physical space</span>
                            </li>
                            <li className="flex items-start">
                              <svg className="h-6 w-6 text-brand-link mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>Multi-dimensional workspace layouts</span>
                            </li>
                            <li className="flex items-start">
                              <svg className="h-6 w-6 text-brand-link mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>Context-aware information overlay</span>
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
                <div className="bg-white rounded-xl shadow-xl p-8">
                  {renderForm()}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
