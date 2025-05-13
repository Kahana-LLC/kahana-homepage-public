import React from 'react';
import Image from 'next/image';

const SolutionSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-microsoft/solution.jpg"
          alt="Seamless integration of AI with Microsoft Office showing AI-powered content discovery"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-6">
        <p className="text-xl text-gray-600">
          Our solution elevates Microsoft's ecosystem, making it more productive for users. With enhanced AI capabilities, you can instantly find and act on any information you've saved through natural conversation. Enjoy an intelligent work environment that surrounds and understands your needs, while AI acts as your personal assistant, making information retrieval effortless across all your Microsoft tools—no manual searching required.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">The Experience</h3>
          <p className="text-gray-600">
            Ask for anything—<span className="font-semibold">"Show me all the financial reports and presentations about Q2 performance I worked on last month"</span>—and see them appear, organized by relevance. Need to find that spreadsheet about quarterly projections? Just say it, and it's there. Organize, sort, and interact with your digital workspace using only your voice and simple commands—no clicks, no manual searching, no distractions.
          </p>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">The Response</h3>
          <p className="text-gray-600">
            When you make a request, the AI can speak back or display the information visually. The system intelligently chooses the best format based on your context. For documents and spreadsheets, it displays the actual content; for quick queries, it responds instantly—always hands-free.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-black text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">Key Components</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-semibold mb-2">AI Enhancement</h4>
            <p className="text-gray-300">
              Enable AI to understand complex queries relating to your Office usage, letting you instantly find and act on your documents, spreadsheets, and presentations through natural conversation.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Windows Search Integration</h4>
            <p className="text-gray-300">
              Make all saved content—Office documents, emails, and more—fully searchable and accessible through AI, creating a unified, touch-free information retrieval system.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Office Transformation</h4>
            <p className="text-gray-300">
              Transform Office into a smart content management system that organizes and indexes everything you save, making it instantly retrievable through voice and natural language.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionSection; 