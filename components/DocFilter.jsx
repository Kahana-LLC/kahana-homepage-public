import React from 'react';

export default function DocFilter({ categories, activeCategory, onCategoryChange, searchQuery, onSearchChange }) {
  return (
    <div className="mb-8">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative max-w-lg mx-auto">
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg border border-[#728552] focus:ring-2 focus:ring-[#788B59] focus:border-transparent"
            placeholder="Search documentation..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2">
        <button
          onClick={() => onCategoryChange('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeCategory === 'all'
              ? 'bg-[#788B59] text-white font-bold'
              : 'bg-white text-[#4A5745] font-bold hover:bg-[#F3F8E4] border border-[#728552]'
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors ${
              activeCategory === category
                ? 'bg-[#788B59] text-white font-bold'
                : 'bg-white text-[#4A5745] font-bold hover:bg-[#F3F8E4] border border-[#728552]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
} 