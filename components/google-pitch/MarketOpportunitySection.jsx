import React from 'react';
import Image from 'next/image';

const MarketOpportunitySection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-google/market-opportunity.jpg"
          alt="Google search usage and revenue growth potential with AI integration"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-6">
        <p className="text-xl text-gray-600">
          The integration of our technology into Google's search ecosystem presents a major revenue opportunity through increased search engagement and ad revenue. Our analysis shows an opportunity to generate ~$2.5B to ~$15.9B in additional revenue over five years in the United States alone.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Search Revenue Opportunity */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Search Revenue Opportunity</h3>
          <div className="p-6 bg-gray-100 rounded-lg border border-gray-200">
            <p className="text-2xl font-semibold text-gray-800">
              ~$2.1B to ~$13.3B
            </p>
            <p className="text-gray-600 mt-1">
              additional revenue from search engagement over a 5 year period
            </p>
          </div>
          <p className="text-gray-600 mt-4">
            Based on available data, Google generates ~$150B in revenue from US-based search operations. A better and more powerful AI-enhanced search experience would create more engagement and make it more worthwhile for users to rely on Google for their information needs.
          </p>
        </div>

        {/* Ad Revenue Opportunity */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Ad Revenue Opportunity</h3>
          <div className="p-6 bg-gray-100 rounded-lg border border-gray-200">
            <p className="text-2xl font-semibold text-gray-800">
              ~$400M to ~$2.6B
            </p>
            <p className="text-gray-600 mt-1">
              additional revenue from targeted ads over a 5 year period
            </p>
          </div>
          <p className="text-gray-600 mt-4">
            Currently, only 65% of US search queries result in ad engagement. A better and more powerful AI-enhanced search experience would result in more targeted and relevant ad placements.
          </p>
        </div>
      </div>

      <p className="text-sm text-gray-500 mt-6">
        Note: Detailed workbook/calculation estimates available upon request - email jonathan@kahana.co.
      </p>
    </div>
  );
};

export default MarketOpportunitySection; 