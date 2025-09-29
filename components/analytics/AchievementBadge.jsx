import React from 'react';

const AchievementBadge = ({
  title,
  subtitle,
  earned = false,
  icon = '🦥',
  actionLabel = earned ? 'Earned' : 'Claim',
  iconComponent = null,
  congratulations = null,
}) => {
  // Theme styling based on badge type
  const getThemeStyling = () => {
    if (!earned) {
      return {
        card: 'bg-gray-50 border-gray-200',
        iconBg: 'bg-gray-100',
        titleColor: 'text-gray-900',
        subtitleColor: 'text-gray-500',
        congratulationsColor: 'text-gray-400',
        buttonStyle: 'bg-gray-200 text-gray-700'
      };
    }

    switch (title) {
      case 'Explorer Sloth':
        return {
          card: 'bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200',
          iconBg: 'bg-gradient-to-br from-orange-100 to-yellow-100 border border-orange-200',
          titleColor: 'text-orange-800',
          subtitleColor: 'text-orange-600',
          congratulationsColor: 'text-orange-500',
          buttonStyle: 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-md hover:shadow-lg'
        };
      case 'Focused Sloth':
        return {
          card: 'bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200',
          iconBg: 'bg-gradient-to-br from-blue-100 to-purple-100 border border-blue-200',
          titleColor: 'text-blue-800',
          subtitleColor: 'text-blue-600',
          congratulationsColor: 'text-blue-500',
          buttonStyle: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md hover:shadow-lg'
        };
      case 'Night Owl Sloth':
        return {
          card: 'bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200',
          iconBg: 'bg-gradient-to-br from-indigo-100 to-purple-100 border border-indigo-200',
          titleColor: 'text-indigo-800',
          subtitleColor: 'text-indigo-600',
          congratulationsColor: 'text-indigo-500',
          buttonStyle: 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md hover:shadow-lg'
        };
      case 'Flow Master':
        return {
          card: 'bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200',
          iconBg: 'bg-gradient-to-br from-purple-100 to-pink-100 border border-purple-200',
          titleColor: 'text-purple-800',
          subtitleColor: 'text-purple-600',
          congratulationsColor: 'text-purple-500',
          buttonStyle: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md hover:shadow-lg'
        };
      case 'Friendly Sharer':
        return {
          card: 'bg-gradient-to-br from-teal-50 to-cyan-50 border-teal-200',
          iconBg: 'bg-gradient-to-br from-teal-100 to-cyan-100 border border-teal-200',
          titleColor: 'text-teal-800',
          subtitleColor: 'text-teal-600',
          congratulationsColor: 'text-teal-500',
          buttonStyle: 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-md hover:shadow-lg'
        };
      case 'Daily Climber':
        return {
          card: 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200',
          iconBg: 'bg-gradient-to-br from-green-100 to-emerald-100 border border-green-200',
          titleColor: 'text-green-800',
          subtitleColor: 'text-green-600',
          congratulationsColor: 'text-green-500',
          buttonStyle: 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-md hover:shadow-lg'
        };
      default:
        return {
          card: 'bg-white border-gray-100',
          iconBg: 'bg-gradient-to-br from-teal-50 to-blue-50',
          titleColor: 'text-gray-900',
          subtitleColor: 'text-gray-500',
          congratulationsColor: 'text-gray-400',
          buttonStyle: 'bg-teal-600 text-white'
        };
    }
  };

  const theme = getThemeStyling();
  
  return (
    <div className={`rounded-2xl border p-5 shadow-sm ${theme.card}`}>
      <div className={`flex items-center justify-center w-full h-44 rounded-2xl mb-4 ${theme.iconBg}`}>
        {iconComponent ? (
          <div className={`relative w-full h-full flex items-center justify-center ${earned ? '' : 'opacity-50 saturate-0'}`}>
            {iconComponent}
          </div>
        ) : (
          <span className={`text-6xl ${earned ? '' : 'opacity-50 saturate-0'}`}>{icon}</span>
        )}
      </div>
      
      <div className={`text-lg font-semibold mb-2 ${theme.titleColor}`}>
        {title}
      </div>
      
      {subtitle && (
        <div className={`text-sm mb-3 ${theme.subtitleColor}`}>
          {subtitle}
        </div>
      )}
      
      {congratulations && (
        <div className={`text-xs mb-3 italic ${theme.congratulationsColor}`}>
          {congratulations}
        </div>
      )}
      
      <div className="mt-3">
        <button className={`px-4 py-2 rounded-md text-sm font-semibold ${theme.buttonStyle}`}>
          {actionLabel}
        </button>
      </div>
    </div>
  );
};

export default AchievementBadge;




