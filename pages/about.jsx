/** Canonical company About is the marketing home on about.kahana.io. */
export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/',
      permanent: true,
    },
  };
}

export default function AboutRedirect() {
  return null;
}
