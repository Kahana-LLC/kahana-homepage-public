import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const TopCommandsByTeam = ({ height = 200 }) => {
  const barChartRef = useRef(null);
  const donutChartRef = useRef(null);
  const barChartInstance = useRef(null);
  const donutChartInstance = useRef(null);

  useEffect(() => {
    // Bar Chart
    if (barChartRef.current) {
      if (barChartInstance.current) {
        barChartInstance.current.destroy();
      }

      const barCtx = barChartRef.current.getContext('2d');
      
      const barData = {
        labels: ['git push', 'npm install', 'docker run', 'kubectl get'],
        datasets: [{
          data: [85, 72, 68, 55],
          backgroundColor: '#14b8a6', // Teal color
          borderColor: '#14b8a6',
          borderWidth: 0,
          borderRadius: 4
        }]
      };

      barChartInstance.current = new Chart(barCtx, {
        type: 'bar',
        data: barData,
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
                  size: 11
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
                  size: 11
                },
                callback: function(value) {
                  return value + '%';
                }
              }
            }
          }
        }
      });
    }

    // Donut Chart
    if (donutChartRef.current) {
      if (donutChartInstance.current) {
        donutChartInstance.current.destroy();
      }

      const donutCtx = donutChartRef.current.getContext('2d');
      
      const donutData = {
        labels: ['Success', 'Failed'],
        datasets: [{
          data: [72, 28],
          backgroundColor: ['#14b8a6', '#e5e7eb'], // Teal and light gray
          borderWidth: 0
        }]
      };

      donutChartInstance.current = new Chart(donutCtx, {
        type: 'doughnut',
        data: donutData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          cutout: '70%',
          elements: {
            arc: {
              borderWidth: 0
            }
          }
        }
      });
    }

    return () => {
      if (barChartInstance.current) {
        barChartInstance.current.destroy();
      }
      if (donutChartInstance.current) {
        donutChartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
      <div className="text-gray-900 font-semibold mb-3">Top Commands by Team</div>
      <div className="grid grid-cols-2 gap-4">
        {/* Bar Chart */}
        <div>
          <div style={{ height: `${height}px` }}>
            <canvas ref={barChartRef} />
          </div>
        </div>
        
        {/* Donut Chart */}
        <div className="flex items-center justify-center">
          <div style={{ height: `${height}px`, width: `${height}px` }}>
            <canvas ref={donutChartRef} />
          </div>
          <div className="absolute text-center">
            <div className="text-2xl font-bold text-gray-900">72%</div>
            <div className="text-sm text-gray-500">Success Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCommandsByTeam;


