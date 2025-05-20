import React from 'react';
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
  return (
    <div className="space-y-12">
      <div className="prose prose-lg max-w-none">
        <h3 className="text-3xl font-bold text-gray-900 mb-8">
          Next steps: acquire us and our IP so we can integrate the tech into Siri and Safari.
        </h3>
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
        <p className="text-xl text-gray-700 text-center mb-8">
          Our 2 approved patents cover how commands—whether through text, voice or gesture—trigger the GUI change you see, making information access effortless and ergonomic across Apple's ecosystem.
        </p>
        <div className="flex justify-center mb-8">
          <a
            href="https://www.youtube.com/watch?v=bAA8-TTFsxc"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-colors flex items-center gap-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Watch 3-minute Demo of the Tech in Action
          </a>
        </div>
        <div className="space-y-8">
          <h4 className="text-2xl font-semibold text-black text-center">Command-GUI Relationship</h4>
          <div className="space-y-6 mt-8">
            {commandGuiPairs.map((pair, idx) => (
              <div key={idx} className="flex flex-col md:flex-row items-center justify-center gap-4">
                <div
                  className="rounded-lg px-6 py-4 text-lg shadow-md w-full md:w-1/3 text-center"
                  style={pastelGradientStyle}
                >
                  {pair.command}
                </div>
                <div className="text-5xl mx-2 my-2 md:my-0 font-extrabold">
                  <span className="block md:hidden" style={arrowStyle}>↓</span>
                  <span className="hidden md:block" style={arrowStyle}>→</span>
                </div>
                <div
                  className="rounded-lg px-6 py-4 text-lg shadow-md w-full md:w-1/3 text-center"
                  style={pastelGradientStyle}
                >
                  {pair.gui}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 space-y-2">
            <a
              href="https://patents.google.com/patent/US11693676B2/en?oq=11%2c693%2c676"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-blue-600 hover:text-blue-800 underline text-lg font-medium"
            >
              Read Patent #1: US11693676B2
            </a>
            <br />
            <a
              href="https://patents.google.com/patent/US11397844B2/en?oq=11%2c397%2c844"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-blue-600 hover:text-blue-800 underline text-lg font-medium"
            >
              Read Patent #2: US11397844B2
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BriefProblem; 