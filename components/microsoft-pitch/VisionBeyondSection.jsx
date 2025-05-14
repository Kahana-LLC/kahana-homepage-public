import React from 'react';
import Image from 'next/image';

const VisionBeyondSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-microsoft/vision-beyond.jpg"
          alt="Future vision of Microsoft's Copilot-powered, device-agnostic office experience"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-6">
        <p className="text-xl text-gray-600">
          The next era for Microsoft is about more than just smarter productivity tools—it's about redefining what it means to work. With Copilot at the core, your office becomes wherever you are. Whether you're on a Surface Pro in a coffee shop, using HoloLens in a collaborative space, or working from your Windows PC at home, your entire workspace follows you seamlessly. The traditional office desk becomes obsolete as Copilot transforms every Microsoft device into a complete, intelligent workspace.
        </p>
        <p className="text-lg text-gray-500">
          Imagine a world where your work environment adapts to you, not the other way around. Your Surface becomes a virtual command center, HoloLens transforms any space into an immersive workspace, and your Windows devices work together to create a unified experience. Copilot anticipates your needs, organizes your information, and enables you to focus on what matters most. The office of the future isn't a place—it's an intelligent ecosystem that empowers you to work from anywhere, anytime, with unprecedented efficiency and flexibility.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">The Mobile Office Revolution</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Copilot-powered workspace that follows you across devices</li>
            <li>Seamless transition between physical and virtual workspaces</li>
            <li>Intelligent context awareness across Surface and Windows devices</li>
            <li>Real-time collaboration in any environment</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Future Work Experience</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Holographic meetings with life-sized remote participants</li>
            <li>Copilot-powered workspace optimization for any location</li>
            <li>Intelligent task management across all devices</li>
            <li>Context-aware productivity tools that adapt to your environment</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 bg-black text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">The Office Without Boundaries</h3>
        <p className="text-gray-300">
          With Copilot, the concept of "going to work" becomes obsolete. Your office is wherever you are, powered by AI that understands your context, anticipates your needs, and enables you to work with unprecedented freedom and efficiency. The future of work isn't about being tied to a desk—it's about having the power to work from anywhere, with all the tools and resources you need at your fingertips, seamlessly integrated across every Microsoft device. This foundation of Copilot and our existing devices creates the perfect platform for building new types of devices that will help people and teams work smarter than ever before.
        </p>
      </div>
    </div>
  );
};

export default VisionBeyondSection; 