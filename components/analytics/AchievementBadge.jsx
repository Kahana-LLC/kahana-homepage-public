import React from 'react';

const AchievementBadge = ({
  title,
  subtitle,
  earned = false,
  icon = '🦥',
  actionLabel = earned ? 'Earned' : 'Claim',
}) => {
  return (
    <div className={`rounded-2xl border p-5 shadow-sm ${earned ? 'bg-white border-gray-100' : 'bg-gray-50 border-gray-200'}`}>
      <div className={`flex items-center justify-center w-full h-40 rounded-xl mb-3 ${earned ? 'bg-teal-50' : 'bg-gray-100'}`}>
        <span className={`text-6xl ${earned ? '' : 'opacity-50 saturate-0'}`}>{icon}</span>
      </div>
      <div className="text-lg font-semibold text-gray-900">{title}</div>
      {subtitle && <div className="text-sm text-gray-500">{subtitle}</div>}
      <div className="mt-3">
        <button className={`px-4 py-2 rounded-md text-sm font-semibold ${earned ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-700'}`}>{actionLabel}</button>
      </div>
    </div>
  );
};

export default AchievementBadge;



