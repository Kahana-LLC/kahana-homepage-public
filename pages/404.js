// pages/404.js
import Head from "next/head";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Aura Library</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            404 - Page Not Found
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            The page you're looking for doesn't exist or has been moved.
          </p>
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
