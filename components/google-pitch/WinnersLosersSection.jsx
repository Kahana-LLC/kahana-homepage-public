import React from 'react';
import Image from 'next/image';

const WinnersLosersSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-google/winners-losers.jpg"
          alt="Competitive landscape of device ecosystems"
          fill
          className="object-cover"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {/* Top Left - Microsoft */}
        <div className="space-y-4 p-6 bg-gray-50 rounded-tl-xl rounded-tr-xl md:rounded-tr-none rounded-bl-xl md:rounded-bl-none border border-gray-100">
          <h3 className="text-2xl font-semibold text-black">Microsoft: Enterprise Device Ecosystem</h3>
          <div className="space-y-2">
            <p className="text-gray-600">
              Microsoft's Surface lineup, combined with Windows and Copilot AI, creates a powerful ecosystem 
              for enterprise users. Their Surface Pro, Surface Laptop Studio, Surface Duo, and HoloLens 2 
              provide a complete range of devices for work, while Google struggles to compete in the enterprise 
              hardware space.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <a href="https://www.techradar.com/microsoft-surface-lineup-2023" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">TechRadar Analysis</a>
              <a href="https://www.zdnet.com/microsoft-surface-enterprise-review" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">ZDNet Review</a>
            </div>
          </div>
        </div>

        {/* Top Right - Apple */}
        <div className="space-y-4 p-6 bg-gray-50 rounded-tr-xl rounded-tl-xl md:rounded-tl-none rounded-br-xl md:rounded-br-none border border-gray-100">
          <h3 className="text-2xl font-semibold text-black">Apple: Complete Device Portfolio</h3>
          <div className="space-y-2">
            <p className="text-gray-600">
              Apple's ecosystem of iPhone 15 Pro, Apple Watch Series 9, Vision Pro, and MacBook Pro, all 
              powered by AI, creates a seamless experience for users. Their combination of mobile, wearable, 
              and spatial computing devices gives them a complete platform for the future, while Google 
              lacks comparable device options.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <a href="https://www.macworld.com/article/2643830/apple-device-ecosystem-2023.html" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">MacWorld Report</a>
            </div>
          </div>
        </div>

        {/* Bottom Left - Meta */}
        <div className="space-y-4 p-6 bg-gray-50 rounded-bl-xl rounded-br-xl md:rounded-br-none rounded-tl-xl md:rounded-tl-none border border-gray-100">
          <h3 className="text-2xl font-semibold text-black">Meta: AR/VR Leadership</h3>
          <div className="space-y-2">
            <p className="text-gray-600">
              Meta's combination of Ray-Ban Smart Glasses, Quest 3, and Quest Pro, powered by AI, creates 
              a unique platform for hands-free work and information access. Their early lead in AR/VR 
              could give them a significant advantage in the future of work, while Google has no comparable 
              devices in this space.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <a href="https://socialmediatoday.com/meta-device-ecosystem-2023" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">Social Media Today</a>
            </div>
          </div>
        </div>

        {/* Bottom Right - Google */}
        <div className="space-y-4 p-6 bg-gray-50 rounded-br-xl rounded-bl-xl md:rounded-bl-none rounded-tr-xl md:rounded-tr-none border border-gray-100">
          <h3 className="text-2xl font-semibold text-black">Google: Limited Device Options</h3>
          <div className="space-y-2">
            <p className="text-gray-600">
              While Google has powerful AI capabilities through Gemini, its device ecosystem is limited to 
              Pixel phones and Google Home speakers. This lack of diverse device options means users can't 
              fully leverage Gemini's capabilities, putting Google at a significant disadvantage in the 
              future of work and information management.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <a href="https://www.theverge.com/google-device-ecosystem-2023" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">The Verge Analysis</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinnersLosersSection; 