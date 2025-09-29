import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import { useState } from 'react';
import LineChart from '../../components/analytics/LineChart';
import BarChart from '../../components/analytics/BarChart';
import DonutChart from '../../components/analytics/DonutChart';
import HorizontalBarChart from '../../components/analytics/HorizontalBarChart';
import HeatmapChart from '../../components/analytics/HeatmapChart';
import PieChart from '../../components/analytics/PieChart';
import WorldMap from '../../components/analytics/WorldMap';
import RetentionCohort from '../../components/analytics/RetentionCohort';
import PersonaCard from '../../components/analytics/PersonaCard';
import KPIStat from '../../components/analytics/KPIStat';
import Tabs from '../../components/analytics/Tabs';
import DashboardSelector from '../../components/analytics/DashboardSelector';
import OrgAdoptionChart from '../../components/analytics/OrgAdoptionChart';
import TopCommandsByTeam from '../../components/analytics/TopCommandsByTeam';
import DepartmentMap from '../../components/analytics/DepartmentMap';
import SimpleStatCard from '../../components/analytics/SimpleStatCard';
import GaugeChart from '../../components/analytics/GaugeChart';
import AreaStackedChart from '../../components/analytics/AreaStackedChart';
import CostByModelChart from '../../components/analytics/CostByModelChart';
import DonutStat from '../../components/analytics/DonutStat';
import AreaSmoothChart from '../../components/analytics/AreaSmoothChart';
import SparklineCard from '../../components/analytics/SparklineCard';
import ScatterChart from '../../components/analytics/ScatterChart';
import StatBlock from '../../components/analytics/StatBlock';
import ProgressBarCard from '../../components/analytics/ProgressBarCard';
import AlertsList from '../../components/analytics/AlertsList';
import BadgeRow from '../../components/analytics/BadgeRow';
import StreakCalendar from '../../components/analytics/StreakCalendar';
import LevelsTrack from '../../components/analytics/LevelsTrack';
import HorizontalMeterList from '../../components/analytics/HorizontalMeterList';
import ShortcutAdoptionList from '../../components/analytics/ShortcutAdoptionList';
import ClockDial from '../../components/analytics/ClockDial';
import RoutinesList from '../../components/analytics/RoutinesList';
import AchievementsGrid from '../../components/analytics/AchievementsGrid';


