import React from 'react';
import Image from 'next/image';

const PatentBreakdownSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-microsoft/patent-breakdown.jpg"
          alt="Microsoft AI patent portfolio analysis"
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-6">
        <p className="text-xl text-gray-600">
          Our comprehensive patent portfolio covers key aspects of AI integration in enterprise software, 
          providing Microsoft with a strong foundation for innovation and competitive advantage.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Core Technologies</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Natural language processing for enterprise systems</li>
            <li>Intelligent workflow automation</li>
            <li>Predictive analytics and decision support</li>
            <li>Adaptive learning algorithms</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Integration Methods</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Seamless API integration</li>
            <li>Cross-platform compatibility</li>
            <li>Real-time data processing</li>
            <li>Secure enterprise deployment</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 bg-black text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">Patent Portfolio Highlights</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-semibold mb-2">Enterprise AI Integration</h4>
            <p className="text-gray-300">
              Patents covering methods for integrating AI capabilities into existing enterprise systems, 
              ensuring smooth adoption and maximum value.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Intelligent Automation</h4>
            <p className="text-gray-300">
              Innovative approaches to automating complex business processes while maintaining human oversight 
              and control.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Data Security</h4>
            <p className="text-gray-300">
              Advanced security measures for protecting sensitive enterprise data while enabling AI-powered 
              insights and automation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatentBreakdownSection; 