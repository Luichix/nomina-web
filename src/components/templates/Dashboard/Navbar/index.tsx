import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.css';
import { FaBars } from 'react-icons/fa';

function Navbar({ nav, handleNav }: { nav: string; handleNav: () => void }) {
  return (
    <header id="header" className={classNames(styles.header)}>
      <div className={styles.container}>
        <span className={styles.bar} onClick={handleNav}>
          <FaBars className={classNames(styles[nav])} />
        </span>
        <h2 className={styles.title}>Nomina</h2>
      </div>
    </header>
  );
}

export default Navbar;
