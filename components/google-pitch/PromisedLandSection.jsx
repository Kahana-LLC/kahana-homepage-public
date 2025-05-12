import React from 'react';
import Image from 'next/image';

const PromisedLandSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-google/promised-land.jpg"
          alt="Future vision of seamless Google search interaction"
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-6">
        <p className="text-xl text-gray-600">
          Every search instantly transforms your information landscape, making knowledge discovery effortless and intuitive. Whether through voice or text, each query creates the perfect view for your context.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Query to Knowledge Magic</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Ask naturally to instantly find and summarize research papers</li>
            <li>Speak to transform your search results into exactly what you need</li>
            <li>Quick commands organize your saved content automatically</li>
            <li>Voice queries instantly sync your information across any device</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Intelligent Search</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Natural transitions between search contexts</li>
            <li>Dynamic content organization triggered by queries</li>
            <li>Information suggestions based on personal context</li>
            <li>Device-optimized search that works together seamlessly</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PromisedLandSection; 