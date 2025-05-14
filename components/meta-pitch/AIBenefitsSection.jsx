import React from 'react';
import Image from 'next/image';

const AIBenefitsSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="w-full max-w-4xl mx-auto mb-8">
        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#000B1E]">
          <Image
            src="/images-meta/ai-benefits.jpg"
            alt="AI benefits for Meta's social platform"
            fill
            quality={100}
            priority
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-black mb-4">New Commands with Meta Intelligence</h3>
        <p className="text-gray-600 mb-4">
          By integrating our technology into Meta's product suite, the following types of commands will now be possible to accomplish touch-free:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>"Show me the article about AI that I saved last week in my Meta feed"</li>
          <li>"Create a new collection called 'VR Research' with all my saved Quest reviews"</li>
          <li>"Group my saved AR experiences under 'Productivity' from Horizon Worlds"</li>
          <li>"Continue watching the VR tutorial I was viewing on my Quest this morning"</li>
          <li>"When I put on my Meta Glasses, show me the research papers I saved about neural networks"</li>
          <li>"Save this 3D model to my Quest workspace for later review"</li>
          <li>"Send my meeting notes to my Meta Watch for my upcoming presentation"</li>
          <li>"Summarize this article and send the key points to my Meta Watch"</li>
          <li>"Open my most recent Horizon Worlds session on my Quest"</li>
          <li>"Remind me about this article next time I'm researching machine learning"</li>
          <li>"Move all my open VR experiences to a new collection"</li>
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
      
      </div>
    </div>
  );
};

export default AIBenefitsSection; 