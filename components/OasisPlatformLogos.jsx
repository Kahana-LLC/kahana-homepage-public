import React from 'react';
import Image from 'next/image';
import { OASIS_PLATFORMS } from '../data/oasis-platforms';

export default function OasisPlatformLogos({ className = '', labelClassName = 'text-xs font-medium text-oasis-green-800' }) {
  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-6 sm:gap-8 ${className}`}
      aria-label="Windows, Linux, and Chromium"
    >
      {OASIS_PLATFORMS.map((platform) => (
        <div key={platform.name} className="flex flex-col items-center gap-1.5 text-gray-700">
          {platform.type === 'image' ? (
            <Image
              src={platform.src}
              alt="Chromium"
              width={32}
              height={32}
              className="h-7 w-7 object-contain sm:h-8 sm:w-8"
            />
          ) : (
            <platform.Icon className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden />
          )}
          <span className={labelClassName}>{platform.name}</span>
        </div>
      ))}
    </div>
  );
}
