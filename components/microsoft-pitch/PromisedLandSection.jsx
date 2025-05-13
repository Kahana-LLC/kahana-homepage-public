import React from 'react';
import Image from 'next/image';

const PromisedLandSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-apple/promised-land.jpg"
          alt="Future vision of seamless Microsoft productivity interaction"
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-6">
        <p className="text-xl text-gray-600">
          Every command instantly transforms your productivity interface, making information access effortless and ergonomic. Whether through voice or natural language, each action creates the perfect view for your work context.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Command to Interface Magic</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Speak naturally to instantly expand content across Windows' infinite canvas</li>
            <li>Use voice commands to transform your Office view into exactly what you need</li>
            <li>Quick gestures shuffle through your curated document list on Surface</li>
            <li>Voice commands instantly sync your content across any Microsoft device</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Intelligent Interface</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Natural interface transitions between devices</li>
            <li>Dynamic interface organization triggered by commands</li>
            <li>Content suggestions based on work context</li>
            <li>Device-optimized interfaces that work together seamlessly</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 bg-black text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">The Interface Revolution</h3>
        <p className="text-gray-300 mb-6">
          The command-interface relationship extends naturally into augmented reality (AR), which overlays digital content onto the physical world, and virtual reality (VR), which creates fully immersive digital environments. This creates unprecedented 3D productivity and information management experiences. With HoloLens as the centerpiece, this future transforms how we interact with digital content through both AR and VR capabilities.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-white">AR Interface</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Voice commands trigger AR interfaces</li>
              <li>Gesture controls morph 3D content states</li>
              <li>Context-aware view overlays</li>
              <li>Fluid transitions between 2D and 3D states</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-white">VR Interface</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Immersive 3D interface environments</li>
              <li>Natural navigation between virtual views</li>
              <li>Customizable workspace layouts</li>
              <li>Shared collaborative spaces</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromisedLandSection; 