import React from 'react'
import styles from './Title.module.css'
import { TitleProps } from './types'
import classNames from 'classnames'

export const Title = ({
  children,
  theme = 'light',
  color = 'base',
  size = 'md',
  weight = 'bold',
  isCentered,
  isInline,
  style,
}: TitleProps) => {
  return (
    <h2
      className={classNames(
        styles.title,
        styles[size],
        styles[weight],
        {
          [styles.theme]: theme === 'dark',
          [styles[color]]: theme === 'light',
        },
        {
          [styles.isCentered]: isCentered,
          [styles.isInline]: isInline,
        },
        style
      )}
    >
      {children}
    </h2>
  )
}

export default Title
