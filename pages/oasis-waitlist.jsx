import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import NavBar from '../components/NavbarDup';
import VideoSection from '../components/VideoSection';
import Script from 'next/script';

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
    name: "Only get notified when it's ready",
    description: "We promise not to spam. You'll only hear from us when Oasis is ready for download.",
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

  const renderForm = () => (
    <div className="w-full">
      <iframe
        src="https://tally.so/r/w8V8GA"
        width="100%"
        height="400"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Oasis Waitlist"
        style={{ border: 0,
          borderRadius: 0,
          backgroundColor: 'transparent',
          display: 'block' }}
      />
      
      {/* Disclaimer Section */}
      <div className="mt-4 pt-4 border-t border-gray-200 bg-white relative -mt-8 pt-8">
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-3">
            <strong>Contact us</strong> - for an immediate response, contact us directly at{' '}
            <Link href="/contact" className="text-[#66C2BE] hover:text-[#4A9E9A] underline">
              contact us
            </Link>
          </p>
          <p className="text-xs text-gray-500">
            By submitting this form you consent to be contacted by Kahana, and acknowledge our{' '}
            <Link href="/privacy-policy" className="text-[#66C2BE] hover:text-[#4A9E9A] underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );

  // Video embed with heading
  const videoEmbed = (
    <div className="w-full flex flex-col items-center mt-8">
      <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center lg:text-left w-full">See Oasis in action</h3>
      <div className="w-full h-56 sm:h-72 md:h-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center bg-black">
        <iframe
          className="w-full h-full min-h-[14rem]"
          src="https://www.youtube.com/embed/05-oP8CNl8Y"
          title="Oasis AI-Powered Browser Demo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ minHeight: '14rem' }}
        ></iframe>
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <title>Join Oasis Waitlist | Kahana</title>
        <meta name="description" content="Join the Oasis browser waitlist - be among the first to experience the future of privacy-focused browsing" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <style jsx global>{`
        .oasis-waitlist-ptserif h1,
        .oasis-waitlist-ptserif h2,
        .oasis-waitlist-ptserif h3,
        .oasis-waitlist-ptserif h4,
        .oasis-waitlist-ptserif h5,
        .oasis-waitlist-ptserif h6,
        .oasis-waitlist-ptserif p,
        .oasis-waitlist-ptserif li,
        .oasis-waitlist-ptserif span,
        .oasis-waitlist-ptserif a,
        .oasis-waitlist-ptserif strong {
          font-family: 'PT Serif', serif !important;
        }
      `}</style>
      <div className="oasis-waitlist-ptserif">
        <NavBar />
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-16">
              {/* Left Column - Content */}
              <div className="lg:col-span-7">
                <div className="text-center lg:text-left mb-12">
                  <h2 className="text-base font-semibold leading-7 text-[#66C2BE] mb-3">Your story deserves an Oasis</h2>
                  <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                    Start your next chapter with Oasis
                  </h1>
                  <p className="mt-6 text-xl text-gray-600">
                    Meet Oasis, the agentic browser that elevates how you explore and organize the web. Instead of hunting through endless tabs, scrolling through browser history, or juggling multiple windows, simply tell Oasis what you need. 
                  </p>
                  {/* Desktop: Show video below intro paragraph */}
                  <div className="hidden lg:block">
                    {videoEmbed}
                  </div>
                </div>

                {/* Form Section - Now appears first on mobile */}
                <div className="lg:hidden mb-12">
                  <div className="bg-white rounded-xl shadow-xl border border-[#A5DAD8]/30 p-8">
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