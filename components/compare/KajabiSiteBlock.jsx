import { useState } from 'react';

const PAGES = [
  { id: 'home', label: 'Home' },
  { id: 'offers', label: 'Offers' },
  { id: 'hub', label: 'Library hub' },
];

/** A Kajabi-style site menu where one page is the Kahana hub. */
export default function KajabiSiteBlock() {
  const [page, setPage] = useState('hub');

  return (
    <div className="overflow-hidden rounded-[20px] border border-[#E4D9C4] bg-white">
      <div className="flex items-center justify-between border-b border-[#E4D9C4] px-4 py-3">
        <p className="text-sm font-semibold text-[#3B2F1A]">Your Kajabi site</p>
        <p className="text-xs font-medium text-[#8A6622]">Menu</p>
      </div>
      <div className="flex gap-2 border-b border-[#E4D9C4] px-4 py-3">
        {PAGES.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setPage(item.id)}
            className={`rounded-full px-3 py-1 text-sm font-semibold ${
              page === item.id ? 'bg-[#3B2F1A] text-[#F7F3EA]' : 'bg-[#F7F3EA] text-[#3B2F1A]'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="p-4">
        {page === 'hub' ? (
          <div className="rounded-xl border border-[#E4D9C4] bg-[#F7F3EA] p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#8A6622]">Linked page</p>
            <p className="mt-2 text-lg font-semibold text-[#3B2F1A]">Session notes and worksheets</p>
            <p className="mt-1 text-sm text-[#666666]">Opens the same hub that is listed on Kahana Library.</p>
          </div>
        ) : (
          <div className="rounded-xl border border-[#E4D9C4] p-4">
            <p className="text-sm text-[#5C4520]">
              {page === 'offers'
                ? 'Offers and checkout stay on Kajabi.'
                : 'The home page stays your Kajabi site.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
