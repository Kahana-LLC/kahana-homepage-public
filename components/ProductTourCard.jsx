import React from "react";
import Image from "next/image";
import {
  getCloudinaryImageProps,
  getCloudinaryImageUrl,
} from "../utils/cloudinary-mapper";

/**
 * Width steps for Cloudinary srcset. Must extend past 640w: the card sits in `max-w-4xl` (896px CSS).
 * At 2× DPR the browser needs ~1792px — capping at 640w caused visible blur on desktop/tablet.
 */
const TOUR_WIDTHS = [384, 640, 750, 828, 1080, 1200, 1536, 1920];
/** Matches `max-w-4xl` hero column (~896px) on large screens; tighter on small viewports */
const TOUR_SIZES =
  "(max-width: 640px) calc(100vw - 3rem), (max-width: 1024px) min(calc(100vw - 3rem), 896px), 896px";

export default function ProductTourCard() {
  const img = getCloudinaryImageProps("/figma-imports/Custom Themes.webp", {
    widths: TOUR_WIDTHS,
    quality: "auto:best",
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
              width: 1080,
              quality: "auto:best",
            })}
            alt="Oasis Custom Themes"
            fill
            sizes={TOUR_SIZES}
            className="object-cover"
            loading="lazy"
            quality={85}
          />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#091003]/25 via-transparent to-transparent opacity-50" />
      </div>
    </div>
  );
}

