import React from 'react';
import Image from 'next/image';

const TechnologySection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-microsoft/technical-roadmap.jpg"
          alt="Microsoft AI technology stack"
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-6">
        <p className="text-xl text-gray-600">
          Our technology stack combines cutting-edge AI capabilities with enterprise-grade infrastructure, 
          creating a powerful foundation for intelligent business operations. From natural language processing 
          to predictive analytics, we're building the future of enterprise software.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Core Technologies</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Advanced machine learning models</li>
            <li>Natural language processing</li>
            <li>Computer vision capabilities</li>
            <li>Predictive analytics engines</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Infrastructure</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Azure AI platform</li>
            <li>Enterprise-grade security</li>
            <li>Scalable cloud architecture</li>
            <li>Real-time processing capabilities</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 bg-black text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">Technical Capabilities</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-semibold mb-2">AI Integration</h4>
            <p className="text-gray-300">
              Seamless integration of AI capabilities across Microsoft's enterprise software suite, enabling intelligent automation and insights.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Data Processing</h4>
            <p className="text-gray-300">
              Advanced data processing and analytics capabilities, providing real-time insights and predictive intelligence.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Security & Compliance</h4>
            <p className="text-gray-300">
              Enterprise-grade security features and compliance controls, ensuring data protection and regulatory adherence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologySection; 