import React from 'react';
import Image from 'next/image';

const SolutionSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-apple/solution.jpg"
          alt="Seamless integration of Siri with MacBook showing AI-powered content discovery"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-6">
        <p className="text-xl text-gray-600">
          Our solution puts Siri at the heart of Safari, elevating Apple's ecosystem and making it more useful for people. With enhanced Siri, you can instantly find and act on any information you've saved in Safari through natural conversation. Safari becomes an intelligent workspace that understands your needs, while Siri acts as your personal AI assistant, making information retrieval effortless across all your Apple devices—no touch required.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">The Experience</h3>
          <p className="text-gray-600">
            Ask for anything—<span className="font-semibold">"Show me all the articles about AI investments I saved last week"</span>—and see them appear, organized by relevance. Need to find that article about quantum computing? Just say it, and it's there. Organize, sort, and interact with your digital world using only your voice and simple gestures—no taps, no swipes, no distractions.
          </p>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">The Response</h3>
          <p className="text-gray-600">
            When you make a request, Siri can speak back or display the information visually. The system intelligently chooses the best format based on your context. For articles and web content, it displays the actual content; for quick queries, it responds instantly—always hands-free.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-black text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">Key Components</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-semibold mb-2">Siri Enhancement</h4>
            <p className="text-gray-300">
              Enable Siri to understand complex queries relating to your Safari usage, letting you instantly find and act on your browsing history, saved articles, and bookmarks through natural conversation.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Spotlight Integration</h4>
            <p className="text-gray-300">
              Make all saved content—Safari tabs, reading lists, and more—fully searchable and accessible through Siri, creating a unified, touch-free information retrieval system.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Safari Transformation</h4>
            <p className="text-gray-300">
              Transform Safari into a smart content management system that organizes and indexes everything you save, making it instantly retrievable through voice and gesture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionSection; 