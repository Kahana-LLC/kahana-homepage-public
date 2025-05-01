import React, { useState } from 'react';
import Image from 'next/image';

const PatentBreakdownSection = () => {
  const [showVideo, setShowVideo] = useState(false);

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
        <div className="flex flex-col items-center gap-6">
          <p className="text-xl text-gray-600">
            Our two approved patents cover how each command—whether through voice or gesture—instantly transforms the GUI you see, making information access effortless and ergonomic.
          </p>
          <button
            onClick={() => setShowVideo(true)}
            className="bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-colors flex items-center gap-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Watch 3-minute Demo
          </button>
        </div>
      </div>

      {/* Video Popup */}
      {showVideo && (
        <div 
          className="fixed inset-0 bg-black/80 z-[9] flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowVideo(false);
            }
          }}
        >
          <div className="w-full h-full max-w-4xl max-h-[80vh] mx-auto flex items-center">
            <div className="relative w-full h-0 pb-[56.25%] bg-black rounded-xl overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-black/50 to-transparent z-10 flex items-center justify-end px-4">
                <button
                  onClick={() => setShowVideo(false)}
                  className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
                >
                  <span className="text-sm font-medium">Close</span>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <iframe
                src="https://www.youtube.com/embed/bAA8-TTFsxc?autoplay=1"
                className="absolute top-0 left-0 w-full h-full"
                style={{ border: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Command-GUI Relationship Section */}
      <div className="space-y-8">
        <h3 className="text-3xl font-semibold text-black text-center">Command-GUI Relationship</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Left Column - Command Input */}
          <div className="p-6 bg-gray-50 rounded-lg border border-gray-100">
            <h4 className="text-xl font-semibold text-black mb-4">Command Input Examples</h4>
            <p className="text-gray-600 mb-4">
              Our patent covers commands through:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Voice ("Show me saved articles")</li>
              <li>Keystrokes (keyboard/trackpad)</li>
              <li>Physical Gestures (a flick of the wrist)</li>
              <li>Combined (voice + keystrokes + gesture)</li>
            </ul>
          </div>
          
          {/* Right Column - GUI Response */}
          <div className="p-6 bg-gray-50 rounded-lg border border-gray-100">
            <h4 className="text-xl font-semibold text-black mb-4">GUI Response Examples</h4>
            <p className="text-gray-600 mb-4">
              Each command triggers an appropriate GUI change:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Requested articles pop up instantly</li>
              <li>Watch the layout of articles adjust to your needs</li>
              <li>Articles toggle/switch before your eyes</li>
              <li>See suggested GUIs based on personal context</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-8">
          <div className="space-y-4">
            <a 
              href="https://patents.google.com/patent/US11693676B2/en?oq=11%2c693%2c676" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block text-blue-600 hover:text-blue-800 underline"
            >
              Read Patent #1: US11693676B2
            </a>
            <a 
              href="https://patents.google.com/patent/US11397844B2/en?oq=11%2c397%2c844" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block text-blue-600 hover:text-blue-800 underline"
            >
              Read Patent #2: US11397844B2
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-black text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">Beyond Browsing: AR/VR Applications</h3>
        <div className="space-y-4">
          <p className="text-gray-300">
            The command-GUI relationship extends naturally into augmented and virtual reality environments, 
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