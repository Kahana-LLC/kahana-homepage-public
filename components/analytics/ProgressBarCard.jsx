import React from 'react';

const ProgressBarCard = ({ title, percent = 28, label = 'Saved' }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
      <div className="text-gray-900 font-semibold mb-3">{title}</div>
      <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
        <div className="h-3 bg-teal-500" style={{ width: `${percent}%` }} />
      </div>
      <div className="mt-2 text-sm text-gray-600">{percent}% {label}</div>
    </div>
  );
};

export default ProgressBarCard;



