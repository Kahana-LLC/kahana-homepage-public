import React from 'react';
import Image from 'next/image';

const ProblemSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-apple/problem.jpg"
          alt="Frustrated user with Microsoft Copilot showing error message"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-6">
        <div className="bg-gray-50 p-6 rounded-xl">
          <p className="text-2xl font-semibold text-black mb-2">"Show me the Q2 sales report from my saved Excel files and summarize the key trends for my team meeting"</p>
          <p className="text-gray-600 italic">A simple request that current Microsoft interfaces can't handle</p>
        </div>
        <p className="text-xl text-gray-600">
          While Microsoft has been a leader in productivity software, its current interfaces have fallen behind in the AI era. Microsoft 365 and Copilot lack the sophisticated natural language capabilities that users increasingly expect, leading to frustration and reduced engagement with Microsoft's ecosystem.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 mt-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Current Limitations</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Poor integration between Copilot and saved documents across Microsoft 365</li>
            <li>Microsoft 365 lacks built-in AI assistance for content discovery</li>
            <li>Cannot process natural language queries effectively</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProblemSection; 