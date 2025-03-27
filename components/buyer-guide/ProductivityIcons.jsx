import React from "react";

export const ProductivityIcons = () => {
  const icons = [
    { icon: '💼', label: 'Work' },
    { icon: '🔒', label: 'Security' },
    { icon: '📱', label: 'Device' },
    { icon: '📧', label: 'Email' },
    { icon: '🏠', label: 'Home' },
    { icon: '📊', label: 'Analytics' },
    { icon: '🔍', label: 'Search' },
    { icon: '📝', label: 'Notes' },
    { icon: '🔄', label: 'Sync' },
    { icon: '⚡', label: 'Speed' },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.05); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
      <div className="relative w-full h-full bg-gradient-to-br from-amber-900 to-amber-700 rounded-2xl overflow-hidden p-8">
        {/* Main device image */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <div className="relative w-[80%] aspect-[4/3] bg-gradient-to-t from-amber-400/20 to-white/10 rounded-lg backdrop-blur-sm border border-white/20 shadow-2xl">
            {/* Screen content simulation */}
            <div className="absolute inset-2 bg-gradient-to-b from-amber-200/10 to-amber-400/10 rounded-lg overflow-hidden">
              <div className="h-2 w-24 bg-white/20 rounded-full m-2"></div>
              <div className="grid grid-cols-3 gap-2 p-2">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-8 bg-white/10 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Floating icons */}
        {icons.map((item, index) => (
          <div
            key={index}
            className="absolute animate-float"
            style={{
              top: `${Math.random() * 70 + 15}%`,
              left: `${Math.random() * 70 + 15}%`,
              animation: `float 3s ease-in-out infinite`,
              animationDelay: `${index * 0.2}s`,
            }}
          >
            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg text-xl">
              {item.icon}
            </div>
          </div>
        ))}

        {/* Glowing effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-amber-500/30 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.5)_0%,transparent_70%)]"></div>
      </div>
    </>
  );
}; 