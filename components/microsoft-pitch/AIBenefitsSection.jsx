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
            alt="AI-powered voice commands controlling multiple Microsoft devices"
            fill
            quality={100}
            priority
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-black mb-4">New Commands with Microsoft Intelligence</h3>
        <p className="text-gray-600 mb-4">
          By integrating our technology into Microsoft's product suite, the following types of commands will now be possible to accomplish touch-free:
        </p>
        <ul className="list-decimal list-inside space-y-2 text-gray-600 mb-6">
          <li>"Show me the quarterly financial report I saved last week in Excel"</li>
          <li>"Create a new folder called 'Q2 Projects' with all my saved PowerPoint presentations"</li>
          <li>"Group my saved marketing materials under $50K budget from SharePoint"</li>
          <li>"Continue working on the document I was editing on my Surface this morning"</li>
          <li>"When I put on HoloLens, show me the research papers I saved about AI integration"</li>
          <li>"Save this 3D model to my HoloLens workspace for later review"</li>
          <li>"Send my meeting notes to my Windows Phone for my upcoming presentation"</li>
          <li>"Summarize this report and send the key points to my Windows Phone"</li>
          <li>"Open my most recent Excel workbook on my Surface Pro"</li>
          <li>"Remind me about this document next time I'm working on the Q3 budget"</li>
          <li>"Move all my open finance-related documents to a new folder"</li>
          <li>"Read me the key metrics from my saved reports while I'm on my morning walk"</li>
          <li>"Show me my Bing search from last week about cloud computing"</li>
          <li>"Open my latest Copilot conversation about Azure deployment"</li>
          <li>"Find my Power BI analysis about market trends from yesterday"</li>
          <li>"Show me my Power BI dashboard for Q2 sales metrics"</li>
          <li>"Open my recent PowerPoint designs for the new product launch"</li>
          <li>"Find my Excel spreadsheet with the project timeline"</li>
          <li>"Show me my SharePoint workspace about the team meeting notes"</li>
          <li>"Show me my recent Teams conversations about project updates"</li>
        </ul>
        <div className="p-6 bg-gray-100 rounded-lg border border-gray-200">
          <p className="text-gray-600">
            These commands showcase how Microsoft Intelligence integrates your work context to deliver exactly what you need, when you need it—while always protecting your privacy and enterprise security.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-black text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">Key Benefits</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-semibold mb-2">Enhanced Productivity</h4>
            <p className="text-gray-300">
              Transform how teams work by automating routine tasks and providing intelligent assistance for complex operations.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Improved Decision Making</h4>
            <p className="text-gray-300">
              Drive better business outcomes with AI-powered insights and predictive analytics that support informed decision-making.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Competitive Advantage</h4>
            <p className="text-gray-300">
              Position your organization at the forefront of digital transformation with cutting-edge AI capabilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIBenefitsSection; 