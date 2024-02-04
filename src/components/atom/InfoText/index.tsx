import React from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';
import { BiMessageAltError } from 'react-icons/bi';

interface InfoTextProps {
  info: string;
  message: string;
}

export function InfoText({ info, message }: InfoTextProps) {
  return (
    <p className={classNames(styles.textGroup, styles[info])}>
      <i>
        <BiMessageAltError className={classNames(styles.icon)} />
        {message}
      </i>
    </p>
  );
}
export default InfoText;
