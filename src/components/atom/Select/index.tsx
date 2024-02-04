import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.css';

interface SelectProps {
  info?: 'success' | 'error' | 'warning' | 'info' | 'normal';
  name: string;
  value: string;
  setState: (value: string) => void;
  option?: string;
  data: Record<string, string>[];
  blurHandler?: () => void;
  tag?: string;
  valor?: string;
  size?: 'md' | 'xs' | 'sm';
  disabled?: boolean;
}

export const Select = ({
  name,
  value,
  setState,
  option,
  data,
  info = 'normal',
  blurHandler,
  tag = 'label',
  valor = 'value',
  size = 'md',
  disabled = false,
}: SelectProps) => {
  const changeHandler = (event: { target: { value: string } }) => {
    setState(event.target.value.trim());
  };

  return (
    <select
      id={name}
      value={value}
      onChange={changeHandler}
      className={classNames(styles.select, styles[size], styles[info])}
      onBlur={blurHandler}
      disabled={disabled}
    >
      <option value="" defaultValue="" disabled={disabled}>
        {option}
      </option>
      {data &&
        data.map((e, i) => (
          <option key={i} value={e[valor]}>
            {e[tag]}
          </option>
        ))}
    </select>
  );
};

export default Select;
