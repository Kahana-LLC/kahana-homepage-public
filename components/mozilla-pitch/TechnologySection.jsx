import React from 'react';
import Image from 'next/image';

const TechnologySection = () => {
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
        <h2 className="text-3xl font-bold text-black">Technology & Innovation</h2>
        <p className="text-xl text-gray-600">
          Mozilla Intelligence is not just about making everyday tasks easier—it fundamentally elevates what users can accomplish with their devices. By deeply integrating advanced AI, Mozilla devices become true productivity engines, empowering people to get real work done, create, learn, and solve complex problems in ways never before possible.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">AI: From Everyday Tasks to Real Work</h3>
          <div className="mt-4 space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-black">Transformative AI Capabilities</h4>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                <li>Advanced natural language understanding for complex, contextual requests</li>
                <li>AI that helps users accomplish real work, not just menial tasks</li>
                <li>Seamless integration across devices for unified productivity</li>
                <li>Personalized, proactive assistance that adapts to your workflow</li>
                <li>Enables new ways to interact with and consume information</li>
              </ul>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-black">Productivity & Impact</h4>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                <li>Automates research, organization, and retrieval of information</li>
                <li>Empowers users to focus on high-value, creative work</li>
                <li>Transforms Mozilla devices into true productivity powerhouses</li>
                <li>Fundamentally changes how people work, learn, and create</li>
              </ul>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-black">Raising the Ceiling</h4>
              <p className="text-gray-600">
                Mozilla Intelligence is not just about making everyday tasks easier—it's about unlocking the full potential of every Mozilla device, enabling users to achieve more than ever before.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Privacy & Security</h3>
          <p className="text-gray-600">
            All data collection and processing is performed with strict privacy controls and security measures 
            in place. We prioritize user privacy while gathering the necessary information to improve the system.
          </p>
          <div className="mt-4 space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-black">On-Device Processing</h4>
              <p className="text-gray-600">
                All AI processing and data analysis happens locally on the user's device, ensuring 
                that sensitive information never leaves their control.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-black">Differential Privacy</h4>
              <p className="text-gray-600">
                When aggregated data is needed for improving services, Mozilla's differential privacy 
                techniques ensure that individual user data remains anonymous and secure.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-black">Secure Enclave</h4>
              <p className="text-gray-600">
                Sensitive data and AI models are protected by Mozilla's Secure Enclave, providing 
                hardware-level security for user information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologySection; 