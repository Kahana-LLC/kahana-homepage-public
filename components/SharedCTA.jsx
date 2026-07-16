import React from 'react';
import Link from 'next/link';

const SharedCTA = ({ 
  title, 
  description, 
  buttonText = "Get in Touch", 
  buttonLink = "https://kahana.io/contact",
  buttonVariant = "primary", // primary or secondary
  className = "", // Additional classes for the section
  sectionId,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  primaryOnClick,
  secondaryOnClick,
  buttonOnClick,
}) => {
  const pillVariantClass = {
    primary: 'shared-cta-pill--primary',
    secondary: 'shared-cta-pill--secondary',
  };

  const hasExplicitButtons = Boolean(primaryHref || secondaryHref);

  return (
    <section
      id={sectionId}
      className={`shared-cta-section w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-10 sm:py-14 md:py-18 lg:py-24 mb-0 bg-white ${className}`}
    >
      <div className="shared-cta-frame mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="shared-cta-card mx-auto text-center">
          <h2 className="shared-cta-title">
          {title}
          </h2>
          <p className="shared-cta-description">
          {description}
          </p>
          <div className="shared-cta-actions">
            {hasExplicitButtons ? (
              <>
                {primaryHref && (
                  <Link
                    href={primaryHref}
                    onClick={primaryOnClick}
                    className="shared-cta-pill shared-cta-pill--primary w-full sm:w-auto no-underline hover:no-underline focus:no-underline"
                  >
                    {primaryLabel || "Schedule a Demo"}
                  </Link>
                )}
                {secondaryHref && (
                  <Link
                    href={secondaryHref}
                    onClick={secondaryOnClick}
                    className="shared-cta-pill shared-cta-pill--secondary w-full sm:w-auto no-underline hover:no-underline focus:no-underline"
                  >
                    {secondaryLabel || "Get in Touch"}
                  </Link>
                )}
              </>
            ) : buttonLink ? (
              <Link
                href={buttonLink}
                onClick={buttonOnClick}
                className={`shared-cta-pill ${pillVariantClass[buttonVariant] || pillVariantClass.primary} w-full sm:w-auto no-underline hover:no-underline focus:no-underline`}
              >
                {buttonText}
              </Link>
            ) : (
              <>
                <Link
                  href="/schedule-demo"
                  onClick={primaryOnClick}
                  className="shared-cta-pill shared-cta-pill--primary w-full sm:w-auto no-underline hover:no-underline focus:no-underline"
                >
                  Schedule a Demo
                </Link>
                <Link
                  href="https://kahana.io/contact"
                  onClick={secondaryOnClick}
                  className="shared-cta-pill shared-cta-pill--secondary w-full sm:w-auto no-underline hover:no-underline focus:no-underline"
                >
                  Get in Touch
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SharedCTA;