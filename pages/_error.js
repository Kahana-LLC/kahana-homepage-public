import Head from "next/head";
import Link from "next/link";

/**
 * Custom Error page – required by Next.js for proper error handling.
 * Handles 404, 500, and client-side errors. Prevents "Missing required error components, refreshing" in dev.
 */
function Error({ statusCode }) {
  const is404 = statusCode === 404;
  const title = is404 ? "404 - Page Not Found" : "Something went wrong";
  const message = is404
    ? "The page you're looking for doesn't exist or has been moved."
    : "An unexpected error occurred. Please try again.";

  return (
    <>
      <Head>
        <title>{title} | Kahana</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            {is404 ? "404 - Page Not Found" : statusCode || "Error"}
          </h1>
          <p className="mt-2 text-lg text-gray-600">{message}</p>
          <div className="mt-5">
            <Link
              href="/"
              className="btn-primary inline-block px-8 py-3 rounded-md font-semibold no-underline"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
