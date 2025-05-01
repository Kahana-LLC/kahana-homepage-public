import React from 'react';
import Image from 'next/image';

const VisionBeyondSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-apple/vision-beyond.jpg"
          alt="Future vision of Apple's integrated AR/VR communication platform"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-6">
        <p className="text-xl text-gray-600">
          The next era for Apple is about more than just smarter software—it's about a new generation of devices, all powered by Elevated Apple Intelligence, working together as a seamless, proactive ecosystem. Imagine not just iPhones, Macs, and Apple Watches, but entirely new device categories—advanced hologram displays, next-gen wearables, AR glasses, and immersive VR headsets—all collaborating to help you manage information, automate tasks, and unlock new levels of productivity.
        </p>
        <p className="text-lg text-gray-500">
          With built-in intelligence at the core, every Apple device becomes an active partner in your work and life, anticipating your needs, surfacing the right information, and enabling you to focus on what matters most. Hologram interfaces will transform how we interact with data, allowing you to manipulate 3D information in mid-air with unprecedented precision. AR and VR devices will extend this capability, letting you organize and interact with your digital world in ways previously confined to science fiction. We want to build a world where Apple Intelligence powers everything from traditional displays to floating holograms, invisible yet omnipresent—empowering entirely new ways to use, manage, and experience information across the Apple ecosystem.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Hologram Innovation</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>True 3D hologram displays without special eyewear</li>
            <li>Multi-user hologram workspaces</li>
            <li>Gesture-controlled floating interfaces</li>
            <li>Seamless integration with AR/VR experiences</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Future Applications</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Hologram FaceTime calls with life-sized participants</li>
            <li>3D content manipulation in mid-air</li>
            <li>Spatial computing with tangible holograms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VisionBeyondSection; 