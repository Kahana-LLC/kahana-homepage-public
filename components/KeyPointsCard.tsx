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
        bg-[#F3F8E4] border border-oasis-green-600 rounded-lg shadow-sm p-6
        ${className}
      `}
      role="complementary"
      aria-label="Key points"
    >
      <div className="flex items-start gap-3 mb-4">
        <div className="w-1 h-6 bg-oasis-green-600 rounded-full flex-shrink-0 mt-1" />
        <h3 className="text-lg font-semibold text-oasis-green-800 m-0">
          Key Points
        </h3>
      </div>
      <div className="text-oasis-green-800 leading-relaxed">
        {children}
      </div>
    </aside>
  );
};

export default KeyPointsCard;

