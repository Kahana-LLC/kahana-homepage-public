import React, { useEffect, useRef } from 'react';

let ChartModule = null;

const PieChart = ({ data = [], height = 220 }) => {
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
        type: 'pie',
        data: {
          labels: data.map(item => item.label),
          datasets: [{
            data: data.map(item => item.value),
            backgroundColor: data.map(item => item.color || '#3b82f6'),
            borderWidth: 0,
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'right',
              labels: {
                padding: 20,
                usePointStyle: true,
                font: {
                  size: 12,
                },
              },
            },
            tooltip: {
              callbacks: {
                label: function(context) {
                  const label = context.label || '';
                  const value = context.parsed;
                  return `${label}: ${value}%`;
                }
              }
            },
          },
        },
      });
    };

    load();
    return () => {
      isMounted = false;
      if (chartRef.current) chartRef.current.destroy();
    };
  }, [data]);

  return (
    <div style={{ height }}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default PieChart;
