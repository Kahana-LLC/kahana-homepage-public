import React from 'react';
import Image from 'next/image';

const IntroductionSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-microsoft/introduction.jpg"
          alt="Microsoft AI-powered enterprise solutions"
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-6">
        <p className="text-xl text-gray-600">
          Microsoft is revolutionizing enterprise software with AI-powered solutions that transform how organizations work, 
          collaborate, and make decisions. Our technology combines the power of artificial intelligence with deep enterprise 
          expertise to create a new era of intelligent business operations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">The Vision</h3>
          <p className="text-gray-600">
            A future where every organization has access to intelligent tools that augment human capabilities, 
            enabling unprecedented levels of productivity, innovation, and growth.
          </p>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">The Mission</h3>
          <p className="text-gray-600">
            To empower every organization with AI-powered solutions that transform how they work, 
            making intelligent operations accessible to businesses of all sizes.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-black text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">Our Approach</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-semibold mb-2">Enterprise-First</h4>
            <p className="text-gray-300">
              Built on decades of enterprise software expertise, our solutions are designed to meet the unique needs of modern businesses.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">AI-Powered</h4>
            <p className="text-gray-300">
              Leveraging cutting-edge AI to transform traditional enterprise software into intelligent, adaptive systems.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Human-Centered</h4>
            <p className="text-gray-300">
              Focusing on augmenting human capabilities rather than replacing them, enabling people to achieve more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionSection; 