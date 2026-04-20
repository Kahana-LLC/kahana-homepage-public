import React, { useState, useEffect, useRef } from 'react';

interface NavigationItem {
  id: string;
  label: string;
  children?: NavigationItem[];
}

interface StickyNavigationProps {
  items: NavigationItem[];
  className?: string;
}

const StickyNavigation: React.FC<StickyNavigationProps> = ({
  items,
  className = ""
}) => {
  const [activeId, setActiveId] = useState<string>('');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const navRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();

  // Flatten navigation items for easier processing
  const flatItems = items.reduce<NavigationItem[]>((acc, item) => {
    acc.push(item);
    if (item.children) {
      acc.push(...item.children);
    }
    return acc;
  }, []);

  // Scroll spy functionality with scroll margin offset
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const observerOptions = {
      rootMargin: '-100px 0px -70% 0px', // Account for sticky header
      threshold: 0.1
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            // Update URL hash without triggering scroll
            if (window.history.replaceState) {
              window.history.replaceState(null, '', `#${entry.target.id}`);
            }
          }
        });
      },
      observerOptions
    );

    // Observe all sections
    flatItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [flatItems]);

  // Handle scroll events for mobile drawer
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    if (typeof window === 'undefined') return;
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
      setIsMobileOpen(false);
      setFocusedIndex(-1);
    }
  };

  const toggleMobileNav = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  // Keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        setFocusedIndex((prev) => (prev + 1) % flatItems.length);
        break;
      case 'ArrowUp':
        event.preventDefault();
        setFocusedIndex((prev) => (prev - 1 + flatItems.length) % flatItems.length);
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (focusedIndex >= 0) {
          scrollToSection(flatItems[focusedIndex].id);
        }
        break;
      case 'Escape':
        setIsMobileOpen(false);
        setFocusedIndex(-1);
        break;
    }
  };

  const renderNavItem = (item: NavigationItem, level: number = 0) => {
    const isActive = activeId === item.id;
    const isChild = level > 0;
    const itemIndex = flatItems.findIndex(i => i.id === item.id);
    const isFocused = focusedIndex === itemIndex;
    
    return (
      <div key={item.id}>
        <button
          onClick={() => scrollToSection(item.id)}
          onKeyDown={handleKeyDown}
          className={`
            w-full text-left px-4 py-4 transition-all duration-200 ease-in-out
            ${isChild ? 'pl-8 text-lg' : 'text-xl font-semibold'}
            ${isActive 
              ? 'bg-gray-100 text-[#0A2240] border-l-4 border-[#009999] font-semibold' 
              : 'text-gray-700 hover:bg-gray-50 hover:text-[#0A2240] hover:border-l-2 hover:border-gray-300'
            }
            ${isFocused ? 'ring-2 ring-[#009999] ring-offset-2' : ''}
            rounded-r-lg focus:outline-none
          `}
          aria-current={isActive ? 'page' : undefined}
        >
          <span className="block truncate">
            {item.label.replace(/^[·—]\s/, '')}
          </span>
        </button>
        
        {/* Render children if they exist */}
        {item.children && (
          <div className="ml-2 mt-1 space-y-1">
            {item.children.map((child) => renderNavItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div 
        ref={navRef}
        className={`
          hidden lg:block fixed left-0 top-0 h-full w-72 z-30
          bg-[#F5F7FA] border-r border-gray-200 shadow-lg
          ${className}
        `}
      >
        <div className="p-6 h-full overflow-y-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A2240] mb-2">
              Navigation
            </h2>
            <p className="text-base text-gray-600">
              Jump to any section
            </p>
          </div>
          
          <nav className="space-y-1" role="navigation" aria-label="Page sections">
            {items.map((item) => renderNavItem(item))}
          </nav>
        </div>
      </div>

      {/* Mobile Navigation Button */}
      <button
        onClick={toggleMobileNav}
        className={`
          lg:hidden fixed top-4 left-4 z-50
          bg-[#0A2240] text-white p-3 rounded-lg shadow-lg
          transition-all duration-200 ease-in-out
          ${isScrolling ? 'scale-95' : 'scale-100'}
          hover:bg-[#009999] focus:outline-none focus:ring-2 focus:ring-[#009999] focus:ring-offset-2
        `}
        aria-label="Toggle navigation menu"
      >
        <svg
          className={`w-6 h-6 transition-transform duration-200 ${isMobileOpen ? 'rotate-90' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile Navigation Drawer */}
      <div
        className={`
          lg:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out
          ${isMobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={() => setIsMobileOpen(false)}
        />
        
        {/* Drawer */}
        <div
          className={`
            absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-[#F5F7FA] shadow-xl
            transform transition-transform duration-300 ease-in-out
            ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
          `}
        >
          <div className="p-6 h-full overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-xl font-bold text-[#0A2240] mb-1">
                  Navigation
                </h2>
                <p className="text-sm text-gray-600">
                  Jump to any section
                </p>
              </div>
              <button
                onClick={() => setIsMobileOpen(false)}
                className="p-2 text-[#0A2240] hover:bg-[#009999] hover:text-white rounded-lg transition-colors duration-200"
                aria-label="Close navigation"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <nav className="space-y-1" role="navigation" aria-label="Page sections">
              {items.map((item) => renderNavItem(item))}
            </nav>
          </div>
        </div>
      </div>

      {/* Content offset for desktop */}
      <div className="hidden lg:block w-72 flex-shrink-0" />
    </>
  );
};

export default StickyNavigation;
