import React from 'react';
import Image from 'next/image';

const KeyFeaturesSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-64 w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-apple/key-features.jpg"
          alt="AI-powered Apple device experience"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800">Revolutionary Features</h3>
        <p className="text-gray-600">
          The Hermes Project introduces groundbreaking features that transform social media interaction. Each feature 
          has been meticulously designed to enhance your social experience and push the boundaries of what's possible.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="p-6 bg-gray-50 rounded-lg space-y-4">
          <h4 className="text-xl font-semibold text-gray-800">Intelligent Content Discovery</h4>
          <p className="text-gray-600">
            AI-powered content discovery that understands context and intent, making it easier to find and engage with relevant content.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Natural language search</li>
            <li>Context-aware recommendations</li>
            <li>Smart content organization</li>
          </ul>
        </div>
        
        <div className="p-6 bg-gray-50 rounded-lg space-y-4">
          <h4 className="text-xl font-semibold text-gray-800">Cross-Platform Integration</h4>
          <p className="text-gray-600">
            Seamless experience across Meta's ecosystem, creating a unified social experience.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Unified content management</li>
            <li>Cross-platform search</li>
            <li>Shared preferences</li>
          </ul>
        </div>
        
        <div className="p-6 bg-gray-50 rounded-lg space-y-4">
          <h4 className="text-xl font-semibold text-gray-800">Privacy-First AI</h4>
          <p className="text-gray-600">
            Advanced AI capabilities that respect user privacy while delivering personalized experiences.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>On-device processing</li>
            <li>Privacy-preserving ML</li>
            <li>Transparent controls</li>
          </ul>
        </div>
        
        <div className="p-6 bg-gray-50 rounded-lg space-y-4">
          <h4 className="text-xl font-semibold text-gray-800">Natural Interaction</h4>
          <p className="text-gray-600">
            Intuitive ways to interact with content that feel natural and effortless.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Voice commands</li>
            <li>Gesture controls</li>
            <li>Contextual actions</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800">Performance Highlights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Content Discovery</h4>
            <p className="text-gray-600">2x faster content finding</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">AI Understanding</h4>
            <p className="text-gray-600">95% accuracy in intent recognition</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">User Engagement</h4>
            <p className="text-gray-600">40% increase in content interaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeaturesSection; 