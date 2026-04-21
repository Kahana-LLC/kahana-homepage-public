import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const HomeProductLanes = dynamic(() => import("./HomeProductLanes"), { ssr: false });

/** Reserves vertical space close to loaded HomeProductLanes height so the footer does not jump (Lighthouse CLS). */
const PLACEHOLDER_MIN_HEIGHT = "min-h-[3000px]";

export default function DeferredHomeProductLanes() {
  const rootRef = useRef(null);
  const [visible, setVisible] = useState(false);

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
    <div ref={rootRef} className="relative w-full">
      {!visible ? (
        <div
          className={`mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 ${PLACEHOLDER_MIN_HEIGHT} rounded-lg border border-oasis-green-800/8 bg-oasis-green-50/30`}
          aria-hidden
        />
      ) : (
        <HomeProductLanes />
      )}
    </div>
  );
}
