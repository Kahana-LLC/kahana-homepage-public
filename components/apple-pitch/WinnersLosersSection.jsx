import React from 'react';
import Image from 'next/image';

const WinnersLosersSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-apple/winners-losers.jpg"
          alt="Competitive landscape showing major AI assistants and platforms"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-6">
        <p className="text-xl text-gray-600">
          The race to build AI-enabled, touch-free device ecosystems is heating up, with major tech companies positioning themselves to dominate this new paradigm of human-computer interaction.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Meta</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Quest VR headset is cheaper and more advanced than Vision Pro</li>
            <li>Strong AR/VR ecosystem and developer community</li>
            <li>Rapid iteration and mass-market adoption in immersive tech</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Google (Alphabet)</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Gemini AI deeply integrated with Chrome for advanced browsing</li>
            <li>Dominant in search and web data</li>
            <li>Android and Pixel ecosystem for cross-device AI</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Microsoft</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Leading in enterprise AI with Copilot integration</li>
            <li>Strong partnership with OpenAI for advanced AI capabilities</li>
            <li>Windows ecosystem and Edge browser poised for AI transformation</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Perplexity</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Building an agentic browser to automate and enhance web tasks</li>
            <li>Innovating in AI-driven search and information retrieval</li>
            <li>Could further erode Safari's usage if successful</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 bg-black text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">The Stakes</h3>
        <p className="text-gray-300">
          Phones are becoming less central to the future of computing. Apple's dominance relies on the iPhone, but if it doesn't adapt—by making Vision Pro and the broader device ecosystem more cohesive and AI-driven—it risks losing its leadership as new agentic, touch-free platforms emerge.
        </p>
      </div>
    </div>
  );
};

export default WinnersLosersSection; 