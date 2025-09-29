import React, { useState } from 'react';

const DepartmentMap = ({ height = 200 }) => {
  const [hoveredDept, setHoveredDept] = useState(null);

  // More realistic department representations
  const departments = [
    {
      id: 'engineering',
      name: 'Engineering',
      path: 'M120 80 Q150 60 180 80 Q200 100 190 130 Q170 150 140 140 Q110 120 120 80 Z',
      percentage: 42,
      color: '#06b6d4',
      darkColor: '#0891b2'
    },
    {
      id: 'marketing',
      name: 'Marketing',
      path: 'M320 70 Q350 50 370 80 Q380 110 360 130 Q340 140 320 120 Q310 90 320 70 Z',
      percentage: 25,
      color: '#06b6d4',
      darkColor: '#0891b2'
    },
    {
      id: 'sales',
      name: 'Sales',
      path: 'M450 50 Q500 40 550 70 Q600 90 620 120 Q610 160 580 170 Q530 180 480 170 Q450 140 450 50 Z',
      percentage: 18,
      color: '#06b6d4',
      darkColor: '#0891b2'
    },
    {
      id: 'support',
      name: 'Support',
      path: 'M220 200 Q280 190 300 220 Q310 250 290 280 Q250 290 220 260 Q200 230 220 200 Z',
      percentage: 10,
      color: '#06b6d4',
      darkColor: '#0891b2'
    },
    {
      id: 'hr',
      name: 'HR',
      path: 'M550 250 Q580 230 590 260 Q585 290 560 300 Q540 290 545 260 Q550 240 550 250 Z',
      percentage: 5,
      color: '#06b6d4',
      darkColor: '#0891b2'
    }
  ];

  // Set the active department (first one)
  const activeDept = departments[0];
  const inactiveDepts = departments.slice(1);

  return (
    <div className="relative h-full">
      {/* Background with subtle gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg"></div>
      
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 800 400"
        className="w-full h-full relative z-10"
      >
        {/* Definitions for effects */}
        <defs>
          {/* Gradient for active department */}
          <linearGradient id="active-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#0d9488', stopOpacity: 0.9 }} />
            <stop offset="100%" style={{ stopColor: '#0891b2', stopOpacity: 0.8 }} />
          </linearGradient>
          
          {/* Gradient for inactive departments */}
          <linearGradient id="inactive-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#f1f5f9', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#e2e8f0', stopOpacity: 0.8 }} />
          </linearGradient>
          
          {/* Inner glow for active dept */}
          <radialGradient id="active-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.6 }} />
            <stop offset="70%" style={{ stopColor: '#06b6d4', stopOpacity: 0.4 }} />
            <stop offset="100%" style={{ stopColor: '#06b6d4', stopOpacity: 0 }} />
          </radialGradient>
        </defs>

        {/* Grid pattern for professional look */}
        <defs>
          <pattern id="dept-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="0.5" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dept-grid)"/>

        {/* Department shapes */}
        <g>
          {/* Active department (highlighted) */}
          <g>
            {/* Drop shadow */}
            <path
              d={activeDept.path}
              fill="#374151"
              opacity="0.15"
              transform="translate(3, 3)"
            />
            
            {/* Main shape */}
            <path
              d={activeDept.path}
              fill="url(#active-gradient)"
              stroke="#0891b2"
              strokeWidth="3"
              className="cursor-pointer transition-all duration-300"
              onMouseEnter={() => setHoveredDept(activeDept.id)}
              onMouseLeave={() => setHoveredDept(null)}
            />
            
            {/* Inner glow */}
            <path
              d={activeDept.path}
              fill="url(#active-glow)"
              opacity="0.6"
            />
            
            {/* Label */}
            <text
              x={activeDept.id === 'engineering' ? '155' : '345'}
              y={activeDept.id === 'engineering' ? '115' : '100'}
              fontSize="14"
              fontWeight="700"
              fill="#ffffff"
              textAnchor="middle"
              className="drop-shadow-lg"
            >
              {activeDept.name}
              {hoveredDept === activeDept.id && (
                <tspan x={activeDept.id === 'engineering' ? '155' : '345'} dy="18" fontSize="12">
                  ({activeDept.percentage}%)
                </tspan>
              )}
            </text>
          </g>

          {/* Inactive departments */}
          {inactiveDepts.map((dept, index) => {
            const isHovered = hoveredDept === dept.id;
            
            return (
              <g key={dept.id}>
                {/* Drop shadow */}
                <path
                  d={dept.path}
                  fill="#374151"
                  opacity="0.05"
                  transform="translate(1, 1)"
                />
                
                {/* Main shape */}
                <path
                  d={dept.path}
                  fill={isHovered ? '#f8fafc' : 'url(#inactive-gradient)'}
                  stroke={isHovered ? '#cbd5e1' : '#e2e8f0'}
                  strokeWidth={isHovered ? '2' : '1.5'}
                  className="cursor-pointer transition-all duration-300 hover:filter hover:drop-shadow-md"
                  onMouseEnter={() => setHoveredDept(dept.id)}
                  onMouseLeave={() => setHoveredDept(null)}
                />
                
                {/* Label */}
                {(isHovered || activeDept.id === dept.id) && (
                  <text
                    x={dept.id === 'marketing' ? '345' : 
                       dept.id === 'sales' ? '535' :
                       dept.id === 'support' ? '260' : '570'}
                    y={dept.id === 'marketing' ? '85' :
                       dept.id === 'sales' ? '95' :
                       dept.id === 'support' ? '225' : '285'}
                    fontSize="12"
                    fontWeight="600"
                    fill={isHovered ? '#374151' : '#6b7280'}
                    textAnchor="middle"
                    className="drop-shadow-sm"
                  >
                    {dept.name}
                    {isHovered && (
                      <tspan 
                        x={dept.id === 'marketing' ? '345' : 
                           dept.id === 'sales' ? '535' :
                           dept.id === 'support' ? '260' : '570'} 
                        dy="16" 
                        fontSize="10"
                      >
                        ({dept.percentage}%)
                      </tspan>
                    )}
                  </text>
                )}
              </g>
            );
          })}
        </g>
      </svg>
      
      {/* Enhanced legend */}
      <div className="absolute bottom-3 left-3">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-white/20">
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded shadow-sm" style={{ 
                background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)'
              }}></div>
              <span className="font-semibold text-gray-700">Active Department</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded border-2 border-gray-200 shadow-sm bg-gradient-to-br from-gray-100 to-gray-200"></div>
              <span className="text-gray-600">Other Regions</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentMap;