import React from 'react';
import Image from 'next/image';

const PatentBreakdownSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="w-full max-w-4xl mx-auto mb-8">
        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#000B1E]">
          <Image
            src="/images-apple/patent-breakdown.jpg"
            alt="Patent-Driven Command-GUI System"
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
          Our <span className='font-semibold text-black'>2 patents</span> create a direct link between natural actions and graphical user interfaces. Whether through voice or gesture, each command instantly transforms your view—like pulling up saved articles—making information access effortless and ergonomic.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Command-Graphical User Interface Relationship</h3>
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-black">Flexible Command Input</h4>
            <p className="text-gray-600">
              Our system accepts commands in many ways:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Voice ("Show me saved articles")</li>
              <li>Keystrokes (shortcuts)</li>
              <li>Gestures (trackpad/touch)</li>
              <li>Combined (voice + gesture)</li>
            </ul>
          </div>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-black">Graphical User Interface Response</h4>
          <p className="text-gray-600">
            Each command triggers an appropriate Graphical User Interface change:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Show content (requested articles)</li>
            <li>Adjust layout (by relevance)</li>
            <li>Interactive controls (navigation)</li>
            <li>Context info (related suggestions)</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 bg-black text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">Beyond Browsing: AR/VR Applications</h3>
        <div className="space-y-4">
          <p className="text-gray-300">
            The command-Graphical User Interface relationship extends naturally into augmented and virtual reality environments, 
            creating immersive 3D browsing and information management experiences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div>
              <h4 className="text-xl font-semibold mb-2">AR Applications</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Voice-controlled AR displays</li>
                <li>Gesture controls for manipulating 3D content</li>
                <li>Context-aware information overlays</li>
                <li>Seamless transition between 2D and 3D views</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">VR Applications</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Immersive 3D browsing environments</li>
                <li>Natural gesture-based navigation</li>
                <li>Virtual workspaces for content organization</li>
                <li>Multi-user collaborative spaces</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatentBreakdownSection; 