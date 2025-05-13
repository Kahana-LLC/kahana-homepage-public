import React from 'react';
import Image from 'next/image';

const ImplementationSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-microsoft/implementation.jpg"
          alt="Implementation roadmap for AI-powered Microsoft devices"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800">Implementation Strategy</h3>
        <p className="text-gray-600">
          Our approach brings AI-powered voice and Copilot capabilities to every Microsoft device. Surface, Windows PCs, and Xbox will be able to take natural language commands and control apps like Edge, Outlook, and more—making every device a true productivity hub.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-gray-800">Deployment Process</h4>
          <ol className="list-decimal list-inside space-y-2 text-gray-600">
            <li>Device firmware and OS updates to enable Copilot voice and context features</li>
            <li>Integration of Copilot with Microsoft Edge, Office, and other core apps</li>
            <li>Personalization and onboarding for user-specific voice commands</li>
            <li>Phased rollout across Surface, Windows PCs, Xbox, and partner devices</li>
            <li>Continuous improvement based on user feedback and AI learning</li>
          </ol>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-gray-800">Support Services</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>24/7 technical support for device and Copilot integration</li>
            <li>Dedicated onboarding and training resources</li>
            <li>Regular updates and feature enhancements</li>
            <li>Community forums and knowledge base</li>
            <li>Personalized troubleshooting and optimization</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800">Implementation Timeline</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Week 1-2</h4>
            <p className="text-gray-600">Device & OS Preparation</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Week 3-4</h4>
            <p className="text-gray-600">Copilot & App Integration</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Week 5-6</h4>
            <p className="text-gray-600">User Onboarding & Training</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Week 7+</h4>
            <p className="text-gray-600">Continuous Optimization</p>
          </div>
        </div>
      </div>

      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800">Success Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Key Performance Indicators</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Voice command adoption rate on Surface and Windows devices</li>
              <li>Copilot usage for app control (e.g., Edge, Outlook)</li>
              <li>User satisfaction with natural language queries</li>
              <li>Productivity improvements and time saved</li>
            </ul>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Real-World Example</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>
                <span className="font-semibold">"Show me all the articles and AI searches about NVIDIA investments I saved last week."</span> <br />
                Copilot instantly retrieves and organizes your saved content in Edge, presenting it visually or reading it aloud—hands-free, across all your Microsoft devices.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImplementationSection; 