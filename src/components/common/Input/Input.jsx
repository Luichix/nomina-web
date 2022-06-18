import React from 'react'
import classNames from 'classnames'
import styles from './Input.module.css'
import PropTypes from 'prop-types'

const Input = ({
  name,
  type,
  info,
  placeholder,
  value,
  changeHandler = () => {},
  keyUpHandler = () => {},
  blurHandler = () => {},
  disabled = false,
  required = true,
}) => {
  return (
    <input
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      className={classNames(styles.input, styles[info])}
      onChange={changeHandler}
      onKeyUp={keyUpHandler}
      onBlur={blurHandler}
      disabled={disabled}
      required={required}
    />
  )
}

export default Input

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  info: PropTypes.oneOf(['success', 'error', 'warning', 'info', 'normal']),
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
  keyUpHandler: PropTypes.func,
  blurHandler: PropTypes.func,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
}
