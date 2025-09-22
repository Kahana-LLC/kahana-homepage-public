import React, { useState } from 'react';
import AchievementBadge, { 
  ExplorerSlothBadge, 
  FocusedSlothBadge, 
  NightOwlSlothBadge 
} from './AchievementBadge';

const AchievementGrid = ({ achievements = [], showDemo = false }) => {
  // Demo achievements data - in a real app, this would come from props or API
  const demoAchievements = [
    {
      id: 'explorer-sloth',
      component: ExplorerSlothBadge,
      isAchieved: true,
      unlockedAt: '2024-01-15',
      progress: 100
    },
    {
      id: 'focused-sloth',
      component: FocusedSlothBadge,
      isAchieved: false,
      unlockedAt: null,
      progress: 75
    },
    {
      id: 'night-owl-sloth',
      component: NightOwlSlothBadge,
      isAchieved: false,
      unlockedAt: null,
      progress: 30
    },
    {
      id: 'team-player',
      component: ({ isAchieved }) => (
        <AchievementBadge
          title="Team Player"
          description="Collaborated on 5+ team projects this month"
          isAchieved={isAchieved}
          color="green"
          icon={
            <div className="relative">
              {/* Sloth Character */}
              <div className="w-16 h-16 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full shadow-lg"></div>
                <div className="absolute top-2 left-2 w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full"></div>
                
                {/* Happy eyes */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-black rounded-full"></div>
                <div className="absolute top-4 left-8 w-2 h-2 bg-black rounded-full"></div>
                <div className="absolute top-3 left-3 w-1 h-1 bg-white rounded-full"></div>
                <div className="absolute top-3 left-7 w-1 h-1 bg-white rounded-full"></div>
                
                {/* Nose */}
                <div className="absolute top-6 left-6 w-1 h-1 bg-black rounded-full"></div>
                
                {/* Big smile */}
                <div className="absolute top-7 left-4 w-4 h-2 border-b-2 border-black rounded-full"></div>
                
                {/* Arms */}
                <div className="absolute top-8 left-1 w-3 h-4 bg-amber-200 rounded-full transform -rotate-12"></div>
                <div className="absolute top-8 right-1 w-3 h-4 bg-amber-200 rounded-full transform rotate-12"></div>
              </div>
              
              {/* Team icon */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              
              {/* Collaboration lines */}
              <div className="absolute -top-4 left-2 w-1 h-1 bg-green-300 rounded-full animate-ping"></div>
              <div className="absolute top-0 -left-4 w-1 h-1 bg-green-300 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute top-2 -right-6 w-1 h-1 bg-green-300 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
            </div>
          }
        />
      ),
      isAchieved: true,
      unlockedAt: '2024-01-20',
      progress: 100
    },
    {
      id: 'early-bird',
      component: ({ isAchieved }) => (
        <AchievementBadge
          title="Early Bird"
          description="Completed your first task before 9 AM"
          isAchieved={isAchieved}
          color="yellow"
          icon={
            <div className="relative">
              {/* Sun Background */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full opacity-80 animate-pulse">
                <div className="absolute top-1 left-1 w-18 h-18 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full"></div>
                {/* Sun rays */}
                <div className="absolute -top-2 left-8 w-1 h-4 bg-yellow-200 rounded-full transform rotate-45"></div>
                <div className="absolute top-8 -left-2 w-4 h-1 bg-yellow-200 rounded-full transform rotate-45"></div>
                <div className="absolute -top-2 left-4 w-1 h-4 bg-yellow-200 rounded-full transform -rotate-45"></div>
                <div className="absolute top-8 -right-2 w-4 h-1 bg-yellow-200 rounded-full transform -rotate-45"></div>
              </div>
              
              {/* Sloth Character */}
              <div className="w-16 h-16 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full shadow-lg"></div>
                <div className="absolute top-2 left-2 w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full"></div>
                
                {/* Alert eyes */}
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
              
              {/* Morning elements */}
              <div className="absolute -top-6 left-2 w-1 h-1 bg-yellow-300 rounded-full animate-bounce"></div>
              <div className="absolute top-0 -left-6 w-1 h-1 bg-yellow-300 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute top-4 -right-8 w-1 h-1 bg-yellow-300 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
            </div>
          }
        />
      ),
      isAchieved: false,
      unlockedAt: null,
      progress: 0
    },
    {
      id: 'streak-master',
      component: ({ isAchieved }) => (
        <AchievementBadge
          title="Streak Master"
          description="Maintained a 7-day productivity streak"
          isAchieved={isAchieved}
          color="red"
          icon={
            <div className="relative">
              {/* Sloth Character */}
              <div className="w-16 h-16 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full shadow-lg"></div>
                <div className="absolute top-2 left-2 w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full"></div>
                
                {/* Determined eyes */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-black rounded-full"></div>
                <div className="absolute top-4 left-8 w-2 h-2 bg-black rounded-full"></div>
                <div className="absolute top-3 left-3 w-1 h-1 bg-white rounded-full"></div>
                <div className="absolute top-3 left-7 w-1 h-1 bg-white rounded-full"></div>
                
                {/* Nose */}
                <div className="absolute top-6 left-6 w-1 h-1 bg-black rounded-full"></div>
                
                {/* Confident smile */}
                <div className="absolute top-7 left-4 w-4 h-2 border-b-2 border-black rounded-full"></div>
                
                {/* Arms */}
                <div className="absolute top-8 left-1 w-3 h-4 bg-amber-200 rounded-full transform -rotate-12"></div>
                <div className="absolute top-8 right-1 w-3 h-4 bg-amber-200 rounded-full transform rotate-12"></div>
              </div>
              
              {/* Streak Counter */}
              <div className="absolute -top-2 -right-2 flex space-x-1">
                {[1,2,3,4,5,6,7].map((day) => (
                  <div key={day} className={`w-2 h-4 rounded-full shadow-sm ${
                    day <= 4 ? 'bg-gradient-to-b from-red-500 to-red-600' : 'bg-gray-300'
                  }`}></div>
                ))}
              </div>
              
              {/* Fire effect for active streak */}
              <div className="absolute -top-4 left-2 w-1 h-1 bg-red-400 rounded-full animate-ping"></div>
              <div className="absolute top-0 -left-4 w-1 h-1 bg-red-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute top-2 -right-6 w-1 h-1 bg-red-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
            </div>
          }
        />
      ),
      isAchieved: false,
      unlockedAt: null,
      progress: 60
    }
  ];

  const displayAchievements = showDemo ? demoAchievements : achievements;
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const achievedCount = displayAchievements.filter(a => a.isAchieved).length;
  const totalCount = displayAchievements.length;

  return (
    <div className="w-full">
      {/* Achievement Stats */}
      <div className="mb-8 text-center">
        <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-kahana-primary">{achievedCount}</div>
              <div className="text-sm text-gray-600">Achieved</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-400">{totalCount - achievedCount}</div>
              <div className="text-sm text-gray-600">Locked</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-kahana-secondary">{totalCount}</div>
              <div className="text-sm text-gray-600">Total</div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievement Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
        {displayAchievements.map((achievement) => {
          const Component = achievement.component;
          return (
            <div 
              key={achievement.id}
              className="relative group cursor-pointer"
              onClick={() => setSelectedAchievement(achievement)}
            >
              <Component isAchieved={achievement.isAchieved} />
              
              {/* Progress Bar for Locked Achievements */}
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

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 pointer-events-none"></div>
            </div>
          );
        })}
      </div>

      {/* Achievement Detail Modal */}
      {selectedAchievement && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
            <button
              onClick={() => setSelectedAchievement(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="text-center">
              <div className="mb-6">
                <selectedAchievement.component isAchieved={selectedAchievement.isAchieved} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {selectedAchievement.isAchieved ? 'Achievement Unlocked!' : 'Keep Going!'}
              </h3>
              
              {selectedAchievement.isAchieved ? (
                <div className="text-gray-600">
                  <p>Unlocked on {new Date(selectedAchievement.unlockedAt).toLocaleDateString()}</p>
                </div>
              ) : (
                <div className="text-gray-600">
                  <p>Progress: {selectedAchievement.progress}%</p>
                  <div className="mt-2 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-kahana-primary rounded-full h-2 transition-all duration-300"
                      style={{ width: `${selectedAchievement.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AchievementGrid;
