import React from "react";
import { oasisTestimonials } from "../../data/oasis-testimonials";
import WallOfLoveCarousel from "./WallOfLoveCarousel";

export default function WallOfLove({ variant = "page", limit }) {
  const items = limit
    ? oasisTestimonials.slice(0, limit)
    : oasisTestimonials;

  const carouselVariant = variant === "preview" ? "preview" : "full";

  return (
    <WallOfLoveCarousel
      testimonials={items}
      variant={carouselVariant}
      id={variant === "preview" ? "wall-of-love-preview" : "wall-of-love-page"}
    />
  );
}
