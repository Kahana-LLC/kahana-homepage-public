import React from 'react';
import Image from 'next/image';

const mozillaPrinciples = [
  "The internet is an integral part of modern life—a key component in education, communication, collaboration, business, entertainment and society as a whole.",
  "The internet is a global public resource that must remain open and accessible.",
  "The internet must enrich the lives of individual human beings.",
  "Individuals' security and privacy on the internet are fundamental and must not be treated as optional.",
  "Individuals must have the ability to shape the internet and their own experiences on it.",
  "The effectiveness of the internet as a public resource depends upon interoperability (protocols, data formats, content), innovation and decentralized participation worldwide.",
  "Free and open source software promotes the development of the internet as a public resource.",
  "Transparent community-based processes promote participation, accountability and trust.",
  "Commercial involvement in the development of the internet brings many benefits; a balance between commercial profit and public benefit is critical.",
  "Magnifying the public benefit aspects of the internet is an important goal, worthy of time, attention and commitment."
];

const kahanaPillars = [
  {
    title: "We Are Committed to Your Productivity",
    text: "In our daily lives, we navigate a complex world of ideas, tasks, and dreams. We strive to be more productive, to bring our visions to life, and to make meaningful progress in our work and personal lives. At Kahana, we understand that technology should enhance, not hinder, this journey."
  },
  {
    title: "We Are Committed to Your Success",
    text: "We believe in the power of technology to make your daily life more harmonious and productive. Our goal is to help you focus on your dreams and ideas, making meaningful progress in your work and personal life. We're here to help you achieve your goals, whether that's through better organization, improved efficiency, or simply getting closer to your ideas."
  },
  {
    title: "We Are Committed to Your Focus",
    text: "In a world where information overload and digital distractions are constant challenges, we're committed to building tools that help you focus on what matters most. We listen carefully to your needs and pain points, creating solutions that truly enhance your productivity and help you achieve your goals."
  }
];

const kahanaPrinciplesIntro = [
  "Our Principles"
];

const kahanaPrinciples = [
  "The Internet as a Productivity Tool: The internet is an essential tool for modern productivity, enabling education, communication, collaboration, and business. We believe in harnessing its power to help you achieve more.",
  "Open and Accessible Information: We believe in making information accessible and organized, helping you find what you need when you need it, without unnecessary barriers.",
  "Enhancing Human Potential: Our tools are designed to enrich your daily life by making you more productive and efficient, allowing you to focus on what truly matters.",
  "Privacy and Security: Your security and privacy are fundamental to our mission. We build our tools with these principles at their core, ensuring you can work with confidence.",
  "Personalization and Control: You should have complete control over your digital workspace. Our tools adapt to your needs, helping you work the way you want to work.",
  "Innovation and Integration: We believe in creating tools that work seamlessly together, promoting innovation while maintaining compatibility with the tools you already use.",
  "Community and Collaboration: We value transparent processes and community input, ensuring our tools evolve to meet real user needs and challenges.",
  "Balance and Purpose: While we operate as a business, we maintain a focus on creating tools that genuinely improve people's lives and productivity."
];

const VisionBeyondSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg"
          alt="Nature forest"
          fill
          className="object-cover"
        />
      </div>
      <div className="max-w-5xl mx-auto py-12">
        <h3 className="text-3xl font-bold text-center mb-10">Principles for the Future</h3>
        {/* Kahana Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {kahanaPillars.map((pillar, idx) => (
            <div key={idx} className="bg-blue-50 rounded-2xl p-6 border border-blue-200 shadow-sm text-center flex flex-col h-full">
              <h4 className="text-xl font-semibold text-blue-900 mb-3">{pillar.title}</h4>
              <p className="text-gray-700 text-base">{pillar.text}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Mozilla Principles */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h4 className="text-2xl font-semibold text-blue-800 mb-6 text-center">Mozilla's 10 Principles</h4>
            <ol className="list-decimal list-inside space-y-4 text-gray-700">
              {mozillaPrinciples.map((principle, idx) => (
                <li key={idx}>{principle}</li>
              ))}
            </ol>
          </div>
          {/* Kahana Principles */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h4 className="text-2xl font-semibold text-green-800 mb-6 text-center">Kahana's Principles</h4>
            <div className="space-y-3 mb-4">
              {kahanaPrinciplesIntro.map((text, idx) => (
                <p key={idx} className="text-gray-700 text-base">{text}</p>
              ))}
            </div>
            <ol className="list-decimal list-inside space-y-4 text-gray-700">
              {kahanaPrinciples.map((principle, idx) => (
                <li key={idx}>{principle}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionBeyondSection; 