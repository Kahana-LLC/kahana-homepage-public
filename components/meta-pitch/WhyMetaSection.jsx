import React from 'react';
import Image from 'next/image';

const WhyMetaSection = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <p className="text-xl text-gray-600">
          Meta is uniquely positioned to lead the AI revolution in social media. With its vast ecosystem of platforms, massive user base, and deep expertise in AI research, Meta has all the essential ingredients to transform how people interact with social content.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Platform Ecosystem</h3>
          <p className="text-gray-600">
            Meta's comprehensive suite of platforms—Facebook, Instagram, WhatsApp, and Messenger—creates an unparalleled opportunity to implement AI features across multiple touchpoints. This interconnected ecosystem allows for seamless AI experiences that transcend individual apps.
          </p>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">AI Leadership</h3>
          <p className="text-gray-600">
            Meta's AI Research division (FAIR) is at the forefront of AI innovation, with breakthroughs in computer vision, natural language processing, and multimodal AI. This research excellence provides a strong foundation for implementing cutting-edge AI features.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-black text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">Key Advantages</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-semibold mb-2">Scale and Reach</h4>
            <p className="text-gray-300">
              With over 3 billion monthly active users across its platforms, Meta has the largest social media user base in the world. This scale provides an unprecedented opportunity to deploy and refine AI features.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Data Infrastructure</h4>
            <p className="text-gray-300">
              Meta's sophisticated data infrastructure and privacy-preserving AI systems enable the development of personalized AI features while maintaining user trust and privacy.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">User Trust</h4>
            <p className="text-gray-300">
              Years of experience in handling user data and maintaining platform safety have given Meta the expertise needed to implement AI features responsibly and securely.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">Strategic Fit</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-50 rounded-xl">
            <h4 className="text-xl font-semibold mb-2">Technical Capability</h4>
            <p className="text-gray-600">
              Meta's advanced AI infrastructure and engineering talent make it uniquely capable of implementing sophisticated AI features at scale.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl">
            <h4 className="text-xl font-semibold mb-2">Market Position</h4>
            <p className="text-gray-600">
              As the leader in social media, Meta has the market influence to set new standards for AI-powered social experiences.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl">
            <h4 className="text-xl font-semibold mb-2">Future Vision</h4>
            <p className="text-gray-600">
              Meta's commitment to building the metaverse aligns perfectly with our vision of AI-enhanced social interactions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyMetaSection; 