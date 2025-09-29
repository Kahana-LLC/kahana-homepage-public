import React, { useEffect, useRef } from 'react';
import { Chart, ArcElement, Tooltip } from 'chart.js';

Chart.register(ArcElement, Tooltip);

const GaugeChart = ({ value = 75, height = 180 }) => {
  const canvasRef = useRef(null);
  const instanceRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    if (instanceRef.current) instanceRef.current.destroy();

    const ctx = canvasRef.current.getContext('2d');
    const remaining = Math.max(0, 100 - value);

    instanceRef.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Hit', 'Miss'],
        datasets: [
          {
            data: [value, remaining],
            backgroundColor: ['#14b8a6', '#e5e7eb'],
            borderWidth: 0,
            cutout: '80%',
            circumference: 180,
            rotation: 270
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false }
        }
      }
    });

    return () => instanceRef.current && instanceRef.current.destroy();
  }, [value]);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
      <div className="text-gray-900 font-semibold mb-3">Cache Hit rate</div>
      <div className="relative" style={{ height }}>
        <canvas ref={canvasRef} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div>
            <div className="text-3xl font-bold text-gray-900 text-center">{value}%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GaugeChart;




