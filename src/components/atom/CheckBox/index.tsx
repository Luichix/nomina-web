import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.css';

interface CheckBoxProps {
  visible: 'visible';
  checked: boolean;
  checkedHandler: () => void;
}

export const CheckBox = ({
  visible = 'visible',
  checked,
  checkedHandler = () => {},
}: CheckBoxProps) => {
  return (
    <span className={classNames(styles.content, [styles[visible]])}>
      <label className={classNames(styles.contentCheck)}>
        <input
          type="checkbox"
          checked={checked}
          onClick={checkedHandler}
          className={styles.checkbox}
          readOnly
        />
        <span className={styles.checkmark}></span>
      </label>
    </span>
  );
};

export default CheckBox;
