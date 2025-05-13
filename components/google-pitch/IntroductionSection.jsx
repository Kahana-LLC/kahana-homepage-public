import React from 'react';
import Image from 'next/image';

const IntroductionSection = () => {
  return (
    <section className="relative min-h-[600px] overflow-hidden bg-black">
      <div className="container mx-auto px-6 pt-16 pb-24">
        <div className="max-w-6xl mx-auto relative">
          {/* Main content */}
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold mb-6 text-white leading-tight tracking-tight">
              The Hephaestus Project: Transforming Google's Search Universe with AI
            </h1>
            <p className="text-2xl text-gray-300 mb-12">
              How Google can revolutionize search and productivity by making AI the core of every user experience.
            </p>
          </div>
          {/* Centered image */}
          <div className="relative w-full flex justify-center items-center mt-8">
            <Image
              src="/images-apple/introduction.jpg"
              alt="Vision of future Google search with seamless AI integration"
              width={800}
              height={450}
              className="rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection; 