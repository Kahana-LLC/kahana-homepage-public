import { useState } from 'react';

const SHELF = [
  { id: 'book', label: 'Book', detail: 'A listed hub you can reopen' },
  { id: 'video', label: 'Creator video', detail: 'Uploaded by a person, not a studio catalog' },
  { id: 'files', label: 'Files', detail: 'Notes, PDFs, and worksheets in the same hub' },
];

/**
 * Evening choice: keep the streaming app, or open the Library.
 * Kahana does not pretend to carry the shows.
 */
export default function EveningLibraryPick({ platformName }) {
  const [choice, setChoice] = useState('library');
  const [item, setItem] = useState('book');
  const selected = SHELF.find((entry) => entry.id === item);

  return (
    <div className="overflow-hidden rounded-[20px] border border-[#E4D9C4] bg-white">
      <div className="border-b border-[#E4D9C4] px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#8A6622]">Tonight</p>
        <p className="mt-1 text-sm text-[#5C4520]">You can keep both</p>
      </div>
      <div className="grid grid-cols-2 gap-2 p-4">
        <button
          type="button"
          onClick={() => setChoice('stream')}
          className={`rounded-xl px-3 py-3 text-left ${
            choice === 'stream' ? 'bg-[#3B2F1A] text-[#F7F3EA]' : 'bg-[#F7F3EA] text-[#3B2F1A]'
          }`}
        >
          <span className="block text-sm font-semibold">{platformName}</span>
          <span className={`mt-1 block text-xs ${choice === 'stream' ? 'text-[#F7F3EA]/80' : 'text-[#666666]'}`}>
            Shows you already pay for
          </span>
        </button>
        <button
          type="button"
          onClick={() => setChoice('library')}
          className={`rounded-xl px-3 py-3 text-left ${
            choice === 'library' ? 'bg-[#3B2F1A] text-[#F7F3EA]' : 'bg-[#F7F3EA] text-[#3B2F1A]'
          }`}
        >
          <span className="block text-sm font-semibold">Kahana Library</span>
          <span className={`mt-1 block text-xs ${choice === 'library' ? 'text-[#F7F3EA]/80' : 'text-[#666666]'}`}>
            Free, no ads
          </span>
        </button>
      </div>
      {choice === 'stream' ? (
        <p className="border-t border-[#E4D9C4] px-4 py-4 text-sm text-[#5C4520]">
          Kahana does not carry {platformName} shows. Keep the subscription for those. The Library is the other way to spend the evening.
        </p>
      ) : (
        <div className="border-t border-[#E4D9C4] p-4">
          <div className="flex flex-wrap gap-2">
            {SHELF.map((entry) => (
              <button
                key={entry.id}
                type="button"
                onClick={() => setItem(entry.id)}
                className={`rounded-full px-3 py-1 text-sm font-semibold ${
                  item === entry.id ? 'bg-[#EDE6D2] text-[#3B2F1A]' : 'bg-[#F7F3EA] text-[#5C4520]'
                }`}
              >
                {entry.label}
              </button>
            ))}
          </div>
          <p className="mt-3 text-sm font-semibold text-[#3B2F1A]">{selected.detail}</p>
          <p className="mt-1 text-sm text-[#666666]">No streaming fee. No ads. Some hubs are priced by their creators.</p>
        </div>
      )}
    </div>
  );
}
