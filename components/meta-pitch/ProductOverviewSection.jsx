import React from 'react';
import Image from 'next/image';

const ProductOverviewSection = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <p className="text-xl text-gray-600">
          The Hermes Project is a revolutionary AI-powered social experience that transforms how users interact with content across Meta's platforms. By integrating advanced AI capabilities into the core of Meta's ecosystem, we're creating a more intuitive, personalized, and engaging social experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Core Concept</h3>
          <p className="text-gray-600">
            Hermes transforms social media from a passive scrolling experience to an active, intelligent interaction. Users can discover, organize, and engage with content through natural conversation and intuitive gestures, making social media more meaningful and efficient.
          </p>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Key Innovation</h3>
          <p className="text-gray-600">
            The project introduces a unified AI assistant that understands context, anticipates needs, and delivers personalized content across all Meta platforms. This creates a seamless experience that adapts to each user's unique social patterns and preferences.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-black text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">Product Features</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-semibold mb-2">Intelligent Content Discovery</h4>
            <p className="text-gray-300">
              AI-powered content discovery that understands user interests and context, delivering relevant content through natural conversation and smart recommendations.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Cross-Platform Integration</h4>
            <p className="text-gray-300">
              Seamless experience across Facebook, Instagram, WhatsApp, and Messenger, with AI that understands and connects content across all platforms.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Smart Organization</h4>
            <p className="text-gray-300">
              Automatic content organization and categorization based on user preferences, making it easy to find and revisit important content.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">User Experience</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-50 rounded-xl">
            <h4 className="text-xl font-semibold mb-2">Natural Interaction</h4>
            <p className="text-gray-600">
              Users can interact with content using natural language and gestures, making social media more intuitive and accessible.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl">
            <h4 className="text-xl font-semibold mb-2">Personalized Experience</h4>
            <p className="text-gray-600">
              AI adapts to each user's preferences and behavior, creating a unique experience that evolves with their social patterns.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl">
            <h4 className="text-xl font-semibold mb-2">Enhanced Engagement</h4>
            <p className="text-gray-600">
              Smart features that encourage meaningful interactions and help users build stronger connections with their social network.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">Technical Foundation</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-50 rounded-xl">
            <h4 className="text-xl font-semibold mb-2">AI Architecture</h4>
            <p className="text-gray-600">
              Built on Meta's advanced AI infrastructure, leveraging state-of-the-art models for natural language processing, computer vision, and multimodal understanding.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl">
            <h4 className="text-xl font-semibold mb-2">Privacy & Security</h4>
            <p className="text-gray-600">
              Implements Meta's privacy-preserving AI technologies, ensuring user data is protected while delivering personalized experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverviewSection; 