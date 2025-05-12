import React from 'react';
import Image from 'next/image';

const ProblemSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-microsoft/problem.jpg"
          alt="Enterprise software challenges"
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-6">
        <blockquote className="text-2xl text-gray-600 italic border-l-4 border-gray-300 pl-4">
          "The gap between enterprise software capabilities and business needs is widening. 
          Organizations need more than just automation—they need intelligent augmentation."
        </blockquote>
        <p className="text-xl text-gray-600">
          Today's enterprise software landscape faces critical challenges. Organizations struggle with disconnected systems, 
          inefficient workflows, and limited insights. The traditional approach to enterprise software—focused on automation 
          rather than augmentation—fails to meet the needs of modern businesses.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Current Limitations</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Disconnected systems and data silos</li>
            <li>Complex, non-intuitive interfaces</li>
            <li>Limited real-time insights and analytics</li>
            <li>Rigid, non-adaptive workflows</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Business Impact</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Decreased productivity and efficiency</li>
            <li>Higher operational costs</li>
            <li>Missed opportunities for innovation</li>
            <li>Reduced competitive advantage</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 bg-black text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">The Challenge</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-semibold mb-2">Integration Complexity</h4>
            <p className="text-gray-300">
              Organizations struggle with disconnected systems that don't communicate effectively, leading to data silos and inefficient workflows.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">User Experience</h4>
            <p className="text-gray-300">
              Complex interfaces and rigid workflows make it difficult for users to accomplish their tasks efficiently and effectively.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Intelligence Gap</h4>
            <p className="text-gray-300">
              Current solutions lack the intelligence needed to provide meaningful insights and adapt to changing business needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSection; 