import React from 'react';
import Image from 'next/image';

const PromisedLandSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-meta/promised-land.jpg"
          alt="The future of work in the Metaverse"
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-6">
        <p className="text-xl text-gray-600">
          The future of work is being redefined in the Metaverse, where AI-powered tools and immersive environments create new possibilities for collaboration, productivity, and innovation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Command-Driven GUIs</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Summon work dashboards, project timelines, or research with a gesture or phrase</li>
            <li>Switch between productivity, gaming, and social apps instantly with voice or motion</li>
            <li>Manipulate data, documents, and creative tools in 3D space</li>
            <li>Personalize your workspace and information flow in real time</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Total User Control</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Context-aware commands adapt to your needs—at work, at play, or with friends</li>
            <li>Instantly pull up relevant GUIs for meetings, brainstorming, or gaming sessions</li>
            <li>Seamless transitions between solo focus and group collaboration</li>
            <li>Feel like an inventor: create, organize, and share with the power of your voice and hands</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 bg-black text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">The Command-GUI Revolution</h3>
        <p className="text-gray-300 mb-6">
          The Hephaestus Project unlocks a new era of metaverse interaction: a world where native commands and graphical user interface innovations put you at the center. Whether you're building the next big idea, gaming with friends, or collaborating across the globe, you have the power to summon, control, and create information as easily as Tony Stark with Jarvis. This is the future of work, play, and connection—fully realized in the metaverse.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-white">Work & Productivity</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Pull up analytics, documents, and creative tools with a gesture</li>
              <li>Organize and present information in 3D GUIs</li>
              <li>Collaborate in real time with immersive, interactive dashboards</li>
              <li>Automate repetitive tasks with custom voice commands</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-white">Gaming & Social</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Switch between games, chats, and social feeds instantly</li>
              <li>Customize your gaming HUD and social overlays with gestures</li>
              <li>Share experiences and content with friends in real time</li>
              <li>Feel empowered to create and connect in ways never before possible</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromisedLandSection; 