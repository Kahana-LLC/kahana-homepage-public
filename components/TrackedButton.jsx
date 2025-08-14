import { trackButtonClick } from '../utils/analytics';

const TrackedButton = ({
  children,
  onClick,
  name,
  location,
  className = 'bg-[#21706c] text-white font-bold rounded-md px-6 py-3 hover:bg-[#15514f] transition-colors',
  ...props
}) => {
  const handleClick = (e) => {
    // Track the button click
    trackButtonClick(name, location, {
      button_text: children,
      url: window.location.href,
      timestamp: new Date().toISOString()
    });

    // Call the original onClick handler if provided
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

export default TrackedButton; 