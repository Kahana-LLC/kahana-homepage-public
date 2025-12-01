import React, { useRef, useState } from "react";

export default function ProductTourCard() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const handleVideoToggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleAudioToggle = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !isMuted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
    if (!nextMuted && video.volume === 0) {
      video.volume = 0.6;
    }
  };

  return (
    <div className="relative w-full rounded-[32px] overflow-hidden shadow-[0_35px_120px_rgba(9,12,0,0.35)]">
      <div
        className="relative w-full pt-[56.25%] cursor-pointer"
        onClick={handleVideoToggle}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleVideoToggle();
          }
        }}
        aria-label={isPlaying ? "Pause product tour video" : "Play product tour video"}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          controls={false}
          preload="metadata"
          poster="/figma-imports/Summarize with AI 3.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="/videos/Oasis%20Homepage%20Customization%20-%20FINAL.webm"
            type="video/webm"
          />
          <source
            src="/videos/oasis-homepage-customization.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleVideoToggle();
          }}
          className={`absolute inset-0 m-auto h-12 w-12 btn-primary flex items-center justify-center shadow-lg transition-opacity duration-200 ${
            isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? (
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="9" y1="5" x2="9" y2="19" />
              <line x1="15" y1="5" x2="15" y2="19" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <polygon points="8 5 19 12 8 19 8 5" />
            </svg>
          )}
        </button>

        <div className="absolute bottom-4 right-4 flex items-center gap-2">
          <button
            type="button"
            onClick={handleAudioToggle}
            className="btn-secondary h-8 w-8 flex items-center justify-center"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3 h-3"
            >
              <polygon points="5 9 9 9 13 5 13 19 9 15 5 15"></polygon>
              {!isMuted && (
                <>
                  <path d="M16 9.35a4 4 0 010 5.3" />
                  <path d="M19 7a7 7 0 010 10" />
                </>
              )}
              {isMuted && (
                <>
                  <line x1="16" y1="8" x2="22" y2="14" />
                  <line x1="22" y1="8" x2="16" y2="14" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

