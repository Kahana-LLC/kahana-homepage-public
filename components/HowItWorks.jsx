import React, { useState } from 'react';
import Link from 'next/link';

const steps = [
  {
    id: 1,
    name: 'Schedule Demo',
    description: 'See how Oasis brings calm and flow to your enterprise in a personalized session.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 2,
    name: 'Custom Setup',
    description: "We’ll tailor Oasis to fit your organization’s rhythm and needs.",
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
    description: 'Deploy Oasis securely and seamlessly across your workspace.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: 4,
    name: 'Ongoing Support',
    description: 'Enjoy dedicated guidance, updates, and support that keeps you flowing.',
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
      <div className="mx-auto max-w-7xl px-6 lg:px-8 get-started-section">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl font-semibold leading-8 text-[#978455] mb-4">Get Started</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-[#4A5745] sm:text-4xl">
          Bring Oasis to your enterprise
          </p>
          <p className="mt-6 text-lg leading-8 text-[#4A5745]">
          Schedule a demo to bring calm and flow to your digital workspace.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none flex flex-col items-center">
          <style jsx>{`
            .step-card {
              background: linear-gradient(90deg, #F8FAF2 0%, #d6e3f4 100%);
              border-radius: 1rem;
              padding: 2rem;
              box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
              transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            .step-card:hover {
              transform: translateY(-4px);
              box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            }
          `}</style>
          {/* Progress Bar */}
          <div className="relative h-1 bg-[#F3F8E4] rounded-full mb-8 w-full max-w-4xl">
            <div 
              className="absolute h-full bg-gradient-to-r from-[#E0D48C] via-[#728552] to-[#788B59] rounded-full transition-all duration-300 ease-in-out"
              style={{ width: `${(hoveredStep / (steps.length - 1)) * 100}%` }}
            />
          </div>
          
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-4 w-full">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className="step-card"
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(0)}
              >
                <div className="flex items-start justify-center text-center">
                  <div className="flex flex-col items-center w-full">
                    <div className="flex-shrink-0 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7A9200] border border-[#AFBE66] shadow-md mx-auto transition-all duration-300 hover:bg-[#6A8200] hover:border-[#9FAE56]">
                        <div className="text-white">
                          {step.icon}
                        </div>
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="text-base font-semibold leading-7 text-[#4A5745] text-center">
                        {step.name}
                      </div>
                      <div className="mt-2 text-base leading-7 text-[#4A5745] text-center">
                        {step.description}
                      </div>
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
              className="btn-primary inline-flex items-center justify-center px-8 py-3 text-base no-underline hover:no-underline focus:no-underline"
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