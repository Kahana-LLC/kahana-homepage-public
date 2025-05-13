import React from 'react';
import Image from 'next/image';

const AIBenefitsSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="w-full max-w-4xl mx-auto mb-8">
        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#000B1E]">
          <Image
            src="/images-apple/ai-benefits.jpg"
            alt="AI-powered voice commands controlling multiple devices"
            fill
            quality={100}
            priority
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-black mb-4">New Commands with Meta AI</h3>
        <p className="text-gray-600 mb-4">
          By integrating our technology into Meta's ecosystem, the following types of commands will now be possible in the metaverse:
        </p>
        <ul className="list-decimal list-inside space-y-2 text-gray-600 mb-6">
          <li>"Show me the research paper about neural networks I saved in my Meta workspace"</li>
          <li>"Create a new virtual workspace called 'Project Phoenix' with all my saved design files"</li>
          <li>"Group my saved 3D models from the last month by project"</li>
          <li>"Continue reviewing the holographic presentation I was working on in my Meta Glasses"</li>
          <li>"When I enter the metaverse, show me my team's collaborative workspace"</li>
          <li>"Save this holographic model to my shared workspace for team review"</li>
          <li>"Send my meeting notes to my Meta Glasses for my upcoming presentation"</li>
          <li>"Summarize this research paper and display the key points in my virtual workspace"</li>
          <li>"Open my most recent collaborative workspace on my Oculus"</li>
          <li>"Remind me about this design when I'm working on the product launch"</li>
          <li>"Move all my open project files to a new virtual workspace"</li>
          <li>"Read me the updates from my team while I'm reviewing the 3D models"</li>
          <li>"Show me my AI analysis from yesterday about market trends"</li>
          <li>"Open my latest team collaboration session about the new feature"</li>
          <li>"Find my data visualization about user engagement metrics"</li>
          <li>"Show me my team's Figma designs in the virtual workspace"</li>
          <li>"Open my shared Google Sheets with the project timeline"</li>
          <li>"Display my team's Notion workspace in the metaverse"</li>
          <li>"Show me our recent AI research findings about user behavior"</li>
          <li>"Create a new virtual meeting room with all our project resources"</li>
        </ul>
        <div className="p-6 bg-gray-100 rounded-lg border border-gray-200">
          <p className="text-gray-600">
            These commands showcase how Meta AI integrates your work context to deliver exactly what you need in the metaverse—while maintaining privacy and enabling seamless collaboration across your team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIBenefitsSection; 