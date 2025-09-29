import React from 'react';

const AlertsList = ({ title = 'Alerts', items = [] }) => {
  const entries = items.length ? items : [
    'Cost threshold exceeded',
    'New high-cost command'
  ];
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
      <div className="text-gray-900 font-semibold mb-3">{title}</div>
      <ul className="space-y-2 text-gray-700">
        {entries.map((t, i) => (
          <li key={i} className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-teal-500 mr-2" />
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlertsList;




