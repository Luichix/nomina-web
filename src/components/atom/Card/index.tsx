import React from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';

interface CardProps extends React.PropsWithChildren {
  color: 'base' | 'primary' | 'secondary';
  size: 'sm' | 'md' | 'lg';
  isClickable: Boolean;
  isDraggable: Boolean;
  handleClick: () => void;
}

export const Card = ({
  color,
  size,
  isClickable,
  isDraggable,
  handleClick = () => {},
  children,
}: CardProps) => {
  return (
    <div
      onClick={handleClick}
      className={classNames(styles.card, styles[color], styles[size], {
        [styles.isClickable]: isClickable,
        [styles.isDraggable]: isDraggable,
      })}
    >
      {children}
    </div>
  );
};

export default Card;
