import React from 'react';
import Image from 'next/image';

const ProblemSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-meta/problem.jpg"
          alt="Frustrated user trying to work with Meta Glasses or Oculus"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-6">
        <div className="bg-gray-50 p-6 rounded-xl">
          <p className="text-2xl font-semibold text-black mb-2">"Show me Google Sheets" or "Show me articles I saved last week"</p>
          <p className="text-gray-600 italic">Simple, work-related voice commands that Meta Glasses and Oculus can't handle</p>
        </div>
        <p className="text-xl text-gray-600">
          Meta Glasses and Oculus represent the cutting edge of immersive technology, but when it comes to getting real work done, they fall short. It's difficult—if not impossible—to quickly access the internet, productivity apps, or saved information. The most common things we do for work, like looking up information or opening documents, are not easily supported in these environments.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 mt-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Current Limitations</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>No easy way to access the internet or productivity apps (e.g., Google Sheets, Docs) via voice or gesture</li>
            <li>Cannot retrieve or display saved articles, documents, or resources with simple commands</li>
            <li>Voice commands for common work tasks are not supported</li>
            <li>Switching between applications is cumbersome and unintuitive</li>
            <li>Immersive devices are not yet practical for everyday productivity needs</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProblemSection; 