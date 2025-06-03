import React from 'react';
import Image from 'next/image';

const BriefSolution = () => {
  return (
    <div className="space-y-8">
      <div className="prose prose-lg max-w-none">
        <div className="p-8 rounded-lg" style={{ backgroundColor: '#ecebf1' }}>
          <h3 className="text-2xl font-semibold mb-6">Craig, let's make Apple's 10-year vision a reality.</h3>
          <p className="text-xl text-gray-700 mb-6">
            We appreciate your approach with Apple Intelligence and understand that this is a big lift, a many-year, decades-long arc that needs to be done responsibly. We are just as excited about Apple Intelligence as you and customers around the world.
          </p>
        </div>

        {/* Acquisition Package Section */}
        <div className="mt-16 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-2 px-4 border-b border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Acquisition Package</h3>
          </div>
          
          <div className="py-2 px-4 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 gap-x-6">
              <div className="pb-4 md:pb-0 md:pr-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Full IP Portfolio</h4>
                <p className="text-gray-600">Two issued patents and a patent pending, opening the door for multiple additional patents that can be tailored to protect command-to-GUI relationships in Apple's next-generation products (more details below).</p>
              </div>
              <div className="py-4 md:py-0 md:px-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Right to Hire</h4>
                <p className="text-gray-600">The right to hire Adam Kershner and Jonathan Gans to integrate Kahana's technology/vision into Apple's products and work to expand the patent portfolio.</p>
              </div>
              <div className="pt-4 md:pt-0 md:pl-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Code, Products, Revenue</h4>
                <p className="text-gray-600">Full ownership of Kahana's codebase, existing products, and revenue streams (e.g., subscriptions from current Kahana customer) and control over decision-making (e.g., integrating code into its own code base, shutting a product down, etc.).</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://go.oncehub.com/AdamKershner"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-full text-lg font-semibold shadow-md transition-all no-underline"
            style={{
              background: '#2c71d0',
              color: '#fff',
              border: 'none',
            }}
            onMouseOver={e => e.currentTarget.style.filter = 'brightness(1.05)'}
            onMouseOut={e => e.currentTarget.style.filter = 'none'}
          >
            Let's work together →
          </a>
        </div>
      </div>
    </div>
  );
};

export default BriefSolution; 