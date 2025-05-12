import React from 'react';
import Image from 'next/image';

const TechnologySection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-64 w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg"
          alt="Business meeting and handshake"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-black">Technology & Innovation</h2>
        <p className="text-xl text-gray-600">
          Google Intelligence is not just about making search easier—it fundamentally elevates what users can accomplish with information. By deeply integrating advanced AI, Google search becomes a true knowledge engine, empowering people to discover, understand, and utilize information in ways never before possible.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">AI: From Simple Search to Knowledge Discovery</h3>
          <div className="mt-4 space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-black">Transformative AI Capabilities</h4>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                <li>Advanced natural language understanding for complex, contextual queries</li>
                <li>AI that helps users discover and understand information, not just find it</li>
                <li>Seamless integration across search and knowledge platforms</li>
                <li>Personalized, proactive assistance that adapts to your information needs</li>
                <li>Enables new ways to interact with and consume knowledge</li>
              </ul>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-black">Knowledge & Impact</h4>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                <li>Automates research, organization, and understanding of information</li>
                <li>Empowers users to focus on high-value, creative work</li>
                <li>Transforms Google search into a true knowledge powerhouse</li>
                <li>Fundamentally changes how people discover and use information</li>
              </ul>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-black">Raising the Ceiling</h4>
              <p className="text-gray-600">
                Google Intelligence is not just about making search easier—it's about unlocking the full potential of information discovery, enabling users to achieve more than ever before.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologySection; 