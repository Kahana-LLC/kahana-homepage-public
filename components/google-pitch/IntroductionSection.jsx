import React from 'react';
import Image from 'next/image';

const IntroductionSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-google/introduction-google.jpg"
          alt="Vision of future Google productivity with seamless AI integration"
          width={800}
          height={450}
          className="rounded-lg"
          priority
        />
      </div>
      <p className="text-xl text-gray-600">
        In an era where technology is reshaping every aspect of our lives, Google stands at the forefront of innovation. Our next-generation ecosystem—spanning Google Home, Pixel, Chromebooks, and the foundation for future AR/VR devices—represents a leap forward, combining advanced AI with Google's signature approach to information and connectivity.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">The Vision</h3>
          <p className="text-gray-600">
            We envision a world where Google devices and services seamlessly integrate into daily life, empowering users to access, control, and create information naturally—by voice, gesture, or intent—across every context and environment.
          </p>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">The Mission</h3>
          <p className="text-gray-600">
            To push the boundaries of what's possible, creating products that not only meet but exceed our users' expectations, while maintaining our commitment to privacy, security, and responsible innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroductionSection; 