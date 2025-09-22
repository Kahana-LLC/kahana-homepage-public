import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';

const conceptCards = [
  {
    title: "Gamification & Recognition",
    description: "Motivate teams and individuals with achievement systems and recognition programs",
    details: [
      {
        title: "Achievement Badges",
        explanation: "Reward milestones and accomplishments with visual badges",
        technical: "Customizable badge system with automated awarding logic"
      },
      {
        title: "Progress Tracking",
        explanation: "Monitor individual and team progress toward goals",
        technical: "Real-time progress visualization and milestone tracking"
      }
    ]
  },
  {
    title: "Performance Metrics",
    description: "Comprehensive analytics to measure and improve team performance",
    details: [
      {
        title: "Command Mastery",
        explanation: "Track command usage and accuracy improvements",
        technical: "Advanced analytics with skill progression tracking"
      },
      {
        title: "Team Collaboration",
        explanation: "Measure team productivity and collaboration effectiveness",
        technical: "Multi-dimensional performance scoring and reporting"
      }
    ]
  },
  {
    title: "Leaderboards & Competition",
    description: "Foster healthy competition and drive engagement through rankings",
    details: [
      {
        title: "Team Rankings",
        explanation: "Compare team performance across departments",
        technical: "Dynamic leaderboard with customizable ranking criteria"
      },
      {
        title: "Individual Achievements",
        explanation: "Recognize top performers and skill development",
        technical: "Personal achievement tracking with social recognition"
      }
    ]
  }
];

export default function Achievements() {
  return (
    <>
      <Head>
        <title>Achievements & Recognition | Kahana</title>
        <meta
          name="description"
          content="Drive engagement and performance with Kahana's achievement system. Gamify productivity, track progress, and recognize top performers across your organization."
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
              Achievements & Recognition,<br />Made Engaging
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Motivate your team with gamified achievements, performance tracking, and recognition programs that drive productivity and engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Evolution Story Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Traditional Recognition Card */}
            <div className="bg-gradient-to-br from-gray-50 to-kahana-primary-50/30 rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-kahana-primary-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-kahana-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Traditional Recognition</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Traditional employee recognition relied on annual reviews and occasional awards.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Infrequent feedback</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Limited visibility</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>No real-time tracking</span>
                </li>
              </ul>
            </div>

            {/* Modern Recognition Card */}
            <div className="bg-gradient-to-br from-gray-50 to-kahana-secondary-50/30 rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-kahana-secondary-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-kahana-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Modern Recognition Needs</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Today's workforce expects continuous feedback, gamification, and real-time recognition.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <span className="text-kahana-secondary mr-2">✓</span>
                  <span>Real-time feedback</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-kahana-secondary mr-2">✓</span>
                  <span>Gamified experience</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-kahana-secondary mr-2">✓</span>
                  <span>Social recognition</span>
                </li>
              </ul>
            </div>
          </div>

          {/* The Solution Card */}
          <div className="mt-8 bg-gradient-to-r from-kahana-primary-50 to-kahana-secondary-50 rounded-2xl p-8 border border-kahana-primary-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-kahana-primary to-kahana-secondary rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Oasis Browser Drives Engagement</h3>
            </div>
            <p className="text-gray-600 text-lg mb-6">
              Transform productivity into an engaging experience with achievement systems, real-time recognition, and performance tracking.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Achievement System</h4>
                <p className="text-gray-600">Gamify productivity with badges and milestones</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Real-time Recognition</h4>
                <p className="text-gray-600">Instant feedback and peer recognition</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Performance Analytics</h4>
                <p className="text-gray-600">Comprehensive tracking and insights</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Cards Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Achievement & Recognition Features
          </h2>
          <div className="grid grid-cols-1 gap-12">
            {conceptCards.map((card, index) => (
              <div key={index} className="bg-gradient-to-r from-kahana-primary-50 to-kahana-secondary-50 rounded-2xl overflow-hidden border border-kahana-primary-100">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-kahana-primary to-kahana-secondary rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {card.title === "Gamification & Recognition" ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        ) : card.title === "Performance Metrics" ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        )}
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">{card.title}</h3>
                  </div>
                  <p className="text-gray-600 text-lg mb-8">
                    {card.description}
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    {card.details.map((detail, dIndex) => (
                      <div key={dIndex} className="bg-white rounded-xl p-6 shadow-sm">
                        <h4 className="font-semibold text-gray-900 mb-3">
                          {detail.title}
                        </h4>
                        <p className="text-gray-600 mb-3">
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
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Gamify Your Team's Productivity?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a demo to see how Oasis can transform your organization's engagement and recognition.
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