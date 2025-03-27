import "../styles/globals.css";
import NavbarDup from "../components/NavbarDup";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div style={{ zIndex: "100" }} className="sticky top-0">
        <NavbarDup />
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
