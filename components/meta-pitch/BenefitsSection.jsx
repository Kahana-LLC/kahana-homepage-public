import React from 'react';
import Image from 'next/image';

const BenefitsSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-64 w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-apple/benefits.jpg"
          alt="Deep work and collaboration in the Metaverse"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800">Transformative Benefits</h3>
        <p className="text-gray-600">
          The Metaverse and Meta devices are becoming the ultimate place for deep work and collaboration. This isn't just a new way to work—it's the best place to work, period. The Metaverse crushes traditional work norms like using Zoom or going into the office. Now, your workspace can literally be an office of your imagination—limitless, immersive, and designed for your productivity and creativity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="p-6 bg-gray-50 rounded-lg space-y-4">
          <h4 className="text-xl font-semibold text-gray-800">Productivity Benefits</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Unmatched focus in immersive workspaces</li>
            <li>Instant access to information, tools, and documents</li>
            <li>AI-powered task automation and organization</li>
            <li>Personalized, distraction-free environments</li>
          </ul>
        </div>
        
        <div className="p-6 bg-gray-50 rounded-lg space-y-4">
          <h4 className="text-xl font-semibold text-gray-800">Collaboration & Teamwork</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Real-time collaboration in shared virtual spaces</li>
            <li>Seamless communication and brainstorming</li>
            <li>Multi-device, multi-user integration</li>
            <li>Effortless sharing and co-creation</li>
          </ul>
        </div>
        
        <div className="p-6 bg-gray-50 rounded-lg space-y-4">
          <h4 className="text-xl font-semibold text-gray-800">User Experience</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Intuitive, natural interaction with voice and gesture</li>
            <li>Customizable workspaces for any task</li>
            <li>Immersive, context-aware GUIs</li>
            <li>Seamless transition between solo and group work</li>
          </ul>
        </div>
        
        <div className="p-6 bg-gray-50 rounded-lg space-y-4">
          <h4 className="text-xl font-semibold text-gray-800">Security & Privacy</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>End-to-end encrypted collaboration</li>
            <li>Privacy-first AI and data handling</li>
            <li>Personalized access controls</li>
            <li>Secure, cloud-synced workspaces</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800">Business Impact</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Deep Work</h4>
            <p className="text-gray-600">50% increase in focused, high-value work sessions</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Collaboration</h4>
            <p className="text-gray-600">2x faster project completion with virtual teamwork</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">User Satisfaction</h4>
            <p className="text-gray-600">90% of users prefer working in the Metaverse over traditional tools</p>
          </div>
        </div>
      </div>

      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800">Success Stories</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Remote Team Lead</h4>
            <p className="text-gray-600">
              "Our distributed team gets more done, more quickly, and with more creativity in Meta's immersive workspaces than we ever did in a physical office."
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Product Designer</h4>
            <p className="text-gray-600">
              "The ability to instantly access every tool and document, and to collaborate in real time, has completely changed how I work."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection; 