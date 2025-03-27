import React from 'react';

export default function FeatureHighlight() {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-800 aspect-square rounded-lg p-8 text-white relative overflow-hidden">
      {/* Logo */}
      <div className="absolute top-8 right-8">
        <div className="w-28 h-9 bg-white rounded-lg flex items-center justify-center">
          <span className="text-blue-600 font-semibold text-lg">kahana</span>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-full h-full">
        <div className="absolute top-16 right-16 w-32 h-32 bg-white/5 rounded-full"></div>
        <div className="absolute bottom-24 left-8 w-24 h-24 bg-white/10 rounded-full"></div>
        <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-white/5 rounded-full"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-[90%]">
          <div className="text-sm font-medium text-blue-200 mb-4">NEW FEATURE</div>
          <h4 className="text-3xl font-bold mb-6 leading-tight">
            Streamline Your Workflow
          </h4>
          <ul className="space-y-3">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
              <span className="text-lg">Automated task management</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
              <span className="text-lg">Real-time collaboration</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
              <span className="text-lg">Smart notifications</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Tag */}
      <div className="absolute bottom-8 left-8 text-sm font-medium text-white/80">
        #ProductivityTools
      </div>
    </div>
  );
} 