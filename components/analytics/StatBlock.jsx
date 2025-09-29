import React from 'react';

const StatBlock = ({ title, primary, secondary }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
      <div className="text-gray-900 font-semibold mb-2">{title}</div>
      <div className="flex items-baseline space-x-6">
        <div className="text-2xl font-bold text-gray-900">{primary}</div>
        {secondary && (
          <div className="text-gray-500">
            <div className="text-sm">{secondary.label}</div>
            <div className="text-lg font-semibold">{secondary.value}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatBlock;




