import React, { useEffect, useRef, useState } from 'react';

export default function FadeInSection({ children, delay = 0, isImage = false }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
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
  }, [isImage]);

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