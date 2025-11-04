import React from 'react';

interface KeyPointsCardProps {
  children: React.ReactNode;
  className?: string;
}

const KeyPointsCard: React.FC<KeyPointsCardProps> = ({
  children,
  className = ""
}) => {
  return (
    <aside 
      className={`
        bg-[#F3F8E4] border border-[#728552] rounded-lg shadow-sm p-6
        ${className}
      `}
      role="complementary"
      aria-label="Key points"
    >
      <div className="flex items-start gap-3 mb-4">
        <div className="w-1 h-6 bg-[#728552] rounded-full flex-shrink-0 mt-1" />
        <h3 className="text-lg font-semibold text-[#4A5745] m-0">
          Key Points
        </h3>
      </div>
      <div className="text-[#4A5745] leading-relaxed">
        {children}
      </div>
    </aside>
  );
};

export default KeyPointsCard;

