import React from 'react';
import Image from 'next/image';

const VisionBeyondSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-apple/vision-beyond.jpg"
          alt="Future vision of Meta's integrated AR/VR communication platform"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-6">
        <p className="text-xl text-gray-600">
          The next era for Meta is about more than just smarter software—it's about a new generation of devices, all powered by advanced Meta AI, working together as a seamless, proactive ecosystem. Imagine not just Meta Glasses and Oculus, but entirely new device categories—advanced hologram displays, next-gen wearables, AR glasses, and immersive VR headsets—all collaborating to help you manage information, automate tasks, and unlock new levels of productivity.
        </p>
        <p className="text-lg text-gray-500">
          With built-in intelligence at the core, every Meta device becomes an active partner in your work and life, anticipating your needs, surfacing the right information, and enabling you to focus on what matters most. Hologram interfaces will transform how we interact with data, allowing you to manipulate 3D information in mid-air with unprecedented precision. AR and VR devices will extend this capability, letting you organize and interact with your digital world in ways previously confined to science fiction. We want to build a world where Meta AI powers everything from traditional displays to floating holograms, invisible yet omnipresent—empowering entirely new ways to use, manage, and experience information across the Meta ecosystem.
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

      {/* IP Protection Section */}
      <div className="mt-12 bg-black text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">Protected IP: Securing Meta's Future</h3>
        <p className="text-gray-300 mb-4">
          Meta's future in the metaverse is protected by a robust portfolio of patents covering command-driven GUIs and natural user interfaces. These patents ensure that Meta's innovations—like instantly transforming your workspace with a gesture or voice command—remain unique and defensible until 2039 and beyond.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
          <li>Patents cover voice, gesture, and combined command input for information GUIs</li>
          <li>Protected methods for dynamic, context-aware GUI responses</li>
          <li>Exclusive rights to immersive, multi-modal information management in AR/VR</li>
        </ul>
        <p className="text-gray-300">
          <a href="https://patents.google.com/patent/US11693676B2/en?oq=11%2c693%2c676" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-400">Read Patent #1: US11693676B2</a> &nbsp;|&nbsp;
          <a href="https://patents.google.com/patent/US11397844B2/en?oq=11%2c397%2c844" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-400">Read Patent #2: US11397844B2</a>
        </p>
      </div>
    </div>
  );
};

export default VisionBeyondSection; 