import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const CostByModelChart = ({ height = 200 }) => {
  const canvasRef = useRef(null);
  const instanceRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    if (instanceRef.current) instanceRef.current.destroy();

    const ctx = canvasRef.current.getContext('2d');

    instanceRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['GPT-4', 'GPT-4.3', 'RoRanker'],
        datasets: [
          {
            data: [12.1, 14.3, 18.1],
            backgroundColor: ['#93c5fd', '#60a5fa', '#38bdf8'],
            borderRadius: 6
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
      <div className="text-gray-900 font-semibold mb-3">Cost by Model</div>
      <div className="text-sm text-gray-500 mb-2">44,5 k</div>
      <div style={{ height }}>
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
};

export default CostByModelChart;




