import React, { useState } from "react";
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
  { id: "solution", title: "The Hephaestus Project: Forging Apple Devices as Tools of Omnipotence", component: BriefSolution },
  { id: "problem", title: "Grow the IP Portfolio for Apple Intelligence and AR/VR", component: BriefProblem },
];

const AppleBrief = () => {
  const [showTallyModal, setShowTallyModal] = useState(false);
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

      {/* Contact Section */}
      <div className="container mx-auto px-6 py-12">
        {/* Adam & Jonathan Image */}
        <div className="flex justify-center mt-8">
          <img
            src="/images-apple/adam_jonathan.png"
            alt="Adam Kershner and Jonathan Gans at Kahana event"
            className="rounded-xl shadow-lg object-cover"
            style={{ maxWidth: '400px', width: '100%', height: 'auto' }}
          />
        </div>
        <div className="flex flex-col items-center mt-10">
          <p className="mb-4 text-lg text-gray-700 text-center max-w-2xl">We are ready to hop on the next flight to Cupertino to make this happen.</p>
          {/* Book In-Person Meeting Button */}
          <button
            onClick={() => setShowTallyModal(true)}
            className="mb-4 inline-block px-8 py-3 rounded-full text-lg font-semibold shadow-md transition-all no-underline"
            style={{
              background: '#2c71d0',
              color: '#fff',
              border: 'none',
            }}
          >
            Book an In-Person Meeting
          </button>
          {/* Book Virtual Call Button */}
          <a
            href="https://go.oncehub.com/AdamKershner"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-full text-lg font-semibold shadow-md transition-all no-underline"
            style={{
              background: '#2c71d0',
              color: '#fff',
              border: 'none',
            }}
            onMouseOver={e => e.currentTarget.style.filter = 'brightness(1.05)'}
            onMouseOut={e => e.currentTarget.style.filter = 'none'}
          >
            Book a Virtual Call
          </a>
        </div>
        {/* Contact Information Box */}
        <div className="mt-8 max-w-2xl mx-auto bg-gray-50 rounded-xl border border-gray-200 p-6 flex flex-col md:flex-row gap-8 text-gray-800">
          <div className="flex-1">
            <span className="font-semibold">Adam Kershner</span><br />
            <span className="text-sm">Email: <a href="mailto:adam@kahana.co" className="underline text-blue-700">adam@kahana.co</a></span><br />
            <span className="text-sm">Phone: <a href="tel:17329393025" className="underline text-blue-700">(732)-939-3025</a></span>
          </div>
          <div className="flex-1 md:border-l md:pl-8">
            <span className="font-semibold">Jonathan Gans</span><br />
            <span className="text-sm">Email: <a href="mailto:jonathan@kahana.co" className="underline text-blue-700">jonathan@kahana.co</a></span><br />
            <span className="text-sm">Phone: <a href="tel:13103843505" className="underline text-blue-700">(310)-384-3505</a></span>
          </div>
        </div>
        {/* Tally Modal Popup */}
        {showTallyModal && (
          <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-2 sm:p-4" onClick={e => { if (e.target === e.currentTarget) setShowTallyModal(false); }}>
            <div className="bg-white rounded-xl shadow-lg max-w-2xl w-full relative overflow-hidden p-4 sm:p-6 lg:p-10 max-h-[90vh] flex flex-col">
              <div className="mb-6">
                <h2 className="font-bold text-gray-900 text-lg sm:text-2xl">Book an In-Person Meeting With Adam & Jonathan</h2>
                <p className="text-gray-600 mt-2 text-sm sm:text-base">Date, time, place. Schedule an in-person meeting with Adam Kershner and Jonathan Gans.</p>
              </div>
              <button
                onClick={() => setShowTallyModal(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl font-bold z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/80"
                aria-label="Close"
                style={{ lineHeight: 1 }}
              >
                ×
              </button>
              <div className="flex-1 overflow-y-auto">
                <iframe
                  src="https://tally.so/embed/mZKxzV?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  title="Book an In-Person Meeting With Adam & Jonathan"
                  style={{ border: 'none', borderRadius: '0 0 0.75rem 0.75rem', minHeight: 500 }}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>

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