export default function UserAnalyticsFeatures() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedDashboard, setSelectedDashboard] = useState('enterprise');
  const [internalTab, setInternalTab] = useState('overview');
  const internalTabs = [
    { key: 'overview', label: 'Overview' },
    { key: 'reliability', label: 'Reliability' },
    { key: 'performance', label: 'Performance' },
    { key: 'costs', label: 'Costs' }
  ];
  const [userTab, setUserTab] = useState('overview');
  const userTabs = [
    { key: 'overview', label: 'Overview' },
    { key: 'progress', label: 'Progress' },
    { key: 'habits', label: 'Habits' },
    { key: 'achievements', label: 'Achievements' },
  ];
  const tabs = [
    { key: 'overview', label: 'Overview' },
    { key: 'commands', label: 'Command Analytics' },
    { key: 'monthly', label: 'Monthly Trends' },
    { key: 'segments', label: 'User Segments' },
  ];

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const accuracySeries = [72, 73, 75, 76, 78, 79, 80, 83, 85, 84, 85];
  const commandsSeries = [2200, 2400, 2600, 2500, 3000, 3200, 3500, 3300, 3600, 3700, 3900];
  const errorsSeries = [120, 80, 110, 90, 130, 95, 140, 180, 150, 170, 160];
  const activeUsersSeries = [100, 120, 130, 160, 200, 240, 300, 320, 380, 420, 480];

  // Internal Team sample data
  const requestLatencyLabels = ['P80 Hz', 'P33'];
  const requestLatencySeries = [
    {
      label: 'p80',
      data: [220, 260],
      borderColor: '#6366f1'
    },
    {
      label: 'p33',
      data: [140, 160],
      borderColor: '#14b8a6'
    }
  ];
  const tokenConsumptionLabels = ['Week 1','Week 2','Week 3','Week 4','Week 5'];
  const tokenConsumptionSeries = [
    {
      label: 'Token',
      data: [10, 14, 13, 16, 18],
      borderColor: '#3b82f6'
    },
    {
      label: 'Total',
      data: [12, 15, 16, 19, 22],
      borderColor: '#14b8a6'
    }
  ];
  const uptimeHeatmapData = [
    [95, 96, 98, 97, 96],
    [97, 98, 99, 98, 97],
    [96, 96, 97, 98, 98],
    [98, 99, 99, 99, 98]
  ];
  const uptimeRows = ['24/T', 'T', 'T', 'M'];
  const uptimeCols = ['M', 'T', 'W', 'T', 'D'];

  // Command Analytics data
  const commandAccuracyData = [
    { label: 'Correct', value: 76, color: '#1e40af' },
    { label: 'Incorrect', value: 24, color: '#93c5fd' }
  ];

  const topCommandsData = {
    labels: ['Open Tab', 'Search', 'Navigate', 'Close Tab'],
    values: [45, 38, 28, 15]
  };

  const hourlyUsageData = [
    [45, 28, 35, 52, 41, 38, 42], // Monday
    [38, 52, 67, 73, 58, 45, 41], // Tuesday  
    [52, 67, 84, 91, 73, 58, 52], // Wednesday
    [41, 58, 73, 79, 64, 52, 48], // Thursday
    [67, 84, 91, 95, 79, 67, 58], // Friday
    [35, 41, 52, 58, 45, 35, 28], // Saturday
    [28, 35, 41, 45, 35, 28, 24]  // Sunday
  ];

  const hourlyLabels = {
    rows: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    cols: ['8AM', '10AM', '12PM', '2PM', '4PM', '6PM', '8PM']
  };

  // User Segments data
  const segmentsDistributionData = [
    { label: 'Power Users', value: 45, color: '#8b5cf6' },
    { label: 'Analysis', value: 25, color: '#06b6d4' },
    { label: 'Researchers', value: 20, color: '#10b981' },
    { label: 'Casual Users', value: 10, color: '#f59e0b' }
  ];

  const segmentsGrowthData = {
    labels: ['May', 'Apr', 'Jul', 'Augus'],
    datasets: [
      { label: 'Power Users', data: [15, 25, 35, 40], borderColor: '#8b5cf6' },
      { label: 'Researchers', data: [8, 12, 18, 22], borderColor: '#10b981' }
    ]
  };

  const retentionCohortData = [
    [85, 75, 65, 55, 45],
    [80, 70, 60, 50, 40],
    [75, 65, 55, 45, 35],
    [70, 60, 50, 40, 30],
    [65, 55, 45, 35, 25]
  ];

  const personaData = [
    { title: 'Power Users', attributes: ['Active users', 'Advanced workflows'] },
    { title: 'Analysts', attributes: ['Data analysis', 'Data workflows'] },
    { title: 'Researchers', attributes: ['Formal research', 'Minimal workflows'] },
    { title: 'Casual Users', attributes: ['Minimal workflows', 'Low workflows'] },
    { title: 'Advanced Users', attributes: ['Advanced workflows', 'Formal research projects'] },
    { title: 'Basic Users', attributes: ['Minimal workflows', 'Simple tasks'] }
  ];

  // Overview data
  const hourlyAccuracyData = {
    labels: ['10:00 AM', '12:00 AM', '12:00 AM', '2:00 PM', '4:00 PM', '6:00 PM', '8:00 PM', '1:00 PM', '6:00 PM'],
    datasets: [
      { 
        label: 'Command Accuracy', 
        data: [70, 68, 72, 75, 80, 78, 76, 74, 72], 
        borderColor: '#06b6d4',
        backgroundColor: 'rgba(6,182,212,0.1)',
        fill: true
      }
    ]
  };

  return (
    <>
      <Head>
        <title>User Analytics Features | Kahana</title>
        <meta
          name="description"
          content="Explore Kahana's User Analytics features: dashboards, funnels, path analysis, alerts, and reporting to understand and grow engagement."
        />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-KQHFL9605P"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);} 
          gtag('js', new Date());
          gtag('config', 'G-KQHFL9605P');
        `}
      </Script>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-kahana-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              User Analytics,<br />Clarity for Product Growth
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measure engagement, uncover bottlenecks, and drive adoption with built-in analytics inside Oasis.
            </p>
          </div>
        </div>
      </section>

      {/* Analytics Overview Section */}
      <section className="bg-white/60 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DashboardSelector 
            selectedDashboard={selectedDashboard} 
            onSelect={setSelectedDashboard} 
          />
          {selectedDashboard !== 'internal' && selectedDashboard !== 'user' && (
            <div className="flex items-center justify-center mb-6">
              <Tabs tabs={tabs} active={activeTab} onChange={setActiveTab} />
            </div>
          )}

          {selectedDashboard === 'user' && (
            <>
              <div className="flex items-center justify-center mb-6">
                <Tabs tabs={userTabs} active={userTab} onChange={setUserTab} />
              </div>

              {userTab === 'overview' && (
                <>
                  {/* Top Row - KPI Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-50 p-8 transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <div className="text-sm text-gray-500">Daily Focus</div>
                          <div className="text-2xl font-bold text-gray-900">58 min</div>
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-gray-600">Weekly average: 40 min</div>
                        <div className="text-xs text-blue-600">+15% from last week</div>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg border border-gray-50 p-8 transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <div className="text-sm text-gray-500">Shortcuts Used</div>
                          <div className="text-2xl font-bold text-gray-900">42</div>
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-gray-600">Efficiency score</div>
                        <div className="text-xs text-green-600">+3 new shortcuts</div>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg border border-gray-50 p-8 transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <div className="text-sm text-gray-500">Commands Executed</div>
                          <div className="text-2xl font-bold text-gray-900">136</div>
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-gray-600">Today's activity</div>
                        <div className="text-xs text-purple-600">Most productive day</div>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg border border-gray-50 p-8 transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <div className="text-sm text-gray-500">Current Streak</div>
                          <div className="text-2xl font-bold text-gray-900">5 days</div>
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .343-2 2-2 .343-2 2 2 2 0 2-2 .343-2 2 2c1.657 1.657 1.657 4.657 1.657 4.657z" />
                          </svg>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-gray-600">Consistent progress</div>
                        <div className="text-xs text-orange-600">Best: 12 days</div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Middle Row */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-50 p-8">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <div className="text-lg font-bold text-gray-900 mb-2">Focus Minutes Trends</div>
                          <div className="text-sm text-gray-500">Weekly progression</div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900">18</div>
                          <div className="text-xs text-blue-600">Latest day</div>
                        </div>
                      </div>
                      <div className="h-64 relative">
                        <LineChart
                          labels={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon']}
                          datasets={[{
                            label: 'Focus Minutes',
                            data: [10,12,11,15,14,16,15,18],
                            borderColor: '#3b82f6',
                            backgroundColor: 'rgba(59,130,246,0.08)',
                            fill: true,
                            tension: 0.5,
                            borderWidth: 3,
                            pointRadius: 6,
                            pointBorderWidth: 3,
                            pointBorderColor: '#ffffff',
                            pointBackgroundColor: '#3b82f6'
                          }]}
                          height={256}
                          showAxes={true}
                          showGrid={true}
                          yMin={5}
                          yMax={25}
                        />
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-2"></div>
                          <span className="text-sm font-medium text-gray-700">Daily focus</span>
                        </div>
                        <div className="text-sm">
                          <span className="text-blue-600 font-semibold">+44%</span> 
                          <span className="text-gray-600"> vs week start</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg border border-gray-50 p-8">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <div className="text-lg font-bold text-gray-900 mb-2">Command Usage</div>
                          <div className="text-sm text-gray-500">Type distribution</div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900">136</div>
                          <div className="text-xs text-purple-600">Today total</div>
                        </div>
                      </div>
                      <div className="h-64 flex items-center justify-center">
                        <div className="relative w-48 h-48">
                          <DonutChart
                            data={[
                              { label: 'Navigation', value: 35, color: '#8b5cf6' },
                              { label: 'Search', value: 40, color: '#06b6d4' },
                              { label: 'Actions', value: 25, color: '#10b981' }
                            ]}
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-gray-900">136</div>
                              <div className="text-xs text-gray-500">Commands</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 grid grid-cols-3 gap-3">
                        <div className="text-center">
                          <div className="text-sm font-medium text-gray-700">Search</div>
                          <div className="text-xs text-cyan-600">40 commands</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-medium text-gray-700">Navigation</div>
                          <div className="text-xs text-purple-600">35 commands</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-medium text-gray-700">Actions</div>
                          <div className="text-xs text-green-600">25 commands</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg border border-gray-50 p-8">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <div className="text-lg font-bold text-gray-900">Badges Earned</div>
                          <div className="text-sm text-gray-500">Achievement progress</div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900">3</div>
                          <div className="text-xs text-orange-600">Total earned</div>
                        </div>
                      </div>
                      <div className="h-64 flex flex-col justify-center space-y-6">
                        <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-lg">
                          <div className="w-12 h-12 flex items-center justify-center text-3xl">🦥</div>
                          <div>
                            <div className="text-sm font-semibold text-orange-700">Explorer Sloth</div>
                            <div className="text-xs text-gray-600">First 5 searches</div>
                          </div>
                          <div className="ml-auto">
                            <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Earned</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                          <div className="w-12 h-12 flex items-center justify-center text-3xl">🦥</div>
                          <div>
                            <div className="text-sm font-semibold text-blue-700">Focused Sloth</div>
                            <div className="text-xs text-gray-600">30/30 minutes</div>
                          </div>
                          <div className="ml-auto">
                            <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Earned</div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-4 p-4 bg-indigo-50 rounded-lg">
                          <div className="w-12 h-12 flex items-center justify-center text-3xl">🦥</div>
                          <div>
                            <div className="text-sm font-semibold text-indigo-700">Night Owl Sloth</div>
                            <div className="text-xs text-gray-600">Late night productivity</div>
                          </div>
                          <div className="ml-auto">
                            <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Earned</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Bottom Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-50 p-8">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <div className="text-lg font-bold text-gray-900 mb-2">Performance Score</div>
                          <div className="text-sm text-gray-500">Overall efficiency</div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900">82%</div>
                          <div className="text-xs text-teal-600">Excellent</div>
                        </div>
                      </div>
                      <div className="h-48 flex items-center justify-center">
                        <div className="w-32 h-32 relative">
                          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="40" stroke="#e5e7eb" strokeWidth="8" fill="none"/>
                            <circle cx="50" cy="50" r="40" stroke="#06b6d4" strokeWidth="8" fill="none" 
                              strokeLinecap="round" strokeDasharray="251.2" strokeDashoffset="45.2"/>
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-teal-600">82</div>
                              <div className="text-xs text-gray-500">Score</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 text-center">
                        <div className="text-sm text-gray-700">Performance level</div>
                        <div className="text-xs text-teal-600">Maintaining consistency</div>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg border border-gray-50 p-8">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <div className="text-lg font-bold text-gray-900 mb-2">Weekly Progress</div>
                          <div className="text-sm text-gray-500">Goal completion</div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900">75%</div>
                          <div className="text-xs text-green-600">On track</div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-700">Focus Goals</span>
                            <span className="text-sm font-bold text-gray-900">6/8</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full" style={{width: '75%'}}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-700">Daily Walks</span>
                            <span className="text-sm font-bold text-gray-900">5/7</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full" style={{width: '71%'}}></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-700">Learning</span>
                            <span className="text-sm font-bold text-gray-900">4/7</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full" style={{width: '57%'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {userTab === 'progress' && (
                <>
                  {/* Enhanced Progress Overview */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-50 p-8">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <div className="text-lg font-bold text-gray-900">Weekly Focus Minutes</div>
                          <div className="text-sm text-gray-500">Productivity trends</div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900">85</div>
                          <div className="text-xs text-green-600">Latest week</div>
                        </div>
                      </div>
                      <div className="h-64 relative">
                        <LineChart 
                          labels={['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8']}
                          datasets={[{
                            label: 'Focus Minutes',
                            data: [5,15,35,45,38,70,75,85],
                            borderColor: '#059669',
                            backgroundColor: 'rgba(5,150,105,0.08)',
                            fill: true,
                            tension: 0.5,
                            borderWidth: 3,
                            pointRadius: 6,
                            pointBorderWidth: 3,
                            pointBorderColor: '#ffffff',
                            pointBackgroundColor: '#059669'
                          }]}
                          height={256}
                          showAxes={true}
                          showGrid={true}
                          yMin={0}
                          yMax={90}
                        />
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full mr-2"></div>
                          <span className="text-sm font-medium text-gray-700">Steady improvement</span>
                        </div>
                        <div className="text-sm">
                          <span className="text-green-600 font-semibold">+60%</span> 
                          <span className="text-gray-600"> vs month 1</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
                      {/* GitHub-style Header */}
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <div className="text-2xl font-bold text-gray-900 mb-1">728 contributions</div>
                          <div className="text-sm text-gray-500">in 2024</div>
                        </div>
                        <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded-md">
                          Contribution settings
                        </button>
                      </div>

                      {/* Month Labels - Full Width */}
                      <div className="flex justify-between items-center mb-3 text-xs text-gray-500 px-12">
                        <span>Jan</span>
                        <span>Feb</span>
                        <span>Mar</span>
                        <span>Apr</span>
                        <span>May</span>
                        <span>Jun</span>
                        <span>Jul</span>
                        <span>Aug</span>
                        <span>Sep</span>
                        <span>Oct</span>
                        <span>Nov</span>
                        <span>Dec</span>
                      </div>

                      {/* GitHub-Style Contribution Grid - Responsive Width */}
                      <div className="overflow-x-auto mb-4">
                        <div className="flex items-start min-w-max">
                          {/* Day labels */}
                          <div className="w-12 flex flex-col justify-center text-xs text-gray-500 mr-3">
                            <div className="mb-1 h-3"></div>
                            <div className="h-3 text-center">M</div>
                            <div className="mb-1 h-3"></div>
                            <div className="h-3 text-center">W</div>
                            <div className="mb-1 h-3"></div>
                            <div className="h-3 text-center">F</div>
                            <div className="mb-1 h-3"></div>
                          </div>
                          
                          {/* Calendar grid - Using flexbox for better responsiveness */}
                          <div className="flex flex-col">
                            {Array.from({length: 7}, (_, rowIndex) => (
                              <div key={rowIndex} className="flex mb-1">
                                {Array.from({length: 53}, (_, colIndex) => {
                                  const dayIndex = rowIndex + (colIndex * 7);
                                  const week = colIndex;
                                  
                                  let intensity = 0;
                                  const baseRand = Math.random();
                                  
                                  // January pattern - weeks 0-4 mostly empty
                                  if (week <= 4) {
                                    if (baseRand > 0.95) intensity = 1;
                                  } else {
                                    // February onwards - much more active
                                    if (baseRand > 0.8) intensity = 4;
                                    else if (baseRand > 0.65) intensity = 3;
                                    else if (baseRand > 0.45) intensity = 2;
                                    else if (baseRand > 0.2) intensity = 1;
                                  }
                                  
                                  const colors = [
                                    '#ebedf0', // No contributions
                                    '#9be9a8', // Low
                                    '#40c463', // Medium-low
                                    '#30a14e', // Medium-high
                                    '#216e39'  // High
                                  ];
                                  
                                  const contributionCount = intensity * Math.floor(Math.random() * 3) + intensity;
                                  const date = new Date(2024, 0, dayIndex + 1);
                                  
                                  // Skip invalid dates (days that don't exist in year)
                                  if (date.getFullYear() !== 2024) {
                                    return <div key={`${rowIndex}-${colIndex}`} className="w-3 h-3 mr-1"></div>;
                                  }
                                  
                                  return (
                                    <div 
                                      key={`${rowIndex}-${colIndex}`}
                                      className="w-3 h-3 rounded-sm hover:border border-gray-400 cursor-pointer mr-1"
                                      style={{ backgroundColor: colors[intensity] }}
                                      title={`${contributionCount} contribution${contributionCount !== 1 ? 's' : ''} on ${date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`}
                                    />
                                  );
                                })}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Legend */}
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-blue-600 hover:underline cursor-pointer">
                          Learn how we count contributions.
                        </div>
                        <div className="flex items-center space-x-1">
                          <span className="text-xs text-gray-500">Less</span>
                          <div className="flex space-x-1">
                            {[
                              '#ebedf0',
                              '#9be9a8', 
                              '#40c463',
                              '#30a14e',
                              '#216e39'
                            ].map((color, i) => (
                              <div 
                                key={i}
                                className="w-3 h-3 rounded-sm"
                                style={{ backgroundColor: color }}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-500">More</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sessions & Level Progress Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-50 p-8">
                      <div className="mb-6">
                        <div className="text-lg font-bold text-gray-900 mb-2">Sessions Completed</div>
                        <div className="text-sm text-gray-500">Daily consistency</div>
                      </div>
                      <div className="h-48">
                        <BarChart 
                          labels={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]} 
                          values={[3,5,4,6,5,7,8]} 
                          color="rgba(59,130,246,0.8)" 
                          yMin={0} 
                          yMax={10} 
                        />
                      </div>
                      <div className="mt-4 text-center">
                        <div className="text-sm font-medium text-gray-700">Best day: Sunday</div>
                        <div className="text-xs text-blue-600">8 sessions completed</div>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg border border-gray-50 p-8">
                      <div className="mb-6">
                        <div className="text-lg font-bold text-gray-900 mb-2">Level Progress</div>
                        <div className="text-sm text-gray-500">Achievement track</div>
                      </div>
                      <div className="h-48 flex items-center justify-center">
                        <div className="w-32 h-32 relative">
                          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="40" stroke="#e5e7eb" strokeWidth="8" fill="none"/>
                            <circle cx="50" cy="50" r="40" stroke="#8b5cf6" strokeWidth="8" fill="none" 
                              strokeLinecap="round" strokeDasharray="251.2" strokeDashoffset="75.4"/>
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-purple-600">70%</div>
                              <div className="text-xs text-gray-500">Level</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 text-center">
                        <div className="text-sm text-gray-700">Level 7 → 8</div>
                        <div className="text-xs text-purple-600">Next: Focus mastery</div>
                      </div>
                    </div>
                  </div>

                  {/* Weekly Progress Row */}
                  <div className="mb-12">
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-50 p-8">
                      <div className="flex justify-between items-center mb-8">
                        <div>
                          <div className="text-xl font-bold text-gray-900 mb-2">Weekly Progress</div>
                          <div className="text-sm text-gray-500">Track your goal completion</div>
                        </div>
                        <div className="text-right bg-green-50 px-4 py-3 rounded-xl">
                          <div className="text-2xl font-bold text-green-700">78%</div>
                          <div className="text-sm text-green-600 font-medium">Overall complete</div>
                        </div>
                      </div>

                      {/* Progress Cards */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Focus Hours Goal */}
                        <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200 hover:shadow-md transition-all">
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              <div>
                                <div className="text-lg font-semibold text-gray-900">Focus Hours</div>
                                <div className="text-sm text-gray-600">Daily concentration targets</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-xl font-bold text-blue-600">15/20</div>
                              <div className="text-xs text-blue-600">95% complete</div>
                            </div>
                          </div>
                          
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-700">This week's progress</span>
                              <span className="text-sm font-semibold text-blue-600">75%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-4">
                              <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-4 rounded-full flex items-center justify-end pr-2" style={{width: '75%'}}>
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                            <div className="text-xs text-gray-600">Peak day: Wednesday with 4.2 hours</div>
                          </div>
                        </div>

                        {/* Commands Goal */}
                        <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 hover:shadow-md transition-all">
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                              </div>
                              <div>
                                <div className="text-lg font-semibold text-gray-900">Commands Completed</div>
                                <div className="text-sm text-gray-600">Productivity actions taken</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-xl font-bold text-green-600">135/150</div>
                              <div className="text-xs text-green-600">90% complete</div>
                            </div>
                          </div>
                          
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-700">Weekly target progress</span>
                              <span className="text-sm font-semibold text-green-600">90%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-4">
                              <div className="bg-gradient-to-r from-green-500 to-green-600 h-4 rounded-full flex items-center justify-end pr-2" style={{width: '90%'}}>
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                            <div className="text-xs text-gray-600">Average: 27 commands per day</div>
                          </div>
                        </div>

                        {/* Learning Tasks Goal */}
                        <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200 hover:shadow-md transition-all">
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                              </div>
                              <div>
                                <div className="text-lg font-semibold text-gray-900">Learning Tasks</div>
                                <div className="text-sm text-gray-600">Educational milestones</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-xl font-bold text-purple-600">4/7</div>
                              <div className="text-xs text-purple-600">57% complete</div>
                            </div>
                          </div>
                          
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-700">Weekly learning target</span>
                              <span className="text-sm font-semibold text-purple-600">57%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-4">
                              <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-4 rounded-full flex items-center justify-end pr-2" style={{width: '57%'}}>
                                <span className="text-white text-xs font-bold">4</span>
                              </div>
                            </div>
                            <div className="text-xs text-gray-600">Next milestone: Complete 2 more tasks</div>
                          </div>
                        </div>
                      </div>

                      {/* Weekly Summary */}
                      <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-200">
                        <div className="flex justify-between items-center mb-4">
                          <div>
                            <div className="text-lg font-semibold text-gray-900 mb-2">This Week's Performance</div>
                            <div className="text-sm text-gray-600">Overall goal achievement</div>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold text-gray-900">Great</div>
                            <div className="text-xs text-gray-600">Above average</div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4">
                          <div className="text-center">
                            <div className="text-sm text-gray-600">Completed</div>
                            <div className="text-lg font-bold text-green-600">2.5</div>
                            <div className="text-xs text-green-600">of 3 goals</div>
                          </div>
                          <div className="text-center">
                            <div className="text-sm text-gray-600">Streak</div>
                            <div className="text-lg font-bold text-blue-600">8</div>
                            <div className="text-xs text-blue-600">consecutive weeks</div>
                          </div>
                          <div className="text-center">
                            <div className="text-sm text-gray-600">Trend</div>
                            <div className="text-lg font-bold text-purple-600">↗️</div>
                            <div className="text-xs text-purple-600">+15% vs last week</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {userTab === 'habits' && (
                <>
                  {/* Enhanced Habits Dashboard */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-50 p-8">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <div className="text-lg font-bold text-gray-900">Daily Focus Minutes</div>
                          <div className="text-sm text-gray-500">Consistency tracking</div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900">58</div>
                          <div className="text-xs text-blue-600">Today</div>
                        </div>
                      </div>
                      <div className="h-64 relative">
                        <LineChart 
                          labels={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
                          datasets={[{
                            label: 'Focus Minutes',
                            data: [28,35,32,40,38,52,58],
                            borderColor: '#3b82f6',
                            backgroundColor: 'rgba(59,130,246,0.08)',
                            fill: true,
                            tension: 0.5,
                            borderWidth: 3,
                            pointRadius: 6,
                            pointBorderWidth: 3,
                            pointBorderColor: '#ffffff',
                            pointBackgroundColor: '#3b82f6'
                          }]}
                          height={256}
                          showAxes={true}
                          showGrid={true}
                          yMin={20}
                          yMax={70}
                        />
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-2"></div>
                          <span className="text-sm font-medium text-gray-700">Weekly average: 41 min</span>
                        </div>
                        <div className="text-sm">
                          <span className="text-blue-600 font-semibold">+107%</span> 
                          <span className="text-gray-600"> vs last week</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg border border-gray-50 p-8">
                      <div className="flex justify-between items-center mb-8">
                        <div>
                          <div className="text-xl font-bold text-gray-900 mb-2">Activity Patterns</div>
                          <div className="text-sm text-gray-500">When are you most productive?</div>
                        </div>
                        <div className="text-right bg-emerald-50 px-4 py-3 rounded-xl">
                          <div className="text-2xl font-bold text-emerald-700">73</div>
                          <div className="text-sm text-emerald-600 font-medium">Peak activity</div>
                        </div>
                      </div>

                      {/* Enhanced Heatmap */}
                      <div className="space-y-4">
                        {/* Time labels */}
                        <div className="flex justify-end text-xs text-gray-500 font-medium">
                          <div className="w-20 text-center">Most Active</div>
                        </div>
                        
                        {/* Heatmap grid */}
                        <div className="space-y-4">
                          {/* Day labels */}
                          <div className="flex justify-end">
                            <div className="w-72 flex justify-between text-xs text-gray-500 font-medium px-4">
                              <span>Morning</span>
                              <span>Midday</span>
                              <span>Afternoon</span>
                              <span>Evening</span>
                            </div>
                          </div>

                          {/* Activity grid */}
                          <div className="space-y-3">
                            {/* Generate realistic activity patterns for all 7 days */}
                            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, dayIndex) => (
                              <div key={day} className="flex items-center">
                                <div className="w-16 text-xs text-gray-600 font-medium">{day}</div>
                                <div className="flex space-x-3">
                                  {['AM', 'Mid', 'PM', 'Eve'].map((time, timeIndex) => {
                                    const intensity = Math.floor(Math.random() * 5);
                                    const colors = [
                                      '#f1f5f9', // No activity
                                      '#bfdbfe', // Low activity  
                                      '#60a5fa', // Medium-low
                                      '#2563eb', // Medium-high
                                      '#1d4ed8'  // High activity
                                    ];
                                    
                                    return (
                                      <div 
                                        key={time}
                                        className="w-10 h-10 rounded-lg hover:scale-110 transition-all cursor-pointer flex items-center justify-center shadow-sm"
                                        style={{ backgroundColor: colors[intensity] }}
                                        title={`${day} ${time}: ${intensity === 0 ? 'No activity' : intensity === 1 ? 'Low activity' : intensity === 2 ? 'Medium activity' : intensity === 3 ? 'High activity' : 'Peak activity'} (${Math.floor(Math.random() * 25 + intensity * 5)} commands)`}
                                      >
                                        {intensity === 4 && <div className="text-white text-xs font-bold">🔥</div>}
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Activity levels */}
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500">Less active</span>
                          <div className="flex space-x-1">
                            {[0,1,2,3,4].map(level => (
                              <div 
                                key={level}
                                className="w-6 h-6 rounded-lg"
                                style={{ backgroundColor: ['#f1f5f9', '#bfdbfe', '#60a5fa', '#2563eb', '#1d4ed8'][level] }}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-500">Peak activity</span>
                        </div>
                      </div>

                      {/* Insights section */}
                      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl border border-blue-200">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="text-lg font-semibold text-gray-900 mb-2">Productivity Insights</div>
                            <div className="text-sm text-gray-700">Your most productive time windows</div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs text-emerald-600 font-medium">Wed-Fri 2-4 PM</div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4 mt-4">
                          <div className="text-center">
                            <div className="text-sm text-gray-600">Peak Hours</div>
                            <div className="text-lg font-bold text-blue-600">2-4 PM</div>
                            <div className="text-xs text-blue-600">73 avg commands</div>
                          </div>
                          <div className="text-center">
                            <div className="text-sm text-gray-600">Consistency</div>
                            <div className="text-lg font-bold text-emerald-600">95%</div>
                            <div className="text-xs text-emerald-600">Active patterns</div>
                          </div>
                          <div className="text-center">
                            <div className="text-sm text-gray-600">Weekly Trend</div>
                            <div className="text-lg font-bold text-purple-600">+12%</div>
                            <div className="text-xs text-purple-600">vs last week</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Efficiency Metrics */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-50 p-8">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <div className="text-lg font-bold text-gray-900">Tab Efficiency</div>
                          <div className="text-sm text-gray-500">Bounce rate tracking</div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900">12%</div>
                          <div className="text-xs text-blue-600">Current rate</div>
                        </div>
                      </div>
                      <div className="h-48 relative">
                        <LineChart 
                          labels={['Week 1', 'Week 2', 'Week 3', 'Week 4']}
                          datasets={[{
                            label: 'Bounce Rate %',
                            data: [15,12,14,12],
                            borderColor: '#3b82f6',
                            backgroundColor: 'rgba(59,130,246,0.08)',
                            fill: true,
                            tension: 0.5,
                            borderWidth: 3,
                            pointRadius: 6,
                            pointBorderWidth: 3,
                            pointBorderColor: '#ffffff',
                            pointBackgroundColor: '#3b82f6'
                          }]}
                          height={192}
                          showAxes={true}
                          showGrid={true}
                          yMin={5}
                          yMax={20}
                        />
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg border border-gray-50 p-8">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <div className="text-lg font-bold text-gray-900">Session Length</div>
                          <div className="text-sm text-gray-500">Average duration</div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900">24m</div>
                          <div className="text-xs text-purple-600">Per session</div>
                        </div>
                      </div>
                      <div className="h-48 relative">
                        <BarChart 
                          labels={["5m", "15m", "25m", "30m", "45m", "60m"]} 
                          values={[2,1,3,2,1,4]} 
                          color="rgba(124,58,237,0.8)" 
                          yMin={0} 
                          yMax={5} 
                        />
                      </div>
                    </div>
                  </div>

                  {/* Habits Metrics */}
                  <div className="grid grid-cols-1 gap-10 mb-12">

                    <div className="bg-white rounded-2xl shadow-lg border border-gray-50 p-8">
                      <div className="flex justify-between items-center mb-8">
                        <div>
                          <div className="text-xl font-bold text-gray-900 mb-2">Daily Routine Management</div>
                          <div className="text-sm text-gray-500">Track your habit consistency and effectiveness</div>
                        </div>
                        <div className="text-right bg-green-50 px-4 py-2 rounded-lg">
                          <div className="text-xl font-bold text-green-700">3</div>
                          <div className="text-xs text-green-600">Active routines</div>
                        </div>
                      </div>

                      {/* Routine List */}
                      <div className="space-y-6 mb-8">
                        {/* Morning Focus Routine */}
                        <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 hover:shadow-md transition-all">
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                              </div>
                              <div>
                                <div className="text-lg font-semibold text-gray-900">Morning Focus</div>
                                <div className="text-sm text-gray-600">Daily • 30 minutes</div>
                              </div>
                            </div>
                            <div className="flex flex-col items-end">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                Active
                              </span>
                              <div className="text-xs text-green-600 mt-1">Streak: 12 days</div>
                            </div>
                          </div>
                          <div className="ml-13">
                            <div className="text-sm text-gray-700 mb-2">Last completed: Today at 10:30 AM</div>
                            <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-600">Weekly goal: 7/7 days</div>
                              <div className="text-sm font-semibold text-green-700">✓ Completed today</div>
                            </div>
                          </div>
                        </div>

                        {/* Learning Session Routine */}
                        <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200 hover:shadow-md transition-all">
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                              </div>
                              <div>
                                <div className="text-lg font-semibold text-gray-900">Learning Session</div>
                                <div className="text-sm text-gray-600">Weekly • 45 minutes</div>
                              </div>
                            </div>
                            <div className="flex flex-col items-end">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                                Active
                              </span>
                              <div className="text-xs text-blue-600 mt-1">3/4 this week</div>
                            </div>
                          </div>
                          <div className="ml-13">
                            <div className="text-sm text-gray-700 mb-2">Target: 4 sessions per week</div>
                            <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-600">Progress: Mon, Wed, Fri completed</div>
                              <div className="text-sm font-semibold text-blue-700">75% weekly goal</div>
                            </div>
                          </div>
                        </div>

                        {/* Daily Review Routine */}
                        <div className="p-6 bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl border border-gray-200 hover:shadow-md transition-all">
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.186a1 1 0 00.646-.225l2.168-1.62A2 2 0 0118 1h1a1 1 0 011 1v18a1 1 0 01-1 1z" />
                                </svg>
                              </div>
                              <div>
                                <div className="text-lg font-semibold text-gray-900">Daily Review</div>
                                <div className="text-sm text-gray-600">Daily • 15 minutes</div>
                              </div>
                            </div>
                            <div className="flex flex-col items-end">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                <div className="w-2 h-2 bg-gray-500 rounded-full mr-2"></div>
                                Paused
                              </span>
                              <div className="text-xs text-gray-600 mt-1">Last: 2 days ago</div>
                            </div>
                          </div>
                          <div className="ml-13">
                            <div className="text-sm text-gray-700 mb-2">Status: Temporarily paused</div>
                            <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-600">Streak broken • Need restart</div>
                              <button className="text-sm font-semibold text-gray-700 hover:text-gray-900">Restart routine</button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Effectiveness Summary */}
                      <div className="p-6 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl border border-purple-200">
                        <div className="flex justify-between items-center mb-4">
                          <div>
                            <div className="text-lg font-semibold text-gray-900 mb-2">Routine Effectiveness</div>
                            <div className="text-sm text-gray-700">This week's performance summary</div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-purple-700">Excellent</div>
                            <div className="text-xs text-purple-600">Above target</div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center">
                            <div className="text-sm text-gray-600">Weekly Performance</div>
                            <div className="text-lg font-bold text-purple-600">92%</div>
                            <div className="text-xs text-purple-600">completion rate</div>
                          </div>
                          <div className="text-center">
                            <div className="text-sm text-gray-600">Focused Time</div>
                            <div className="text-lg font-bold text-purple-600">2.3h</div>
                            <div className="text-xs text-purple-600">daily average</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </>
              )}
              {userTab === 'achievements' && (
                <>
                  <div className="mb-4 flex gap-2">
                    <button className="px-4 py-2 rounded-md bg-gray-100 text-gray-700">Locked</button>
                    <button className="px-4 py-2 rounded-md bg-teal-600 text-white">Earned</button>
                  </div>
                  <AchievementsGrid />
                </>
              )}
            </>
          )}

          {selectedDashboard === 'internal' && (
            <>
              <div className="flex items-center justify-center mb-6">
                <Tabs tabs={internalTabs} active={internalTab} onChange={setInternalTab} />
              </div>

              {internalTab === 'overview' && (
                <>
                  {/* Key System Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <div className="text-gray-900 font-semibold mb-1">System Health</div>
                          <div className="text-sm text-gray-500">Overall infrastructure status</div>
                        </div>
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      <div className="text-center mb-4">
                        <div className="text-3xl font-bold text-green-600">All Systems</div>
                        <div className="text-xs text-green-600">Operational</div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-500">Core Services:</span>
                          <span className="font-medium text-green-600">✓ Running</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-500">Database:</span>
                          <span className="font-medium text-green-600">✓ Healthy</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-500">Cache Layer:</span>
                          <span className="font-medium text-green-600">✓ Active</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <div className="text-gray-900 font-semibold mb-1">API Latency</div>
                          <div className="text-sm text-gray-500">Response time performance</div>
                        </div>
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      <div className="text-center mb-4">
                        <div className="text-3xl font-bold text-blue-600">320ms</div>
                        <div className="text-xs text-blue-600">Average</div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-500">95th Percentile:</span>
                          <span className="font-medium text-gray-900">520ms</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-500">Target (&lt;800ms):</span>
                          <span className="font-medium text-green-600">✓ Good</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-500">Trend vs yesterday:</span>
                          <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                          </svg>
                          <span className="font-medium text-green-600">-12ms</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <div className="text-gray-900 font-semibold mb-1">Error Rate</div>
                          <div className="text-sm text-gray-500">System reliability</div>
                        </div>
                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.28 16.5c-.77.833.192 2.5 1.732 2.5z" />
                          </svg>
                        </div>
                      </div>
                      <div className="text-center mb-4">
                        <div className="text-3xl font-bold text-red-600">0.5%</div>
                        <div className="text-xs text-red-600">Current rate</div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-500">Last month:</span>
                          <span className="font-medium text-gray-900">0.52%</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-500">Target (&lt;1%):</span>
                          <span className="font-medium text-green-600">✓ Good</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-500">Error count:</span>
                          <span className="font-medium text-red-600">2.3k this month</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Performance Charts Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <div className="text-gray-900 font-semibold mb-2">Requests per Second</div>
                          <div className="text-sm text-gray-500">Real-time throughput</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-blue-600">1,550</div>
                          <div className="text-xs text-gray-600">Peak RPS</div>
                        </div>
                      </div>
                      <div className="h-48 relative">
                        <LineChart 
                          labels={["8AM", "12PM", "4PM", "8PM", "12AM", "4AM"]} 
                          datasets={[{
                            label: 'Requests/sec',
                            data: [1200, 1450, 1580, 1420, 1180, 1050],
                            borderColor: '#3b82f6',
                            backgroundColor: 'rgba(59,130,246,0.1)',
                            fill: true,
                            tension: 0.4,
                            borderWidth: 2,
                            pointRadius: 4,
                            pointBackgroundColor: '#3b82f6'
                          }]} 
                          height={192} 
                          showAxes={true} 
                          showGrid={true} 
                          yMin={1000} 
                          yMax={1600} 
                        />
                      </div>
                      <div className="flex justify-between items-center text-sm mt-4">
                        <span className="text-gray-600">Average: 1,313 RPS</span>
                        <span className="text-green-600">+18% vs yesterday</span>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <div className="text-gray-900 font-semibold mb-2">Active Users</div>
                          <div className="text-sm text-gray-500">Concurrent user sessions</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-green-600">780</div>
                          <div className="text-xs text-gray-600">Current</div>
                        </div>
                      </div>
                      <div className="h-48 relative">
                        <LineChart 
                          labels={["8AM", "12PM", "4PM", "8PM", "12AM", "4AM"]} 
                          datasets={[{
                            label: 'Active Users',
                            data: [450, 720, 780, 680, 520, 380],
                            borderColor: '#10b981',
                            backgroundColor: 'rgba(16,185,129,0.1)',
                            fill: true,
                            tension: 0.4,
                            borderWidth: 2,
                            pointRadius: 4,
                            pointBackgroundColor: '#10b981'
                          }]} 
                          height={192} 
                          showAxes={true} 
                          showGrid={true} 
                          yMin={0} 
                          yMax={800} 
                        />
                      </div>
                      <div className="flex justify-between items-center text-sm mt-4">
                        <span className="text-gray-600">Peak: 780 users</span>
                        <span className="text-green-600">+5% vs yesterday</span>
                      </div>
                    </div>
                  </div>

                  {/* Performance Charts Second Row */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <div className="text-gray-900 font-semibold mb-2">Request Latency Trends</div>
                          <div className="text-sm text-gray-500">P50 vs P95 percentile</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-gray-600">Last 24h</div>
                        </div>
                      </div>
                      <div className="h-48 relative">
                        <LineChart 
                          labels={["Midnight", "6AM", "12PM", "6PM", "Midnight"]} 
                          datasets={[{
                            label: 'P50',
                            data: [280, 295, 320, 340, 318],
                            borderColor: '#3b82f6',
                            backgroundColor: 'rgba(59,130,246,0.1)',
                            fill: true,
                            tension: 0.4,
                            borderWidth: 2,
                            pointRadius: 4,
                            pointBackgroundColor: '#3b82f6'
                          }, {
                            label: 'P95',
                            data: [420, 450, 520, 580, 495],
                            borderColor: '#ef4444',
                            backgroundColor: 'rgba(239,68,68,0.1)',
                            fill: true,
                            tension: 0.4,
                            borderWidth: 2,
                            pointRadius: 4,
                            pointBackgroundColor: '#ef4444'
                          }]} 
                          height={192} 
                          showAxes={true} 
                          showGrid={true} 
                          yMin={200} 
                          yMax={600} 
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4 mt-4 text-center">
                        <div>
                          <div className="text-sm font-medium text-blue-600">320ms</div>
                          <div className="text-xs text-gray-500">P50 Average</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-red-600">520ms</div>
                          <div className="text-xs text-gray-500">P95 Average</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <div className="text-gray-900 font-semibold mb-2">Error Analysis</div>
                          <div className="text-sm text-gray-500">By error type</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-gray-600">Last 7 days</div>
                        </div>
                      </div>
                      <div className="h-48 relative">
                        <BarChart 
                          labels={["Timeout", "Auth", "Rate Limit", "Server", "Network"]} 
                          values={[45, 32, 24, 18, 12]} 
                          color="rgba(239,68,68,0.8)" 
                          yMin={0} 
                          yMax={50} 
                        />
                      </div>
                      <div className="text-center mt-4">
                        <div className="text-sm font-medium text-red-600">Total: 131 errors</div>
                        <div className="text-xs text-gray-500">Most common: Timeout (34%)</div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <div className="text-gray-900 font-semibold mb-2">Cost by AI Model</div>
                          <div className="text-sm text-gray-500">Resource consumption</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-gray-600">Today</div>
                        </div>
                      </div>
                      <div className="h-48 relative">
                        <BarChart 
                          labels={["GPT-4", "GPT-3.5", "Claude", "Other"]} 
                          values={[2800, 1800, 1200, 800]} 
                          color="rgba(139,92,246,0.8)" 
                          yMin={0} 
                          yMax={3000} 
                        />
                      </div>
                      <div className="grid grid-cols-4 gap-2 mt-4 text-center">
                        <div>
                          <div className="text-sm font-medium text-purple-600">46%</div>
                          <div className="text-xs text-gray-500">GPT-4</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-purple-600">30%</div>
                          <div className="text-xs text-gray-500">GPT-3.5</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-purple-600">20%</div>
                          <div className="text-xs text-gray-500">Claude</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-purple-600">13%</div>
                          <div className="text-xs text-gray-500">Other</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Infrastructure Monitoring */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <div className="text-gray-900 font-semibold mb-2">Top API Endpoints</div>
                          <div className="text-sm text-gray-500">Request volume by endpoint</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-gray-600">Last 24h</div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                            <span className="text-sm text-gray-700">GET /users</span>
                          </div>
                          <div className="text-sm font-medium text-gray-900">1.2M</div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                            <span className="text-sm text-gray-700">POST /data</span>
                          </div>
                          <div className="text-sm font-medium text-gray-900">850K</div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                            <span className="text-sm text-gray-700">GET /status</span>
                          </div>
                          <div className="text-sm font-medium text-gray-900">620K</div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                            <span className="text-sm text-gray-700">PUT /config</span>
                          </div>
                          <div className="text-sm font-medium text-gray-900">410K</div>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="text-sm">
                          <span className="text-gray-700">Total Requests:</span>
                          <span className="font-medium text-gray-900 ml-2">3.08M</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <div className="text-gray-900 font-semibold mb-2">Service Uptime</div>
                          <div className="text-sm text-gray-500">Infrastructure components</div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-green-600">99.9%</div>
                          <div className="text-xs text-green-600">Average</div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-4 h-4 bg-green-500 rounded mr-3"></div>
                            <span className="text-sm text-gray-700">Core Services</span>
                          </div>
                          <div className="text-sm font-medium text-green-600">99.99%</div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-4 h-4 bg-green-500 rounded mr-3"></div>
                            <span className="text-sm text-gray-700">Database</span>
                          </div>
                          <div className="text-sm font-medium text-green-600">99.95%</div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-4 h-4 bg-green-500 rounded mr-3"></div>
                            <span className="text-sm text-gray-700">Cache Layer</span>
                          </div>
                          <div className="text-sm font-medium text-green-600">99.98%</div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-4 h-4 bg-green-500 rounded mr-3"></div>
                            <span className="text-sm text-gray-700">CDN</span>
                          </div>
                          <div className="text-sm font-medium text-green-600">99.92%</div>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="text-sm">
                          <span className="text-gray-700">Overall SLA:</span>
                          <span className="font-medium text-green-600 ml-2">99.9%</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <div className="text-gray-900 font-semibold mb-2">Recent Alerts</div>
                          <div className="text-sm text-gray-500">System notifications</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-red-600">3 Active</div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                              <span className="text-sm font-medium text-red-800">High latency in DB</span>
                            </div>
                            <span className="text-xs text-red-600">2 min ago</span>
                          </div>
                          <div className="text-xs text-red-700 mt-1">
                            Database response time exceeded 500ms
                          </div>
                        </div>
                        <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                              <span className="text-sm font-medium text-yellow-800">Service X unresponsive</span>
                            </div>
                            <span className="text-xs text-yellow-600">15 min ago</span>
                          </div>
                          <div className="text-xs text-yellow-700 mt-1">
                            Microservice health check failing
                          </div>
                        </div>
                        <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                              <span className="text-sm font-medium text-blue-800">Disk usage critical</span>
                            </div>
                            <span className="text-xs text-blue-600">30 min ago</span>
                          </div>
                          <div className="text-xs text-blue-700 mt-1">
                            Server disk space running low
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="text-sm">
                          <span className="text-gray-700">Auto-resolved:</span>
                          <span className="font-medium text-green-600 ml-2">127 in last 24h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {internalTab === 'reliability' && (
                <>
                  {/* Key Reliability Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <div className="text-gray-900 font-semibold mb-1">System Uptime</div>
                          <div className="text-sm text-gray-500">Service availability</div>
                        </div>
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      <div className="text-center mb-4">
                        <div className="text-3xl font-bold text-green-600">99.9%</div>
                        <div className="text-xs text-green-600">Last 30 days</div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-500">Target:</span>
                          <span className="font-medium text-gray-900">99.95%</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-500">Downtime:</span>
                          <span className="font-semibold text-orange-600">43 minutes</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-500">Impact:</span>
                          <span className="font-medium text-green-600">✓ Minimal</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <div className="text-gray-900 font-semibold mb-1">Error Budgets</div>
                          <div className="text-sm text-gray-500">Service level agreements</div>
                        </div>
                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      <div className="text-center mb-4">
                        <div className="text-3xl font-bold text-yellow-600">87%</div>
                        <div className="text-xs text-yellow-600">Budget remaining</div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-500">Consumed:</span>
                          <span className="font-medium text-orange-600">13%</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-500">Rate vs budget:</span>
                          <span className="font-medium text-green-600">-15%</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-500">Burn budget:</span>
                          <span className="font-medium text-red-600">18 days</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg borderborder-gray-100 p-6">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <div className="text-gray-900 font-semibold mb-1">SLOs Met</div>
                          <div className="text-sm text-gray-500">Compliance tracking</div>
                        </div>
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                      <div className="text-center mb-4">
                        <div className="text-3xl font-bold text-green-600">96%</div>
                        <div className="text-xs text-green-600">SLO compliance</div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-500">Violations:</span>
                          <span className="font-medium text-red-600">3 this month</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-500">MTTR:</span>
                          <span className="font-medium text-gray-900">8 min</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-500">Severity:</span>
                          <span className="font-medium text-yellow-600">Low-Medium</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Latency & Health Charts */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <div className="text-gray-900 font-semibold mb-2">Latency Percentiles</div>
                          <div className="text-sm text-gray-500">Response time distribution</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-gray-600">Last 24h</div>
                        </div>
                      </div>
                      <div className="h-48 relative">
                        <LineChart 
                          labels={["Midnight", "6AM", "12PM", "6PM", "Midnight"]} 
                          datasets={[{
                            label: 'P50',
                            data: [120, 125, 115, 135, 130],
                            borderColor: '#3b82f6',
                            backgroundColor: 'rgba(59,130,246,0.1)',
                            fill: true,
                            tension: 0.4,
                            borderWidth: 2,
                            pointRadius: 4,
                            pointBackgroundColor: '#3b82f6'
                          }, {
                            label: 'P95',
                            data: [280, 295, 270, 320, 310],
                            borderColor: '#ef4444',
                            backgroundColor: 'rgba(239,68,68,0.1)',
                            fill: true,
                            tension: 0.4,
                            borderWidth: 2,
                            pointRadius: 4,
                            pointBackgroundColor: '#ef4444'
                          }, {
                            label: 'P99',
                            data: [520, 550, 480, 580, 560],
                            borderColor: '#f59e0b',
                            backgroundColor: 'rgba(245,158,11,0.1)',
                            fill: true,
                            tension: 0.4,
                            borderWidth: 2,
                            pointRadius: 4,
                            pointBackgroundColor: '#f59e0b'
                          }]} 
                          height={192} 
                          showAxes={true} 
                          showGrid={true} 
                          yMin={80} 
                          yMax={600} 
                        />
                      </div>
                      <div className="grid grid-cols-3 gap-2 mt-4 text-center">
                        <div>
                          <div className="text-sm font-medium text-blue-600">123ms</div>
                          <div className="text-xs text-gray-500">P50 Avg</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-red-600">295ms</div>
                          <div className="text-xs text-gray-500">P95 Avg</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-orange-600">538ms</div>
                          <div className="text-xs text-gray-500">P99 Avg</div>
                        </div>
                      </div>
                    </div>


                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <div className="text-gray-900 font-semibold mb-2">Dependency Health</div>
                          <div className="text-sm text-gray-500">External service status</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-gray-600">Real-time</div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-4 h-4 bg-green-500 rounded mr-3"></div>
                            <span className="text-sm text-gray-700">Database</span>
                          </div>
                          <div className="text-sm font-medium text-gray-900">
                            <span className="text-green-600">99.95%</span> uptime
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-4 h-4 bg-green-500 rounded mr-3"></div>
                            <span className="text-sm text-gray-700">Cache Layer</span>
                          </div>
                          <div className="text-sm font-medium text-gray-900">
                            <span className="text-green-600">99.98%</span> uptime
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-4 h-4 bg-yellow-500 rounded mr-3"></div>
                            <span className="text-sm text-gray-700">API Gateway</span>
                          </div>
                          <div className="text-sm font-medium text-gray-900">
                            <span className="text-yellow-600">98.7%</span> uptime
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-4 h-4 bg-green-500 rounded mr-3"></div>
                            <span className="text-sm text-gray-700">CDN</span>
                          </div>
                          <div className="text-sm font-medium text-gray-900">
                            <span className="text-green-600">99.97%</span> uptime
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="text-sm">
                          <span className="text-gray-700">Mean Time to Recovery:</span>
                          <span className="font-medium text-gray-900 ml-2">8.5 min</span>
                        </div>
                      </div>
                    </div>


                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <div className="text-gray-900 font-semibold mb-2">Alert Volume</div>
                          <div className="text-sm text-gray-500">System notifications</div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-red-600">24</div>
                          <div className="text-xs text-gray-600">Active</div>
                        </div>
                      </div>
                      <div className="h-48 relative">
                        <LineChart 
                          labels={["Midnight", "6AM", "12PM", "6PM", "Midnight"]} 
                          datasets={[{
                            label: 'Critical',
                            data: [2, 1, 3, 4, 2],
                            borderColor: '#ef4444',
                            backgroundColor: 'rgba(239,68,68,0.1)',
                            fill: true,
                            tension: 0.4,
                            borderWidth: 2,
                            pointRadius: 4,
                            pointBackgroundColor: '#ef4444'
                          }, {
                            label: 'Warning',
                            data: [12, 8, 15, 18, 14],
                            borderColor: '#f59e0b',
                            backgroundColor: 'rgba(245,158,11,0.1)',
                            fill: true,
                            tension: 0.4,
                            borderWidth: 2,
                            pointRadius: 4,
                            pointBackgroundColor: '#f59e0b'
                          }]} 
                          height={192} 
                          showAxes={true} 
                          showGrid={true} 
                          yMin={0} 
                          yMax={25} 
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4 mt-4 text-center">
                        <div>
                          <div className="text-sm font-medium text-red-600">12</div>
                          <div className="text-xs text-gray-500">Critical</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-orange-600">13</div>
                          <div className="text-xs text-gray-500">Warning</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Error & Performance Analysis */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <div className="text-gray-900 font-semibold mb-2">Error Rate Trends</div>
                          <div className="text-sm text-gray-500">By error type</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-gray-600">Last 7 days</div>
                        </div>
                      </div>
                      <div className="h-48 relative">
                        <BarChart 
                          labels={["Timeout", "Auth", "Rate Limit", "Server", "Network", "Client"]} 
                          values={[8, 6, 4, 7, 3, 5]} 
                          color="rgba(239,68,68,0.8)" 
                          yMin={0} 
                          yMax={10} 
                        />
                      </div>
                      <div className="text-center mt-4">
                        <div className="text-sm font-medium text-red-600">Total: 33 errors</div>
                        <div className="text-xs text-gray-500">Peak: Timeout errors (24%)</div>
                      </div>
                    </div>


                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <div className="text-gray-900 font-semibold mb-2">Incident Timeline</div>
                          <div className="text-sm text-gray-500">Resolution tracking</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-gray-600">This month</div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-gray-900">Critical System Outage</div>
                            <div className="text-xs text-gray-500">Resolved in 15 minutes</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-gray-900">Database Slowdown</div>
                            <div className="text-xs text-gray-500">Resolved in 25 minutes</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-gray-900">Cache Miss Spike</div>
                            <div className="text-xs text-gray-500">Auto-resolved</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-gray-900">API Rate Limiting</div>
                            <div className="text-xs text-gray-500">Monitoring mode</div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="text-sm">
                          <span className="text-gray-700">Average MTTR:</span>
                          <span className="font-medium text-gray-900 ml-2">12 min</span>
                        </div>
                      </div>
                    </div>


                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <div className="text-gray-900 font-semibold mb-2">Request Latency</div>
                          <div className="text-sm text-gray-500">Response time breakdown</div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-blue-600">142ms</div>
                          <div className="text-xs text-gray-600">Average</div>
                        </div>
                      </div>
                      <div className="h-48 relative">
                        <BarChart 
                          labels={["Auth", "Cache", "", "DB", "API", "Total"]} 
                          values={[25, 15, 35, 45, 22, 142]} 
                          color="rgba(59,130,246,0.8)" 
                          yMin={0} 
                          yMax={160} 
                        />
                      </div>
                      <div className="space-y-1 mt-4">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-gray-500">Database Query:</span>
                          <span className="font-medium text-gray-900">45ms</span>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-gray-500">Auth Service:</span>
                          <span className="font-medium text-gray-900">25ms</span>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-gray-500">Business Logic:</span>
                          <span className="font-medium text-gray-900">35ms</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* API Success/Failure Analysis */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <div className="text-gray-900 font-semibold mb-2">API Success Rate</div>
                          <div className="text-sm text-gray-500">Request success percentage</div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-green-600">92%</div>
                          <div className="text-xs text-gray-600">Success Rate</div>
                        </div>
                      </div>
                      <div className="text-center mb-6">
                        <div className="w-32 h-32 mx-auto relative">
                          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                            <path
                              className="text-gray-200"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <path
                              className="text-green-500"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeDasharray="92, 100"
                              strokeLinecap="round"
                              d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gray-900">92%</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-sm font-medium text-green-600">294.7k</div>
                          <div className="text-xs text-gray-500">Successful</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-600">25.3k</div>
                          <div className="text-xs text-gray-500">Failed</div>
                        </div>
                      </div>
                    </div>


                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <div className="text-gray-900 font-semibold mb-2">API Failure Analysis</div>
                          <div className="text-sm text-gray-500">Failure categorization</div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-red-600">8%</div>
                          <div className="text-xs text-gray-600">Failure Rate</div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-red-500 rounded mr-3"></div>
                            <span className="text-sm text-gray-700">Server Errors</span>
                          </div>
                          <div className="text-sm font-medium text-red-600">41%</div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-orange-500 rounded mr-3"></div>
                            <span className="text-sm text-gray-700">Timeout</span>
                          </div>
                          <div className="text-sm font-medium text-orange-600">29%</div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-yellow-500 rounded mr-3"></div>
                            <span className="text-sm text-gray-700">Auth Failures</span>
                          </div>
                          <div className="text-sm font-medium text-yellow-600">18%</div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-gray-500 rounded mr-3"></div>
                            <span className="text-sm text-gray-700">Other</span>
                          </div>
                          <div className="text-sm font-medium text-gray-600">12%</div>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="text-sm">
                          <span className="text-gray-700">Detection Time:</span>
                          <span className="font-medium text-gray-900 ml-2">47 seconds</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {internalTab === 'performance' && (
                <>
                  {/* Top Row - Key Performance Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <div className="text-gray-900 font-semibold mb-1">Requests per Second</div>
                          <div className="text-sm text-gray-500">Real-time throughput</div>
                        </div>
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="text-center mb-4">
                        <div className="text-3xl font-bold text-green-600">1.2K</div>
                        <div className="text-xs text-green-600">+8.3% vs last hour</div>
                      </div>
                      <div className="h-32 relative">
                        <LineChart
                          labels={["0m", "5m", "10m", "15m", "20m", "25m", "30m"]}
                          datasets={[{
                            label: 'RPS',
                            data: [1200, 1350, 1180, 1420, 1380, 1520, 1450],
                            borderColor: '#10b981',
                            backgroundColor: 'rgba(16,185,129,0.1)',
                            fill: true,
                            tension: 0.4,
                            borderWidth: 2,
                            pointRadius: 4,
                            pointBackgroundColor: '#10b981'
                          }]}
                          height={128}
                          showAxes={true}
                          showGrid={true}
                          yMin={1000}
                          yMax={1600}
                        />
                      </div>
                      <div className="text-center text-xs text-gray-500 mt-2">
                        Peak: 1,520 RPS at 25m
                      </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <div className="text-gray-900 font-semibold mb-1">CPU Utilization</div>
                          <div className="text-sm text-gray-500">System performance</div>
                        </div>
                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="text-center mb-4">
                        <div className="text-3xl font-bold text-orange-600">68%</div>
                        <div className="text-xs text-orange-600">Healthy range</div>
                      </div>
                      <div className="h-32 relative">
                        <LineChart
                          labels={["0m", "5m", "10m", "15m", "20m", "25m", "30m"]}
                          datasets={[{
                            label: 'CPU %',
                            data: [65, 68, 72, 69, 71, 68, 66],
                            borderColor: '#f59e0b',
                            backgroundColor: 'rgba(245,158,11,0.1)',
                            fill: true,
                            tension: 0.4,
                            borderWidth: 2,
                            pointRadius: 4,
                            pointBackgroundColor: '#f59e0b'
                          }]}
                          height={128}
                          showAxes={true}
                          showGrid={true}
                          yMin={50}
                          yMax={90}
                        />
                      </div>
                      <div className="text-center text-xs text-gray-500 mt-2">
                        Max: 72% at 10m
                      </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <div className="text-gray-900 font-semibold mb-1">Memory Usage</div>
                          <div className="text-sm text-gray-500">RAM consumption</div>
                        </div>
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="text-center mb-4">
                        <div className="text-3xl font-bold text-blue-600">4.2GB</div>
                        <div className="text-xs text-blue-600">of 8GB allocated</div>
                      </div>
                      <div className="h-32 relative">
                        <LineChart
                          labels={["0m", "5m", "10m", "15m", "20m", "25m", "30m"]}
                          datasets={[{
                            label: 'Memory GB',
                            data: [4.1, 4.3, 4.4, 4.2, 4.5, 4.3, 4.1],
                            borderColor: '#3b82f6',
                            backgroundColor: 'rgba(59,130,246,0.1)',
                            fill: true,
                            tension: 0.4,
                            borderWidth: 2,
                            pointRadius: 4,
                            pointBackgroundColor: '#3b82f6'
                          }]}
                          height={128}
                          showAxes={true} 
                          showGrid={true}
                          yMin={3.5}
                          yMax={5.0}
                        />
                      </div>
                      <div className="text-center text-xs text-gray-500 mt-2">
                        Peak: 4.5GB at 20m
                      </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <div className="text-gray-900 font-semibold mb-1">Response Time</div>
                          <div className="text-sm text-gray-500">Average latency</div>
                        </div>
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="text-center mb-4">
                        <div className="text-3xl font-bold text-purple-600">127ms</div>
                        <div className="text-xs text-purple-600">Excellent performance</div>
                      </div>
                      <div className="h-32 relative">
                        <LineChart
                          labels={["0m", "5m", "10m", "15m", "20m", "25m", "30m"]}
                          datasets={[{
                            label: 'Latency ms',
                            data: [132, 125, 130, 128, 124, 129, 127],
                            borderColor: '#8b5cf6',
                            backgroundColor: 'rgba(139,92,246,0.1)',
                            fill: true,
                            tension: 0.4,
                            borderWidth: 2,
                            pointRadius: 4,
                            pointBackgroundColor: '#8b5cf6'
                          }]}
                          height={128}
                          showAxes={true}
                          showGrid={true}
                          yMin={100}
                          yMax={160}
                        />
                      </div>
                      <div className="text-center text-xs text-gray-500 mt-2">
                        Best: 124ms at 20m
                      </div>
                    </div>
                  </div>


                  {/* Model Performance Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <div className="text-gray-900 font-semibold mb-2">Model Throughput</div>
                          <div className="text-sm text-gray-500">Requests processed per minute</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-gray-600">Last 30 minutes</div>
                        </div>
                      </div>
                      <div className="h-48 relative">
                        <BarChart 
                          labels={["GPT-4", "GPT-3.5", "Claude", "Llama", "PaLM"]} 
                          values={[580, 420, 380, 290, 160]} 
                          color="rgba(59,130,246,0.8)" 
                          yMin={0} 
                          yMax={700} 
                        />
                      </div>
                      <div className="grid grid-cols-5 gap-2 mt-4 text-center">
                        <div>
                          <div className="text-sm font-medium text-gray-700">580</div>
                          <div className="text-xs text-gray-500">GPT-4</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-700">420</div>
                          <div className="text-xs text-gray-500">GPT-3.5</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-700">380</div>
                          <div className="text-xs text-gray-500">Claude</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-700">290</div>
                          <div className="text-xs text-gray-500">Llama</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-700">160</div>
                          <div className="text-xs text-gray-500">PaLM</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <div className="text-gray-900 font-semibold mb-2">Cache Hit Rate</div>
                          <div className="text-sm text-gray-500">Query response optimization</div>
                        </div>
                        <div className="text-right bg-green-50 px-3 py-2 rounded-lg">
                          <div className="text-lg font-bold text-green-700">94%</div>
                          <div className="text-xs text-green-600">Excellent</div>
                        </div>
                      </div>
                      <div className="relative w-48 h-48 mx-auto mb-4">
                        <div className="grid grid-cols-2 gap-6">
                          <div className="text-center p-4 bg-green-50 rounded-xl">
                            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                              <div className="text-white font-bold">94%</div>
                            </div>
                            <div className="text-sm font-medium text-gray-700 mb-1">Cache Hits</div>
                            <div className="text-xs text-green-600">2,847 requests</div>
                          </div>
                          <div className="text-center p-4 bg-red-50 rounded-xl">
                            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                              <div className="text-white font-bold">6%</div>
                            </div>
                            <div className="text-sm font-medium text-gray-700 mb-1">Cache Misses</div>
                            <div className="text-xs text-red-600">189 requests</div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center text-xs text-gray-500">
                        Cache effectiveness over last hour
                      </div>
                    </div>
                  </div>
                </>
              )}
              {internalTab === 'costs' && (
                <>
                  {/* Key Metrics Row */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                   
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <div className="text-gray-900 font-semibold mb-1">Total Spend</div>
                          <div className="text-sm text-gray-500">Current month</div>
                        </div>
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="text-center mb-4">
                        <div className="text-3xl font-bold text-green-600">$34,520</div>
                        <div className="text-xs text-green-600">Month-to-date</div>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">Budget:</span>
                        <span className="font-medium text-gray-900">$28,000</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">Over budget:</span>
                        <span className="font-medium text-red-600">$6,520</span>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <div className="text-gray-900 font-semibold mb-1">Daily Average</div>
                          <div className="text-sm text-gray-500">Spending rate</div>
                        </div>
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="text-center mb-4">
                        <div className="text-3xl font-bold text-blue-600">$1,117</div>
                        <div className="text-xs text-blue-600">Per day</div>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">Yesterday:</span>
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                        </svg>
                        <span className="font-medium text-green-600">+5.2%</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">vs budget avg:</span>
                        <span className="font-medium text-red-600">+23%</span>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <div className="text-gray-900 font-semibold mb-1">Cost Efficiency</div>
                          <div className="text-sm text-gray-500">Cache hit ratio</div>
                        </div>
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="text-center mb-4">
                        <div className="text-3xl font-bold text-purple-600">89%</div>
                        <div className="text-xs text-purple-600">Cache hits</div>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">Cost saved:</span>
                        <span className="font-medium text-purple-600">$4,230</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">Savings rate:</span>
                        <span className="font-medium text-green-600">+14%</span>
                      </div>
                    </div>
                  </div>

                  {/* Spending Trends Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <div className="text-gray-900 font-semibold mb-2">Cost by Provider</div>
                          <div className="text-sm text-gray-500">Monthly breakdown</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-gray-600">Last 30 days</div>
                        </div>
                      </div>
                      <div className="h-48 relative">
                        <BarChart 
                          labels={["OpenAI", "Anthropic", "Google", "Meta", "Cohere", "Together"]} 
                          values={[4200, 2800, 1800, 1200, 900, 720]} 
                          color="rgba(59,130,246,0.8)" 
                          yMin={0} 
                          yMax={5000} 
                        />
                      </div>
                      <div className="grid grid-cols-6 gap-2 mt-4 text-center">
                        <div>
                          <div className="text-sm font-medium text-blue-600">42%</div>
                          <div className="text-xs text-gray-500">OpenAI</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-blue-600">28%</div>
                          <div className="text-xs text-gray-500">Anthropic</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-blue-600">18%</div>
                          <div className="text-xs text-gray-500">Google</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-blue-600">12%</div>
                          <div className="text-xs text-gray-500">Meta</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-blue-600">9%</div>
                          <div className="text-xs text-gray-500">Cohere</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-blue-600">7%</div>
                          <div className="text-xs text-gray-500">Together</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <div className="text-gray-900 font-semibold mb-2">Cost by Model</div>
                          <div className="text-sm text-gray-500">AI model usage cost</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-gray-600">Current month</div>
                        </div>
                      </div>
                      <div className="h-48 relative">
                        <BarChart 
                          labels={["GPT-4", "GPT-3.5", "Claude", "Gemini", "PaLM", "LLaMA"]} 
                          values={[5200, 3200, 2800, 2100, 1500, 980]} 
                          color="rgba(139,92,246,0.8)" 
                          yMin={0} 
                          yMax={6000} 
                        />
                      </div>
                      <div className="grid grid-cols-6 gap-2 mt-4 text-center">
                        <div>
                          <div className="text-sm font-medium text-purple-600">35%</div>
                          <div className="text-xs text-gray-500">GPT-4</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-purple-600">21%</div>
                          <div className="text-xs text-gray-500">GPT-3.5</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-purple-600">18%</div>
                          <div className="text-xs text-gray-500">Claude</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-purple-600">14%</div>
                          <div className="text-xs text-gray-500">Gemini</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-purple-600">10%</div>
                          <div className="text-xs text-gray-500">PaLM</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-purple-600">7%</div>
                          <div className="text-xs text-gray-500">LLaMA</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spending Analysis Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <div className="text-gray-900 font-semibold mb-2">Daily Spend Trend</div>
                          <div className="text-sm text-gray-500">Budget tracking</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-red-600">+23%</div>
                          <div className="text-xs text-gray-600">vs budget</div>
                        </div>
                      </div>
                      <div className="h-48 relative">
                        <LineChart
                          labels={["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"]}
                          datasets={[{
                            label: 'Actual Spend',
                            data: [5800, 6200, 7100, 8400, 9200],
                            borderColor: '#ef4444',
                            backgroundColor: 'rgba(239,68,68,0.1)',
                            fill: true,
                            tension: 0.4,
                            borderWidth: 2,
                            pointRadius: 4,
                            pointBackgroundColor: '#ef4444'
                          }, {
                            label: 'Budget',
                            data: [5500, 5500, 5500, 5500, 5500],
                            borderColor: '#10b981',
                            backgroundColor: 'transparent',
                            fill: false,
                            tension: 0.4,
                            borderWidth: 2,
                            borderDash: [5, 5],
                            pointRadius: 4,
                            pointBackgroundColor: '#10b981'
                          }]}
                          height={192}
                          showAxes={true}
                          showGrid={true}
                          yMin={5000}
                          yMax={10000}
                        />
                      </div>
                      <div className="text-center text-xs text-gray-500 mt-2">
                        Projected monthly spend: <span className="text-red-600 font-medium">$37,200</span>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <div className="text-gray-900 font-semibold mb-2">High-cost Commands</div>
                          <div className="text-sm text-gray-500">Top resource consumers</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-gray-600">Last 7 days</div>
                        </div>
                      </div>
                      <div className="h-48 relative">
                        <HorizontalBarChart 
                          labels={["Long-form Content", "Code Analysis", "Data Processing", "Image Generation", "Research Query"]} 
                          values={[4200, 3400, 2200, 1500, 1200]} 
                          color="rgba(139, 92, 246, 0.8)" 
                        />
                      </div>
                      <div className="space-y-2 mt-4">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-600">Long-form Content:</span>
                          <span className="font-medium text-purple-600">$4,200</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-600">Code Analysis:</span>
                          <span className="font-medium text-purple-600">$3,400</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-600">Data Processing:</span>
                          <span className="font-medium text-purple-600">$2,200</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Cost Optimization & Alerts Row */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <div className="text-gray-900 font-semibold mb-2">Cost Optimization</div>
                          <div className="text-sm text-gray-500">Savings opportunities</div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-green-600">72%</div>
                          <div className="text-xs text-green-600">Efficiency</div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                            <span className="text-sm text-gray-700">Caching Strategy</span>
                          </div>
                          <div className="text-sm font-medium text-green-600">$2,400</div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                            <span className="text-sm text-gray-700">Model Selection</span>
                          </div>
                          <div className="text-sm font-medium text-blue-600">$1,800</div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                            <span className="text-sm text-gray-700">Query Optimization</span>
                          </div>
                          <div className="text-sm font-medium text-purple-600">$980</div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                            <span className="text-sm text-gray-700">Batch Processing</span>
                          </div>
                          <div className="text-sm font-medium text-orange-600">$720</div>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="flex justify-between text-sm font-medium">
                          <span className="text-gray-700">Total Potential Savings:</span>
                          <span className="text-green-600">$5,900/month</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <div className="text-gray-900 font-semibold mb-2">Cost Alerts</div>
                          <div className="text-sm text-gray-500">Threshold monitoring</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-red-600">3 Active</div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                              <span className="text-sm font-medium text-red-800">Threshold Exceeded</span>
                            </div>
                            <span className="text-xs text-red-600">Now</span>
                          </div>
                          <div className="text-xs text-red-700 mt-1">
                            Monthly budget exceeded by $6,520
                          </div>
                        </div>
                        <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                              <span className="text-sm font-medium text-yellow-800">Spike Detected</span>
                            </div>
                            <span className="text-xs text-yellow-600">2h ago</span>
                          </div>
                          <div className="text-xs text-yellow-700 mt-1">
                            GPT-4 usage spike: +340% vs avg
                          </div>
                        </div>
                        <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                              <span className="text-sm font-medium text-blue-800">New Pattern</span>
                            </div>
                            <span className="text-xs text-blue-600">6h ago</span>
                          </div>
                          <div className="text-xs text-blue-700 mt-1">
                            Unusual weekend AI model usage
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <div className="text-gray-900 font-semibold mb-2">Region Costs</div>
                          <div className="text-sm text-gray-500">Geographic breakdown</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-gray-600">Current month</div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-4 h-4 bg-blue-500 rounded mr-3"></div>
                            <span className="text-sm text-gray-700">North America</span>
                          </div>
                          <div className="text-sm font-medium text-gray-900">
                            <span className="text-blue-600">$24,300</span> (70%)
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-4 h-4 bg-green-500 rounded mr-3"></div>
                            <span className="text-sm text-gray-700">Europe</span>
                          </div>
                          <div className="text-sm font-medium text-gray-900">
                            <span className="text-green-600">$7,800</span> (22%)
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-4 h-4 bg-orange-500 rounded mr-3"></div>
                            <span className="text-sm text-gray-700">Asia Pacific</span>
                          </div>
                          <div className="text-sm font-medium text-gray-900">
                            <span className="text-orange-600">$2,420</span> (8%)
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="text-sm">
                          <span className="text-gray-500">Total Regional:</span>
                          <span className="font-medium text-gray-900 ml-2">$34,520</span>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          Latency optimized routing
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </>
          )}

          {/* Monthly Trends Tab */}
          {selectedDashboard !== 'internal' && activeTab === 'monthly' && (
            <>
              {/* KPI Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
                <KPIStat label="Command Accuracy" value="76%" trend="Last 30 days" />
                <KPIStat label="Total Commands" value="7,521" trend="All time" />
                <KPIStat label="Commands Executed" value="1,963" trend="Last 30 days" />
              </div>

              {/* Charts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                  <div className="text-gray-900 font-semibold mb-3">Command Accuracy</div>
                  <LineChart
                    labels={months}
                    datasets={[{ label: 'Accuracy', data: accuracySeries, borderColor: '#10b981' }]}
                    yMin={60}
                    yMax={90}
                  />
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                  <div className="text-gray-900 font-semibold mb-3">Commands Executed</div>
                  <LineChart
                    labels={months}
                    datasets={[{ label: 'Commands', data: commandsSeries, borderColor: '#3b82f6' }]}
                    yMin={0}
                    yMax={6000}
                  />
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                  <div className="text-gray-900 font-semibold mb-3">Command Errors</div>
                  <BarChart labels={months} values={errorsSeries} color="rgba(239,68,68,0.8)" yMin={0} yMax={220} />
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                  <div className="text-gray-900 font-semibold mb-3">Active Users</div>
                  <LineChart
                    labels={months}
                    datasets={[{ label: 'Active Users', data: activeUsersSeries, borderColor: '#06b6d4' }]}
                    yMin={0}
                    yMax={1200}
                  />
                </div>
              </div>
            </>
          )}

          {/* Command Analytics Tab */}
          {selectedDashboard !== 'internal' && activeTab === 'commands' && (
            <>
              {/* KPI Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
                <KPIStat label="Command Accuracy" value="76%" trend="Last 30 days" />
                <KPIStat label="Total Commands" value="7,521" trend="All time" />
                <KPIStat label="Commands Executed" value="1,963" trend="Last 30 days" />
              </div>

              {/* Charts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                  <div className="text-gray-900 font-semibold mb-3">Accuracy Over Time</div>
                  <LineChart
                    labels={months}
                    datasets={[{ label: 'Accuracy', data: accuracySeries, borderColor: '#3b82f6' }]}
                    yMin={60}
                    yMax={90}
                  />
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                  <div className="text-gray-900 font-semibold mb-3">Top Commands</div>
                  <HorizontalBarChart
                    labels={topCommandsData.labels}
                    values={topCommandsData.values}
                    color="rgba(59,130,246,0.8)"
                  />
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                  <div className="text-gray-900 font-semibold mb-3">Correct vs Incorrect</div>
                  <DonutChart data={commandAccuracyData} />
                </div>
                <div className="bg-white rounded-2xl shadow-lg border border-gray-50 p-8">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <div className="text-lg font-bold text-gray-900 mb-2">Hourly Usage Patterns</div>
                      <div className="text-sm text-gray-500">Weekly activity distribution</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">95</div>
                      <div className="text-xs text-blue-600">Peak activity</div>
                    </div>
                  </div>
                  
                  <div className="h-64 flex items-center justify-center">
                    <HeatmapChart
                      data={hourlyUsageData}
                      rowLabels={hourlyLabels.rows}
                      colLabels={hourlyLabels.cols}
                    />
                  </div>
                  
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-semibold text-blue-700">Peak Hours</span>
                        <span className="text-xs text-blue-600">Wed 2PM</span>
                      </div>
                      <div className="text-xs text-gray-600">91 commands executed</div>
                    </div>
                    
                    <div className="p-3 bg-green-50 rounded-lg">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-semibold text-green-700">Average Usage</span>
                        <span className="text-xs text-green-600">53/hr</span>
                      </div>
                      <div className="text-xs text-gray-600">Commands per hour</div>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-between items-center text-xs text-gray-600">
                    <span>Most active: Wednesdays</span>
                    <span>Peak time: 12-4 PM</span>
                    <span>Weekly total: 2,659</span>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Overview Tab (Enterprise) */}
          {selectedDashboard !== 'internal' && selectedDashboard !== 'user' && activeTab === 'overview' && (
            <>
              {/* KPI Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
                <KPIStat 
                  label="Command Accuracy" 
                  value="76%" 
                  trend="Last 30 days"
                  iconColor="green"
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  }
                />
                <KPIStat 
                  label="Total Commands" 
                  value="7,521" 
                  trend="All time"
                  iconColor="purple"
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  }
                />
                <KPIStat 
                  label="Active Users" 
                  value="1,963" 
                  trend="Last 30 days"
                  iconColor="blue"
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  }
                />
              </div>

              {/* Command Accuracy Distribution Chart */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
                <div className="text-gray-900 font-semibold mb-6 text-lg">Command Accuracy Distribution</div>
                <LineChart
                  labels={hourlyAccuracyData.labels}
                  datasets={hourlyAccuracyData.datasets}
                  yMin={40}
                  yMax={100}
                  height={300}
                  showAxes={true}
                  showGrid={true}
                />
              </div>
            </>
          )}

          {/* User Segments Tab - Enterprise Only */}
          {selectedDashboard !== 'internal' && selectedDashboard !== 'user' && activeTab === 'segments' && (
            <>
              {/* KPI Row */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 mb-12">
                <KPIStat label="Power Users" value="958" trend="Active segment" />
                <KPIStat label="Segments Growth" value="1,741" trend="Total users" />
                <KPIStat label="Retention" value="3,256" trend="Cohort size" />
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                  <div className="text-sm text-gray-500">pen A</div>
                  <div className="text-2xl font-semibold text-gray-900">325</div>
                </div>
              </div>

              {/* Main Analytics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                  <div className="text-gray-900 font-semibold mb-3">Segments Distribution</div>
                  <PieChart data={segmentsDistributionData} />
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                  <div className="text-gray-900 font-semibold mb-3">Segments Growth</div>
                  <LineChart
                    labels={segmentsGrowthData.labels}
                    datasets={segmentsGrowthData.datasets}
                    yMin={0}
                    yMax={40}
                  />
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                  <div className="text-gray-900 font-semibold mb-3">Geography</div>
                  <WorldMap highlightedRegions={['south-america']} />
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                  <div className="text-gray-900 font-semibold mb-3">Retention Cohort</div>
                  <RetentionCohort data={retentionCohortData} />
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                  <div className="text-gray-900 font-semibold mb-3">Geography</div>
                  <HorizontalBarChart
                    labels={['North America', 'Europe', 'Asia', 'South America', 'Africa']}
                    values={[35, 28, 22, 10, 5]}
                    color="rgba(6,182,212,0.8)"
                  />
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                  <div className="text-gray-900 font-semibold mb-3">Persona</div>
                  <div className="space-y-3 max-h-48 overflow-y-auto">
                    {personaData.slice(0, 3).map((persona, index) => (
                      <PersonaCard key={index} {...persona} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Persona Cards Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {personaData.map((persona, index) => (
                  <PersonaCard key={index} {...persona} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>



      {/* CTA Section */}
      <section className="bg-gradient-to-r from-kahana-primary to-kahana-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6" >
            Ready to Explore User Analytics?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a demo to see how Oasis reveals insights that drive growth.
          </p>
          <Link href="/schedule-demo">
            <button className="bg-white text-kahana-primary px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Schedule Demo
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}


