import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, AreaChart, Area, Legend } from 'recharts';

const pieData = [
  { name: 'Time in Browsers', value: 75 },
  { name: 'Other Activities', value: 25 },
];
const COLORS = ['#2563eb', '#d1d5db'];

const barData = [
  { year: '2023', percent: 9 },
  { year: '2026', percent: 25 },
];

const areaData = [
  { year: 2023, browser: 10, traditional: 90 },
  { year: 2024, browser: 15, traditional: 85 },
  { year: 2025, browser: 18, traditional: 82 },
  { year: 2026, browser: 25, traditional: 75 },
  { year: 2027, browser: 51, traditional: 49 },
];

const BigChangeSection = () => {
  return (
    <div className="max-w-4xl mx-auto py-6">
      <p className="text-xl text-gray-600">
        The modern workplace has undergone a profound transformation, with browsers becoming the primary workspace for most employees. According to <a href="https://services.google.com/fh/files/misc/cloud_workers_are_key_to_disruption_preparedness_forrester.pdf" target="_blank" rel="noopener noreferrer" className="underline text-blue-700 hover:text-blue-900">Forrester research</a>, employees now spend over 75% of their workday inside web browsers. This shift has made the browser "the heart of how we work," as noted in recent <a href="https://cloud.google.com/blog/products/chrome-enterprise/chrome-is-helping-it-teams-support-cloud-first-workforce" target="_blank" rel="noopener noreferrer" className="underline text-blue-700 hover:text-blue-900">Google Cloud publications</a>.
      </p>
      <p className="text-lg text-gray-500 mt-4">
        This evolution has driven remarkable growth in the enterprise browser market. <a href="https://www.gartner.com/doc/reprints?id=1-2DJMI9M4&ct=230508&st=sb" target="_blank" rel="noopener noreferrer" className="underline text-blue-700 hover:text-blue-900">Gartner's analysis</a> predicts that by 2026, 25% of enterprises will use managed browsers or extensions, up from less than 10% today. Even more striking, enterprise browsers are projected to become the core platform for delivering workforce productivity and security software by 2027.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
        {/* Pie Chart */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Workday in Browsers</h4>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60} label>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        {/* Bar Chart */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Managed Browser Adoption</h4>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={barData}>
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="percent" fill="#2563eb" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        {/* Area Chart */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Enterprise Software Delivery</h4>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={areaData}>
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="browser" stackId="1" stroke="#2563eb" fill="#2563eb" name="Browser-based" />
              <Area type="monotone" dataKey="traditional" stackId="1" stroke="#d1d5db" fill="#d1d5db" name="Traditional" />
              <Legend />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default BigChangeSection; 