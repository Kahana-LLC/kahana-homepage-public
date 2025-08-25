import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import NavbarDup from '../components/NavbarDup';

export default function OasisUserAnalytics() {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for analytics
  const commandAccuracyData = {
    correct: 87,
    incorrect: 13
  };

  const monthlyTrendsData = [
    { month: 'Jan 2025', correct: 65, incorrect: 35 },
    { month: 'Feb 2025', correct: 68, incorrect: 32 },
    { month: 'Mar 2025', correct: 72, incorrect: 28 },
    { month: 'Apr 2025', correct: 75, incorrect: 25 },
    { month: 'May 2025', correct: 78, incorrect: 22 },
    { month: 'Jun 2025', correct: 81, incorrect: 19 },
    { month: 'Jul 2025', correct: 84, incorrect: 16 },
    { month: 'Aug 2025', correct: 87, incorrect: 13 }
  ];

  const mostUsedCommands = [
    {
      name: 'Multi-Tab Research Workflow',
      usage: 2347,
      accuracy: 92,
      description: 'Chains research prompts to searching, tab opening, summarization, and result compilation'
    },
    {
      name: 'Automated Data Extraction',
      usage: 1892,
      accuracy: 89,
      description: 'Chains site navigation, data scraping, parsing, and organizing multiple sources'
    },
    {
      name: 'Multi-Step Scheduling',
      usage: 1567,
      accuracy: 94,
      description: 'Converts natural language scheduling requests into multi-agent actions'
    },
    {
      name: 'Productivity Dashboard',
      usage: 1342,
      accuracy: 87,
      description: 'Integrates browsing behavior, notes, reminders, and agent suggestions'
    },
    {
      name: 'Custom Workflow Creator',
      usage: 987,
      accuracy: 85,
      description: 'Parses complex user instructions to chain browsing, bookmarking, emailing'
    },
    {
      name: 'Cross-Session AI Memory',
      usage: 2156,
      accuracy: 91,
      description: 'Saves enriched session histories and builds learning memory'
    }
  ];

  const userSegments = [
    { segment: 'Product Teams', usage: 28, accuracy: 89 },
    { segment: 'Marketing Teams', usage: 24, accuracy: 87 },
    { segment: 'Sales Teams', usage: 22, accuracy: 92 },
    { segment: 'Executives', usage: 18, accuracy: 85 },
    { segment: 'Growth Hackers', usage: 8, accuracy: 88 }
  ];

  return (
    <>
      <Head>
        <title>Oasis User Analytics Dashboard | Kahana Browser</title>
        <meta name="description" content="Real-time analytics and insights into Oasis user behavior, command accuracy, and productivity trends." />
      </Head>

      <NavbarDup />

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
              Oasis User Analytics
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-time insights into user behavior, command accuracy, and productivity trends across the Oasis platform
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-1 bg-white rounded-lg p-1 shadow-sm border border-gray-200">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'commands', label: 'Command Analytics' },
                { id: 'trends', label: 'Monthly Trends' },
                { id: 'segments', label: 'User Segments' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-[#66C2BE] text-white'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow-lg border border-[#A5DAD8]/30 p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-500">Command Accuracy</p>
                      <p className="text-2xl font-bold text-gray-900">{commandAccuracyData.correct}%</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg border border-[#A5DAD8]/30 p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-500">Total Commands</p>
                      <p className="text-2xl font-bold text-gray-900">10,291</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg border border-[#A5DAD8]/30 p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-500">Active Users</p>
                      <p className="text-2xl font-bold text-gray-900">2,847</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accuracy Chart */}
              <div className="bg-white rounded-xl shadow-lg border border-[#A5DAD8]/30 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Command Accuracy Distribution</h3>
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Correct Commands</span>
                      <span>{commandAccuracyData.correct}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-green-500 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${commandAccuracyData.correct}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Incorrect Commands</span>
                      <span>{commandAccuracyData.incorrect}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-red-500 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${commandAccuracyData.incorrect}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Command Analytics Tab */}
          {activeTab === 'commands' && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg border border-[#A5DAD8]/30 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Most Used Commands</h3>
                <div className="space-y-4">
                  {mostUsedCommands.map((command, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{command.name}</h4>
                          <p className="text-sm text-gray-600 mt-1">{command.description}</p>
                        </div>
                        <div className="flex items-center space-x-6">
                          <div className="text-right">
                            <p className="text-sm text-gray-500">Usage</p>
                            <p className="font-semibold text-gray-900">{command.usage.toLocaleString()}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-500">Accuracy</p>
                            <p className="font-semibold text-green-600">{command.accuracy}%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Monthly Trends Tab */}
          {activeTab === 'trends' && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg border border-[#A5DAD8]/30 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Monthly Command Accuracy Trends</h3>
                <div className="space-y-4">
                  {monthlyTrendsData.map((data, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-24 text-sm font-medium text-gray-600">{data.month}</div>
                      <div className="flex-1">
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>Correct: {data.correct}%</span>
                          <span>Incorrect: {data.incorrect}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div 
                            className="bg-green-500 h-3 rounded-full transition-all duration-500"
                            style={{ width: `${data.correct}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="w-16 text-right">
                        <span className="text-sm font-medium text-green-600">+{data.correct - monthlyTrendsData[Math.max(0, index-1)]?.correct || 0}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* User Segments Tab */}
          {activeTab === 'segments' && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg border border-[#A5DAD8]/30 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">User Segment Performance</h3>
                <div className="space-y-4">
                  {userSegments.map((segment, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{segment.segment}</h4>
                        </div>
                        <div className="flex items-center space-x-6">
                          <div className="text-right">
                            <p className="text-sm text-gray-500">Usage %</p>
                            <p className="font-semibold text-gray-900">{segment.usage}%</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-500">Accuracy</p>
                            <p className="font-semibold text-green-600">{segment.accuracy}%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
