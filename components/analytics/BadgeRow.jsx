import React from 'react';

const BadgeRow = ({ badges = ['🦥', '🦥', '🦥', '👍'], title }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
      {title && <div className="text-gray-900 font-semibold mb-3">{title}</div>}
      <div className="flex items-center space-x-3">
        {badges.map((b, i) => (
          <div key={i} className="w-9 h-9 rounded-full bg-teal-50 flex items-center justify-center text-lg">
            <span>{b}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BadgeRow;



