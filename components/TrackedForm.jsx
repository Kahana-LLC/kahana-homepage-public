import { trackFormInteraction, trackContactSubmission } from '../utils/analytics';
import { trackDemoRequest, trackQuoteRequest, trackEnterpriseInquiry } from '../utils/conversionTracking';

const TrackedForm = ({
  children,
  onSubmit,
  formType,
  source,
  className = '',
  ...props
}) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Track form interaction
    trackFormInteraction(formType, 'submit', {
      source,
      url: window.location.href,
      timestamp: new Date().toISOString()
    });

    // Track specific conversion based on form type
    switch (formType) {
      case 'demo':
        trackDemoRequest(source);
        break;
      case 'quote':
        trackQuoteRequest(source);
        break;
      case 'enterprise':
        trackEnterpriseInquiry(source);
        break;
      case 'contact':
        trackContactSubmission(formType, { source });
        break;
      default:
        trackContactSubmission(formType, { source });
    }

    // Call the original onSubmit handler if provided
    if (onSubmit) {
      await onSubmit(e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={className}
      {...props}
    >
      {children}
    </form>
  );
};

export default TrackedForm; 