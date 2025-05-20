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
  { id: "introduction", title: "Quick win: We can deliver Smarter Siri + Safari now.", component: BriefIntroduction },
  { id: "problem", title: "Functional prototype + 2 approved patents are done. ", component: BriefProblem },
  { id: "solution", title: "It's time for Apple Intelligence to be fully realized.", component: BriefSolution },
];

const AppleBrief = () => {
  return (
    <div className="min-h-screen bg-white font-sf-pro">
      <Head>
        <title>Voice-First Oasis | Kahana</title>
        <meta
          name="description"
          content="A brief overview of Kahana's vision for Apple's next generation voice-first, touch-free interface"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@400;500;600;700&display=swap" />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-[600px] overflow-hidden bg-white text-black flex flex-col items-center justify-center py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight text-center">
              Apple Intelligence?
              <span
                className="block mt-8 font-extrabold text-transparent bg-clip-text fade-pop-in mx-auto"
                style={{
                  fontSize: '7vw',
                  lineHeight: 1.1,
                  backgroundImage: 'linear-gradient(90deg, #2997ff 0%, #35c5f3 20%, #a259ff 50%, #ff5ac8 80%, #ff7a00 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'block',
                  fontWeight: 800,
                }}
              >
                Good news!
              </span>
              <div className="flex justify-center mt-6">
                <Image
                  src="/images-apple/adam_jonathan.png"
                  alt="Adam and Jonathan at Kahana event"
                  width={400}
                  height={350}
                  className="rounded-xl shadow-lg object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col items-center mt-4">
                <span
                  className="mb-3 px-6 py-2 text-white text-base font-bold rounded-full shadow-sm"
                  style={{
                    background: 'linear-gradient(90deg, #2997ff 0%, #a259ff 50%, #ff5ac8 100%)',
                    backgroundSize: '200% 200%',
                    animation: 'gradientGlow 2.5s ease-in-out infinite',
                    letterSpacing: '0.01em',
                    display: 'inline-block',
                  }}
                >
                  New Apple Intelligence feature available
                </span>
                <span className="text-5xl text-gray-300 my-0" style={{lineHeight: 1}}>&#8595;</span>
                <span
                  className="flex items-center justify-center mx-auto px-6 py-4 font-extrabold text-transparent bg-clip-text fade-pop-in rounded-xl border border-green-100 bg-white/60 shadow-sm"
                  style={{
                    fontSize: '2.2vw',
                    lineHeight: 1.1,
                    backgroundImage: 'linear-gradient(90deg, #2997ff 0%, #35c5f3 20%, #a259ff 50%, #ff5ac8 80%, #ff7a00 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-flex',
                    fontWeight: 800,
                  }}
                >
                  "Siri, pull up articles about beetles from my Reading List"
                </span>
              </div>
            </h1>
          </div>
        </div>
      </section>

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