import React from 'react'
import PropTypes from 'prop-types'
import styles from './Card.module.css'
import classNames from 'classnames'
import { options } from './constants'

const Card = ({
  color,
  size,
  isClickable,
  isDraggable,
  handleClick = () => {},
  children,
}) => {
  return (
    <div
      onClick={handleClick}
      className={classNames(styles.card, styles[color], styles[size], {
        [styles.isClickable]: isClickable,
        [styles.isDraggable]: isDraggable,
      })}
    >
      {children}
    </div>
  )
}

export default Card

Card.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
  isClickable: PropTypes.bool,
  isDraggable: PropTypes.bool,
}
