import React, { useState } from 'react'
import styles from './DashboardLayout.module.css'
import Navbar from './Navbar'
import Sidenav from './Sidenav'
import Kit from './Kit'
import { Outlet } from 'react-router-dom'

export const DashboardLayout = () => {
  const [nav, setNav] = useState('hidden')

  const handleNav = () => {
    if (nav === 'visible') setNav('hidden')
    else setNav('visible')
  }

  return (
    <>
      <Navbar nav={nav} handleNav={handleNav} />
      <Sidenav nav={nav} handleNav={handleNav} />
      <div className={styles.container}>
        <div className={styles.group}>
          <div className={styles.tools}>
            <Kit />
          </div>
          <div className={styles.grid}>
            <div className={styles.spacer}></div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}
export default DashboardLayout
