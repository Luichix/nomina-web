import React, { PropsWithChildren } from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';

interface ButtonProps extends PropsWithChildren {
  onClick?: () => void;
  info?: string;
  style?: string;
  size?: string;
  type?: 'button' | 'submit';
}

export const Button = ({
  type = 'button',
  size = 'medium',
  children,
  onClick,
  info = 'normal',
  style,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={classNames(styles.button, styles[info], styles[size], style)}
    >
      {children}
    </button>
  );
};

export default Button;
