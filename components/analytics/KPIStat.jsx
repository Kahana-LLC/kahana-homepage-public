import React from 'react';

const iconColorMap = {
  green: 'bg-brand-link/15 text-oasis-blue-600',
  purple: 'bg-oasis-green-600/12 text-oasis-green-800',
  blue: 'bg-oasis-green-800/10 text-oasis-green-800',
  teal: 'bg-brand-link/20 text-oasis-green-800',
  olive: 'bg-oasis-green-600/15 text-oasis-green-800',
};

const KPIStat = ({ icon, label, value, trend, iconColor = 'teal' }) => {
  const chipClass = iconColorMap[iconColor] ?? iconColorMap.teal;

  return (
    <div className="rounded-xl border border-oasis-green-800/10 bg-white p-5 shadow-sm">
      <div className="mb-2 flex items-center justify-between">
        <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${chipClass}`}>
          {icon || (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12l6 6L20 6" />
            </svg>
          )}
        </div>
      </div>
      <div className="text-sm text-oasis-green-800/70">{label}</div>
      <div className="text-2xl font-semibold text-oasis-green-800">{value}</div>
      {trend && <div className="mt-1 text-xs text-oasis-green-800/60">{trend}</div>}
    </div>
  );
};

export default KPIStat;
