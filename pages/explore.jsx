import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Explore() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the desired URL
    router.push('https://app.kahana.co/explore');
  }, []);

  // Return null or any loading indicator since this page will redirect
  return null;
}
