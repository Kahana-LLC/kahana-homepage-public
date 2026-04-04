import React from "react";
import Image from "next/image";
import {
  getCloudinaryImageProps,
  getCloudinaryImageUrl,
} from "../utils/cloudinary-mapper";

const TOUR_WIDTHS = [480, 640, 828, 1000];
const TOUR_SIZES =
  "(max-width: 640px) min(100vw, 896px), (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 1000px";

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
              width: 828,
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

