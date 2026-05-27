"use client";

import React, { useEffect, useId } from "react";

export default function YouTubeVideoModal({
  isOpen,
  onClose,
  videoId,
  title = "YouTube video",
  aspect = "video",
}) {
  const titleId = useId();
  const isPortrait = aspect === "portrait";

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const embedSrc = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;

  const shellClassName = isPortrait
    ? "relative mx-auto w-full max-w-[min(100%,420px)] rounded-2xl border border-[#30400D]/12 bg-white shadow-2xl"
    : "relative w-full max-w-3xl rounded-2xl border border-[#30400D]/12 bg-white shadow-2xl";

  const videoWrapperClassName = isPortrait
    ? "aspect-[9/16] max-h-[min(78vh,740px)] w-full overflow-hidden rounded-b-2xl bg-black"
    : "aspect-video w-full overflow-hidden rounded-b-2xl bg-black";

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <div
        className="fixed inset-0 bg-black/60 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="flex min-h-full items-center justify-center p-4">
        <div className={shellClassName}>
          <div className="flex items-start justify-between gap-4 border-b border-[#30400D]/10 px-4 py-3 sm:px-6">
            <h2
              id={titleId}
              className="min-w-0 flex-1 text-base font-semibold text-[#313A00] sm:text-lg"
            >
              {title}
            </h2>
            <button
              type="button"
              onClick={onClose}
              className="shrink-0 rounded-full p-1.5 text-[#30400D]/60 transition-colors hover:bg-[#F2F4E5] hover:text-[#30400D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#617500]"
              aria-label="Close video"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className={videoWrapperClassName}>
            <iframe
              src={embedSrc}
              title={title}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}
