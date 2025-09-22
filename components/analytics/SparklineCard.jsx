import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const SparklineCard = ({ title, labels = [], values = [], height = 120, color = '#60a5fa', fill = true }) => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    if (chartRef.current) chartRef.current.destroy();
    const ctx = canvasRef.current.getContext('2d');
    chartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels.length ? labels : Array(values.length).fill(''),
        datasets: [{
          data: values,
          borderColor: color,
          backgroundColor: fill ? `${color}33` : 'transparent',
          pointRadius: 0,
          tension: 0.45,
          fill: fill
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: { enabled: false } },
        scales: { x: { display: false }, y: { display: false } }
      }
    });
    return () => chartRef.current && chartRef.current.destroy();
  }, [labels, values, color, fill]);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
      {title && <div className="text-gray-900 font-semibold mb-3">{title}</div>}
      <div style={{ height }}>
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
};

export default SparklineCard;



