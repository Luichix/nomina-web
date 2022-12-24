import React from 'react'
import styles from './Button.module.css'
import classNames from 'classnames'
import { ButtonProps } from './types'

const Button = ({
  size = 'medium',
  color,
  children,
  type = 'button',
  onClick,
  style,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={classNames(styles.button, styles[color], styles[size], style)}
    >
      {children}
    </button>
  )
}

export default Button
