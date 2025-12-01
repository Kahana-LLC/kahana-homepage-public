import React from 'react';
import Link from 'next/link';

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 get-started-section">
      <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
        <h2 className="text-xl font-semibold leading-8 text-[#978455] mb-2">
          Get Started
        </h2>
        <h1 className="text-3xl font-semibold tracking-tight text-[#313A00] sm:text-4xl">
          Bring Oasis to your organization
        </h1>
        <p className="mt-4 text-lg text-[#4A5745]">
          Learn how Oasis can help you and your organization.
        </p>

        <div className="mx-auto mt-16 max-w-3xl w-full flex flex-col items-center">
          <div className="w-full rounded-[36px] bg-white/90 border border-white/80 shadow-[0_30px_120px_rgba(20,32,0,0.18)] p-4 sm:p-6 backdrop-blur">
            <div className="relative w-full overflow-hidden rounded-[32px] border border-white/80 bg-black">
              <div className="w-full aspect-[4/3]">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/05-oP8CNl8Y"
                  title="Oasis AI-Powered Browser Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

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
    </section>
  );
}