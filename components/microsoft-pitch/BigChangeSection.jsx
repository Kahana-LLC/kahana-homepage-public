import React from 'react';

const BigChangeSection = () => {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <blockquote className="text-3xl md:text-4xl font-light text-gray-900 leading-relaxed">
        <span className="block mb-8">
          "The enterprise software landscape is undergoing a fundamental transformation. 
          As AI becomes embedded in every aspect of business operations, 
          the way organizations work, collaborate, and make decisions is changing forever."
        </span>
        <footer className="text-lg text-gray-500 mb-2">
          <a 
            href="https://www.gartner.com/en/newsroom/press-releases/2025-03-31-gartner-forecasts-worldwide-genai-spending-to-reach-644-billion-in-2025" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="underline hover:text-gray-700"
          >
            Gartner forecasts
          </a> that enterprise AI spending will reach $644 billion by 2025, 
          with Microsoft's AI-powered solutions leading the transformation of business operations.
        </footer>
        <div className="h-8" />
        <span className="block mb-8">
          "The future of enterprise software is not about automation—it's about augmentation. AI is the key to unlocking human potential at scale."
        </span>
        <footer className="text-base text-gray-500 mb-2">
          <a
            href="https://www.zdnet.com/microsoft-ai-enterprise-transformation"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-700"
          >
            ZDNet
          </a> reports that Microsoft's AI integration is transforming how enterprises operate, 
          with 85% of Fortune 500 companies adopting Microsoft's AI-powered solutions.
        </footer>
      </blockquote>
    </div>
  );
};

export default BigChangeSection; 