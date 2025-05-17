import React from 'react';
import Image from 'next/image';

const KeyFeaturesSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-64 w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg"
          alt="Nature forest"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800">Revolutionary Features</h3>
        <p className="text-gray-600">
          Our latest product introduces groundbreaking features that set new standards in the industry. Each feature 
          has been meticulously designed to enhance your experience and push the boundaries of what's possible.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="p-6 bg-gray-50 rounded-lg space-y-4">
          <h4 className="text-xl font-semibold text-gray-800">Advanced AI Integration</h4>
          <p className="text-gray-600">
            Next-generation AI capabilities that learn and adapt to your needs, providing personalized experiences 
            and intelligent assistance.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Context-aware assistance</li>
            <li>Predictive capabilities</li>
            <li>Natural language processing</li>
          </ul>
        </div>
        
        <div className="p-6 bg-gray-50 rounded-lg space-y-4">
          <h4 className="text-xl font-semibold text-gray-800">Enhanced Security</h4>
          <p className="text-gray-600">
            State-of-the-art security features that protect your data while maintaining ease of use.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Biometric authentication</li>
            <li>End-to-end encryption</li>
            <li>Privacy-focused design</li>
          </ul>
        </div>
        
        <div className="p-6 bg-gray-50 rounded-lg space-y-4">
          <h4 className="text-xl font-semibold text-gray-800">Ecosystem Integration</h4>
          <p className="text-gray-600">
            Seamless integration with the Mozilla ecosystem, creating a unified experience across all your devices.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Universal Control</li>
            <li>Handoff capabilities</li>
            <li>Shared experiences</li>
          </ul>
        </div>
        
        <div className="p-6 bg-gray-50 rounded-lg space-y-4">
          <h4 className="text-xl font-semibold text-gray-800">Sustainable Design</h4>
          <p className="text-gray-600">
            Environmentally conscious design that doesn't compromise on performance or aesthetics.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Recycled materials</li>
            <li>Energy efficient</li>
            <li>Reduced carbon footprint</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800">Performance Highlights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Processing Power</h4>
            <p className="text-gray-600">2x faster than previous generation</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Battery Life</h4>
            <p className="text-gray-600">Up to 20 hours of active use</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Display</h4>
            <p className="text-gray-600">Industry-leading resolution and color accuracy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeaturesSection; 