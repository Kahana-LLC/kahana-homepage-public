import React from 'react';
import Image from 'next/image';

const TechnicalRoadmapSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-apple/technical-roadmap.jpg"
          alt="Technical roadmap showing Microsoft Copilot-Microsoft 365 integration plan"
          fill
          className="object-contain bg-[#001B41]"
          priority
        />
      </div>
      <div className="space-y-6">
        <p className="text-xl text-gray-600">
          Our technical implementation plan consists of three complementary workstreams that can be executed in parallel, each focusing on a different aspect of the user experience. While the phases are presented sequentially, teams can work simultaneously across all three areas, accelerating development and delivering incremental benefits to users as each component is completed.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {/* Workstream 1: Copilot-Microsoft 365 Expansion */}
        <div className="flex flex-col h-full">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-black">Workstream 1: Copilot-Microsoft 365 Expansion</h3>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-black">Success Criteria</h4>
            <p className="text-gray-600 text-sm">
              As a user, when I ask Copilot, "show the Zillow articles for California properties under $1M I saved in a group last week in Microsoft 365", Copilot should find my saved tab group from last week or tell me if none exist.
            </p>
          </div>
        </div>
        {/* Workstream 2: Microsoft 365 Content Expansion */}
        <div className="flex flex-col h-full">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-black">Workstream 2: Microsoft 365 Content Expansion</h3>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-black">Success Criteria</h4>
            <p className="text-gray-600 text-sm">
              As a user, I should be able to create a tab group in Microsoft 365, save sites, and then search that same tab group by name through Copilot and it returns the correct tab group and list of saved sites.
            </p>
          </div>
        </div>
        {/* Workstream 3: Microsoft 365 Integration */}
        <div className="flex flex-col h-full">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-black">Workstream 3: Microsoft 365 Integration</h3>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-black">Success Criteria</h4>
            <p className="text-gray-600 text-sm">
              As a user, I should be able to see the Copilot AI assistant in Microsoft 365, access it, and enter commands through text, keyboard, voice, and gestures depending on device.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-black text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">The Complete Ecosystem</h3>
        <p className="text-gray-300 mt-6">
          As these parallel workstreams progress, the complete Microsoft ecosystem becomes increasingly touch-free, voice-first, and AI-enabled—empowering users to access, retrieve, and act on information instantly, wherever they are: at home or on the run.
        </p>
      </div>
    </div>
  );
};

export default TechnicalRoadmapSection; 