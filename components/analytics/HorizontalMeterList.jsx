import React from 'react';

const Meter = ({ label, percent, color = 'bg-teal-500' }) => (
  <div className="mb-2">
    <div className="text-sm text-gray-600 mb-1">{label}</div>
    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
      <div className={`h-2 ${color}`} style={{ width: `${percent}%` }} />
    </div>
  </div>
);

const HorizontalMeterList = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
      <div className="text-gray-900 font-semibold mb-3">Command Mastery</div>
      <Meter label="Search" percent={90} />
      <Meter label="Summarize" percent={80} color="bg-sky-500" />
      <Meter label="Automate" percent={60} color="bg-indigo-500" />
      <Meter label="Bookmark" percent={95} color="bg-cyan-500" />
    </div>
  );
};

export default HorizontalMeterList;




