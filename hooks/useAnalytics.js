import { useEffect } from "react";
import { trackScrollDepth, trackTimeOnPage } from "../utils/analytics";

export const useAnalytics = (pagePath, pageTitle) => {
  useEffect(() => {
    // Track initial page view
    trackPageView(pagePath, pageTitle);

    // Track scroll depth
    let maxScroll = 0;
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
          100
      );
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        // Track at 25%, 50%, 75%, and 100% scroll depth
        if (maxScroll >= 25 && maxScroll < 50) {
          trackScrollDepth(25);
        } else if (maxScroll >= 50 && maxScroll < 75) {
          trackScrollDepth(50);
        } else if (maxScroll >= 75 && maxScroll < 100) {
          trackScrollDepth(75);
        } else if (maxScroll >= 100) {
          trackScrollDepth(100);
        }
      }
    };

    // Track time on page
    let startTime = Date.now();
    const timeInterval = setInterval(() => {
      const timeInSeconds = Math.round((Date.now() - startTime) / 1000);
      trackTimeOnPage(timeInSeconds);
    }, 30000); // Track every 30 seconds

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timeInterval);
    };
  }, [pagePath, pageTitle]);
};
