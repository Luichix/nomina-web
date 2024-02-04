import React, { ReactNode } from 'react';
import styles from './styles.module.css';

const Setup = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.container}>
      <div className={styles.group}>
        <div className={styles.grid}>
          <div className={styles.spacer}></div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Setup;
