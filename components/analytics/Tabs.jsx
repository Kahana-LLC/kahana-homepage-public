import React from 'react';

const Tabs = ({ tabs = [], active, onChange }) => {
  return (
    <div className="inline-flex bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {tabs.map((tab) => {
        const isActive = active === tab.key;
        return (
          <button
            key={tab.key}
            onClick={() => onChange?.(tab.key)}
            className={`${isActive ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'} px-4 py-2 text-sm font-medium border-r last:border-r-0 border-gray-200`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;


