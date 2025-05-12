import React from 'react';

const BigChangeSection = () => {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <blockquote className="text-3xl md:text-4xl font-light text-gray-900 leading-relaxed">
        <span className="block mb-8">
          "We are at the dawn of AI becoming a standard feature in search technology. 
          As search engines embed AI capabilities by default in their platforms, 
          the way people discover and interact with information is undergoing a fundamental transformation."
        </span>
        <footer className="text-lg text-gray-500 mb-2">
          <a 
            href="https://www.gartner.com/en/newsroom/press-releases/2025-03-31-gartner-forecasts-worldwide-genai-spending-to-reach-644-billion-in-2025" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="underline hover:text-gray-700"
          >
            Gartner forecasts
          </a> that 80% of GenAI spending in 2025 will go toward AI-enabled search platforms, 
          as AI becomes a standard feature in information discovery and knowledge management.
        </footer>
        <div className="h-8" />
        <span className="block mb-8">
          "The future of search is not about finding information—it's about understanding it. AI is the key to unlocking this transformation."
        </span>
        <footer className="text-base text-gray-500 mb-2">
          <a
            href="https://www.fastcompany.com/91330398/google-eyes-ai-powered-search-as-traditional-search-declines"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-700"
          >
            Fast Company
          </a> outlines how on May 7th, 2025, Google acknowledged that traditional search is declining and that AI-powered search is the future.
        </footer>
      </blockquote>
    </div>
  );
};

export default BigChangeSection; 