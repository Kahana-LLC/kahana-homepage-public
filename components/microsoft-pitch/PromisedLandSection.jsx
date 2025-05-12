import React from 'react';
import Image from 'next/image';

const PromisedLandSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-microsoft/promised-land.jpg"
          alt="Future of AI-powered enterprise operations"
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-6">
        <p className="text-xl text-gray-600">
          Every interaction with enterprise software becomes an opportunity for intelligent augmentation. 
          Whether through natural language commands or automated workflows, each action creates a more 
          efficient and insightful business environment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Intelligent Operations</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Natural language commands for complex tasks</li>
            <li>Automated workflow optimization</li>
            <li>Smart resource allocation and scheduling</li>
            <li>Predictive maintenance and support</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Business Transformation</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Real-time business insights and analytics</li>
            <li>Automated decision support systems</li>
            <li>Intelligent process optimization</li>
            <li>Adaptive learning and improvement</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 bg-black text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">The Future of Work</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-semibold mb-2">Enhanced Productivity</h4>
            <p className="text-gray-300">
              AI-powered tools that augment human capabilities, enabling teams to achieve more with less effort and greater efficiency.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Intelligent Collaboration</h4>
            <p className="text-gray-300">
              Seamless integration of AI capabilities across teams and departments, fostering better communication and collaboration.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Data-Driven Decisions</h4>
            <p className="text-gray-300">
              Real-time insights and predictive analytics that empower organizations to make better, more informed decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromisedLandSection; 