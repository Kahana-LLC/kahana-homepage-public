import React from 'react';
import Image from 'next/image';

const WinnersLosersSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-meta/winners-losers.jpg"
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

      {/* Competitive Quadrant */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {/* Top Left - Apple */}
        <div className="space-y-4 p-6 bg-gray-50 rounded-tl-xl rounded-tr-xl md:rounded-tr-none rounded-bl-xl md:rounded-bl-none border border-gray-100">
          <h3 className="text-2xl font-semibold text-black">Apple Vision Pro: Premium Experience, Premium Price</h3>
          <div className="space-y-2">
            <p className="text-gray-600">
              Vision Pro delivers a high-end mixed reality experience at $3,499, offering industry-leading display and spatial computing capabilities. Apple's ecosystem is known for its seamless integration and design, but the high price point limits accessibility compared to competitors like Quest.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <a href="https://www.roadtovr.com/apple-vision-pro-worth-buying-in-2025/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">Road to VR Review</a>
              <a href="https://www.xrtoday.com/mixed-reality/the-meta-quest-3s-vs-the-vision-pro-which-is-best/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">XR Today Analysis</a>
            </div>
          </div>
        </div>

        {/* Top Right - Google */}
        <div className="space-y-4 p-6 bg-gray-50 rounded-tr-xl rounded-tl-xl md:rounded-tl-none rounded-br-xl md:rounded-br-none border border-gray-100">
          <h3 className="text-2xl font-semibold text-black">Google: Gemini's Chrome Integration</h3>
          <div className="space-y-2">
            <p className="text-gray-600">
              Chrome Canary's GLIC (Gemini Live in Chrome) embeds AI as a system-tray tool, enabling real-time web automation without leaving the browser. This deep integration threatens Meta's social platform dominance by making Chrome more intelligent and efficient.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <a href="https://www.pcworld.com/article/2643830/google-is-integrating-gemini-ai-directly-into-chrome-beta-version.html" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">PC World Report</a>
            </div>
          </div>
        </div>

        {/* Bottom Left - Microsoft */}
        <div className="space-y-4 p-6 bg-gray-50 rounded-bl-xl rounded-br-xl md:rounded-br-none rounded-tl-xl md:rounded-tl-none border border-gray-100">
          <h3 className="text-2xl font-semibold text-black">Microsoft: Enterprise AI Leadership</h3>
          <div className="space-y-2">
            <p className="text-gray-600">
              Copilot Wave 2 introduces Researcher/Analyst agents for autonomous data synthesis and forecasting, with 71% of Frontier Firms reporting significant productivity gains. Microsoft's enterprise-first approach is creating a new standard for AI-assisted work that could challenge Meta's social platform dominance.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <a href="https://futurumgroup.com/insights/microsoft-365-copilot-wave-2-latest-advances-enterprise-ai/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">Futurum Research</a>
            </div>
          </div>
        </div>

        {/* Bottom Right - Perplexity */}
        <div className="space-y-4 p-6 bg-gray-50 rounded-br-xl rounded-bl-xl md:rounded-bl-none rounded-tr-xl md:rounded-tr-none border border-gray-100">
          <h3 className="text-2xl font-semibold text-black">Perplexity: Disrupting Browser Paradigms</h3>
          <div className="space-y-2">
            <p className="text-gray-600">
              Comet browser uses agentic search to autonomously complete tasks via 800+ app integrations. Their Chromium-based AI processes real-time data with citations, reducing research time by 40% in enterprise tests. This new browser paradigm directly challenges Meta's traditional social platform approach.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <a href="https://www.zdnet.com/article/perplexity-ai-teases-a-new-browser-for-agentic-search/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">ZDNet Coverage</a>
              <a href="https://writesonic.com/blog/comet-ai-browser" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">Writesonic Analysis</a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-black text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">The Stakes</h3>
        <p className="text-gray-300">
          Social platforms are becoming less central to the future of computing. Meta's dominance relies on its social platforms, but if it doesn't adapt—by making Quest and Meta Glasses more cohesive and AI-driven—it risks losing its leadership as new agentic, touch-free platforms emerge.
        </p>
      </div>
    </div>
  );
};

export default WinnersLosersSection; 