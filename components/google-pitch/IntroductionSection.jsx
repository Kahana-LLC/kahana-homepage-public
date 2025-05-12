import React from 'react';
import Image from 'next/image';

const IntroductionSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-google/introduction.jpg"
          alt="Vision of future Google search with seamless AI integration"
          fill
          className="object-cover"
        />
      </div>
      <p className="text-xl text-gray-600">
        In an era where information is reshaping every aspect of our lives, Google continues to lead the charge in search innovation. 
        Our latest product represents a quantum leap forward, combining cutting-edge AI technology with Google's signature search 
        capabilities to create something truly revolutionary.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">The Vision</h3>
          <p className="text-gray-600">
            We envision a world where information discovery is seamless and intuitive, enhancing our capabilities 
            while maintaining the simplicity and efficiency that Google is known for.
          </p>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">The Mission</h3>
          <p className="text-gray-600">
            To push the boundaries of what's possible in search, creating experiences that not only meet but exceed our users' 
            expectations, while maintaining our commitment to privacy, security, and responsible AI development.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-black text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">Key Benefits</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-semibold mb-2">Enhanced Search Experience</h4>
            <p className="text-gray-300">
              Transform search from a keyword-based experience to an intelligent interaction where information finds you based on your interests and needs.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Increased Knowledge Discovery</h4>
            <p className="text-gray-300">
              Drive deeper engagement with information by making knowledge discovery and interaction more natural and intuitive through AI-powered features.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Competitive Advantage</h4>
            <p className="text-gray-300">
              Position Google as the leader in AI-powered search, setting new standards for how people discover and interact with information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionSection; 