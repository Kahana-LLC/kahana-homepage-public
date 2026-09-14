/** Black store marks (white artwork). Decorative — apps are not in stores yet. */

export function AppStoreBadge({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 40"
      role="img"
      aria-label="App Store"
    >
      <rect width="120" height="40" rx="6" fill="#000" />
      <path
        fill="#fff"
        d="M24.6 12.4c1.2-1.5 2-3.5 1.8-5.5-1.7.1-3.8 1.1-5 2.6-1.1 1.3-2.1 3.4-1.8 5.4 2 .2 3.8-.9 5-2.5zm.3 1.2c-2.6-.2-4.8 1.5-6 1.5-1.2 0-3.1-1.4-5.1-1.4-2.6.1-5 1.5-6.3 3.9-2.7 4.7-.7 11.6 1.9 15.4 1.3 1.8 2.8 3.9 4.8 3.8 1.9-.1 2.6-1.2 4.9-1.2s2.9 1.2 5.1 1.2c2.1 0 3.5-1.9 4.8-3.8 1.5-2.1 2.1-4.2 2.1-4.3-.1 0-4.1-1.6-4.1-6.2 0-3.9 3.2-5.8 3.3-5.9-1.8-2.7-4.7-3-5.4-3z"
      />
      <text
        x="42"
        y="14"
        fill="#fff"
        fontFamily="system-ui, -apple-system, Helvetica, Arial, sans-serif"
        fontSize="6.5"
        letterSpacing="0.04em"
      >
        Download on the
      </text>
      <text
        x="42"
        y="28"
        fill="#fff"
        fontFamily="system-ui, -apple-system, Helvetica, Arial, sans-serif"
        fontSize="13"
        fontWeight="600"
      >
        App Store
      </text>
    </svg>
  );
}

export function GooglePlayBadge({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 135 40"
      role="img"
      aria-label="Google Play"
    >
      <rect width="135" height="40" rx="6" fill="#000" />
      <path fill="#fff" d="M16.2 8.2 28.4 20 16.2 31.8V8.2z" />
      <path fill="#fff" opacity="0.85" d="M16.2 8.2 27 18.4 22.2 20.2 16.2 8.2z" />
      <path fill="#fff" opacity="0.7" d="M16.2 31.8 22.2 19.8 27 21.6 16.2 31.8z" />
      <text
        x="34"
        y="14"
        fill="#fff"
        fontFamily="system-ui, Roboto, Helvetica, Arial, sans-serif"
        fontSize="6.5"
        letterSpacing="0.12em"
      >
        GET IT ON
      </text>
      <text
        x="34"
        y="28"
        fill="#fff"
        fontFamily="system-ui, Roboto, Helvetica, Arial, sans-serif"
        fontSize="13"
        fontWeight="600"
      >
        Google Play
      </text>
    </svg>
  );
}

export function StoreWaitlistMarks({ className = '' }) {
  return (
    <div
      className={`mt-8 flex flex-wrap items-center gap-3 ${className}`}
      aria-label="Coming to the App Store and Google Play"
    >
      <AppStoreBadge className="h-10 w-auto" />
      <GooglePlayBadge className="h-10 w-auto" />
    </div>
  );
}
