import React from 'react';

const RetentionCohort = ({ data = [], height = 220 }) => {
  const getIntensityColor = (value, maxValue) => {
    const intensity = value / maxValue;
    const alpha = Math.max(0.1, intensity);
    return `rgba(59, 130, 246, ${alpha})`;
  };

  const maxValue = Math.max(...data.flat());

  return (
    <div style={{ height }} className="overflow-auto">
      <div className="inline-block min-w-full">
        {/* Y-axis labels */}
        <div className="flex">
          <div className="w-16"></div> {/* Empty corner */}
          {data.map((_, rowIndex) => (
            <div key={rowIndex} className="w-8 h-8 text-xs text-gray-600 flex items-center justify-center">
              {40 + rowIndex * 2}%
            </div>
          ))}
        </div>
        
        {/* Data grid */}
        <div className="flex">
          <div className="w-16 h-8 text-xs text-gray-600 flex items-center justify-center">
            Cohort
          </div>
          {data.map((row, rowIndex) => (
            <div key={rowIndex} className="flex">
              {row.map((value, colIndex) => (
                <div
                  key={colIndex}
                  className="w-8 h-8 border border-gray-200"
                  style={{ backgroundColor: getIntensityColor(value, maxValue) }}
                  title={`Cohort ${rowIndex}, Period ${colIndex}: ${value}%`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RetentionCohort;
