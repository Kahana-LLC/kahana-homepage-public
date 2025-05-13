import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import dynamic from 'next/dynamic';
import {
  IntroductionSection,
  MarketOpportunitySection,
  WhyMetaSection,
  ProductOverviewSection,
  KeyFeaturesSection,
  TechnologySection,
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
  VisionBeyondSection,
  PatentBreakdownSection
} from "../components/meta-pitch/index.jsx";

// Section titles for navigation
const sections = [
  { id: "big-change", title: "AI is transforming social interaction", component: BigChangeSection },
  { id: "problem", title: "Meta's AR and VR devices are not designed for work", component: ProblemSection },
  { id: "solution", title: "How our tech elevates the Metaverse for work", component: SolutionSection },
  { id: "promised-land", title: "The future of work is in the Metaverse", component: PromisedLandSection },
  { id: "winners-losers", title: "Right now, competitors are already moving ahead", component: WinnersLosersSection },
  { id: "market-opportunity", title: "Meta is missing out on billions in untapped revenue", component: MarketOpportunitySection },
  { id: "technical-roadmap", title: "We have a clear path to capture this opportunity", component: TechnicalRoadmapSection },
  { id: "ai-benefits", title: "Meta quickly becomes #1 for AR and VR work", component: AIBenefitsSection },
  { id: "patent-breakdown", title: "Protected IP: Securing Meta's Future", component: PatentBreakdownSection },
  { id: "vision-beyond", title: "Say goodbye to being chained to your desk", component: VisionBeyondSection }
];

const MetaPitch = () => {
  return (
    <div className="min-h-screen bg-white font-sf-pro">
      <Head>
        <title>Meta Product Pitch | Kahana</title>
        <meta
          name="description"
          content="A comprehensive pitch for Meta's next generation social AI platform"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@400;500;600;700&display=swap" />
      </Head>

      {/* Hero Section */}
      <IntroductionSection />

      {/* Navigation Menu */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-md z-10 border-b border-gray-200">
        <div className="container mx-auto px-6 overflow-x-auto">
          <div className="flex space-x-8 py-4 min-w-max items-center">
            {[
              { id: "big-change", name: "Introduction" },
              { id: "problem", name: "Problem" },
              { id: "solution", name: "Solution" },
              { id: "promised-land", name: "Vision" },
              { id: "winners-losers", name: "Competition" },
              { id: "market-opportunity", name: "Market" },
              { id: "technical-roadmap", name: "Roadmap" },
              { id: "ai-benefits", name: "AI Benefits" },
              { id: "patent-breakdown", name: "Patents" },
              { id: "vision-beyond", name: "Future" }
            ].map(section => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-gray-600 hover:text-black font-medium whitespace-nowrap transition-colors"
              >
                {section.name}
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

      {/* Get in Touch Section */}
      <section className="bg-black text-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
            <div className="space-y-4">
              <a href="mailto:adam@kahana.co" className="block text-xl hover:text-blue-400 transition-colors">
                adam@kahana.co
              </a>
              <a href="mailto:jonathan@kahana.co" className="block text-xl hover:text-blue-400 transition-colors">
                jonathan@kahana.co
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MetaPitch; 