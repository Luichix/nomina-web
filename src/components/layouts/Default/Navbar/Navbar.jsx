import React, { useState, useContext } from 'react'
import styles from './Navbar.module.css'
import classNames from 'classnames'
import AuthContext from '../../../../contexts/AuthContext'
import LanguageContext from '../../../../contexts/LanguageContext'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import word from '../../../../data/navbar.json'
import Title from '../../../../components/common/Title'
import ThemeContext from '../../../../contexts/ThemeContext'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const auth = useContext(AuthContext)
  const { language, handleLanguage } = useContext(LanguageContext)
  const texts = word[language]
  const { theme } = useContext(ThemeContext)

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Title theme={theme}>Nomina</Title>
      </div>

      <div
        className={classNames(styles.group, {
          [styles.visible]: open,
          [styles.hidden]: !open,
        })}
      >
        <Link to="/" className={styles.link} onClick={() => setOpen(false)}>
          {texts.home}
        </Link>
        {/* <Link to="/about" className={styles.link} onClick={() => setOpen(false)}>
          {texts.about}
        </Link>
        <Link to="/blog" className={styles.link} onClick={() => setOpen(false)}>
          {texts.blog}
        </Link>
        <Link to="/contact" className={styles.link} onClick={() => setOpen(false)}>
          {texts.contact}
        </Link> */}
        {auth ? (
          <Link
            to="/account"
            className={styles.link}
            onClick={() => setOpen(false)}
          >
            {texts.dashboard}
          </Link>
        ) : (
          <>
            <Link
              to="/login"
              className={styles.link}
              onClick={() => setOpen(false)}
            >
              {texts.login}
            </Link>
            <Link
              to="/signup"
              className={styles.register}
              onClick={() => setOpen(false)}
            >
              {texts.register}
            </Link>
          </>
        )}
      </div>
      <div className={styles.space}>
        <select
          name="language"
          onChange={handleLanguage}
          className={styles.select}
        >
          <option value="en">EN</option>
          <option value="es">ES</option>
        </select>
      </div>
      <div className={styles.nav}>
        {open === false ? (
          <i className={styles.button} onClick={() => setOpen(true)}>
            <FaBars />
          </i>
        ) : (
          <i className={styles.button} onClick={() => setOpen(false)}>
            <AiOutlineClose />
          </i>
        )}
      </div>
    </div>
  )
}

export default Navbar
