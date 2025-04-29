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
          The integration of our technology into Apple's ecosystem presents two major revenue opportunities: 
          increased device sales and increased revenue from the Google partnership. Our analysis shows 
          a potential $6.8 billion in additional revenue over five years.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Device Revenue Opportunity</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-black">Current US Revenue (2024)</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Total Device Revenue: $101.4B</li>
                <li>iPhone: $69.2B</li>
                <li>Wearables & Accessories: $12.7B</li>
                <li>Mac: $10.3B</li>
                <li>iPad: $9.2B</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-black">Projected Growth</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Wearables & Accessories: +2% YoY increase in sales</li>
                <li>Mac: +2% YoY increase in sales</li>
                <li>iPhone & iPad: +1% YoY increase in sales</li>
                <li>5-Year Total: $6.4B additional revenue</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Ad Revenue Opportunity</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-black">Current Position</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>28% of US searches through Safari</li>
                <li>36% revenue share from Google</li>
                <li>Current US ad revenue: $8.5B</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-black">Growth Potential</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>0.25% annual increase in search share</li>
                <li>0.89% relative market share growth</li>
                <li>5-Year Total: $388M additional revenue</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-black text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">Total Opportunity</h3>
        <p className="text-gray-300">
          The integration of our technology into Safari will create a more cohesive Apple ecosystem, 
          driving increased device sales and higher prices across the product line. This, combined 
          with growing ad revenue from increased Safari usage, represents a $6.8 billion revenue 
          opportunity over five years. The improved Safari experience will make Apple's ecosystem 
          more valuable to consumers, particularly driving growth in wearables and Mac sales, while 
          maintaining strong iPhone and iPad revenue through premium pricing.
        </p>
      </div>
    </div>
  );
};

export default MarketOpportunitySection; 