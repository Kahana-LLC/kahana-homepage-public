import React, { useEffect, useRef, useState } from 'react';

/**
 * @param {object} props
 * @param {boolean} [props.eager] - If true, render visible immediately (no opacity-0 first paint). Use for above-the-fold hero so FCP/LCP are not delayed by JS.
 */
export default function FadeInSection({ children, delay = 0, isImage = false, eager = false }) {
  const [isVisible, setVisible] = useState(!!eager);
  const domRef = useRef();

  useEffect(() => {
    if (eager) return;

    const currentElement = domRef.current;
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: isImage ? 0.3 : 0.1, // Higher threshold for images
      rootMargin: '50px'  // Start loading slightly before the element comes into view
    });

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      observer.disconnect();
    };
  }, [isImage, eager]);

  const baseClasses = 'transition-all duration-1000 ease-out';
  const visibilityClasses = isVisible
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-10';
  const imageClasses = isImage ? 'aspect-auto object-cover' : '';

  // Eager: no transition or delay — avoids compositor work and keeps LCP paint from waiting on CSS transitions.
  if (eager) {
    return (
      <div ref={domRef} className={`opacity-100 translate-y-0 ${imageClasses}`}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={domRef}
      className={`${baseClasses} ${visibilityClasses} ${imageClasses}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
} 