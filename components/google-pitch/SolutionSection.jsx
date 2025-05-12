import React from 'react';
import Image from 'next/image';

const SolutionSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-google/solution.jpg"
          alt="Google AI Search Interface"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-6">
        <p className="text-xl text-gray-600">
          Our technology transforms Google Search into an intelligent knowledge assistant that understands context, 
          remembers your preferences, and delivers information in the most useful format for your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Natural Language Understanding</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Advanced AI models understand complex queries and context</li>
            <li>Remembers your search history and preferences</li>
            <li>Provides personalized, relevant results</li>
            <li>Understands and processes multi-step requests</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Intelligent Information Delivery</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Presents information in the most useful format</li>
            <li>Summarizes complex topics automatically</li>
            <li>Connects related information across sources</li>
            <li>Adapts to your learning style and preferences</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 bg-black text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-semibold mb-2">Contextual Understanding</h4>
            <p className="text-gray-300">
              Our AI understands the context of your queries, remembers your preferences, and delivers personalized results that match your needs.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Intelligent Organization</h4>
            <p className="text-gray-300">
              Information is automatically organized and presented in the most useful format, making it easier to understand and use.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Seamless Integration</h4>
            <p className="text-gray-300">
              Works seamlessly across all Google services, providing a unified experience for discovering and using information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionSection; 