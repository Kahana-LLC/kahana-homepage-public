import React from 'react';
import Image from 'next/image';

const WhyMetaSection = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800">Our Unique Position</h3>
        <p className="text-gray-600">
          Meta's position in social media is unparalleled, combining the world's largest social platform ecosystem 
          with cutting-edge AI research. Our commitment to connecting people and advancing AI technology sets us apart.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-gray-800">Platform Ecosystem</h4>
          <p className="text-gray-600">
            Meta's comprehensive suite of platforms—Facebook, Instagram, WhatsApp, and Messenger—creates an unparalleled 
            opportunity to implement AI features across multiple touchpoints.
          </p>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-gray-800">AI Leadership</h4>
          <p className="text-gray-600">
            Our AI Research division (FAIR) is at the forefront of AI innovation, with breakthroughs in computer vision, 
            natural language processing, and multimodal AI.
          </p>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-gray-800">Privacy & Security</h4>
          <p className="text-gray-600">
            Meta's sophisticated data infrastructure and privacy-preserving AI systems enable the development of 
            personalized AI features while maintaining user trust and privacy.
          </p>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-gray-800">Future Vision</h4>
          <p className="text-gray-600">
            Our commitment to building the metaverse aligns perfectly with our vision of AI-enhanced social interactions 
            and immersive experiences.
          </p>
        </div>
      </div>

      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800">Proven Track Record</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Market Leadership</h4>
            <p className="text-gray-600">Over 3 billion monthly active users across our platforms</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Innovation</h4>
            <p className="text-gray-600">Leading research in AI, AR/VR, and social technology</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Global Reach</h4>
            <p className="text-gray-600">Platforms available in over 100 languages worldwide</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyMetaSection; 