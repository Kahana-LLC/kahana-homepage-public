import React from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

/** Same demo used across marketing pages — loads YouTube iframe only after user click */
export const OASIS_DEMO_VIDEO_ID = "e4D1-cmBqCo";

/**
 * Keep this component below the fold on LCP-critical pages so the poster/iframe never competes with hero LCP.
 * Poster is `hqdefault` (smaller than maxres) — cache TTL on i.ytimg.com is controlled by Google.
 */
export default function OasisYouTubeEmbed({
  title = "Oasis product demo video",
  wrapperClassName = "w-full h-full",
}) {
  return (
    <div className={wrapperClassName}>
      <LiteYouTubeEmbed
        id={OASIS_DEMO_VIDEO_ID}
        title={title}
        poster="hqdefault"
        webp
      />
    </div>
  );
}
