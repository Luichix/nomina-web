'use client';
import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';
import { ImFire } from 'react-icons/im';
import { BsFillInfoSquareFill } from 'react-icons/bs';
import { SiCheckmarx } from 'react-icons/si';
import { TiWarning } from 'react-icons/ti';

interface AlertProps {
  message: string;
  type: string;
}

export const Alert = ({ message, type }: AlertProps) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    let isShow = true;
    if (isShow) {
      if (message) {
        setShow(true);
        setInterval(() => {
          setShow(false);
        }, 5000);
      }
    }
    return () => {
      isShow = false;
    };
  }, [message]);
  return (
    <div
      className={classNames(styles.alert, {
        [styles.show]: show,
        [styles.hidden]: !show,
      })}
    >
      <div className={classNames(styles.icon, styles[`${type}Icon`])}>
        {type === 'error' && <ImFire />}
        {type === 'info' && <BsFillInfoSquareFill />}
        {type === 'success' && <SiCheckmarx />}
        {type === 'warning' && <TiWarning />}
      </div>
      <div className={classNames(styles.message, styles[`${type}Message`])}>
        {message}
      </div>
    </div>
  );
};

export default Alert;
