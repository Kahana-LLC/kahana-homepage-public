import React from 'react';
import Link from 'next/link';

/**
 * WaitlistButton Component
 * Segmented control showing availability status and join waitlist action
 * Inspired by modern waitlist UI patterns
 */
export default function WaitlistButton({ 
  hasSeats = false, // Set to false to show waitlist-only status
  waitlistUrl = '/oasis-waitlist',
  proUrl = '/oasis-pricing',
  onJoinWaitlist,
  className = '',
  statusText = null // Optional: override status text
}) {

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      {/* Segmented Control */}
      <div className="relative inline-flex rounded-full bg-gray-100 p-1 border border-gray-200 shadow-sm">
        {/* Left Segment - Status */}
        <div className="flex items-center px-4 py-2.5 rounded-full bg-white transition-all duration-200" style={{ color: '#8A6622' }}>
          <svg 
            className="w-4 h-4 mr-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
          <span className="text-sm font-medium">
            {statusText || (hasSeats ? 'Limited availability' : 'This tier is at rest')}
          </span>
        </div>

        {/* Right Segment - Join Waitlist Button with btn-primary styling */}
        <Link
          href={waitlistUrl}
          onClick={onJoinWaitlist}
          className="btn-primary btn-sm transition-all duration-200 no-underline hover:no-underline focus:no-underline"
        >
          Join waitlist
        </Link>
      </div>

      {/* Pro Link */}
      <Link
        href={proUrl}
        className="text-sm transition-colors hover:opacity-80 no-underline"
        style={{ color: '#8A6622' }}
      >
        <span className="ml-1">Get Zen for uninterrupted work</span>
      </Link>
    </div>
  );
}
