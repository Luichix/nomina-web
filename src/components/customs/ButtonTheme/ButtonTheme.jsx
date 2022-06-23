import React from 'react'
import styles from './ButtonTheme.module.css'

const ButtonTheme = ({ onClick }) => {
  return (
    <>
      <input
        id="toggle"
        type="checkbox"
        className={styles.input}
        onChange={onClick}
      />
      <label htmlFor="toggle" className={styles.button}></label>
    </>
  )
}

export default ButtonTheme
