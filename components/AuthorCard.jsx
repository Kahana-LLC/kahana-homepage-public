import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';

// Default avatar placeholder
const DEFAULT_AVATAR = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%233C584A"%3E%3Cpath d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"%2F%3E%3C%2Fsvg%3E';

// Simple author header for blog posts
export function AuthorHeader({ author, imageClassName, index }) {
  if (!author?.name) return null;

  return (
    <div className="inline-flex items-center gap-1.5">
      <div>
        <Image
          src={author.avatar || DEFAULT_AVATAR}
          alt={author.name}
          width={24}
          height={24}
          className={imageClassName || "rounded-lg"}
          style={{ width: '24px', height: '24px', objectFit: 'cover' }}
          priority
        />
      </div>
      <div className="flex items-center gap-1.5">
        <span className="text-sm font-medium text-[#4A5745]">
          {author.name}
        </span>
        {author.linkedinProfile && (
          <a 
            href={author.linkedinProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#728552] hover:text-[#788B59] transition-colors"
            title={`Connect with ${author.name} on LinkedIn`}
          >
            <FaLinkedin className="w-[14px] h-[14px]" />
          </a>
        )}
        {author.role && (
          <span className="text-sm text-[#4A5745]">
            • {author.role}
          </span>
        )}
      </div>
    </div>
  );
}

// Multiple authors header
export function MultipleAuthorsHeader({ authors, imageClassName }) {
  if (!Array.isArray(authors) || authors.length === 0) return null;

  // Remove duplicate authors based on name
  const uniqueAuthors = authors.reduce((acc, current) => {
    if (!acc.find(author => author.name === current?.name)) {
      acc.push(current);
    }
    return acc;
  }, []);

  return (
    <div className="flex flex-wrap gap-2">
      {uniqueAuthors.map((author, index) => (
        author?.name ? (
          <AuthorHeader 
            key={`${author.name}-${index}`} 
            author={author} 
            imageClassName={imageClassName}
            index={index}
          />
        ) : null
      ))}
    </div>
  );
}

// Full author bio card with description
export function AuthorBioCard({ author, imageClassName, index }) {
  if (!author?.name) return null;

  return (
    <>
      <style jsx>{`
        .author-bio-card {
          background: linear-gradient(90deg, #F8FAF2 0%, #d6e3f4 100%);
          border-radius: 1rem;
          padding: 2rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
      `}</style>
      <div className="author-bio-card">
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0">
          <div className="overflow-hidden rounded-lg">
            <Image
              src={author.avatar || DEFAULT_AVATAR}
              alt={author.name}
              width={80}
              height={80}
              className="rounded-lg"
              style={{ width: '80px', height: '80px', objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-bold text-lg text-[#4A5745]">
              {author.name}
            </span>
            {author.linkedinProfile && (
              <a 
                href={author.linkedinProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#728552] hover:text-[#788B59] transition-colors"
                title={`Connect with ${author.name} on LinkedIn`}
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
            )}
          </div>
          {author.role && (
            <div className="text-sm font-medium text-[#4A5745] mb-4">
              {author.role}
            </div>
          )}
          {author.bio && (
            <p className="text-[#4A5745] text-base leading-relaxed">
              {author.bio}
            </p>
          )}
        </div>
      </div>
      </div>
    </>
  );
}

// Multiple authors bio cards
export function MultipleAuthorsBio({ authors, imageClassName }) {
  if (!Array.isArray(authors) || authors.length === 0) return null;

  // Remove duplicate authors based on name
  const uniqueAuthors = authors.reduce((acc, current) => {
    if (!acc.find(author => author.name === current?.name)) {
      acc.push(current);
    }
    return acc;
  }, []);

  return (
    <div className="space-y-6">
      {uniqueAuthors.map((author, index) => (
        author?.name ? (
          <AuthorBioCard 
            key={`${author.name}-${index}`} 
            author={author} 
            imageClassName={imageClassName}
            index={index}
          />
        ) : null
      ))}
    </div>
  );
}

// Minimal author reference for blog listings
export function AuthorReference({ author, imageClassName }) {
  if (!author?.name) return null;

  return (
    <div className="flex items-center gap-2">
      <Image
        src={author.avatar || DEFAULT_AVATAR}
        alt={author.name}
        width={24}
        height={24}
        className={imageClassName || "rounded-lg"}
        style={{ width: '24px', height: '24px', objectFit: 'cover' }}
        priority
      />
      <span className="text-sm text-[#4A5745]">
        {author.name}
      </span>
    </div>
  );
}

// Default export for backward compatibility
export default function AuthorCard({ author, authors, variant = 'header', imageClassName }) {
  // If multiple authors are provided, use the multiple authors components
  if (Array.isArray(authors) && authors.length > 0) {
    // Remove duplicate authors based on name
    const uniqueAuthors = authors.reduce((acc, current) => {
      if (!acc.find(author => author.name === current?.name)) {
        acc.push(current);
      }
      return acc;
    }, []);

    switch (variant) {
      case 'bio':
        return <MultipleAuthorsBio authors={uniqueAuthors} imageClassName={imageClassName} />;
      case 'reference':
        return uniqueAuthors[0]?.name ? <AuthorReference author={uniqueAuthors[0]} imageClassName={imageClassName} /> : null;
      default:
        return <MultipleAuthorsHeader authors={uniqueAuthors} imageClassName={imageClassName} />;
    }
  }

  // Single author fallback
  if (!author?.name) return null;

  switch (variant) {
    case 'bio':
      return <AuthorBioCard author={author} imageClassName={imageClassName} />;
    case 'reference':
      return <AuthorReference author={author} imageClassName={imageClassName} />;
    default:
      return <AuthorHeader author={author} imageClassName={imageClassName} />;
  }
} 