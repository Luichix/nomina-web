import React, { Dispatch, SetStateAction } from 'react';
import styles from './styles.module.css';

interface SwitchProps {
  name: string;
  checked: boolean;
  checkedHandler: Dispatch<SetStateAction<boolean>>;
}

export const Switch = ({
  name,
  checked,
  checkedHandler = () => {},
}: SwitchProps) => {
  return (
    <div className={styles.switch}>
      <input
        id={name}
        type="checkbox"
        checked={checked}
        className={styles.input}
        onClick={() => checkedHandler(!checked)}
      />
      <label htmlFor={name} className={styles.button}></label>
    </div>
  );
};

export default Switch;
