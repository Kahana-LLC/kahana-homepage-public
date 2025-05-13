import React from 'react';
import Image from 'next/image';

const MarketOpportunitySection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-google/market-opportunity.jpg"
          alt="Google device ecosystem and revenue growth potential with AI integration"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-6">
        <p className="text-xl text-gray-600">
          The integration of our technology into Google's ecosystem presents three major revenue opportunities: increased device sales, the expansion of Gemini's subscription offerings, and enhanced ad revenue through Chrome. Our analysis shows an opportunity to generate ~$2.5B to ~$15.9B in additional revenue over five years in the United States alone*.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {/* Device Revenue Opportunity */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Device Revenue Opportunity</h3>
          <div className="p-6 bg-gray-100 rounded-lg border border-gray-200">
            <p className="text-2xl font-semibold text-gray-800">
              ~$2.1B to ~$13.3B
            </p>
            <p className="text-gray-600 mt-1">
              additional revenue from device sales over a 5 year period
            </p>
          </div>
          <p className="text-gray-600 mt-4">
            Based on available data, Google generates ~$150B in revenue from US-based device sales across Pixel phones, Chromebooks, and Google Home speakers. A better and more powerful Gemini integration would create more cohesion across devices and make it more worthwhile for consumers to own multiple Google products.
          </p>
        </div>

        {/* Gemini Subscription Opportunity */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Gemini Subscription Opportunity</h3>
          <div className="p-6 bg-gray-100 rounded-lg border border-gray-200">
            <p className="text-2xl font-semibold text-gray-800">
              ~$400M to ~$2.6B
            </p>
            <p className="text-gray-600 mt-1">
              additional subscription revenue over a 5 year period
            </p>
          </div>
          <p className="text-gray-600 mt-4">
            Google's Gemini ecosystem offers multiple subscription tiers: Gemini Advanced at $19.99/month for consumers, Gemini Business at $20/user/month, and Gemini Enterprise at $30/user/month for Workspace users. Additionally, the Gemini API provides both free and pay-as-you-go tiers, with pricing varying by model and feature usage. This multi-tiered approach creates significant revenue potential across consumer and enterprise segments.
          </p>
        </div>

        {/* Ad Revenue Opportunity */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Ad Revenue Opportunity</h3>
          <div className="p-6 bg-gray-100 rounded-lg border border-gray-200">
            <p className="text-2xl font-semibold text-gray-800">
              ~$200M to ~$2.1B
            </p>
            <p className="text-gray-600 mt-1">
              additional revenue from search ads over a 5 year period
            </p>
          </div>
          <p className="text-gray-600 mt-4">
            With Gemini's deep integration into Chrome, users will increasingly turn to Google for their knowledge management and information needs. This enhanced engagement will drive more Chrome usage and search queries, creating additional opportunities for targeted ad revenue through Google's existing ad platform.
          </p>
        </div>
      </div>

      <p className="text-sm text-gray-500 mt-6">
        Note: Detailed workbook/calculation estimates available upon request - email jonathan@kahana.co.
      </p>
      <p className="text-sm text-gray-500">
        *This does not include a potential ~$200M to ~$2.1B in additional revenue from search ad revenue over a 5-year period; we are aware that Google is considering moving away from traditional search ads in favor of focusing on AI-powered search experiences. However, while the current ad model is still in place, Google stands to gain more revenue by increasing its search query market share in the US.
      </p>
    </div>
  );
};

export default MarketOpportunitySection; 