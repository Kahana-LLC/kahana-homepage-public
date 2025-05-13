import React from 'react';
import Image from 'next/image';

const SolutionSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-meta/solution.jpg"
          alt="Meta's AI solution for work productivity"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-6">
        <p className="text-xl text-gray-600">
          Our solution puts AI at the heart of Meta's ecosystem, transforming Meta Glasses and Oculus into powerful tools for productivity and work. With advanced AI integration, you can instantly access the internet, open browsers, search for information, and retrieve documents or articles—all through natural language commands. Meta's devices become intelligent workspaces that understand your needs, making information retrieval and multitasking effortless—no keyboard, no mouse, no distractions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">The Experience</h3>
          <p className="text-gray-600">
            Ask for anything—<span className="font-semibold">"Show me all the articles and AI searches about NVIDIA investments I saved last week"</span> or <span className="font-semibold">"Open Google Sheets and summarize my latest spreadsheet"</span>—and see them appear, organized by relevance. Need to find a document or launch a web search? Just say it, and it's there. Organize, search, and interact with your digital world using only your voice and simple gestures—no screens, no typing, no barriers.
          </p>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">The Response</h3>
          <p className="text-gray-600">
            When you make a request, Meta's AI can speak back or display the information visually in your field of view. The system intelligently chooses the best format based on your context. For articles and web content, it displays the actual content; for quick queries, it responds instantly—always hands-free and always focused on productivity.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-black text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">Key Components</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-semibold mb-2">AI Productivity Assistant</h4>
            <p className="text-gray-300">
              Enable Meta's AI to understand complex, work-related queries—instantly finding and acting on your browsing history, saved articles, documents, and online resources through natural conversation.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Unified Search & App Access</h4>
            <p className="text-gray-300">
              Make all your saved content, browser tabs, and productivity apps fully searchable and accessible through voice, creating a unified, touch-free information retrieval and workflow system.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Device Transformation</h4>
            <p className="text-gray-300">
              Transform Meta Glasses and Oculus into smart productivity hubs that organize and index everything you need for work, making it instantly retrievable and actionable through natural language and AI-powered recommendations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionSection; 