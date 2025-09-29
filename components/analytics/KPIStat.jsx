import React from 'react';

const KPIStat = ({ icon, label, value, trend, iconColor = "green" }) => {
  const getIconColorClasses = (color) => {
    switch (color) {
      case 'green':
        return 'bg-green-100 text-green-600';
      case 'purple':
        return 'bg-purple-100 text-purple-600';
      case 'blue':
        return 'bg-blue-100 text-blue-600';
      default:
        return 'bg-green-100 text-green-600';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-3">
        <div className={`w-12 h-12 rounded-xl ${getIconColorClasses(iconColor)} flex items-center justify-center`}>
          {icon || (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12l6 6L20 6" />
            </svg>
          )}
        </div>
      </div>
      <div className="text-sm font-medium text-gray-600 mb-1">{label}</div>
      <div className="text-3xl font-bold text-gray-900 mb-1">{value}</div>
      {trend && (
        <div className="text-xs text-gray-500">{trend}</div>
      )}
    </div>
  );
};

export default KPIStat;


