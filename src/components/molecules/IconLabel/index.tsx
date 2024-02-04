import React from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';

interface IconLabelProps extends React.PropsWithChildren {
  label: string;
  handleClick: () => void;
  iconType: 'success' | 'error' | 'warning' | 'info' | 'normal';
}

export const IconLabel = ({
  label,
  handleClick,
  children,
  iconType = 'normal',
}: IconLabelProps) => {
  return (
    <div className={classNames(styles.iconLabel)}>
      <span className={styles.label}>{label}</span>
      <i
        className={classNames(styles.icon, [styles[iconType]])}
        onClick={handleClick}
      >
        {children}
      </i>
    </div>
  );
};

export default IconLabel;
