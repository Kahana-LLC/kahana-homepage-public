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
          The integration of our technology into Apple's ecosystem presents two major revenue opportunities: increased device sales and the introduction of a new subscription for unlimited sophisticated Siri requests. Our analysis shows an opportunity to generate ~$1.9B to ~$15.3B in additional revenue over five years in the United States alone*.
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

        {/* Siri Subscription Opportunity */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Siri Subscription Opportunity</h3>
          <div className="p-6 bg-gray-100 rounded-lg border border-gray-200">
            <p className="text-2xl font-semibold text-gray-800">
              ~$592M to ~$3.0B
            </p>
            <p className="text-gray-600 mt-1">
              additional subscription revenue over a 5 year period
            </p>
          </div>
          <p className="text-gray-600 mt-4">
            Currently, ~66% of US Apple customers already pay for an iCloud subscription. A better and more powerful Siri-Safari integration presents an opportunity to introduce a new $0.99/month subscription that gives subscribers access to unlimited fast, sophisticated Siri requests, with a free tier that caps access to these requests.
          </p>
        </div>
      </div>

      <p className="text-sm text-gray-500 mt-6">
        Note: Detailed workbook/calculation estimates available upon request - email jonathan@kahana.co.
      </p>
      <p className="text-sm text-gray-500">
        *This does not include a potential ~$154M to ~$1.6B in additional revenue from Google ad payouts for searches that take place in Safari over a 5-year period; we are aware that Apple is considering moving away from this ad revenue share partnership in favor of focusing on AI-powered search engines. However, while the partnership is still in place, Apple stands to gain more revenue by increasing its search query market share in the US.
      </p>
    </div>
  );
};

export default MarketOpportunitySection; 