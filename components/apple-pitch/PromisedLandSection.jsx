import React from 'react';
import Image from 'next/image';

const PromisedLandSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-apple/promised-land.jpg"
          alt="Vision Pro user interacting with AR/VR interfaces across multiple devices"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-6">
        <p className="text-xl text-gray-600">
          Imagine an Apple ecosystem where every command instantly transforms your view state—no touch required. We see Apple—the company that revolutionized the touch screen—becoming the first to eliminate the need for it entirely. With Vision Pro leading the way, this is a 100% touch-free oasis, where your natural actions fluidly transition between graphical user interfaces: voice commands materialize new information layouts, gestures reshape 3D spaces, and intuitive controls seamlessly sync views across all your devices.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Command to Graphical User Interface Magic</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Look and pinch to instantly expand content across Vision Pro's infinite canvas</li>
            <li>Speak naturally to transform your Mac's view into exactly what you need</li>
            <li>Quick wrist turns shuffle through your curated reading list on Apple Watch</li>
            <li>Voice commands instantly sync your view across any device</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Intelligent Graphical User Interface</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>AI-powered Graphical User Interface transitions between devices</li>
            <li>Dynamic view organization based on context</li>
            <li>Personalized Graphical User Interface that adapts to your needs</li>
            <li>Context-aware view suggestions for your activity</li>
            <li>Unified Graphical User Interface across all devices</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 bg-black text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">The Graphical User Interface Revolution</h3>
        <p className="text-gray-300 mb-6">
          The command-Graphical User Interface relationship defines this new era of computing. Every action triggers an intelligent Graphical User Interface change, creating immersive 3D browsing and information management experiences. With Vision Pro as the centerpiece, this future transforms how we transition between Graphical User Interface through both AR and VR capabilities.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-white">AR Graphical User Interface</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Voice commands trigger augmented information views</li>
              <li>Gesture controls morph 3D content states</li>
              <li>Context-aware view overlays</li>
              <li>Fluid transitions between 2D and 3D states</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-white">VR Graphical User Interface</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Immersive 3D Graphical User Interface environments</li>
              <li>Natural navigation between virtual views</li>
              <li>Customizable workspace Graphical User Interface</li>
              <li>Shared collaborative view spaces</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromisedLandSection; 