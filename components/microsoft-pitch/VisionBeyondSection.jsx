import React from 'react';
import Image from 'next/image';

const VisionBeyondSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-microsoft/vision-beyond.jpg"
          alt="Future vision of Microsoft device and AI-powered ecosystem"
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-6">
        <p className="text-xl text-gray-600">
          Our vision is to create a unified, AI-powered Microsoft ecosystem—where every device, from Surface to Windows PCs to Xbox, works together seamlessly. AI becomes the connective tissue, enabling new experiences, productivity, and creativity across all Microsoft hardware and services.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">A Connected Device Ecosystem</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Seamless handoff and continuity between Surface, Windows PCs, Xbox, and more</li>
            <li>Unified AI assistant accessible on every device</li>
            <li>Personalized experiences that adapt to user context and preferences</li>
            <li>Effortless collaboration and content sharing across the Microsoft ecosystem</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">AI at the Core</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Natural language interaction and intelligent automation on every device</li>
            <li>Context-aware recommendations and proactive assistance</li>
            <li>Real-time insights and productivity enhancements</li>
            <li>Continuous learning and improvement across the ecosystem</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 bg-black text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">The Future of Microsoft</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-semibold mb-2">Device-Driven Innovation</h4>
            <p className="text-gray-300">
              Microsoft will lead the next era of computing by delivering AI-powered experiences that are deeply integrated into every device, making technology more intuitive, helpful, and empowering for everyone.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Unified Ecosystem</h4>
            <p className="text-gray-300">
              A single Microsoft account, a single AI assistant, and a seamless experience—no matter which device you use. The future is a truly unified Microsoft ecosystem.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Empowering People</h4>
            <p className="text-gray-300">
              By combining the power of devices and AI, Microsoft will empower people to achieve more, create more, and connect more—at work, at home, and everywhere in between.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionBeyondSection; 