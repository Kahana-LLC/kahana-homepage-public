import React from 'react';
import Image from 'next/image';

const WinnersLosersSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-microsoft/winners-losers.jpg"
          alt="Competitive landscape showing major AI productivity platforms"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-6">
        <p className="text-xl text-gray-600">
          The race to build AI-enabled, touch-free productivity ecosystems is heating up, with major tech companies positioning themselves to dominate this new paradigm of human-computer interaction.
        </p>
      </div>

      {/* Competitive Quadrant */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {/* Top Left - Google */}
        <div className="space-y-4 p-6 bg-gray-50 rounded-tl-xl rounded-tr-xl md:rounded-tr-none rounded-bl-xl md:rounded-bl-none border border-gray-100">
          <h3 className="text-2xl font-semibold text-black">Google: Workspace AI Integration</h3>
          <div className="space-y-2">
            <p className="text-gray-600">
              Google Workspace's AI features deliver compelling value at $12/user/month (vs. Microsoft 365's $22.50), offering 90% of AI productivity functionality at just 53% of the cost. With deep Gmail and Docs integration, Google's ecosystem dominates collaboration, commanding 73% user preference for Workspace.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <a href="https://www.xrtoday.com/mixed-reality/the-meta-quest-3s-vs-the-vision-pro-which-is-best/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">Workspace Analysis</a>
              <a href="https://www.roadtovr.com/apple-vision-pro-worth-buying-in-2025/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">Productivity Review</a>
            </div>
          </div>
        </div>

        {/* Top Right - Meta */}
        <div className="space-y-4 p-6 bg-gray-50 rounded-tr-xl rounded-tl-xl md:rounded-tl-none rounded-br-xl md:rounded-br-none border border-gray-100">
          <h3 className="text-2xl font-semibold text-black">Meta: VR Workspace Innovation</h3>
          <div className="space-y-2">
            <p className="text-gray-600">
              Meta's Quest Pro delivers enterprise VR workspaces at $999 (vs. HoloLens 2's $3,500), offering 85% of mixed reality productivity features at 28% of the cost. With deep integration of AI assistants in VR, Meta's ecosystem is rapidly gaining enterprise adoption.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <a href="https://www.pcworld.com/article/2643830/google-is-integrating-gemini-ai-directly-into-chrome-beta-version.html" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">PC World Report</a>
            </div>
          </div>
        </div>

        {/* Bottom Left - Apple */}
        <div className="space-y-4 p-6 bg-gray-50 rounded-bl-xl rounded-br-xl md:rounded-br-none rounded-tl-xl md:rounded-tl-none border border-gray-100">
          <h3 className="text-2xl font-semibold text-black">Apple: Consumer AI Leadership</h3>
          <div className="space-y-2">
            <p className="text-gray-600">
              Apple Intelligence introduces personal AI agents for autonomous task management and productivity, with 71% of consumers reporting significant efficiency gains. Apple's consumer-first approach is creating a new standard for AI-assisted work.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <a href="https://futurumgroup.com/insights/microsoft-365-copilot-wave-2-latest-advances-enterprise-ai/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">Futurum Research</a>
            </div>
          </div>
        </div>

        {/* Bottom Right - Perplexity */}
        <div className="space-y-4 p-6 bg-gray-50 rounded-br-xl rounded-bl-xl md:rounded-bl-none rounded-tr-xl md:rounded-tr-none border border-gray-100">
          <h3 className="text-2xl font-semibold text-black">Perplexity: Disrupting Productivity Paradigms</h3>
          <div className="space-y-2">
            <p className="text-gray-600">
              Perplexity's AI workspace uses agentic search to autonomously complete tasks via 800+ app integrations. Their AI processes real-time data with citations, reducing research time by 40% in enterprise tests. This new productivity paradigm directly challenges traditional Office workflows.
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
          Traditional productivity software is becoming less central to the future of work. Microsoft's dominance relies on Office, but if it doesn't adapt—by making Windows and the broader productivity ecosystem more cohesive and AI-driven—it risks losing its leadership as new agentic, touch-free platforms emerge.
        </p>
      </div>
    </div>
  );
};

export default WinnersLosersSection; 