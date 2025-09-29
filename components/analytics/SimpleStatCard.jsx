import React from 'react';

const SimpleStatCard = ({
  icon,
  title,
  value,
  sublabel
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
      <div className="flex items-start">
        <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center mr-3">
          {icon || (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </div>
        <div>
          <div className="text-sm text-gray-500">{title}</div>
          <div className="text-2xl font-semibold text-gray-900">{value}</div>
          {sublabel && <div className="text-xs text-gray-400 mt-1">{sublabel}</div>}
        </div>
      </div>
    </div>
  );
};

export default SimpleStatCard;




