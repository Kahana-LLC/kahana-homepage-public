import React, { useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { buildTallyEmbedUrl, deleteAccountTallyUrl } from '../../utils/tally';

export default function DeleteAccountDoc() {
  const router = useRouter();

  const tallySrc = useMemo(() => {
    const email = router.query.email;
    const emailValue = Array.isArray(email) ? email[0] : email;
    return buildTallyEmbedUrl(deleteAccountTallyUrl, emailValue);
  }, [router.query.email]);

  return (
    <div className="doc-content delete-account-doc max-w-none">
      <p className="text-lg text-[#30400D]/85 leading-relaxed">
        Use the form below to request permanent deletion of your Oasis account. This action cannot be undone.
      </p>

      <aside className="my-8 rounded-lg border-l-4 border-amber-500 bg-amber-50 p-6">
        <strong className="mb-2 block text-amber-900">Before you delete</strong>
        <ul className="m-0 list-disc space-y-2 pl-5 text-amber-900">
          <li>Use the same email address as your Oasis account.</li>
          <li>Once submitted and processed, your account cannot be recovered.</li>
          <li>Data associated with your account will be destroyed in accordance with our Privacy Policy.</li>
          <li>
            If you only want to stop optional emails, use the unsubscribe link in those messages instead of
            deleting your account.
          </li>
        </ul>
      </aside>

      <section className="my-12">
        <h2 className="text-2xl font-bold text-oasis-green-800">Delete Oasis Account request</h2>
        <p className="mt-4 text-[#30400D]/85 leading-relaxed">
          Complete the form with your account email and sign to confirm you understand that deletion is
          permanent. We will process your request after verification.
        </p>
        <div className="mt-8 overflow-hidden rounded-xl bg-white shadow-lg">
          <iframe
            src={tallySrc}
            width="100%"
            height={560}
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Delete Oasis Account"
            style={{
              border: 0,
              borderRadius: 0,
              backgroundColor: 'transparent',
              display: 'block',
            }}
          />
        </div>
      </section>

      <section className="my-12">
        <h2 className="text-2xl font-bold text-oasis-green-800">Related policies</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-[#30400D]/85">
          <li>
            <Link href="/terms-and-conditions#term-termination" className="text-brand-link no-underline hover:no-underline">
              Terms and Conditions: Termination and dormant accounts
            </Link>
          </li>
          <li>
            <Link href="/privacy-policy#your-choices-rights" className="text-brand-link no-underline hover:no-underline">
              Privacy Policy: Your rights and account choices
            </Link>
          </li>
          <li>
            <Link href="https://kahana.io/contact" className="text-brand-link no-underline hover:no-underline">
              Contact support
            </Link>{' '}
            if you cannot use this form
          </li>
        </ul>
      </section>
    </div>
  );
}
