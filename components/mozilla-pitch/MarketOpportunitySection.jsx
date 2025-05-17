import React, { useState } from 'react';
import Image from 'next/image';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const industryData = [
  {
    name: 'Healthcare',
    TAM: 282,
    SAM: 84.6,
    SOM: 8.46, // midpoint of $4.23M - $12.69M
    owner: 'Divya',
  },
  {
    name: 'Financial Services',
    TAM: 435,
    SAM: 130.5,
    SOM: 13.05, // midpoint of $6.5M - $19.6M
    owner: 'Divya',
  },
  {
    name: 'Manufacturing', TAM: 200, SAM: 60, SOM: 10, owner: 'Fahiza' },
  {
    name: 'Professional, Legal, Business & Consumer Services', TAM: 200, SAM: 60, SOM: 10, owner: 'Nipun' },
  {
    name: 'Energy & Utilities', TAM: 200, SAM: 60, SOM: 10, owner: 'Fahiza' },
  {
    name: 'Retail & E-commerce', TAM: 200, SAM: 60, SOM: 10, owner: 'Jescetta' },
  {
    name: 'Government & Public Sector', TAM: 200, SAM: 60, SOM: 10, owner: 'Sonali' },
  {
    name: 'Technology', TAM: 200, SAM: 60, SOM: 10, owner: 'Sonali' },
  {
    name: 'Education', TAM: 200, SAM: 60, SOM: 10, owner: 'Jescetta' },
  {
    name: 'Hospitality', TAM: 200, SAM: 60, SOM: 10, owner: '' },
];

const ALL_OPTION = 'All Industries';

