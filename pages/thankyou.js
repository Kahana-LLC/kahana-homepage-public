import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Thank You!</title>
      </Head>
      <div>
        <main>
          <section className={`py-16 px-4 sm:px-6 lg:px-8 bg-white`}>
            <div className="max-w-7xl mx-auto text-center">
              <h1 className={`text-3xl font-bold text-gray-900`}>Thank You!</h1>
              <p
                className="mt-4 text-gray-700 text-xl"
                style={{ marginBottom: "20px" }}
              >
                We appreciate your support.
              </p>
              <div>
                <Link href="/">
                  <button className="px-6 py-2 bg-[#3B675E] text-white rounded-md shadow-md hover:bg-[#046856]">
                    Back to Home
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
