import Head from "next/head";
import Link from "next/link";

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Thank You | Kahana</title>
        <meta
          name="description"
          content="Thank you for your interest in Kahana's enterprise browsing solutions."
        />
      </Head>
      <main>
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-gray-900">Thank You!</h1>
            <p
              className="mt-4 text-gray-700 text-xl"
              style={{ marginBottom: "20px" }}
            >
              We appreciate your support.
            </p>
            <div>
              <Link href="/">
                <button className="px-6 py-2 bg-kahana-primary text-white rounded-md shadow-md hover:bg-kahana-primary-dark">
                  Back to Home
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
