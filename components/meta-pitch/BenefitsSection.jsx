import React from 'react';
import Image from 'next/image';

const BenefitsSection = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <p className="text-xl text-gray-600">
          The Hermes Project delivers transformative benefits for both users and Meta's ecosystem, creating a more engaging, efficient, and meaningful social media experience. Our AI-powered solution addresses key challenges while unlocking new opportunities for connection and discovery.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">For Users</h3>
          <p className="text-gray-600">
            Experience a more intuitive and personalized social media journey. Find content that matters to you, connect with like-minded individuals, and discover new interests—all powered by AI that understands your preferences and context.
          </p>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">For Meta</h3>
          <p className="text-gray-600">
            Strengthen platform engagement, increase user satisfaction, and create new opportunities for content discovery and monetization. Our solution enhances Meta's ecosystem while maintaining the highest standards of privacy and security.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-black text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">Key Benefits</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-semibold mb-2">Enhanced Content Discovery</h4>
            <p className="text-gray-300">
              Find relevant content faster and more accurately than ever before. Our AI understands context, interests, and relationships, delivering personalized recommendations that match your preferences and current needs.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Improved User Engagement</h4>
            <p className="text-gray-300">
              Experience more meaningful interactions and deeper connections. The AI helps you discover and engage with content that resonates, leading to more satisfying social media experiences.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Time-Saving Features</h4>
            <p className="text-gray-300">
              Spend less time searching and more time engaging. Smart organization, intelligent search, and context-aware recommendations help you find what you need quickly and efficiently.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">Strategic Advantages</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-50 rounded-xl">
            <h4 className="text-xl font-semibold mb-2">Platform Differentiation</h4>
            <p className="text-gray-600">
              Stand out with unique AI-powered features that enhance the social media experience, setting Meta's platforms apart from competitors.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl">
            <h4 className="text-xl font-semibold mb-2">Data-Driven Insights</h4>
            <p className="text-gray-600">
              Gain valuable insights into user preferences and behaviors, enabling better content recommendations and platform improvements.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl">
            <h4 className="text-xl font-semibold mb-2">Future-Ready Architecture</h4>
            <p className="text-gray-600">
              Built on scalable, adaptable technology that can evolve with changing user needs and emerging social media trends.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">Long-Term Impact</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-50 rounded-xl">
            <h4 className="text-xl font-semibold mb-2">User Experience Evolution</h4>
            <p className="text-gray-600">
              Transform how people interact with social media, making it more intuitive, efficient, and meaningful through AI-powered features and capabilities.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl">
            <h4 className="text-xl font-semibold mb-2">Platform Growth</h4>
            <p className="text-gray-600">
              Drive platform growth and engagement through improved content discovery, better user experiences, and enhanced social connections.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection; 