import React, { useContext, useState } from 'react'
import classNames from 'classnames'
import styles from './Navbar.module.css'
import ButtonTheme from '@Components/customs/ButtonTheme'
import { ThemeContext } from '@Contexts/index'
import { FaBars } from 'react-icons/fa'

function Navbar({ nav, handleNav }: { nav: string; handleNav: () => void }) {
  const { theme, changeTheme } = useContext(ThemeContext)
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
        themeHandler={changeTheme}
        checked={checked}
      />
    </header>
  )
}

export default Navbar
