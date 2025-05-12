import React from 'react';
import Image from 'next/image';

const VisionBeyondSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-google/vision-beyond.jpg"
          alt="Future vision of Google's AI-powered search"
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-6">
        <p className="text-xl text-gray-600">
          Our vision extends far beyond the current capabilities of search. We're building the foundation for a future where 
          information discovery is not just about finding answers, but about understanding and creating knowledge.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">The Future of Knowledge</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>AI-powered knowledge synthesis across domains</li>
            <li>Real-time information processing and understanding</li>
            <li>Personalized learning and discovery paths</li>
            <li>Seamless integration of human and machine intelligence</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Beyond Search</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Creating new knowledge through AI synthesis</li>
            <li>Enabling collaborative intelligence at scale</li>
            <li>Transforming how we learn and discover</li>
            <li>Building the foundation for artificial general intelligence</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 bg-black text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">The Path Forward</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-semibold mb-2">Knowledge Creation</h4>
            <p className="text-gray-300">
              Moving beyond information retrieval to active knowledge creation and synthesis, enabling new forms of understanding and discovery.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Intelligent Collaboration</h4>
            <p className="text-gray-300">
              Creating systems that enable seamless collaboration between humans and AI, combining the best of both worlds.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Future-Ready</h4>
            <p className="text-gray-300">
              Building the foundation for a future where AI and human intelligence work together to solve the world's most complex problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionBeyondSection; 