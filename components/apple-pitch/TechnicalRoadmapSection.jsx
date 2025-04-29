import React from 'react';
import Image from 'next/image';

const TechnicalRoadmapSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-apple/technical-roadmap.jpg"
          alt="Technical roadmap showing Siri-Spotlight-Safari integration plan"
          fill
          className="object-contain bg-[#001B41]"
          priority
        />
      </div>
      <div className="space-y-6">
        <p className="text-xl text-gray-600">
          Our implementation plan consists of three complementary workstreams that can be executed in parallel, each focusing on a different aspect of the user experience. While the phases are presented sequentially, teams can work simultaneously across all three areas, accelerating development and delivering incremental benefits to users as each component is completed.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {/* Workstream 1: Siri-Spotlight Expansion */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Workstream 1: Siri-Spotlight Expansion</h3>
          <p className="text-gray-600">
            Siri interprets voice-based search requests and leverages Spotlight to complete them. For example, you can say, "pull up the articles I saved into a tab group last week in Safari," and Siri will retrieve them instantly.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Natural language processing</li>
            <li>Contextual understanding</li>
            <li>Multi-step operations</li>
            <li>Siri-Spotlight integration</li>
          </ul>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-black">Success Criteria</h4>
            <p className="text-gray-600 text-sm">
              When I say "pull up the articles I saved into a tab group last week in Safari," Siri should recognize my intent to access saved links from my non-private Safari browsing, and either show me the matching tab groups from last week or inform me if no such saved content exists.
            </p>
          </div>
        </div>
        {/* Workstream 2: Spotlight Content Expansion */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Workstream 2: Spotlight Content Expansion</h3>
          <p className="text-gray-600">
            Expand Spotlight to retrieve Safari tab groups and saved articles, making all your content instantly accessible.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Searchable Safari tab groups</li>
            <li>Saved articles retrieval</li>
            <li>Unified search history</li>
            <li>Smart content categorization</li>
          </ul>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-black">Success Criteria</h4>
            <p className="text-gray-600 text-sm">
              As a user, I should be able to create a tab group in Safari, save sites, and then search that same tab group by name through Spotlight and it returns the correct tab group and list of saved sites.
            </p>
          </div>
        </div>
        {/* Workstream 3: Safari Integration */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Workstream 3: Safari Integration</h3>
          <p className="text-gray-600">
            Integrate the expanded Siri and Spotlight combo directly into Safari, unifying the ecosystem for a seamless, touch-free experience.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Unified Siri/Spotlight in Safari</li>
            <li>AI-powered content organization</li>
            <li>Intelligent search in-browser</li>
            <li>On-device privacy features</li>
          </ul>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-black">Success Criteria</h4>
            <p className="text-gray-600 text-sm">
              As a user, I should be able to see the Siri AI assistant in Safari, click it, and enter commands through text, keyboard, voice, and gestures depending on device.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-black text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">The Complete Ecosystem</h3>
        <p className="text-gray-300 mt-6">
          As these parallel workstreams progress, the complete Apple ecosystem becomes increasingly touch-free, voice-first, and AI-enabled—empowering users to access, retrieve, and act on information instantly, wherever they are: at home or on a run.
        </p>
      </div>
    </div>
  );
};

export default TechnicalRoadmapSection; 