import React from 'react';
import Image from 'next/image';

const MarketOpportunitySection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-apple/market-opportunity.jpg"
          alt="Microsoft device and AI revenue growth potential"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-6">
        <p className="text-xl text-gray-600">
          The integration of our technology into Microsoft's ecosystem presents two major revenue opportunities: increased device sales (Surface, Windows PCs, Xbox, and more) and the introduction of a new premium AI assistant subscription. Our analysis shows an opportunity to generate ~$2.1B to ~$16.2B in additional revenue over five years in the United States alone*.
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
              additional revenue from Microsoft device sales over a 5 year period
            </p>
          </div>
          <p className="text-gray-600 mt-4">
            Microsoft generates significant revenue from US-based device sales, including Surface, Windows PCs, Xbox, and accessories. Enhanced AI integration and a seamless device ecosystem will drive more value for consumers and businesses, increasing device adoption and retention across the Microsoft hardware portfolio.
          </p>
        </div>

        {/* AI Assistant Subscription Opportunity */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">AI Assistant Subscription Opportunity</h3>
          <div className="p-6 bg-gray-100 rounded-lg border border-gray-200">
            <p className="text-2xl font-semibold text-gray-800">
              ~$600M to ~$3.2B
            </p>
            <p className="text-gray-600 mt-1">
              additional subscription revenue over a 5 year period
            </p>
          </div>
          <p className="text-gray-600 mt-4">
            A better and more powerful AI assistant presents an opportunity to introduce a new subscription tier that gives subscribers access to unlimited advanced AI features across all Microsoft devices, with a free tier that caps access to these features.
          </p>
        </div>
      </div>

      <p className="text-sm text-gray-500 mt-6">
        Note: Detailed workbook/calculation estimates available upon request - email jonathan@kahana.co.
      </p>
      <p className="text-sm text-gray-500">
        *This does not include potential additional revenue from Azure AI services or other cloud-based productivity enhancements. Microsoft stands to gain more revenue by increasing its AI-powered device and productivity market share in the US.
      </p>
    </div>
  );
};

export default MarketOpportunitySection; 