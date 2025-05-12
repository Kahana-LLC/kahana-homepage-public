import React from 'react';
import Image from 'next/image';

const VisionBeyondSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-microsoft/vision-beyond.jpg"
          alt="Future vision of enterprise AI integration"
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-6">
        <p className="text-xl text-gray-600">
          Our vision extends beyond traditional enterprise software, creating a future where AI seamlessly integrates 
          with every aspect of business operations, transforming how organizations work and compete in the digital age.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">The Future of Enterprise</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Intelligent automation of complex workflows</li>
            <li>Predictive analytics for business strategy</li>
            <li>Natural language interaction with enterprise systems</li>
            <li>Adaptive learning and continuous improvement</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Transformative Impact</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Enhanced decision-making capabilities</li>
            <li>Streamlined business processes</li>
            <li>Improved resource utilization</li>
            <li>Accelerated innovation cycles</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 bg-black text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">The Path Forward</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-semibold mb-2">Enterprise Transformation</h4>
            <p className="text-gray-300">
              Revolutionize how organizations operate by integrating AI into every aspect of business processes, 
              from customer service to supply chain management.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Intelligent Operations</h4>
            <p className="text-gray-300">
              Create a future where AI-powered systems work seamlessly with human teams, enhancing productivity 
              and enabling new levels of business performance.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Sustainable Innovation</h4>
            <p className="text-gray-300">
              Build a foundation for continuous improvement and innovation, ensuring organizations remain 
              competitive in an increasingly digital world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionBeyondSection; 