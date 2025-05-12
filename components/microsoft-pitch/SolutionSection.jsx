import React from 'react';
import Image from 'next/image';

const SolutionSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-microsoft/solution.jpg"
          alt="Microsoft AI-powered enterprise solutions"
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-6">
        <p className="text-xl text-gray-600">
          Our solution transforms enterprise software into an intelligent ecosystem that understands context, 
          anticipates needs, and delivers insights at the right moment. By combining AI with deep enterprise 
          expertise, we're creating a new paradigm for business operations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Intelligent Automation</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Context-aware process automation</li>
            <li>Smart workflow optimization</li>
            <li>Predictive task management</li>
            <li>Adaptive resource allocation</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Business Intelligence</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Real-time analytics and insights</li>
            <li>Predictive business modeling</li>
            <li>Automated reporting and visualization</li>
            <li>Intelligent decision support</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 bg-black text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-semibold mb-2">Enterprise Integration</h4>
            <p className="text-gray-300">
              Seamless integration with existing enterprise systems and workflows, ensuring a smooth transition to AI-powered operations.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Intelligent Insights</h4>
            <p className="text-gray-300">
              Advanced analytics and AI-driven insights that help organizations make better decisions and identify new opportunities.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Adaptive Learning</h4>
            <p className="text-gray-300">
              Systems that learn and adapt to organizational needs, continuously improving performance and delivering better results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionSection; 