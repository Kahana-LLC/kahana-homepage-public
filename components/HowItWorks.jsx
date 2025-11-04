import React, { useState } from 'react';
import Link from 'next/link';

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

export default function HowItWorks() {
  const [hoveredStep, setHoveredStep] = useState(0);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-[#4A5745]">Get Started</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-[#4A5745] sm:text-4xl">
            Deploy Oasis Across Your Enterprise
          </p>
          <p className="mt-6 text-lg leading-8 text-[#4A5745]">
            Ready to transform your organization's digital workspace? Schedule a demo to see Oasis in action and learn how we'll help you deploy it securely across your organization.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          {/* Progress Bar */}
          <div className="relative h-1 bg-[#F3F8E4] rounded-full mb-8">
            <div 
              className="absolute h-full bg-gradient-to-r from-[#E0D48C] via-[#728552] to-[#788B59] rounded-full transition-all duration-300 ease-in-out"
              style={{ width: `${(hoveredStep / (steps.length - 1)) * 100}%` }}
            />
          </div>
          
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className="bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 rounded-xl overflow-hidden p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(0)}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#788B59] to-[#728552] shadow-md">
                      <div className="text-white">
                        {step.icon}
                      </div>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="text-base font-semibold leading-7 text-[#4A5745]">
                      {step.name}
                    </div>
                    <div className="mt-2 text-base leading-7 text-[#4A5745]">
                      {step.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Download Button */}
          <div className="mt-12 text-center">
                        <Link
              href="/schedule-demo"
              className="nav-button download inline-flex items-center justify-center rounded-md text-white font-bold shadow-sm px-8 py-3 text-base no-underline hover:no-underline focus:no-underline"
              style={{ textDecoration: 'none', backgroundColor: '#788B59' }}
            >
              <span>Schedule Your Demo</span>
              <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 