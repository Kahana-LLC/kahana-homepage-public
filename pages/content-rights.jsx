import React from 'react';

/**
 * Stable Legal URL. Canonical guide lives at /help/content-rights.
 * A real page (not only next.config) so client-side <Link> navigations redirect reliably.
 */
export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/help/content-rights',
      permanent: true,
    },
  };
}

export default function ContentRightsRedirect() {
  return null;
}
