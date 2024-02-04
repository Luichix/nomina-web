import React, { Dispatch, SetStateAction } from 'react';
import classNames from 'classnames';
import styles from './styles.module.css';

interface InputProps {
  name?: string;
  type?: string;
  info?: 'success' | 'error' | 'warning' | 'info' | 'normal';
  placeholder?: string;
  value: string;
  changeHandler: Dispatch<SetStateAction<string>>;
  keyUpHandler?: () => void;
  blurHandler?: () => void;
  disabled?: boolean;
  required?: boolean;
  size?: 'md' | 'xs' | 'sm';
}

export const Input = ({
  name,
  type,
  info = 'normal',
  placeholder,
  value,
  changeHandler = () => {},
  keyUpHandler = () => {},
  blurHandler = () => {},
  disabled = false,
  required = true,
  size = 'md',
}: InputProps) => {
  return (
    <input
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      className={classNames(styles.input, styles[size], styles[info])}
      onChange={({ target }) => changeHandler(target.value)}
      onKeyUp={keyUpHandler}
      onBlur={blurHandler}
      disabled={disabled}
      required={required}
    />
  );
};

export default Input;
