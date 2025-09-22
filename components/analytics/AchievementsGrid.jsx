import React from 'react';
import AchievementBadge from './AchievementBadge';

const AchievementsGrid = () => {
  const earned = [
    { title: 'Explorer Sloth', subtitle: 'First 5 searches', icon: '📷', earned: true },
    { title: 'Focused Sloth', subtitle: '30/30 minutes', icon: '⏱️', earned: true },
    { title: 'Night Owl Slath', subtitle: '', icon: '🌙', earned: false },
  ];
  const locked = [
    { title: 'Flow Master', subtitle: '0/1', icon: '🪄', earned: false },
    { title: 'Friendly Sharer', subtitle: 'Share a note', icon: '🤝', earned: false },
    { title: 'Daily Climber', subtitle: '0/7', icon: '🌱', earned: false },
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



