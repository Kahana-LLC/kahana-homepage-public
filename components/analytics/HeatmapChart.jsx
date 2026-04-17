import React from 'react';

/** @param {{ r: number; g: number; b: number }} rgb */
const HeatmapChart = ({
  data = [],
  rowLabels = [],
  colLabels = [],
  height = 220,
  rgb = { r: 72, g: 156, b: 181 },
}) => {
  const flat = data.flat();
  const maxValue = Math.max(1, ...flat);

  const getIntensityColor = (value) => {
    const intensity = value / maxValue;
    const alpha = Math.max(0.12, intensity * 0.95);
    return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
  };

  return (
    <div style={{ height }} className="overflow-auto">
      <div className="inline-block min-w-full">
        <div className="flex">
          <div className="w-8" />
          {colLabels.map((label, index) => (
            <div
              key={index}
              className="flex h-6 w-8 items-center justify-center text-center text-xs text-oasis-green-800/75"
            >
              {label}
            </div>
          ))}
        </div>

        {rowLabels.map((rowLabel, rowIndex) => (
          <div key={rowIndex} className="flex">
            <div className="flex h-8 w-8 items-center justify-center text-xs text-oasis-green-800/75">{rowLabel}</div>

            {colLabels.map((_, colIndex) => {
              const value = data[rowIndex]?.[colIndex] || 0;
              return (
                <div
                  key={colIndex}
                  className="h-8 w-8 border border-oasis-green-800/12"
                  style={{ backgroundColor: getIntensityColor(value) }}
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
