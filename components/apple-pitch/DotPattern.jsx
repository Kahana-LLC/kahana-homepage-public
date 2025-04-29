import React from 'react';

const DotPattern = () => {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <pattern
        id="dot-pattern"
        x="0"
        y="0"
        width="10"
        height="10"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="5" cy="5" r="1" fill="#66C2BE" fillOpacity="0.2" />
      </pattern>
      <rect x="0" y="0" width="100" height="100" fill="url(#dot-pattern)" />
    </svg>
  );
};

export default DotPattern; 