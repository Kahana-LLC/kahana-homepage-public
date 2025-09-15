import React from 'react';

const KPIStat = ({ icon, label, value, trend, iconColor = "green" }) => {
  const getIconColorClasses = (color) => {
    switch (color) {
      case 'green':
        return 'bg-green-50 text-green-600';
      case 'purple':
        return 'bg-purple-50 text-purple-600';
      case 'blue':
        return 'bg-blue-50 text-blue-600';
      default:
        return 'bg-green-50 text-green-600';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
      <div className="flex items-center justify-between mb-2">
        <div className={`w-10 h-10 rounded-lg ${getIconColorClasses(iconColor)} flex items-center justify-center`}>
          {icon || (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12l6 6L20 6" />
            </svg>
          )}
        </div>
      </div>
      <div className="text-sm text-gray-500">{label}</div>
      <div className="text-2xl font-semibold text-gray-900">{value}</div>
      {trend && (
        <div className="text-xs text-gray-400 mt-1">{trend}</div>
      )}
    </div>
  );
};

export default KPIStat;


