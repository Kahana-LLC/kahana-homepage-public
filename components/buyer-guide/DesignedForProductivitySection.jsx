import React from "react";
import { DotPattern } from "./DotPattern";

const DesignedForProductivitySection = () => {
  return (
    <div className="space-y-12">
      {/* Overview */}
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600">
          Oasis is built with productivity at its core. Every feature is designed to help 
          enterprise users work more efficiently, stay focused, and maintain context across 
          their digital workspace.
        </p>
      </div>

      {/* Productivity Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Smart Workspace Organization */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Smart Workspace Organization</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>AI-powered tab grouping</li>
            <li>Project-based organization</li>
            <li>Custom workspace layouts</li>
            <li>Quick access to recent tabs</li>
          </ul>
        </div>

        {/* Focus Mode */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Focus Mode</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Distraction-free browsing</li>
            <li>Pomodoro timer integration</li>
            <li>Website blocking</li>
            <li>Focus statistics</li>
          </ul>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Quick Actions</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Keyboard shortcuts</li>
            <li>Command palette</li>
            <li>Tab management</li>
            <li>Workspace switching</li>
          </ul>
        </div>

        {/* Context Preservation */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Context Preservation</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Session management</li>
            <li>Tab state saving</li>
            <li>Workspace history</li>
            <li>Auto-recovery</li>
          </ul>
        </div>

        {/* Resource Management */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Resource Management</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Memory optimization</li>
            <li>CPU usage control</li>
            <li>Tab hibernation</li>
            <li>Performance monitoring</li>
          </ul>
        </div>

        {/* Collaboration Tools */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Collaboration Tools</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Shared workspaces</li>
            <li>Real-time updates</li>
            <li>Team coordination</li>
            <li>Knowledge sharing</li>
          </ul>
        </div>
      </div>

      {/* Productivity Impact */}
      <div className="bg-amber-50 p-8 rounded-xl border border-amber-100">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Productivity Impact</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">40%</div>
            <div className="text-gray-600">Reduction in context switching time</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">60%</div>
            <div className="text-gray-600">Faster task completion</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">50%</div>
            <div className="text-gray-600">Less time managing tabs</div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 right-0 -z-10 opacity-10">
        <DotPattern className="w-48 h-48" />
      </div>
      <div className="absolute bottom-0 left-1/4 -z-10 opacity-10">
        <DotPattern className="w-32 h-32" />
      </div>
    </div>
  );
};

export default DesignedForProductivitySection; 