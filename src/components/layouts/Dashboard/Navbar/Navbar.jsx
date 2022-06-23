import React, { useContext } from 'react'
import classNames from 'classnames'
import styles from './Navbar.module.css'
import { FaBars } from 'react-icons/fa'
import ButtonTheme from '../../../../components/customs/ButtonTheme'
import ThemeContext from '../../../../contexts/ThemeContext'

function Navbar({ nav, handleNav }) {
  const { theme, handleTheme } = useContext(ThemeContext)

  return (
    <header id="header" className={classNames(styles.header, styles[theme])}>
      <div className={styles.container}>
        <span className={styles.bar} onClick={handleNav}>
          <FaBars className={classNames(styles[nav])} />
        </span>
        <h2 className={styles.title}>Nomina</h2>
      </div>
      <ButtonTheme onClick={handleTheme} />
    </header>
  )
}

export default Navbar
