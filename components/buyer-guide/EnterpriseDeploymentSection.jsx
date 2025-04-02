import React from "react";
import { DotPattern } from "./DotPattern";

const EnterpriseDeploymentSection = () => {
  return (
    <div className="space-y-12">
      {/* Overview */}
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600">
          Oasis offers comprehensive enterprise deployment options designed to meet the 
          security and management requirements of large organizations. Our deployment 
          solutions ensure a smooth, controlled rollout while maintaining enterprise-grade 
          security and compliance.
        </p>
      </div>

      {/* Deployment Options Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Automated Distribution */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-[#66C2BE]/10 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-[#66C2BE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Automated Distribution</h3>
              <p className="text-gray-600">Flexible deployment options</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Package Formats</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Windows: NSIS installer, Portable executable</li>
                <li>macOS: DMG installer (x64, arm64)</li>
                <li>Linux: AppImage, DEB package</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Distribution Methods</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Microsoft SCCM/Intune</li>
                <li>Jamf (for macOS)</li>
                <li>Enterprise package managers</li>
                <li>Custom deployment scripts</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Update Management */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-[#66C2BE]/10 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-[#66C2BE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Update Management</h3>
              <p className="text-gray-600">Controlled update system</p>
            </div>
          </div>
          <div className="space-y-4">
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Controlled rollout capabilities</li>
              <li>Version control</li>
              <li>Rollback support</li>
              <li>Configurable update intervals</li>
              <li>Silent updates option</li>
            </ul>
          </div>
        </div>
      </div>

      {/* System Requirements */}
      <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">System Requirements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#66C2BE]">Operating Systems</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Windows 10/11 (64-bit)</li>
              <li>macOS 11.0 or later</li>
              <li>Ubuntu 20.04 or later</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#66C2BE]">Hardware Requirements</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>RAM: 4GB (8GB recommended)</li>
              <li>Storage: 500MB free space</li>
              <li>Processor: Modern x64 or ARM64</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Deployment Process */}
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Deployment Process</h3>
        <div className="space-y-8">
          {/* Phase 1 */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Phase 1: Planning & Setup (1-2 weeks)</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Infrastructure assessment</li>
              <li>Policy configuration</li>
              <li>Initial testing</li>
            </ul>
          </div>

          {/* Phase 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Phase 2: Pilot Deployment (2-4 weeks)</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Small group deployment</li>
              <li>Feedback collection</li>
              <li>Performance tuning</li>
            </ul>
          </div>

          {/* Phase 3 */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Phase 3: Full Rollout (4-8 weeks)</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Department-wise deployment</li>
              <li>User training</li>
              <li>Support system setup</li>
            </ul>
          </div>

          {/* Phase 4 */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Phase 4: Optimization (Ongoing)</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Performance monitoring</li>
              <li>Policy refinement</li>
              <li>Feature updates</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Enterprise Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Security Features */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Security Features</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Active Directory integration</li>
            <li>SAML/SSO support</li>
            <li>Multi-factor authentication</li>
            <li>Certificate management</li>
            <li>SIEM integration</li>
          </ul>
        </div>

        {/* Management Tools */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Management Tools</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Group Policy support</li>
            <li>MDM compatibility</li>
            <li>Remote configuration</li>
            <li>Audit logging</li>
            <li>Compliance reporting</li>
          </ul>
        </div>
      </div>

      {/* Support Options */}
      <div className="bg-amber-50 p-8 rounded-xl border border-amber-100">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Enterprise Support</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-800">Support Services</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>24/7 technical support</li>
              <li>Dedicated account manager</li>
              <li>Custom feature development</li>
              <li>Security advisory services</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-800">Documentation</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Admin documentation</li>
              <li>User guides</li>
              <li>Video tutorials</li>
              <li>Custom training sessions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="bg-blue-50 rounded-xl p-8 border border-blue-100">
        <h3 className="text-2xl font-semibold mb-8 text-gray-800">Case Studies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Financial Services Case Study */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-[#66C2BE]/10 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-[#66C2BE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800">Global Financial Firm</h4>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">
                A Fortune 500 financial services company deployed Oasis to 10,000+ employees
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Reduced IT support tickets by 60%</li>
                <li>Improved security compliance by 40%</li>
                <li>$2M annual savings in IT costs</li>
              </ul>
            </div>
          </div>

          {/* Tech Company Case Study */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-[#66C2BE]/10 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-[#66C2BE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800">Tech Startup</h4>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">
                A rapidly growing tech company with 500+ developers implemented Oasis
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>50% reduction in context switching time</li>
                <li>30% increase in developer productivity</li>
                <li>90% team adoption within first month</li>
              </ul>
            </div>
          </div>

          {/* Healthcare Case Study */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-[#66C2BE]/10 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-[#66C2BE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800">Healthcare Provider</h4>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">
                A national healthcare network deployed Oasis across 200 facilities
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>100% HIPAA compliance maintained</li>
                <li>45% faster access to patient records</li>
                <li>75% reduction in browser-related issues</li>
              </ul>
            </div>
          </div>

          {/* Enterprise Case Study */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-[#66C2BE]/10 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-[#66C2BE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800">Enterprise Retail</h4>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">
                A Fortune 100 retailer implemented Oasis across their corporate offices
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>35% improvement in workflow efficiency</li>
                <li>80% reduction in tab management time</li>
                <li>$1.5M saved in productivity gains</li>
              </ul>
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

export default EnterpriseDeploymentSection; 