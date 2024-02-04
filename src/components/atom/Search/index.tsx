'use client';
import React, { useRef } from 'react';
import styles from './styles.module.css';

interface SearchProps extends React.PropsWithChildren {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  handleSearch: (search?: string) => void;
}

export const Search = ({
  children,
  placeholder,
  value = '',
  onChange,
  handleSearch,
}: SearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current?.value === '') {
      inputRef.current.focus();
      handleSearch('');
    } else if (inputRef.current?.value !== '') {
      handleSearch(inputRef.current?.value);
      onChange('');
    }
  };
  return (
    <div className={styles.search}>
      <input
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.input}
        ref={inputRef}
      />
      <button className={styles.icon} onClick={handleClick}>
        {children}
      </button>
    </div>
  );
};

export default Search;
