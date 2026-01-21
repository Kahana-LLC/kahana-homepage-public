import { useState, useEffect } from 'react';
import { trackPostHogEvent, setUserProperties } from '../utils/posthog';

/**
 * ICP Survey Component
 * Subtle micro-popup asking "What best describes your work?"
 * Options: Founder, Developer, Marketer, Student, Other
 * 
 * Timing: Shows after 20 seconds OR 50% scroll depth
 * Research: 20 seconds is optimal for survey popups - balances engagement with non-intrusiveness
 */
const ICPSurvey = () => {
  const [showSurvey, setShowSurvey] = useState(false);
  const [hasResponded, setHasResponded] = useState(false);
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [otherRole, setOtherRole] = useState('');

  useEffect(() => {
    // Check if user has already responded
    if (typeof window !== 'undefined') {
      const responded = localStorage.getItem('icp_survey_responded');
      if (responded === 'true') {
        setHasResponded(true);
        return;
      }
    }

    // Show survey after 20 seconds OR 50% scroll depth
    // Research shows: 20 seconds is ideal for surveys - long enough for users to engage,
    // but short enough to catch them before they leave. For heavy content, 20-45s works best.
    let scrollTimer = null;
    let timeTimer = null;
    let maxScroll = 0;

    // Time-based trigger (20 seconds - optimal for survey popups)
    timeTimer = setTimeout(() => {
      if (!hasResponded && typeof window !== 'undefined') {
        setShowSurvey(true);
      }
    }, 20000); // 20 seconds - ideal timing based on UX research

    // Scroll-based trigger (50% scroll depth)
    const handleScroll = () => {
      if (hasResponded) return;

      const scrollPercent = Math.round(
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
          100
      );

      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
      }

      if (maxScroll >= 50 && !showSurvey) {
        setShowSurvey(true);
        // Clear time timer if scroll triggers first
        if (timeTimer) {
          clearTimeout(timeTimer);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (timeTimer) clearTimeout(timeTimer);
      if (scrollTimer) clearTimeout(scrollTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasResponded, showSurvey]);

  const handleRoleSelection = (role) => {
    // If "Other" is selected, show input field instead of submitting
    if (role === 'Other') {
      setShowOtherInput(true);
      return;
    }

    // Mark as responded
    setHasResponded(true);
    setShowSurvey(false);
    
    // Store in localStorage to prevent showing again
    if (typeof window !== 'undefined') {
      localStorage.setItem('icp_survey_responded', 'true');
    }

    // Track event in PostHog
    trackPostHogEvent('role_selected', {
      role: role,
      source: 'icp_survey',
      timestamp: new Date().toISOString(),
    });

    // Set user property in PostHog
    setUserProperties({
      user_role: role,
      icp_segment: role,
      role_selected_at: new Date().toISOString(),
    });

    // TODO: Send to Warmly via webhook (can be added later)
    // sendToWarmly({ role });
  };

  const handleOtherSubmit = (e) => {
    e.preventDefault();
    
    if (!otherRole.trim()) {
      return; // Don't submit if empty
    }

    const customRole = `Other: ${otherRole.trim()}`;
    
    // Mark as responded
    setHasResponded(true);
    setShowSurvey(false);
    
    // Store in localStorage to prevent showing again
    if (typeof window !== 'undefined') {
      localStorage.setItem('icp_survey_responded', 'true');
    }

    // Track event in PostHog
    trackPostHogEvent('role_selected', {
      role: 'Other',
      custom_role: otherRole.trim(),
      source: 'icp_survey',
      timestamp: new Date().toISOString(),
    });

    // Set user property in PostHog
    setUserProperties({
      user_role: customRole,
      icp_segment: 'Other',
      custom_role: otherRole.trim(),
      role_selected_at: new Date().toISOString(),
    });
  };

  const handleDismiss = () => {
    setShowSurvey(false);
    setHasResponded(true);
    
    // Store dismissal (optional - you might want to show again later)
    if (typeof window !== 'undefined') {
      localStorage.setItem('icp_survey_responded', 'true');
    }

    // Track dismissal
    trackPostHogEvent('icp_survey_dismissed', {
      timestamp: new Date().toISOString(),
    });
  };

  if (!showSurvey || hasResponded) {
    return null;
  }

  const roles = [
    { value: 'Founder', label: 'Founder' },
    { value: 'Developer', label: 'Developer' },
    { value: 'Marketer', label: 'Marketer' },
    { value: 'Student', label: 'Student' },
    { value: 'Other', label: 'Other' },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm animate-in slide-in-from-bottom-5 duration-300">
      <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-6 space-y-4">
        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close survey"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Question */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {showOtherInput ? 'Please specify your role' : 'What best describes your work?'}
          </h3>
          <p className="text-sm text-gray-600">
            {showOtherInput ? 'Type your role below' : 'Help us personalize your experience'}
          </p>
        </div>

        {/* Role options */}
        {!showOtherInput ? (
          <div className="grid grid-cols-2 gap-2">
            {roles.map((role) => (
              <button
                key={role.value}
                onClick={() => handleRoleSelection(role.value)}
                className="btn-primary inline-flex items-center justify-center px-4 py-2 text-sm font-medium no-underline hover:no-underline focus:no-underline"
              >
                {role.label}
              </button>
            ))}
          </div>
        ) : (
          <form onSubmit={handleOtherSubmit} className="space-y-3">
            <input
              type="text"
              value={otherRole}
              onChange={(e) => setOtherRole(e.target.value)}
              placeholder="Please specify your role..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#978455] focus:border-transparent"
              autoFocus
            />
            <div className="flex gap-2">
              <button
                type="submit"
                className="btn-primary inline-flex items-center justify-center px-4 py-2 text-sm font-medium no-underline hover:no-underline focus:no-underline flex-1"
                disabled={!otherRole.trim()}
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowOtherInput(false);
                  setOtherRole('');
                }}
                className="btn-secondary inline-flex items-center justify-center px-4 py-2 text-sm font-medium no-underline hover:no-underline focus:no-underline"
              >
                Back
              </button>
            </div>
          </form>
        )}

        {/* Optional: Add a subtle note */}
        {!showOtherInput && (
          <p className="text-xs text-gray-500 text-center">
            One quick click, that's it!
          </p>
        )}
      </div>
    </div>
  );
};

export default ICPSurvey;

