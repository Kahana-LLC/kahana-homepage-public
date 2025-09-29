import React, { useEffect, useRef } from 'react';
import { Chart, ArcElement, Tooltip } from 'chart.js';

Chart.register(ArcElement, Tooltip);

const DonutStat = ({ label = 'API Success', value = 92, color = '#14b8a6', height = 160 }) => {
  const canvasRef = useRef(null);
  const instanceRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    if (instanceRef.current) instanceRef.current.destroy();

    const ctx = canvasRef.current.getContext('2d');
    instanceRef.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Success', 'Fail'],
        datasets: [
          {
            data: [value, Math.max(0, 100 - value)],
            backgroundColor: [color, '#e5e7eb'],
            borderWidth: 0,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: { legend: { display: false }, tooltip: { enabled: false } }
      }
    });

    return () => instanceRef.current && instanceRef.current.destroy();
  }, [value, color]);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
      <div className="text-gray-900 font-semibold mb-3">{label}</div>
      <div className="relative" style={{ height }}>
        <canvas ref={canvasRef} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-3xl font-bold text-gray-900">{value}%</div>
        </div>
      </div>
    </div>
  );
};

export default DonutStat;




