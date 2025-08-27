import React, { useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import NavBar from "../components/NavbarDup";
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

      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('There was an error generating the PDF. Please try again.');
    }
  };

  return (
    <>
      <Head>
        <title>Oasis: The Enterprise Browser Buyer&apos;s Guide | Kahana</title>
        <meta
          name="description"
          content="Transform Workflow Chaos into Productivity Nirvana with Kahana&apos;s Enterprise Browser Buyer&apos;s Guide"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <NavBar />

        <main className="pt-16 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-16">
              {/* Left Column - Content */}
              <div className="lg:col-span-7">
                <div className="text-center lg:text-left mb-12">
                  <h2 className="text-base font-semibold leading-7 text-[#66C2BE] mb-3">Enterprise Browser Guide</h2>
                  <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                    Oasis: The Enterprise Browser Buyer&apos;s Guide
                  </h1>
                  <p className="mt-6 text-xl text-gray-600">
                    Transform Workflow Chaos into Productivity Nirvana. Learn how Oasis revolutionizes enterprise browsing with AI-powered intelligence and seamless productivity features.
                  </p>
                </div>

                {/* Navigation Menu */}
                <div className="mb-12 lg:mb-0">
                  <div className="mx-auto">
                    <div className="bg-white rounded-xl shadow-xl border border-[#A5DAD8]/30 p-8">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-6">Guide Sections</h3>
                      <div className="grid grid-cols-1 gap-4">
                        {sections.map(section => (
                          <a
                            key={section.id}
                            href={`#${section.id}`}
                            className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-[#66C2BE]/10 transition-colors"
                          >
                            <div className="flex-shrink-0 w-8 h-8 bg-[#66C2BE] rounded-full flex items-center justify-center mr-4">
                              <span className="text-white text-sm font-semibold">
                                {sections.findIndex(s => s.id === section.id) + 1}
                              </span>
                            </div>
                            <span className="text-gray-900 font-medium">{section.title}</span>
                          </a>
                        ))}
                      </div>
                      
                      <div className="mt-8 pt-6 border-t border-[#A5DAD8]/30">
                        <button
                          onClick={handleDownloadPDF}
                          className="w-full bg-[#66C2BE] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#55B3AF] transition-colors"
                        >
                          Download PDF Guide
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Quick Start */}
              <div className="lg:col-span-5 lg:sticky lg:top-24">
                <div className="bg-white rounded-xl shadow-xl border border-[#A5DAD8]/30 p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Quick Start</h3>
                  <p className="text-gray-600 mb-6">
                    Get started with the buyer's guide to understand how Oasis can transform your enterprise browsing experience.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#66C2BE] rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-white text-xs font-semibold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Read the Guide</h4>
                        <p className="text-sm text-gray-600">Explore each section to understand Oasis capabilities</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#66C2BE] rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-white text-xs font-semibold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Download PDF</h4>
                        <p className="text-sm text-gray-600">Save the guide for offline reference</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#66C2BE] rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-white text-xs font-semibold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Request Demo</h4>
                        <p className="text-sm text-gray-600">See Oasis in action for your organization</p>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/schedule-demo"
                    className="block w-full bg-[#66C2BE] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#55B3AF] transition-colors text-center"
                  >
                    Request a Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>

      </div>
    </>
  );
};

export default BuyerGuideOasis; 