import React from "react";
import Image from "next/image";
import {
  getCloudinaryImageProps,
  getCloudinaryImageUrl,
} from "../utils/cloudinary-mapper";

/** Middle index = 340w — matches max-w-[340px] cards on the grid */
const WHY_OASIS_CARD_WIDTHS = [280, 320, 340, 400, 480];
const WHY_OASIS_CARD_SIZES =
  "(max-width: 640px) min(340px, calc(100vw - 2rem)), (max-width: 1024px) 340px, 340px";

const WHY_OASIS_CARDS = [
  {
    title: "Created to bring calm and focus back to browsing",
    imagePath: "/figma-imports/er.webp",
    imageAlt: "Serene illustration representing focused Oasis browsing",
  },
  {
    title: "Makes browsing beautiful and natural",
    imagePath: "/figma-imports/Frame 1321315005.webp",
    imageAlt: "Screenshot showcasing clutter-free Oasis browsing",
  },
  {
    title: "Artificial Intelligence (AI) browser that adapts to you",
    imagePath: "/figma-imports/Summarize with AI 3.webp",
    imageAlt: "Illustration of Oasis adapting to the user",
  },
];

/**
 * Below-the-fold homepage grid — split from `pages/index.js` so the main page chunk
 * stays smaller for faster parse/hydration on the hero path.
 */
export default function HomeWhyOasisSection() {
  return (
    <section id="why-oasis" className="py-16 sm:py-24 bg-white relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p
            className="text-xl font-semibold leading-8 text-[#5C5F2E] mb-2"
            role="doc-subtitle"
          >
            Rediscover Browsing
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[#313A00] sm:text-4xl">
            Unlock a New Level of Browsing with Oasis
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 md:justify-items-center">
          {WHY_OASIS_CARDS.map((card) => {
            const oasisImg = getCloudinaryImageProps(card.imagePath, {
              widths: WHY_OASIS_CARD_WIDTHS,
              quality: "auto:good",
            });
            return (
              <div
                key={card.title}
                className="relative bg-white/90 border border-white/80 rounded-[26px] px-5 py-6 shadow-[0_25px_70px_rgba(32,47,0,0.14)] flex flex-col gap-5 w-full max-w-[340px] mx-auto backdrop-blur-lg"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[18px] border border-[#F6F3E7] bg-white/70 shadow-[0_25px_70px_rgba(27,33,0,0.18)]">
                  {oasisImg.srcSet && oasisImg.src ? (
                    <img
                      src={oasisImg.src}
                      srcSet={oasisImg.srcSet}
                      sizes={WHY_OASIS_CARD_SIZES}
                      alt={card.imageAlt || `${card.title} illustration`}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <Image
                      src={getCloudinaryImageUrl(card.imagePath, {
                        width: 640,
                        quality: "auto:good",
                      })}
                      alt={card.imageAlt || `${card.title} illustration`}
                      fill
                      sizes={WHY_OASIS_CARD_SIZES}
                      className="object-cover"
                      loading="lazy"
                      quality={85}
                    />
                  )}
                </div>
                <div className="flex flex-col gap-3 text-left">
                  <h3 className="text-2xl font-semibold leading-tight text-[#1F2D00]">
                    {card.title}
                  </h3>
                  {card.description && (
                    <p className="text-base text-[#4E5534]">{card.description}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
