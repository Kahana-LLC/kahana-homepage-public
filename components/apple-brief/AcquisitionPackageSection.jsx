import React from 'react';

const AcquisitionPackageSection = () => (
  <div className="mt-16 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden max-w-4xl mx-auto">
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-2 px-4 border-b border-gray-200">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Acquisition Package</h3>
    </div>
    <div className="py-2 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
        <div className="p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Full IP Portfolio</h4>
          <p className="text-gray-600">Two issued patents and a patent pending open up a clear path to write and file additional patents that will serve to expand and protect command-to-GUI technologies in Apple's next generations of products.</p>
        </div>
        <div className="p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Leadership & Innovation</h4>
          <p className="text-gray-600">Adam Kershner and Jonathan Gans (majority Owners of Kahana Group Inc.) join Apple as full-time directors to integrate their patented command-to-GUI inventions into Apple's product ecosystem and further expand Apple's IP portfolio.</p>
        </div>
        <div className="p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Code, Products, Revenue</h4>
          <p className="text-gray-600">Full ownership of Kahana Group Inc. codebase, existing products, existing customers, revenue streams, and control over decision-making (e.g., integrating code into Apple's code base).</p>
        </div>
      </div>
    </div>
  </div>
);

export default AcquisitionPackageSection; 