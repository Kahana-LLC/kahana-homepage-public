import React from 'react';
import Image from 'next/image';
import DotPattern from '../shared/DotPattern';

const IntroductionSection = () => {
  return (
    <section className="relative min-h-[600px] overflow-hidden bg-black">
      {/* Top right dots */}
      <div className="absolute top-0 right-0 w-72 h-72">
        <DotPattern />
      </div>
      
      {/* Bottom left dots */}
      <div className="absolute bottom-0 left-0 w-72 h-72">
        <DotPattern />
      </div>

      <div className="container mx-auto px-6 pt-16 pb-24">
        <div className="max-w-6xl mx-auto relative">
          {/* Main content */}
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold mb-6 text-white leading-tight tracking-tight">
              The Hephaestus Project: Forging Meta Devices as Tools of Omnipotence
            </h1>
            
            <p className="text-2xl text-gray-300 mb-12">
              How Meta, the company behind groundbreaking innovations like Meta Glasses and Oculus, is poised to transform how we work.
            </p>
          </div>

          {/* Centered image */}
          <div className="relative w-full flex justify-center items-center mt-8">
            <Image
              src="/images-meta/introduction.jpg"
              alt="Meta Touch Free Interface"
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