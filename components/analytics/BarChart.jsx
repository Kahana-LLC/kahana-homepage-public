import React, { useEffect, useRef } from 'react';

let ChartModule = null;

const BarChart = ({ labels = [], values = [], color = 'rgba(59,130,246,0.8)', height = 220, yMax, yMin }) => {
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

      if (chartRef.current) chartRef.current.destroy();

      const context = canvasRef.current.getContext('2d');
      chartRef.current = new ChartModule(context, {
        type: 'bar',
        data: {
          labels,
          datasets: [
            {
              data: values,
              backgroundColor: color,
              borderRadius: 6,
              barPercentage: 0.6,
              categoryPercentage: 0.6,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              grid: { color: 'rgba(0,0,0,0.05)' },
              suggestedMax: yMax,
              suggestedMin: yMin,
            },
            x: { grid: { display: false } },
          },
          plugins: {
            legend: { display: false },
            tooltip: { mode: 'index', intersect: false },
          },
        },
      });
    };
    load();
    return () => {
      isMounted = false;
      if (chartRef.current) chartRef.current.destroy();
    };
  }, [labels, values, color, yMax, yMin]);

  return (
    <div style={{ height }}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default BarChart;


