import { useState } from 'react';

const LINKS = [
  { id: 'shop', label: 'Shop the drop', hint: 'Stan checkout' },
  { id: 'hub', label: 'Full library on Kahana', hint: 'Hub link' },
  { id: 'call', label: 'Book a call', hint: 'Calendar' },
];

/** Bio-store link stack, with the Kahana hub as one of the links. */
export default function StanStoreLinkRow() {
  const [active, setActive] = useState('hub');

  return (
    <div className="overflow-hidden rounded-[20px] border border-[#E4D9C4] bg-white">
      <div className="border-b border-[#E4D9C4] px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#8A6622]">Stan Store</p>
        <p className="mt-1 text-sm text-[#5C4520]">Links in the bio</p>
      </div>
      <div className="space-y-2 p-4">
        {LINKS.map((link) => {
          const on = active === link.id;
          return (
            <button
              key={link.id}
              type="button"
              onClick={() => setActive(link.id)}
              className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left ${
                on ? 'bg-[#3B2F1A] text-[#F7F3EA]' : 'bg-[#F7F3EA] text-[#3B2F1A]'
              }`}
            >
              <span className="font-semibold">{link.label}</span>
              <span className={`text-xs ${on ? 'text-[#F7F3EA]/80' : 'text-[#8A6622]'}`}>{link.hint}</span>
            </button>
          );
        })}
      </div>
      <p className="border-t border-[#E4D9C4] px-4 py-3 text-sm text-[#5C4520]">
        {active === 'hub'
          ? 'This row opens the Kahana hub. The shop link can stay a Stan checkout.'
          : 'Stan keeps the checkout and the calendar. The library row is the hub people can also find in Kahana search.'}
      </p>
    </div>
  );
}
