import React from 'react';
import Image from 'next/image';

const SolutionSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="https://images.pexels.com/photos/34950/pexels-photo.jpg"
          alt="Nature landscape"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-6">
        <p className="text-xl text-gray-600">
          Oasis Browser delivers game-changing features that transform how knowledge workers operate under pressure. Built for speed, clarity, and security, it's the only browser designed for time-sensitive, high-impact roles and enterprise environments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {/* Security Pillar */}
        <div className="space-y-4 p-6 bg-gray-50 rounded-xl border border-gray-200">
          <h3 className="text-2xl font-semibold text-black flex items-center gap-2">
            <svg className="w-6 h-6 text-green-600 inline-block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            Security
          </h3>
          <p className="text-gray-600">
            Enterprise-grade protection and zero-trust architecture keep sensitive data safe, even in high-stakes, time-critical scenarios.
          </p>
        </div>
        {/* Productivity Pillar */}
        <div className="space-y-4 p-6 bg-gray-50 rounded-xl border border-gray-200">
          <h3 className="text-2xl font-semibold text-black flex items-center gap-2">
            <svg className="w-6 h-6 text-green-600 inline-block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            Productivity
          </h3>
          <p className="text-gray-600">
            Hub-based collections, tag-driven discovery, and multi-view layouts replace tab chaos—making any information instantly retrievable and always in context.
          </p>
        </div>
        {/* AI Pillar */}
        <div className="space-y-4 p-6 bg-gray-50 rounded-xl border border-gray-200">
          <h3 className="text-2xl font-semibold text-black flex items-center gap-2">
            <svg className="w-6 h-6 text-green-600 inline-block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            AI
          </h3>
          <p className="text-gray-600">
            The game-changing "Find" command uses AI-powered search to instantly surface critical data—delivering up to 60% improvement in first call resolution and lightning-fast answers when every second counts.
          </p>
        </div>
      </div>

      {/* Feature Highlights */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Smart Commands Pillar */}
        <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 space-y-4">
          <h3 className="text-2xl font-semibold text-black">Smart Commands</h3>
          <p className="text-gray-600">
            <span className="font-semibold">The Game-Changing "Find" Command:</span> <br />
            <span className="italic">"Show me that incident report from last week about the server outage"</span>—a simple request that current enterprise browsers can't handle effectively. Oasis delivers lightning-fast information retrieval in time-sensitive scenarios, with search algorithms specifically optimized for enterprise knowledge workers.
          </p>
        </div>
        {/* Smart Interfaces Pillar */}
        <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 space-y-4">
          <h3 className="text-2xl font-semibold text-black">Smart Interfaces</h3>
          <p className="text-gray-600">
            <span className="font-semibold">From Chaos to Clarity:</span> <br />
            Hub-based collections, tag-based discovery, and multi-view layouts provide perfect context without clutter, eliminating tab overload and wasted time.
          </p>
        </div>
      </div>

      {/* Patent Breakdown Section */}
      <div className="space-y-8 mt-12">
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
              onClick={() => window.open('https://www.youtube.com/embed/bAA8-TTFsxc?autoplay=1', '_blank')}
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
    </div>
  );
};

export default SolutionSection; 