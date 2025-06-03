import React, { useState } from 'react';
import Image from 'next/image';

const commandGuiPairs = [
  {
    command: 'Voice: "Show me saved articles"',
    gui: 'Requested articles pull up instantly',
  },
  {
    command: 'Keystrokes: (keyboard/trackpad)',
    gui: 'Watch the layout of articles adjust to your needs',
  },
  {
    command: 'Physical Gestures: (a flick of the wrist)',
    gui: 'Articles toggle/switch before your eyes',
  },
  {
    command: 'Combined: (voice + keystrokes + gesture)',
    gui: 'See suggested GUIs based on personal context',
  },
];

const pastelGradientStyle = {
  background: 'linear-gradient(90deg, #e3efff 0%, #f3e6ff 50%, #ffe6f0 100%)',
  color: '#1a237e',
  fontWeight: 700,
  boxShadow: '0 2px 12px 0 rgba(41,151,255,0.10)',
};

const arrowStyle = {
  color: '#a3a3a3',
  fontWeight: 900,
};

const BriefProblem = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div className="space-y-12">
      <div className="p-8 rounded-lg mb-12" style={{ backgroundColor: '#ecebf1' }}>
        <h3 className="text-2xl font-semibold mb-4">
        Our IP portfolio protects the next wave of voice-first, touch-free features
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          Our IP portfolio includes 2 issued patents and a patent pending with "blank canvas" potential, enabling Apple to tailor additional claims to its needs and continue building a foundational portfolio with multiple patents for the next wave of Apple's products. These patents focus on protecting the connection between commands and Graphical User Interface (GUI) changes, making information access effortless and ergonomic across Apple's ecosystem.
        </p>
        <div className="flex flex-col items-start gap-1 mt-4">
          <a
            href="https://patents.google.com/patent/US11397844B2/en?oq=11%2c397%2c844"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block underline font-medium"
            style={{ color: '#2c71d0' }}
          >
            Read Patent #1: US11397844B2
          </a>
          <a
            href="https://patents.google.com/patent/US11693676B2/en?oq=11%2c693%2c676"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block underline font-medium"
            style={{ color: '#2c71d0' }}
          >
            Read Patent #2: US11693676B2
          </a>
        </div>
      </div>
      <div className="prose prose-lg max-w-none">
        <div className="flex justify-center mb-8">
          <Image
            src="/images-apple/patent-breakdown.jpg"
            alt="Patent-driven command-GUI system illustration"
            width={400}
            height={400}
            className="rounded-lg object-contain shadow-lg"
            priority
          />
        </div>
        {/* Video Demo Callout */}
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
              Watch 3-minute Demo of Patent Utility
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
        {/* End Video Demo Callout */}
        <div className="space-y-8">
          <h4 className="text-2xl font-semibold text-black text-center">Illustrating the Command-GUI Relationship</h4>
          <div className="space-y-8 mt-8">
            {commandGuiPairs.map((pair, idx) => (
              <div key={idx} className="bg-gradient-to-r from-[#e3efff] via-[#f3e6ff] to-[#ffe6f0] rounded-2xl px-4 py-6 flex flex-col md:flex-row items-center justify-center gap-4 shadow-md">
                <div
                  className="rounded-lg px-6 py-4 text-lg shadow-none w-full md:w-1/3 text-center font-bold"
                  style={{color: '#1a237e'}}>
                  {pair.command}
                </div>
                <div className="text-5xl mx-2 my-2 md:my-0 font-extrabold">
                  <span className="block md:hidden" style={arrowStyle}>↓</span>
                  <span className="hidden md:block" style={arrowStyle}>→</span>
                </div>
                <div
                  className="rounded-lg px-6 py-4 text-lg shadow-none w-full md:w-1/3 text-center font-bold"
                  style={{color: '#1a237e'}}>
                  {pair.gui}
                </div>
              </div>
            ))}
            {/* Divider between pairs */}
            <style jsx>{`
              .pair-divider:not(:last-child) {
                border-bottom: 2px solid #e0e0e0;
                margin: 2rem 0;
              }
            `}</style>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BriefProblem; 