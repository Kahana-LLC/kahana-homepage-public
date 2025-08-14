import React, { useState, useMemo, useRef, useEffect } from 'react';
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

const BrowserComparisonTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    name: [],
    type: [],
    whoUsesIt: [],
    platforms: [],
    aiFeatures: []
  });


  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [hoveredRow, setHoveredRow] = useState(null);
  const filterRef = useRef(null);

  const isMobile = useIsMobile();

  // Filter presets
  const filterPresets = {
    'enterprise': {
      name: 'Enterprise Only',
      filters: { type: ['Enterprise'] }
    },
    'consumer': {
      name: 'Consumer Browsers',
      filters: { type: ['Consumer'] }
    },
    'ai-powered': {
      name: 'AI-Powered',
      filters: { aiFeatures: ['Anthropic/Deepgram AI integrations', 'Google AI (search, autofill, smart suggestions)', 'Microsoft Copilot, Bing AI', 'Aria AI assistant'] }
    },
    'privacy-focused': {
      name: 'Privacy-Focused',
      filters: { whoUsesIt: ['Privacy-conscious users, open-source advocates', 'Privacy-first, ad-block fans'] }
    }
  };

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

  // Apply filters to data
  const filteredData = useMemo(() => {
    return Object.values(browserData).filter(browser => {

      // Enhanced search: match against all fields
      if (searchTerm) {
        const term = searchTerm.toLowerCase();
        const searchableFields = [
          browser.name,
          browser.type,
          browser.whoUsesIt,
          browser.privacy,
          browser.security,
          browser.aiFeatures,
          browser.platforms,
          browser.uniqueStrength,
          browser.summary
        ];
        const matches = searchableFields.some(field => field && typeof field === 'string' && field.toLowerCase().includes(term));
        if (!matches) return false;
      }

      
      // Name filter
      if ((filters.name ?? []).length > 0 && !(filters.name ?? []).includes(browser.name)) {
        return false;
      }
      
      // Type filter
      if ((filters.type ?? []).length > 0 && !(filters.type ?? []).includes(browser.type)) {
        return false;
      }
      
      // Who Uses It filter
      if ((filters.whoUsesIt ?? []).length > 0 && !(filters.whoUsesIt ?? []).includes(browser.whoUsesIt)) {
        return false;
      }
      
      // Platforms filter
      if ((filters.platforms ?? []).length > 0 && !(filters.platforms ?? []).includes(browser.platforms)) {
        return false;
      }
      
      // AI Features filter
      if ((filters.aiFeatures ?? []).length > 0 && !(filters.aiFeatures ?? []).includes(browser.aiFeatures)) {
        return false;
      }
      
      return true;
    });
  }, [filters, searchTerm]);

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
      name: [],
      price: [],
      productivity: [],
      ai: [],
      privacy: [],
      security: []
    });
    setSearchTerm('');
  };

  const applyPreset = (presetKey) => {
    const preset = filterPresets[presetKey];
    setFilters(prev => ({
      ...prev,
      ...preset.filters
    }));
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
    const headers = ['Browser', 'Type', 'Who Uses It', 'Privacy', 'Security', 'AI Features', 'Platforms', 'Unique Strength', 'Summary/Verdict'];
    const csvContent = [
      headers.join(','),
      ...filteredData.map(browser => [
        browser.name,
        browser.type,
        browser.whoUsesIt,
        browser.privacy,
        browser.security,
        browser.aiFeatures,
        browser.platforms,
        browser.uniqueStrength,
        browser.summary
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'browser-comparison.csv';
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
      <h3 className="text-sm font-semibold text-gray-700 mb-2">{title}</h3>
      <div className="space-y-1 max-h-32 overflow-y-auto">
        {options.map(option => (
          <label key={option} className="flex items-center space-x-2 text-sm">
            <input
              type="checkbox"
              checked={(filters[filterType] || []).includes(option)}
              onChange={() => handleFilterChange(filterType, option)}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-gray-600">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );

  const renderProductivityCell = (productivity) => (
    <div className="space-y-1">
      {productivity.tabsGroups && <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Tab groups</span>}
      {productivity.extensions && <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Extensions</span>}
      {productivity.ai && <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">AI</span>}
    </div>
  );

  const renderArrayCell = (items) => (
    <div className="space-y-1">
      {items.map(item => (
        <span key={item} className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded mr-1 mb-1">
          {item}
        </span>
      ))}
    </div>
  );

  const renderPriceCell = (prices) => (
    <div className="space-y-1">
      {prices.map(price => (
        <span key={price} className={`inline-block text-xs px-2 py-1 rounded mr-1 mb-1 font-semibold ${
          price === 'Free' ? 'bg-green-100 text-green-800' :
          price === 'Enterprise' ? 'bg-purple-100 text-purple-800' :
          price === 'Paid-only' ? 'bg-orange-100 text-orange-800' :
          'bg-gray-100 text-gray-800'
        }`}>
          {price}
        </span>
      ))}
    </div>
  );

  // Card view for mobile
  const renderMobileCards = () => (
    <div className="space-y-4">
      {filteredData.map((browser) => (
        <div key={browser.name} className="bg-white rounded-lg shadow border border-gray-200 p-4">
          <div className="text-lg font-bold mb-2">{browser.name}</div>
          <div className="mb-2">
            <div className="text-xs font-semibold text-gray-500 mb-1">Type</div>
            <div>{browser.type}</div>
          </div>
          <div className="mb-2">
            <div className="text-xs font-semibold text-gray-500 mb-1">Who Uses It</div>
            <div>{browser.whoUsesIt}</div>
          </div>
          <div className="mb-2">
            <div className="text-xs font-semibold text-gray-500 mb-1">Privacy</div>
            <div>{browser.privacy}</div>
          </div>
          <div className="mb-2">
            <div className="text-xs font-semibold text-gray-500 mb-1">Security</div>
            <div>{browser.security}</div>
          </div>
          <div className="mb-2">
            <div className="text-xs font-semibold text-gray-500 mb-1">AI Features</div>
            <div>{browser.aiFeatures}</div>
          </div>
          <div className="mb-2">
            <div className="text-xs font-semibold text-gray-500 mb-1">Platforms</div>
            <div>{browser.platforms}</div>
          </div>
          <div className="mb-2">
            <div className="text-xs font-semibold text-gray-500 mb-1">Unique Strength</div>
            <div>{browser.uniqueStrength}</div>
          </div>
          <div>
            <div className="text-xs font-semibold text-gray-500 mb-1">Summary/Verdict</div>
            <div>{browser.summary}</div>
          </div>
        </div>
      ))}
      {filteredData.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No browsers match the current filters
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header with Actions */}
      <div className="bg-gray-50 px-6 py-4 border-b">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Browser Comparison</h2>
          <div className="flex items-center space-x-2">
            <button
              onClick={clearAllFilters}
              className="inline-flex items-center px-3 py-1.5 rounded-lg border border-gray-300 bg-white text-gray-700 text-sm font-medium shadow-sm hover:bg-gray-100 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              Clear filters
            </button>
            <button
              onClick={exportToCSV}
              className="inline-flex items-center px-3 py-1.5 rounded-lg border border-blue-600 bg-blue-50 text-blue-700 text-sm font-medium shadow-sm hover:bg-blue-100 hover:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              Export CSV
            </button>
            <div className="relative" ref={filterRef}>
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className={`inline-flex items-center px-4 py-1.5 rounded-lg border text-sm font-medium shadow-sm transition focus:outline-none focus:ring-2 focus:ring-blue-500 space-x-2 ${
                  getActiveFilterCount() > 0
                    ? 'bg-blue-600 border-blue-700 text-white hover:bg-blue-700 hover:border-blue-800'
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
                </svg>
                <span>Filters</span>
                {getActiveFilterCount() > 0 && (
                  <span className="bg-white text-blue-700 text-xs rounded-full px-2 py-0.5 ml-1 border border-blue-600">
                    {getActiveFilterCount()}
                  </span>
                )}
                <svg className={`w-4 h-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Filter Dropdown */}
              {isFilterOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50 max-h-96 overflow-y-auto">
                  <div className="p-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
                      <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                      <button
                        onClick={() => setIsFilterOpen(false)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    
                    {renderFilterSection('Browser', 'name', filterOptions.name)}
                    {renderFilterSection('Type', 'type', filterOptions.type)}
                    {renderFilterSection('Who Uses It', 'whoUsesIt', filterOptions.whoUsesIt.slice(0, 6))}
                    {renderFilterSection('Platforms', 'platforms', filterOptions.platforms)}
                    {renderFilterSection('AI Features', 'aiFeatures', filterOptions.aiFeatures.slice(0, 6))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>



        {/* Filter Presets */}
        <div className="flex flex-wrap gap-2 mt-3">
          {Object.entries(filterPresets).map(([key, preset]) => (
            <button
              key={key}
              onClick={() => applyPreset(key)}
              className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
            >
              {preset.name}
            </button>
          ))}
        </div>

        {/* Active Filter Chips */}
        {getActiveFilters().length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {getActiveFilters().map((filter, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full"
              >
                {filter.value}
                <button
                  onClick={() => removeFilter(filter.type, filter.value)}
                  className="ml-1 text-blue-600 hover:text-blue-800"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Table or Card View */}
      {isMobile ? (
        renderMobileCards()
      ) : (
        // Table Container with Fixed Height
        <div className="relative overflow-x-auto overflow-y-auto max-h-96 border-b border-gray-200">
          <table className="w-full">
            <thead className="bg-gray-50 sticky top-0 z-10">
              <tr>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider bg-gray-50 border-r border-gray-200 sticky left-0 z-20 min-w-[140px] whitespace-normal break-words">Browser</th>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider bg-white border-r border-gray-200 min-w-[120px] whitespace-normal break-words">Type</th>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider bg-gray-50 border-r border-gray-200 min-w-[140px] whitespace-normal break-words">Who Uses It</th>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider bg-white border-r border-gray-200 min-w-[140px] whitespace-normal break-words">Privacy</th>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider bg-gray-50 border-r border-gray-200 min-w-[140px] whitespace-normal break-words">Security</th>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider bg-white border-r border-gray-200 min-w-[140px] whitespace-normal break-words">AI Features</th>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider bg-gray-50 border-r border-gray-200 min-w-[140px] whitespace-normal break-words">Platforms</th>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider bg-white border-r border-gray-200 min-w-[140px] whitespace-normal break-words">Unique Strength</th>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider bg-gray-50 min-w-[140px] whitespace-normal break-words">Summary/Verdict</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredData.map((browser, index) => (
                <tr
                  key={browser.name}
                  className={`transition-colors ${hoveredRow === browser.name ? 'bg-blue-50' : ''}`}
                  onMouseEnter={() => setHoveredRow(browser.name)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  <td className="px-2 sm:px-4 py-2 sm:py-4 whitespace-normal break-words align-top bg-gray-50 border-r border-gray-200 sticky left-0 z-20 min-w-[140px]">{browser.name}</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-4 whitespace-normal break-words align-top bg-white border-r border-gray-200 min-w-[120px]">{browser.type}</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-4 whitespace-normal break-words align-top bg-gray-50 border-r border-gray-200 min-w-[140px]">{browser.whoUsesIt}</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-4 whitespace-normal break-words align-top bg-white border-r border-gray-200 min-w-[140px]">{browser.privacy}</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-4 whitespace-normal break-words align-top bg-gray-50 border-r border-gray-200 min-w-[140px]">{browser.security}</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-4 whitespace-normal break-words align-top bg-white border-r border-gray-200 min-w-[140px]">{browser.aiFeatures}</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-4 whitespace-normal break-words align-top bg-gray-50 border-r border-gray-200 min-w-[140px]">{browser.platforms}</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-4 whitespace-normal break-words align-top bg-white border-r border-gray-200 min-w-[140px]">{browser.uniqueStrength}</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-4 whitespace-normal break-words align-top bg-gray-50 min-w-[140px]">{browser.summary}</td>
                </tr>
              ))}
              {filteredData.length === 0 && (
                <tr>
                  <td colSpan={9} className="text-center py-8 text-gray-500">
                    No browsers match the current filters
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          {/* Row Count Indicator */}
          {filteredData.length > 0 && (
            <div className="px-4 py-2 bg-gray-50 text-xs text-gray-500 border-t border-gray-200">
              Showing {filteredData.length} browser{filteredData.length !== 1 ? 's' : ''}
              {filteredData.length > 6 && (
                <span className="ml-2">(scroll to see more)</span>
              )}
            </div>
          )}
          {filteredData.length > 0 && (
            <div className="block sm:hidden px-4 py-2 text-xs text-gray-400 text-center">↔️ Scroll horizontally to see more columns</div>
          )}
        </div>
      )}
    </div>
  );
};

export default BrowserComparisonTable;