import React, { useRef } from 'react'
import styles from './Search.module.css'
import PropTypes from 'prop-types'

const Search = ({
  children,
  placeholder,
  value = '',
  onChange,
  handleSearch,
}) => {
  const inputRef = useRef(null)

  const handleClick = () => {
    if (inputRef.current.value === '') {
      inputRef.current.focus()
      handleSearch('')
    } else if (inputRef.current.value !== '') {
      handleSearch(inputRef.current.value)
      onChange('')
    }
  }
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
  )
}

export default Search

Search.prototype = {
  children: PropTypes.node.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  handleSearch: PropTypes.func,
}
