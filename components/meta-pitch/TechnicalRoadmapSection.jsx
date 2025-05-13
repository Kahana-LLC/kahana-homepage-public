import React from 'react';
import Image from 'next/image';

const TechnicalRoadmapSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-apple/technical-roadmap.jpg"
          alt="Technical roadmap showing Meta AI integration with browsers and curation tools"
          fill
          className="object-contain bg-[#001B41]"
          priority
        />
      </div>
      <div className="space-y-6">
        <p className="text-xl text-gray-600">
          Our technical implementation plan consists of three complementary workstreams that can be executed in parallel, each focused on making Meta AI the gateway to information and productivity. The goal: enable Meta devices to summon, browse, and organize information from the web and your saved content—using natural language, gestures, and context-aware commands.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {/* Workstream 1: Meta AI + Browser Integration */}
        <div className="flex flex-col h-full">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-black">Workstream 1: Meta AI + Browser Integration</h3>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-black">Success Criteria</h4>
            <p className="text-gray-600 text-sm">
              As a user, when I say "show me my Google Sheets for Q2 sales" or "find the articles about NVIDIA I saved last week," Meta AI should connect to my browser, retrieve the relevant information, and display it in an interactive GUI—hands-free.
            </p>
          </div>
        </div>
        {/* Workstream 2: Curation AI & Saved Content */}
        <div className="flex flex-col h-full">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-black">Workstream 2: Curation AI & Saved Content</h3>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-black">Success Criteria</h4>
            <p className="text-gray-600 text-sm">
              As a user, I should be able to save articles, documents, and web resources from any device, then ask Meta AI to organize, search, and present them—whether for work, research, or personal use.
            </p>
          </div>
        </div>
        {/* Workstream 3: Command & GUI Innovations */}
        <div className="flex flex-col h-full">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-black">Workstream 3: Command & GUI Innovations</h3>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-black">Success Criteria</h4>
            <p className="text-gray-600 text-sm">
              As a user, I should be able to use voice, gesture, or context-aware commands to summon, manipulate, and interact with information GUIs—making Meta devices the most powerful tools for productivity, creativity, and collaboration.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-black text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">The Complete Ecosystem</h3>
        <p className="text-gray-300 mt-6">
          As these parallel workstreams progress, the Meta ecosystem becomes increasingly touch-free, voice-first, and AI-enabled—empowering users to access, retrieve, and act on information instantly, wherever they are: at work, at home, or on the go.
        </p>
      </div>
    </div>
  );
};

export default TechnicalRoadmapSection; 