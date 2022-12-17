import React from 'react'
import classNames from 'classnames'
import styles from './TextArea.module.css'
import PropTypes from 'prop-types'

const TextArea = ({
  name,
  type,
  length = '100',
  info = null,
  placeholder,
  value = '',
  changeHandler,
  keyUpHandler,
  blurHandler,
  disabled = false,
  required = true,
  style,
  autoComplete = 'off',
}) => {
  return (
    <textarea
      name={name}
      maxLength={length}
      value={value}
      placeholder={placeholder}
      className={classNames(styles.textArea, styles[type], styles[info], style)}
      onChange={changeHandler}
      onKeyUp={keyUpHandler}
      onBlur={blurHandler}
      disabled={disabled}
      required={required}
      autoComplete={autoComplete}
    />
  )
}

export default TextArea

TextArea.prototype = {
  name: PropTypes.string,
  type: PropTypes.oneOf(['box', 'table']),
  length: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  info: PropTypes.oneOf(['success', 'error', 'warning', 'info', 'normal']),
  placeholder: PropTypes.string,
  value: PropTypes.string,
  changeHandler: PropTypes.func,
  keyUpHandler: PropTypes.func,
  blurHandler: PropTypes.func,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  autoComplete: PropTypes.string,
}
