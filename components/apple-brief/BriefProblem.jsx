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
      <div className="p-8 rounded-lg mb-12" style={{ backgroundColor: '#ecebf1' }}>
        <h3 className="text-2xl font-semibold mb-4">
        IP portfolio focusing on Apple's voice-first, touch-free tech ecosystem
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          Our IP portfolio includes 2 issued patents and a patent pending with "blank canvas" potential, enabling Apple to tailor additional claims to its needs and continue building a foundational portfolio for the next wave of Apple's products. These patents focus on protecting the connection between commands and GUI changes, making information access effortless and ergonomic across Apple's ecosystem.
        </p>
        <div className="flex flex-col items-start gap-1 mt-4">
          <a
            href="https://patents.google.com/patent/US11693676B2/en?oq=11%2c693%2c676"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block underline font-medium"
            style={{ color: '#2c71d0' }}
          >
            Read Patent #1: US11693676B2
          </a>
          <a
            href="https://patents.google.com/patent/US11397844B2/en?oq=11%2c397%2c844"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block underline font-medium"
            style={{ color: '#2c71d0' }}
          >
            Read Patent #2: US11397844B2
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
      </div>
    </div>
  );
};

export default BriefProblem; 