import React from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';

interface TitleProps extends React.PropsWithChildren {
  color?: 'base' | 'primary' | 'secondary' | 'tertiary' | 'inverted';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  weight?: 'normal' | 'bold';
  isCentered?: boolean;
  isInline?: boolean;
  style?: string;
}

export const Title = ({
  children,
  color = 'base',
  size = 'md',
  weight = 'bold',
  isCentered,
  isInline,
  style,
}: TitleProps) => {
  return (
    <h2
      className={classNames(
        styles.title,
        styles[size],
        styles[weight],
        styles[color],
        {
          [styles.isCentered]: isCentered,
          [styles.isInline]: isInline,
        },
        style
      )}
    >
      {children}
    </h2>
  );
};

export default Title;
