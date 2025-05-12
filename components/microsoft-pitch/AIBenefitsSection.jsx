import React from 'react';
import Image from 'next/image';

const AIBenefitsSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="w-full max-w-4xl mx-auto mb-8">
        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#000B1E]">
          <Image
            src="/images-microsoft/ai-benefits.jpg"
            alt="AI-powered enterprise commands and controls"
            fill
            quality={100}
            priority
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-black mb-4">New Commands with Microsoft Intelligence</h3>
        <p className="text-gray-600 mb-4">
          By integrating our technology into Microsoft's enterprise suite, the following types of commands will now be possible:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>"Analyze Q2 sales data and create a presentation highlighting key trends"</li>
          <li>"Schedule a meeting with the marketing team and prepare an agenda based on recent campaign performance"</li>
          <li>"Generate a report on customer feedback from the last month and identify areas for improvement"</li>
          <li>"Optimize the supply chain based on current inventory levels and forecasted demand"</li>
          <li>"Create a project timeline for the new product launch based on historical data"</li>
        </ul>
      </div>

      <div className="mt-12 bg-black text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">Key Benefits</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-semibold mb-2">Enhanced Productivity</h4>
            <p className="text-gray-300">
              Transform how teams work by automating routine tasks and providing intelligent assistance for complex operations.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Improved Decision Making</h4>
            <p className="text-gray-300">
              Drive better business outcomes with AI-powered insights and predictive analytics that support informed decision-making.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Competitive Advantage</h4>
            <p className="text-gray-300">
              Position your organization at the forefront of digital transformation with cutting-edge AI capabilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIBenefitsSection; 