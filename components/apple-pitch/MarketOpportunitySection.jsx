import React from 'react';
import Image from 'next/image';

const MarketOpportunitySection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-apple/market-opportunity.jpg"
          alt="Safari usage and revenue growth potential with AI integration"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-6">
        <p className="text-xl text-gray-600">
          The integration of our technology into Apple's ecosystem presents a major revenue opportunity through increased device sales, as well a secondary opportunity to increase ad revenue from the Google search partnership as long as it remains in place. Our analysis shows an opportunity to generate ~$1.5B to ~$13.9B in additional revenue over five years in the United States alone.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Device Revenue Opportunity */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Device Revenue Opportunity</h3>
          <div className="p-6 bg-gray-100 rounded-lg border border-gray-200">
            <p className="text-2xl font-semibold text-gray-800">
              ~$1.3B to ~$12.3B
            </p>
            <p className="text-gray-600 mt-1">
              additional revenue from device sales over a 5 year period
            </p>
          </div>
          <p className="text-gray-600 mt-4">
            Based on available data, Apple generates ~$101B in revenue from US-based device sales across the 4 major device categories. A better and more powerful Siri-Safari integration would create more cohesion across devices and make it more worthwhile for consumers to own multiple Apple products.
          </p>
        </div>

        {/* Ad Revenue Opportunity */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Ad Revenue Opportunity*</h3>
          <div className="p-6 bg-gray-100 rounded-lg border border-gray-200">
            <p className="text-2xl font-semibold text-gray-800">
              ~$154M to ~$1.6B
            </p>
            <p className="text-gray-600 mt-1">
              additional revenue from Google payouts over a 5 year period
            </p>
          </div>
          <p className="text-gray-600 mt-4">
            Currently, only 28% of US search queries come through Safari. A better and more powerful Siri-Safari integration would result in Apple users spending more time in Safari and less time in other browsers.
          </p>
        </div>
      </div>

      <p className="text-sm text-gray-500 mt-6">
        Note: Detailed workbook/calculation estimates available upon request - email jonathan@kahana.co.
      </p>
      <p className="text-sm text-gray-500">
        *We are aware Apple is considering moving away from the ad revenue share partnership with Google.
      </p>
    </div>
  );
};

export default MarketOpportunitySection; 