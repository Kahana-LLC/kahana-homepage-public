import React from 'react';
import Image from 'next/image';

const PromisedLandSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-google/promised-land.jpg"
          alt="Future vision of Google's integrated knowledge management ecosystem"
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-6">
        <p className="text-xl text-gray-600">
          Google's ecosystem transforms into a seamless knowledge management platform where your information 
          becomes an extension of your thoughts and actions. Whether you're coding while walking in the park, 
          analyzing market trends during your commute, or collaborating on a project from anywhere, your 
          knowledge and tools are always at your fingertips, ready to help you create and accomplish.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Active Knowledge Creation</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Build software applications through natural conversation with Gemini</li>
            <li>Create and edit documents using voice commands and gestures</li>
            <li>Analyze data and generate insights while on the move</li>
            <li>Collaborate in real-time across any device or location</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Seamless Work Environment</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Your workspace follows you across devices and contexts</li>
            <li>Information and tools adapt to your current activity</li>
            <li>Natural interaction through voice, text, or gestures</li>
            <li>Context-aware assistance that understands your workflow</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 bg-black text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">The Future of Work</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-semibold mb-2">Beyond Information Access</h4>
            <p className="text-gray-300">
              Move from passive information consumption to active knowledge creation. Your Pixel becomes a 
              powerful workstation, Chrome transforms into a dynamic workspace, and Gemini evolves into your 
              intelligent collaborator.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Integrated Ecosystem</h4>
            <p className="text-gray-300">
              A unified environment where Google's products work together seamlessly. Your knowledge, tools, 
              and workspace flow naturally between devices, adapting to your needs and context.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Natural Interaction</h4>
            <p className="text-gray-300">
              Interact with your digital workspace as naturally as you would with a physical one. Use voice 
              commands to write code, gestures to organize information, or conversation to analyze data—all 
              while maintaining the context of your work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromisedLandSection; 