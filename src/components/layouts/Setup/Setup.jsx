import React from 'react'
import styles from './Setup.module.css'
import { Outlet } from 'react-router-dom'

const Setup = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.group}>
        <div className={styles.grid}>
          <div className={styles.spacer}></div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Setup
