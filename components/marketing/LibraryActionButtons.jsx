import { FolderPlusIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const BASE =
  'inline-flex items-center justify-center gap-2 no-underline';

/**
 * Canonical Explore / Share CTAs with icons for marketing pages.
 */
export function ExploreLibraryButton({
  href,
  onClick,
  className = 'btn-primary',
  children = 'Explore the Library',
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${BASE} ${className}`}
      onClick={onClick}
    >
      <MagnifyingGlassIcon className="h-5 w-5 shrink-0" aria-hidden />
      {children}
    </a>
  );
}

export function ShareUniqueKnowledgeButton({
  href,
  onClick,
  className = 'btn-secondary',
  children = 'Share your unique knowledge',
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${BASE} ${className}`}
      onClick={onClick}
    >
      <FolderPlusIcon className="h-5 w-5 shrink-0" aria-hidden />
      {children}
    </a>
  );
}
