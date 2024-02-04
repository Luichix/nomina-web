import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.css';

interface TextAreaProps {
  name: string;
  type: string;
  length?: number;
  info: string;
  placeholder: string;
  value: string;
  changeHandler: () => void;
  keyUpHandler: () => void;
  blurHandler: () => void;
  disabled: boolean;
  required: boolean;
  style: string;
  autoComplete: string;
}

export const TextArea = ({
  name,
  type,
  length = 100,
  info,
  placeholder,
  value = '',
  changeHandler,
  keyUpHandler,
  blurHandler,
  disabled = false,
  required = true,
  style,
  autoComplete = 'off',
}: TextAreaProps) => {
  return (
    <textarea
      name={name}
      maxLength={length}
      value={value}
      placeholder={placeholder}
      className={classNames(styles.textArea, styles[type], styles[info], style)}
      onChange={changeHandler}
      onKeyUp={keyUpHandler}
      onBlur={blurHandler}
      disabled={disabled}
      required={required}
      autoComplete={autoComplete}
    />
  );
};

export default TextArea;
