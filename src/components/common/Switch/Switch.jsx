import React from 'react'
import styles from './Switch.module.css'

const Switch = ({ name, checked, checkedHandler = () => {} }) => {
  return (
    <div className={styles.switch}>
      <input
        id={name}
        type="checkbox"
        checked={checked}
        className={styles.input}
        onClick={checkedHandler}
      />
      <label htmlFor={name} className={styles.button}></label>
    </div>
  )
}

export default Switch
