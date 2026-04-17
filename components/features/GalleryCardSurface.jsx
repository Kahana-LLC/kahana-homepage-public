import React from 'react';

/**
 * Background stack for feature/solution gallery tiles: abstract brand gradient + sandy grain + vignette.
 * Parent must be `relative` and typically `group` for hover vignette.
 * @param {{ gradientStyle?: { backgroundImage?: string }; gradientClassName?: string }} props
 */
export function GalleryCardSurface({ gradientStyle, gradientClassName = '' }) {
  return (
    <>
      <div className={`absolute inset-0 ${gradientClassName}`} style={gradientStyle} aria-hidden />
      <div className="gallery-card-grain absolute inset-0" aria-hidden />
      <div className="gallery-card-sand-wash absolute inset-0" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/22 to-black/12 transition-colors group-hover:from-black/34 group-hover:via-black/18"
        aria-hidden
      />
    </>
  );
}
