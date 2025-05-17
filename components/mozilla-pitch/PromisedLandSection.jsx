import React from 'react';
import Image from 'next/image';

const PromisedLandSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="https://images.pexels.com/photos/417142/pexels-photo-417142.jpeg"
          alt="Nature river"
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-6">
        <p className="text-xl text-gray-600 mb-4">
          Unlock measurable gains in productivity and security with Oasis—an enterprise browser that feels native to your organization. Whether you use Chromium, WebKit, or Gecko, Oasis adapts to your environment, so teams don't have to change their behavior to enjoy the same powerful benefits.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b">Role</th>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b">Impact</th>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b">ROI</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b">Software/SRE Engineers</td>
                <td className="px-4 py-2 border-b">Reduce MTTR</td>
                <td className="px-4 py-2 border-b">$14,400/year per engineer</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Customer Support Agents</td>
                <td className="px-4 py-2 border-b">15% decrease in AHT</td>
                <td className="px-4 py-2 border-b">$2,150/year per agent</td>
              </tr>
              <tr>
                <td className="px-4 py-2">All time-critical functions</td>
                <td className="px-4 py-2">Transformed workflows</td>
                <td className="px-4 py-2">Immediate productivity gains</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-semibold text-black">The Smart Choice</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li><span className="font-semibold">90% COST REDUCTION</span> compared to Island Enterprise Browser</li>
          <li>Deploy in days, not months with streamlined implementation</li>
          <li>Focus on what matters without unnecessary complexity</li>
        </ul>
        <p className="text-xl font-bold text-black mt-4">Oasis Browser: The specialist alternative for time-critical work</p>
      </div>
    </div>
  );
};

export default PromisedLandSection; 