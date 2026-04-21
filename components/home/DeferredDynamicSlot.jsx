import React, { useEffect, useRef, useState } from "react";

/**
 * Mounts `children` only after the slot intersects the viewport (or IO is unavailable).
 * Reserves layout with `minHeightClass` / skeleton so the footer does not jump when mocks hydrate.
 */
export default function DeferredDynamicSlot({
  minHeightClass = "",
  skeletonClassName = "",
  rootMargin = "180px 0px",
  children,
}) {
  const ref = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    if (typeof IntersectionObserver === "undefined") {
      setReady(true);
      return undefined;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setReady(true);
          io.disconnect();
        }
      },
      { rootMargin, threshold: 0.01 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={minHeightClass}>
      {ready ? (
        children
      ) : (
        <div className={skeletonClassName} aria-hidden />
      )}
    </div>
  );
}
