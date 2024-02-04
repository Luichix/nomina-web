import React from 'react';
import styles from './styles.module.css';
import { Title } from '@/components/atom';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <Title>Payroll App</Title>
      </div>
      <div className={styles.info}>
        <p>luisreynaldo.pch@gmail.com</p>
        <p>Copyright © 2022 Luichix. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
