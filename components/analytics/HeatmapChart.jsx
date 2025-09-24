import React from 'react';

const HeatmapChart = ({ data = [], rowLabels = [], colLabels = [], height = 220 }) => {
  const getIntensityColor = (value, maxValue) => {
    const intensity = value / maxValue;
    const alpha = Math.max(0.1, intensity);
    return `rgba(59, 130, 246, ${alpha})`;
  };

  const maxValue = Math.max(...data.flat());

  return (
    <div style={{ height }} className="overflow-auto">
      <div className="inline-block min-w-full">
        {/* Column headers */}
        <div className="flex">
          <div className="w-8"></div> {/* Empty corner */}
          {colLabels.map((label, index) => (
            <div key={index} className="w-8 h-6 text-xs text-center text-gray-600 flex items-center justify-center">
              {label}
            </div>
          ))}
        </div>
        
        {/* Rows */}
        {rowLabels.map((rowLabel, rowIndex) => (
          <div key={rowIndex} className="flex">
            {/* Row label */}
            <div className="w-8 h-8 text-xs text-gray-600 flex items-center justify-center">
              {rowLabel}
            </div>
            
            {/* Data cells */}
            {colLabels.map((_, colIndex) => {
              const value = data[rowIndex]?.[colIndex] || 0;
              return (
                <div
                  key={colIndex}
                  className="w-8 h-8 border border-gray-200"
                  style={{ backgroundColor: getIntensityColor(value, maxValue) }}
                  title={`${rowLabel} ${colLabels[colIndex]}: ${value}`}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeatmapChart;
