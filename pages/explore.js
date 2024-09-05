import NavbarExplore from "../components/navbarexplore";
import CategoryFilter from "../components/CategoryFilter";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import HitItem from "../components/hititem";
import ReactDOM from "react-dom"; // Import ReactDOM

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
                hitsPerPage: 30,
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

              // Use React component HitItem here
              hits({
                container: "#hits",
                templates: {
                  item(hit) {
                    return `<div class="hit-item" id="hit-${hit.objectID}"></div>`;
                  },
                },
                transformItems(items) {
                  // Render the React components after Algolia hits
                  items.forEach((item) => {
                    setTimeout(() => {
                      const container = document.getElementById(
                        `hit-${item.objectID}`
                      );
                      ReactDOM.render(<HitItem hit={item} />, container);
                    }, 0);
                  });
                  return items;
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
