import React, { useEffect, useRef, useState } from 'react';
import {
  FEATURES,
  HELP_SECTIONS,
  PERSONAS,
  USE_CASES,
  parseTaxonomyTag,
  personaChipLabel,
} from '../../data/marketingTaxonomy';

function Chip({ active, onClick, children }) {
  return (
    <button
      type="button"
      role="option"
      aria-selected={active}
      onClick={onClick}
      className={`help-chip${active ? ' is-active' : ''}`}
    >
      {children}
    </button>
  );
}

function ChipGroup({ label, children }) {
  return (
    <div className="help-chip-group">
      <p className="help-chip-group-label">{label}</p>
      <div className="help-chip-grid">{children}</div>
    </div>
  );
}

export default function HelpFilterBar({
  section = 'all',
  onSectionChange,
  tag = '',
  onTagChange,
  searchQuery = '',
  onSearchChange,
}) {
  const [openMenu, setOpenMenu] = useState(null);
  const wrapRef = useRef(null);
  const parsedTag = parseTaxonomyTag(tag);

  const sectionLabel =
    section === 'all'
      ? 'All sections'
      : HELP_SECTIONS.find((item) => item.id === section)?.label || 'All sections';
  const categoryLabel = parsedTag?.label || 'All categories';

  useEffect(() => {
    if (!openMenu) return undefined;
    const onPointer = (event) => {
      if (wrapRef.current && !wrapRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    };
    const onKey = (event) => {
      if (event.key === 'Escape') setOpenMenu(null);
    };
    document.addEventListener('mousedown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [openMenu]);

  const toggleMenu = (id) => {
    setOpenMenu((current) => (current === id ? null : id));
  };

  const selectSection = (next) => {
    onSectionChange?.(next);
    setOpenMenu(null);
  };

  const selectTag = (next) => {
    onTagChange?.(next === tag ? '' : next);
    setOpenMenu(null);
  };

  return (
    <div className="help-filter-wrap" ref={wrapRef}>
      <div className="help-filter-bar">
        <span className="help-filter-kicker">Filter by</span>
        <button
          type="button"
          className={`help-filter-trigger${openMenu === 'section' ? ' is-open' : ''}`}
          aria-expanded={openMenu === 'section'}
          aria-haspopup="listbox"
          onClick={() => toggleMenu('section')}
        >
          <span className="help-filter-trigger-label">{sectionLabel}</span>
          <svg className="help-filter-chevron" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          type="button"
          className={`help-filter-trigger${openMenu === 'category' ? ' is-open' : ''}`}
          aria-expanded={openMenu === 'category'}
          aria-haspopup="listbox"
          onClick={() => toggleMenu('category')}
        >
          <span className="help-filter-trigger-label">{categoryLabel}</span>
          <svg className="help-filter-chevron" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <label className="help-filter-search">
          <span className="sr-only">Search help</span>
          <svg className="help-filter-search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="search"
            placeholder="Search help"
            value={searchQuery}
            onChange={(event) => onSearchChange?.(event.target.value)}
            onFocus={() => setOpenMenu(null)}
          />
        </label>
      </div>

      {openMenu === 'section' ? (
        <div className="help-filter-panel" role="listbox" aria-label="Help sections">
          <div className="help-chip-grid">
            <Chip active={section === 'all'} onClick={() => selectSection('all')}>
              All
            </Chip>
            {HELP_SECTIONS.map((item) => (
              <Chip
                key={item.id}
                active={section === item.id}
                onClick={() => selectSection(item.id)}
              >
                {item.label}
              </Chip>
            ))}
          </div>
        </div>
      ) : null}

      {openMenu === 'category' ? (
        <div className="help-filter-panel" role="listbox" aria-label="Help categories">
          <ChipGroup label="Who it is for">
            <Chip active={!tag} onClick={() => selectTag('')}>
              All
            </Chip>
            {PERSONAS.map((persona) => {
              const value = `persona:${persona.slug}`;
              return (
                <Chip
                  key={persona.slug}
                  active={tag === value}
                  onClick={() => selectTag(value)}
                >
                  {personaChipLabel(persona)}
                </Chip>
              );
            })}
          </ChipGroup>
          <ChipGroup label="Use cases">
            {USE_CASES.map((useCase) => {
              const value = `use-case:${useCase.slug}`;
              return (
                <Chip
                  key={useCase.slug}
                  active={tag === value}
                  onClick={() => selectTag(value)}
                >
                  {useCase.title}
                </Chip>
              );
            })}
          </ChipGroup>
          <ChipGroup label="Features">
            {FEATURES.map((feature) => {
              const value = `feature:${feature.slug}`;
              return (
                <Chip
                  key={feature.slug}
                  active={tag === value}
                  onClick={() => selectTag(value)}
                >
                  {feature.title}
                </Chip>
              );
            })}
          </ChipGroup>
        </div>
      ) : null}
    </div>
  );
}
