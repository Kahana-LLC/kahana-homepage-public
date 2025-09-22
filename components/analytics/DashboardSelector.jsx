import React from 'react';

const DashboardSelector = ({ selectedDashboard, onSelect }) => {
  const dashboards = [
    {
      id: 'internal',
      title: 'Internal Team',
      metrics: [
        { name: 'System Health', icon: '📊' },
        { name: 'Latency', icon: '⏱️' },
        { name: 'Model Costs', icon: '💰' },
        { name: 'Error Rates', icon: '⚠️' },
        { name: 'Feature Flag', icon: '🚩' },
        { name: 'Achievements', icon: '🏆' }
      ]
    },
    {
      id: 'user',
      title: 'User',
      metrics: [
        { name: 'Streak', icon: '∞' },
        { name: 'Focus Minutes', icon: '⏰' },
        { name: 'Commands Learned', icon: '📝' },
        { name: 'Shortcuts Used', icon: '⌨️' }
      ],
      avatar: '🦥'
    },
    {
      id: 'enterprise',
      title: 'Enterprise',
      metrics: [
        { name: 'Adoption', icon: '👥' },
        { name: 'Active Seats', icon: '🪑' },
        { name: 'Command Accuracy', icon: '✅' },
        { name: 'Teams', icon: '👥' },
        { name: 'SSO Status', icon: '🔒' }
      ]
    }
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Choose Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {dashboards.map((dashboard) => (
          <div
            key={dashboard.id}
            onClick={() => onSelect(dashboard.id)}
            className={`bg-white rounded-xl shadow-sm border-2 p-6 cursor-pointer transition-all duration-200 hover:shadow-md ${
              selectedDashboard === dashboard.id
                ? 'border-teal-500 bg-teal-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            {dashboard.avatar && (
              <div className="text-center mb-4">
                <div className="text-4xl">{dashboard.avatar}</div>
              </div>
            )}
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
              {dashboard.title}
            </h3>
            <div className="space-y-2">
              {dashboard.metrics.map((metric, index) => (
                <div key={index} className="flex items-center text-sm text-gray-600">
                  <span className="mr-2">{metric.icon}</span>
                  <span>{metric.name}</span>
                </div>
              ))}
            </div>
            {selectedDashboard === dashboard.id && (
              <div className="mt-4 text-center">
                <span className="inline-block bg-teal-500 text-white px-4 py-2 rounded-md text-sm font-medium">
                  Selected
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardSelector;

