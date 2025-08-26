import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function GlobalBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();

  // Hide banner on the Oasis Waitlist page
  if (router.pathname === '/oasis-waitlist' || !isVisible) return null;

  return (
    <div className="GlobalBanner bg-gradient-to-r from-kahana-primary to-kahana-secondary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a3 3 0 100 6 3 3 0 000-6zM12 16a3 3 0 100 6 3 3 0 000-6zM2 12a3 3 0 106 0 3 3 0 00-6 0zM16 12a3 3 0 106 0 3 3 0 00-6 0zM5 5l14 14M5 19l14-14" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-white">
                <span className="md:hidden">
                  AI browser that melds with your mind naturally
                </span>
                <span className="hidden md:inline">
                  Meet Oasis: The first AI browser designed to meld with the way your mind works naturally. Built for ergonomic work, focus, and spatial ease. Join our <a href="https://discord.gg/U6jQCqE5" target="_blank" rel="noopener noreferrer" className="!text-white underline hover:!text-white/80 transition-colors" style={{color: 'white'}}>Discord community</a> to stay updated!
                </span>
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Link href="/oasis-waitlist">
              <button className="bg-transparent border border-white text-white font-bold px-6 py-3 rounded-md hover:bg-white hover:text-kahana-primary transition-colors">
                Join Waitlist
              </button>
            </Link>
            <a href="https://discord.gg/U6jQCqE5" target="_blank" rel="noopener noreferrer">
              <button className="bg-transparent border border-white text-white font-bold px-4 py-3 rounded-md hover:bg-white hover:text-kahana-primary transition-colors flex items-center space-x-2">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.019 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
                </svg>
                <span>Discord</span>
              </button>
            </a>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white hover:text-white/80 transition-colors"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 