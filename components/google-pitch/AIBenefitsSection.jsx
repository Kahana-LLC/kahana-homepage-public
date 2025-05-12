import React from 'react';
import Image from 'next/image';

const AIBenefitsSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="w-full max-w-4xl mx-auto mb-8">
        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#000B1E]">
          <Image
            src="/images-google/ai-benefits.jpg"
            alt="AI-powered search commands controlling multiple devices"
            fill
            quality={100}
            priority
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-black mb-4">New Commands with Google Intelligence</h3>
        <p className="text-gray-600 mb-4">
          By integrating our technology into Google's search platform, the following types of commands will now be possible:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>"Find and summarize all research papers I saved about quantum computing last month"</li>
          <li>"Show me the key points from that article about AI ethics I bookmarked"</li>
          <li>"Organize my saved content by topic and create a summary of each category"</li>
          <li>"Find similar articles to what I was reading yesterday"</li>
          <li>"Create a timeline of developments in machine learning based on my saved articles"</li>
        </ul>
      </div>

      <div className="mt-12 bg-black text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">Key Benefits</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-semibold mb-2">Enhanced Search Experience</h4>
            <p className="text-gray-300">
              Transform search from a keyword-based experience to an intelligent interaction where information finds you based on your interests and needs.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Increased Knowledge Discovery</h4>
            <p className="text-gray-300">
              Drive deeper engagement with information by making knowledge discovery and interaction more natural and intuitive through AI-powered features.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Competitive Advantage</h4>
            <p className="text-gray-300">
              Position Google as the leader in AI-powered search, setting new standards for how people discover and interact with information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIBenefitsSection; 