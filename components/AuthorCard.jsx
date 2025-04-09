import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';

// Simple author header for blog posts
export function AuthorHeader({ author, imageClassName }) {
  return (
    <div className="inline-flex items-center px-3 py-1.5 rounded-lg bg-gray-100 text-gray-700">
      <div className="mr-2">
        <Image
          src={author.avatar}
          alt={author.name}
          width={24}
          height={24}
          className={imageClassName || "rounded-lg"}
          style={{ width: '24px', height: '24px', objectFit: 'cover' }}
          unoptimized
        />
      </div>
      <div className="flex items-center gap-1.5">
        <span className="text-sm font-medium">
          {author.name}
        </span>
        {author.linkedinProfile && (
          <a 
            href={author.linkedinProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0A66C2] hover:text-[#004182] transition-colors"
            title={`Connect with ${author.name} on LinkedIn`}
          >
            <FaLinkedin className="w-[14px] h-[14px]" />
          </a>
        )}
        {author.role && (
          <span className="text-sm text-gray-500">
            • {author.role}
          </span>
        )}
      </div>
    </div>
  );
}

// Full author bio card with description
export function AuthorBioCard({ author, imageClassName }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
      <div className="flex items-start gap-4">
        <div className="-mt-1">
          <Image
            src={author.avatar}
            alt={author.name}
            width={64}
            height={64}
            className={imageClassName || "rounded-lg"}
            style={{ width: '64px', height: '64px', objectFit: 'cover' }}
            unoptimized
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-medium text-lg text-gray-900">
              {author.name}
            </span>
            {author.linkedinProfile && (
              <a 
                href={author.linkedinProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0A66C2] hover:text-[#004182] transition-colors"
                title={`Connect with ${author.name} on LinkedIn`}
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
            )}
          </div>
          {author.role && (
            <div className="text-sm text-gray-600 mb-4">
              {author.role}
            </div>
          )}
          {author.bio && (
            <p className="text-gray-700 text-base">
              {author.bio}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// Minimal author reference for blog listings
export function AuthorReference({ author, imageClassName }) {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={author.avatar}
        alt={author.name}
        width={24}
        height={24}
        className={imageClassName || "rounded-lg"}
        style={{ width: '24px', height: '24px', objectFit: 'cover' }}
        unoptimized
      />
      <span className="text-sm text-gray-600">
        {author.name}
      </span>
    </div>
  );
}

// Default export for backward compatibility
export default function AuthorCard({ author, variant = 'header', imageClassName }) {
  switch (variant) {
    case 'bio':
      return <AuthorBioCard author={author} imageClassName={imageClassName} />;
    case 'reference':
      return <AuthorReference author={author} imageClassName={imageClassName} />;
    default:
      return <AuthorHeader author={author} imageClassName={imageClassName} />;
  }
} 