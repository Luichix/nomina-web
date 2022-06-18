import React from 'react'
import styles from './ButtonPar.module.css'
import Button from '../../common/Button'
import { GiCancel } from 'react-icons/gi'
import { FaSave } from 'react-icons/fa'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const ButtonPar = ({
  cancelClick,
  submitClick,
  textSubmit = 'Save',
  type = 'button',
  display = 'visible',
  style,
}) => {
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
  )
}

export default ButtonPar

ButtonPar.propTypes = {
  cancelClick: PropTypes.func,
  submitClick: PropTypes.func,
  textSubmit: PropTypes.string,
  type: PropTypes.string,
  display: PropTypes.string,
}
