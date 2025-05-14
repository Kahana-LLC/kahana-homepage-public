import React from 'react';
import Image from 'next/image';

const VisionBeyondSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="w-full max-w-4xl mx-auto mb-8">
        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#000B1E]">
          <Image
            src="/images-meta/vision-beyond.jpg"
            alt="Meta's AI-powered social intelligence vision"
            fill
            quality={100}
            priority
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      {/* Subtitle under the image, full width and left-aligned */}
      <div className="max-w-4xl mx-auto -mt-6 mb-8">
        <p className="text-xl text-gray-600">
          The future of work is being redefined in the Metaverse—where AR and VR devices, powered by Meta AI, enable you to collaborate, create, and connect in ways never before possible. With advanced voice and gesture commands, your workspace becomes intelligent, adaptive, and truly limitless.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">AI-Powered Workspaces</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Context-aware interactions that feel natural</li>
            <li>Real-time emotion and intent recognition</li>
            <li>Personalized productivity environments</li>
            <li>Intelligent content and workflow recommendations</li>
            <li>Seamless multi-modal communication</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">AR/VR Devices with Meta AI</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Always-on AR glasses for everyday work and collaboration</li>
            <li>Immersive VR for deep focus and team sessions</li>
            <li>Natural gesture and voice command controls</li>
            <li>Real-time translation and accessibility for global teams</li>
            <li>Shared, adaptive workspaces in the Metaverse</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 bg-black text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">Your Future of Work Isn't Chained to a Desk</h3>
        <div className="space-y-4">
          <p className="text-gray-300">
            With Meta AI and our AR/VR devices, the concept of "going to work" becomes obsolete. Your workspace is wherever you are, powered by AI that understands your context, anticipates your needs, and enables you to work with unprecedented freedom and efficiency. The future of work isn't about being tied to a desk—it's about having the power to work from anywhere, with all the tools and resources you need at your fingertips, seamlessly integrated across every Meta device. This foundation of Meta AI and our existing devices creates the perfect platform for building new types of devices that will help people work smarter than ever before.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionBeyondSection; 