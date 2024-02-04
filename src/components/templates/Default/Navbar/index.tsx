import React, { useState, useContext } from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { Title } from '@/components/atom';
import Link from 'next/link';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Title>Nomina App</Title>
      </div>

      <div
        className={classNames(styles.group, {
          [styles.visible]: open,
          [styles.hidden]: !open,
        })}
      >
        <Link href="/" className={styles.link} onClick={() => setOpen(false)}>
          Home
        </Link>
        <Link
          href="/account"
          className={styles.link}
          onClick={() => setOpen(false)}
        >
          Account
        </Link>
      </div>
      <div className={styles.nav}>
        {open === false ? (
          <i className={styles.button} onClick={() => setOpen(true)}>
            <FaBars />
          </i>
        ) : (
          <i className={styles.button} onClick={() => setOpen(false)}>
            <AiOutlineClose />
          </i>
        )}
      </div>
    </div>
  );
};

export default Navbar;
