import React from 'react';

const WorldMap = ({ highlightedRegions = [], height = 220 }) => {
  return (
    <div style={{ height }} className="relative">
      <svg viewBox="0 0 800 400" className="w-full h-full">
        {/* Simplified world map paths */}
        <path
          d="M150 200 L200 180 L250 200 L300 190 L350 200 L400 180 L450 200 L500 190 L550 200 L600 180 L650 200"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="2"
        />
        
        {/* North America */}
        <path
          d="M100 150 L200 120 L250 150 L200 200 L150 180 Z"
          fill="#f3f4f6"
          stroke="#d1d5db"
          strokeWidth="1"
        />
        
        {/* South America - highlighted */}
        <path
          d="M200 250 L250 220 L280 280 L220 300 L200 280 Z"
          fill={highlightedRegions.includes('south-america') ? '#489CB5' : '#f3f4f6'}
          stroke="#d1d5db"
          strokeWidth="1"
        />
        
        {/* Europe */}
        <path
          d="M350 120 L400 100 L450 120 L420 150 L380 140 Z"
          fill="#f3f4f6"
          stroke="#d1d5db"
          strokeWidth="1"
        />
        
        {/* Africa */}
        <path
          d="M380 200 L420 180 L450 220 L420 280 L380 260 Z"
          fill="#f3f4f6"
          stroke="#d1d5db"
          strokeWidth="1"
        />
        
        {/* Asia */}
        <path
          d="M500 100 L650 80 L700 120 L650 200 L500 180 Z"
          fill="#f3f4f6"
          stroke="#d1d5db"
          strokeWidth="1"
        />
        
        {/* Australia */}
        <path
          d="M600 280 L650 260 L680 300 L630 320 Z"
          fill="#f3f4f6"
          stroke="#d1d5db"
          strokeWidth="1"
        />
      </svg>
      
      {/* Time axis below map */}
      <div className="absolute bottom-0 left-0 right-0 text-center text-xs text-gray-500">
        May Jul August
      </div>
    </div>
  );
};

export default WorldMap;
