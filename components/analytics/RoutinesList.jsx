import React from 'react';

const Item = ({ icon, label }) => (
  <div className="flex items-center justify-between py-2">
    <div className="flex items-center space-x-3">
      <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-lg">{icon}</div>
      <span className="text-gray-700">{label}</span>
    </div>
    <span className="text-gray-400">›</span>
  </div>
);

const RoutinesList = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
      <div className="text-gray-900 font-semibold mb-3">Top Routines</div>
      <Item icon="🦥" label="Morning catch-up" />
      <Item icon="📧" label="Daily review" />
      <Item icon="📚" label="Learning courses" />
    </div>
  );
};

export default RoutinesList;




