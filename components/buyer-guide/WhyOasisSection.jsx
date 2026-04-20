import React from "react";
import { DotPattern } from "./DotPattern";

const WhyOasisSection = () => {
  return (
    <div className="space-y-12">
      {/* Mission Statement */}
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600">
          Oasis was born from a simple observation: the browser, the most essential tool in modern work, 
          hasn&apos;t evolved to meet the demands of enterprise users. We set out to create a browser that 
          understands and adapts to how people actually work.
        </p>
      </div>

      {/* Core Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center">
              <span className="text-3xl">🎯</span>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">User-Centric Design</h3>
              <p className="text-gray-600">Built around real user workflows</p>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">
              Every feature in Oasis is designed to solve real problems faced by enterprise users. 
              We spent countless hours observing how people work, identifying pain points, and 
              developing solutions that make a tangible difference.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Intuitive workspace organization</li>
              <li>Seamless context switching</li>
              <li>Reduced cognitive load</li>
              <li>Enhanced focus and productivity</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center">
              <span className="text-3xl">🛡️</span>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Security First</h3>
              <p className="text-gray-600">Enterprise-grade protection</p>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">
              Security isn&apos;t an afterthought in Oasis. It&apos;s built into the foundation. 
              We understand that enterprise users need both powerful features and robust security.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Zero-trust architecture</li>
              <li>Built-in security controls</li>
              <li>Compliance-ready design</li>
              <li>Data protection by default</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center">
              <span className="text-3xl">⚡</span>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Performance Focus</h3>
              <p className="text-gray-600">Optimized for efficiency</p>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">
              We believe that powerful features shouldn&apos;t come at the cost of performance. 
              Oasis is engineered to be fast, efficient, and resource-conscious.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Optimized memory usage</li>
              <li>Fast startup times</li>
              <li>Efficient tab management</li>
              <li>Reduced system impact</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center">
              <span className="text-3xl">🤝</span>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Team Collaboration</h3>
              <p className="text-gray-600">Built for modern teams</p>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">
              Modern work is collaborative, and Oasis reflects this reality. 
              We&apos;ve built features that make it easier for teams to work together effectively.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Shared workspaces</li>
              <li>Context preservation</li>
              <li>Knowledge sharing</li>
              <li>Team coordination</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Vision Statement */}
      <div className="bg-amber-50 p-8 rounded-xl border border-amber-100">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Vision</h3>
        <p className="text-xl text-gray-600">
          Oasis aims to transform the browser from a simple web viewer into a powerful 
          productivity platform that understands and adapts to how people work. We&apos;re 
          building the browser that enterprise users deserve: one that makes work easier, 
          more secure, and more efficient.
        </p>
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

export default WhyOasisSection; 