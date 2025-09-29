import React from 'react';

const LevelsTrack = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
      <div className="text-gray-900 font-semibold mb-3">Levels</div>
      <div className="flex items-center space-x-3">
        <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">1</span>
        <div className="h-2 bg-teal-500 rounded flex-1" />
        <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">2</span>
        <div className="h-2 bg-teal-500 rounded flex-1" />
        <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">3</span>
        <div className="h-2 bg-teal-300 rounded flex-1" />
        <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">4</span>
        <span className="text-xl">⭐</span>
      </div>
      <div className="text-sm text-gray-500 mt-2">Productivity Score</div>
    </div>
  );
};

export default LevelsTrack;




