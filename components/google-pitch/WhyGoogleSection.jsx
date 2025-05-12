import React from 'react';

const WhyGoogleSection = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800">Our Unique Position</h3>
        <p className="text-gray-600">
          Google's position in the search market is unparalleled, combining decades of innovation with a proven track record 
          of delivering products that redefine how we access information. Our commitment to excellence and user experience sets us apart.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-gray-800">Search Excellence</h4>
          <p className="text-gray-600">
            Google's search philosophy combines speed and accuracy, creating experiences that are not only efficient 
            but also intuitive and user-friendly.
          </p>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-gray-800">Privacy & Security</h4>
          <p className="text-gray-600">
            Our commitment to user privacy and security is unmatched, with industry-leading 
            security features and transparent data practices built into every product.
          </p>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-gray-800">Ecosystem Integration</h4>
          <p className="text-gray-600">
            The Google ecosystem provides seamless integration across services, creating a unified experience that 
            enhances information discovery and knowledge sharing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyGoogleSection; 