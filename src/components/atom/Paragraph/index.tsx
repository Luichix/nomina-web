import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.css';

interface ParagraphProps extends React.PropsWithChildren {
  color?: 'base' | 'muted' | 'inverted' | 'primary' | 'tertiary';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  weight?: 'normal' | 'medium' | 'semibold';
  isStriked?: boolean;
  isInline?: boolean;
  isMonospace?: boolean;
  isCentered?: boolean;
  style?: string;
}

export const Paragraph = ({
  children,
  color = 'base',
  size = 'md',
  weight = 'normal',
  isStriked = false,
  isInline = false,
  isMonospace = false,
  isCentered = false,
  style,
}: ParagraphProps) => {
  return (
    <p
      className={classNames(
        styles.paragraph,
        styles[color],
        styles[size],
        styles[weight],
        {
          [styles.isStriked]: isStriked,
          [styles.isInline]: isInline,
          [styles.isMonospace]: isMonospace,
          [styles.isCentered]: isCentered,
        },
        style
      )}
    >
      {children}
    </p>
  );
};

export default Paragraph;
