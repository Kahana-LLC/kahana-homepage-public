import React from 'react';
import Image from 'next/image';

const BigChangeSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-apple/big-change.jpg"
          alt="AI and technology transformation visualization"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-6">
        <p className="text-xl text-gray-600">
          The way people interact with technology is undergoing a fundamental transformation. 
          Users are increasingly relying on AI assistants and natural language interfaces for 
          their daily tasks, from simple web searches to complex problem-solving. This shift 
          represents a new era in human-computer interaction.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">The AI Revolution</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>
              <a href="https://www.invoca.com/blog/voice-search-stats-marketers" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">65% of 25-49-year-olds</a> use voice search daily; <a href="https://www.linkedin.com/pulse/rise-voice-gesture-control-app-design-2025-beyond-moobila-dfdhf" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">gesture interfaces</a> reduce touch by 40% in enterprise apps.
            </li>
            <li>
              <a href="https://www.macrumors.com/2024/06/10/apple-intelligence-survey/" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">70% of iPhone users</a> are willing to pay more for Apple Intelligence features.
            </li>
            <li>
              <a href="https://www.macrumors.com/2024/06/10/apple-intelligence-survey/" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">45% of consumers</a> would switch to iPhone for Apple Intelligence, driving significant market share growth.
            </li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">What people expect now</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Information retrieval through natural conversation</li>
            <li>Task automation using voice commands</li>
            <li>Personalized recommendations and assistance</li>
            <li>Seamless cross-device experiences</li>
            <li>Reduced need for traditional navigation and menus</li>
            <li>Advanced AI features that justify premium pricing</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 bg-black text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">Why This Matters</h3>
        <p className="text-gray-300">
          This shift represents more than just a change in interface design - it's a fundamental 
          transformation in how humans interact with technology. As users increasingly rely on 
          AI and natural language interfaces for their daily tasks, the companies that can 
          provide the most intuitive, powerful, and seamless experiences will define the next 
          era of computing. The strong consumer willingness to pay for AI features and the potential 
          for significant market share growth through Apple Intelligence adoption underscores the 
          strategic importance of this transformation for Apple's future success.
        </p>
      </div>
    </div>
  );
};

export default BigChangeSection; 