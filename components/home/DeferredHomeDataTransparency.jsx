import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const HomeDataTransparencySection = dynamic(
  () => import("./HomeDataTransparencySection"),
  { ssr: false }
);

const SECTION_MIN_HEIGHT = "min-h-[720px]";

export default function DeferredHomeDataTransparency() {
  const rootRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showIfTargeted = () => {
      if (window.location.hash.replace(/^#/, "") === "data-transparency") {
        setVisible(true);
      }
    };
    showIfTargeted();
    window.addEventListener("hashchange", showIfTargeted);
    return () => window.removeEventListener("hashchange", showIfTargeted);
  }, []);

  useEffect(() => {
    if (visible) return undefined;
    const el = rootRef.current;
    if (!el) return undefined;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return undefined;
    }

    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.some((e) => e.isIntersecting);
        if (hit) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "280px 0px", threshold: 0.01 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [visible]);

  return (
    <div ref={rootRef} id="data-transparency" className="relative w-full scroll-mt-24">
      {!visible ? (
        <div
          className={`mx-auto w-full ${SECTION_MIN_HEIGHT} rounded-lg border border-[#3B2F1A]/8 bg-[#F7F3EA]/50`}
          aria-hidden
        />
      ) : (
        <div className={SECTION_MIN_HEIGHT}>
          <HomeDataTransparencySection />
        </div>
      )}
    </div>
  );
}
