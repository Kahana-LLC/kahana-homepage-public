// Browser Comparison Table new version 

import React, { useState, useMemo, useRef, useEffect } from 'react';
// Assuming 'browserData' and 'filterOptions' remain the same
import { browserData, filterOptions } from '../data/browserComparisonData';

// Helper: Responsive hook
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 639px)');
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return isMobile;
}

// Map for feature display names and their corresponding keys in browserData
const FEATURE_MAP = {
    'Type': 'type',
    'Who Uses It': 'whoUsesIt',
    'Privacy': 'privacy',
    'Security': 'security',
    'AI Features': 'aiFeatures',
    'Platforms': 'platforms',
    'Unique Strength': 'uniqueStrength',
    'Summary/Verdict': 'summary',
};
const ALL_FEATURES = Object.keys(FEATURE_MAP);

const BrowserComparisonTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
    // State for filtering the *entire* dataset (to narrow down selection)
  const [filters, setFilters] = useState({
    name: [],
    type: [],
    whoUsesIt: [],
    platforms: [],
    aiFeatures: []
  });
    // New State: Browsers explicitly selected for the side-by-side comparison view
    // Start empty so nothing is forced into view until the user pins
    const [selectedBrowsers, setSelectedBrowsers] = useState([]);

  const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [hoveredColumn, setHoveredColumn] = useState(null); // Changed from Row to Column
  const filterRef = useRef(null);

  const isMobile = useIsMobile();

    // Map display names to data keys so pinning by label always resolves to the correct record
    const NAME_TO_KEY = useMemo(() => {
      const map = {};
      Object.entries(browserData).forEach(([key, b]) => {
        if (b && typeof b.name === 'string') map[b.name] = key;
      });
      return map;
    }, []);


  // Close filter dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

    // Apply filters to data to get a *filtered list of all browsers* (potential selection pool)
  const filteredData = useMemo(() => {
    return Object.values(browserData).filter(browser => {
      // Enhanced search: match against all fields
      if (searchTerm) {
        const term = searchTerm.toLowerCase();
        const searchableFields = [
                    browser.name, browser.type, browser.whoUsesIt, browser.privacy,
                    browser.security, browser.aiFeatures, browser.platforms,
                    browser.uniqueStrength, browser.summary
        ];
        const matches = searchableFields.some(field => field && typeof field === 'string' && field.toLowerCase().includes(term));
        if (!matches) return false;
      }

            // Standard multi-select filters
            for (const key in filters) {
                if ((filters[key] ?? []).length > 0 && !(filters[key] ?? []).includes(browser[key])) {
        return false;
      }
      }
      
      return true;
    });
  }, [filters, searchTerm]);

    // Data for the actual Transposed Comparison Table (only selected browsers)
    const comparisonData = useMemo(() => {
        return selectedBrowsers.map(browserName => browserData[browserName]).filter(Boolean);
    }, [selectedBrowsers]);


  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: (prev[filterType] || []).includes(value)
        ? (prev[filterType] || []).filter(item => item !== value)
        : [...(prev[filterType] || []), value]
    }));
  };

  const clearAllFilters = () => {
    setFilters({
            name: [], type: [], whoUsesIt: [], platforms: [], aiFeatures: []
    });
    setSearchTerm('');
  };

    const toggleSelectedBrowser = (idOrName) => {
        const key = browserData[idOrName] ? idOrName : (NAME_TO_KEY[idOrName] || idOrName);
        setSelectedBrowsers(prev =>
            prev.includes(key)
                ? prev.filter(name => name !== key)
                : [...prev, key]
        );
  };

  const removeFilter = (filterType, value) => {
    if (filterType === 'search') {
      setSearchTerm('');
    } else {
      setFilters(prev => ({
        ...prev,
        [filterType]: (prev[filterType] || []).filter(item => item !== value)
      }));
    }
  };

  const exportToCSV = () => {
        // Export the comparison data (features as rows, browsers as columns)
        const headers = ['Feature', ...comparisonData.map(b => b.name)];
        const csvRows = ALL_FEATURES.map(featureName => {
            const rowData = [
                featureName,
                ...comparisonData.map(browser => {
                    const value = browser[FEATURE_MAP[featureName]];
                    // Handle commas/quotes in data for proper CSV formatting
                    return `"${(value || '').toString().replace(/"/g, '""')}"`;
                })
            ];
            return rowData.join(',');
        });

    const csvContent = [
      headers.join(','),
            ...csvRows
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
        a.download = 'browser-comparison-selection.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };


  const getActiveFilterCount = () => {
    return Object.values(filters).reduce((total, filterArray) => total + filterArray.length, 0);
  };

  const getActiveFilters = () => {
    const activeFilters = [];
    Object.entries(filters).forEach(([type, values]) => {
      values.forEach(value => {
        activeFilters.push({ type, value });
      });
    });
    return activeFilters;
  };

  const renderFilterSection = (title, filterType, options) => (
    <div className="mb-4">
      <h3 className="text-sm font-bold text-[#3B2F1A] mb-2">{title}</h3>
            <div className="space-y-2 max-h-32 overflow-y-auto p-2 border rounded-lg bg-[#F7F3EA]/50" style={{borderColor:'rgba(74, 98, 0, 0.1)'}}>
        {options.map(option => (
                    <label key={option} className="flex items-center space-x-2 text-sm cursor-pointer hover:bg-white/50 p-1 rounded transition-colors">
            <input
              type="checkbox"
              checked={(filters[filterType] || []).includes(option)}
              onChange={() => handleFilterChange(filterType, option)}
                            className="rounded border-[#8A6622] text-[#8A6622] focus:ring-[#8A6622]"
            />
            <span className="text-oasis-green-800">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );

    // New: Renders a section for selecting browsers to pin/compare
    const renderBrowserSelection = () => (
        <div className="mb-4">
            <h3 className="text-sm font-bold text-[#3B2F1A] mb-3">Pin Browsers for Comparison ({comparisonData.length} selected)</h3>
            <div className="mb-3">
                 <input
                    type="text"
                    placeholder="Search browsers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg text-sm border focus:outline-none focus:ring-2 transition-all"
                    style={{
                      borderColor: 'rgba(74, 98, 0, 0.2)',
                      '--tw-ring-color': 'rgba(74, 98, 0, 0.3)',
                      color: '#3B2F1A',
                    }}
                />
    </div>
            <div className="space-y-1 max-h-48 overflow-y-auto p-2 border rounded-lg bg-[#F7F3EA]/50" style={{borderColor:'rgba(74, 98, 0, 0.1)'}}>
                {filteredData.length > 0 ? (
                    filteredData.map(browser => {
                        const key = NAME_TO_KEY[browser.name] || browser.name;
                        const isChecked = selectedBrowsers.includes(key);
                        return (
                            <label key={browser.name} className={`flex items-center space-x-2 text-sm cursor-pointer p-2 rounded transition-all ${isChecked ? 'border' : 'hover:bg-white/50'}`} style={isChecked ? {backgroundColor:'rgba(74, 98, 0, 0.1)', borderColor:'rgba(74, 98, 0, 0.2)'} : {}}>
                                <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={() => toggleSelectedBrowser(key)}
                                    className="rounded border-[#8A6622] text-[#8A6622] focus:ring-[#8A6622]"
                                />
                                <span className="font-semibold" style={{color: isChecked ? '#3B2F1A' : '#5C4520'}}>{browser.name}</span>
                            </label>
                        );
                    })
                ) : (
                    <div className="text-center text-oasis-green-800 py-4 text-xs">No browsers match the current filters or search.</div>
                )}
    </div>
            <div className="text-xs text-oasis-green-800 mt-2">Filter the list using the sections below.</div>
    </div>
  );


    // Card view for mobile (simplified to show only selected browsers)
  const renderMobileCards = () => (
        <div className="space-y-4 pt-4 px-6 pb-6">
            {comparisonData.length > 0 ? (
                comparisonData.map((browser) => (
                    <div key={browser.name} className="bg-white rounded-[18px] shadow-[0_25px_70px_rgba(32,47,0,0.14)] border p-5" style={{borderColor:'rgba(74, 98, 0, 0.1)'}}>
                        <div className="text-lg font-bold mb-3 flex items-center justify-between" style={{color:'#3B2F1A'}}>
                            <span>{browser.name}</span>
                            <button
                                onClick={() => toggleSelectedBrowser(browser.name)}
                                className="text-[#8A6622] hover:text-[#6F5428] p-1"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
          </div>
                        {ALL_FEATURES.map(featureTitle => (
                            <div key={featureTitle} className="mb-3 border-b last:border-b-0 pb-3 last:pb-0" style={{borderColor:'rgba(74, 98, 0, 0.1)'}}>
                                <div className="text-xs font-bold text-[#3B2F1A] mb-1.5 uppercase tracking-wide">{featureTitle}</div>
                                <div className="text-sm text-oasis-green-800 leading-relaxed">{browser[FEATURE_MAP[featureTitle]]}</div>
        </div>
      ))}
                    </div>
                ))
            ) : (
        <div className="text-center py-12 px-4">
                    <p className="text-oasis-green-800 text-base mb-2">Select browsers in the <strong className="text-[#3B2F1A]">Controls</strong> dropdown to start comparing.</p>
        </div>
      )}
    </div>
  );

  return (
    <div className="rounded-[26px] shadow-[0_25px_70px_rgba(32,47,0,0.14)] overflow-hidden bg-white/90 border border-white/80 backdrop-blur-lg">
            {/* Header with Actions - STICKY CONTROL BAR */}
            <div className="px-6 py-5 sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b" style={{borderColor:'rgba(74, 98, 0, 0.1)'}}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
          <h2 className="text-2xl font-bold" style={{color:'#3B2F1A'}}>Browser Comparison</h2>
          <div className="flex items-center flex-wrap gap-3">
            <button
              onClick={exportToCSV}
              className="btn-secondary btn-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={comparisonData.length === 0}
            >
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Export CSV ({comparisonData.length})
            </button>
            <div className="relative" ref={filterRef}>
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                type="button"
                className={`btn-sm transition-all focus:outline-none ${
                  getActiveFilterCount() > 0 || searchTerm || selectedBrowsers.length > 0
                    ? 'btn-primary'
                    : 'btn-secondary'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
                </svg>
                                <span>Controls</span>
                                {selectedBrowsers.length > 0 && (
                                  <span className="text-xs rounded-full px-2.5 py-0.5 font-bold bg-white/20">
                                    {selectedBrowsers.length} Pinned
                  </span>
                                )}
                <svg className={`w-4 h-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

                            {/* Filter/Control Dropdown (with Browser Selection) */}
              {isFilterOpen && (
                                <div className="absolute right-0 mt-2 w-80 rounded-[18px] shadow-[0_25px_70px_rgba(32,47,0,0.18)] z-50 max-h-[80vh] overflow-y-auto bg-white border" style={{borderColor:'rgba(74, 98, 0, 0.1)'}}>
                  <div className="p-5">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-5 gap-2">
                                            <h3 className="text-lg font-bold" style={{color:'#3B2F1A'}}>Comparison Controls</h3>
                      <button
                                                onClick={() => { clearAllFilters(); setSelectedBrowsers([]); setIsFilterOpen(false); }}
                                                className="text-sm font-semibold text-[#8A6622] hover:text-[#6F5428] transition-colors"
                      >
                                                Clear All
                      </button>
                    </div>
                    
                                        {renderBrowserSelection()}

                                        <div className="pt-5 mt-5 border-t" style={{borderColor:'rgba(74, 98, 0, 0.1)'}}>
                                            <h3 className="text-sm font-bold mb-3" style={{color:'#3B2F1A'}}>Browser Filters (Narrows Selection)</h3>
                    {renderFilterSection('Type', 'type', filterOptions.type)}
                    {renderFilterSection('Who Uses It', 'whoUsesIt', filterOptions.whoUsesIt.slice(0, 6))}
                    {renderFilterSection('Platforms', 'platforms', filterOptions.platforms)}
                    {renderFilterSection('AI Features', 'aiFeatures', filterOptions.aiFeatures.slice(0, 6))}
                                        </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Table or Card View */}
      {isMobile ? (
        renderMobileCards()
      ) : (
                // Transposed Table Container: Features (Rows) vs. Selected Browsers (Columns)
                 <div className="relative overflow-x-auto overflow-y-auto max-h-96 border-t" style={{borderColor:'rgba(74, 98, 0, 0.1)'}}>
                    {comparisonData.length === 0 ? (
                        <div className="text-center py-16">
                            <p className="text-oasis-green-800 text-base mb-2">Use the <strong className="text-[#3B2F1A]">Controls</strong> button to pin browsers for side-by-side comparison.</p>
                        </div>
                    ) : (
                         <table className="min-w-full" style={{borderCollapse:'separate', borderSpacing:0}}>
                            {/* Browser Names as Column Headers */}
                            <thead className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm">
                                <tr>
                                    <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider sticky left-0 z-30 min-w-[200px] bg-white/95 backdrop-blur-sm" style={{color:'#5C4520', borderRight:'1px solid rgba(74, 98, 0, 0.1)', borderBottom:'2px solid rgba(74, 98, 0, 0.2)'}}>
                                        Feature
                                    </th>
                                    {comparisonData.map((browser) => (
                                        <th
                                            key={browser.name}
                                            className={`px-5 py-4 text-center text-sm font-bold uppercase tracking-wider min-w-[180px] transition-all ${
                                                hoveredColumn === browser.name ? 'bg-[#F7F3EA]' : 'bg-white'
                                            }`}
                                            style={{borderRight:'1px solid rgba(74, 98, 0, 0.1)', color:'#3B2F1A', borderBottom:'2px solid rgba(74, 98, 0, 0.2)'}}
                                            onMouseEnter={() => setHoveredColumn(browser.name)}
                                            onMouseLeave={() => setHoveredColumn(null)}
                                        >
                                            <div className="flex justify-center items-center gap-2">
                                                <span>{browser.name}</span>
                                                <button
                                                    onClick={() => toggleSelectedBrowser(browser.name)}
                                                    className="text-[#8A6622] hover:text-[#6F5428] p-1 rounded transition-colors"
                                                    title={`Remove ${browser.name}`}
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </th>
                                    ))}
              </tr>
            </thead>
                            {/* Features as Rows */}
                            <tbody>
                                {ALL_FEATURES.map((featureTitle, index) => (
                                    <tr key={featureTitle} className={`transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-[#F7F3EA]/30'} ${hoveredColumn ? 'hover:bg-[#F7F3EA]/50' : ''}`}>
                                        <td className="px-5 py-4 whitespace-normal break-words align-top font-bold sticky left-0 z-20 min-w-[200px] bg-white" style={{color:'#3B2F1A', borderRight:'1px solid rgba(74, 98, 0, 0.1)'}}>
                                            {featureTitle}
                                        </td>
                                        {comparisonData.map((browser) => (
                                            <td
                                                key={`${browser.name}-${featureTitle}`}
                                                className={`px-5 py-4 whitespace-normal break-words align-top min-w-[180px] transition-colors text-sm ${
                                                    hoveredColumn === browser.name ? 'bg-[#F7F3EA]' : ''
                                                }`}
                                                style={{borderRight:'1px solid rgba(74, 98, 0, 0.1)', color:'#5C4520'}}
                                                onMouseEnter={() => setHoveredColumn(browser.name)}
                                                onMouseLeave={() => setHoveredColumn(null)}
                                            >
                                                {browser[FEATURE_MAP[featureTitle]]}
                                            </td>
                                        ))}
                </tr>
              ))}
            </tbody>
          </table>
                    )}
          {/* Row Count Indicator */}
                    {comparisonData.length > 0 && (
            <div className="px-6 py-3 bg-[#F7F3EA]/50 text-xs text-oasis-green-800 border-t" style={{borderColor:'rgba(74, 98, 0, 0.1)'}}>
                            Comparing <strong className="text-[#3B2F1A]">{comparisonData.length}</strong> browser{comparisonData.length !== 1 ? 's' : ''}.
                            <span className="ml-2">↔️ Scroll horizontally to see all selected browsers.</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BrowserComparisonTable;




// import { browserData, filterOptions } from '../data/browserComparisonData';

// // Helper: Responsive hook
// function useIsMobile() {
//   const [isMobile, setIsMobile] = useState(false);
//   useEffect(() => {
//     const mq = window.matchMedia('(max-width: 639px)');
//     setIsMobile(mq.matches);
//     const handler = (e) => setIsMobile(e.matches);
//     mq.addEventListener('change', handler);
//     return () => mq.removeEventListener('change', handler);
//   }, []);
//   return isMobile;
// }

// const BrowserComparisonTable = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filters, setFilters] = useState({
//     name: [],
//     type: [],
//     whoUsesIt: [],
//     platforms: [],
//     aiFeatures: []
//   });


//   const [isFilterOpen, setIsFilterOpen] = useState(false);
//   const [hoveredRow, setHoveredRow] = useState(null);
//   const filterRef = useRef(null);

//   const isMobile = useIsMobile();

//   // Filter presets
//   const filterPresets = {
//     'enterprise': {
//       name: 'Enterprise Only',
//       filters: { type: ['Enterprise'] }
//     },
//     'consumer': {
//       name: 'Consumer Browsers',
//       filters: { type: ['Consumer'] }
//     },
//     'ai-powered': {
//       name: 'AI-Powered',
//       filters: { aiFeatures: ['Built into the core', 'Google AI (search, autofill, smart suggestions)', 'Microsoft Copilot, Bing AI', 'Aria AI assistant'] }
//     },
//     'privacy-focused': {
//       name: 'Privacy-Focused',
//       filters: { whoUsesIt: ['Privacy-conscious users, open-source advocates', 'Privacy-first, ad-block fans'] }
//     }
//   };

//   // Close filter dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (filterRef.current && !filterRef.current.contains(event.target)) {
//         setIsFilterOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   // Apply filters to data
//   const filteredData = useMemo(() => {
//     return Object.values(browserData).filter(browser => {

//       // Enhanced search: match against all fields
//       if (searchTerm) {
//         const term = searchTerm.toLowerCase();
//         const searchableFields = [
//           browser.name,
//           browser.type,
//           browser.whoUsesIt,
//           browser.privacy,
//           browser.security,
//           browser.aiFeatures,
//           browser.platforms,
//           browser.uniqueStrength,
//           browser.summary
//         ];
//         const matches = searchableFields.some(field => field && typeof field === 'string' && field.toLowerCase().includes(term));
//         if (!matches) return false;
//       }

      
//       // Name filter
//       if ((filters.name ?? []).length > 0 && !(filters.name ?? []).includes(browser.name)) {
//         return false;
//       }
      
//       // Type filter
//       if ((filters.type ?? []).length > 0 && !(filters.type ?? []).includes(browser.type)) {
//         return false;
//       }
      
//       // Who Uses It filter
//       if ((filters.whoUsesIt ?? []).length > 0 && !(filters.whoUsesIt ?? []).includes(browser.whoUsesIt)) {
//         return false;
//       }
      
//       // Platforms filter
//       if ((filters.platforms ?? []).length > 0 && !(filters.platforms ?? []).includes(browser.platforms)) {
//         return false;
//       }
      
//       // AI Features filter
//       if ((filters.aiFeatures ?? []).length > 0 && !(filters.aiFeatures ?? []).includes(browser.aiFeatures)) {
//         return false;
//       }
      
//       return true;
//     });
//   }, [filters, searchTerm]);

//   const handleFilterChange = (filterType, value) => {
//     setFilters(prev => ({
//       ...prev,
//       [filterType]: (prev[filterType] || []).includes(value)
//         ? (prev[filterType] || []).filter(item => item !== value)
//         : [...(prev[filterType] || []), value]
//     }));
//   };

//   const clearAllFilters = () => {
//     setFilters({
//       name: [],
//       price: [],
//       productivity: [],
//       ai: [],
//       privacy: [],
//       security: []
//     });
//     setSearchTerm('');
//   };

//   const applyPreset = (presetKey) => {
//     const preset = filterPresets[presetKey];
//     setFilters(prev => ({
//       ...prev,
//       ...preset.filters
//     }));
//   };

//   const removeFilter = (filterType, value) => {
//     if (filterType === 'search') {
//       setSearchTerm('');
//     } else {
//       setFilters(prev => ({
//         ...prev,
//         [filterType]: (prev[filterType] || []).filter(item => item !== value)
//       }));
//     }
//   };

//   const exportToCSV = () => {
//     const headers = ['Browser', 'Type', 'Who Uses It', 'Privacy', 'Security', 'AI Features', 'Platforms', 'Unique Strength', 'Summary/Verdict'];
//     const csvContent = [
//       headers.join(','),
//       ...filteredData.map(browser => [
//         browser.name,
//         browser.type,
//         browser.whoUsesIt,
//         browser.privacy,
//         browser.security,
//         browser.aiFeatures,
//         browser.platforms,
//         browser.uniqueStrength,
//         browser.summary
//       ].join(','))
//     ].join('\n');

//     const blob = new Blob([csvContent], { type: 'text/csv' });
//     const url = window.URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'browser-comparison.csv';
//     a.click();
//     window.URL.revokeObjectURL(url);
//   };

//   const getActiveFilterCount = () => {
//     return Object.values(filters).reduce((total, filterArray) => total + filterArray.length, 0);
//   };

//   const getActiveFilters = () => {
//     const activeFilters = [];
//     Object.entries(filters).forEach(([type, values]) => {
//       values.forEach(value => {
//         activeFilters.push({ type, value });
//       });
//     });
//     return activeFilters;
//   };

//   const renderFilterSection = (title, filterType, options) => (
//     <div className="mb-4">
//       <h3 className="text-sm font-semibold text-gray-700 mb-2">{title}</h3>
//       <div className="space-y-1 max-h-32 overflow-y-auto">
//         {options.map(option => (
//           <label key={option} className="flex items-center space-x-2 text-sm">
//             <input
//               type="checkbox"
//               checked={(filters[filterType] || []).includes(option)}
//               onChange={() => handleFilterChange(filterType, option)}
//               className="rounded border-gray-300 text-oasis-green-500 focus:ring-oasis-green-500"
//             />
//             <span className="text-gray-600">{option}</span>
//           </label>
//         ))}
//       </div>
//     </div>
//   );

//   const renderProductivityCell = (productivity) => (
//     <div className="space-y-1">
//       {productivity.tabsGroups && <span className="inline-block bg-[#EDE6D2] text-oasis-green-800 text-xs px-2 py-1 rounded">Tab groups</span>}
//       {productivity.extensions && <span className="inline-block bg-[#E0D48C] text-oasis-green-800 text-xs px-2 py-1 rounded">Extensions</span>}
//       {productivity.ai && <span className="inline-block bg-[#EDE6D2] text-oasis-green-600 text-xs px-2 py-1 rounded">AI</span>}
//     </div>
//   );

//   const renderArrayCell = (items) => (
//     <div className="space-y-1">
//       {items.map(item => (
//         <span key={item} className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded mr-1 mb-1">
//           {item}
//         </span>
//       ))}
//     </div>
//   );

//   const renderPriceCell = (prices) => (
//     <div className="space-y-1">
//       {prices.map(price => (
//         <span key={price} className={`inline-block text-xs px-2 py-1 rounded mr-1 mb-1 font-semibold ${
//           price === 'Free' ? 'bg-[#EDE6D2] text-oasis-green-800' :
//           price === 'Enterprise' ? 'bg-oasis-green-600 text-white' :
//           price === 'Paid-only' ? 'bg-[#E0D48C] text-oasis-green-800' :
//           'bg-gray-100 text-gray-800'
//         }`}>
//           {price}
//         </span>
//       ))}
//     </div>
//   );

//   // Card view for mobile
//   const renderMobileCards = () => (
//     <div className="space-y-4">
//       {filteredData.map((browser) => (
//         <div key={browser.name} className="bg-white rounded-lg shadow border border-gray-200 p-4">
//           <div className="text-lg font-bold mb-2">{browser.name}</div>
//           <div className="mb-2">
//             <div className="text-xs font-semibold text-oasis-green-800 mb-1">Type</div>
//             <div>{browser.type}</div>
//           </div>
//           <div className="mb-2">
//             <div className="text-xs font-semibold text-oasis-green-800 mb-1">Who Uses It</div>
//             <div>{browser.whoUsesIt}</div>
//           </div>
//           <div className="mb-2">
//             <div className="text-xs font-semibold text-oasis-green-800 mb-1">Privacy</div>
//             <div>{browser.privacy}</div>
//           </div>
//           <div className="mb-2">
//             <div className="text-xs font-semibold text-oasis-green-800 mb-1">Security</div>
//             <div>{browser.security}</div>
//           </div>
//           <div className="mb-2">
//             <div className="text-xs font-semibold text-oasis-green-800 mb-1">AI Features</div>
//             <div>{browser.aiFeatures}</div>
//           </div>
//           <div className="mb-2">
//             <div className="text-xs font-semibold text-oasis-green-800 mb-1">Platforms</div>
//             <div>{browser.platforms}</div>
//           </div>
//           <div className="mb-2">
//             <div className="text-xs font-semibold text-oasis-green-800 mb-1">Unique Strength</div>
//             <div>{browser.uniqueStrength}</div>
//           </div>
//           <div>
//             <div className="text-xs font-semibold text-oasis-green-800 mb-1">Summary/Verdict</div>
//             <div>{browser.summary}</div>
//           </div>
//         </div>
//       ))}
//       {filteredData.length === 0 && (
//         <div className="text-center py-8 text-oasis-green-800">
//           No browsers match the current filters
//         </div>
//       )}
//     </div>
//   );

//   return (
//     <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//       {/* Header with Actions */}
//       <div className="bg-gray-50 px-6 py-4 border-b">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-xl font-semibold text-gray-900">Browser Comparison</h2>
//           <div className="flex items-center space-x-2">
//             <button
//               onClick={clearAllFilters}
//               className="inline-flex items-center px-3 py-1.5 rounded-lg border border-gray-300 bg-white text-gray-700 text-sm font-medium shadow-sm hover:bg-oasis-green-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-oasis-green-500 transition"
//             >
//               Clear filters
//             </button>
//             <button
//               onClick={exportToCSV}
//               className="inline-flex items-center px-3 py-1.5 rounded-lg border border-[#788B59] bg-[#EDE6D2] text-oasis-green-800 text-sm font-medium shadow-sm hover:bg-[#E0D48C] hover:border-oasis-green-600 focus:outline-none focus:ring-2 focus:ring-oasis-green-500 transition"
//             >
//               Export CSV
//             </button>
//             <div className="relative" ref={filterRef}>
//               <button
//                 onClick={() => setIsFilterOpen(!isFilterOpen)}
//                 className={`inline-flex items-center px-4 py-1.5 rounded-lg border text-sm font-medium shadow-sm transition focus:outline-none focus:ring-2 focus:ring-oasis-green-500 space-x-2 ${
//                   getActiveFilterCount() > 0
//                     ? 'bg-oasis-green-500 border-oasis-green-600 text-white hover:bg-oasis-green-700 hover:border-oasis-green-800'
//                     : 'bg-white border-gray-300 text-gray-700 hover:bg-oasis-green-50 hover:border-gray-400'
//                 }`}
//               >
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
//                 </svg>
//                 <span>Filters</span>
//                 {getActiveFilterCount() > 0 && (
//                   <span className="bg-white text-oasis-green-800 text-xs rounded-full px-2 py-0.5 ml-1 border border-[#788B59]">
//                     {getActiveFilterCount()}
//                   </span>
//                 )}
//                 <svg className={`w-4 h-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>

//               {/* Filter Dropdown */}
//               {isFilterOpen && (
//                 <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50 max-h-96 overflow-y-auto">
//                   <div className="p-4">
//                     <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
//                       <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
//                       <button
//                         onClick={() => setIsFilterOpen(false)}
//                         className="text-oasis-green-800 hover:text-gray-600"
//                       >
//                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                         </svg>
//                       </button>
//                     </div>
                    
//                     {renderFilterSection('Browser', 'name', filterOptions.name)}
//                     {renderFilterSection('Type', 'type', filterOptions.type)}
//                     {renderFilterSection('Who Uses It', 'whoUsesIt', filterOptions.whoUsesIt.slice(0, 6))}
//                     {renderFilterSection('Platforms', 'platforms', filterOptions.platforms)}
//                     {renderFilterSection('AI Features', 'aiFeatures', filterOptions.aiFeatures.slice(0, 6))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>



//         {/* Filter Presets */}
//         <div className="flex flex-wrap gap-2 mt-3">
//           {Object.entries(filterPresets).map(([key, preset]) => (
//             <button
//               key={key}
//               onClick={() => applyPreset(key)}
//               className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
//             >
//               {preset.name}
//             </button>
//           ))}
//         </div>

//         {/* Active Filter Chips */}
//         {getActiveFilters().length > 0 && (
//           <div className="flex flex-wrap gap-2 mt-3">
//             {getActiveFilters().map((filter, index) => (
//               <span
//                 key={index}
//                 className="inline-flex items-center px-2 py-1 text-xs font-medium bg-[#EDE6D2] text-oasis-green-800 rounded-full"
//               >
//                 {filter.value}
//                 <button
//                   onClick={() => removeFilter(filter.type, filter.value)}
//                   className="ml-1 text-oasis-green-500 hover:text-oasis-green-600"
//                 >
//                   <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 </button>
//               </span>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Table or Card View */}
//       {isMobile ? (
//         renderMobileCards()
//       ) : (
//         // Table Container with Fixed Height
//         <div className="relative overflow-x-auto overflow-y-auto max-h-96 border-b border-gray-200">
//           <table className="w-full">
//             <thead className="bg-gray-50 sticky top-0 z-10">
//               <tr>
//                 <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-medium text-oasis-green-800 uppercase tracking-wider bg-gray-50 border-r border-gray-200 sticky left-0 z-20 min-w-[140px] whitespace-normal break-words">Browser</th>
//                 <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-medium text-oasis-green-800 uppercase tracking-wider bg-white border-r border-gray-200 min-w-[120px] whitespace-normal break-words">Type</th>
//                 <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-medium text-oasis-green-800 uppercase tracking-wider bg-gray-50 border-r border-gray-200 min-w-[140px] whitespace-normal break-words">Who Uses It</th>
//                 <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-medium text-oasis-green-800 uppercase tracking-wider bg-white border-r border-gray-200 min-w-[140px] whitespace-normal break-words">Privacy</th>
//                 <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-medium text-oasis-green-800 uppercase tracking-wider bg-gray-50 border-r border-gray-200 min-w-[140px] whitespace-normal break-words">Security</th>
//                 <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-medium text-oasis-green-800 uppercase tracking-wider bg-white border-r border-gray-200 min-w-[140px] whitespace-normal break-words">AI Features</th>
//                 <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-medium text-oasis-green-800 uppercase tracking-wider bg-gray-50 border-r border-gray-200 min-w-[140px] whitespace-normal break-words">Platforms</th>
//                 <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-medium text-oasis-green-800 uppercase tracking-wider bg-white border-r border-gray-200 min-w-[140px] whitespace-normal break-words">Unique Strength</th>
//                 <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-medium text-oasis-green-800 uppercase tracking-wider bg-gray-50 min-w-[140px] whitespace-normal break-words">Summary/Verdict</th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {filteredData.map((browser, index) => (
//                 <tr
//                   key={browser.name}
//                   className={`transition-colors ${hoveredRow === browser.name ? 'bg-[#EDE6D2]' : ''}`}
//                   onMouseEnter={() => setHoveredRow(browser.name)}
//                   onMouseLeave={() => setHoveredRow(null)}
//                 >
//                   <td className="px-2 sm:px-4 py-2 sm:py-4 whitespace-normal break-words align-top bg-gray-50 border-r border-gray-200 sticky left-0 z-20 min-w-[140px]">{browser.name}</td>
//                   <td className="px-2 sm:px-4 py-2 sm:py-4 whitespace-normal break-words align-top bg-white border-r border-gray-200 min-w-[120px]">{browser.type}</td>
//                   <td className="px-2 sm:px-4 py-2 sm:py-4 whitespace-normal break-words align-top bg-gray-50 border-r border-gray-200 min-w-[140px]">{browser.whoUsesIt}</td>
//                   <td className="px-2 sm:px-4 py-2 sm:py-4 whitespace-normal break-words align-top bg-white border-r border-gray-200 min-w-[140px]">{browser.privacy}</td>
//                   <td className="px-2 sm:px-4 py-2 sm:py-4 whitespace-normal break-words align-top bg-gray-50 border-r border-gray-200 min-w-[140px]">{browser.security}</td>
//                   <td className="px-2 sm:px-4 py-2 sm:py-4 whitespace-normal break-words align-top bg-white border-r border-gray-200 min-w-[140px]">{browser.aiFeatures}</td>
//                   <td className="px-2 sm:px-4 py-2 sm:py-4 whitespace-normal break-words align-top bg-gray-50 border-r border-gray-200 min-w-[140px]">{browser.platforms}</td>
//                   <td className="px-2 sm:px-4 py-2 sm:py-4 whitespace-normal break-words align-top bg-white border-r border-gray-200 min-w-[140px]">{browser.uniqueStrength}</td>
//                   <td className="px-2 sm:px-4 py-2 sm:py-4 whitespace-normal break-words align-top bg-gray-50 min-w-[140px]">{browser.summary}</td>
//                 </tr>
//               ))}
//               {filteredData.length === 0 && (
//                 <tr>
//                   <td colSpan={9} className="text-center py-8 text-oasis-green-800">
//                     No browsers match the current filters
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//           {/* Row Count Indicator */}
//           {filteredData.length > 0 && (
//             <div className="px-4 py-2 bg-gray-50 text-xs text-oasis-green-800 border-t border-gray-200">
//               Showing {filteredData.length} browser{filteredData.length !== 1 ? 's' : ''}
//               {filteredData.length > 6 && (
//                 <span className="ml-2">(scroll to see more)</span>
//               )}
//             </div>
//           )}
//           {filteredData.length > 0 && (
//             <div className="block sm:hidden px-4 py-2 text-xs text-oasis-green-800 text-center">↔️ Scroll horizontally to see more columns</div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default BrowserComparisonTable;