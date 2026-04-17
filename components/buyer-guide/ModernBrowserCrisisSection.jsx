import React from "react";
import { DotPattern } from "./DotPattern";

const ModernBrowserCrisisSection = () => {
  return (
    <div className="space-y-12">
      {/* Overview */}
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600">
          The modern workplace has evolved dramatically, but browser technology hasn&apos;t kept pace. 
          Today&apos;s enterprise users face unprecedented challenges in managing their digital workspace.
        </p>
      </div>

      {/* Key Challenges Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-brand-link/10 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-brand-link" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Productivity Drain</h3>
              <p className="text-gray-600">The hidden cost of browser inefficiency</p>
            </div>
          </div>
          <div className="space-y-4">
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Average of 8+ hours per week lost to tab management</li>
              <li>40% of work time spent context switching</li>
              <li>Lost productivity from manual resource organization</li>
              <li>Reduced focus from overwhelming interfaces</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-brand-link/10 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-brand-link" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Security Vulnerabilities</h3>
              <p className="text-gray-600">Growing risks in the modern browser</p>
            </div>
          </div>
          <div className="space-y-4">
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Unmanaged browser extensions creating attack vectors</li>
              <li>Data leakage from unsecured sessions</li>
              <li>Compliance challenges with traditional browsers</li>
              <li>Limited visibility into browser activity</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-brand-link/10 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-brand-link" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Resource Management</h3>
              <p className="text-gray-600">The performance impact</p>
            </div>
          </div>
          <div className="space-y-4">
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Excessive memory usage from tab proliferation</li>
              <li>System slowdown from unoptimized processes</li>
              <li>Battery drain on mobile devices</li>
              <li>Reduced device lifespan</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-brand-link/10 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-brand-link" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Collaboration Challenges</h3>
              <p className="text-gray-600">Breaking down team efficiency</p>
            </div>
          </div>
          <div className="space-y-4">
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Difficulty sharing context between team members</li>
              <li>Lost information in browser history</li>
              <li>Inconsistent workspace organization</li>
              <li>Barriers to knowledge sharing</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Impact Summary */}
      <div className="bg-emerald-50 p-8 rounded-xl border border-emerald-100">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">The Real Impact</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-4xl font-bold text-emerald-600 mb-2">19%</div>
            <p className="text-gray-600">of workweek lost to digital clutter</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-emerald-600 mb-2">40%</div>
            <p className="text-gray-600">of time spent context switching</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-emerald-600 mb-2">8+</div>
            <p className="text-gray-600">hours per week managing tabs</p>
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

export default ModernBrowserCrisisSection; 