import React from 'react';
import Image from 'next/image';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const revenueData = [
  { period: 'Q2 2025', revenue: 120 }, // 20 clients, $120k
  { period: 'Q3 2025', revenue: 180 },
  { period: 'Q4 2025', revenue: 300 },
  { period: '2026', revenue: 600 },
];

const TechnicalRoadmapSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-apple/technical-roadmap.jpg"
          alt="Implementation timeline and roadmap"
          fill
          className="object-contain bg-[#001B41]"
          priority
        />
      </div>
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800">Implementation Timeline</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Pre-Launch Phase */}
          <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 flex flex-col h-full">
            <h4 className="text-xl font-bold text-blue-900 mb-2">Pre-Launch Phase<br /><span className='font-normal text-gray-700'>(Current)</span></h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Complete development of core "find" functionality</li>
              <li>Secure 20 early adopter clients</li>
              <li>Develop implementation templates and support materials</li>
              <li>Create customer success metrics framework</li>
              <li>Prepare for website launch and broader market entry</li>
            </ul>
          </div>
          {/* Phase 3 Closed Beta */}
          <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 flex flex-col h-full">
            <h4 className="text-xl font-bold text-blue-900 mb-2">Phase 3 Closed Beta<br /><span className='font-normal text-gray-700'>(Q3 2025)</span></h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Deploy to early adopter clients</li>
              <li>Collect performance data and user feedback</li>
              <li>Refine core functionality based on real-world usage</li>
              <li>Develop case studies and success metrics</li>
              <li>Prepare for general availability release</li>
            </ul>
          </div>
          {/* Post-Beta Expansion */}
          <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 flex flex-col h-full">
            <h4 className="text-xl font-bold text-blue-900 mb-2">Post-Beta Expansion<br /><span className='font-normal text-gray-700'>(Q4 2025 - 2026)</span></h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Full market launch</li>
              <li>Expansion of target customer base</li>
              <li>Development of additional functionality informed by beta feedback</li>
              <li>Scaling of support and implementation capabilities</li>
              <li>Potential market segment expansion based on early adoption patterns</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalRoadmapSection; 