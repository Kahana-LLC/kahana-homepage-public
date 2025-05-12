import React from 'react';
import Image from 'next/image';

const TechnologySection = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <p className="text-xl text-gray-600">
          The Hermes Project is built on Meta's cutting-edge AI infrastructure, combining state-of-the-art machine learning models with robust engineering systems. Our technology stack enables seamless, intelligent social experiences at unprecedented scale.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">AI Architecture</h3>
          <p className="text-gray-600">
            Built on Meta's advanced AI infrastructure, leveraging transformer-based models for natural language understanding, computer vision systems for visual content analysis, and multimodal AI for comprehensive content understanding.
          </p>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Scalable Infrastructure</h3>
          <p className="text-gray-600">
            Designed to handle billions of daily interactions across Meta's platforms, with real-time processing capabilities and efficient resource utilization. Our infrastructure ensures consistent performance at any scale.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-black text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">Core Technologies</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-semibold mb-2">Natural Language Processing</h4>
            <p className="text-gray-300">
              Advanced language models trained on diverse social media content, enabling nuanced understanding of user queries, content context, and social interactions. Our models can comprehend slang, emojis, and cultural references.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Computer Vision</h4>
            <p className="text-gray-300">
              State-of-the-art image and video understanding systems that can analyze visual content, recognize objects, scenes, and activities, and extract meaningful information from media shared across platforms.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Multimodal AI</h4>
            <p className="text-gray-300">
              Integrated systems that combine text, image, and video understanding to provide comprehensive content analysis and context-aware recommendations across all types of social media content.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">Technical Capabilities</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-50 rounded-xl">
            <h4 className="text-xl font-semibold mb-2">Real-Time Processing</h4>
            <p className="text-gray-600">
              Sub-second response times for AI-powered features, enabling instant content discovery and recommendations across all platforms.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl">
            <h4 className="text-xl font-semibold mb-2">Privacy-Preserving AI</h4>
            <p className="text-gray-600">
              Advanced techniques for on-device processing and federated learning, ensuring user data privacy while maintaining AI performance.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl">
            <h4 className="text-xl font-semibold mb-2">Continuous Learning</h4>
            <p className="text-gray-600">
              Self-improving AI systems that adapt to new content types, user behaviors, and platform features, ensuring long-term relevance and performance.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">Integration & Deployment</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-50 rounded-xl">
            <h4 className="text-xl font-semibold mb-2">Platform Integration</h4>
            <p className="text-gray-600">
              Seamless integration with Meta's existing infrastructure, leveraging existing APIs and services while adding new AI capabilities across all platforms.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl">
            <h4 className="text-xl font-semibold mb-2">Scalable Deployment</h4>
            <p className="text-gray-600">
              Gradual rollout strategy with A/B testing and performance monitoring, ensuring smooth deployment and optimal user experience at every stage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologySection; 