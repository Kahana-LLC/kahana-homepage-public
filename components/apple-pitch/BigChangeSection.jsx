import React from 'react';

const BigChangeSection = () => {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <blockquote className="text-3xl md:text-4xl font-light text-gray-900 leading-relaxed">
        <span className="block mb-8">
          "We are at the dawn of AI becoming a standard feature in consumer technology. 
          As manufacturers embed AI capabilities by default in new products, 
          the way people interact with their devices is undergoing a fundamental transformation."
        </span>
        <footer className="text-lg text-gray-500 mb-2">
          <a 
            href="https://www.gartner.com/en/newsroom/press-releases/2025-03-31-gartner-forecasts-worldwide-genai-spending-to-reach-644-billion-in-2025" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="underline hover:text-gray-700"
          >
            Gartner forecasts
          </a> that 80% of GenAI spending in 2025 will go toward AI-enabled consumer devices, 
          as AI becomes a standard feature in smartphones, PCs, and other consumer electronics.
        </footer>
        <div className="h-8" />
        <span className="block mb-8">
          “There's enough money now, enough large players, that I don't see how it doesn't happen," Cue said about the switch from standard internet search to AI.
        </span>
        <footer className="text-base text-gray-500 mb-2">
          <a
            href="https://www.fastcompany.com/91330398/apple-eyes-ai-powered-search-as-safari-usage-declines"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-700"
          >
            Fast Company
          </a> outlines how on May 7th, 2025, Eddy Cue acknowledged that Safari usage is declining and that Apple is considering emphasizing AI-powered search engines over Google.
        </footer>
      </blockquote>
    </div>
  );
};

export default BigChangeSection; 