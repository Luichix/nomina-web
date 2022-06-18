import React, { useState } from 'react'
import styles from './DashboardLayout.module.css'
import Navbar from './Navbar'
import Sidenav from './Sidenav'
import { Outlet } from 'react-router-dom'

export const DashboardLayout = () => {
  const [nav, setNav] = useState('visible')

  const handleNav = () => {
    if (nav === 'visible') setNav('hidden')
    else setNav('visible')
  }

  return (
    <>
      <Navbar nav={nav} handleNav={handleNav} />
      <div className={styles.container}>
        <div className={styles.group}>
          <div className={styles.space}>
            <h2 className={styles.title}>Welcome back</h2>
            <h6 className={styles.subtitle}>Assistant administration</h6>
          </div>
          <div className={styles.grid}>
            <Sidenav nav={nav} handleNav={handleNav} />
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}
export default DashboardLayout
