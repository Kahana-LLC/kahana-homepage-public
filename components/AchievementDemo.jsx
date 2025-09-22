import React, { useState, useEffect } from 'react';
import AchievementGrid from './AchievementGrid';

const AchievementDemo = () => {
  const [achievements, setAchievements] = useState([
    {
      id: 'explorer-sloth',
      component: ({ isAchieved }) => (
        <div className={`w-64 h-32 rounded-2xl border-2 transition-all duration-300 ${
          isAchieved 
            ? 'bg-gradient-to-b from-orange-400 to-orange-600 border-orange-500 shadow-lg' 
            : 'bg-gray-200 border-gray-300 opacity-60'
        }`}>
          <div className={`absolute top-0 left-0 right-0 h-16 rounded-t-2xl ${
            isAchieved 
              ? 'bg-gradient-to-b from-green-400 to-green-600' 
              : 'bg-gray-300'
          }`}>
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
              <div className="relative">
                <div className="w-8 h-8 relative">
                  <div className="absolute inset-0 bg-amber-200 rounded-full"></div>
                  <div className="absolute top-1 left-1 w-6 h-6 bg-amber-100 rounded-full"></div>
                  <div className="absolute top-2 left-2 w-1 h-1 bg-black rounded-full"></div>
                  <div className="absolute top-2 left-4 w-1 h-1 bg-black rounded-full"></div>
                  <div className="absolute top-3 left-3 w-2 h-1 bg-black rounded-full"></div>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white">
                  <div className="absolute top-1 left-1 w-2 h-2 bg-blue-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 flex flex-col items-center justify-center p-2">
            <h3 className={`font-bold text-lg text-center ${
              isAchieved ? 'text-white' : 'text-gray-500'
            }`}>
              Explorer Sloth
            </h3>
            <p className={`text-xs text-center leading-tight ${
              isAchieved ? 'text-white' : 'text-gray-500'
            }`}>
              Congrats! You unlocked new knowledge today.
            </p>
          </div>
          {isAchieved && (
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-yellow-800" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>
      ),
      isAchieved: false,
      unlockedAt: null,
      progress: 0
    },
    {
      id: 'focused-sloth',
      component: ({ isAchieved }) => (
        <div className={`w-64 h-32 rounded-2xl border-2 transition-all duration-300 ${
          isAchieved 
            ? 'bg-gradient-to-b from-teal-400 to-teal-600 border-teal-500 shadow-lg' 
            : 'bg-gray-200 border-gray-300 opacity-60'
        }`}>
          <div className={`absolute top-0 left-0 right-0 h-16 rounded-t-2xl ${
            isAchieved 
              ? 'bg-gradient-to-b from-teal-400 to-teal-600' 
              : 'bg-gray-300'
          }`}>
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
              <div className="relative">
                <div className="w-8 h-8 relative">
                  <div className="absolute inset-0 bg-amber-200 rounded-full"></div>
                  <div className="absolute top-1 left-1 w-6 h-6 bg-amber-100 rounded-full"></div>
                  <div className="absolute top-2 left-2 w-1 h-1 bg-black rounded-full"></div>
                  <div className="absolute top-2 left-4 w-1 h-1 bg-black rounded-full"></div>
                  <div className="absolute top-3 left-3 w-2 h-1 bg-black rounded-full"></div>
                </div>
                <div className="absolute -top-2 -left-2 w-12 h-12 bg-teal-400 rounded-full opacity-80"></div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 flex flex-col items-center justify-center p-2">
            <h3 className={`font-bold text-lg text-center ${
              isAchieved ? 'text-white' : 'text-gray-500'
            }`}>
              Focused Sloth
            </h3>
            <p className={`text-xs text-center leading-tight ${
              isAchieved ? 'text-white' : 'text-gray-500'
            }`}>
              Zen achieved! You stayed focused.
            </p>
          </div>
          {isAchieved && (
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-yellow-800" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>
      ),
      isAchieved: false,
      unlockedAt: null,
      progress: 0
    }
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAchievements(prev => {
        const newAchievements = [...prev];
        if (currentIndex < newAchievements.length) {
          newAchievements[currentIndex] = {
            ...newAchievements[currentIndex],
            isAchieved: true,
            unlockedAt: new Date().toISOString(),
            progress: 100
          };
        }
        return newAchievements;
      });
      
      setCurrentIndex(prev => prev + 1);
      
      if (currentIndex >= achievements.length - 1) {
        clearInterval(interval);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex, achievements.length]);

  const resetDemo = () => {
    setAchievements(prev => prev.map(achievement => ({
      ...achievement,
      isAchieved: false,
      unlockedAt: null,
      progress: 0
    })));
    setCurrentIndex(0);
  };

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Watch Achievements Unlock
        </h3>
        <p className="text-gray-600 mb-4">
          See how achievements transform from gray to colorful as you complete tasks
        </p>
        <button
          onClick={resetDemo}
          className="bg-kahana-primary text-white px-6 py-2 rounded-lg hover:bg-kahana-primary-600 transition-colors"
        >
          Reset Demo
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        {achievements.map((achievement) => {
          const Component = achievement.component;
          return (
            <div key={achievement.id} className="relative">
              <Component isAchieved={achievement.isAchieved} />
              {!achievement.isAchieved && achievement.progress > 0 && (
                <div className="absolute -bottom-2 left-0 right-0">
                  <div className="bg-gray-200 rounded-full h-1">
                    <div 
                      className="bg-kahana-primary rounded-full h-1 transition-all duration-300"
                      style={{ width: `${achievement.progress}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 text-center mt-1">
                    {achievement.progress}% complete
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementDemo;
