import React from "react";
import { DotPattern } from "./DotPattern";
import { ProductivityIcons } from "./ProductivityIcons";

const WhatIsOasisSection = () => {
  return (
    <div className="space-y-12">
      {/* Overview */}
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600">
          Oasis is more than just a browser. It&apos;s a complete workspace management platform 
          designed specifically for enterprise users. Built on modern web standards, it 
          combines powerful features with enterprise-grade security to create a seamless 
          work experience.
        </p>
      </div>

      {/* Key Features Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left side content */}
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Workspace Management</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>AI-powered context grouping</li>
              <li>Intelligent tab management</li>
              <li>Project-based organization</li>
              <li>Custom workspace layouts</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Security Features</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Zero-trust architecture</li>
              <li>Built-in security controls</li>
              <li>Data isolation</li>
              <li>Compliance tools</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Collaboration Tools</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Shared workspaces</li>
              <li>Real-time updates</li>
              <li>Team coordination</li>
              <li>Knowledge sharing</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Performance Optimization</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Memory management</li>
              <li>Resource optimization</li>
              <li>Fast startup times</li>
              <li>Efficient tab handling</li>
            </ul>
          </div>
        </div>

        {/* Right side image */}
        <div className="relative">
          <div className="sticky top-24 w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <ProductivityIcons />
          </div>
        </div>
      </div>

      {/* Technical Overview */}
      <div className="bg-amber-50 p-8 rounded-xl border border-amber-100">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Technical Foundation</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-800">Built on Standards</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Chromium-based engine</li>
              <li>Web standards compliance</li>
              <li>Modern web APIs</li>
              <li>Cross-platform support</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-800">Enterprise Ready</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Centralized management</li>
              <li>Deployment tools</li>
              <li>Policy controls</li>
              <li>Audit capabilities</li>
            </ul>
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

export default WhatIsOasisSection; 