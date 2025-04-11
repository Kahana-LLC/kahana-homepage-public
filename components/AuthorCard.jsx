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
          priority
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
            className="text-[#C17F11] hover:text-[#A66F0E] transition-colors"
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

// Multiple authors header
export function MultipleAuthorsHeader({ authors, imageClassName }) {
  return (
    <div className="flex flex-wrap gap-2">
      {authors.map((author, index) => (
        <AuthorHeader key={author.name} author={author} imageClassName={imageClassName} />
      ))}
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
            priority
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
                className="text-[#C17F11] hover:text-[#A66F0E] transition-colors"
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

// Multiple authors bio cards
export function MultipleAuthorsBio({ authors, imageClassName }) {
  return (
    <div className="space-y-6">
      {authors.map((author, index) => (
        <AuthorBioCard key={author.name} author={author} imageClassName={imageClassName} />
      ))}
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
        priority
      />
      <span className="text-sm text-gray-600">
        {author.name}
      </span>
    </div>
  );
}

// Default export for backward compatibility
export default function AuthorCard({ author, authors, variant = 'header', imageClassName }) {
  // If multiple authors are provided, use the multiple authors components
  if (authors?.length > 0) {
    switch (variant) {
      case 'bio':
        return <MultipleAuthorsBio authors={authors} imageClassName={imageClassName} />;
      case 'reference':
        return <AuthorReference author={authors[0]} imageClassName={imageClassName} />;
      default:
        return <MultipleAuthorsHeader authors={authors} imageClassName={imageClassName} />;
    }
  }

  // Single author fallback
  switch (variant) {
    case 'bio':
      return <AuthorBioCard author={author} imageClassName={imageClassName} />;
    case 'reference':
      return <AuthorReference author={author} imageClassName={imageClassName} />;
    default:
      return <AuthorHeader author={author} imageClassName={imageClassName} />;
  }
} 