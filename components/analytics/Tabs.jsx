import React from 'react';

const Tabs = ({ tabs = [], active, onChange }) => {
  return (
    <div
      className="inline-flex overflow-hidden rounded-xl border border-oasis-green-800/15 bg-white shadow-sm"
      role="tablist"
      aria-label="Insights preview sections"
    >
      {tabs.map((tab) => {
        const isActive = active === tab.key;
        return (
          <button
            key={tab.key}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange?.(tab.key)}
            className={`px-4 py-2.5 text-sm font-medium transition-colors border-r border-oasis-green-800/10 last:border-r-0 ${
              isActive
                ? 'bg-oasis-green-800 text-white'
                : 'bg-white text-oasis-green-800/85 hover:bg-oasis-green-50 hover:text-oasis-green-800'
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
