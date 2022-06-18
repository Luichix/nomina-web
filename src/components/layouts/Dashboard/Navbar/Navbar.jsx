import React from 'react'
import classNames from 'classnames'
import styles from './Navbar.module.css'
import { getAuth, signOut } from 'firebase/auth'
import { FaBars } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import firebaseApp from '../../../../services/firebase/firebase'

function Navbar({ nav, handleNav }) {
  let navigate = useNavigate()
  const auth = getAuth(firebaseApp)

  const handleLogout = async () => {
    await signOut(auth)
      .then(() => {
        navigate('/', { replace: true })
      })
      .catch((error) => {
        console.log('Capturando error', error)
      })
  }
  return (
    <header id="header" className={styles.header}>
      <div className={styles.container}>
        <span className={styles.bar} onClick={handleNav}>
          <FaBars className={classNames(styles[nav])} />
        </span>
        <h2 className={styles.title}>Gogidit</h2>
      </div>
      <button className={styles.button} onClick={handleLogout}>
        Log out
      </button>
    </header>
  )
}

export default Navbar
