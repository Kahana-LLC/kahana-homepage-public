import React from 'react';

const DepartmentMap = ({ height = 200 }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
      <div className="text-gray-900 font-semibold mb-3">By Department</div>
      <div style={{ height: `${height}px` }} className="flex items-center justify-center">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 800 400"
          className="max-w-full max-h-full"
        >
          {/* Simplified World Map */}
          {/* North America */}
          <path
            d="M100 80 L200 60 L250 100 L200 140 L150 120 L100 80 Z"
            fill="#e5e7eb"
            stroke="#d1d5db"
            strokeWidth="1"
          />
          
          {/* Europe */}
          <path
            d="M350 60 L450 50 L480 80 L450 110 L380 100 L350 60 Z"
            fill="#e5e7eb"
            stroke="#d1d5db"
            strokeWidth="1"
          />
          
          {/* Asia */}
          <path
            d="M500 50 L650 40 L680 80 L650 120 L520 110 L500 50 Z"
            fill="#e5e7eb"
            stroke="#d1d5db"
            strokeWidth="1"
          />
          
          {/* Africa */}
          <path
            d="M380 140 L450 130 L470 180 L420 200 L380 180 L380 140 Z"
            fill="#e5e7eb"
            stroke="#d1d5db"
            strokeWidth="1"
          />
          
          {/* South America - Highlighted */}
          <path
            d="M200 200 L280 190 L300 250 L250 280 L200 260 L200 200 Z"
            fill="#14b8a6"
            stroke="#0d9488"
            strokeWidth="2"
          />
          
          {/* Australia */}
          <path
            d="M600 250 L680 240 L700 280 L650 300 L600 280 L600 250 Z"
            fill="#e5e7eb"
            stroke="#d1d5db"
            strokeWidth="1"
          />
          
          {/* Legend */}
          <g transform="translate(20, 20)">
            <rect x="0" y="0" width="12" height="12" fill="#14b8a6" />
            <text x="18" y="10" fontSize="12" fill="#374151">Active Department</text>
          </g>
          
          <g transform="translate(20, 40)">
            <rect x="0" y="0" width="12" height="12" fill="#e5e7eb" />
            <text x="18" y="10" fontSize="12" fill="#374151">Other Regions</text>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default DepartmentMap;

