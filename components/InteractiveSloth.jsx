import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { getCloudinaryImageUrl } from '../utils/cloudinary-mapper';

const STORAGE_KEY = 'kahana_sloth_prefs';

const InteractiveSloth = () => {
  const [isAwake, setIsAwake] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const [isWalking, setIsWalking] = useState(false);
  const [isWaving, setIsWaving] = useState(false);
  
  const containerRef = useRef(null);
  const messageTimerRef = useRef(null);
  const walkAnimationRef = useRef(null);

  // Initialize position
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const loadPosition = () => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const { x, y, minimized } = JSON.parse(saved);
          if (x && y) {
            setPosition({ x, y });
            if (minimized) setIsMinimized(true);
          }
        }
      } catch (e) {
        // Use default
      }
      
      if (!position.x && !position.y) {
        setPosition({ 
          x: window.innerWidth - 200, 
          y: window.innerHeight - 250 
        });
      }
      setIsVisible(true);
    };

    loadPosition();
    window.addEventListener('resize', loadPosition);
    return () => window.removeEventListener('resize', loadPosition);
  }, []);

  // Wake up and walk animation sequence (every page load)
  useEffect(() => {
    if (!isVisible) return;
    
    const timer = setTimeout(() => {
      setIsAwake(true);
      
      // Start walking animation
      setIsWalking(true);
      
      // Start from left side of screen
      const startX = -200;
      const endX = window.innerWidth - 200;
      const walkY = window.innerHeight - 250;
      
      setPosition({ x: startX, y: walkY });
      
      // Animate walking across screen
      let currentX = startX;
      const walkSpeed = 2; // pixels per frame
      const totalDistance = endX - startX;
      const totalFrames = totalDistance / walkSpeed;
      let frame = 0;
      
      const animate = () => {
        frame++;
        currentX = startX + (frame * walkSpeed);
        
        // Wave during middle of walk
        if (frame > totalFrames * 0.4 && frame < totalFrames * 0.6) {
          setIsWaving(true);
        } else {
          setIsWaving(false);
        }
        
        setPosition({ x: currentX, y: walkY });
        
        if (currentX < endX) {
          walkAnimationRef.current = requestAnimationFrame(animate);
        } else {
          // Finished walking
          setIsWalking(false);
          setIsWaving(false);
          setPosition({ x: endX, y: walkY });
          
          // Show welcome message
          setTimeout(() => {
            setMessage('Welcome to Kahana!');
            setShowMessage(true);
            setTimeout(() => {
              setShowMessage(false);
            }, 3000);
          }, 500);
        }
      };
      
      walkAnimationRef.current = requestAnimationFrame(animate);
    }, 2000);

    return () => {
      clearTimeout(timer);
      if (walkAnimationRef.current) {
        cancelAnimationFrame(walkAnimationRef.current);
      }
    };
  }, [isVisible]);

  // Save preferences
  useEffect(() => {
    if (isVisible) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
          x: position.x,
          y: position.y,
          minimized: isMinimized,
        }));
      } catch (e) {
        // Ignore
      }
    }
  }, [position, isMinimized, isVisible]);

  // Drag handlers
  const handleStart = (clientX, clientY) => {
    if (isMinimized || isWalking) return;
    
    // Stop walking animation if active
    if (walkAnimationRef.current) {
      cancelAnimationFrame(walkAnimationRef.current);
      setIsWalking(false);
      setIsWaving(false);
    }
    
    setIsDragging(true);
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      setDragOffset({
        x: clientX - rect.left - 90,
        y: clientY - rect.top - 90,
      });
    }
  };

  const handleMove = (clientX, clientY) => {
    if (!isDragging) return;
    const x = clientX - dragOffset.x;
    const y = clientY - dragOffset.y;
    
    setPosition({
      x: Math.max(0, Math.min(x, window.innerWidth - 180)),
      y: Math.max(0, Math.min(y, window.innerHeight - 180)),
    });
  };

  const handleEnd = () => {
    if (isDragging) {
      setIsDragging(false);
      // Bounce
      setTimeout(() => {
        setPosition(p => ({ ...p, y: p.y - 10 }));
        setTimeout(() => {
          setPosition(p => ({ ...p, y: p.y + 10 }));
        }, 150);
      }, 0);
    }
  };

  // Mouse events
  const onMouseDown = (e) => {
    e.preventDefault();
    handleStart(e.clientX, e.clientY);
  };

  const onMouseMove = (e) => {
    handleMove(e.clientX, e.clientY);
  };

  const onMouseUp = () => {
    handleEnd();
  };

  // Touch events
  const onTouchStart = (e) => {
    if (isMinimized) {
      setIsMinimized(false);
      return;
    }
    e.preventDefault();
    const touch = e.touches[0];
    handleStart(touch.clientX, touch.clientY);
  };

  const onTouchMove = (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    handleMove(touch.clientX, touch.clientY);
  };

  const onTouchEnd = () => {
    handleEnd();
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('touchmove', onTouchMove, { passive: false });
      window.addEventListener('touchend', onTouchEnd);
      return () => {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
        window.removeEventListener('touchmove', onTouchMove);
        window.removeEventListener('touchend', onTouchEnd);
      };
    }
  }, [isDragging]);

  // Click handler
  const handleClick = () => {
    if (!isAwake || isMinimized) return;
    
    const messages = [
      'Try Tab Groups to organize your browsing!',
      'Customize your theme in Settings',
      'Oasis keeps your data secure',
      'Drag me anywhere!',
      'Welcome to Oasis!',
    ];
    
    setMessage(messages[Math.floor(Math.random() * messages.length)]);
    setShowMessage(true);
    
    if (messageTimerRef.current) clearTimeout(messageTimerRef.current);
    messageTimerRef.current = setTimeout(() => {
      setShowMessage(false);
    }, 4000);
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isAwake || isMinimized) return;

    const handleKey = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      
      if (e.key === 'Escape') {
        setIsMinimized(true);
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isAwake, isMinimized]);

  // Get image
  const imagePath = '/assets/sloth-mascot.png';
  let imageSrc;
  try {
    imageSrc = getCloudinaryImageUrl(imagePath) || imagePath;
  } catch {
    imageSrc = imagePath;
  }

  if (!isVisible) return null;

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        @keyframes wake {
          0% { opacity: 0.4; transform: scale(0.85); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.2); }
        }

        @keyframes walk {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-5px) rotate(-2deg); }
          75% { transform: translateY(-5px) rotate(2deg); }
        }

        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-20deg); }
        }

        .sloth {
          position: fixed;
          width: 180px;
          height: 180px;
          z-index: 1000;
          cursor: ${isDragging ? 'grabbing' : 'grab'};
          user-select: none;
          touch-action: none;
        }

        .sloth.minimized {
          width: 60px;
          height: 60px;
          cursor: pointer;
        }

        .sloth-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
          animation: ${isAwake && !isWalking ? 'float 6s ease-in-out infinite' : 'none'};
          opacity: ${isAwake ? 1 : 0.6};
          transition: opacity 0.5s;
        }

        .sloth-wrapper.waking {
          animation: wake 2s ease-out forwards;
        }

        .sloth-wrapper.walking {
          animation: walk 0.6s ease-in-out infinite;
        }

        .sloth-wrapper.waving {
          animation: walk 0.6s ease-in-out infinite, wave 0.5s ease-in-out infinite;
        }

        .sloth-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15));
        }

        .indicator {
          position: absolute;
          top: 8px;
          right: 8px;
          width: 12px;
          height: 12px;
          background: ${isAwake ? '#10b981' : '#6b7280'};
          border-radius: 50%;
          border: 2px solid white;
          animation: ${isAwake ? 'pulse 2s ease-in-out infinite' : 'none'};
          z-index: 10;
        }

        .message {
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-bottom: 16px;
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          font-family: 'Geist', system-ui, sans-serif;
          font-size: 13px;
          color: #374151;
          max-width: 200px;
          opacity: ${showMessage ? 1 : 0};
          pointer-events: none;
          transition: opacity 0.3s;
          z-index: 1001;
        }

        .message::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border: 8px solid transparent;
          border-top-color: rgba(255, 255, 255, 0.95);
        }


        .minimize-btn {
          position: absolute;
          top: -8px;
          right: -8px;
          width: 24px;
          height: 24px;
          background: white;
          border: 2px solid #e5e7eb;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 14px;
          color: #6b7280;
          opacity: ${isAwake ? 1 : 0};
          transition: opacity 0.3s;
          z-index: 100;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          pointer-events: auto;
        }

        .minimize-btn:hover {
          background: #f3f4f6;
          border-color: #d1d5db;
        }

        .minimize-btn:active {
          transform: scale(0.95);
        }

        .minimized-bubble {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border: 2px solid #10b981;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          cursor: pointer;
        }

        .minimized-indicator {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }


        @media (max-width: 768px) {
          .sloth:not(.minimized) {
            width: 140px;
            height: 140px;
          }
          
          .message {
            max-width: 150px;
            font-size: 12px;
          }

        }
      `}</style>

      {isMinimized ? (
        <div
          className="sloth minimized"
          style={{ left: `${position.x}px`, top: `${position.y}px` }}
          onClick={() => setIsMinimized(false)}
          role="button"
          aria-label="Expand sloth helper"
        >
          <div className="minimized-bubble">
            <div className="minimized-indicator" />
          </div>
        </div>
      ) : (
        <div
          ref={containerRef}
          className="sloth"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: isDragging ? 'scale(1.1)' : undefined,
          }}
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
          onClick={handleClick}
          role="button"
          aria-label="Interactive sloth helper"
          tabIndex={0}
        >
          <div className={`sloth-wrapper ${!isAwake ? 'waking' : ''} ${isWalking ? (isWaving ? 'waving' : 'walking') : ''}`}>
            <Image
              src={imageSrc}
              alt="Kahana Oasis sloth mascot"
              width={180}
              height={180}
              className="sloth-image"
              priority={false}
              loading="lazy"
              unoptimized
            />
            <div className="indicator" />
            
            {showMessage && (
              <div className="message">{message}</div>
            )}
            
            {isAwake && (
              <button
                className="minimize-btn"
                onMouseDown={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setIsMinimized(true);
                }}
                onTouchStart={(e) => {
                  e.stopPropagation();
                }}
                aria-label="Minimize sloth"
                type="button"
              >
                ×
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default InteractiveSloth;
