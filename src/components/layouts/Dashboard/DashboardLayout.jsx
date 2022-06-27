import React, { useState, useContext, useRef } from 'react'
import styles from './DashboardLayout.module.css'
import Navbar from './Navbar'
import Sidenav from './Sidenav'
import Kit from './Kit'
import classNames from 'classnames'
import ThemeContext from '../../../contexts/ThemeContext'
import { Outlet } from 'react-router-dom'
import Person from '../../tasks/person/Person'
import Modal from '../../common/Modal'

export const DashboardLayout = () => {
  const { theme } = useContext(ThemeContext)
  const [nav, setNav] = useState('hidden')

  const handleNav = () => {
    if (nav === 'visible') setNav('hidden')
    else setNav('visible')
  }
  const handleClose = () => {
    if (nav === 'visible') setNav('hidden')
  }

  const modalRef = useRef(null)
  const openModal = () => {
    modalRef.current.style.display = 'flex'
  }
  const closeModal = (event) => {
    event.preventDefault()
    modalRef.current.style.display = 'none'
  }

  return (
    <div className={classNames(styles.dashboard, styles[theme])}>
      <Navbar nav={nav} handleNav={handleNav} />
      <Sidenav nav={nav} handleNav={handleClose} />
      <Modal refModal={modalRef} closeModal={closeModal}>
        <Person closeModal={closeModal} />
      </Modal>
      <div className={styles.container}>
        <div className={styles.group}>
          <div className={styles.tools}>
            <Kit handleModal={openModal} />
          </div>
          <div className={styles.grid}>
            <div className={styles.spacer}></div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
export default DashboardLayout
