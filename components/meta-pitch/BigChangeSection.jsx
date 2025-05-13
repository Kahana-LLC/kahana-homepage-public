import React from 'react';

const BigChangeSection = () => {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <blockquote className="text-3xl md:text-4xl font-light text-gray-900 leading-relaxed">
        <span className="block mb-8">
          "We are at the dawn of AI becoming a standard feature in social media. 
          As platforms embed AI capabilities by default in their services, 
          the way people interact with social content is undergoing a fundamental transformation."
        </span>
        <footer className="text-lg text-gray-500 mb-2">
          <a 
            href="https://www.gartner.com/en/newsroom/press-releases/2025-03-31-gartner-forecasts-worldwide-genai-spending-to-reach-644-billion-in-2025" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="underline hover:text-gray-700"
          >
            Gartner forecasts
          </a> that 80% of GenAI spending in 2025 will go toward AI-enabled consumer services, 
          as AI becomes a standard feature in social media, content platforms, and other digital services.
        </footer>
        <div className="h-8" />
        <span className="block mb-8">
          "The future of social media isn't just about connecting people—it's about creating intelligent, 
          context-aware experiences that understand and anticipate user needs."
        </span>
        <footer className="text-base text-gray-500 mb-2">
          <a
            href="https://about.meta.com/technologies/ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-700"
          >
            Meta's AI Vision
          </a> outlines how AI is becoming central to Meta's strategy for transforming social media 
          into a more intelligent and personalized experience.
        </footer>
      </blockquote>
    </div>
  );
};

export default BigChangeSection; 