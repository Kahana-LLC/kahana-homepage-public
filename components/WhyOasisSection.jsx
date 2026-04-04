import React from 'react';
import Image from 'next/image';
import OasisYouTubeEmbed from './OasisYouTubeEmbed';

export default function WhyOasisSection() {
  const features = [
    {
      title: "Ergonomic Design",
      description: "Created to bring calm and focus back to browsing",
      image: "/figma-imports/er.webp",
      alt: "Ergonomic Design"
    },
    {
      title: "AI-Powered Focus",
      description: "Makes browsing beautiful and natural",
      image: "/figma-imports/Frame 1321315005.webp",
      alt: "AI-Powered Focus"
    },
    {
      title: "Spatial Ease",
      description: "Browser that adapts to you",
      image: "/figma-imports/Summarize with AI 3.webp",
      alt: "Spatial Ease"
    }
  ];

  return (
    <div className="bg-white py-16 sm:py-24 relative">
      <style jsx>{`
        .why-oasis-container {
          max-width: 1280px;
          margin: 0 auto;
          padding-left: var(--container-padding-mobile);
          padding-right: var(--container-padding-mobile);
        }
        @media (min-width: 640px) {
          .why-oasis-container {
            padding-left: var(--container-padding-tablet);
            padding-right: var(--container-padding-tablet);
          }
        }
        @media (min-width: 1024px) {
          .why-oasis-container {
            padding-left: var(--container-padding-desktop);
            padding-right: var(--container-padding-desktop);
          }
        }
        .why-oasis-image-card {
          background: #F8FAF2;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          flex-shrink: 0;
        }
        .why-oasis-image-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        .why-oasis-image-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0.5rem;
        }
        .why-oasis-text-content p {
          color: #495800;
          font-size: 1.25rem;
          font-weight: 600;
          line-height: 2rem;
        }
        .why-oasis-container h2 {
          color: #978455 !important;
        }
        .why-oasis-item {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-bottom: 4rem;
        }
        @media (min-width: 768px) {
          .why-oasis-item {
            flex-direction: row;
            align-items: center;
            gap: 3rem;
          }
          .why-oasis-item.reverse {
            flex-direction: row-reverse;
          }
          .why-oasis-image-card {
            width: 45%;
            min-width: 300px;
          }
          .why-oasis-text-content {
            flex: 1;
          }
        }
      `}</style>
      
      <div className="why-oasis-container">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-xl font-semibold leading-8 text-[#978455] mb-4">Why Oasis ?</h2>
        </div>

        {/* Alternating Image and Text Items */}
        <div className="mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`why-oasis-item ${index % 2 === 1 ? 'reverse' : ''}`}
            >
              {/* Image Card */}
              <div className="why-oasis-image-card">
                <div style={{ width: '100%', height: '300px', position: 'relative', overflow: 'hidden' }}>
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover"
                    loading="lazy"
                    quality={85}
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="why-oasis-text-content">
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* YouTube Video - Centered like golden container */}
        <div className="w-full max-w-xl mx-auto px-4 mt-16">
          <div className="w-full mx-auto aspect-[4/3] overflow-hidden rounded-xl shadow-lg bg-black">
            <OasisYouTubeEmbed wrapperClassName="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

