import React from 'react';
import Image from 'next/image';

const MarketOpportunitySection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-microsoft/market-opportunity.jpg"
          alt="Enterprise AI market opportunity"
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-6">
        <p className="text-xl text-gray-600">
          The enterprise AI market represents a massive opportunity for transformation. With organizations increasingly 
          seeking intelligent solutions to drive efficiency and innovation, Microsoft is uniquely positioned to lead 
          this market evolution.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Market Size</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>$644B enterprise AI market by 2025</li>
            <li>85% of Fortune 500 companies adopting AI</li>
            <li>40% annual growth in enterprise AI spending</li>
            <li>70% of organizations prioritizing AI integration</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Growth Drivers</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Increasing demand for intelligent automation</li>
            <li>Need for real-time business insights</li>
            <li>Shift to remote and hybrid work</li>
            <li>Competitive pressure for digital transformation</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 bg-black text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">Revenue Opportunities</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-semibold mb-2">Enterprise Solutions</h4>
            <p className="text-gray-300">
              Comprehensive AI-powered enterprise software suites, including productivity tools, collaboration platforms, and business intelligence solutions.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Cloud Services</h4>
            <p className="text-gray-300">
              Scalable AI infrastructure and services through Azure, enabling organizations to build and deploy intelligent applications.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Professional Services</h4>
            <p className="text-gray-300">
              Consulting and implementation services to help organizations successfully adopt and integrate AI solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketOpportunitySection; 