import { useEffect } from "react";
import NavBar from "../components/NavbarDup";

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
                hitsPerPage: 8,
              }),
              refinementList({
                container: "#refinements",
                attribute: "metaTags",
                sortBy: ["count"],
              }),
              searchBox({
                container: "#searchbox",
                placeholder: "Search to your heart's content",
              }),
              hits({
                container: "#hits",
                //
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
      <NavBar />
      <div class="header">
        <div class="header-wrapper">
          <div class="header-nav">
            <h3>Home</h3>
          </div>
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
