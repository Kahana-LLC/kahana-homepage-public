import Link from 'next/link';
import { LIBRARY_ESSAYS } from '../../data/libraryEssays';

export default function EssaySeriesNav({ current }) {
  return (
    <nav aria-label="Aura Library essays" className="mt-8 flex flex-wrap justify-center gap-2">
      {LIBRARY_ESSAYS.map((essay) => {
        const active = essay.href === current;
        return (
          <Link
            key={essay.href}
            href={essay.href}
            aria-current={active ? 'page' : undefined}
            className={`rounded-full px-3 py-1.5 text-sm no-underline ${
              active
                ? 'bg-[#3B2F1A] text-[#F7F3EA]'
                : 'bg-white text-[#5C4520] hover:bg-[#D9DACB]'
            }`}
          >
            {essay.label}
          </Link>
        );
      })}
    </nav>
  );
}
