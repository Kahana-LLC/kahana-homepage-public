import React from 'react';
import { motion } from 'framer-motion';
import { subtleTransition, usePrefersReducedMotion } from '../../solutions/visuals/motion';

const BROWSER_ROWS = [
  { id: 'c1', label: 'Chrome: kahana.io', icon: 'chrome', selected: true },
  { id: 'c2', label: 'Chrome: Kahana', icon: 'chrome' },
  { id: 'c3', label: 'Chrome: Adam', icon: 'chrome' },
  { id: 'b1', label: 'Brave: Personal', icon: 'brave' },
  { id: 's1', label: 'Safari', icon: 'safari' },
  { id: 'e1', label: 'Microsoft Edge: Profile 1', icon: 'edge' },
  { id: 'ch1', label: 'Chromium: Work', icon: 'chromium' },
];

function BrowserGlyph({ variant }) {
  const common = 'h-5 w-5 shrink-0 rounded-md border border-black/8';
  switch (variant) {
    case 'chrome':
      return (
        <span
          className={`${common} bg-gradient-to-br from-[#4285F4] via-[#FBBC05] to-[#EA4335]`}
          aria-hidden
        />
      );
    case 'brave':
      return <span className={`${common} bg-[#FB542B]`} aria-hidden />;
    case 'safari':
      return (
        <span
          className={`${common} bg-gradient-to-b from-[#19d7ff] to-[#006cff]`}
          aria-hidden
        />
      );
    case 'edge':
      return <span className={`${common} bg-[#0078D4]`} aria-hidden />;
    case 'chromium':
      return <span className={`${common} bg-[#5c6bc0]`} aria-hidden />;
    default:
      return <span className={`${common} bg-[#ccc]`} aria-hidden />;
  }
}

/**
 * Illustrative settings + import picker UI (inspired by Oasis import flow).
 */
export function OasisMockImportBrowser() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div
      className="relative min-h-[300px] overflow-hidden rounded-2xl border border-oasis-green-800/12 bg-[#e8eae4] shadow-md sm:min-h-[340px]"
      style={{ fontFamily: 'system-ui, sans-serif' }}
      role="img"
      aria-label="Illustration of Oasis settings showing Import browser data with a source picker listing Chrome profiles, Brave, Safari, Edge, and file import options"
    >
      <div className="p-4 sm:p-5">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-oasis-green-800/55">General</p>
        <h3 className="mt-1 text-sm font-bold text-[#2f3a20]">Import browser data</h3>
        <p className="mt-1 max-w-md text-[11px] leading-relaxed text-oasis-green-800/85">
          Bring your bookmarks, passwords, history, extensions, and autofill data from another browser.
        </p>
        <div className="mt-3 inline-block rounded-lg border border-oasis-green-800/12 bg-[#dfe2db] px-4 py-2 text-center text-[11px] font-semibold text-oasis-green-800">
          Import data
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center bg-black/[0.04] px-3 py-6 sm:px-6">
        <motion.div
          className="w-full max-w-[300px] rounded-xl border border-oasis-green-800/10 bg-white p-4 shadow-xl"
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={subtleTransition}
        >
          <h4 className="mb-3 border-b border-black/5 pb-2 text-[13px] font-semibold text-[#2f3a20]">
            Import browser data
          </h4>
          <ul className="max-h-[200px] space-y-0.5 overflow-y-auto pr-1 text-[11px] leading-tight">
            {BROWSER_ROWS.map((row) => (
              <li
                key={row.id}
                className={`flex items-center gap-2 rounded-lg px-2 py-1.5 ${
                  row.selected ? 'bg-oasis-green-800/10' : 'hover:bg-black/[0.03]'
                }`}
              >
                <BrowserGlyph variant={row.icon} />
                <span className={`truncate ${row.selected ? 'font-semibold text-[#2f3a20]' : 'text-oasis-green-800'}`}>
                  {row.label}
                </span>
              </li>
            ))}
            <li className="mt-2 border-t border-black/5 pt-2 text-oasis-green-800">
              <span className="block rounded-lg px-2 py-1.5 pl-7 hover:bg-black/[0.03]">Passwords from CSV file</span>
              <span className="block rounded-lg px-2 py-1.5 pl-7 hover:bg-black/[0.03]">Bookmarks from HTML file</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
