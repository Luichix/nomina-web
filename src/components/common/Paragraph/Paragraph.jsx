import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Paragraph.module.css'
import { options } from './constants'

export const Paragraph = ({
  children,
  color = 'base',
  size = 'md',
  weight = 'normal',
  isStriked = false,
  isInline = false,
  isMonospace = false,
  isCentered = false,
  style,
}) => {
  return (
    <p
      className={classNames(
        styles.paragraph,
        styles[color],
        styles[size],
        styles[weight],
        {
          [styles.isStriked]: isStriked,
          [styles.isInline]: isInline,
          [styles.isMonospace]: isMonospace,
          [styles.isCentered]: isCentered,
        },
        style
      )}
    >
      {children}
    </p>
  )
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
  weight: PropTypes.oneOf(options.weights),
  isStriked: PropTypes.bool,
  isInline: PropTypes.bool,
  isCentered: PropTypes.bool,
  isMonospace: PropTypes.bool,
}

export default Paragraph
