import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import NavBar from '../components/NavbarDup';

const steps = [
  {
    id: 1,
    name: 'Contact Sales',
    description: 'Connect with our sales team to learn about enterprise solutions.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 2,
    name: 'Custom Solution',
    description: "Our team will work with you to design a solution that fits your organization's needs.",
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
    description: 'Get help with deployment and implementation across your organization.',
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

export default function Sales() {
  const [hoveredStep, setHoveredStep] = useState(0);

  return (
    <>
      <Head>
        <title>Sales | Kahana</title>
        <meta
          name="description"
          content="Connect with Kahana's sales team to learn about our enterprise browsing solutions."
        />
      </Head>

      <NavBar />

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16">
            {/* Left Column - Content */}
            <div className="lg:col-span-7">
              <div className="text-center lg:text-left mb-12">
                <h2 className="text-base font-semibold leading-7 text-[#66C2BE] mb-3">Talk to Sales</h2>
                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                  Transform Your Enterprise Browsing Experience
                </h1>
                <p className="mt-6 text-xl text-gray-600">
                  Ready to enhance your organization's digital workspace? Connect with our sales team to learn how Kahana can transform your enterprise browsing experience.
                </p>
              </div>

              {/* Form Section - Now appears first on mobile */}
              <div className="lg:hidden mb-12">
                <div className="bg-white rounded-xl shadow-xl border border-[#A5DAD8]/30 p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-semibold text-gray-900">Contact Sales</h3>
                    <p className="mt-3 text-gray-600">
                      Get in touch with our sales team to learn about enterprise solutions.
                    </p>
                  </div>
                  <iframe
                    src="https://tally.so/embed/3xzNKv?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&redirectUrl=https://kahana.is/thankyou-sales"
                    width="100%"
                    height="500"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    title="Sales Contact Form"
                    style={{ minWidth: '100%' }}
                  ></iframe>
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

            {/* Right Column - Form (Desktop only) */}
            <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-24">
              <div className="bg-white rounded-xl shadow-xl border border-[#A5DAD8]/30 p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-gray-900">Contact Sales</h3>
                  <p className="mt-3 text-gray-600">
                    Get in touch with our sales team to learn about enterprise solutions.
                  </p>
                </div>
                <iframe
                  src="https://tally.so/embed/3xzNKv?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&redirectUrl=https://kahana.is/thankyou-sales"
                  width="100%"
                  height="500"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  title="Sales Contact Form"
                  style={{ minWidth: '100%' }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
