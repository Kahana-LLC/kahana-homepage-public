import React from 'react';

const ClockDial = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex items-center justify-center">
      <div className="text-gray-900 font-semibold absolute top-5 left-5">Command Time-of-Day</div>
      <svg width="180" height="180" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="90" fill="none" stroke="#e5e7eb" strokeWidth="12" />
        <circle cx="100" cy="100" r="80" fill="none" stroke="#6366f1" strokeWidth="10" />
        <line x1="100" y1="100" x2="100" y2="40" stroke="#111827" strokeWidth="4" strokeLinecap="round" />
        <line x1="100" y1="100" x2="140" y2="120" stroke="#111827" strokeWidth="3" strokeLinecap="round" />
        <circle cx="100" cy="100" r="5" fill="#111827" />
        <text x="10" y="105" fontSize="10" fill="#6b7280">12 AM</text>
        <text x="170" y="105" fontSize="10" fill="#6b7280">8 PM</text>
      </svg>
    </div>
  );
};

export default ClockDial;




