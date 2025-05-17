import React from 'react';

const PricingSection = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800">Early-bird Pricing for First 20 Enterprise Customers*</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {/* Small Firms */}
          <div className="p-8 bg-blue-50 border border-blue-200 rounded-2xl shadow-lg flex flex-col h-full">
            <h5 className="text-lg font-bold text-blue-900 mb-2">$1,000 Tier<br /><span className='font-normal text-gray-700'>(Small Firms)</span></h5>
            <ul className="space-y-2 text-gray-800 flex-1">
              <li><strong>$1,000</strong> upfront payment</li>
              <li><strong>$2,000/year</strong> for 60 users<br /><span className="text-xs">(~$2.78/endpoint/month)</span></li>
              <li>Early access benefit</li>
              <li>3-year total: <strong>$6,000</strong></li>
              <li className="text-green-700 font-semibold">Compared to Island: <strong>$48,000</strong> savings over 3 years</li>
            </ul>
          </div>
          {/* Mid-Sized Firms */}
          <div className="p-8 bg-blue-50 border border-blue-200 rounded-2xl shadow-lg flex flex-col h-full">
            <h5 className="text-lg font-bold text-blue-900 mb-2">$3,000 Tier<br /><span className='font-normal text-gray-700'>(Mid-Sized)</span></h5>
            <ul className="space-y-2 text-gray-800 flex-1">
              <li><strong>$3,000</strong> upfront payment</li>
              <li><strong>$5,500/year</strong> for 300 users<br /><span className="text-xs">(~$1.53/endpoint/month)</span></li>
              <li>Early access + priority support</li>
              <li>3-year total: <strong>$16,500</strong></li>
              <li className="text-green-700 font-semibold">Compared to Island: <strong>$253,500</strong> savings over 3 years</li>
            </ul>
          </div>
          {/* Larger Firms */}
          <div className="p-8 bg-blue-50 border border-blue-200 rounded-2xl shadow-lg flex flex-col h-full">
            <h5 className="text-lg font-bold text-blue-900 mb-2">$5,000 Tier<br /><span className='font-normal text-gray-700'>(Larger Firms)</span></h5>
            <ul className="space-y-2 text-gray-800 flex-1">
              <li><strong>$5,000</strong> upfront payment</li>
              <li><strong>$8,500/year</strong> for 600 users<br /><span className="text-xs">(~$1.18/endpoint/month)</span></li>
              <li>Early access + priority support + co-marketing</li>
              <li>3-year total: <strong>$25,500</strong></li>
              <li className="text-green-700 font-semibold">Compared to Island: <strong>$514,500</strong> savings over 3 years</li>
            </ul>
          </div>
        </div>

        <h4 className="text-xl font-semibold text-gray-700 mt-8">Value-Based Pricing Model</h4>
        <div className="bg-gray-50 p-4 rounded mb-2 font-mono">
          (Vo - Co) - (Vother - Cother) + pother &gt; po
        </div>
        <div className="text-sm text-gray-700 mb-2">
          Where:<br />
          Vo = Value of Oasis<br />
          Co = Costs of Oasis<br />
          Vother = Value of competing solution<br />
          Cother = Costs of competing solution<br />
          pother = Price of competing solution<br />
          po = Price of Oasis
        </div>
        <div className="space-y-2">
          <strong>For support teams, we can quantify value as:</strong>
          <ul className="list-disc list-inside ml-6">
            <li>Average support agent salary: <strong>$14.29/hour</strong></li>
            <li>Average Handle Time (AHT): <strong>6 minutes and 10 seconds</strong></li>
            <li>Potential AHT reduction with Oasis: <strong>15%</strong></li>
            <li>Annual savings per agent: <strong>~$2,150</strong></li>
          </ul>
          <strong>For engineering teams:</strong>
          <ul className="list-disc list-inside ml-6">
            <li>Average engineer salary: <strong>$50/hour</strong></li>
            <li>Time spent searching for information: <strong>3 hours/week</strong></li>
            <li>Potential time savings with Oasis: <strong>20%</strong></li>
            <li>Annual savings per engineer: <strong>~$14,400</strong></li>
          </ul>
        </div>

        <h4 className="text-xl font-semibold text-gray-700 mt-8">Pricing Strategy Rationale</h4>
        <ul className="list-disc list-inside ml-6">
          <li>All tiers include 3-year rate lock to encourage early adoption</li>
          <li>Volume discounts create incentive for larger deployments</li>
          <li>Tier-specific benefits provide additional value beyond the core product</li>
          <li>Pricing designed to be approximately 90% less expensive than Island</li>
          <li>After 3-years, prices revert to list price or are renegotiated</li>
        </ul>

        <h4 className="text-xl font-semibold text-gray-700 mt-8">Financial Projections</h4>
        <ul className="list-disc list-inside ml-6">
          <li>With the target mix of 6 small firms, 7 mid-sized firms, and 7 larger firms:</li>
          <li>Upfront cash: <strong>$62,000</strong></li>
          <li>Annual recurring revenue: <strong>$120,000</strong></li>
          <li>Total users covered: <strong>6,660 endpoints</strong></li>
        </ul>
      </div>
    </div>
  );
};

export default PricingSection; 