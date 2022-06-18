import React from 'react'
import styles from './Page404.module.css'
import { Link } from 'react-router-dom'
import ocError from '../../assets/oc-error.svg'
import Button from '../../components/common/Button'
import { BsFacebook, BsTwitter, BsWhatsapp, BsInstagram } from 'react-icons/bs'

function Page404() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <a to="/">
          <img
            className={styles.logo}
            src="https://godigitpage-eyvhte74x-gtavo95.vercel.app/assets/svg/logos/logo.svg"
            alt="Logo"
          />
        </a>
      </header>
      <main className={styles.main}>
        <figure className={styles.figure}>
          <img alt="cover" src={ocError} className={styles.image} />
        </figure>
        <div className={styles.section}>
          <p className={styles.text}>
            Oops! Looks like you followed a bad link.
          </p>
          <p className={styles.text}>
            If you think this is a problem with us, please &nbsp;
            <a to="/" className={styles.link}>
              tell us...
            </a>
          </p>
        </div>
        <Link to="/login" className={styles.space}>
          <Button info="primary" size="large">
            Go back home
          </Button>
        </Link>
      </main>
      <footer className={styles.footer}>
        <div className={styles.section}>
          <p className={styles.rigth}>&copy; Godigit - 2022 </p>
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
  )
}

export default Page404
