import React from 'react';
import Image from 'next/image';

const SolutionSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-google/solution.jpg"
          alt="Seamless information management across Google's ecosystem"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-6">
        <p className="text-xl text-gray-600">
          Our technology transforms Google's existing ecosystem into a powerful knowledge management system that 
          seamlessly connects Chrome, Pixel, Chromebooks, and Gemini to help you organize, find, and work with your saved content 
          across devices and contexts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Smart Content Organization</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Automatically groups related content from Chrome bookmarks and history</li>
            <li>Creates intelligent collections based on topics and projects</li>
            <li>Syncs organization across Pixel devices, Chromebooks, and Chrome</li>
            <li>Learns from your work patterns to improve categorization</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Cross-Device Information Access</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Access saved content from any Pixel device, Chromebook, or Chrome browser</li>
            <li>Use Gemini to find and summarize content across your collections</li>
            <li>Seamless transition between devices while maintaining context</li>
            <li>Voice commands work consistently across the ecosystem</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 bg-black text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-semibold mb-2">Intelligent Content Discovery</h4>
            <p className="text-gray-300">
              Find any saved content through natural language queries, whether it's in Chrome bookmarks, 
              reading lists, or organized collections. Gemini understands context and relationships between 
              your saved information.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Workflow Integration</h4>
            <p className="text-gray-300">
              Seamlessly integrate with your work processes by automatically organizing research, 
              articles, and documents into project-based collections that sync across your devices.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Unified Experience</h4>
            <p className="text-gray-300">
              A consistent experience across Pixel phones, Chrome browser, and Gemini assistant, 
              making it easy to manage and access your information regardless of where you are or 
              what device you're using.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionSection; 