import React from 'react';
import Image from 'next/image';

const IntroductionSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-apple/introduction.jpg"
          alt="Vision of future Apple ecosystem with seamless AI integration"
          fill
          className="object-cover"
        />
      </div>
      <p className="text-xl text-gray-600">
        In an era where technology is reshaping every aspect of our lives, Apple continues to lead the charge in innovation. 
        Our latest product represents a quantum leap forward, combining cutting-edge technology with Apple's signature design 
        philosophy to create something truly revolutionary.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">The Vision</h3>
          <p className="text-gray-600">
            We envision a world where technology seamlessly integrates into our daily lives, enhancing our capabilities 
            while maintaining the simplicity and elegance that Apple is known for.
          </p>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">The Mission</h3>
          <p className="text-gray-600">
            To push the boundaries of what's possible, creating products that not only meet but exceed our customers' 
            expectations, while maintaining our commitment to privacy, security, and environmental responsibility.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroductionSection; 