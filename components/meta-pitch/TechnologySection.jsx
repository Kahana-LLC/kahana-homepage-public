import React from 'react';
import Image from 'next/image';

const TechnologySection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-64 w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-apple/technology.jpg"
          alt="AI-powered Apple technology"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-black">Technology & Innovation</h2>
        <p className="text-xl text-gray-600">
          The Hermes Project revolutionizes social media through advanced AI integration. By deeply embedding intelligent systems across Meta's platforms, we transform how users discover, interact with, and manage their social content, enabling more meaningful connections and efficient content management than ever before.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">AI: From Content Discovery to Social Intelligence</h3>
          <div className="mt-4 space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-black">Transformative AI Capabilities</h4>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                <li>Advanced natural language understanding for complex content queries</li>
                <li>Multimodal AI that comprehends text, images, and video content</li>
                <li>Seamless integration across Meta's social platforms</li>
                <li>Context-aware recommendations that adapt to user preferences</li>
                <li>Intelligent content organization and management</li>
              </ul>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-black">Social Impact & Benefits</h4>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                <li>Automates content discovery and organization</li>
                <li>Enhances meaningful social connections</li>
                <li>Transforms Meta platforms into intelligent social hubs</li>
                <li>Fundamentally changes how people interact with social content</li>
              </ul>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-black">Raising the Bar</h4>
              <p className="text-gray-600">
                The Hermes Project isn't just about improving social media—it's about redefining what's possible in social content discovery and management, enabling users to find and engage with content in ways never before possible.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Privacy & Security</h3>
          <p className="text-gray-600">
            All AI processing and data handling is performed with strict privacy controls and security measures 
            in place. We prioritize user privacy while delivering personalized social experiences.
          </p>
          <div className="mt-4 space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-black">On-Device Processing</h4>
              <p className="text-gray-600">
                Core AI features process data locally on user devices, ensuring sensitive social content 
                and preferences remain under user control.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-black">Privacy-Preserving AI</h4>
              <p className="text-gray-600">
                When aggregated data is needed for improving services, Meta's privacy-preserving techniques 
                ensure individual user data remains protected and anonymous.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-black">Transparent Controls</h4>
              <p className="text-gray-600">
                Users maintain full control over their data and AI preferences, with clear visibility into 
                how their information is used to enhance their social experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologySection; 