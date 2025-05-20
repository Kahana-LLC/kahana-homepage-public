import React from 'react';
import Image from 'next/image';

const BriefIntroduction = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-center">
        <Image
          src="/images-apple/ai-benefits.jpg"
          alt="AI-curated results and benefits illustration"
          width={600}
          height={300}
          className="rounded-lg shadow-lg object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default BriefIntroduction; 