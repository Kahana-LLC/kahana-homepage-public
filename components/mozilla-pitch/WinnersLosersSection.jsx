import React from 'react';
import Image from 'next/image';

const WinnersLosersSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="https://images.pexels.com/photos/349758/pexels-photo-349758.jpeg?auto=compress&fit=crop&w=1200&q=80"
          alt="Nature mountain"
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-6">
        <p className="text-xl text-gray-600">
          The enterprise browser market is rapidly evolving, with newcomers and incumbents racing to deliver the features organizations need most. Here's how the competition stacks up.
        </p>
      </div>

      {/* Competitive Feature Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg border-collapse">
          <thead>
            <tr>
              <th className="px-2 py-1 text-left text-gray-700 font-semibold border-b">Browser</th>
              <th className="px-2 py-1 text-center text-gray-700 font-semibold border-b">Productivity</th>
              <th className="px-2 py-1 text-center text-gray-700 font-semibold border-b">Security</th>
              <th className="px-2 py-1 text-center text-gray-700 font-semibold border-b">AI</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-2 py-1 border-b font-semibold">Oasis</td>
              <td className="px-2 py-1 border-b text-center">✔️</td>
              <td className="px-2 py-1 border-b text-center">✔️</td>
              <td className="px-2 py-1 border-b text-center">✔️</td>
            </tr>
            <tr>
              <td className="px-2 py-1 border-b font-semibold">Chrome Enterprise</td>
              <td className="px-2 py-1 border-b text-center">✔️</td>
              <td className="px-2 py-1 border-b text-center">✔️</td>
              <td className="px-2 py-1 border-b text-center">✔️</td>
            </tr>
            <tr>
              <td className="px-2 py-1 border-b font-semibold">Edge for Business</td>
              <td className="px-2 py-1 border-b text-center">✔️</td>
              <td className="px-2 py-1 border-b text-center">✔️</td>
              <td className="px-2 py-1 border-b text-center">✔️</td>
            </tr>
            <tr>
              <td className="px-2 py-1 border-b font-semibold">Island</td>
              <td className="px-2 py-1 border-b text-center">✔️</td>
              <td className="px-2 py-1 border-b text-center">✔️</td>
              <td className="px-2 py-1 border-b text-center">✔️</td>
            </tr>
            <tr>
              <td className="px-2 py-1 border-b font-semibold">Talon</td>
              <td className="px-2 py-1 border-b text-center">✔️</td>
              <td className="px-2 py-1 border-b text-center">✔️</td>
              <td className="px-2 py-1 border-b text-center">Limited</td>
            </tr>
            <tr>
              <td className="px-2 py-1 border-b font-semibold">Citrix Enterprise Browser</td>
              <td className="px-2 py-1 border-b text-center">✔️</td>
              <td className="px-2 py-1 border-b text-center">✔️</td>
              <td className="px-2 py-1 border-b text-center">❌</td>
            </tr>
            <tr>
              <td className="px-2 py-1 border-b font-semibold">Seraphic</td>
              <td className="px-2 py-1 border-b text-center">Limited</td>
              <td className="px-2 py-1 border-b text-center">✔️</td>
              <td className="px-2 py-1 border-b text-center">❌</td>
            </tr>
            <tr>
              <td className="px-2 py-1 border-b font-semibold">Perception Point</td>
              <td className="px-2 py-1 border-b text-center">Limited</td>
              <td className="px-2 py-1 border-b text-center">✔️</td>
              <td className="px-2 py-1 border-b text-center">❌</td>
            </tr>
            <tr>
              <td className="px-2 py-1 border-b font-semibold">LayerX Security</td>
              <td className="px-2 py-1 border-b text-center">Limited</td>
              <td className="px-2 py-1 border-b text-center">✔️</td>
              <td className="px-2 py-1 border-b text-center">❌</td>
            </tr>
            <tr>
              <td className="px-2 py-1 border-b font-semibold">Here.io</td>
              <td className="px-2 py-1 border-b text-center">Limited</td>
              <td className="px-2 py-1 border-b text-center">Limited</td>
              <td className="px-2 py-1 border-b text-center">❌</td>
            </tr>
            <tr>
              <td className="px-2 py-1 border-b font-semibold">Palo Alto Prisma Access Browser</td>
              <td className="px-2 py-1 border-b text-center">Limited</td>
              <td className="px-2 py-1 border-b text-center">✔️</td>
              <td className="px-2 py-1 border-b text-center">❌</td>
            </tr>
            <tr>
              <td className="px-2 py-1 border-b font-semibold">Surfe Security</td>
              <td className="px-2 py-1 border-b text-center">Limited</td>
              <td className="px-2 py-1 border-b text-center">✔️</td>
              <td className="px-2 py-1 border-b text-center">❌</td>
            </tr>
            <tr>
              <td className="px-2 py-1 border-b font-semibold">Mozilla</td>
              <td className="px-2 py-1 border-b text-center">❌</td>
              <td className="px-2 py-1 border-b text-center">❌</td>
              <td className="px-2 py-1 border-b text-center">❌</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Competitive Analysis */}
      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-semibold text-black">Competitive Analysis</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li><span className="font-semibold">Island</span> leads with a full suite of productivity, security, and AI features—but at a high cost and with complex onboarding.</li>
          <li><span className="font-semibold">Talon</span> offers strong security and productivity, but lacks advanced AI capabilities for time-critical work.</li>
          <li><span className="font-semibold">Citrix Enterprise Browser</span> and <span className="font-semibold">Seraphic</span> focus on security, with some productivity features, but lack advanced AI.</li>
          <li><span className="font-semibold">Perception Point</span>, <span className="font-semibold">LayerX Security</span>, <span className="font-semibold">Here.io</span>, <span className="font-semibold">Palo Alto Prisma Access Browser</span>, and <span className="font-semibold">Surfe Security</span> provide strong security, but are limited in productivity and lack AI features.</li>
          <li><span className="font-semibold">Chrome Enterprise</span> and <span className="font-semibold">Edge for Business</span> offer strong productivity and security, but their AI capabilities are limited and not purpose-built for time-critical work.</li>
          <li><span className="font-semibold">Mozilla</span> lags behind, lacking advanced features in all three pillars—leaving organizations exposed and less productive.</li>
          <li><span className="font-semibold">Oasis</span> delivers all three pillars—Productivity, Security, and AI—at a fraction of the cost, with rapid deployment and a tailored experience for enterprise needs.</li>
        </ul>
      </div>

      <div className="mt-8 p-6 bg-gray-100 rounded-xl border border-gray-200">
        <h4 className="text-xl font-semibold text-black mb-2">What Other Browsers Still Lack</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Truly seamless, context-aware workflows for time-critical roles</li>
          <li>Unified, AI-powered search and command capabilities</li>
          <li>Rapid, low-friction deployment and onboarding</li>
          <li>Cost-effective, specialist focus for high-impact teams</li>
        </ul>
      </div>
    </div>
  );
};

export default WinnersLosersSection; 