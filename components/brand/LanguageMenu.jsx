import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { CONTENT_LANGUAGE_OPTIONS } from '../../lib/contentLanguage';
import { useMarketingI18n } from '../../contexts/MarketingI18n';

/**
 * Matches kahana-web ContentLanguageMenuButton:
 * compact bordered chip (icon + short code) + checklist dropdown.
 * Sets site language (marketing UI) + app / Explore preference (cookie + ?lang=).
 */
export default function LanguageMenu({
  className = '',
  align = 'end',
  openUpward = false,
}) {
  const { preference, setPreference, t } = useMarketingI18n();
  const [open, setOpen] = useState(false);

  const shortLabel = useMemo(() => {
    if (!preference || preference === 'auto') return null;
    return String(preference).toUpperCase();
  }, [preference]);

  const select = useCallback(
    (value) => {
      setPreference(value);
      setOpen(false);
    },
    [setPreference],
  );

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    const onPointer = (event) => {
      if (!event.target.closest?.('[data-language-menu]')) {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('pointerdown', onPointer);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('pointerdown', onPointer);
    };
  }, [open]);

  const options = useMemo(
    () =>
      CONTENT_LANGUAGE_OPTIONS.map((option) =>
        option.value === 'auto'
          ? { ...option, label: t('language.autoBrowser') }
          : option,
      ),
    [t],
  );

  return (
    <div
      data-language-menu
      data-testid="marketing-language-menu"
      className={`relative inline-flex ${className}`}
    >
      <button
        type="button"
        className="language-menu-trigger"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={
          !preference || preference === 'auto'
            ? t('language.triggerAuto')
            : t('language.triggerNamed', { code: shortLabel })
        }
        title={t('language.titleHint')}
        onClick={() => setOpen((prev) => !prev)}
      >
        <LanguageGlyph className="h-[15px] w-[15px] shrink-0" />
        {shortLabel ? <span>{shortLabel}</span> : null}
      </button>

      {open ? (
        <div
          role="menu"
          aria-label={t('language.menuTitle')}
          className={`absolute z-[80] w-[220px] overflow-hidden rounded-lg border border-[#E0E8D4] bg-white py-1 shadow-lg ${
            align === 'start' ? 'left-0' : 'right-0'
          } ${openUpward ? 'bottom-full mb-2' : 'top-full mt-2'}`}
        >
          <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-[#8A9378]">
            {t('language.appLanguage')}
          </div>
          <ul className="m-0 max-h-72 list-none overflow-y-auto p-0">
            {options.map((option) => {
              const selected = preference === option.value;
              return (
                <li key={option.value} role="none">
                  <button
                    type="button"
                    role="menuitemradio"
                    aria-checked={selected}
                    data-selected={selected ? 'true' : 'false'}
                    data-testid={`content-language-option-${option.value}`}
                    className="language-menu-option"
                    onClick={() => select(option.value)}
                  >
                    <span className="inline-flex w-3.5 shrink-0 justify-center text-[#617500]" aria-hidden>
                      {selected ? <CheckGlyph /> : null}
                    </span>
                    <span>{option.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

function LanguageGlyph({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M4 5h7" />
      <path d="M9 3v2c0 4.418-2.239 8-5 8" />
      <path d="M5 9c0 2.144 2.952 3.908 6.7 4" />
      <path d="M12 20l4-9 4 9" />
      <path d="M19.1 18h-6.2" />
    </svg>
  );
}

function CheckGlyph() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12l5 5L20 7"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
