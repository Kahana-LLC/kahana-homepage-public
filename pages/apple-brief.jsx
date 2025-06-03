import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {
  BriefIntroduction,
  BriefProblem,
  BriefSolution,
} from "../components/apple-brief";
import { DotPattern } from "../components/apple-pitch";

// Section titles for navigation
const sections = [
  { id: "solution", title: "It's time for Apple Intelligence to be fully realized.", component: BriefSolution },
  { id: "problem", title: "Functional prototype + 2 approved patents are done. ", component: BriefProblem },
];

const AppleBrief = () => {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      <Head>
        <title>Voice-First Oasis | Kahana</title>
        <meta
          name="description"
          content="A brief overview of Kahana's vision for Apple's next generation voice-first, touch-free interface"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@400;500;600;700&display=swap" />
      </Head>

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

      <style jsx global>{`
        @keyframes gradientGlow {
          0%, 100% {
            filter: drop-shadow(0 0 0px #fff) brightness(1.05);
            background-position: 0% 50%;
          }
          50% {
            filter: drop-shadow(0 0 16px #a259ff) brightness(1.2);
            background-position: 100% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default AppleBrief; 