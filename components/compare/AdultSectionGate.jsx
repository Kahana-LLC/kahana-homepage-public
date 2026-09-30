import { useState } from 'react';

function isAtLeast18(isoDate) {
  if (!isoDate) return false;
  const born = new Date(`${isoDate}T00:00:00`);
  if (Number.isNaN(born.getTime())) return false;
  const today = new Date();
  let age = today.getFullYear() - born.getFullYear();
  const month = today.getMonth() - born.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < born.getDate())) age -= 1;
  return age >= 18;
}

/**
 * General library shelf plus an adult section that stays gated.
 */
export default function AdultSectionGate({ platformName }) {
  const [adult, setAdult] = useState(false);
  const [birthDate, setBirthDate] = useState('');
  const [accepted, setAccepted] = useState(false);
  const oldEnough = isAtLeast18(birthDate);

  return (
    <div className="overflow-hidden rounded-[20px] border border-[#E4D9C4] bg-white">
      <div className="flex items-center justify-between border-b border-[#E4D9C4] px-4 py-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#8A6622]">Library</p>
          <p className="mt-1 text-sm font-semibold text-[#3B2F1A]">General shelf</p>
        </div>
        <p className="text-xs font-medium text-[#5C4520]">Not an adult-first app</p>
      </div>
      <div className="space-y-3 p-4">
        <div className="rounded-xl bg-[#F7F3EA] px-4 py-3">
          <p className="font-semibold text-[#3B2F1A]">Session notes and worksheets</p>
          <p className="mt-1 text-sm text-[#666666]">Listed for everyone. No age gate.</p>
        </div>
        <label className="flex items-center justify-between gap-3 rounded-xl border border-[#E4D9C4] px-4 py-3">
          <span>
            <span className="block font-semibold text-[#3B2F1A]">Mark this hub adult</span>
            <span className="mt-1 block text-sm text-[#666666]">
              Same idea as a library adult section. Hidden from the default Library.
            </span>
          </span>
          <input
            type="checkbox"
            checked={adult}
            onChange={(event) => {
              setAdult(event.target.checked);
              setBirthDate('');
              setAccepted(false);
            }}
            className="h-4 w-4"
          />
        </label>
        {adult ? (
          <div className="rounded-xl border border-[#E4D9C4] px-4 py-3">
            <p className="text-sm font-semibold text-[#3B2F1A]">Before this hub opens</p>
            <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm text-[#5C4520]">
              <li>Sign in. There is no anonymous unlock.</li>
              <li>
                <label className="mt-1 flex flex-col gap-1">
                  Date of birth
                  <input
                    type="date"
                    value={birthDate}
                    onChange={(event) => setBirthDate(event.target.value)}
                    className="w-40 rounded-md border border-[#E4D9C4] px-2 py-1 text-[#3B2F1A]"
                  />
                </label>
              </li>
              <li>
                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    checked={accepted}
                    onChange={(event) => setAccepted(event.target.checked)}
                    className="mt-1 h-4 w-4"
                  />
                  <span>Accept the adult-content terms.</span>
                </label>
              </li>
            </ol>
            <p className="mt-3 text-sm font-semibold text-[#3B2F1A]">
              {oldEnough && accepted
                ? 'Gate passed. This hub stays out of normal search indexing.'
                : 'Still closed. 18+ and the terms are both required.'}
            </p>
          </div>
        ) : (
          <p className="text-sm text-[#5C4520]">
            You can keep {platformName} for premium uploads. On Kahana, adult work is a marked section, not the front door.
          </p>
        )}
      </div>
    </div>
  );
}
