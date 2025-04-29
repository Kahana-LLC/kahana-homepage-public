import React from 'react';
import Image from 'next/image';

const ImplementationSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-apple/implementation.jpg"
          alt="Implementation roadmap and technical architecture"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800">Implementation Strategy</h3>
        <p className="text-gray-600">
          Our comprehensive implementation approach ensures a smooth transition and maximum value realization 
          for our customers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-gray-800">Deployment Process</h4>
          <ol className="list-decimal list-inside space-y-2 text-gray-600">
            <li>Initial assessment and planning</li>
            <li>Customized deployment strategy</li>
            <li>Phased rollout approach</li>
            <li>Training and support</li>
            <li>Ongoing optimization</li>
          </ol>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-gray-800">Support Services</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>24/7 technical support</li>
            <li>Dedicated account management</li>
            <li>Regular updates and maintenance</li>
            <li>Training programs</li>
            <li>Community resources</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800">Implementation Timeline</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Week 1-2</h4>
            <p className="text-gray-600">Planning & Assessment</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Week 3-4</h4>
            <p className="text-gray-600">Initial Deployment</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Week 5-6</h4>
            <p className="text-gray-600">Training & Support</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Week 7+</h4>
            <p className="text-gray-600">Optimization</p>
          </div>
        </div>
      </div>

      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800">Success Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Key Performance Indicators</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>User adoption rate</li>
              <li>Productivity improvements</li>
              <li>Cost savings</li>
              <li>Customer satisfaction</li>
            </ul>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Support & Maintenance</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Regular system updates</li>
              <li>Performance monitoring</li>
              <li>Security patches</li>
              <li>Feature enhancements</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800">Implementation Support</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Technical Support</h4>
            <p className="text-gray-600">24/7 expert assistance</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Training</h4>
            <p className="text-gray-600">Comprehensive learning resources</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Documentation</h4>
            <p className="text-gray-600">Detailed guides and manuals</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImplementationSection; 