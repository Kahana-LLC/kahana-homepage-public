import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const ScatterChart = ({ title = 'Latency vs. Payload Size', height = 200 }) => {
  const ref = useRef(null);
  const inst = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    if (inst.current) inst.current.destroy();
    const ctx = ref.current.getContext('2d');
    const points = Array.from({ length: 18 }, (_, i) => ({ x: 0.3 + i * 0.15, y: 0.4 + Math.random() * 0.6 }));
    inst.current = new Chart(ctx, {
      type: 'scatter',
      data: {
        datasets: [{
          label: 'Requests',
          data: points,
          backgroundColor: '#14b8a6'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { title: { display: true, text: 'Latency (mb)' }, grid: { color: '#f3f4f6' } },
          y: { title: { display: true, text: 'Lob/sec (m)' }, grid: { color: '#f3f4f6' } }
        }
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

export default ScatterChart;




