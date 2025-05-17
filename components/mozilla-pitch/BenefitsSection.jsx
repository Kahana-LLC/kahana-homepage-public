import React from 'react';
import Image from 'next/image';

const BenefitsSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-64 w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg"
          alt="Business meeting and handshake"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800">Transformative Benefits</h3>
        <p className="text-gray-600">
          Our product delivers significant benefits across multiple dimensions, from enhanced productivity to 
          environmental sustainability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="p-6 bg-gray-50 rounded-lg space-y-4">
          <h4 className="text-xl font-semibold text-gray-800">Productivity Benefits</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>40% increase in workflow efficiency</li>
            <li>Seamless multi-device integration</li>
            <li>Intelligent task automation</li>
            <li>Enhanced collaboration tools</li>
          </ul>
        </div>
        
        <div className="p-6 bg-gray-50 rounded-lg space-y-4">
          <h4 className="text-xl font-semibold text-gray-800">Environmental Impact</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>100% recycled aluminum enclosure</li>
            <li>50% reduction in carbon footprint</li>
            <li>Energy-efficient design</li>
            <li>Sustainable packaging</li>
          </ul>
        </div>
        
        <div className="p-6 bg-gray-50 rounded-lg space-y-4">
          <h4 className="text-xl font-semibold text-gray-800">User Experience</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Intuitive interface design</li>
            <li>Personalized experience</li>
            <li>Enhanced accessibility features</li>
            <li>Seamless ecosystem integration</li>
          </ul>
        </div>
        
        <div className="p-6 bg-gray-50 rounded-lg space-y-4">
          <h4 className="text-xl font-semibold text-gray-800">Security & Privacy</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>End-to-end encryption</li>
            <li>Advanced biometric security</li>
            <li>Privacy-focused design</li>
            <li>Secure data handling</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800">Business Impact</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">ROI</h4>
            <p className="text-gray-600">200% return on investment within 12 months</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Productivity</h4>
            <p className="text-gray-600">30% increase in team productivity</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Sustainability</h4>
            <p className="text-gray-600">40% reduction in environmental impact</p>
          </div>
        </div>
      </div>

      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800">Customer Success Stories</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Enterprise Case Study</h4>
            <p className="text-gray-600">
              "Implementation led to a 45% increase in productivity and significant cost savings across our 
              organization."
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Creative Professional</h4>
            <p className="text-gray-600">
              "The seamless integration and powerful features have transformed my creative workflow."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection; 