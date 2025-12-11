import React from "react";
import Image from "next/image";
import { getCloudinaryImageUrl } from "../utils/cloudinary-mapper";

export default function ProductTourCard() {
  return (
    <div className="relative w-full rounded-[32px] overflow-hidden shadow-[0_35px_120px_rgba(9,12,0,0.35)]">
      <div className="relative w-full aspect-[16/9]">
        <Image
          src={getCloudinaryImageUrl("/figma-imports/Custom Themes.webp", { width: 1000, quality: 'auto:good' })}
          alt="Oasis Custom Themes"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 1000px"
          className="object-cover"
          loading="lazy"
          quality={85}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#091003]/35 via-transparent to-transparent opacity-60" />
      </div>
    </div>
  );
}

