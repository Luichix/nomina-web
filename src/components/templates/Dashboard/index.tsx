'use client';
import React, { useState, ReactNode } from 'react';
import styles from './styles.module.css';
import Navbar from './Navbar';
import Sidenav from './Sidenav';
import classNames from 'classnames';
import Kit from '../Task/Kit';

export const Dashboard = ({ children }: { children: ReactNode }) => {
  const [nav, setNav] = useState('hidden');

  const handleNav = () => {
    if (nav === 'visible') setNav('hidden');
    else setNav('visible');
  };
  const handleClose = () => {
    if (nav === 'visible') setNav('hidden');
  };

  const handleModal = () => {};

  return (
    <div className={classNames(styles.dashboard)}>
      <Navbar nav={nav} handleNav={handleNav} />
      <Sidenav nav={nav} handleNav={handleClose} />
      <div className={styles.container}>
        <div className={styles.section}>{children}</div>
      </div>
    </div>
  );
};
export default Dashboard;
