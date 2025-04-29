import React from 'react';
import Image from 'next/image';

const VsCompetitorsSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-64 w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg"
          alt="Business meeting and handshake"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800">Competitive Advantage</h3>
        <p className="text-gray-600">
          Our product stands out in the market through a combination of superior technology, design excellence, 
          and ecosystem integration.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-gray-800">Technology Comparison</h4>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h5 className="font-semibold text-gray-800">Processing Power</h5>
              <p className="text-gray-600">2x faster than leading competitors</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h5 className="font-semibold text-gray-800">Battery Life</h5>
              <p className="text-gray-600">40% longer than industry average</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h5 className="font-semibold text-gray-800">Security</h5>
              <p className="text-gray-600">Industry-leading privacy features</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-gray-800">User Experience</h4>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h5 className="font-semibold text-gray-800">Design</h5>
              <p className="text-gray-600">Unmatched aesthetic and functionality</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h5 className="font-semibold text-gray-800">Ecosystem</h5>
              <p className="text-gray-600">Seamless integration across devices</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h5 className="font-semibold text-gray-800">Support</h5>
              <p className="text-gray-600">24/7 premium customer service</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800">Market Position</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Market Share</h4>
            <p className="text-gray-600">Leading position in premium segment</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Customer Satisfaction</h4>
            <p className="text-gray-600">Highest satisfaction ratings</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Innovation</h4>
            <p className="text-gray-600">Consistent industry leadership</p>
          </div>
        </div>
      </div>

      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800">Key Differentiators</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Technology Leadership</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Custom silicon design</li>
              <li>Advanced AI capabilities</li>
              <li>Industry-leading security</li>
              <li>Sustainable manufacturing</li>
            </ul>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">User-Centric Design</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Intuitive interface</li>
              <li>Seamless ecosystem</li>
              <li>Premium support</li>
              <li>Privacy focus</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VsCompetitorsSection; 