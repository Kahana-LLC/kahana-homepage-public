import { trackConversion } from "./analytics";

// Demo request tracking
export const trackDemoRequest = (source, additionalData = {}) => {
  trackConversion("demo_request", 1, {
    source,
    timestamp: new Date().toISOString(),
    url: window.location.href,
    ...additionalData,
  });
};

// Quote request tracking
export const trackQuoteRequest = (source, additionalData = {}) => {
  trackConversion("quote_request", 1, {
    source,
    timestamp: new Date().toISOString(),
    url: window.location.href,
    ...additionalData,
  });
};

// Contact form submission tracking
export const trackContactSubmission = (formType, additionalData = {}) => {
  trackConversion("contact_submission", 1, {
    form_type: formType,
    timestamp: new Date().toISOString(),
    url: window.location.href,
    ...additionalData,
  });
};

// Partner sign-up tracking
export const trackPartnerSignup = (partnerType, additionalData = {}) => {
  trackConversion("partner_signup", 1, {
    partner_type: partnerType,
    timestamp: new Date().toISOString(),
    url: window.location.href,
    ...additionalData,
  });
};

// Enterprise inquiry tracking
export const trackEnterpriseInquiry = (source, additionalData = {}) => {
  trackConversion("enterprise_inquiry", 1, {
    source,
    timestamp: new Date().toISOString(),
    url: window.location.href,
    ...additionalData,
  });
};

// Sales inquiry tracking
export const trackSalesInquiry = (source, additionalData = {}) => {
  trackConversion("sales_inquiry", 1, {
    source,
    timestamp: new Date().toISOString(),
    url: window.location.href,
    ...additionalData,
  });
};
