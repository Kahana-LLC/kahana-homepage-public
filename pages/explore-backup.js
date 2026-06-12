import CategoryFilter from "../components/CategoryFilter";
import React, { useState, useEffect, useMemo } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Image from "next/image";

// Dynamic imports for Algolia
const AlgoliaSearch = dynamic(() => import("algoliasearch/lite"), {
  ssr: false,
});
const InstantSearch = dynamic(() => import("instantsearch.js"), { ssr: false });
const InstantSearchWidgets = dynamic(
  () => import("instantsearch.js/es/widgets"),
  { ssr: false }
);

const defaultImageUrl =
  "https://firebasestorage.googleapis.com/v0/b/kahana-dev-workspace/o/Tyw7pzhkRgXnWduNWjqn%2FAGeyYjbR9fXsqrXYx4tsjfv4tvW2%2FbackgroundUrl?alt=media&token=9d6d3811-7157-48de-890b-03eb6982a77e";
const defaultProfilePic =
  "https://firebasestorage.googleapis.com/v0/b/kahana-dev-user/o/qQY3PuV7wOdXn8X86XqgeGbL0nx1%2FprofilePic?alt=media&token=53a64b5a-e1f1-4346-899a-7d32a1f5b07c";

// Custom hook for Algolia search
const useAlgoliaSearch = (selectedCategory) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isSubscribed = true;
    let searchInstance = null;

    const initializeSearch = async () => {
      try {
        // Clear any existing search instances and shadow DOM
        const existingContainers = ['#searchbox', '#refinements', '#hits', '#pagination'];
        existingContainers.forEach(selector => {
          const element = document.querySelector(selector);
          if (element) {
            // Clear any existing shadow roots
            if (element.shadowRoot) {
              element.shadowRoot.innerHTML = '';
            }
            element.innerHTML = '';
            // Remove any existing event listeners
            const newElement = element.cloneNode(false);
            element.parentNode?.replaceChild(newElement, element);
          }
        });

        // Wait a bit for DOM to be ready
        await new Promise(resolve => setTimeout(resolve, 200));

        const algoliasearch = await AlgoliaSearch;
        const instantsearch = await InstantSearch;
        const { configure, searchBox, hits, pagination, refinementList } =
          await InstantSearchWidgets;

        const searchClient = algoliasearch.default(
          process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || "7IUAU6VN0W",
          process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY ||
            "c2a4d857f669ce2b5a26ef929a9b9974"
        );

        searchInstance = instantsearch.default({
          indexName: "Prod_PublicWorkspaces",
          searchClient,
        });

        const searchConfig = [
          configure({
            hitsPerPage: 9,
            filters: selectedCategory
              ? `metadata.tags:${selectedCategory}`
              : "",
          }),
          searchBox({
            container: "#searchbox",
            placeholder: "Explore Kahana...",
            cssClasses: {
              input: "search-input w-full max-w-[300px] md:max-w-[400px]",
            },
          }),
          refinementList({
            container: "#refinements",
            attribute: "metadata.tags",
            transformItems: (items) =>
              selectedCategory
                ? items.filter((item) => item.label === selectedCategory)
                : [],
          }),
          hits({
            container: "#hits",
            templates: {
              item(hit, { html }) {
                return html`
                  <a
                    href="https://app.kahana.io/hub/${hit.objectID}"
                    target="_self"
                    rel="noopener noreferrer"
                    class="block hover:no-underline transform transition-transform duration-200 hover:scale-102"
                  >
                    <div
                      class="items bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                      <div class="image-container relative h-48">
                        <img
                          src="${hit.url || defaultImageUrl}"
                          alt="${hit.name}"
                          class="w-full h-full object-cover rounded-t-lg"
                          loading="lazy"
                        />
                      </div>
                      <div class="items-info p-4">
                        <div class="items-info-content flex items-start">
                          <div class="profile-container flex-shrink-0 mr-3">
                            <img
                              class="profile-pic w-10 h-10 rounded-full"
                              src="${hit.metadata.profilePicLink ||
                              defaultProfilePic}"
                              alt="Profile"
                              loading="lazy"
                            />
                          </div>
                          <div class="text-container flex-grow min-w-0">
                            <h2
                              class="hit-title text-lg font-medium truncate text-gray-900"
                            >
                              ${hit.name}
                            </h2>
                            <p class="text-sm text-gray-600 line-clamp-2 mt-1">
                              ${hit.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                `;
              },
            },
          }),
          pagination({
            container: "#pagination",
            padding: 2,
            showFirst: false,
            showLast: false,
            cssClasses: {
              list: "flex justify-center gap-2 mt-6",
              item: "px-3 py-1 rounded hover:bg-gray-100 transition-colors duration-200",
              selectedItem: "bg-gray-200",
            },
          }),
        ];

        searchInstance.addWidgets(searchConfig);

        if (isSubscribed) {
          setIsLoading(false);
          searchInstance.start();
        }
      } catch (err) {
        console.error('Algolia search initialization failed:', err);
        if (isSubscribed) {
          setError(err);
          setIsLoading(false);
        }
      }
    };

    initializeSearch();

    return () => {
      isSubscribed = false;
      if (searchInstance) {
        try {
          searchInstance.dispose();
        } catch (e) {
          console.warn('Error disposing search instance:', e);
        }
      }
    };
  }, [selectedCategory]);

  return { isLoading, error };
};

const SearchPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const { isLoading, error } = useAlgoliaSearch(selectedCategory);

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
        <div className="fixed top-[7rem] left-0 right-0 bg-white/90 backdrop-blur-sm z-40 transition-all duration-200">
          <div className="header-wrapper py-3 md:py-4">
            <div className="px-4 md:px-6">
              <div id="searchbox" className="mb-3" />
              <CategoryFilter setSelectedCategory={setSelectedCategory} />
            </div>
          </div>
        </div>
        <main
          className="container mx-auto px-4 md:px-6"
          style={{ marginTop: "180px" }}
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
            <>
              <div id="refinements" className="mb-4" />
              <div id="hits" className="mb-8" />
              <div id="pagination" className="mb-8" />
            </>
          )}
        </main>
      </div>
    </>
  );
};

export default SearchPage;
