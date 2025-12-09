import React, { useEffect, useRef, useState } from 'react';

export default function FadeInSection({ children, delay = 0, isImage = false, skipFade = false }) {
  // For LCP elements, render immediately without fade-in
  const [isVisible, setVisible] = useState(skipFade);
  const domRef = useRef();

  useEffect(() => {
    // If skipFade is true, don't set up intersection observer
    if (skipFade) {
      return;
    }

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
  }, [isImage, skipFade]);

  // If skipFade, render immediately without transition classes
  if (skipFade) {
    return <div ref={domRef}>{children}</div>;
  }

  const baseClasses = 'transition-all duration-1000 ease-out';
  const visibilityClasses = isVisible 
    ? 'opacity-100 translate-y-0' 
    : 'opacity-0 translate-y-10';
  const imageClasses = isImage ? 'aspect-auto object-cover' : '';

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