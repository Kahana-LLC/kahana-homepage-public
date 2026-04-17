import React from 'react';
import Link from 'next/link';
import OasisYouTubeEmbed from './OasisYouTubeEmbed';

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 get-started-section">
      <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
        <h2 className="text-xl font-semibold leading-8 text-[#5C5F2E] mb-2">
          Get Started
        </h2>
        <h2 className="text-3xl font-semibold tracking-tight text-[#313A00] sm:text-4xl">
          Bring Oasis to your organization
        </h2>
        <p className="mt-4 text-lg text-oasis-green-800">
          Learn how Oasis can help you and your organization.
        </p>
        <div className="mt-8">
          <Link
            href="/schedule-demo"
            className="btn-primary inline-flex items-center justify-center px-8 py-3 text-base no-underline hover:no-underline focus:no-underline scale-110 sm:scale-125"
          >
            Schedule Demo
          </Link>
        </div>

        <div className="mx-auto mt-16 max-w-3xl w-full flex flex-col items-center">
          <div className="w-full rounded-[36px] bg-white/90 border border-white/80 shadow-[0_30px_120px_rgba(20,32,0,0.18)] p-4 sm:p-6 backdrop-blur">
            <div className="relative w-full overflow-hidden rounded-[32px] border border-white/80 bg-black">
              <div className="w-full aspect-[4/3]">
                <OasisYouTubeEmbed wrapperClassName="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}