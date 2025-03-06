import NavbarExplore from "../components/navbarexplore";
import CategoryFilter from "../components/CategoryFilter";
import React, { useState, useEffect } from "react";
import Head from "next/head";

const defaultImageUrl =
  "https://firebasestorage.googleapis.com/v0/b/kahana-dev-workspace/o/Tyw7pzhkRgXnWduNWjqn%2FAGeyYjbR9fXsqrXYx4tsjfv4tvW2%2FbackgroundUrl?alt=media&token=9d6d3811-7157-48de-890b-03eb6982a77e";
const defaultProfilePic =
  "https://firebasestorage.googleapis.com/v0/b/kahana-dev-user/o/qQY3PuV7wOdXn8X86XqgeGbL0nx1%2FprofilePic?alt=media&token=53a64b5a-e1f1-4346-899a-7d32a1f5b07c";

const SearchPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    import("algoliasearch/lite").then((algoliasearch) => {
      import("instantsearch.js").then((instantsearch) => {
        import("instantsearch.js/es/widgets").then(
          ({ configure, searchBox, hits, pagination, refinementList }) => {
            const searchClient = algoliasearch.default(
              "7IUAU6VN0W",
              "c2a4d857f669ce2b5a26ef929a9b9974"
            );

            const search = instantsearch.default({
              indexName: "Prod_PublicWorkspaces",
              searchClient,
            });

            search.addWidgets([
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
                transformItems: (items) => {
                  if (selectedCategory) {
                    return items.filter(
                      (item) => item.label === selectedCategory
                    );
                  } else {
                    return [];
                  }
                },
              }),
              hits({
                container: "#hits",
                templates: {
                  item(hit, { html }) {
                    const imageUrl = hit.url || defaultImageUrl;

                    return html`
                      <a
                        href="https://app.kahana.co/hub/${hit.objectID}"
                        target="_self"
                        rel="noopener noreferrer"
                        class="block hover:no-underline"
                      >
                        <div class="items">
                          <div class="image-container">
                            <img
                              src="${imageUrl}"
                              alt="${hit.name}"
                              class="w-full h-full object-cover"
                            />
                          </div>
                          <div class="items-info p-3 md:p-4">
                            <div class="items-info-content flex items-start">
                              <div class="profile-container flex-shrink-0 mr-3">
                                <img
                                  class="profile-pic w-8 h-8 md:w-10 md:h-10 rounded-full"
                                  src="${hit.metadata.profilePicLink ||
                                  defaultProfilePic}"
                                  alt="Profile Picture"
                                />
                              </div>
                              <div class="text-container flex-grow min-w-0">
                                <div class="items-info--title">
                                  <h2
                                    class="hit-title text-base md:text-lg font-medium truncate"
                                  >
                                    ${hit.name}
                                  </h2>
                                </div>
                                <div class="items-info--description">
                                  <p
                                    class="text-sm text-gray-600 line-clamp-2 md:line-clamp-3"
                                    title="${hit.description}"
                                  >
                                    ${hit.description}
                                  </p>
                                </div>
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
                  item: "px-3 py-1 rounded hover:bg-gray-100",
                  selectedItem: "bg-gray-200",
                },
              }),
            ]);

            search.start();
          }
        );
      });
    });
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
        <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
          <NavbarExplore />
        </nav>
        <div className="fixed top-[56px] left-0 right-0 bg-white/90 backdrop-blur-sm z-40 transition-all duration-200">
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
          <div id="refinements" className="mb-4" />
          <div id="hits" className="mb-8" />
          <div id="pagination" className="mb-8" />
        </main>
      </div>
    </>
  );
};

export default SearchPage;
