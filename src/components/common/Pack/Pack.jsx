import React from 'react'
import styles from './Pack.module.css'
import classNames from 'classnames'

const Pack = ({ children, theme, style }) => {
  return (
    <div className={classNames(styles.pack, styles[theme], style)}>
      {children}
    </div>
  )
}

export default Pack
