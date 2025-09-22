import React from 'react';

const Row = ({ label, percent }) => (
  <div className="flex items-center justify-between py-1">
    <span className="text-sm text-gray-700">{label}</span>
    <div className="flex items-center w-40">
      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mr-2">
        <div className="h-2 bg-teal-500" style={{ width: `${percent}%` }} />
      </div>
      <span className="text-sm text-gray-600">{percent}%</span>
    </div>
  </div>
);

const ShortcutAdoptionList = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
      <div className="text-gray-900 font-semibold mb-3">Shortcut Adoption</div>
      <Row label="Search Shortcut" percent={65} />
      <Row label="Clipboard Shortcut" percent={64} />
      <Row label="Tab Shortcut" percent={37} />
      <Row label="Command Shortcut" percent={29} />
    </div>
  );
};

export default ShortcutAdoptionList;



