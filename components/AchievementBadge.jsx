import React from 'react';

const AchievementBadge = ({ 
  title, 
  description, 
  isAchieved = false, 
  icon, 
  color = "orange",
  className = "" 
}) => {
  const baseClasses = "relative w-80 h-40 rounded-3xl border-3 transition-all duration-300 transform hover:scale-105 cursor-pointer";
  const achievedClasses = isAchieved 
    ? `bg-gradient-to-b from-${color}-400 to-${color}-600 border-${color}-500 shadow-xl` 
    : "bg-gray-200 border-gray-300 opacity-60";
  
  const iconClasses = isAchieved ? "text-white" : "text-gray-400";
  const textClasses = isAchieved ? "text-white" : "text-gray-500";

  return (
    <div className={`${baseClasses} ${achievedClasses} ${className}`}>
      {/* Badge Shape - Semi-circular top */}
      <div className={`absolute top-0 left-0 right-0 h-20 rounded-t-3xl ${
        isAchieved 
          ? `bg-gradient-to-b from-green-400 to-green-600` 
          : "bg-gray-300"
      }`}>
        {/* Icon Container */}
        <div className="absolute top-3 left-1/2 transform -translate-x-1/2">
          {icon}
        </div>
      </div>
      
      {/* Content Area */}
      <div className="absolute bottom-0 left-0 right-0 h-20 flex flex-col items-center justify-center p-3">
        <h3 className={`font-bold text-xl ${textClasses} text-center mb-1`}>
          {title}
        </h3>
        <p className={`text-sm ${textClasses} text-center leading-tight px-2`}>
          {description}
        </p>
      </div>
      
      {/* Achievement Status Indicator */}
      {isAchieved && (
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-yellow-800" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      )}
    </div>
  );
};

// Predefined Achievement Types
export const ExplorerSlothBadge = ({ isAchieved = false }) => (
  <AchievementBadge
    title="Explorer Sloth"
    description="Congrats! You unlocked new knowledge today. Keep exploring the web smarter."
    isAchieved={isAchieved}
    color="orange"
    icon={
      <div className="relative">
        {/* Sloth Character - Much more detailed and fun */}
        <div className="w-16 h-16 relative">
          {/* Sloth Body */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full shadow-lg"></div>
          <div className="absolute top-2 left-2 w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full"></div>
          
          {/* Eyes */}
          <div className="absolute top-4 left-4 w-2 h-2 bg-black rounded-full animate-pulse"></div>
          <div className="absolute top-4 left-8 w-2 h-2 bg-black rounded-full animate-pulse"></div>
          <div className="absolute top-3 left-3 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute top-3 left-7 w-1 h-1 bg-white rounded-full"></div>
          
          {/* Nose */}
          <div className="absolute top-6 left-6 w-1 h-1 bg-black rounded-full"></div>
          
          {/* Smile */}
          <div className="absolute top-7 left-4 w-4 h-2 border-b-2 border-black rounded-full"></div>
          
          {/* Arms */}
          <div className="absolute top-8 left-1 w-3 h-4 bg-amber-200 rounded-full transform -rotate-12"></div>
          <div className="absolute top-8 right-1 w-3 h-4 bg-amber-200 rounded-full transform rotate-12"></div>
        </div>
        
        {/* Magnifying Glass - Bigger and more detailed */}
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full border-3 border-white shadow-lg">
          <div className="absolute top-2 left-2 w-4 h-4 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full"></div>
          <div className="absolute top-6 left-6 w-2 h-6 bg-blue-600 rounded-full transform rotate-45"></div>
        </div>
        
        {/* Browser Window - More detailed */}
        <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg border-2 border-white shadow-lg">
          <div className="absolute top-1 left-1 flex space-x-1">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
          </div>
          <div className="absolute top-3 left-1 w-4 h-2 bg-green-400 rounded"></div>
        </div>
        
        {/* Sparkles for fun */}
        <div className="absolute -top-4 left-2 w-1 h-1 bg-yellow-300 rounded-full animate-ping"></div>
        <div className="absolute -top-1 -left-4 w-1 h-1 bg-yellow-300 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-2 -right-6 w-1 h-1 bg-yellow-300 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
      </div>
    }
  />
);

export const FocusedSlothBadge = ({ isAchieved = false }) => (
  <AchievementBadge
    title="Focused Sloth"
    description="Zen achieved! You stayed focused without getting lost in the tab jungle."
    isAchieved={isAchieved}
    color="teal"
    icon={
      <div className="relative">
        {/* Meditation Halo - Animated */}
        <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full opacity-80 animate-pulse"></div>
        <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br from-teal-300 to-teal-500 rounded-full opacity-60"></div>
        
        {/* Sloth Character - Meditating */}
        <div className="w-16 h-16 relative">
          {/* Sloth Body */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full shadow-lg"></div>
          <div className="absolute top-2 left-2 w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full"></div>
          
          {/* Closed Eyes - Meditating */}
          <div className="absolute top-4 left-4 w-3 h-1 bg-black rounded-full transform -rotate-12"></div>
          <div className="absolute top-4 left-7 w-3 h-1 bg-black rounded-full transform rotate-12"></div>
          
          {/* Nose */}
          <div className="absolute top-6 left-6 w-1 h-1 bg-black rounded-full"></div>
          
          {/* Peaceful Smile */}
          <div className="absolute top-7 left-4 w-4 h-2 border-b-2 border-black rounded-full"></div>
          
          {/* Meditation Hands */}
          <div className="absolute top-8 left-2 w-3 h-4 bg-amber-200 rounded-full transform -rotate-45"></div>
          <div className="absolute top-8 right-2 w-3 h-4 bg-amber-200 rounded-full transform rotate-45"></div>
          
          {/* Zen Dots */}
          <div className="absolute top-10 left-6 w-1 h-1 bg-teal-500 rounded-full animate-ping"></div>
        </div>
        
        {/* Browser Tabs - More detailed and chaotic */}
        <div className="absolute -top-2 -right-2 flex space-x-1">
          <div className="w-3 h-3 bg-gradient-to-br from-blue-400 to-blue-500 rounded border border-white shadow-sm">
            <div className="absolute top-0.5 left-0.5 flex space-x-0.5">
              <div className="w-0.5 h-0.5 bg-red-500 rounded-full"></div>
              <div className="w-0.5 h-0.5 bg-yellow-500 rounded-full"></div>
              <div className="w-0.5 h-0.5 bg-green-500 rounded-full"></div>
            </div>
          </div>
          <div className="w-3 h-3 bg-gradient-to-br from-blue-400 to-blue-500 rounded border border-white shadow-sm">
            <div className="absolute top-0.5 left-0.5 flex space-x-0.5">
              <div className="w-0.5 h-0.5 bg-red-500 rounded-full"></div>
              <div className="w-0.5 h-0.5 bg-yellow-500 rounded-full"></div>
              <div className="w-0.5 h-0.5 bg-green-500 rounded-full"></div>
            </div>
          </div>
          <div className="w-3 h-3 bg-gradient-to-br from-blue-400 to-blue-500 rounded border border-white shadow-sm">
            <div className="absolute top-0.5 left-0.5 flex space-x-0.5">
              <div className="w-0.5 h-0.5 bg-red-500 rounded-full"></div>
              <div className="w-0.5 h-0.5 bg-yellow-500 rounded-full"></div>
              <div className="w-0.5 h-0.5 bg-green-500 rounded-full"></div>
            </div>
          </div>
        </div>
        
        {/* Floating Zen Elements */}
        <div className="absolute -top-6 left-4 w-1 h-1 bg-teal-300 rounded-full animate-bounce"></div>
        <div className="absolute top-0 -left-6 w-1 h-1 bg-teal-300 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-4 -right-8 w-1 h-1 bg-teal-300 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
      </div>
    }
  />
);

export const NightOwlSlothBadge = ({ isAchieved = false }) => (
  <AchievementBadge
    title="Night Owl Sloth"
    description="Burning the midnight oil? Kahana's got your back."
    isAchieved={isAchieved}
    color="purple"
    icon={
      <div className="relative">
        {/* Night Sky Background - More detailed */}
        <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-blue-900 to-purple-900 rounded-full shadow-lg">
          <div className="absolute top-2 left-2 w-3 h-3 bg-yellow-200 rounded-full animate-pulse"></div>
          <div className="absolute top-4 left-8 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute top-6 left-4 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute top-8 left-6 w-1 h-1 bg-white rounded-full"></div>
        </div>
        
        {/* Sloth Character - Night owl version */}
        <div className="w-16 h-16 relative">
          {/* Sloth Body */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full shadow-lg"></div>
          <div className="absolute top-2 left-2 w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full"></div>
          
          {/* Tired but determined eyes */}
          <div className="absolute top-4 left-4 w-2 h-2 bg-black rounded-full"></div>
          <div className="absolute top-4 left-8 w-2 h-2 bg-black rounded-full"></div>
          <div className="absolute top-3 left-3 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute top-3 left-7 w-1 h-1 bg-white rounded-full"></div>
          
          {/* Nose */}
          <div className="absolute top-6 left-6 w-1 h-1 bg-black rounded-full"></div>
          
          {/* Determined smile */}
          <div className="absolute top-7 left-4 w-4 h-2 border-b-2 border-black rounded-full"></div>
          
          {/* Arms */}
          <div className="absolute top-8 left-1 w-3 h-4 bg-amber-200 rounded-full transform -rotate-12"></div>
          <div className="absolute top-8 right-1 w-3 h-4 bg-amber-200 rounded-full transform rotate-12"></div>
        </div>
        
        {/* Coffee Cup - More detailed */}
        <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-white to-gray-100 rounded-lg border-2 border-gray-300 shadow-lg">
          <div className="absolute -top-1 left-1 w-2 h-2 bg-gray-200 rounded-full"></div>
          <div className="absolute top-1 left-1 w-4 h-3 bg-gradient-to-b from-amber-600 to-amber-800 rounded"></div>
          <div className="absolute -top-2 left-2 w-1 h-1 bg-gray-300 rounded-full"></div>
        </div>
        
        {/* Laptop Glow - More detailed */}
        <div className="absolute -bottom-2 -right-2 w-8 h-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg border-2 border-white shadow-xl">
          <div className="absolute top-1 left-1 flex space-x-1">
            <div className="w-1 h-1 bg-red-500 rounded-full"></div>
            <div className="w-1 h-1 bg-yellow-500 rounded-full"></div>
            <div className="w-1 h-1 bg-green-500 rounded-full"></div>
          </div>
          <div className="absolute top-2 left-1 w-6 h-3 bg-gradient-to-b from-green-400 to-green-600 rounded"></div>
          <div className="absolute top-3 left-2 w-4 h-1 bg-green-300 rounded"></div>
        </div>
        
        {/* Coffee Steam */}
        <div className="absolute -bottom-4 -left-1 w-1 h-2 bg-gray-300 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-5 left-0 w-1 h-2 bg-gray-300 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute -bottom-4 left-1 w-1 h-2 bg-gray-300 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
    }
  />
);

export default AchievementBadge;
