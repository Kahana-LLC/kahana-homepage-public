import React, { useState, useRef, useEffect } from 'react';

interface DropdownOption {
  value: string;
  label: string;
}

interface SectionDropdownProps {
  options: DropdownOption[];
  defaultText?: string;
  onSelect: (value: string) => void;
  className?: string;
}

const SectionDropdown: React.FC<SectionDropdownProps> = ({
  options,
  defaultText = "Jump to...",
  onSelect,
  className = ""
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(null);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setFocusedIndex(0);
        } else {
          setFocusedIndex((prev) => (prev + 1) % options.length);
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setFocusedIndex(options.length - 1);
        } else {
          setFocusedIndex((prev) => (prev - 1 + options.length) % options.length);
        }
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (isOpen && focusedIndex >= 0) {
          handleOptionSelect(options[focusedIndex]);
        } else {
          setIsOpen(!isOpen);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setFocusedIndex(-1);
        buttonRef.current?.focus();
        break;
    }
  };

  const handleOptionSelect = (option: DropdownOption) => {
    setSelectedOption(option);
    setIsOpen(false);
    setFocusedIndex(-1);
    onSelect(option.value);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setFocusedIndex(-1);
    }
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Dropdown Button */}
      <button
        ref={buttonRef}
        type="button"
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
        className={`
          w-full px-4 py-3 text-left bg-white border border-gray-300 rounded-md shadow-sm
          focus:outline-none focus:ring-2 focus:ring-[#009999] focus:border-transparent
          hover:border-gray-400 transition-all duration-200 ease-in-out
          ${isOpen ? 'ring-2 ring-[#009999] border-transparent' : ''}
        `}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Select section to navigate to"
      >
        <div className="flex items-center justify-between">
          <span className={`${selectedOption ? 'text-[#0A2240]' : 'text-gray-500'}`}>
            {selectedOption ? selectedOption.label : defaultText}
          </span>
          <svg
            className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={`
            absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg
            animate-fadeIn transform transition-all duration-200 ease-in-out
            ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}
          `}
          role="listbox"
          aria-label="Section options"
        >
          <ul className="py-1 max-h-60 overflow-auto">
            {options.map((option, index) => (
              <li
                key={option.value}
                role="option"
                aria-selected={focusedIndex === index}
                className={`
                  px-4 py-3 cursor-pointer transition-all duration-150 ease-in-out
                  ${focusedIndex === index 
                    ? 'bg-[#009999] text-white' 
                    : 'text-[#0A2240] hover:bg-[#009999] hover:text-white'
                  }
                  ${index === 0 ? 'rounded-t-md' : ''}
                  ${index === options.length - 1 ? 'rounded-b-md' : ''}
                `}
                onClick={() => handleOptionSelect(option)}
                onMouseEnter={() => setFocusedIndex(index)}
              >
                <span className="block truncate">
                  {option.label.replace(/^—\s/, '')}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SectionDropdown;

