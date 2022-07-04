import React, { useContext } from 'react'
import styles from './Page404.module.css'
import { Link } from 'react-router-dom'
import ocError from '../../assets/oc-error.svg'
import Button from '../../components/common/Button'
import { BsFacebook, BsTwitter, BsWhatsapp, BsInstagram } from 'react-icons/bs'
import ThemeContext from '../../contexts/ThemeContext'
import Pack from '../../components/common/Pack'
import Paragraph from '../../components/common/Paragraph/Paragraph'
import classNames from 'classnames'
import Title from '../../components/common/Title'

function Page404() {
  const { theme } = useContext(ThemeContext)
  return (
    <Pack theme={theme}>
      <div className={styles.container}>
        <header className={styles.header}>
          <a to="/">
            <p className={styles.logo}>
              <Title theme={theme}>Nomina</Title>
            </p>
          </a>
        </header>
        <main className={styles.main}>
          <figure className={styles.figure}>
            <img
              alt="cover"
              src={ocError}
              className={classNames(styles.image, styles[theme])}
            />
          </figure>
          <div className={styles.section}>
            <Paragraph size="sm" isCentered theme={theme}>
              Oops! Looks like you followed a bad link.
            </Paragraph>
            <Paragraph size="sm" isCentered theme={theme}>
              If you think this is a problem with us, please &nbsp;
              <Paragraph size="sm" isCentered isInline theme={theme}>
                <a to="/" className={styles.link}>
                  tell us...
                </a>
              </Paragraph>
            </Paragraph>
          </div>
          <Link to="/" className={styles.space}>
            <Button info="primary" size="large">
              Go back home
            </Button>
          </Link>
        </main>
        <footer className={styles.footer}>
          <div className={styles.section}>
            <Paragraph size="sm" theme={theme} style={styles.rigth}>
              &copy; Luichix - 2022
            </Paragraph>
          </div>
          <div className={styles.section}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <a href="/" target="_blank" rel="noreferrer">
                  <BsFacebook className={styles.icon} />
                </a>
              </li>
              <li className={styles.item}>
                <a href="/" target="_blank" rel="noreferrer">
                  <BsTwitter className={styles.icon} />
                </a>
              </li>
              <li className={styles.item}>
                <a href="/" target="_blank" rel="noreferrer">
                  <BsWhatsapp className={styles.icon} />
                </a>
              </li>
              <li className={styles.item}>
                <a href="/" target="_blank" rel="noreferrer">
                  <BsInstagram className={styles.icon} />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </Pack>
  )
}

export default Page404
