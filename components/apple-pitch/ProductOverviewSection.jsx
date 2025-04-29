import React from 'react';

const ProductOverviewSection = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800">Product Vision</h3>
        <p className="text-gray-600">
          Our latest product represents a revolutionary step forward in technology, combining cutting-edge innovation 
          with Apple's signature design philosophy. It's not just a product - it's a new way of experiencing technology.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-gray-800">Core Features</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Revolutionary new interface</li>
            <li>Unprecedented processing power</li>
            <li>Advanced AI capabilities</li>
            <li>Seamless ecosystem integration</li>
            <li>Industry-leading security</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-gray-800">Key Specifications</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Next-generation processor</li>
            <li>Advanced display technology</li>
            <li>Extended battery life</li>
            <li>Enhanced connectivity</li>
            <li>Sustainable materials</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800">Design Philosophy</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Simplicity</h4>
            <p className="text-gray-600">Intuitive design that feels natural to use</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Elegance</h4>
            <p className="text-gray-600">Beautiful form meets powerful function</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Innovation</h4>
            <p className="text-gray-600">Pushing the boundaries of what's possible</p>
          </div>
        </div>
      </div>

      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800">Target Audience</h3>
        <p className="text-gray-600">
          This product is designed for forward-thinking individuals who demand the best in technology, design, and 
          user experience. Whether you're a creative professional, a business leader, or a tech enthusiast, this 
          product will transform how you interact with technology.
        </p>
      </div>
    </div>
  );
};

export default ProductOverviewSection; 