const MarketOpportunitySection = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(ALL_OPTION);

  const handleSelectChange = (e) => {
    setSelectedIndustry(e.target.value);
  };

  const isAll = selectedIndustry === ALL_OPTION;
  const filteredData = isAll ? industryData : industryData.filter(ind => ind.name === selectedIndustry);

  return (
    <div className="space-y-8">
      {/* Executive Summary and Market Overview */}
      <div className="mb-8">
        <p>
          The AI-enhanced enterprise browser market presents significant growth opportunities across company sizes and industries. Key sectors include professional services ($127.96B–$319.9B SOM) and legal services ($20.66B–$51.66B SOM), with enterprises offering the highest immediate monetization potential. The global TAM ranges from $27B (bottom-up) to $81.2B (top-down), driven by escalating security threats and productivity demands.
        </p>
        <hr className="my-6" />
        <h3 className="text-xl font-semibold mb-2">Market Overview</h3>
        <h4 className="font-semibold">Key Drivers</h4>
        <ul className="list-disc list-inside mb-4">
          <li><b>Security:</b> 60% of breaches originate from browsers; attacks increased 40% YoY (2024).</li>
          <li><b>Productivity:</b> Productivity software market to hit $81.2B in 2025.</li>
          <li><b>Adoption:</b> 52% of enterprises plan secure browser adoption by 2025.</li>
        </ul>
      </div>
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
          The AI-enhanced enterprise browser market offers a $27B–$81.2B TAM, with enterprises and professional services representing the most lucrative segments. Prioritizing compliance, sector-specific AI tools, and tiered pricing can capture 3.8–9.5% of the $7.42T professional/legal tech spend by 2025. Asia-Pacific markets (15.5% CAGR) and browser-centric security solutions present untapped growth avenues.
        </p>
      </div>

      {/* Industry Filter and Chart */}
      <div className="mt-8">
        <label htmlFor="industry-select" className="block text-lg font-semibold mb-2">Select Industry</label>
        <select
          id="industry-select"
          value={selectedIndustry}
          onChange={handleSelectChange}
          className="w-full md:w-1/2 p-2 border border-gray-300 rounded mb-4"
        >
          <option value={ALL_OPTION}>{ALL_OPTION}</option>
          {industryData.map(ind => (
            <option key={ind.name} value={ind.name}>{ind.name}</option>
          ))}
        </select>
        <div className="w-full h-80 bg-white rounded-xl border border-gray-200 p-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={filteredData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <XAxis dataKey="name" />
              <YAxis label={{ value: 'USD (Millions)', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="TAM" fill="#2563eb" name="TAM" />
              <Bar dataKey="SAM" fill="#60a5fa" name="SAM" />
              <Bar dataKey="SOM" fill="#a5b4fc" name="SOM" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-xs text-gray-500 mt-2">*Healthcare and Financial Services use real data. Other industries use placeholder values for illustration.</p>
      </div>
      {/* Add detailed market opportunity analysis below the chart */}
      <div className="mt-12 space-y-8">
        <h3 className="text-2xl font-bold mb-4">Market Potential by Company Size</h3>
        <h4 className="font-semibold mt-6">1. Small Businesses (1–100 Employees)</h4>
        <table className="min-w-full bg-white border border-gray-200 rounded-lg mb-2">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b">Metric</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b">Downward (TAM)</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b">Upward (SAM)</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b">SOM (2025)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border-b">Market Size</td>
              <td className="px-4 py-2 border-b">$22.1B</td>
              <td className="px-4 py-2 border-b">$4.42B</td>
              <td className="px-4 py-2 border-b">$663M</td>
            </tr>
          </tbody>
        </table>
        <p className="text-gray-700 mb-4"><b>Key Insights:</b><br />- Targets 4.1M businesses globally<br />- 68% face phishing attacks; prefer $8–12/user/month pricing</p>
        <h4 className="font-semibold mt-6">2. Medium Businesses (101–1,000 Employees)</h4>
        <table className="min-w-full bg-white border border-gray-200 rounded-lg mb-2">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b">Metric</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b">Downward (TAM)</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b">Upward (SAM)</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b">SOM (2025)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border-b">Market Size</td>
              <td className="px-4 py-2 border-b">$14.7B</td>
              <td className="px-4 py-2 border-b">$9.2B</td>
              <td className="px-4 py-2 border-b">$1.1B</td>
            </tr>
          </tbody>
        </table>
        <p className="text-gray-700 mb-4"><b>Key Insights:</b><br />- 82,000 target companies; $15–25/user/month pricing<br />- 73% require MDM/EMM integration</p>
        <h4 className="font-semibold mt-6">3. Enterprise (1,000+ Employees)</h4>
        <table className="min-w-full bg-white border border-gray-200 rounded-lg mb-2">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b">Metric</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b">Downward (TAM)</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b">Upward (SAM)</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b">SOM (2025)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border-b">Market Size</td>
              <td className="px-4 py-2 border-b">$44.8B</td>
              <td className="px-4 py-2 border-b">$18.3B</td>
              <td className="px-4 py-2 border-b">$2.9B</td>
            </tr>
          </tbody>
        </table>
        <p className="text-gray-700 mb-4"><b>Key Insights:</b><br />- 4,900 target enterprises; $387K average contract value<br />- 92% demand FedRAMP/GDPR compliance</p>
        <hr className="my-6" />
        <h3 className="text-2xl font-bold mb-4">Industry-Specific Opportunities</h3>
        <h4 className="font-semibold mt-6">1. Professional Services</h4>
        <table className="min-w-full bg-white border border-gray-200 rounded-lg mb-2">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b">Metric</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b">2025 Market Size</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b">SOM Range (2025)</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b">2030 Projection</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border-b">Value</td>
              <td className="px-4 py-2 border-b">$6.39T</td>
              <td className="px-4 py-2 border-b">$127.96B–$319.9B</td>
              <td className="px-4 py-2 border-b">$398.5B</td>
            </tr>
          </tbody>
        </table>
        <p className="text-gray-700 mb-4"><b>Growth Drivers:</b><br />- $2.08T digital transformation spending<br />- 89% cloud adoption rate</p>
        <h4 className="font-semibold mt-6">2. Legal Services</h4>
        <table className="min-w-full bg-white border border-gray-200 rounded-lg mb-2">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b">Metric</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b">2025 Market Size</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b">SOM Range (2025)</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b">2030 Projection</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border-b">Value</td>
              <td className="px-4 py-2 border-b">$1,033.19B</td>
              <td className="px-4 py-2 border-b">$20.66B–$51.66B</td>
              <td className="px-4 py-2 border-b">$77.7B</td>
            </tr>
          </tbody>
        </table>
        <p className="text-gray-700 mb-4"><b>Segmentation:</b><br />- <b>Corporate Legal:</b> $6.72B–$16.8B<br />- <b>Law Firms:</b> $11.14B–$27.85B<br />- <b>Government:</b> $2.81B–$7.03B</p>
        <hr className="my-6" />
        <h3 className="text-2xl font-bold mb-4">Strategic Recommendations</h3>
        <h4 className="font-semibold mt-6">Market Entry Priorities</h4>
        <ol className="list-decimal list-inside mb-4">
          <li><b>Enterprise Focus:</b> Target centralized procurement teams with compliance-ready solutions.</li>
          <li><b>Sector-Specific Features:</b> <br />- Legal: AI contract review (92% accuracy) + GDPR tools.<br />- Professional Services: Cloud workflow integration.</li>
          <li><b>Pricing Strategy:</b> <br />- Small Biz: $8–12/user/month<br />- Legal Sector: $35–50/user/month (premium tier)</li>
        </ol>
        <h4 className="font-semibold mt-6">Growth Projections</h4>
        <table className="min-w-full bg-white border border-gray-200 rounded-lg mb-2">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b">Segment</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b">2025 SOM</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b">2030 SOM</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b">CAGR</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border-b">Small Businesses</td>
              <td className="px-4 py-2 border-b">$663M</td>
              <td className="px-4 py-2 border-b">$2.1B</td>
              <td className="px-4 py-2 border-b">26%</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b">Medium Businesses</td>
              <td className="px-4 py-2 border-b">$1.1B</td>
              <td className="px-4 py-2 border-b">$3.7B</td>
              <td className="px-4 py-2 border-b">28%</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b">Enterprise</td>
              <td className="px-4 py-2 border-b">$2.9B</td>
              <td className="px-4 py-2 border-b">$9.8B</td>
              <td className="px-4 py-2 border-b">27%</td>
            </tr>
          </tbody>
        </table>
        <hr className="my-6" />
        
        <p className="text-gray-700 mb-4 font-semibold">Next Steps:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Pilot integrations with leading ELM/MDM platforms.</li>
          <li>Develop FedRAMP-certified version for government verticals.</li>
          <li>Launch AI training programs for legal/professional service firms.</li>
        </ul>
      </div>
    </div>
  );
};

export default MarketOpportunitySection; 