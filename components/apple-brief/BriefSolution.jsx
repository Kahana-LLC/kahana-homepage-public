import React from 'react';
import Image from 'next/image';

const BriefSolution = () => {
  return (
    <div className="space-y-8">
      <div className="prose prose-lg max-w-none">
        <div className="bg-green-50 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6">Craig, we want to work with you and the Apple team to make this happen.</h3>
          <p className="text-xl text-gray-700 mb-6">
            We appreciate your approach with Apple Intelligence and understand that this is a big lift, a many-year, decades-long arc that needs to be done responsibly. We are just as excited about Apple Intelligence as you and customers around the world. If we are given the opportunity to join you and the team at Apple, we will seize it. Failure is not an option.
          </p>
        </div>

        <div className="text-center mt-12">
          <p className="text-xl text-gray-700 mb-8">
            Since we were kids, it's always been our dream to deliver magic at Apple. If you are willing to give us a shot, we are ready to drop everything, book a one-way flight to Cupertino, and make it happen.
          </p>
          <a 
            href="https://go.oncehub.com/AdamKershner"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-lg text-lg font-semibold shadow-md transition-all"
            style={{
              background: 'linear-gradient(90deg, #e3efff 0%, #f3e6ff 50%, #ffe6f0 100%)',
              color: '#1a237e',
              border: '1px solid #e0e0e0',
              textShadow: '0 1px 2px rgba(255,255,255,0.5)',
            }}
            onMouseOver={e => e.currentTarget.style.filter = 'brightness(1.05)'}
            onMouseOut={e => e.currentTarget.style.filter = 'none'}
          >
            Let's work →
          </a>
        </div>
      </div>
    </div>
  );
};

export default BriefSolution; 