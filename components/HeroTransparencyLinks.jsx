"use client";

import React, { useState } from "react";
import Link from "next/link";
import { trackButtonClick } from "../utils/analytics";
import { OASIS_DATA_TRANSPARENCY_VIDEO_ID } from "./OasisYouTubeEmbed";
import YouTubeVideoModal from "./YouTubeVideoModal";

function YouTubeIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const linkClassName =
  "text-sm font-semibold text-brand-link underline decoration-brand-link/40 underline-offset-2 hover:text-oasis-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#617500]";

const videoButtonClassName =
  "inline-flex items-center gap-1.5 rounded-full border border-[#617500]/25 bg-[#F2F4E5] px-2.5 py-1 text-sm font-semibold text-[#617500] transition-colors hover:border-[#617500]/40 hover:bg-[#E8EDDA] hover:text-oasis-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#617500]";

export default function HeroTransparencyLinks() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <Link
          href="/#data-transparency"
          onClick={() =>
            trackButtonClick("hero_data_transparency", "hero_section")
          }
          className={linkClassName}
        >
          See exactly what we collect
        </Link>
        <span className="hidden text-sm text-[#30400D]/35 sm:inline" aria-hidden>
          ·
        </span>
        <button
          type="button"
          onClick={() => {
            trackButtonClick(
              "hero_data_transparency_video",
              "hero_section"
            );
            setVideoOpen(true);
          }}
          className={videoButtonClassName}
          aria-label="Play 5-minute video: see what Oasis collects"
        >
          <YouTubeIcon className="h-4 w-4 shrink-0 text-[#313A00]" />
          <span>5-min video</span>
        </button>
      </div>

      <YouTubeVideoModal
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
        videoId={OASIS_DATA_TRANSPARENCY_VIDEO_ID}
        title="What Oasis collects (5 min)"
        aspect="portrait"
      />
    </>
  );
}
