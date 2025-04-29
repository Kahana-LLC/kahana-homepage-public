import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import dynamic from 'next/dynamic';
import {
  IntroductionSection,
  MarketOpportunitySection,
  WhyAppleSection,
  ProductOverviewSection,
  KeyFeaturesSection,
  TechnologySection,
  BenefitsSection,
  ImplementationSection,
  VsCompetitorsSection,
  DotPattern,
  BigChangeSection,
  ProblemSection,
  SolutionSection,
  WinnersLosersSection,
  PromisedLandSection,
  TechnicalRoadmapSection,
  AIBenefitsSection,
  PatentBreakdownSection,
  VisionBeyondSection
} from "../components/apple-pitch/index.jsx";

// Section titles for navigation
const sections = [
  { id: "big-change", title: "Big Relevant Change", component: BigChangeSection },
  { id: "problem", title: "Problem", component: ProblemSection },
  { id: "solution", title: "Solution", component: SolutionSection },
  { id: "promised-land", title: "Promised Land", component: PromisedLandSection },
  { id: "winners-losers", title: "Winners & Losers", component: WinnersLosersSection },
  { id: "market-opportunity", title: "Market Opportunity", component: MarketOpportunitySection },
  { id: "technical-roadmap", title: "Technical Roadmap & Implementation", component: TechnicalRoadmapSection },
  { id: "ai-benefits", title: "Elevated Apple Intelligence", component: AIBenefitsSection },
  { id: "patent-breakdown", title: "Patent Breakdown", component: PatentBreakdownSection },
  { id: "vision-beyond", title: "Vision Beyond", component: VisionBeyondSection }
];

const ApplePitch = () => {
  return (
    <div className="min-h-screen bg-white font-sf-pro">
      <Head>
        <title>Apple Product Pitch | Kahana</title>
        <meta
          name="description"
          content="A comprehensive pitch for Apple's next generation product"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@400;500;600;700&display=swap" />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-[600px] overflow-hidden bg-black">
        {/* Top right dots */}
        <div className="absolute top-0 right-0 w-72 h-72">
          <DotPattern />
        </div>
        
        {/* Bottom left dots */}
        <div className="absolute bottom-0 left-0 w-72 h-72">
          <DotPattern />
        </div>

        <div className="container mx-auto px-6 pt-16 pb-24">
          <div className="max-w-6xl mx-auto relative">
            {/* Main content */}
            <div className="relative z-10 max-w-2xl">
              <h1 className="text-[56px] font-bold mb-6 text-white leading-tight tracking-tight md:whitespace-nowrap">
                Apple: a 100% touch free oasis
              </h1>
              
              <p className="text-2xl text-gray-300 mb-12">
                Browsing like it's science fiction
              </p>
            </div>

            {/* Centered image */}
            <div className="relative w-full flex justify-center items-center mt-8">
              <Image
                src="/images-apple/introduction.jpg"
                alt="Apple Touch Free Interface"
                width={800}
                height={450}
                className="rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-8">Table of Contents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sections.map((section, index) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center text-gray-600 hover:text-black transition-colors"
                >
                  <span className="text-gray-400 mr-2">{String(index + 1).padStart(2, '0')}.</span>
                  {section.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Menu */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-md z-10 border-b border-gray-200">
        <div className="container mx-auto px-6 overflow-x-auto">
          <div className="flex space-x-8 py-4 min-w-max items-center">
            {sections.map(section => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-gray-600 hover:text-black font-medium whitespace-nowrap transition-colors"
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="bg-white">
        {sections.map((section, index) => {
          const SectionComponent = section.component;
          return (
            <section
              key={section.id}
              id={section.id}
              className={`min-h-[600px] scroll-mt-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
            >
              <div className="container mx-auto px-6 py-24">
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-4xl font-bold text-black">
                      {section.title}
                    </h2>
                  </div>
                  <SectionComponent />
                </div>
              </div>
              {index < sections.length - 1 && (
                <div className="border-t border-gray-200 mx-auto max-w-4xl" />
              )}
            </section>
          );
        })}
      </main>
    </div>
  );
};

export default ApplePitch; 