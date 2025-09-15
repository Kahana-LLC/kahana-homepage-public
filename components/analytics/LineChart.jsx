import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

let ChartModule = null;

const LineChart = ({ labels = [], datasets = [], yMax, yMin, yStepSize, height = 220 }) => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    let isMounted = true;
    const load = async () => {
      if (!ChartModule) {
        const mod = await import('chart.js/auto');
        ChartModule = mod.default || mod;
      }
      if (!isMounted || !canvasRef.current) return;

      if (chartRef.current) {
        chartRef.current.destroy();
      }

      const context = canvasRef.current.getContext('2d');
      chartRef.current = new ChartModule(context, {
        type: 'line',
        data: {
          labels,
          datasets: datasets.map(ds => ({
            ...ds,
            fill: false,
            borderWidth: ds.borderWidth ?? 2,
            tension: ds.tension ?? 0.35,
            pointRadius: ds.pointRadius ?? 0,
          })),
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              grid: { color: 'rgba(0,0,0,0.05)' },
              ticks: { callback: value => `${value}` },
              suggestedMax: yMax,
              suggestedMin: yMin,
            },
            x: {
              grid: { display: false },
            },
          },
          plugins: {
            legend: { display: false },
            tooltip: { mode: 'index', intersect: false },
          },
          interaction: { mode: 'index', intersect: false },
        },
      });
    };

    load();
    return () => {
      isMounted = false;
      if (chartRef.current) chartRef.current.destroy();
    };
  }, [labels, datasets, yMax, yMin, yStepSize]);

  return (
    <div style={{ height }}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default LineChart;


