import React from 'react';
import Image from 'next/image';

const TechnicalRoadmapSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-google/technical-roadmap.jpg"
          alt="Technical roadmap for Google AI search implementation"
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-6">
        <p className="text-xl text-gray-600">
          Our implementation plan is designed to seamlessly integrate AI capabilities into Google's search infrastructure, 
          ensuring a smooth transition to the future of intelligent information discovery.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Phase 1: Foundation (Months 1-6)</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Integrate core AI models into search infrastructure</li>
            <li>Develop natural language understanding capabilities</li>
            <li>Implement basic context awareness</li>
            <li>Set up data processing pipelines</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Phase 2: Enhancement (Months 7-12)</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Add advanced personalization features</li>
            <li>Implement multi-modal search capabilities</li>
            <li>Develop intelligent content organization</li>
            <li>Enhance cross-platform integration</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Phase 3: Optimization (Months 13-18)</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Fine-tune AI models for accuracy</li>
            <li>Optimize performance and scalability</li>
            <li>Implement advanced security features</li>
            <li>Add enterprise-grade features</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Phase 4: Expansion (Months 19-24)</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Launch advanced AI features</li>
            <li>Expand to new markets and languages</li>
            <li>Integrate with additional Google services</li>
            <li>Develop new monetization opportunities</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TechnicalRoadmapSection; 