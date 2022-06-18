import React from 'react'
import countryList from 'react-select-country-list'
import styles from './Country.module.css'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const countries = countryList().getData()

function Country({ name, value, handleChange, option, info, disabled }) {
  return (
    <select
      id={name}
      name={name}
      value={value}
      onChange={handleChange}
      className={classNames(styles.select, styles[info])}
      disabled={disabled}
    >
      <option value="" defaultValue="" disabled="disabled">
        {option}
      </option>
      {countries.map((e, i) => (
        <option key={i} value={e.value}>
          {e.label}
        </option>
      ))}
    </select>
  )
}

export default Country

Country.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  option: PropTypes.string,
  info: PropTypes.oneOf(['success', 'error', 'warning', 'info', 'normal']),
  disabled: PropTypes.bool,
}
