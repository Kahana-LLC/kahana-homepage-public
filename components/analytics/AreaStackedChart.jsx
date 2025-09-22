import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const AreaStackedChart = ({ height = 200 }) => {
  const canvasRef = useRef(null);
  const instanceRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    if (instanceRef.current) instanceRef.current.destroy();

    const ctx = canvasRef.current.getContext('2d');

    instanceRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Timeouts',
            data: [10, 12, 8, 14, 9, 7, 6],
            backgroundColor: 'rgba(59, 130, 246, 0.35)',
            borderColor: '#3b82f6',
            fill: true,
            tension: 0.4
          },
          {
            label: '5xx',
            data: [6, 5, 7, 6, 8, 5, 4],
            backgroundColor: 'rgba(99, 102, 241, 0.35)',
            borderColor: '#6366f1',
            fill: true,
            tension: 0.4
          },
          {
            label: 'Guardrail Blocks',
            data: [4, 3, 5, 4, 6, 4, 3],
            backgroundColor: 'rgba(20, 184, 166, 0.35)',
            borderColor: '#14b8a6',
            fill: true,
            tension: 0.4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { display: false } },
          y: { grid: { color: '#f3f4f6' } }
        }
      }
    });

    return () => instanceRef.current && instanceRef.current.destroy();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
      <div className="text-gray-900 font-semibold mb-3">Errors by Type</div>
      <div style={{ height }}>
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
};

export default AreaStackedChart;



