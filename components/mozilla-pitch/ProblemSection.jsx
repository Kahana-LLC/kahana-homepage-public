import React from 'react';
import Image from 'next/image';

const ProblemSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg"
          alt="Nature forest"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-6">
        <p className="text-xl text-gray-600">
          When it comes to browsing, end users struggle with both security and productivity. It's a huge mess—tabs cause crashing, slowing down, cybersecurity vulnerabilities, and data leaks.
        </p>
      </div>

      {/* Problem Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {/* Security Problem */}
        <div className="space-y-4 p-6 bg-red-50 rounded-xl border border-red-200">
          <h3 className="text-2xl font-semibold text-red-700 flex items-center gap-2">
            <svg className="w-6 h-6 text-red-600 inline-block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            Security
          </h3>
          <p className="text-black">
            Google Chrome lacks advanced enterprise-grade security controls, making it vulnerable to social engineering, ransomware, and data leaks in high-stakes environments.
          </p>
        </div>
        {/* Productivity Problem */}
        <div className="space-y-4 p-6 bg-red-50 rounded-xl border border-red-200">
          <h3 className="text-2xl font-semibold text-red-700 flex items-center gap-2">
            <svg className="w-6 h-6 text-red-600 inline-block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            Productivity
          </h3>
          <p className="text-black">
            Tab overload, lack of hub-based organization, and poor context management lead to lost information, constant context switching, and wasted time for enterprise users in Chrome.
          </p>
        </div>
        {/* AI Problem */}
        <div className="space-y-4 p-6 bg-red-50 rounded-xl border border-red-200">
          <h3 className="text-2xl font-semibold text-red-700 flex items-center gap-2">
            <svg className="w-6 h-6 text-red-600 inline-block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            AI
          </h3>
          <p className="text-black">
            Chrome lacks an AI assistant that can search through and understand your saved tabs and groups. It doesn't contextually organize or retrieve your personal information, making it impossible to instantly find what matters most or automate workflows based on your unique browsing context.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProblemSection; 
