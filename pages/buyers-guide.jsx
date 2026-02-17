import React, { useRef } from "react";
import Head from "next/head";
import Link from "next/link";
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
  { id: "essential-questions", title: "Key questions to ask when evaluating", component: IntroductionSection },
  { id: "browser-alternatives", title: "How different enterprise browsers stack up", component: VsAlternativesSection },
  { id: "use-cases", title: "Use cases and examples", component: ModernBrowserCrisisSection },
  { id: "timing", title: "Timing: when an enterprise browser makes sense for your organization", component: WhyOasisSection }
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

      <div className="min-h-screen bg-white">
        <main className="pt-24 pb-16">
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
                      <h3 className="text-2xl font-semibold text-gray-900 mb-6">What's Inside</h3>
                      <div className="grid grid-cols-1 gap-2">
                        {sections.map(section => (
                          <div
                            key={section.id}
                            className="flex items-center p-3 bg-gray-50 rounded-lg"
                          >
                            <div className="flex-shrink-0 w-8 h-8 bg-[#66C2BE] rounded-full flex items-center justify-center mr-4">
                              <span className="text-white text-sm font-semibold">
                                {sections.findIndex(s => s.id === section.id) + 1}
                              </span>
                            </div>
                            <span className="text-gray-900 font-medium">{section.title}</span>
                          </div>
                        ))}
                      </div>
                      

                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Download Form */}
              <div className="lg:col-span-5 lg:sticky lg:top-24">
                <div className="bg-white rounded-xl shadow-xl border border-[#A5DAD8]/30 p-8">
                  <div className="w-full h-[400px]">
                    <iframe
                      src="https://tally.so/r/3xApd9"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      marginHeight="0"
                      marginWidth="0"
                      title="Download Buyer Guide Form"
                      className="rounded-lg"
                    />
                  </div>
                  
                  {/* Disclaimer Section */}
                  <div className="mt-4 pt-4 bg-white relative -mt-12 pt-12 z-20">
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-3">
                        <strong>Contact us</strong> - for an immediate response, contact us directly at{' '}
                        <Link href="/contact" className="text-[#66C2BE] hover:text-[#4A9E9A] no-underline hover:no-underline">
                          contact us
                        </Link>
                      </p>
                      <p className="text-xs text-[#4A5745]">
                        By submitting this form you consent to be contacted by Kahana, and acknowledge our{' '}
                        <Link href="/privacy-policy" className="text-[#66C2BE] hover:text-[#4A9E9A] no-underline hover:no-underline">
                          Privacy Policy
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
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