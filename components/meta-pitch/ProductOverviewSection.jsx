import React from 'react';

const ProductOverviewSection = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800">Product Vision</h3>
        <p className="text-gray-600">
          The Hermes Project represents a revolutionary step forward in social media, combining cutting-edge AI 
          with Meta's platform ecosystem. It's not just a feature - it's a new way of experiencing social content.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-gray-800">Core Features</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Intelligent content discovery</li>
            <li>Cross-platform AI integration</li>
            <li>Natural language interaction</li>
            <li>Smart content organization</li>
            <li>Privacy-preserving AI</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-gray-800">Key Capabilities</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Context-aware understanding</li>
            <li>Multimodal content analysis</li>
            <li>Personalized recommendations</li>
            <li>Seamless platform integration</li>
            <li>Advanced privacy controls</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800">Design Philosophy</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Intelligence</h4>
            <p className="text-gray-600">AI that understands and anticipates user needs</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Simplicity</h4>
            <p className="text-gray-600">Natural interaction that feels effortless</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Privacy</h4>
            <p className="text-gray-600">Advanced AI with user privacy at its core</p>
          </div>
        </div>
      </div>

      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800">Target Audience</h3>
        <p className="text-gray-600">
          Hermes is designed for social media users who want a more meaningful and efficient way to interact with content. 
          Whether you're a content creator, a busy professional, or an active social user, this AI-powered experience 
          will transform how you discover, organize, and engage with social content across Meta's platforms.
        </p>
      </div>
    </div>
  );
};

export default ProductOverviewSection; 