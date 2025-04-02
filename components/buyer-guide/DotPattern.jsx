import React from "react";

export const DotPattern = ({ className = "" }) => (
  <div className={`grid grid-cols-8 gap-2 ${className}`}>
    {[...Array(48)].map((_, i) => (
      <div 
        key={i} 
        className="w-1.5 h-1.5 rounded-full bg-[#66C2BE] opacity-20"
      />
    ))}
  </div>
); 