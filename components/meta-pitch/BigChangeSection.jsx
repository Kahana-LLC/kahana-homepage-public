import React from 'react';

const BigChangeSection = () => {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <blockquote className="text-3xl md:text-4xl font-light text-gray-900 leading-relaxed">
        <span className="block mb-8">
          "We are at the dawn of a new era where work is no longer confined to screens and physical offices. As AI, AR, and VR become standard features in our digital lives, Meta has the opportunity to create immersive, intelligent workspaces that empower people to collaborate, create, and connect from anywhere."
        </span>
        <footer className="text-lg text-gray-500 mb-2">
          <a 
            href="https://www.gartner.com/en/newsroom/press-releases/2025-03-31-gartner-forecasts-worldwide-genai-spending-to-reach-644-billion-in-2025" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="underline hover:text-gray-700"
          >
            Gartner forecasts
          </a> that by 2025, a significant share of enterprise collaboration and productivity will shift to AI- and AR/VR-enabled platforms, making the Metaverse the next frontier for work.
        </footer>
        <div className="h-8" />
        <span className="block mb-8">
          "The future of work isn't just about remote meetings or digital documents—it's about building context-aware, spatial experiences where teams feel present, creative, and productive together, no matter where they are."
        </span>
        <footer className="text-base text-green-900 bg-green-100 rounded px-2 py-1 mb-2">
          Meta's vision is to lead this transformation, using AI, AR, and VR to create the world's most advanced, human-centered work environments in the Metaverse.
        </footer>
      </blockquote>
    </div>
  );
};

export default BigChangeSection; 