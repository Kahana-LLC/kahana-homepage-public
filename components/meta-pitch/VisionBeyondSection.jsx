import React from 'react';
import Image from 'next/image';

const VisionBeyondSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="w-full max-w-4xl mx-auto mb-8">
        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#000B1E]">
          <Image
            src="/images-meta/vision-beyond.jpg"
            alt="Future vision of Meta's Metaverse workspace"
            fill
            quality={100}
            priority
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      <div className="space-y-6">
        <p className="text-xl text-gray-600">
          The Metaverse isn't just a new place to work—it's the best place to work. With our AI-powered ecosystem of AR/VR devices and touch-free commands, the Metaverse becomes your ultimate productivity platform, where your workspace is limited only by your imagination.
        </p>
        <p className="text-lg text-gray-500">
          Imagine putting on your Meta Glasses or Quest and instantly being transported to your dream workspace—whether it's a serene mountain retreat for deep focus, a dynamic war room for team collaboration, or a custom space that perfectly matches your workflow. The Metaverse crushes traditional work norms like using Zoom or going into the office, offering an infinite canvas for deep work and collaboration.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">The Ultimate Workspace</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Immersive focus environments that eliminate distractions</li>
            <li>AI-powered information organization at your command</li>
            <li>Seamless transitions between solo and collaborative modes</li>
            <li>Personalized workspaces that adapt to your workflow</li>
            <li>Real-time 3D collaboration with global teams</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Beyond Physical Limits</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>AR-augmented spaces that enhance productivity</li>
            <li>Voice and gesture controls for natural interaction</li>
            <li>Infinite screen real estate for multitasking</li>
            <li>Instant workspace customization for any task</li>
            <li>Seamless integration with all your tools and apps</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 bg-black text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">The Future of Work is Untethered</h3>
        <div className="space-y-4">
          <p className="text-gray-300">
            With Meta's ecosystem and our AI-powered technology, your workspace is no longer bound by physical constraints. Create the perfect environment for any task—whether it's a serene mountain retreat for deep focus, a dynamic war room for team collaboration, or a custom space that perfectly matches your workflow. The Metaverse becomes your ultimate productivity platform, where work feels less like work and more like creating in a space of pure possibility.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div>
              <h4 className="text-xl font-semibold mb-2">Deep Work in the Metaverse</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Immersive focus environments that eliminate distractions</li>
                <li>AI-powered information organization at your command</li>
                <li>Seamless transitions between solo and collaborative modes</li>
                <li>Personalized workspaces that adapt to your workflow</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Collaborative Innovation</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Real-time 3D collaboration with global teams</li>
                <li>Natural interaction through voice and gesture</li>
                <li>Shared virtual workspaces that scale infinitely</li>
                <li>AI-enhanced brainstorming and problem-solving</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-semibold text-black">Seamless Integration with Your Work Tools</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-black">Your Favorite Apps, Reimagined</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Microsoft Office suite in immersive 3D workspaces</li>
              <li>Google Workspace with spatial organization</li>
              <li>Full access to your work laptop and devices</li>
              <li>Seamless file sharing and collaboration</li>
              <li>Native integration with all your productivity tools</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-black">True Presence in Remote Work</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Feel like you're in the same room as your colleagues</li>
              <li>Natural body language and spatial audio</li>
              <li>Real-time collaboration on 3D models and documents</li>
              <li>Instant whiteboarding and brainstorming</li>
              <li>Breakout rooms that feel like physical spaces</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-gray-50 p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold text-black mb-4">Why the Metaverse Beats Traditional Remote Work</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="text-xl font-semibold text-black mb-2">Presence</h4>
            <p className="text-gray-600">
              Experience true presence with colleagues through spatial audio, natural body language, and shared virtual spaces that feel real.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-black mb-2">Productivity</h4>
            <p className="text-gray-600">
              Access all your work tools in an immersive environment designed for focus and collaboration, with infinite screen real estate.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-black mb-2">Possibility</h4>
            <p className="text-gray-600">
              Create the perfect workspace for any task, from intimate one-on-ones to large team meetings, all in a space of pure possibility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionBeyondSection; 