import React from 'react';
import Image from 'next/image';

const AIBenefitsSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="w-full max-w-4xl mx-auto mb-8">
        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#000B1E]">
          <Image
            src="/images-google/ai-benefits.jpg"
            alt="AI-powered voice commands controlling multiple devices"
            fill
            quality={100}
            priority
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-black mb-4">New Commands with Google Intelligence</h3>
        <p className="text-gray-600 mb-4">
          By integrating our technology into Google's product suite, the following types of commands will now be possible to accomplish touch-free:
        </p>
        <ul className="list-decimal list-inside space-y-2 text-gray-600 mb-6">
          <li>"Show me the NerdWallet article about crypto that I saved last week in Chrome"</li>
          <li>"Create a new tab group called 'Summer Travel' with all my saved Airbnb listings"</li>
          <li>"Group my saved California properties under $1M from Zillow"</li>
          <li>"Continue reading the article I was looking at on my Chromebook this morning"</li>
          <li>"When I put on my Pixel phone, show me the research papers I saved about neural networks"</li>
          <li>"Save this 3D model to my Google Drive workspace for later review"</li>
          <li>"Send my meeting notes to my Pixel Watch for my upcoming presentation"</li>
          <li>"Summarize this article and send the key points to my Pixel Watch"</li>
          <li>"Open my most recent Chrome tab group on my Pixel Tablet"</li>
          <li>"Remind me about this article next time I'm researching machine learning"</li>
          <li>"Move all my open finance-related tabs to a new tab group"</li>
          <li>"Read me the headlines from my saved articles while I'm on my morning walk"</li>
          <li>"Show me my Perplexity search from last week about quantum computing"</li>
          <li>"Open my latest ChatGPT conversation about Python programming"</li>
          <li>"Find my Grok analysis about market trends from yesterday"</li>
          <li>"Show me my Tableau dashboard for Q2 sales metrics"</li>
          <li>"Open my recent Figma designs for the new product launch"</li>
          <li>"Find my Google Sheets with the project timeline"</li>
          <li>"Show me my Notion workspace about the team meeting notes"</li>
          <li>"Show me my recent Claude conversations about AI ethics"</li>
        </ul>
        <div className="p-6 bg-gray-100 rounded-lg border border-gray-200">
          <p className="text-gray-600">
            These commands showcase how Google Intelligence integrates your personal context to deliver exactly what you need, when you need it—while always protecting your privacy.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-black text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">Key Benefits</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-semibold mb-2">Enhanced Search Experience</h4>
            <p className="text-gray-300">
              Transform search from a keyword-based experience to an intelligent interaction where information finds you based on your interests and needs.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Increased Knowledge Discovery</h4>
            <p className="text-gray-300">
              Drive deeper engagement with information by making knowledge discovery and interaction more natural and intuitive through AI-powered features.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Competitive Advantage</h4>
            <p className="text-gray-300">
              Position Google as the leader in AI-powered search, setting new standards for how people discover and interact with information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIBenefitsSection; 