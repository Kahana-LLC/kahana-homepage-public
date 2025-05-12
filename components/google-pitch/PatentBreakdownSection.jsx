import React from 'react';
import Image from 'next/image';

const PatentBreakdownSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-google/patent-breakdown.jpg"
          alt="Google's AI search patent landscape"
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-6">
        <p className="text-xl text-gray-600">
          Our patent portfolio demonstrates Google's leadership in AI-powered search technology, with key innovations in natural language processing, 
          context understanding, and intelligent information delivery.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Core Technologies</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Advanced natural language understanding</li>
            <li>Context-aware search algorithms</li>
            <li>Multi-modal information processing</li>
            <li>Personalized knowledge delivery</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Key Innovations</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Real-time information synthesis</li>
            <li>Cross-domain knowledge integration</li>
            <li>Intelligent content organization</li>
            <li>Adaptive learning systems</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 bg-black text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">Patent Highlights</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-semibold mb-2">Natural Language Processing</h4>
            <p className="text-gray-300">
              Patented algorithms for understanding complex queries and context, enabling more natural and intuitive search interactions.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Knowledge Synthesis</h4>
            <p className="text-gray-300">
              Innovative methods for combining information from multiple sources to create comprehensive, context-aware responses.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Personalization Engine</h4>
            <p className="text-gray-300">
              Advanced systems for learning user preferences and delivering tailored information based on individual needs and context.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatentBreakdownSection; 