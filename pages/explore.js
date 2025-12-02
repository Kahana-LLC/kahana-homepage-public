import CategoryFilter from "../components/CategoryFilter";
import React, { useState, useEffect } from "react";
import Head from "next/head";

const SearchPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async (query, page = 1) => {
    setIsLoading(true);
    setError(null);
    setHasSearched(true);
    setSearchQuery(query);
    setCurrentPage(page);
    
    try {
      // Simple search implementation without InstantSearch
      const response = await fetch(`/api/search?q=${encodeURIComponent(query)}&category=${selectedCategory}&page=${page}`);
      if (response.ok) {
        const data = await response.json();
        setSearchResults(data.hits || []);
        setPagination(data.pagination || null);
      } else {
        throw new Error('Search failed');
      }
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageChange = (newPage) => {
    handleSearch(searchQuery, newPage);
  };

  // Load initial results on component mount
  useEffect(() => {
    handleSearch('');
  }, []);

  // Handle category changes
  useEffect(() => {
    if (hasSearched) {
      handleSearch(searchQuery, 1);
    }
  }, [selectedCategory]);

  return (
    <>
      <Head>
        <title>Explore Kahana</title>
        <meta
          name="description"
          content="Search Kahana workspaces and explore public profiles."
        />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="fixed top-[64px] left-0 right-0 bg-white/90 backdrop-blur-sm z-40 transition-all duration-200">
          <div className="header-wrapper py-3 md:py-4">
            <div className="px-4 md:px-6">
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Explore Kahana..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input w-full max-w-[300px] md:max-w-[400px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSearch(e.target.value, 1);
                    }
                  }}
                />
              </div>
              <CategoryFilter setSelectedCategory={setSelectedCategory} />
            </div>
          </div>
        </div>
        <main
          className="container mx-auto px-4 md:px-6"
          style={{ marginTop: "140px" }}
        >
          {error && (
            <div className="text-center py-8">
              <div className="text-red-500 mb-4">
                An error occurred while loading search results. Please try again.
              </div>
              <button 
                onClick={() => window.location.reload()} 
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Reload Page
              </button>
            </div>
          )}
          {isLoading ? (
            <div className="flex justify-center items-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            </div>
          ) : (
            <div className="mb-8">
              {searchResults.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {searchResults.map((hit) => (
                    <a
                      key={hit.objectID}
                      href={`https://app.kahana.co/hub/${hit.objectID}`}
                      target="_self"
                      rel="noopener noreferrer"
                      className="block hover:no-underline transform transition-transform duration-200 hover:scale-102"
                    >
                      <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                        <div className="relative h-48">
                          <img
                            src={hit.url || "https://via.placeholder.com/400x200"}
                            alt={hit.name}
                            className="w-full h-full object-cover rounded-t-lg"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-4">
                          <div className="flex items-start">
                            <div className="flex-shrink-0 mr-3">
                              <img
                                className="w-10 h-10 rounded-full"
                                src={hit.metadata?.profilePicLink || "https://via.placeholder.com/40"}
                                alt="Profile"
                                loading="lazy"
                              />
                            </div>
                            <div className="flex-grow min-w-0">
                              <h2 className="text-lg font-medium truncate text-gray-900">
                                {hit.name}
                              </h2>
                              <p className="text-sm text-gray-600 line-clamp-2 mt-1">
                                {hit.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              ) : hasSearched ? (
                <div className="text-center py-8 text-gray-500">
                  <p>No results found. Try a different search term.</p>
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <p>Loading Kahana workspaces...</p>
                </div>
              )}
            </div>
          )}
          
          {/* Pagination */}
          {pagination && pagination.totalPages > 1 && (
            <div className="flex justify-center items-center mt-8 mb-8">
              <div className="flex items-center space-x-2">
                {/* Previous Button */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={!pagination.hasPreviousPage}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pagination.hasPreviousPage
                      ? 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                      : 'bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed'
                  }`}
                >
                  Previous
                </button>

                {/* Page Numbers */}
                <div className="flex items-center space-x-1">
                  {Array.from({ length: Math.min(5, pagination.totalPages) }, (_, i) => {
                    let pageNum;
                    if (pagination.totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= pagination.totalPages - 2) {
                      pageNum = pagination.totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }

                    return (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                          currentPage === pageNum
                            ? 'bg-blue-500 text-white'
                            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>

                {/* Next Button */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={!pagination.hasNextPage}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pagination.hasNextPage
                      ? 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                      : 'bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed'
                  }`}
                >
                  Next
                </button>
              </div>
              
              {/* Results Info */}
              <div className="ml-6 text-sm text-gray-600">
                Showing {((currentPage - 1) * pagination.hitsPerPage) + 1} to {Math.min(currentPage * pagination.hitsPerPage, pagination.totalHits)} of {pagination.totalHits} results
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default SearchPage;
