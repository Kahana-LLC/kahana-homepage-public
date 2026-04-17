import React from 'react';
import Link from 'next/link';
import OasisYouTubeEmbed from './OasisYouTubeEmbed';

export default function VideoSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
          {/* Left side - Text content */}
          <div className="lg:col-span-5 px-4 sm:px-6 text-center md:mx-auto md:max-w-2xl lg:text-left">
            <div>
              <h2 className="text-base font-semibold leading-7 text-[#4A5745] text-center lg:text-left mb-2">See Oasis in Action</h2>
              <p className="text-lg text-[#4A5745] mb-4 text-center lg:text-left">
                <strong>Why Oasis?</strong><br />
                We built Oasis because we were tired of the chaos of modern browsing—endless tabs, lost ideas, and scattered focus. Our team set out to create a browser that delivers an experience that can only be described as omnipotence.
              </p>
              <p className="text-lg text-[#4A5745] mb-4 text-center lg:text-left">
                In this video, you'll see a demo of Oasis's core features and get a glimpse of the future we're building—where your browser is not just a tool, but a companion ready at the sound of your voice.
              </p>
              <div className="text-center lg:text-left">
                <Link href="/products/oasis-browser" className="btn-primary no-underline hover:no-underline focus:no-underline">
                    Oasis Browser
                </Link>
              </div>
            
            </div>
          </div>

          {/* Right side - Video */}
          <div className="lg:col-span-7 mt-16 lg:mt-0 flex items-center justify-center">
            <div className="w-full h-56 sm:h-72 md:h-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center bg-black">
              <OasisYouTubeEmbed wrapperClassName="w-full h-full min-h-[14rem]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 