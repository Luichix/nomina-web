import React from 'react';
import styles from './styles.module.css';
import { Button } from '@/components/atom';
import { GiCancel } from 'react-icons/gi';
import { FaSave } from 'react-icons/fa';
import classNames from 'classnames';

interface ButtonParProps {
  cancelClick: () => void;
  submitClick: () => void;
  textSubmit: string;
  type: 'button';
  display: 'visible';
  style: string;
}

export const ButtonPar = ({
  cancelClick,
  submitClick,
  textSubmit = 'Save',
  type = 'button',
  display = 'visible',
  style,
}: ButtonParProps) => {
  return (
    <div className={classNames(styles.actions, styles[display], style)}>
      <Button onClick={cancelClick} info="danger" size="large">
        <GiCancel />
        Cancel
      </Button>
      <Button onClick={submitClick} info="primary" size="large" type={type}>
        <FaSave />
        {textSubmit}
      </Button>
    </div>
  );
};

export default ButtonPar;
