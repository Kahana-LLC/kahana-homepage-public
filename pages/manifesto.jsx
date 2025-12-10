import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { getCloudinaryImageUrl } from '../utils/cloudinary-mapper';

export default function Manifesto() {
  useEffect(() => {
    // Add animation class to elements after component mounts
    const sections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));

    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  return (
    <>
      <Head>
        <title>Our Manifesto | Kahana</title>
        <meta
          name="description"
          content="Read Kahana's manifesto about enabling your creativity and helping you find meaning through seamless and immersive creative experiences."
        />
        <style>{`
          .fade-in-section {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          }
          .fade-in-visible {
            opacity: 1;
            transform: translateY(0);
          }
        `}</style>
      </Head>

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in-section">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Manifesto</h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              A declaration of our understanding of creativity and our commitment to you.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              Our friendly sloth mascot embodies a beautiful irony - while sloths are known for their slow pace, we've chosen this gentle creature to represent our mission of making you more productive. Just as a sloth moves efficiently through life, our tools eliminate unnecessary friction, allowing you to focus on what matters most.
            </p>
            <div className="flex justify-center mb-12">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <Image
                  src={getCloudinaryImageUrl("/images/kahana_mascot.png")}
                  alt="Kahana Sloth Mascot"
                  width={300}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg">
            <section className="mb-16 fade-in-section">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <svg className="w-8 h-8 mr-3 text-[#66C2BE]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                We Are Committed to Your Productivity
              </h2>
              <p className="text-gray-600 mb-6">
                In our daily lives, we navigate a complex world of ideas, tasks, and dreams. We strive to be more productive, to bring our visions to life, and to make meaningful progress in our work and personal lives. At Kahana, we understand that technology should enhance, not hinder, this journey.
              </p>
            </section>

            <section className="mb-16 fade-in-section">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <svg className="w-8 h-8 mr-3 text-[#66C2BE]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                We Are Committed to Your Success
              </h2>
              <p className="text-gray-600 mb-6">
                We believe in the power of technology to make your daily life more harmonious and productive. Our goal is to help you focus on your dreams and ideas, making meaningful progress in your work and personal life. We're here to help you achieve your goals, whether that's through better organization, improved efficiency, or simply getting closer to your ideas.
              </p>
            </section>

            <section className="mb-16 fade-in-section">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <svg className="w-8 h-8 mr-3 text-[#66C2BE]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
                We Are Committed to Your Focus
              </h2>
              <p className="text-gray-600 mb-6">
                In a world where information overload and digital distractions are constant challenges, we're committed to building tools that help you focus on what matters most. We listen carefully to your needs and pain points, creating solutions that truly enhance your productivity and help you achieve your goals.
              </p>
            </section>

            <section className="mb-16 fade-in-section">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <svg className="w-8 h-8 mr-3 text-[#66C2BE]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Our Principles
              </h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-[#66C2BE]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    1. The Internet as a Productivity Tool
                  </h3>
                  <p className="text-gray-600">The internet is an essential tool for modern productivity, enabling education, communication, collaboration, and business. We believe in harnessing its power to help you achieve more.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-[#66C2BE]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    2. Open and Accessible Information
                  </h3>
                  <p className="text-gray-600">We believe in making information accessible and organized, helping you find what you need when you need it, without unnecessary barriers.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-[#66C2BE]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    3. Enhancing Human Potential
                  </h3>
                  <p className="text-gray-600">Our tools are designed to enrich your daily life by making you more productive and efficient, allowing you to focus on what truly matters.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-[#66C2BE]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    4. Privacy and Security
                  </h3>
                  <p className="text-gray-600">Your security and privacy are fundamental to our mission. We build our tools with these principles at their core, ensuring you can work with confidence.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-[#66C2BE]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    5. Personalization and Control
                  </h3>
                  <p className="text-gray-600">You should have complete control over your digital workspace. Our tools adapt to your needs, helping you work the way you want to work.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-[#66C2BE]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                    6. Innovation and Integration
                  </h3>
                  <p className="text-gray-600">We believe in creating tools that work seamlessly together, promoting innovation while maintaining compatibility with the tools you already use.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-[#66C2BE]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    7. Community and Collaboration
                  </h3>
                  <p className="text-gray-600">We value transparent processes and community input, ensuring our tools evolve to meet real user needs and challenges.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-[#66C2BE]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    8. Balance and Purpose
                  </h3>
                  <p className="text-gray-600">While we operate as a business, we maintain a focus on creating tools that genuinely improve people's lives and productivity.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-[#66C2BE] via-[#8CB7D0] to-[#A5DAD8] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-section">
          <h2 className="text-4xl font-bold text-white mb-6">
            Want to learn more?
          </h2>
          <Link href="/contact">
            <button className="bg-white text-[#66C2BE] px-8 py-3 rounded-md font-semibold hover:bg-gray-50 transition-colors duration-300 shadow-sm hover:shadow-md">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </>
  );
} 