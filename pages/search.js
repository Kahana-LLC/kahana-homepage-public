import { useEffect } from "react";
import NavbarDup from "../components/NavbarDup";

const defaultImageUrl =
  "https://firebasestorage.googleapis.com/v0/b/kahana-dev-workspace/o/Tyw7pzhkRgXnWduNWjqn%2FAGeyYjbR9fXsqrXYx4tsjfv4tvW2%2FbackgroundUrl?alt=media&token=9d6d3811-7157-48de-890b-03eb6982a77e";

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
                hitsPerPage: 10,
              }),
              // refinementList({
              //   container: "#refinements",
              //   attribute: "isWorkspaceMonetized",
              //   sortBy: ["count"],
              //   templates: {
              //     item(item, { html }) {
              //       const { url, label, count, value, isRefined } = item;
              //       const labelText = value === "true" ? "Paid" : "Free";

              //       return html`
              //         <a
              //           href="${url}"
              //           style="${isRefined ? "font-weight: bold" : ""}"
              //         >
              //           <span>${labelText} (${count})</span>
              //         </a>
              //       `;
              //     },
              //   },
              // }),
              searchBox({
                container: "#searchbox",
                placeholder: "🔎 What would you like to explore today?",
              }),
              hits({
                container: "#hits",
                templates: {
                  item(hit, { html }) {
                    const imageUrl = hit.url || defaultImageUrl; // Use default image URL if hit.url is null or undefined

                    return html`
                      <div class="items">
                        <a
                          href="https://kahana-dev.herokuapp.com/hub/${hit.objectID}"
                          target="_blank"
                        >
                          <div class="image-container">
                            <img src="${imageUrl}" alt="${hit.name}" />
                          </div>
                          <div class="items-info">
                            <div class="items-info-content">
                              <div class="items-info--title">
                                <h3>${hit.name}</h3>
                                <p
                                  class="items-info--description"
                                  title="${hit.description}"
                                >
                                  ${hit.description}
                                </p>
                              </div>
                            </div>
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
      <div className="header">
        <div className="header-wrapper">
          <div id="searchbox"></div>
        </div>
      </div>
      <div className="container">
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
