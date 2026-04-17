import React from "react";
import { DotPattern } from "./DotPattern";

const CoreArchitectureSection = () => {
  return (
    <div className="space-y-12">
      {/* Overview */}
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600">
          Oasis is built on a modern, secure, and efficient architecture that ensures 
          optimal performance and reliability for enterprise users. Our core architecture 
          combines cutting-edge technologies with robust security measures to deliver a 
          seamless browsing experience.
        </p>
      </div>

      {/* Architecture Components */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left side content */}
        <div className="space-y-8">
          {/* Core Engine */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Core Engine</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Chromium-based rendering engine</li>
              <li>Optimized memory management</li>
              <li>Efficient resource allocation</li>
              <li>Fast startup and shutdown</li>
            </ul>
          </div>

          {/* Security Layer */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Security Layer</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Zero-trust architecture</li>
              <li>Sandboxed processes</li>
              <li>Encrypted data storage</li>
              <li>Regular security updates</li>
            </ul>
          </div>

          {/* Workspace Management */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Workspace Management</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>AI-powered organization</li>
              <li>Context-aware grouping</li>
              <li>State persistence</li>
              <li>Resource optimization</li>
            </ul>
          </div>

          {/* Enterprise Integration */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Enterprise Integration</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>SSO support</li>
              <li>Policy management</li>
              <li>Audit logging</li>
              <li>Deployment tools</li>
            </ul>
          </div>
        </div>

        {/* Right side diagram */}
        <div className="relative">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Architecture Overview</h3>
            <div className="space-y-6">
              {/* User Interface Layer */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">User Interface Layer</h4>
                  <p className="text-sm text-gray-600">Modern, responsive UI components</p>
                </div>
              </div>

              {/* Application Layer */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Application Layer</h4>
                  <p className="text-sm text-gray-600">Core business logic and features</p>
                </div>
              </div>

              {/* Security Layer */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-brand-link/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-brand-link" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Security Layer</h4>
                  <p className="text-sm text-gray-600">Enterprise-grade security measures</p>
                </div>
              </div>

              {/* Data Layer */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-brand-link/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-brand-link" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Data Layer</h4>
                  <p className="text-sm text-gray-600">Secure data storage and management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Benefits */}
      <div className="bg-amber-50 p-8 rounded-xl border border-amber-100">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Technical Benefits</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-800">Performance</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Optimized memory usage</li>
              <li>Fast page loading</li>
              <li>Efficient resource management</li>
              <li>Quick startup times</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-800">Security</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Zero-trust architecture</li>
              <li>Regular security updates</li>
              <li>Data encryption</li>
              <li>Compliance features</li>
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

export default CoreArchitectureSection; 