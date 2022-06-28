import React, { useState, useContext } from 'react'
import styles from './DashboardLayout.module.css'
import Navbar from './Navbar'
import Sidenav from './Sidenav'
import classNames from 'classnames'
import ThemeContext from '../../../contexts/ThemeContext'
import { Outlet } from 'react-router-dom'

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

  return (
    <div className={classNames(styles.dashboard, styles[theme])}>
      <Navbar nav={nav} handleNav={handleNav} />
      <Sidenav nav={nav} handleNav={handleClose} />
      <Outlet />
    </div>
  )
}
export default DashboardLayout
