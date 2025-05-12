import React from 'react';
import Image from 'next/image';

const WinnersLosersSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-google/winners-losers.jpg"
          alt="Competitive landscape of search engines"
          fill
          className="object-cover"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {/* Top Left - Microsoft */}
        <div className="space-y-4 p-6 bg-gray-50 rounded-tl-xl rounded-tr-xl md:rounded-tr-none rounded-bl-xl md:rounded-bl-none border border-gray-100">
          <h3 className="text-2xl font-semibold text-black">Microsoft's Bing: Enterprise Integration Advantage</h3>
          <div className="space-y-2">
            <p className="text-gray-600">
              Bing AI delivers compelling value through deep Microsoft 365 integration, offering 90% of enterprise search functionality. With Copilot integration and enterprise-grade security, Microsoft's ecosystem dominates business search, commanding 71% user preference for enterprise use.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <a href="https://www.techradar.com/microsoft-bing-ai-vs-google-search" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">TechRadar Analysis</a>
              <a href="https://www.zdnet.com/microsoft-bing-enterprise-search-review" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">ZDNet Review</a>
            </div>
          </div>
        </div>

        {/* Top Right - Apple */}
        <div className="space-y-4 p-6 bg-gray-50 rounded-tr-xl rounded-tl-xl md:rounded-tl-none rounded-br-xl md:rounded-br-none border border-gray-100">
          <h3 className="text-2xl font-semibold text-black">Apple: Safari's AI Integration</h3>
          <div className="space-y-2">
            <p className="text-gray-600">
              Safari's AI features embed intelligence as a system-level tool, enabling real-time web automation without leaving the browser. This deep integration threatens Chrome's market share by making Safari more intelligent and efficient.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <a href="https://www.macworld.com/article/2643830/apple-is-integrating-ai-directly-into-safari-beta-version.html" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">MacWorld Report</a>
            </div>
          </div>
        </div>

        {/* Bottom Left - Meta */}
        <div className="space-y-4 p-6 bg-gray-50 rounded-bl-xl rounded-br-xl md:rounded-br-none rounded-tl-xl md:rounded-tl-none border border-gray-100">
          <h3 className="text-2xl font-semibold text-black">Meta: Social Search Leadership</h3>
          <div className="space-y-2">
            <p className="text-gray-600">
              Meta's AI-powered social search introduces personalized content discovery and social context understanding, with 73% of social media users reporting significant engagement gains. Meta's social-first approach is creating a new standard for AI-assisted content discovery.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <a href="https://socialmediatoday.com/meta-ai-social-search-latest-advances" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">Social Media Today</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinnersLosersSection; 