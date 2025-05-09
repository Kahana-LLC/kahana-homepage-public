import React from 'react';
import Image from 'next/image';

const AIBenefitsSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="w-full max-w-4xl mx-auto mb-8">
        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#000B1E]">
          <Image
            src="/images-apple/ai-benefits.jpg"
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
        <h3 className="text-2xl font-semibold text-black mb-4">New Commands with Apple Intelligence</h3>
        <p className="text-gray-600 mb-4">
          By integrating our technology into Apple's product suite, the following types of commands will now be possible to accomplish touch-free:
        </p>
        <ul className="list-decimal list-inside space-y-2 text-gray-600 mb-6">
          <li>"Show me the NerdWallet article about crypto that I saved last week in Safari"</li>
          <li>"Create a new tab group called 'Summer Travel' with all my saved Airbnb listings"</li>
          <li>"Group my saved California properties under $1M from Zillow"</li>
          <li>"Continue reading the article I was looking at on my Mac this morning"</li>
          <li>"When I put on Vision Pro, show me the research papers I saved about neural networks"</li>
          <li>"Save this 3D model to my Vision Pro workspace for later review"</li>
          <li>"Send my meeting notes to my Apple Watch for my upcoming presentation"</li>
          <li>"Summarize this article and send the key points to my Apple Watch"</li>
          <li>"Open my most recent Safari tab group on my iPad"</li>
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
            These commands showcase how Apple Intelligence integrates your personal context to deliver exactly what you need, when you need it—while always protecting your privacy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIBenefitsSection; 