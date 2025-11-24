import React, { useRef, useState } from 'react';
import Link from 'next/link';

export default function HowItWorks() {
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
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 get-started-section">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl font-semibold leading-8 text-[#978455] mb-4">Get Started</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-[#313A00] sm:text-4xl">
          Bring Oasis to your organization
          </p>
          <p className="mt-6 text-lg leading-8 text-[#333333]">
          Learn how Oasis can help you and your organization.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-4xl sm:mt-20 lg:mt-24 w-full flex flex-col items-center">
          <div className="w-full bg-[#E4E9CC] rounded-[32px] shadow-[0_20px_60px_rgba(33,41,10,0.15)] px-4 py-8 sm:px-10 sm:py-10">
            <div className="text-left mb-6">
              <p className="text-sm uppercase tracking-[0.2em] text-[#617500] mb-3">
                Product Tour
              </p>
              <h3 className="text-2xl font-semibold text-[#313A00]">
                See how Oasis customizes your homepage for every workflow
              </h3>
            </div>
            <div className="w-full flex justify-center">
              <div className="w-full max-w-4xl">
                <div className="relative w-full rounded-[28px] overflow-hidden shadow-[0_18px_45px_rgba(32,47,0,0.18)]">
                  <div
                    className="relative w-full pt-[56.25%] bg-[#1B1F12] cursor-pointer"
                    onClick={handleVideoToggle}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleVideoToggle();
                      }
                    }}
                    aria-label={isPlaying ? 'Pause product tour video' : 'Play product tour video'}
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
                      Your browser does not support the video tag.
                    </video>
                    {/* Center play/pause control */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleVideoToggle();
                      }}
                      className={`absolute inset-0 m-auto h-14 w-14 btn-primary flex items-center justify-center shadow-lg transition-opacity duration-200 ${
                        isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'
                      }`}
                      aria-label={isPlaying ? "Pause video" : "Play video"}
                    >
                      {isPlaying ? (
                        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                          <line x1="9" y1="5" x2="9" y2="19" />
                          <line x1="15" y1="5" x2="15" y2="19" />
                        </svg>
                      ) : (
                        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                          <polygon points="8 5 19 12 8 19 8 5" />
                        </svg>
                      )}
                    </button>

                    {/* Bottom controls */}
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
              </div>
            </div>
          </div>

          {/* Download Button */}
          <div className="mt-12 text-center">
                        <Link
              href="/schedule-demo"
              className="btn-primary inline-flex items-center justify-center px-8 py-3 text-base no-underline hover:no-underline focus:no-underline"
            >
              <span>Schedule Your Demo</span>
              <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 