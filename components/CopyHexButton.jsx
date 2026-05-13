'use client';

import { useCallback, useState } from 'react';

export default function CopyHexButton({ hex, label = 'Copy hex' }) {
  const [copied, setCopied] = useState(false);

  const onCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, [hex]);

  return (
    <button
      type="button"
      onClick={onCopy}
      className="mt-2 inline-flex items-center rounded-md border border-oasis-green-200 bg-white px-2 py-1 text-xs font-medium text-oasis-green-800 shadow-sm transition hover:border-oasis-green-400 hover:bg-oasis-green-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oasis-green-600"
    >
      {copied ? 'Copied' : label}
    </button>
  );
}
