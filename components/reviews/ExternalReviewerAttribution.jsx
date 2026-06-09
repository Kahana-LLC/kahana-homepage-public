import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';
import { YTC_OASIS_REVIEW } from '../../data/oasis-external-reviews';
import { getCloudinaryImageUrl } from '../../utils/cloudinary-mapper';

const SIZES = {
  full: 72,
  compact: 40,
  inline: 48,
};

function getReviewerImageUrl(size) {
  return getCloudinaryImageUrl(YTC_OASIS_REVIEW.authorImagePath, {
    width: size,
    height: size,
    quality: 'auto:good',
  });
}

function ReviewerPhoto({ size, className = '' }) {
  const src = getReviewerImageUrl(size);
  return (
    <Image
      src={src}
      alt={YTC_OASIS_REVIEW.author}
      width={size}
      height={size}
      className={`rounded-full object-cover ${className}`}
      style={{ width: size, height: size }}
    />
  );
}

function LinkedInLink({ className = '' }) {
  if (!YTC_OASIS_REVIEW.authorLinkedIn) return null;
  return (
    <a
      href={YTC_OASIS_REVIEW.authorLinkedIn}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-oasis-green-600 hover:text-oasis-green-500 transition-colors ${className}`}
      title={`Connect with ${YTC_OASIS_REVIEW.author} on LinkedIn`}
      aria-label={`${YTC_OASIS_REVIEW.author} on LinkedIn`}
    >
      <FaLinkedin className="h-4 w-4" />
    </a>
  );
}

export default function ExternalReviewerAttribution({ variant = 'full', className = '' }) {
  const { author, authorRole, publication, reviewedAt, reviewUrl } = YTC_OASIS_REVIEW;
  const size = SIZES[variant] || SIZES.full;

  if (variant === 'inline') {
    return (
      <div
        className={`not-prose my-8 flex items-center gap-4 rounded-xl border border-oasis-green-800/10 bg-oasis-green-50/60 p-4 ${className}`}
      >
        <ReviewerPhoto size={size} className="shrink-0" />
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#7a9200]">Independent reviewer</p>
          <p className="mt-1 text-sm text-oasis-green-800">
            Reviewed by{' '}
            <a
              href={YTC_OASIS_REVIEW.authorLinkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-link no-underline hover:underline"
            >
              {author}
            </a>
            , {authorRole} at {publication} ({reviewedAt})
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-3 text-sm">
            <LinkedInLink />
            <a
              href={reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-link no-underline hover:underline"
            >
              Read full review →
            </a>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <ReviewerPhoto size={size} className="shrink-0" />
        <div className="min-w-0 text-sm text-oasis-green-800/75">
          <span className="inline-flex flex-wrap items-center gap-1.5">
            <a
              href={YTC_OASIS_REVIEW.authorLinkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-link no-underline hover:underline"
            >
              {author}
            </a>
            <LinkedInLink />
            <span>,</span>
            <a
              href={reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-link no-underline hover:underline"
            >
              {publication}
            </a>
          </span>
          <span className="block mt-1 text-xs text-oasis-green-800/65">
            {YTC_OASIS_REVIEW.scoreSystemName}: {YTC_OASIS_REVIEW.score}/{YTC_OASIS_REVIEW.scoreMax},{' '}
            {YTC_OASIS_REVIEW.scoreLabel}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <ReviewerPhoto size={size} className="shrink-0 ring-2 ring-oasis-green-800/10" />
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <a
            href={YTC_OASIS_REVIEW.authorLinkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-oasis-green-800 no-underline hover:underline"
          >
            {author}
          </a>
          <LinkedInLink />
        </div>
        <p className="mt-0.5 text-sm text-oasis-green-800/80">{authorRole}</p>
        <p className="text-sm text-oasis-green-800/70">
          {publication} · Reviewed {reviewedAt}
        </p>
      </div>
    </div>
  );
}
