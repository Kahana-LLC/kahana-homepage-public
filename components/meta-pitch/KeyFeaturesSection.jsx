import React from 'react';
import Image from 'next/image';

const KeyFeaturesSection = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <p className="text-xl text-gray-600">
          The Hermes Project introduces a suite of innovative features that transform how users interact with social content. Each feature is designed to make social media more intuitive, efficient, and meaningful through the power of AI.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">AI-Powered Content Discovery</h3>
          <p className="text-gray-600">
            Ask for anything—<span className="font-semibold">"Show me all the posts and reels about sustainable fashion I saved last week"</span>—and see them appear, organized by relevance. Need to find that viral video about AI? Just say it, and it's there. Discover content through natural conversation and smart recommendations.
          </p>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Cross-Platform Content Management</h3>
          <p className="text-gray-600">
            Seamlessly access and manage content across Facebook, Instagram, WhatsApp, and Messenger. The AI understands context and relationships between content, making it easy to find and organize posts, messages, and media across all platforms.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-black text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">Core Features</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-semibold mb-2">Smart Content Organization</h4>
            <p className="text-gray-300">
              Automatic categorization and tagging of content based on topics, people, and interests. The AI learns from your interactions to create personalized collections and smart folders.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Intelligent Search</h4>
            <p className="text-gray-300">
              Natural language search that understands context and intent. Find content using everyday language, with results that get smarter over time based on your preferences.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Contextual Recommendations</h4>
            <p className="text-gray-300">
              AI-powered content suggestions that understand your current context and interests. Get relevant recommendations based on what you're viewing, who you're interacting with, and your past behavior.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">Advanced Capabilities</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-50 rounded-xl">
            <h4 className="text-xl font-semibold mb-2">Multimodal Understanding</h4>
            <p className="text-gray-600">
              AI that understands text, images, and video content, enabling rich content discovery and organization across all media types.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl">
            <h4 className="text-xl font-semibold mb-2">Social Graph Integration</h4>
            <p className="text-gray-600">
              Smart features that leverage your social connections to enhance content discovery and recommendations.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl">
            <h4 className="text-xl font-semibold mb-2">Privacy-First Design</h4>
            <p className="text-gray-600">
              All AI features built with privacy at their core, ensuring your data stays protected while delivering personalized experiences.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">User Experience Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-50 rounded-xl">
            <h4 className="text-xl font-semibold mb-2">Natural Interaction</h4>
            <p className="text-gray-600">
              Interact with content using voice commands, gestures, and natural language. The AI understands your intent and responds accordingly, making social media more accessible and intuitive.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl">
            <h4 className="text-xl font-semibold mb-2">Personalized Interface</h4>
            <p className="text-gray-600">
              Dynamic UI that adapts to your preferences and usage patterns, presenting content and features in the most relevant way for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeaturesSection; 