import React from 'react';
import AchievementBadge from './AchievementBadge';

const AchievementsGrid = () => {
  // Custom sloth icons with accessories
  const ExplorerSlothIcon = () => (
    <div className="relative flex items-center justify-center w-full h-full">
      {/* Outer orange frame */}
      <div className="absolute inset-4 rounded-full bg-orange-400 shadow-lg"></div>
      
      {/* Inner green circle */}
      <div className="absolute inset-8 rounded-full bg-green-400 shadow-md"></div>
      
      {/* Main sloth figure */}
      <div className="relative z-10 flex items-center justify-center">
        {/* Sloth body */}
        <div className="text-6xl">🦥</div>
        
        {/* Magnifying glass - positioned like holding it */}
        <div className="absolute -right-4 -top-2 transform rotate-12">
          <div className="text-3xl">🔍</div>
        </div>
        
        {/* Browser window - showing web globe */}
        <div className="absolute -left-6 bottom-2">
          <div className="relative">
            {/* Browser frame */}
            <div className="w-12 h-8 bg-blue-200 rounded-sm border border-blue-300 relative">
              {/* Browser controls */}
              <div className="absolute top-1 left-1 flex space-x-1">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
              {/* Browser content */}
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-lg">🌐</div>
            </div>
          </div>
        </div>
        
        {/* Sparkle effects */}
        <div className="absolute -top-3 -right-1 text-xl">✨</div>
        <div className="absolute top-1 -left-4 text-sm opacity-70">⭐</div>
      </div>
      
      {/* Background glow effect */}
      <div className="absolute inset-0 rounded-full bg-yellow-200 opacity-30 blur-lg"></div>
    </div>
  );

  const FocusedSlothIcon = () => (
    <div className="relative flex items-center justify-center w-full h-full">
      {/* Outer blue frame */}
      <div className="absolute inset-4 rounded-full bg-blue-500 shadow-lg"></div>
      
      {/* Inner purple circle */}
      <div className="absolute inset-8 rounded-full bg-purple-400 shadow-md"></div>
      
      {/* Main sloth figure */}
      <div className="relative z-10 flex items-center justify-center">
        {/* Sloth body */}
        <div className="text-6xl">🦥</div>
        
        {/* Clock timer - focused on work */}
        <div className="absolute -top-4 -right-2">
          <div className="text-4xl">⏰</div>
        </div>
        
        {/* Study books - organization */}
        <div className="absolute -left-5 -bottom-2">
          <div className="flex flex-col">
            <div className="text-2xl">📚</div>
            <div className="text-lg opacity-70">📖</div>
          </div>
        </div>
        
        {/* Focus rays */}
        <div className="absolute -top-2 left-3 text-sm opacity-70">✨</div>
        <div className="absolute top-0 -right-6 text-xs">💫</div>
      </div>
      
      {/* Background focus aura */}
      <div className="absolute inset-0 rounded-full bg-blue-200 opacity-20 blur-lg"></div>
    </div>
  );

  const NightOwlSlothIcon = () => (
    <div className="relative flex items-center justify-center w-full h-full">
      {/* Outer midnight frame */}
      <div className="absolute inset-4 rounded-full bg-indigo-800 shadow-lg"></div>
      
      {/* Inner dark blue circle */}
      <div className="absolute inset-8 rounded-full bg-blue-800 shadow-md"></div>
      
      {/* Main sloth figure */}
      <div className="relative z-10 flex items-center justify-center">
        {/* Sloth body */}
        <div className="text-6xl">🦥</div>
        
        {/* Crescent moon */}
        <div className="absolute -top-4 -right-3">
          <div className="text-5xl">🌙</div>
        </div>
        
        {/* Coffee mug */}
        <div className="absolute -left-5 -bottom-1">
          <div className="text-4xl">☕</div>
        </div>
        
        {/* Stars */}
        <div className="absolute -top-2 left-4 text-sm">⭐</div>
        <div className="absolute top-2 -right-6 text-xs">✨</div>
        <div className="absolute -bottom-1 right-2 text-xs">🌟</div>
      </div>
      
      {/* Night sky glow */}
      <div className="absolute inset-0 rounded-full bg-indigo-300 opacity-20 blur-lg"></div>
    </div>
  );

  const FlowMasterSlothIcon = () => (
    <div className="relative flex items-center justify-center w-full h-full">
      {/* Outer purple frame */}
      <div className="absolute inset-4 rounded-full bg-purple-500 shadow-lg"></div>
      
      {/* Inner pink circle */}
      <div className="absolute inset-8 rounded-full bg-pink-400 shadow-md"></div>
      
      {/* Main sloth figure */}
      <div className="relative z-10 flex items-center justify-center">
        {/* Sloth body */}
        <div className="text-6xl">🦥</div>
        
        {/* Magic sparkles */}
        <div className="absolute -top-3 -right-2">
          <div className="text-4xl">✨</div>
        </div>
        
        {/* Theater masks - performance mastery */}
        <div className="absolute -left-5 -bottom-2">
          <div className="text-3xl">🎭</div>
        </div>
        
        {/* Artistic stars */}
        <div className="absolute -top-1 left-3 text-lg">⭐</div>
        <div className="absolute -bottom-2 -right-4 text-xs">💫</div>
        <div className="absolute top-3 -left-3 text-sm opacity-80">✨</div>
      </div>
      
      {/* Creative aura */}
      <div className="absolute inset-0 rounded-full bg-purple-200 opacity-20 blur-lg"></div>
    </div>
  );

  const FriendlySharerSlothIcon = () => (
    <div className="relative flex items-center justify-center w-full h-full">
      {/* Outer teal frame */}
      <div className="absolute inset-4 rounded-full bg-teal-500 shadow-lg"></div>
      
      {/* Inner cyan circle */}
      <div className="absolute inset-8 rounded-full bg-cyan-400 shadow-md"></div>
      
      {/* Main sloth figure */}
      <div className="relative z-10 flex items-center justify-center">
        {/* Sloth body */}
        <div className="text-6xl">🦥</div>
        
        {/* Document to share */}
        <div className="absolute -top-3 -right-3">
          <div className="relative">
            <div className="text-3xl">📄</div>
            <div className="absolute top-0 left-0 text-xs bg-blue-500 text-white px-1 rounded">💡</div>
          </div>
        </div>
        
        {/* Handshake - friendly gesture */}
        <div className="absolute -left-5 -bottom-1">
          <div className="text-3xl">🤝</div>
        </div>
        
        {/* Sharing elements */}
        <div className="absolute -top-1 left-4 text-sm">💬</div>
        <div className="absolute bottom-0 -right-4 text-xs">👋</div>
      </div>
      
      {/* Social glow */}
      <div className="absolute inset-0 rounded-full bg-teal-200 opacity-20 blur-lg"></div>
    </div>
  );

  const DailyClimberSlothIcon = () => (
    <div className="relative flex items-center justify-center w-full h-full">
      {/* Outer green frame */}
      <div className="absolute inset-4 rounded-full bg-green-500 shadow-lg"></div>
      
      {/* Inner emerald circle */}
      <div className="absolute inset-8 rounded-full bg-emerald-400 shadow-md"></div>
      
      {/* Main sloth figure */}
      <div className="relative z-10 flex items-center justify-center">
        {/* Sloth body */}
        <div className="text-6xl">🦥</div>
        
        {/* Growing plant */}
        <div className="absolute -top-4 -right-2">
          <div className="relative">
            <div className="text-4xl">🌱</div>
            <div className="absolute top-0 left-1 text-sm">🍃</div>
            <div className="absolute top-2 left-0 text-xs">🌿</div>
          </div>
        </div>
        
        {/* Progress chart */}
        <div className="absolute -left-5 bottom-1">
          <div className="relative">
            <div className="text-3xl">📈</div>
          </div>
        </div>
        
        {/* Achievement sparkles */}
        <div className="absolute -top-1 left-3 text-sm">🏆</div>
        <div className="absolute bottom-0 -right-4 text-xs">✨</div>
        <div className="absolute -top-3 -left-3 text-xs">⭐</div>
      </div>
      
      {/* Growth aura */}
      <div className="absolute inset-0 rounded-full bg-green-200 opacity-20 blur-lg"></div>
    </div>
  );

  const earned = [
    { 
      title: 'Explorer Sloth', 
      subtitle: 'First 5 searches', 
      earned: true, 
      iconComponent: <ExplorerSlothIcon />,
      congratulations: 'Congrats! You unlocked new knowledge today. Keep exploring the web smarter.'
    },
    { 
      title: 'Focused Sloth', 
      subtitle: '30/30 minutes', 
      earned: true, 
      iconComponent: <FocusedSlothIcon />,
      congratulations: 'Excellent! You maintained perfect focus for an entire session. Time well spent!'
    },
    { 
      title: 'Night Owl Sloth', 
      subtitle: '', 
      earned: true, 
      iconComponent: <NightOwlSlothIcon />,
      congratulations: 'Well done! Late-night productivity unlocked. Coffee power activated!'
    },
  ];
  const locked = [
    { 
      title: 'Flow Master', 
      subtitle: '0/1', 
      earned: false, 
      iconComponent: <FlowMasterSlothIcon />,
      congratulations: 'Master the art of seamless workflows to unlock this achievement!'
    },
    { 
      title: 'Friendly Sharer', 
      subtitle: 'Share a note', 
      earned: false, 
      iconComponent: <FriendlySharerSlothIcon />,
      congratulations: 'Share knowledge and become a collaboration champion!'
    },
    { 
      title: 'Daily Climber', 
      subtitle: '0/7', 
      earned: false, 
      iconComponent: <DailyClimberSlothIcon />,
      congratulations: 'Climb the productivity ladder one day at a time!'
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {earned.map((b, i) => (
          <AchievementBadge key={i} {...b} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {locked.map((b, i) => (
          <AchievementBadge key={i} {...b} />
        ))}
      </div>
    </div>
  );
};

export default AchievementsGrid;




