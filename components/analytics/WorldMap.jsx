import React, { useState } from 'react';

const WorldMap = ({ highlightedRegions = [], height = 220 }) => {
  const [hoveredRegion, setHoveredRegion] = useState(null);

  const regions = [
    {
      id: 'north-america',
      name: 'North America',
      path: 'M50 80 Q80 50 120 60 Q160 70 180 90 Q190 120 170 140 Q150 160 120 150 Q90 140 70 120 Q50 100 50 80 Z',
      percentage: 35
    },
    {
      id: 'south-america',
      name: 'South America',
      path: 'M150 180 Q180 160 200 190 Q210 220 190 250 Q170 280 140 270 Q120 250 130 220 Q140 190 150 180 Z',
      percentage: 15
    },
    {
      id: 'europe',
      name: 'Europe',
      path: 'M320 70 Q350 50 370 80 Q380 110 360 130 Q340 140 320 120 Q310 90 320 70 Z',
      percentage: 28
    },
    {
      id: 'africa',
      name: 'Africa',
      path: 'M340 120 Q370 110 390 140 Q400 170 385 200 Q365 220 340 210 Q320 190 330 160 Q335 140 340 120 Z',
      percentage: 12
    },
    {
      id: 'asia',
      name: 'Asia',
      path: 'M450 50 Q500 40 550 70 Q600 90 620 120 Q610 160 580 170 Q530 180 480 170 Q450 140 450 50 Z',
      percentage: 8
    },
    {
      id: 'australia',
      name: 'Australia',
      path: 'M550 250 Q580 230 590 260 Q585 290 560 300 Q540 290 545 260 Q550 240 550 250 Z',
      percentage: 2
    }
  ];

  return (
    <div style={{ height }} className="relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg overflow-hidden">
      {/* Ocean background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200"></div>
      
      <svg viewBox="0 0 800 400" className="w-full h-full relative z-10">
        {/* Coastline details */}
        <defs>
          <pattern id="waves" patternUnits="userSpaceOnUse" width="40" height="20">
            <path d="M0,10 Q10,0 20,10 T40,10" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.3"/>
          </pattern>
          <linearGradient id="highlight-glow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: '#0891b2', stopOpacity: 0.6 }} />
          </linearGradient>
        </defs>

        {/* Continents */}
        {regions.map((region) => {
          const isHighlighted = highlightedRegions.includes(region.id);
          const isHovered = hoveredRegion === region.id;
          
          return (
            <g key={region.id}>
              {/* Drop shadow */}
              <path
                d={region.path}
                fill="#374151"
                opacity="0.1"
                transform="translate(2, 2)"
              />
              
              {/* Main continent */}
              <path
                d={region.path}
                fill={isHighlighted ? '#06b6d4' : isHovered ? '#3b82f6' : '#f8fafc'}
                stroke={isHighlighted ? '#0891b2' : '#e2e8f0'}
                strokeWidth={isHighlighted ? '2.5' : '1.5'}
                className="cursor-pointer transition-all duration-300 hover:filter hover:drop-shadow-lg"
                onMouseEnter={() => setHoveredRegion(region.id)}
                onMouseLeave={() => setHoveredRegion(null)}
              />
              
              {/* Glow effect for highlighted regions */}
              {isHighlighted && (
                <path
                  d={region.path}
                  fill="url(#highlight-glow)"
                  opacity="0.3"
                />
              )}
              
              {/* Region labels */}
              {(isHighlighted || isHovered) && (
                <text
                  x={region.id === 'south-america' ? '150' : 
                     region.id === 'north-america' ? '100' :
                     region.id === 'europe' ? '345' :
                     region.id === 'africa' ? '365' :
                     region.id === 'asia' ? '535' : '560'}
                  y={region.id === 'south-america' ? '200' : 
                     region.id === 'north-america' ? '110' :
                     region.id === 'europe' ? '85' :
                     region.id === 'africa' ? '165' :
                     region.id === 'asia' ? '95' : '285'}
                  fontSize="12"
                  fontWeight="600"
                  fill={isHighlighted ? '#ffffff' : '#374151'}
                  textAnchor="middle"
                  className="drop-shadow-sm"
                >
                  {region.name} ({region.percentage}%)
                </text>
              )}
            </g>
          );
        })}
        
        {/* Grid lines */}
        <defs>
          <pattern id="grid" width="40" height="20" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="0.5" opacity="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" opacity="0.3"/>
      </svg>
      
      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm">
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded" style={{ backgroundColor: '#06b6d4' }}></div>
            <span className="font-medium">Active</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded" style={{ backgroundColor: '#f8fafc' }}></div>
            <span>Inactive</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldMap;