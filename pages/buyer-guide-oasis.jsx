import React, { useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import NavbarExplore from "../components/navbarexplore";
import Image from "next/image";
import dynamic from 'next/dynamic';
import {
  IntroductionSection,
  VsAlternativesSection,
  ModernBrowserCrisisSection,
  WhyOasisSection,
  WhatIsOasisSection,
  DesignedForProductivitySection,
  CoreArchitectureSection,
  BenefitsSection,
  EnterpriseDeploymentSection,
  DotPattern,
  ProductivityIcons
} from "../components/buyer-guide";

// Section titles for navigation
const sections = [
  { id: "introduction", title: "Introduction", component: IntroductionSection },
  { id: "modern-browser-crisis", title: "The Modern Browser Crisis", component: ModernBrowserCrisisSection },
  { id: "why-oasis", title: "Why Oasis Exists", component: WhyOasisSection },
  { id: "what-is-oasis", title: "What is Oasis?", component: WhatIsOasisSection },
  { id: "designed-for-productivity", title: "Designed for Productivity", component: DesignedForProductivitySection },
  { id: "core-architecture", title: "Core Architecture", component: CoreArchitectureSection },
  { id: "benefits", title: "Benefits", component: BenefitsSection },
  { id: "enterprise-deployment", title: "Enterprise Deployment", component: EnterpriseDeploymentSection },
  { id: "vs-alternatives", title: "Oasis vs. Alternatives", component: VsAlternativesSection },
  // Add other sections as they are created
];

const BuyerGuideOasis = () => {
  const contentRef = useRef(null);

  const handleDownloadPDF = async () => {
    try {
      // Dynamically import html2pdf only on client side
      const html2pdf = (await import('html2pdf.js')).default;
      
      const element = contentRef.current;
      const opt = {
        margin: 1,
        filename: 'oasis-buyer-guide.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          logging: true
        },
        jsPDF: { 
          unit: 'in', 
          format: 'a4', 
          orientation: 'portrait' 
        }
      };

      // Generate PDF
      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('There was an error generating the PDF. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-[#fdf6e3]">
      <Head>
        <title>Oasis: The Enterprise Browser Buyer&apos;s Guide | Kahana</title>
        <meta
          name="description"
          content="Transform Workflow Chaos into Productivity Nirvana with Kahana&apos;s Enterprise Browser Buyer&apos;s Guide"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavbarExplore />

      {/* Hero Section */}
      <section className="relative min-h-[600px] overflow-hidden">
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
              {/* Logo - temporarily hidden */}
              {/* <div className="bg-white rounded-full px-6 py-2.5 inline-block mb-12">
                <img 
                  src="/kahana-logo.png" 
                  alt="Kahana" 
                  className="h-6 w-auto"
                />
              </div> */}
              
              {/* Title */}
              <h1 className="text-[56px] font-bold mb-6 text-gray-800 leading-tight">
                Oasis: The Enterprise Browser Buyer&apos;s Guide
              </h1>
              
              {/* Subtitle */}
              <p className="text-2xl mb-12 text-gray-700">
                Transform Workflow Chaos into Productivity Nirvana
              </p>
              
              {/* CTA button */}
              <button
                onClick={() => document.getElementById('introduction').scrollIntoView({ behavior: 'smooth' })}
                className="bg-amber-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-amber-600 transition-colors"
              >
                Start Reading
              </button>
            </div>

            {/* Right side image - temporarily hidden */}
            {/* <div className="absolute top-0 right-0 w-[500px] h-full">
              <img
                src="/oasis-image.jpg"
                alt="Oasis landscape with palm trees and water"
                className="w-full h-full object-cover rounded-l-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#e8f3e8] w-32" />
            </div> */}
          </div>
        </div>
      </section>

      {/* Navigation Menu */}
      <nav className="sticky top-0 bg-white shadow-sm z-10">
        <div className="container mx-auto px-6 overflow-x-auto">
          <div className="flex space-x-8 py-4 min-w-max items-center">
            {sections.map(section => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-gray-600 hover:text-amber-500 font-medium whitespace-nowrap"
              >
                {section.title}
              </a>
            ))}
            <button
              onClick={handleDownloadPDF}
              className="ml-4 bg-amber-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-amber-600 transition-colors whitespace-nowrap"
            >
              Download PDF
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="bg-white" ref={contentRef}>
        {sections.map((section, index) => {
          const SectionComponent = section.component;
          return (
            <section
              key={section.id}
              id={section.id}
              className={`min-h-[600px] scroll-mt-16 ${index % 2 === 0 ? 'bg-white' : 'bg-amber-50/50'}`}
            >
              <div className="container mx-auto px-6 py-24">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-4xl font-bold text-gray-800 mb-8">
                    {section.title}
                  </h2>
                  <SectionComponent />
                </div>
              </div>
            </section>
          );
        })}

        {/* Final CTA Section */}
        <section className="bg-amber-50 min-h-[400px]">
          <div className="container mx-auto px-6 py-24">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-800 mb-8">
                Ready to Transform Your Browser Experience?
              </h2>
              <p className="text-xl text-gray-600 mb-12">
                Join leading organizations in revolutionizing their workflow with Oasis
              </p>
              <div className="space-x-6">
                <Link
                  href="/request-a-demo"
                  className="inline-block bg-amber-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-amber-600 transition-colors"
                >
                  Request a Demo
                </Link>
                <a
                  href="#introduction"
                  className="inline-block bg-white text-amber-500 px-8 py-4 rounded-lg font-medium hover:bg-amber-50 transition-colors"
                >
                  Read Again
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BuyerGuideOasis; 