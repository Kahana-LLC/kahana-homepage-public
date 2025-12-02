import React, { useState, useEffect, useRef } from 'react';

interface NavigationItem {
  id: string;
  label: string;
  children?: NavigationItem[];
}

interface TableOfContentsProps {
  items: NavigationItem[];
  className?: string;
  onCollapseChange?: (isCollapsed: boolean) => void;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({
  items,
  className = "",
  onCollapseChange
}) => {
  const [activeId, setActiveId] = useState<string>('');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [isDesktopCollapsed, setIsDesktopCollapsed] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  // Notify parent of collapse state changes
  useEffect(() => {
    if (onCollapseChange) {
      onCollapseChange(isDesktopCollapsed);
    }
  }, [isDesktopCollapsed, onCollapseChange]);

  // Flatten navigation items for easier processing
  const flatItems = items.reduce<NavigationItem[]>((acc, item) => {
    acc.push(item);
    if (item.children) {
      acc.push(...item.children);
    }
    return acc;
  }, []);

  // Initialize active section from URL hash
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const hash = window.location.hash.slice(1);
    if (hash && flatItems.some(item => item.id === hash)) {
      setActiveId(hash);
    }
  }, [flatItems]);

  // Scroll spy functionality with improved intersection observer
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const observerOptions = {
      rootMargin: '-80px 0px -60% 0px', // Better offset for sticky header
      threshold: [0, 0.1, 0.5, 0.9, 1.0] // Multiple thresholds for better detection
    };

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry with the highest intersection ratio
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          const mostVisible = visibleEntries.reduce((prev, current) => 
            current.intersectionRatio > prev.intersectionRatio ? current : prev
          );
          setActiveId(mostVisible.target.id);
          
          // Update URL hash without triggering scroll
          if (window.history.replaceState) {
            window.history.replaceState(null, '', `#${mostVisible.target.id}`);
          }
        }
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
      // Add smooth scroll with proper offset
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setIsMobileOpen(false);
      setFocusedIndex(-1);
    }
  };

  const toggleMobileNav = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  // Enhanced keyboard navigation
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
      case 'Home':
        event.preventDefault();
        setFocusedIndex(0);
        break;
      case 'End':
        event.preventDefault();
        setFocusedIndex(flatItems.length - 1);
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
      <div key={item.id} className="relative">
        <a
          href={`#${item.id}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(item.id);
          }}
          onKeyDown={handleKeyDown}
          className={`
            block w-full text-left px-4 py-3 transition-all duration-200 ease-in-out
            ${isChild ? 'pl-8 text-sm' : 'text-base font-medium'}
            ${isActive 
              ? 'bg-[#F8FAF2] text-[#617500] border-l-4 border-[#4A6200] font-semibold shadow-sm' 
              : 'text-[#617500] hover:bg-[#F8FAF2] hover:text-[#4A5F00] hover:border-l-2 hover:border-[#4A6200]'
            }
            ${isFocused ? 'ring-2 ring-[#4A6200] ring-offset-2 bg-[#F8FAF2]' : ''}
            rounded-r-lg focus:outline-none focus:ring-2 focus:ring-[#4A6200] focus:ring-offset-2
            border-l-2 border-transparent
          `}
          aria-current={isActive ? 'page' : undefined}
          aria-label={`Navigate to ${item.label.replace(/^—\s/, '')} section`}
          role="menuitem"
          tabIndex={0}
        >
          <span className="block truncate">
            {item.label.replace(/^—\s/, '')}
          </span>
          {isActive && (
            <span className="sr-only">Currently viewing</span>
          )}
        </a>
        
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
          hidden lg:block fixed left-0 z-30
          bg-white border-r border-gray-200 shadow-xl
          transition-all duration-300 ease-in-out
          ${isDesktopCollapsed ? 'w-16' : 'w-80'}
          ${className}
        `}
        style={{ 
          top: '64px', // Account for NavbarDup height (h-16 = 64px)
          height: 'calc(100vh - 64px)' // Full height minus navbar
        }}
      >
        {/* Fixed progress indicator at the top */}
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            {!isDesktopCollapsed && (
              <div className="text-xs text-gray-500">Reading Progress</div>
            )}
            <button
              onClick={() => setIsDesktopCollapsed(!isDesktopCollapsed)}
              className="p-2 text-white hover:text-white hover:bg-[#3E5300] rounded-lg transition-colors duration-200 btn-primary"
              aria-label={isDesktopCollapsed ? "Expand table of contents" : "Collapse table of contents"}
            >
              <svg 
                className={`w-5 h-5 transition-transform duration-200 ${isDesktopCollapsed ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          {!isDesktopCollapsed && (
            <>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-[#4A6200] h-2 rounded-full transition-all duration-300"
                  style={{ 
                    width: `${Math.min(100, Math.max(0, (flatItems.findIndex(item => item.id === activeId) + 1) / flatItems.length * 100))}%` 
                  }}
                />
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {flatItems.findIndex(item => item.id === activeId) + 1} of {flatItems.length} sections
              </div>
            </>
          )}
        </div>

        {!isDesktopCollapsed && (
          <div className="p-6 overflow-y-auto" style={{ height: 'calc(100% - 120px)' }}>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Table of Contents
              </h2>
            </div>
            
            <nav 
              className="space-y-1" 
              role="navigation" 
              aria-label="Security roadmap sections"
              aria-orientation="vertical"
            >
              {items.map((item) => renderNavItem(item))}
            </nav>
          </div>
        )}
      </div>

      {/* Mobile Navigation Button */}
      <button
        onClick={toggleMobileNav}
        className={`
          lg:hidden fixed left-4 z-50
          bg-[#788B59] text-white p-3 rounded-lg shadow-lg
          transition-all duration-200 ease-in-out
          ${isScrolling ? 'scale-95' : 'scale-100'}
          hover:bg-[#728552] focus:outline-none focus:ring-2 focus:ring-[#788B59] focus:ring-offset-2
        `}
        style={{ top: '80px' }} // Position below navbar (64px) + some margin
        aria-label="Toggle table of contents"
        aria-expanded={isMobileOpen}
        aria-controls="mobile-toc"
      >
        <svg
          className={`w-6 h-6 transition-transform duration-200 ${isMobileOpen ? 'rotate-90' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <span className="sr-only">Table of Contents</span>
      </button>

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-toc"
        className={`
          lg:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out
          ${isMobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-toc-title"
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={() => setIsMobileOpen(false)}
          aria-hidden="true"
        />
        
        {/* Drawer */}
        <div
          className={`
            absolute left-0 w-80 max-w-[85vw] bg-white shadow-xl
            transform transition-transform duration-300 ease-in-out
            ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
          `}
          style={{ 
            top: '64px', // Start below navbar
            height: 'calc(100vh - 64px)' // Full height minus navbar
          }}
        >
          {/* Fixed progress indicator at the top for mobile */}
          <div className="sticky top-0 z-10 bg-white border-b border-gray-200 p-6">
            <div className="text-xs text-gray-500 mb-2">Reading Progress</div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-[#788B59] h-2 rounded-full transition-all duration-300"
                style={{ 
                  width: `${Math.min(100, Math.max(0, (flatItems.findIndex(item => item.id === activeId) + 1) / flatItems.length * 100))}%` 
                }}
              />
            </div>
            <div className="text-xs text-gray-500 mt-1">
              {flatItems.findIndex(item => item.id === activeId) + 1} of {flatItems.length} sections
            </div>
          </div>

          <div className="p-6 overflow-y-auto" style={{ height: 'calc(100% - 120px)' }}>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 id="mobile-toc-title" className="text-xl font-bold text-gray-900 mb-1">
                  Table of Contents
                </h2>
              </div>
              <button
                onClick={() => setIsMobileOpen(false)}
                className="p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-lg transition-colors duration-200"
                aria-label="Close table of contents"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <nav 
              className="space-y-1" 
              role="navigation" 
              aria-label="Security roadmap sections"
              aria-orientation="vertical"
            >
              {items.map((item) => renderNavItem(item))}
            </nav>
          </div>
        </div>
      </div>

      {/* Content offset for desktop - this is now handled by the parent component */}
    </>
  );
};

export default TableOfContents;
