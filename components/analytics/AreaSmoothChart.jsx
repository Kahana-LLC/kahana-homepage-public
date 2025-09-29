import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const AreaSmoothChart = ({ title = 'Latency Percentiles (ms)', height = 180 }) => {
  const ref = useRef(null);
  const inst = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    if (inst.current) inst.current.destroy();
    const ctx = ref.current.getContext('2d');
    inst.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['8 s', '15 s', '23 s', '35 s', '30 m'],
        datasets: [
          { data: [120, 160, 140, 170, 200], borderColor: '#60a5fa', backgroundColor: 'rgba(96,165,250,0.2)', fill: true, tension: 0.5 },
          { data: [80, 100, 110, 120, 140], borderColor: '#14b8a6', backgroundColor: 'rgba(20,184,166,0.15)', fill: true, tension: 0.5 }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { x: { grid: { display: false } }, y: { grid: { color: '#f3f4f6' } } }
      }
    });
    return () => inst.current && inst.current.destroy();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
      <div className="text-gray-900 font-semibold mb-3">{title}</div>
      <div style={{ height }}>
        <canvas ref={ref} />
      </div>
    </div>
  );
};

export default AreaSmoothChart;




