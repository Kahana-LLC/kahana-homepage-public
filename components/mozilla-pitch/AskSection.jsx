import React from 'react';
import Image from 'next/image';

const AskSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="https://images.pexels.com/photos/4386375/pexels-photo-4386375.jpeg"
          alt="Investment opportunity and seed round details"
          fill
          className="object-contain bg-[#001B41]"
          priority
        />
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800">Investment Opportunity</h3>
        
        {/* Investment Ask */}
        <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
          <h4 className="text-2xl font-bold text-blue-900 mb-4">$275,000 Investment Ask</h4>
          <p className="text-gray-700 mb-6">
            We are seeking a $275,000 investment from Mozilla Ventures to kick off our $5M seed round. This investment will enable us to:
          </p>
          <ul className="space-y-4 mb-6">
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 text-blue-600">✓</div>
              <p className="ml-3 text-gray-700">Complete development of core enterprise browser intelligence features</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 text-blue-600">✓</div>
              <p className="ml-3 text-gray-700">Secure and onboard our first 20 enterprise clients</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 text-blue-600">✓</div>
              <p className="ml-3 text-gray-700">Build out our enterprise sales and support infrastructure</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 text-blue-600">✓</div>
              <p className="ml-3 text-gray-700">Develop implementation templates and customer success frameworks</p>
            </li>
          </ul>
          <div className="bg-white rounded-xl p-4 border border-blue-100 mt-4">
            <p className="text-blue-900 font-medium">
              <strong>We already have verbal commitments from three clients:</strong> two for the $1,000 tier and one for the $5,000 tier. Backing from Mozilla will expedite our ability to close more of these deals, thanks to Mozilla's credibility and expertise in the market.
            </p>
          </div>
        </div>

        {/* Seed Round Details */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">$5M Seed Round Details</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-medium text-gray-900 mb-2">Round Structure</h5>
              <ul className="space-y-2 text-gray-700">
                <li>• Total Round Size: $5M</li>
                <li>• Mozilla Ventures Lead: $275K</li>
                <li>• Remaining Allocation: $4.725M</li>
                <li>• Target Close: Q1 2026</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium text-gray-900 mb-2">Use of Funds</h5>
              <ul className="space-y-2 text-gray-700">
                <li>• Product Development: 40%</li>
                <li>• Sales & Marketing: 30%</li>
                <li>• Operations & Support: 20%</li>
                <li>• Working Capital: 10%</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Investment Highlights */}
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">Why Invest Now?</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h5 className="font-semibold text-gray-900 mb-2">Market Timing</h5>
              <p className="text-gray-700">Enterprise browser market is ripe for disruption with increasing focus on productivity and security</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h5 className="font-semibold text-gray-900 mb-2">Proven Technology</h5>
              <p className="text-gray-700">Core technology validated through successful pilot programs with early enterprise clients</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h5 className="font-semibold text-gray-900 mb-2">Clear Path to Revenue</h5>
              <p className="text-gray-700">Initial 20 clients represent $120K in revenue with clear scaling path to $600K by 2026. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskSection; 