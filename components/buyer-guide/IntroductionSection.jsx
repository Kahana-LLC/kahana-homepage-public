import React from "react";
import { DotPattern } from "./DotPattern";
import { ProductivityIcons } from "./ProductivityIcons";

const IntroductionSection = () => {
  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left side content */}
        <div className="space-y-12">
          {/* Section subtitle with line */}
          <div className="relative">
            <h3 className="text-gray-600 text-lg mb-1">The Modern Browser Crisis</h3>
            <div className="h-0.5 w-full bg-gradient-to-r from-emerald-500 to-emerald-300"></div>
          </div>
          
          {/* Quote */}
          <div>
            <blockquote className="text-[32px] leading-tight font-semibold text-gray-800">
              &quot;19% of the workweek is lost to digital clutter.&quot;
              <span className="block mt-2 text-lg font-normal text-gray-500">- McKinsey</span>
            </blockquote>
          </div>

          {/* Problem Statement */}
          <div className="space-y-8">
            <p className="text-lg text-gray-600 leading-relaxed">
              In today&apos;s hybrid work environment, employees juggle dozens 
              of tabs, fragmented bookmarks, and manual workflows. 
              Traditional browsers, designed for casual use, lack tools to 
              manage enterprise-scale complexity. This leads to:
            </p>

            {/* Key Issues */}
            <div className="space-y-6">
              <div className="grid grid-cols-[140px,1fr] items-baseline gap-4">
                <span className="font-semibold text-gray-800">Lost Productivity:</span>
                <span className="text-gray-600">Hours wasted searching for links or reconstructing context.</span>
              </div>
              <div className="grid grid-cols-[140px,1fr] items-baseline gap-4">
                <span className="font-semibold text-gray-800">Security Risks:</span>
                <span className="text-gray-600">Data leaks from unmanaged browser activity.</span>
              </div>
              <div className="grid grid-cols-[140px,1fr] items-baseline gap-4">
                <span className="font-semibold text-gray-800">Employee Frustration:</span>
                <span className="text-gray-600">Overwhelming interfaces that hinder focus.</span>
              </div>
            </div>
          </div>

          {/* Solution Overview */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-gray-800">
              Oasis redefines the browser as a productivity sanctuary:
            </h4>
            <div className="space-y-6">
              <div className="grid grid-cols-[180px,1fr] items-baseline gap-4">
                <span className="font-semibold text-gray-800">AI-Driven Organization:</span>
                <span className="text-gray-600">Automatically groups resources by project or topic.</span>
              </div>
              <div className="grid grid-cols-[180px,1fr] items-baseline gap-4">
                <span className="font-semibold text-gray-800">Contextual Workflows:</span>
                <span className="text-gray-600">Saves intent, notes, and history with every bookmark.</span>
              </div>
              <div className="grid grid-cols-[180px,1fr] items-baseline gap-4">
                <span className="font-semibold text-gray-800">Enterprise-Grade Security:</span>
                <span className="text-gray-600">Zero-trust protocols without compromising speed.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side image */}
        <div className="relative">
          <div className="sticky top-24 w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <ProductivityIcons />
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

export default IntroductionSection; 