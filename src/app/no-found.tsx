import React, { useContext } from 'react';
import styles from '@/styles/no-found.module.css';
import { Button, Paragraph, Pack } from '@/components/atom';
import Link from 'next/link';

export function NoFound() {
  return (
    <Pack>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.section}>
            <Paragraph size="sm" isCentered>
              ¡Ups! Parece que seguiste un enlace incorrecto.
            </Paragraph>
          </div>
          <Link href="/" className={styles.space}>
            Regresar al inicio
          </Link>
        </main>
      </div>
    </Pack>
  );
}

export default NoFound;
