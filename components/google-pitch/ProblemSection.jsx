import React from 'react';
import Image from 'next/image';

const ProblemSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-google/problem.jpg"
          alt="Frustrated user trying to find saved articles across Google's ecosystem"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-6">
        <div className="bg-gray-50 p-6 rounded-xl">
          <p className="text-2xl font-semibold text-black mb-2">"Show me the NVIDIA investment articles I saved in a group last week in Chrome"</p>
          <p className="text-gray-600 italic">A simple request that Google's current ecosystem can't handle effectively</p>
        </div>
        <p className="text-xl text-gray-600">
          While Google has powerful tools like Chrome, Pixel, Chromebooks, and Gemini, they don't work together seamlessly 
          across their devices, leading to lost productivity and frustration when trying to access their 
          saved research, articles, and documents.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 mt-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Current Limitations</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Chrome bookmarks and reading lists are disconnected from Gemini's capabilities</li>
            <li>No intelligent grouping or organization of saved content across devices</li>
            <li>Cannot easily find or summarize saved articles and research</li>
            <li>Manual organization required for content saved across different devices</li>
            <li>Missed opportunity to leverage Gemini's AI for content management</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProblemSection; 