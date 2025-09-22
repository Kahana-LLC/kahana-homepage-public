import React from 'react';

const StreakCalendar = ({ weeks = 4 }) => {
  const days = Array.from({ length: weeks * 7 }, (_, i) => i);
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
      <div className="text-gray-900 font-semibold mb-3">Streak</div>
      <div className="grid grid-cols-7 gap-2">
        {days.map((d, i) => (
          <div
            key={i}
            className={`h-8 rounded ${i % 5 === 0 ? 'bg-teal-400' : 'bg-teal-100'} `}
          />
        ))}
      </div>
      <div className="mt-3 flex space-x-2">
        <span className="text-xl">🦥</span>
        <span className="text-xl">⭐</span>
        <span className="text-xl">🏅</span>
      </div>
    </div>
  );
};

export default StreakCalendar;



