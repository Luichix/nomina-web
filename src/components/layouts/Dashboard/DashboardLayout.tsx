import React, { useState, useContext, PropsWithChildren } from 'react'
import styles from './DashboardLayout.module.css'
import Navbar from './Navbar'
import Sidenav from './Sidenav'
import classNames from 'classnames'
import { ThemeContext } from '@Contexts/index'

export const DashboardLayout = ({ children }: PropsWithChildren) => {
  const value = useContext(ThemeContext)
  const [nav, setNav] = useState('hidden')

  const handleNav = () => {
    if (nav === 'visible') setNav('hidden')
    else setNav('visible')
  }
  const handleClose = () => {
    if (nav === 'visible') setNav('hidden')
  }

  return (
    <div className={classNames(styles.dashboard, styles[value?.theme])}>
      <Navbar nav={nav} handleNav={handleNav} />
      <Sidenav nav={nav} handleNav={handleClose} />
      {children}
    </div>
  )
}
export default DashboardLayout
