'use client';
import React, { useState } from 'react';
import Input from '../Input';
import styles from './styles.module.css';
import classNames from 'classnames';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

export function Password(props: any) {
  const [see, setSee] = useState(false);

  const seeHandle = (event: React.FormEvent) => {
    event.preventDefault();
    if (see) setSee(false);
    else setSee(true);
  };

  return (
    <div className={styles.password}>
      <Input {...props} type={see ? 'text' : 'password'} />
      <button onClick={seeHandle} className={classNames(styles.view)}>
        <i>{see ? <AiFillEye /> : <AiFillEyeInvisible />}</i>
      </button>
    </div>
  );
}

export default Password;
