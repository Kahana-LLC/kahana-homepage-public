import React from "react";
import Image from "next/image";
import {
  getCloudinaryImageProps,
  getCloudinaryImageUrl,
} from "../utils/cloudinary-mapper";

/** 7 slots — middle index = 400w default src; narrow steps for ~312–380px mobile columns */
const TOUR_WIDTHS = [320, 360, 380, 400, 480, 560, 640];
/** Cap mobile so srcset does not jump to 720w+ when the card is ~340–364px CSS wide */
const TOUR_SIZES =
  "(max-width: 640px) min(calc(100vw - 3rem), 380px), (max-width: 768px) min(90vw, 896px), (max-width: 1024px) min(85vw, 896px), min(896px, 1000px)";

export default function ProductTourCard() {
  const img = getCloudinaryImageProps("/figma-imports/Custom Themes.webp", {
    widths: TOUR_WIDTHS,
    quality: "auto:good",
  });

  return (
    <div className="relative w-full rounded-[32px] overflow-hidden shadow-[0_35px_120px_rgba(9,12,0,0.35)]">
      <div className="relative w-full aspect-[16/9]">
        {img.srcSet && img.src ? (
          <img
            src={img.src}
            srcSet={img.srcSet}
            sizes={TOUR_SIZES}
            alt="Oasis Custom Themes"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <Image
            src={getCloudinaryImageUrl("/figma-imports/Custom Themes.webp", {
              width: 400,
              quality: "auto:good",
            })}
            alt="Oasis Custom Themes"
            fill
            sizes={TOUR_SIZES}
            className="object-cover"
            loading="lazy"
            quality={85}
          />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#091003]/35 via-transparent to-transparent opacity-60" />
      </div>
    </div>
  );
}

