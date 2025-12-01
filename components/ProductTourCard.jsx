import React from "react";

export default function ProductTourCard() {
  return (
    <div className="relative w-full rounded-[32px] overflow-hidden shadow-[0_35px_120px_rgba(9,12,0,0.35)]">
      <div className="relative w-full pt-[56.25%]">
        <img
          src="/figma-imports/Custom Themes.png"
          alt="Oasis Custom Themes"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#091003]/35 via-transparent to-transparent opacity-60" />
      </div>
    </div>
  );
}

