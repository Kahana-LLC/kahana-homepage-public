import React from 'react';
import Link from 'next/link';

/**
 * DiscordCTA Component
 * 
 * A reusable call-to-action component that encourages users to join the Kahana Discord community.
 * 
 * @param {Object} props - Component props
 * @param {string} [props.title="Join Our Discord Community"] - The main heading text
 * @param {string} [props.description="Connect with the Kahana team, get support, access exclusive resources, and stay updated on the latest features and announcements."] - The description text
 * @param {string} [props.buttonText="Join Discord"] - The button text
 * @param {string} [props.className=""] - Additional CSS classes to apply to the container
 * 
 * @example
 * // Basic usage
 * <DiscordCTA />
 * 
 * @example
 * // Custom content
 * <DiscordCTA 
 *   title="Get Help on Discord"
 *   description="Need assistance? Join our Discord for real-time support."
 *   buttonText="Get Help Now"
 *   className="my-8"
 * />
 */
const DiscordCTA = ({ 
  title = "Join Our Discord Community",
  description = "Connect with the Kahana team, get support, access exclusive resources, and stay updated on the latest features and announcements.",
  buttonText = "Join Discord",
  className = "",
  directDiscordLink = false
}) => {
  return (
    <div className={`mt-16 p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-100 ${className}`}>
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-[#5865F2] rounded-xl flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.019 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
            </svg>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 mb-6">
            {description}
          </p>
          <div className="flex flex-wrap gap-4">
            {directDiscordLink ? (
              <a 
                href="https://discord.gg/erkguEsVHa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-bold rounded-xl shadow-sm text-white bg-[#5865F2] hover:bg-[#4752C4] transition-colors no-underline"
                style={{ 
                  textDecoration: 'none', 
                  backgroundColor: '#5865F2', 
                  borderColor: '#5865F2'
                }}
              >
                <span style={{ fontWeight: 'bold', color: 'white' }}>{buttonText}</span>
                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ) : (
              <Link 
                href="/community"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-bold rounded-xl shadow-sm text-white bg-[#5865F2] hover:bg-[#4752C4] transition-colors no-underline"
                style={{ 
                  textDecoration: 'none', 
                  backgroundColor: '#5865F2', 
                  borderColor: '#5865F2'
                }}
              >
                <span style={{ fontWeight: 'bold', color: 'white' }}>{buttonText}</span>
                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            )}
            <div className="flex items-center text-sm text-[#4A5745]">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Always free to join</span>
            </div>
          </div>
          <div className="mt-4 text-sm text-[#4A5745]">
            <span>Having trouble with Discord? </span>
            <Link 
              href="/contact" 
              className="text-[#66C2BE] hover:text-[#55B3AF] no-underline transition-colors"
            >
              Contact us directly
            </Link>
          </div>
          <div className="mt-4 flex flex-wrap gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Direct support from our team</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Exclusive resources & updates</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Connect with other users</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscordCTA;
