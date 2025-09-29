import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const OrgAdoptionChart = ({ height = 200 }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      // Destroy existing chart
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      
      // Sample data for org adoption trend
      const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Org Adoption',
          data: [15, 25, 35, 45, 55, 65, 70, 75, 80, 82, 85, 88],
          borderColor: '#14b8a6', // Teal color
          backgroundColor: 'rgba(20, 184, 166, 0.1)',
          borderWidth: 3,
          fill: true,
          tension: 0.4,
          pointBackgroundColor: '#14b8a6',
          pointBorderColor: '#14b8a6',
          pointRadius: 4,
          pointHoverRadius: 6
        }]
      };

      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            x: {
              display: true,
              grid: {
                display: false
              },
              ticks: {
                color: '#6b7280',
                font: {
                  size: 12
                }
              }
            },
            y: {
              display: true,
              grid: {
                color: '#f3f4f6',
                drawBorder: false
              },
              ticks: {
                color: '#6b7280',
                font: {
                  size: 12
                },
                callback: function(value) {
                  return value + '%';
                }
              }
            }
          },
          elements: {
            point: {
              hoverBackgroundColor: '#14b8a6'
            }
          }
        }
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
      <div className="text-gray-900 font-semibold mb-3">Org Adoption</div>
      <div style={{ height: `${height}px` }}>
        <canvas ref={chartRef} />
      </div>
    </div>
  );
};

export default OrgAdoptionChart;


