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

const conceptCards = [
  {
    title: "Dashboards & Insights",
    description: "Understand user behavior with actionable analytics",
    details: [
      {
        title: "Engagement Overview",
        explanation: "Track daily, weekly, and monthly active users",
        technical: "DAU/WAU/MAU trends with retention cohorts"
      },
      {
        title: "Usage Heatmaps",
        explanation: "Visualize feature adoption and usage depth",
        technical: "Per-feature heatmaps with segment filters"
      }
    ]
  },
  {
    title: "Funnels & Journeys",
    description: "Measure conversion through key workflows",
    details: [
      {
        title: "Conversion Funnels",
        explanation: "Identify drop-offs across multi-step flows",
        technical: "Step-by-step funnel with time-to-complete"
      },
      {
        title: "Path Analysis",
        explanation: "See common navigation paths and loops",
        technical: "User pathing with node/edge weighting"
      }
    ]
  },
  {
    title: "Alerts & Reporting",
    description: "Stay informed with proactive analytics",
    details: [
      {
        title: "Anomaly Alerts",
        explanation: "Detect unusual spikes or drops",
        technical: "Z-score anomaly detection on key metrics"
      },
      {
        title: "Scheduled Reports",
        explanation: "Get insights delivered to your inbox",
        technical: "Automated PDF/CSV reports with filters"
      }
    ]
  }
];

