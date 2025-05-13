import React from 'react';
import Image from 'next/image';

const ImplementationSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-google/implementation.jpg"
          alt="Implementation roadmap for AI-powered Google ecosystem"
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-6">
        <p className="text-xl text-gray-600">
          Google has already made significant progress in connecting Gemini across its ecosystem. The foundation for enhanced knowledge management is in place, with recent improvements showing the path forward for deeper integration.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Existing Integration Points</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Chrome Enterprise with @gemini shortcut in omnibox</li>
            <li>Automated tab grouping in Chrome</li>
            <li>Help Me Write for text composition</li>
            <li>Enterprise-grade security and DLP controls</li>
            <li>Seamless Workspace integration</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Building Blocks</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>ChromeOS and Android device integration</li>
            <li>Centralized management capabilities</li>
            <li>Enterprise-grade security framework</li>
            <li>AI feature control and customization</li>
            <li>Cross-device synchronization</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 bg-black text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">Implementation Strategy</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-semibold mb-2">Leverage Existing Infrastructure</h4>
            <p className="text-gray-300">
              Build upon Google's current ecosystem integration, including Chrome Enterprise's AI capabilities, 
              device management, and security features. The foundation for enhanced knowledge management is 
              already in place.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Enterprise Controls</h4>
            <p className="text-gray-300">
              Utilize Chrome Enterprise Premium's existing DLP rules and AI capability controls to ensure 
              secure implementation. Organizations can maintain control over how AI features are used while 
              enabling enhanced productivity.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Cross-Device Integration</h4>
            <p className="text-gray-300">
              Enhance the existing integration between Chrome, ChromeOS, and Android devices to create a 
              seamless knowledge management experience. The building blocks for device synchronization 
              are already established.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">Success Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-50 rounded-xl">
            <h4 className="font-semibold text-black">User Adoption</h4>
            <p className="text-gray-600">Gemini feature usage across devices</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl">
            <h4 className="font-semibold text-black">Productivity Gains</h4>
            <p className="text-gray-600">Time saved in information management</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl">
            <h4 className="font-semibold text-black">Enterprise Security</h4>
            <p className="text-gray-600">DLP rule effectiveness and compliance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImplementationSection; 