import React from 'react';

export default function WhyOasisSection() {
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
        .why-oasis-card {
          background: linear-gradient(90deg, #F8FAF2 0%, #d6e3f4 100%);
          border-radius: 1rem;
          padding: 2rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          height: 100%;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .why-oasis-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        .why-oasis-card h3 {
          color: #495800;
          font-weight: bold;
          font-size: 1.25rem;
          margin-bottom: 1rem;
          line-height: 1.4;
          text-align: center;
        }
        .why-oasis-card p {
          color: #495800;
          margin-bottom: 1.5rem;
          flex-grow: 1;
          line-height: 1.6;
          text-align: center;
        }
        .why-oasis-card-image {
          width: 100%;
          height: 200px;
          border-radius: 0.5rem;
          margin-top: auto;
          background-color: transparent;
          position: relative;
          overflow: hidden;
        }
        .why-oasis-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0.5rem;
        }
        .why-oasis-container h2 {
          color: #978455 !important;
        }
      `}</style>
      
      <div className="why-oasis-container">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-xl font-semibold leading-8 text-[#978455] mb-4">Why Oasis ?</h2>
        </div>

        {/* Three Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {/* Card 1 */}
          <div className="why-oasis-card">
            <h3>Ergonomic Design</h3>
            <p>
              Created Oasis to bring calm and focus back to browsing
            </p>
            <div className="why-oasis-card-image">
              <img
                src="/figma-imports/Group 6.jpg"
                alt="Ergonomic Design"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="why-oasis-card">
            <h3>AI-Powered Focus</h3>
            <p>
              No more clutter, no more chaos, Oasis makes browsing beautiful and natural
            </p>
            <div className="why-oasis-card-image">
              <img
                src="/figma-imports/Frame 1321315005.jpg"
                alt="AI-Powered Focus"
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="why-oasis-card">
            <h3>Spatial Ease</h3>
            <p>
              Oasis turns your browser into a calm space that adapts to you
            </p>
            <div className="why-oasis-card-image">
              <img
                src="/figma-imports/Summarize with AI 3.jpg"
                alt="Spatial Ease"
              />
            </div>
          </div>
        </div>

        {/* YouTube Video - Centered like golden container */}
        <div className="w-full max-w-xl mx-auto px-4 mt-16">
          <div className="w-full mx-auto aspect-[4/3] overflow-hidden rounded-xl shadow-lg bg-black">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/05-oP8CNl8Y"
              title="Oasis AI-Powered Browser Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

