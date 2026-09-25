/**
 * Old path kept so early links still resolve.
 */
export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/podcast-guest',
      permanent: true,
    },
  };
}

export default function TellYourStoryRedirect() {
  return null;
}
