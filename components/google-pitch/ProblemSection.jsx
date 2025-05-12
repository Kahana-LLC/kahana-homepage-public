import React from 'react';
import Image from 'next/image';

const ProblemSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-google/problem.jpg"
          alt="Frustrated user with Google search showing error message"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-6">
        <div className="bg-gray-50 p-6 rounded-xl">
          <p className="text-2xl font-semibold text-black mb-2">"Find me that research paper about quantum computing I saved last month and summarize its key findings"</p>
          <p className="text-gray-600 italic">A simple request that current Google interfaces can't handle</p>
        </div>
        <p className="text-xl text-gray-600">
          While Google has been a leader in search technology, its current interfaces have fallen 
          behind in the AI era. Google Search lacks the sophisticated natural language capabilities 
          that users increasingly expect, leading to frustration and reduced engagement with Google's 
          ecosystem.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 mt-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Current Limitations</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Poor integration between saved content and search results</li>
            <li>Search lacks built-in AI assistance for content understanding</li>
            <li>Cannot process natural language queries effectively</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProblemSection; 