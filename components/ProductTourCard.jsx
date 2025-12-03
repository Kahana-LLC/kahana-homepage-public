import React from "react";
import Image from "next/image";

export default function ProductTourCard() {
  return (
    <div className="relative w-full rounded-[32px] overflow-hidden shadow-[0_35px_120px_rgba(9,12,0,0.35)]">
      <div className="relative w-full aspect-[16/9]">
        <Image
          src="/figma-imports/Custom Themes.png"
          alt="Oasis Custom Themes"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          className="object-cover"
          loading="lazy"
          quality={85}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#091003]/35 via-transparent to-transparent opacity-60" />
      </div>
    </div>
  );
}

