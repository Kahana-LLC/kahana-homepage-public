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
                      >
                        <div class="items">
                          <div class="image-container">
                            <img src="${imageUrl}" alt="${hit.name}" />
                          </div>
                          <div class="items-info">
                            <div class="items-info-content">
                              <div class="profile-container">
                                <img
                                  class="profile-pic"
                                  src="${hit.metadata.profilePicLink ||
                                  defaultProfilePic}"
                                  alt="Profile Picture"
                                />
                              </div>
                              <div class="text-container">
                                <div class="items-info--title">
                                  <h2 class="hit-title">${hit.name}</h2>
                                </div>
                                <div class="items-info--description">
                                  <p title="${hit.description}">
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
      <div>
        <div
          style={{ zIndex: "100" }}
          className="fixed top-0 left-0 right-0 bg-white shadow-md"
        >
          <NavbarExplore />
        </div>
        <div
          className="fixed top-[40px] left-0 right-0 bg-white z-50"
          style={{
            background:
              "linear-gradient(to top, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.9) 100%)",
          }}
        >
          <div className="header-wrapper h-[200px] py-2">
            <div style={{ paddingTop: "40px" }}></div>
            <div id="searchbox"></div>
            <div style={{ paddingTop: "5px" }}>
              <CategoryFilter setSelectedCategory={setSelectedCategory} />
            </div>
          </div>
        </div>
        <div className="hits-container" style={{ marginTop: "260px" }}>
          <div id="refinements"></div>
          <div>
            <div id="hits"></div>
            <div id="pagination"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
