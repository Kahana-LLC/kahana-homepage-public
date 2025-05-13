import React from 'react';
import Image from 'next/image';

const VsCompetitorsSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-google/competitors.jpg"
          alt="Competing device ecosystems from Meta, Microsoft, and Apple"
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-6">
        <p className="text-xl text-gray-600">
          While Google focuses on search and AI, competitors are building comprehensive device ecosystems 
          that could leave Google behind. Each company has a unique combination of devices that, when 
          combined with AI, create powerful platforms for work and information management.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Meta's Device Portfolio</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Ray-Ban Meta Smart Glasses with AI assistant</li>
            <li>Quest 3 VR headset for immersive work</li>
            <li>Quest Pro for enterprise productivity</li>
            <li>Future AR glasses in development</li>
          </ul>
          <p className="text-gray-600 mt-4">
            Meta's combination of smart glasses and VR headsets, powered by AI, creates a unique platform 
            for hands-free work and information access. Their early lead in AR/VR could give them a 
            significant advantage in the future of work.
          </p>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Microsoft's Hardware</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Surface Pro for mobile productivity</li>
            <li>Surface Laptop Studio for creative work</li>
            <li>Surface Duo for dual-screen mobile</li>
            <li>HoloLens 2 for enterprise AR</li>
          </ul>
          <p className="text-gray-600 mt-4">
            Microsoft's Surface lineup, combined with Windows and Copilot AI, creates a powerful ecosystem 
            for enterprise users. Their focus on productivity and work tools gives them a strong position 
            in the future of work.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Apple's Device Ecosystem</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>iPhone 15 Pro with advanced AI capabilities</li>
            <li>Apple Watch Series 9 for quick access</li>
            <li>Vision Pro for spatial computing</li>
            <li>MacBook Pro with Neural Engine</li>
          </ul>
          <p className="text-gray-600 mt-4">
            Apple's tightly integrated ecosystem of devices, all powered by AI, creates a seamless experience 
            for users. Their combination of mobile, wearable, and spatial computing devices gives them a 
            complete platform for the future.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-black text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">The Device Gap</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-semibold mb-2">Missing Pieces</h4>
            <p className="text-gray-300">
              Google's ecosystem lacks the diverse device options that competitors offer. While Pixel phones,
              Chromebooks, and Google Home are solid products, they don't provide the same level of integration and
              capability as competitors' comprehensive device portfolios.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">AI Integration</h4>
            <p className="text-gray-300">
              Each competitor is integrating AI deeply into their device ecosystems. From Meta's AI assistant 
              in smart glasses to Apple's Neural Engine and Microsoft's Copilot, they're creating seamless 
              AI experiences across their hardware.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Future of Work</h4>
            <p className="text-gray-300">
              The future of work requires diverse device options that enable productivity in any context. 
              Competitors are building these ecosystems now, while Google risks being left behind with its 
              limited device portfolio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VsCompetitorsSection; 