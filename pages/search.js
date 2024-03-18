import { useEffect } from "react";
import NavbarDup from "../components/NavbarDup";

const SearchPage = () => {
  useEffect(() => {
    import("algoliasearch/lite").then((algoliasearch) => {
      import("instantsearch.js").then((instantsearch) => {
        import("instantsearch.js/es/widgets").then(
          ({ configure, refinementList, searchBox, hits, pagination }) => {
            const searchClient = algoliasearch.default(
              "7IUAU6VN0W",
              "c2a4d857f669ce2b5a26ef929a9b9974"
            );

            const search = instantsearch.default({
              indexName: "idx_workspace_metatafs",
              searchClient,
            });

            search.addWidgets([
              configure({
                hitsPerPage: 25,
              }),
              refinementList({
                container: "#refinements",
                attribute: ["name", "description"],
                sortBy: ["viewCount"],
              }),
              searchBox({
                container: "#searchbox",
                placeholder: "🔎 What would you like to explore today?",
              }),
              hits({
                container: "#hits",
                templates: {
                  item(hit, { html }) {
                    return html`
                      <div class="card">
                        <a
                          href="https://kahana-dev.herokuapp.com/hub/${hit.objectID}"
                          target="_blank"
                        >
                          <div class="image-container">
                            <img src="${hit.url}" alt="${hit.name}" />
                          </div>
                          <div class="card-info">
                            <h3>${hit.name}</h3>
                            <p>${hit.description}</p>
                          </div>
                        </a>
                      </div>
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
  }, []);

  return (
    <div>
      <div style={{ zIndex: "100" }} className="sticky top-0">
        <NavbarDup />
      </div>
      <div class="header">
        <div class="header-wrapper">
          <div id="searchbox"></div>
        </div>
      </div>
      <div class="container">
        <div>
          <div id="refinements"></div>
        </div>
        <div>
          <div id="hits"></div>
          <div id="pagination"></div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
