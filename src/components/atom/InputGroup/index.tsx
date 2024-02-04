import React from 'react';
import { AiFillCloseCircle, AiFillCheckCircle } from 'react-icons/ai';
import InfoText from '../InfoText';
import styles from './styles.module.css';
import classNames from 'classnames';

interface InputGroupProps extends React.PropsWithChildren {
  name: string;
  label?: string;
  message?: string;
  info?: 'success' | 'error' | 'normal';
  valid?: boolean;
  order?: 'columned' | 'rowed';
  position?: 'outside' | 'inside';
  alert?: boolean;
}

export function InputGroup({
  name,
  label,
  message,
  info = 'normal',
  valid,
  children,
  order = 'columned',
  position = 'outside',
  alert = true,
}: InputGroupProps) {
  return (
    <div className={classNames(styles.inputGroup, styles[order])}>
      <label
        htmlFor={name}
        className={classNames(styles.label, [styles[`${info}}`]])}
      >
        {label}
      </label>
      <div className={styles.group}>
        <div className={styles.input}>
          {children}
          {alert && (
            <div className={classNames(styles.icon, styles[position])}>
              <i key="check" className={classNames(styles[info])}>
                {info ? (
                  valid ? (
                    <AiFillCheckCircle />
                  ) : (
                    <AiFillCloseCircle />
                  )
                ) : (
                  ''
                )}
              </i>
            </div>
          )}
        </div>
        {alert && (
          <div className={styles.message}>
            {info && message && <InfoText info={info} message={message} />}
          </div>
        )}
      </div>
    </div>
  );
}

export default InputGroup;
