import { useState } from 'react';

const FAQ_URL_RE = /(https?:\/\/[^\s]+)/g;

function linkifyFaqText(text) {
  const parts = text.split(FAQ_URL_RE);
  return parts.map((part, index) => {
    if (!/^https?:\/\//.test(part)) return part;
    return (
      <a
        key={`${part}-${index}`}
        href={part}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-[#8A6622] underline decoration-[#8A6622]/40 underline-offset-2 hover:text-[#5C4520]"
      >
        {part}
      </a>
    );
  });
}

/**
 * Single-open FAQ accordion in library bronze style.
 * Uses .faq-accordion-trigger to beat global button !important styles.
 * @param {{ items: { id?: string, question: string, answer: string }[], className?: string }} props
 */
export default function FaqAccordion({ items = [], className = '' }) {
  const [openId, setOpenId] = useState(null);

  return (
    <div className={`faq-accordion space-y-2 ${className}`}>
      {items.map((item, index) => {
        const id = item.id || `faq-${index}`;
        const isOpen = openId === id;
        const panelId = `${id}-panel`;
        const buttonId = `${id}-button`;

        return (
          <div key={id} className="overflow-hidden rounded-xl bg-[#4F5140]">
            <h3 className="m-0">
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="faq-accordion-trigger flex w-full items-center justify-between gap-4 text-left font-semibold leading-snug transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8A6622]"
                onClick={() => setOpenId(isOpen ? null : id)}
              >
                <span className="faq-accordion-trigger-label">{item.question}</span>
                <svg
                  className={`faq-accordion-trigger-icon h-5 w-5 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className={isOpen ? 'faq-accordion-answer bg-[#F7F3EA]' : ''}
            >
              {isOpen && (
                <div className="space-y-3">
                  {item.answer.split(/\n\n+/).map((para) => (
                    <p
                      key={para.slice(0, 48)}
                      className="text-base leading-relaxed text-[#5C4520] sm:leading-[1.7]"
                    >
                      {linkifyFaqText(para)}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
