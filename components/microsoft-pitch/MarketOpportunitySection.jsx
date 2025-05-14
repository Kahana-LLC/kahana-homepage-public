import React from 'react';
import Image from 'next/image';

const MarketOpportunitySection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-microsoft/market-opportunity.jpg"
          alt="Microsoft's AI-powered Surface devices and productivity ecosystem revenue potential"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-6">
        <p className="text-xl text-gray-600">
          The shift from traditional Office tools to AI-powered productivity is inevitable. As Fast Company reported, Microsoft has already acknowledged that traditional Office usage is declining. This presents three major revenue opportunities: expanding the Surface product line with AI-first devices, premium Copilot subscriptions, and Edge browser integration. Our analysis shows an opportunity to generate ~$3.2B to ~$22.5B in additional revenue over five years in the United States alone*.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {/* Surface Product Line Expansion */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Surface Product Line Expansion</h3>
          <div className="p-6 bg-gray-100 rounded-lg border border-gray-200">
            <p className="text-2xl font-semibold text-gray-800">
              ~$1.8B to ~$12.5B
            </p>
            <p className="text-gray-600 mt-1">
              additional revenue from AI-first Surface devices over a 5 year period
            </p>
          </div>
          <p className="text-gray-600 mt-4">
            Microsoft's Surface line is uniquely positioned to lead the AI-first hardware revolution. By expanding the product line with devices specifically designed for AI-powered productivity—from collaborative Surface Hubs to personal AI workstations—Microsoft can capture the growing demand for hardware that enables the future of work.
          </p>
        </div>

        {/* Copilot Premium Subscription */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Copilot Premium Subscription</h3>
          <div className="p-6 bg-gray-100 rounded-lg border border-gray-200">
            <p className="text-2xl font-semibold text-gray-800">
              ~$900M to ~$5.8B
            </p>
            <p className="text-gray-600 mt-1">
              additional premium tier revenue over a 5 year period
            </p>
          </div>
          <p className="text-gray-600 mt-4">
            As traditional Office usage declines, businesses are actively seeking AI-powered productivity solutions. A new $20/month premium tier for unlimited Copilot requests, combined with AI-first Surface devices, creates a compelling value proposition for enterprises looking to future-proof their workforce.
          </p>
        </div>

        {/* Edge Browser Revenue */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Edge Browser Revenue</h3>
          <div className="p-6 bg-gray-100 rounded-lg border border-gray-200">
            <p className="text-2xl font-semibold text-gray-800">
              ~$500M to ~$4.2B
            </p>
            <p className="text-gray-600 mt-1">
              additional ad revenue over a 5 year period
            </p>
          </div>
          <p className="text-gray-600 mt-4">
            With AI-first Surface devices and Copilot integration, Edge becomes the natural choice for businesses. This could help Microsoft capture 40-50% of the enterprise browser market, generating significant ad revenue while providing valuable data to improve Copilot's capabilities across the ecosystem.
          </p>
        </div>
      </div>

      <div className="mt-8 p-6 bg-black text-white rounded-xl">
        <h3 className="text-xl font-semibold mb-4">The Inevitable Shift</h3>
        <p className="text-gray-300">
          "There's enough money now, enough large players, that I don't see how it doesn't happen," said about the switch from standard productivity tools to AI-powered ones. Microsoft's unique position—combining hardware, software, and AI—puts it at the forefront of this transformation. By expanding the Surface product line with AI-first devices and integrating Copilot deeply into the ecosystem, Microsoft can lead the charge in eliminating the need for traditional offices while creating new revenue streams.
        </p>
      </div>

      <p className="text-sm text-gray-500 mt-6">
        Note: Detailed workbook/calculation estimates available upon request - email jonathan@kahana.co.
      </p>
      <p className="text-sm text-gray-500">
        *This analysis focuses on direct revenue streams. Additional value may be generated through enterprise services, consulting, and ecosystem effects that could further increase Microsoft's market share and revenue potential.
      </p>
    </div>
  );
};

export default MarketOpportunitySection; 