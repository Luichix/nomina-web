import React from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';

interface PackProps extends React.PropsWithChildren {
  style?: string;
}

export const Pack = ({ children, style }: PackProps) => {
  return <div className={classNames(styles.pack, style)}>{children}</div>;
};

export default Pack;
