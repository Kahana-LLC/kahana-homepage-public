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
              The Hephaestus Project: Forging Meta Devices as Tools of Omnipotence
            </h1>
            <p className="text-2xl text-gray-300 mb-12">
              How Meta, the company behind groundbreaking innovations like Meta Glasses and Oculus, is poised to transform how we work—if only we could quickly access valuable information and resources in these immersive environments.
            </p>
          </div>
          {/* Centered image */}
          <div className="relative w-full flex justify-center items-center mt-8">
            <Image
              src="/images-apple/introduction.jpg"
              alt="Vision of future Meta ecosystem with seamless AI integration"
              width={800}
              height={450}
              className="rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
      {/* Vision and Mission below hero */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">The Vision</h3>
              <p className="text-gray-600">
                We envision a world where technology seamlessly integrates into our daily lives, enhancing our capabilities while maintaining the simplicity and elegance that Meta is known for.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">The Mission</h3>
              <p className="text-gray-600">
                To push the boundaries of what's possible, creating products that not only meet but exceed our customers' expectations, while maintaining our commitment to privacy, security, and environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection; 