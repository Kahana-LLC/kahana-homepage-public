import React from 'react';

const WhyAppleSection = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800">Our Unique Position</h3>
        <p className="text-gray-600">
          Apple's position in the market is unparalleled, combining decades of innovation with a proven track record 
          of delivering products that redefine industries. Our commitment to excellence and user experience sets us apart.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-gray-800">Design Excellence</h4>
          <p className="text-gray-600">
            Apple's design philosophy combines form and function, creating products that are not only beautiful 
            but also intuitive and user-friendly.
          </p>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-gray-800">Privacy & Security</h4>
          <p className="text-gray-600">
            Our commitment to user privacy and security is unmatched, with end-to-end encryption and industry-leading 
            security features built into every product.
          </p>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-gray-800">Ecosystem Integration</h4>
          <p className="text-gray-600">
            The Apple ecosystem provides seamless integration across devices, creating a unified experience that 
            enhances productivity and enjoyment.
          </p>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-gray-800">Environmental Responsibility</h4>
          <p className="text-gray-600">
            We lead the industry in environmental responsibility, with ambitious goals for carbon neutrality and 
            sustainable manufacturing practices.
          </p>
        </div>
      </div>

      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800">Proven Track Record</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Market Leadership</h4>
            <p className="text-gray-600">#1 in customer satisfaction for 15 consecutive years</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Innovation</h4>
            <p className="text-gray-600">Over 5,000 patents filed in the last decade</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Customer Loyalty</h4>
            <p className="text-gray-600">92% customer retention rate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyAppleSection; 