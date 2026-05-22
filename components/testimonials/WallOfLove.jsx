import React from "react";
import { oasisTestimonials } from "../../data/oasis-testimonials";
import TestimonialCard from "./TestimonialCard";

export default function WallOfLove({ variant = "page", limit }) {
  const items = limit
    ? oasisTestimonials.slice(0, limit)
    : oasisTestimonials;

  if (variant === "preview") {
    return (
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
        {items.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
            variant="preview"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="columns-1 gap-6 md:columns-2 lg:columns-3">
      {items.map((testimonial) => (
        <div key={testimonial.id} className="mb-6 break-inside-avoid">
          <TestimonialCard
            testimonial={testimonial}
            variant="full"
            anchorId={testimonial.id}
          />
        </div>
      ))}
    </div>
  );
}
