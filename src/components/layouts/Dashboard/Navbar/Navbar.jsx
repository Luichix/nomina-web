import React from 'react'
import classNames from 'classnames'
import styles from './Navbar.module.css'
import { FaBars } from 'react-icons/fa'

function Navbar({ nav, handleNav }) {
  return (
    <header id="header" className={styles.header}>
      <div className={styles.container}>
        <span className={styles.bar} onClick={handleNav}>
          <FaBars className={classNames(styles[nav])} />
        </span>
        <h2 className={styles.title}>Nomina</h2>
      </div>
    </header>
  )
}

export default Navbar