export default function UserAnalyticsFeatures() {
  const [activeTab, setActiveTab] = useState('overview');
  const tabs = [
    { key: 'overview', label: 'Overview' },
    { key: 'commands', label: 'Command Analytics' },
    { key: 'monthly', label: 'Monthly Trends' },
    { key: 'segments', label: 'User Segments' },
  ];

  const months = ['Jun', 'Feb', 'Apr', 'Jun', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec', 'Apr', 'May'];
  const accuracySeries = [72, 73, 75, 76, 78, 79, 80, 83, 85, 84, 85];
  const commandsSeries = [2200, 2400, 2600, 2500, 3000, 3200, 3500, 3300, 3600, 3700, 3900];
  const errorsSeries = [120, 80, 110, 90, 130, 95, 140, 180, 150, 170, 160];
  const activeUsersSeries = [100, 120, 130, 160, 200, 240, 300, 320, 380, 420, 480];

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
    [2, 1, 3, 4, 2, 1, 0], // N (Sunday)
    [1, 2, 4, 5, 3, 2, 1], // T (Monday)
    [3, 4, 6, 7, 5, 3, 2], // W (Tuesday)
    [2, 3, 5, 6, 4, 2, 1], // T (Wednesday)
    [4, 5, 7, 8, 6, 4, 3], // F (Thursday)
  ];

  const hourlyLabels = {
    rows: ['N', 'T', 'W', 'T', 'F'],
    cols: ['M', 'W', 'T', 'W', 'TH', 'F', '5']
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
            <h1 className="text-5xl font-bold text-[#4A5745] mb-6">
              User Analytics,<br />Clarity for Product Growth
            </h1>
            <p className="text-xl text-[#4A5745] max-w-3xl mx-auto">
              Measure engagement, uncover bottlenecks, and drive adoption with built-in analytics inside Oasis.
            </p>
          </div>
        </div>
      </section>

      {/* Analytics Overview Section */}
      <section className="bg-white/60 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Tabs tabs={tabs} active={activeTab} onChange={setActiveTab} />
          </div>

          {/* Monthly Trends Tab */}
          {activeTab === 'monthly' && (
            <>
              {/* KPI Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <KPIStat label="Command Accuracy" value="76%" trend="Last 30 days" />
                <KPIStat label="Total Commands" value="7,521" trend="All time" />
                <KPIStat label="Commands Executed" value="1,963" trend="Last 30 days" />
              </div>

              {/* Charts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-[#F3F8E4] to-[#E0D48C] rounded-xl shadow-sm border border-[#728552] border border-[#728552] p-5">
                  <div className="text-[#4A5745] font-semibold mb-3">Command Accuracy</div>
                  <LineChart
                    labels={months}
                    datasets={[{ label: 'Accuracy', data: accuracySeries, borderColor: '#10b981' }]}
                    yMin={60}
                    yMax={90}
                  />
                </div>
                <div className="bg-gradient-to-br from-[#F3F8E4] to-[#E0D48C] rounded-xl shadow-sm border border-[#728552] border border-[#728552] p-5">
                  <div className="text-[#4A5745] font-semibold mb-3">Commands Executed</div>
                  <LineChart
                    labels={months}
                    datasets={[{ label: 'Commands', data: commandsSeries, borderColor: '#3b82f6' }]}
                    yMin={0}
                    yMax={6000}
                  />
                </div>
                <div className="bg-gradient-to-br from-[#F3F8E4] to-[#E0D48C] rounded-xl shadow-sm border border-[#728552] border border-[#728552] p-5">
                  <div className="text-[#4A5745] font-semibold mb-3">Command Errors</div>
                  <BarChart labels={months} values={errorsSeries} color="rgba(239,68,68,0.8)" yMin={0} yMax={220} />
                </div>
                <div className="bg-gradient-to-br from-[#F3F8E4] to-[#E0D48C] rounded-xl shadow-sm border border-[#728552] border border-[#728552] p-5">
                  <div className="text-[#4A5745] font-semibold mb-3">Active Users</div>
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
          {activeTab === 'commands' && (
            <>
              {/* KPI Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <KPIStat label="Command Accuracy" value="76%" trend="Last 30 days" />
                <KPIStat label="Total Commands" value="7,521" trend="All time" />
                <KPIStat label="Commands Executed" value="1,963" trend="Last 30 days" />
              </div>

              {/* Charts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-[#F3F8E4] to-[#E0D48C] rounded-xl shadow-sm border border-[#728552] border border-[#728552] p-5">
                  <div className="text-[#4A5745] font-semibold mb-3">Accuracy Over Time</div>
                  <LineChart
                    labels={months}
                    datasets={[{ label: 'Accuracy', data: accuracySeries, borderColor: '#3b82f6' }]}
                    yMin={60}
                    yMax={90}
                  />
                </div>
                <div className="bg-gradient-to-br from-[#F3F8E4] to-[#E0D48C] rounded-xl shadow-sm border border-[#728552] border border-[#728552] p-5">
                  <div className="text-[#4A5745] font-semibold mb-3">Top Commands</div>
                  <HorizontalBarChart
                    labels={topCommandsData.labels}
                    values={topCommandsData.values}
                    color="rgba(59,130,246,0.8)"
                  />
                </div>
                <div className="bg-gradient-to-br from-[#F3F8E4] to-[#E0D48C] rounded-xl shadow-sm border border-[#728552] border border-[#728552] p-5">
                  <div className="text-[#4A5745] font-semibold mb-3">Correct vs Incorrect</div>
                  <DonutChart data={commandAccuracyData} />
                </div>
                <div className="bg-gradient-to-br from-[#F3F8E4] to-[#E0D48C] rounded-xl shadow-sm border border-[#728552] border border-[#728552] p-5">
                  <div className="text-[#4A5745] font-semibold mb-3">Hourly Usage</div>
                  <HeatmapChart
                    data={hourlyUsageData}
                    rowLabels={hourlyLabels.rows}
                    colLabels={hourlyLabels.cols}
                  />
                </div>
              </div>
            </>
          )}

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <>
              {/* KPI Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
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
              <div className="bg-gradient-to-br from-[#F3F8E4] to-[#E0D48C] rounded-xl shadow-sm border border-[#728552] border border-[#728552] p-5">
                <div className="text-[#4A5745] font-semibold mb-3">Command Accuracy Distribution</div>
                <LineChart
                  labels={hourlyAccuracyData.labels}
                  datasets={hourlyAccuracyData.datasets}
                  yMin={50}
                  yMax={100}
                  height={300}
                />
              </div>
            </>
          )}

          {/* User Segments Tab */}
          {activeTab === 'segments' && (
            <>
              {/* KPI Row */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
                <KPIStat label="Power Users" value="958" trend="Active segment" />
                <KPIStat label="Segments Growth" value="1,741" trend="Total users" />
                <KPIStat label="Retention" value="3,256" trend="Cohort size" />
                <div className="bg-gradient-to-br from-[#F3F8E4] to-[#E0D48C] rounded-xl shadow-sm border border-[#728552] border border-[#728552] p-5">
                  <div className="text-sm text-gray-500">pen A</div>
                  <div className="text-2xl font-semibold text-[#4A5745]">325</div>
                </div>
              </div>

              {/* Main Analytics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-[#F3F8E4] to-[#E0D48C] rounded-xl shadow-sm border border-[#728552] border border-[#728552] p-5">
                  <div className="text-[#4A5745] font-semibold mb-3">Segments Distribution</div>
                  <PieChart data={segmentsDistributionData} />
                </div>
                <div className="bg-gradient-to-br from-[#F3F8E4] to-[#E0D48C] rounded-xl shadow-sm border border-[#728552] border border-[#728552] p-5">
                  <div className="text-[#4A5745] font-semibold mb-3">Segments Growth</div>
                  <LineChart
                    labels={segmentsGrowthData.labels}
                    datasets={segmentsGrowthData.datasets}
                    yMin={0}
                    yMax={40}
                  />
                </div>
                <div className="bg-gradient-to-br from-[#F3F8E4] to-[#E0D48C] rounded-xl shadow-sm border border-[#728552] border border-[#728552] p-5">
                  <div className="text-[#4A5745] font-semibold mb-3">Geography</div>
                  <WorldMap highlightedRegions={['south-america']} />
                </div>
                <div className="bg-gradient-to-br from-[#F3F8E4] to-[#E0D48C] rounded-xl shadow-sm border border-[#728552] border border-[#728552] p-5">
                  <div className="text-[#4A5745] font-semibold mb-3">Retention Cohort</div>
                  <RetentionCohort data={retentionCohortData} />
                </div>
                <div className="bg-gradient-to-br from-[#F3F8E4] to-[#E0D48C] rounded-xl shadow-sm border border-[#728552] border border-[#728552] p-5">
                  <div className="text-[#4A5745] font-semibold mb-3">Geography</div>
                  <HorizontalBarChart
                    labels={['North America', 'Europe', 'Asia', 'South America', 'Africa']}
                    values={[35, 28, 22, 10, 5]}
                    color="rgba(6,182,212,0.8)"
                  />
                </div>
                <div className="bg-gradient-to-br from-[#F3F8E4] to-[#E0D48C] rounded-xl shadow-sm border border-[#728552] border border-[#728552] p-5">
                  <div className="text-[#4A5745] font-semibold mb-3">Persona</div>
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

      {/* Evolution / Comparison Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Legacy Analytics Card */}
            <div className="bg-gradient-to-br from-gray-50 to-kahana-primary-50/30 rounded-2xl p-8 border border-[#728552]">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-kahana-primary-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-kahana-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3v18h18" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-[#4A5745]">Legacy Analytics</h3>
              </div>
              <p className="text-[#4A5745] mb-4">
                Siloed tools, complex tagging, and stale reports slow decision-making.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-[#4A5745]">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Fragmented data sources</span>
                </li>
                <li className="flex items-center text-[#4A5745]">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Heavy instrumentation effort</span>
                </li>
                <li className="flex items-center text-[#4A5745]">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Slow time-to-insight</span>
                </li>
              </ul>
            </div>

            {/* Oasis Analytics Card */}
            <div className="bg-gradient-to-br from-gray-50 to-kahana-secondary-50/30 rounded-2xl p-8 border border-[#728552]">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-kahana-secondary-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-kahana-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-[#4A5745]">Oasis Analytics</h3>
              </div>
              <p className="text-[#4A5745] mb-4">
                Built-in, privacy-conscious analytics with instant visibility and zero tagging burden.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-[#4A5745]">
                  <span className="text-kahana-secondary mr-2">✓</span>
                  <span>Unified view across features</span>
                </li>
                <li className="flex items-center text-[#4A5745]">
                  <span className="text-kahana-secondary mr-2">✓</span>
                  <span>Automatic event capture</span>
                </li>
                <li className="flex items-center text-[#4A5745]">
                  <span className="text-kahana-secondary mr-2">✓</span>
                  <span>Real-time insights</span>
                </li>
              </ul>
            </div>
          </div>

          {/* The Solution Card */}
          <div className="mt-8 bg-gradient-to-r from-kahana-primary-50 to-kahana-secondary-50 rounded-2xl p-8 border border-kahana-primary-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-kahana-primary to-kahana-secondary rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6h13" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[#4A5745]">Clarity That Drives Adoption</h3>
            </div>
            <p className="text-[#4A5745] text-lg mb-6">
              See exactly how users engage, optimize onboarding, and prioritize features that matter.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-[#4A5745] mb-2">Realtime Views</h4>
                <p className="text-[#4A5745]">Monitor spikes, sessions, and errors</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-[#4A5745] mb-2">Cohort Retention</h4>
                <p className="text-[#4A5745]">Spot stickiness across segments</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-[#4A5745] mb-2">Feature Adoption</h4>
                <p className="text-[#4A5745]">Understand what resonates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Cards Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#4A5745] mb-12 text-center">
            User Analytics Features
          </h2>
          <div className="grid grid-cols-1 gap-12">
            {conceptCards.map((card, index) => (
              <div key={index} className="bg-gradient-to-r from-kahana-primary-50 to-kahana-secondary-50 rounded-2xl overflow-hidden border border-kahana-primary-100">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-kahana-primary to-kahana-secondary rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {card.title === "Dashboards & Insights" ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3v18h18M7 13l3 3 7-7" />
                        ) : card.title === "Funnels & Journeys" ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h18l-7 8v6l-4-2v-4L3 5z" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405M4 4l16 16M13 7h6m-6 4h4" />
                        )}
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-[#4A5745]">{card.title}</h3>
                  </div>
                  <p className="text-[#4A5745] text-lg mb-8">
                    {card.description}
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    {card.details.map((detail, dIndex) => (
                      <div key={dIndex} className="bg-white rounded-xl p-6 shadow-sm">
                        <h4 className="font-semibold text-[#4A5745] mb-3">
                          {detail.title}
                        </h4>
                        <p className="text-[#4A5745] mb-3">
                          {detail.explanation}
                        </p>
                        <div className="flex items-center text-kahana-primary">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm font-medium">{detail.technical}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
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


