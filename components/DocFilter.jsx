import React from 'react';

export default function DocFilter({ categories, activeCategory, onCategoryChange, searchQuery, onSearchChange }) {
  return (
    <div className="mb-8">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative max-w-lg mx-auto">
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-oasis-green-500 focus:border-transparent"
            placeholder="Search documentation..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg className="h-5 w-5 text-oasis-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              ? 'bg-oasis-green-500 text-white font-bold'
              : 'bg-white text-oasis-green-800 font-bold hover:bg-oasis-green-50'
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
                ? 'bg-oasis-green-500 text-white font-bold'
                : 'bg-white text-oasis-green-800 font-bold hover:bg-oasis-green-50'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
} 