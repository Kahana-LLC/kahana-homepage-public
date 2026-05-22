import React from "react";

function QuoteMark({ className }) {
  return (
    <svg
      aria-hidden
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M4.583 17.321C3.553 16.227 2.75 14.766 2.75 13c0-2.657 2.083-5 5.417-5 .417 0 .75-.333.75-.75S8.25 6.5 7.833 6.5C4.083 6.5 1 10.15 1 14.25c0 2.233.75 4.15 2.083 5.571.167.2.417.3.667.3.333 0 .667-.167.833-.5l.917-1.75c.25-.5 0-1.083-.5-1.333-.917-.5-1.5-1.333-1.5-2.333 0-1.5 1.25-2.75 2.75-2.75.417 0 .75-.333.75-.75s-.333-.75-.75-.75c-2.5 0-4.5 2.25-4.5 5.25 0 1.5.5 2.833 1.333 3.917.25.333.667.5 1.083.5.25 0 .5-.083.667-.25.333-.25.5-.667.333-1.083l-.75-1.417zM14.583 17.321c-1.03-1.094-1.833-2.555-1.833-4.321 0-2.657 2.083-5 5.417-5 .417 0 .75-.333.75-.75s-.333-.75-.75-.75c-3.75 0-6.833 3.65-6.833 7.75 0 2.233.75 4.15 2.083 5.571.167.2.417.3.667.3.333 0 .667-.167.833-.5l.917-1.75c.25-.5 0-1.083-.5-1.333-.917-.5-1.5-1.333-1.5-2.333 0-1.5 1.25-2.75 2.75-2.75.417 0 .75-.333.75-.75s-.333-.75-.75-.75c-2.5 0-4.5 2.25-4.5 5.25 0 1.5.5 2.833 1.333 3.917.25.333.667.5 1.083.5.25 0 .5-.083.667-.25.333-.25.5-.667.333-1.083l-.75-1.417z" />
    </svg>
  );
}

function getInitials(name) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function TestimonialCard({
  testimonial,
  variant = "full",
  anchorId,
}) {
  const isPreview = variant === "preview";
  const isFeatured = testimonial.featured && !isPreview;
  const body = isPreview ? [testimonial.excerpt] : testimonial.paragraphs;

  return (
    <article
      id={anchorId || testimonial.id}
      className={`scroll-mt-28 rounded-2xl border border-[#30400D]/12 bg-white/90 p-6 shadow-[0_10px_40px_rgba(48,64,13,0.06)] backdrop-blur-sm sm:p-8 ${
        isFeatured
          ? "sm:text-[1.02rem] lg:shadow-[0_14px_50px_rgba(48,64,13,0.09)]"
          : ""
      } ${!isPreview ? "transition-shadow duration-300 hover:shadow-[0_16px_48px_rgba(48,64,13,0.1)]" : "h-full flex flex-col"}`}
    >
      <QuoteMark className="h-8 w-8 text-[#617500]/35" />
      <blockquote className="mt-4 flex-1">
        {body.map((paragraph, index) => (
          <p
            key={index}
            className={`leading-relaxed text-[#30400D]/82 ${
              index > 0 ? "mt-4" : ""
            } ${isFeatured && !isPreview ? "text-base sm:text-[1.05rem]" : "text-base"}`}
          >
            {paragraph}
          </p>
        ))}
      </blockquote>
      <footer className="mt-6 flex items-center gap-3 border-t border-[#30400D]/10 pt-5">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#617500]/15 text-sm font-bold text-[#617500]"
          aria-hidden
        >
          {getInitials(testimonial.name)}
        </div>
        <cite className="not-italic text-base font-semibold text-[#30400D]">
          {testimonial.name}
        </cite>
      </footer>
    </article>
  );
}
