import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import dynamic from 'next/dynamic';
import {
  IntroductionSection,
  MarketOpportunitySection,
  WhyMozillaSection,
  ProductOverviewSection,
  KeyFeaturesSection,
  TechnologySection,
  BenefitsSection,
  PricingSection,
  VsCompetitorsSection,
  DotPattern,
  BigChangeSection,
  ProblemSection,
  SolutionSection,
  WinnersLosersSection,
  PromisedLandSection,
  TechnicalRoadmapSection,
  AIBenefitsSection,
  AskSection,
  VisionBeyondSection
} from "../components/mozilla-pitch/index.jsx";

// Section titles for navigation
const sections = [
  { id: "big-change", title: "Today, the vast majority of work happens in browsers", component: BigChangeSection },
  { id: "problem", title: "But traditional browsers makes a mess for enterprises", component: ProblemSection },
  { id: "solution", title: "Oasis keeps enterprises productive and secure", component: SolutionSection },
  { id: "promised-land", title: "Welcome to the future of enterprise browsers", component: PromisedLandSection },
  { id: "winners-losers", title: "Right now, competitors are already moving ahead", component: WinnersLosersSection },
  { id: "market-opportunity", title: "The Market for Enterprise Browsers is Exploding", component: MarketOpportunitySection },
  { id: "pricing", title: "Pricing", component: PricingSection },
  { id: "technical-roadmap", title: "We have a clear path to capture this opportunity", component: TechnicalRoadmapSection },
  { id: "ai-benefits", title: "Next on the roadmap: 100% touch-free agentic browsing", component: AIBenefitsSection },
  { id: "ask", title: "Investment Opportunity", component: AskSection },
  { id: "vision-beyond", title: "Creating a healthier Internet, together", component: VisionBeyondSection }
];

const MozillaPitch = () => {
  return (
    <div className="min-h-screen bg-white font-sf-pro">
      <Head>
        <title>Mozilla Product Pitch | Kahana</title>
        <meta
          name="description"
          content="A comprehensive pitch for Mozilla's next generation product"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@400;500;600;700&display=swap" />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-[600px] overflow-hidden bg-white">
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
            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold mb-6 text-black leading-tight tracking-tight text-center">
                Oasis: The Enterprise Browser Designed for Tranquility
              </h1>
              
              <p className="text-2xl text-gray-700 mb-12 text-center">
                How Mozilla, the company famous for bringing us Firefox, can transform the Internet into an Oasis.
              </p>
              <Image
                src="/images/mozilla_kahana.jpg"
                alt="Kahana Sloth and Mozilla Fox Mascots"
                width={300}
                height={300}
                className="rounded-lg mx-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Menu */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-md z-10 border-b border-gray-200">
        <div className="container mx-auto px-6 overflow-x-auto">
          <div className="flex space-x-8 py-4 min-w-max items-center">
            {[
              { id: "big-change", name: "Introduction" },
              { id: "problem", name: "Problem" },
              { id: "solution", name: "Solution" },
              { id: "promised-land", name: "Benefits" },
              { id: "winners-losers", name: "Competition" },
              { id: "market-opportunity", name: "Market" },
              { id: "pricing", name: "Pricing" },
              { id: "technical-roadmap", name: "Roadmap" },
              { id: "ai-benefits", name: "Next Feature" },
              { id: "ask", name: "Our Ask" },
              { id: "vision-beyond", name: "Our Vision" }
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

export default MozillaPitch; 