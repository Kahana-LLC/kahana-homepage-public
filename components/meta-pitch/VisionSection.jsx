import React from 'react';
import Image from 'next/image';

const VisionSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="w-full max-w-4xl mx-auto mb-8">
        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#000B1E]">
          <Image
            src="/images-apple/vision.jpg"
            alt="Meta's Vision for the Future of Work"
            fill
            quality={100}
            priority
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex flex-col items-center gap-6">
          <p className="text-xl text-gray-600">
            Meta's vision extends beyond today's devices. We're building a future where the metaverse becomes the ultimate workspace, powered by AI and protected by our innovative patents.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-black text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">Welcome to the Office of Your Imagination</h3>
        <div className="space-y-4">
          <p className="text-gray-300">
            The metaverse isn't just a new place to work—it's the best place to work. Our patented command-GUI system transforms Meta's ecosystem into an infinite canvas for deep work and collaboration, where your workspace is limited only by your imagination.
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
          <div className="mt-8 p-6 bg-white/10 rounded-xl">
            <h4 className="text-xl font-semibold mb-4">The Future of Work is Untethered</h4>
            <p className="text-gray-300">
              With Meta's ecosystem and our patented technology, your workspace is no longer bound by physical constraints. Create the perfect environment for any task—whether it's a serene mountain retreat for deep focus, a dynamic war room for team collaboration, or a custom space that perfectly matches your workflow. The metaverse becomes your ultimate productivity platform, where work feels less like work and more like creating in a space of pure possibility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionSection; 