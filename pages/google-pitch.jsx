import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import dynamic from 'next/dynamic';
import {
  IntroductionSection,
  MarketOpportunitySection,
  WhyGoogleSection,
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
} from "../components/google-pitch/index.jsx";

// Section titles for navigation
const sections = [
  { id: "big-change", title: "AI is elevating how we interact with devices", component: BigChangeSection, image: "/images-google/big-change.jpg" },
  { id: "problem", title: "Google Devices can't handle basic commands", component: ProblemSection, image: "/images-google/problem.jpg" },
  { id: "solution", title: "How our tech helps Google devices work with you", component: SolutionSection, image: "/images-google/solution.jpg" },
  { id: "promised-land", title: "Imagine touch-free control across all Google devices", component: PromisedLandSection, image: "/images-google/promised-land.jpg" },
  { id: "winners-losers", title: "Right now, competitors are already moving ahead", component: WinnersLosersSection, image: "/images-google/winners-losers.jpg" },
  { id: "market-opportunity", title: "Google is missing out on billions in untapped revenue", component: MarketOpportunitySection, image: "/images-google/market-opportunity.jpg" },
  { id: "technical-roadmap", title: "We have a clear path to capture this opportunity", component: TechnicalRoadmapSection, image: "/images-google/technical-roadmap.jpg" },
  { id: "ai-benefits", title: "Google quickly becomes #1 for AI-enabled devices", component: AIBenefitsSection, image: "/images-google/ai-benefits.jpg" },
  { id: "patent-breakdown", title: "Approved patents defend Google's throne until 2039...", component: PatentBreakdownSection, image: "/images-google/patent-breakdown.jpg" },
  { id: "vision-beyond", title: "Paving the way for a god-like future", component: VisionBeyondSection, image: "/images-google/vision-beyond.jpg" }
];

const GooglePitch = () => {
  return (
    <div className="min-h-screen bg-white font-sf-pro">
      <Head>
        <title>Google Product Pitch | Kahana</title>
        <meta
          name="description"
          content="A comprehensive pitch for Google's next generation AI search platform"
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold mb-6 text-white leading-tight tracking-tight">
              The Hephaestus Project: Forging Google Products as Tools of Omnipotence              </h1>
              
              <p className="text-2xl text-gray-300 mb-12">
              How Google, the company famous for revolutionizing how we search for information can reinvent how we interact it.
              </p>
            </div>

            {/* Centered image */}
            <div className="relative w-full flex justify-center items-center mt-8">
              <Image
                src="/images-google/introduction.jpg"
                alt="Google AI Search Interface"
                width={800}
                height={450}
                className="rounded-lg"
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
              { id: "promised-land", name: "Vision" },
              { id: "winners-losers", name: "Competition" },
              { id: "market-opportunity", name: "Market" },
              { id: "technical-roadmap", name: "Roadmap" },
              { id: "ai-benefits", name: "Benefits" },
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

export default GooglePitch; 