import React from 'react';

const PersonaCard = ({ title, attributes = [], icon }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
      <div className="flex items-center mb-3">
        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
          {icon || (
            <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          )}
        </div>
        <h4 className="text-sm font-semibold text-gray-900">{title}</h4>
      </div>
      <ul className="space-y-1">
        {attributes.map((attr, index) => (
          <li key={index} className="text-xs text-gray-600 flex items-center">
            <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
            {attr}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonaCard;
