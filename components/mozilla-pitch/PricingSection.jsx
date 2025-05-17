import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const revenueData = [
  { period: 'Q2 2025', revenue: 120 }, // 20 clients, $120k
  { period: 'Q3 2025', revenue: 180 },
  { period: 'Q4 2025', revenue: 300 },
  { period: '2026', revenue: 600 },
];

const PricingSection = () => {
  return (
    <div className="space-y-8">
      {/* Existing pricing content */}
      // ... existing code ...

      {/* Revenue Scaling Chart */}
      <div className="mt-12">
        <h4 className="text-xl font-semibold text-gray-800 mb-4">Revenue Scaling Over Time</h4>
        <div className="w-full h-80 bg-white rounded-xl border border-gray-200 p-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={revenueData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <XAxis dataKey="period" />
              <YAxis label={{ value: 'Revenue ($K)', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#2563eb" name="Revenue" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-xs text-gray-500 mt-2">Initial 20 clients represent ~$120,000 in revenue. Chart shows projected scaling through 2026.</p>
      </div>
    </div>
  );
};

export default PricingSection; 