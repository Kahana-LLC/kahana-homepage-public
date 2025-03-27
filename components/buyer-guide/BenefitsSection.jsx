import React from "react";
import { DotPattern } from "./DotPattern";

const BenefitsSection = () => {
  return (
    <div className="space-y-12">
      {/* Overview */}
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600">
          Oasis delivers significant benefits to enterprises and their employees, 
          transforming the way teams work and collaborate in the modern digital 
          workspace. Our solution addresses key challenges while providing 
          measurable improvements in productivity and efficiency.
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* For Enterprises */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">For Enterprises</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Enhanced security and compliance</li>
            <li>Improved productivity metrics</li>
            <li>Reduced IT overhead</li>
            <li>Better resource utilization</li>
          </ul>
        </div>

        {/* For Teams */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">For Teams</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Streamlined collaboration</li>
            <li>Shared workspaces</li>
            <li>Knowledge sharing</li>
            <li>Improved communication</li>
          </ul>
        </div>

        {/* For Individuals */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">For Individuals</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Better focus and productivity</li>
            <li>Reduced digital clutter</li>
            <li>Faster task completion</li>
            <li>Improved work-life balance</li>
          </ul>
        </div>
      </div>

      {/* ROI Metrics */}
      <div className="bg-amber-50 p-8 rounded-xl border border-amber-100">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">ROI Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">40%</div>
            <div className="text-gray-600">Increase in productivity</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">60%</div>
            <div className="text-gray-600">Reduction in IT support tickets</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">50%</div>
            <div className="text-gray-600">Time saved on daily tasks</div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Success Stories</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <blockquote className="text-gray-600 italic mb-4">
              &quot;Oasis has transformed how our teams work together. The productivity gains 
              have been remarkable, and our IT team loves the reduced support burden.&quot;
            </blockquote>
            <div className="text-sm text-gray-500">
              - Sarah Johnson, CIO at TechCorp
            </div>
          </div>
          <div>
            <blockquote className="text-gray-600 italic mb-4">
              &quot;The workspace organization features have completely changed how I manage 
              my workday. I can&apos;t imagine going back to traditional browsers.&quot;
            </blockquote>
            <div className="text-sm text-gray-500">
              - Michael Chen, Product Manager at InnovateCo
            </div>
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

export default BenefitsSection; 