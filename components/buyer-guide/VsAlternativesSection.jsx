import React from "react";
import Link from "next/link";

const VsAlternativesSection = () => {
  return (
    <div className="space-y-16">
      {/* Overview */}
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600">
          While traditional browsers serve general web browsing well, they fall short in 
          enterprise environments where productivity, security, and organization are paramount.
          Here&apos;s how Oasis transforms the browsing experience for professional teams:
        </p>
      </div>

      {/* Feature Categories */}
      <div className="space-y-12">
        {/* Core Features Comparison */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Core Features Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-4 px-6 text-left w-[200px]">Features</th>
                  <th className="py-4 px-6 text-left bg-amber-50 rounded-t-lg">
                    <div className="flex items-center space-x-2">
                      <span className="text-amber-600 font-semibold">Oasis Browser</span>
                    </div>
                  </th>
                  <th className="py-4 px-6 text-left">Chrome</th>
                  <th className="py-4 px-6 text-left">Edge</th>
                  <th className="py-4 px-6 text-left">Safari</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 px-6 font-medium">Workspace Organization</td>
                  <td className="py-4 px-6 bg-amber-50">
                    <div className="flex items-center">
                      <span className="text-amber-600 font-medium">AI-powered context grouping with hub-based system</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">Basic bookmarks and folders with sync</td>
                  <td className="py-4 px-6">Collections feature</td>
                  <td className="py-4 px-6">Basic bookmarks and Reading List</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Enterprise Security</td>
                  <td className="py-4 px-6 bg-amber-50">
                    <div className="space-y-2">
                      <span className="text-amber-600 font-medium block">Built-in zero-trust architecture:</span>
                      <ul className="list-disc list-inside text-sm text-amber-700">
                        <li>Enhanced CSP</li>
                        <li>Certificate management</li>
                        <li>Granular permissions</li>
                        <li>Process isolation</li>
                      </ul>
                    </div>
                  </td>
                  <td className="py-4 px-6">Add-on security features through enterprise policies</td>
                  <td className="py-4 px-6">Microsoft Defender integration and SmartScreen</td>
                  <td className="py-4 px-6">Basic security with Apple&apos;s privacy protections</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Context Preservation</td>
                  <td className="py-4 px-6 bg-amber-50">
                    <span className="text-amber-600 font-medium">Automatic session context & intelligent workspace management</span>
                  </td>
                  <td className="py-4 px-6">Tab groups and basic session restore</td>
                  <td className="py-4 px-6">Basic collections and tab groups</td>
                  <td className="py-4 px-6">Tab groups and iCloud sync</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Resource Management</td>
                  <td className="py-4 px-6 bg-amber-50">
                    <span className="text-amber-600 font-medium">Intelligent tab & memory optimization with sandboxed processes</span>
                  </td>
                  <td className="py-4 px-6">Basic tab freezing</td>
                  <td className="py-4 px-6">Sleeping tabs and efficiency mode</td>
                  <td className="py-4 px-6">Basic memory management with App Nap</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Enterprise Features Grid */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Enterprise-Grade Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl border border-amber-100">
              <h4 className="text-lg font-semibold mb-4 text-amber-800">Update Management</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-amber-600 font-medium">✓</span>
                  </div>
                  <p className="text-gray-600">Enterprise-grade auto-update system with rollback capabilities</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-amber-600 text-sm">✓</span>
                  </div>
                  <p className="text-gray-600">Centralized deployment controls</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl border border-amber-100">
              <h4 className="text-lg font-semibold mb-4 text-amber-800">Privacy Features</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-amber-600 text-sm">✓</span>
                  </div>
                  <p className="text-gray-600">Zero-trust architecture with complete origin isolation</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-amber-600 text-sm">✓</span>
                  </div>
                  <p className="text-gray-600">Enhanced tracking prevention and cookie controls</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl border border-amber-100">
              <h4 className="text-lg font-semibold mb-4 text-amber-800">Collaboration Features</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-amber-600 text-sm">✓</span>
                  </div>
                  <p className="text-gray-600">Hub-based collaboration with real-time updates</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-amber-600 text-sm">✓</span>
                  </div>
                  <p className="text-gray-600">Secure workspace sharing and permissions</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl border border-amber-100">
              <h4 className="text-lg font-semibold mb-4 text-amber-800">Cross-platform Support</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-amber-600 text-sm">✓</span>
                  </div>
                  <p className="text-gray-600">Windows, macOS, and Linux support</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-amber-600 text-sm">✓</span>
                  </div>
                  <p className="text-gray-600">Consistent experience across all platforms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-amber-50 to-white p-8 rounded-2xl border border-amber-100">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Ready to Transform Your Browser Experience?</h3>
        <p className="text-gray-600 mb-6">
          Experience the difference of a browser built specifically for enterprise productivity and security.
        </p>
        <Link
          href="/schedule-demo"
          className="inline-block bg-amber-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-amber-700 transition-colors"
        >
          Schedule a Demo
        </Link>
      </div>
    </div>
  );
};

export default VsAlternativesSection; 