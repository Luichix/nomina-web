import React, { useContext, useState } from 'react'
import classNames from 'classnames'
import styles from './Navbar.module.css'
import { FaBars } from 'react-icons/fa'
import ButtonTheme from '../../../../components/customs/ButtonTheme'
import ThemeContext from '../../../../contexts/ThemeContext'

function Navbar({ nav, handleNav }) {
  const { theme, handleTheme } = useContext(ThemeContext)
  const [checked, setChecked] = useState(theme === 'dark' ? true : false)

  const handleChecked = () => {
    if (checked) {
      setChecked(false)
    } else {
      setChecked(true)
    }
  }
  return (
    <header id="header" className={classNames(styles.header, styles[theme])}>
      <div className={styles.container}>
        <span className={styles.bar} onClick={handleNav}>
          <FaBars className={classNames(styles[nav])} />
        </span>
        <h2 className={styles.title}>Nomina</h2>
      </div>
      <ButtonTheme
        checkedHandler={handleChecked}
        themeHandler={handleTheme}
        checked={checked}
      />
    </header>
  )
}

export default Navbar
