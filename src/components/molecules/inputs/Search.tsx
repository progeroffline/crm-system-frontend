import { useEffect, useRef, useState } from 'react';
import InputFieldProps from './DefaultProps';
import { mergeClassNames } from '@/lib/utils';

interface SearchInputFieldProps extends InputFieldProps {
  suggestions: string[];
}

const SearchInputField: React.FC<SearchInputFieldProps> = ({
  className,
  label,
  suggestions,
  placeholder,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inputValue) {
      const filtered = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setDropdownOpen(filtered.length > 0);
    } else {
      setFilteredSuggestions([]);
      setDropdownOpen(false);
    }
  }, [inputValue]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setDropdownOpen(false);
  };

  return (
    <div
      className={mergeClassNames([className, 'dropdown', isDropdownOpen ? 'dropdown-open' : ''])}
      ref={wrapperRef}
    >
      <legend className="w-full fieldset-legend text-base">{label}</legend>
      <input
        type="text"
        placeholder={placeholder}
        className="input input-bordered"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={() => inputValue && setDropdownOpen(true)}
      />
      {isDropdownOpen && (
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-full mt-2"
        >
          {filteredSuggestions.map((suggestion, index) => (
            <li key={index}>
              <a onClick={() => handleSuggestionClick(suggestion)}>{suggestion}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchInputField;
