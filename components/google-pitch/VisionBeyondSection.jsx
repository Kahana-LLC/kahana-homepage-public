import React from 'react';
import Image from 'next/image';

const VisionBeyondSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-google/vision-beyond.jpg"
          alt="Future vision of Google's AI-powered productivity ecosystem"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-6">
        <p className="text-xl text-gray-600">
          The next era for Google is about more than just finding information—it's about transforming how we work with it. With Gemini at the core, your productivity experience becomes wherever you are. Whether you're on a Pixel phone in a coffee shop, using a Chromebook in a collaborative space, or working from your Android tablet at home, your entire workspace follows you seamlessly. The traditional desktop becomes obsolete as Gemini transforms every Google device into a complete, intelligent productivity hub.
        </p>
        <p className="text-lg text-gray-500">
          Imagine a world where your work environment adapts to you, not the other way around. Your Pixel becomes a virtual command center, Chrome transforms any space into an immersive workspace, and your Google devices work together to create a unified experience. Gemini anticipates your needs, organizes your information, and enables you to focus on what matters most. The workspace of the future isn't a place—it's an intelligent ecosystem that empowers you to work with information from anywhere, anytime, with unprecedented efficiency and flexibility.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">The Touch-Free Revolution</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Voice and gesture control across all Google devices</li>
            <li>Natural language commands for complex workflows</li>
            <li>Intelligent context awareness that anticipates your needs</li>
            <li>Seamless handoff between devices without touching a screen</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Future Work Experience</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Holographic workspaces with life-sized content</li>
            <li>Gemini-powered workspace optimization for any location</li>
            <li>Intelligent task management across all devices</li>
            <li>Context-aware productivity tools that adapt to your environment</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 bg-black text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">Your Future of Work Isn't Chained to a Desk</h3>
        <p className="text-gray-300">
          With Gemini, the concept of "going to work" becomes obsolete. Your workspace is wherever you are, powered by AI that understands your context, anticipates your needs, and enables you to work with unprecedented freedom and efficiency. The future of work isn't about being tied to a desk—it's about having the power to work from anywhere, with all the tools and resources you need at your fingertips, seamlessly integrated across every Google device. This foundation of Gemini and our existing devices creates the perfect platform for building new types of devices that will help people work smarter than ever before.
        </p>
      </div>
    </div>
  );
};

export default VisionBeyondSection; 