import React from 'react'
import { AiFillCloseCircle, AiFillCheckCircle } from 'react-icons/ai'
import InfoText from '../InfoText'
import PropTypes from 'prop-types'
import styles from './InputGroup.module.css'
import classNames from 'classnames'

function InputGroup({
  name,
  text,
  message,
  info = null,
  valid,
  children,
  order = 'columned',
}) {
  return (
    <div className={classNames(styles.labelGroup, styles[order])}>
      <label htmlFor={name} className={classNames(styles.label, styles[info])}>
        {text}
      </label>
      <div className={styles.container}>
        <div className={styles.inputGroup}>
          {children}
          <div className={styles.iconPlace}>
            <i key="check" className={classNames(styles[info])}>
              {info ? (
                valid ? (
                  <AiFillCheckCircle />
                ) : (
                  <AiFillCloseCircle />
                )
              ) : (
                ''
              )}
            </i>
          </div>
        </div>
        <div className={styles.message}>
          {info && message && <InfoText info={info} message={message} />}
        </div>
      </div>
    </div>
  )
}

export default InputGroup

InputGroup.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string.isRequired,
  message: PropTypes.string,
  info: PropTypes.oneOf(['success', 'error', 'normal']),
  valid: PropTypes.bool,
  children: PropTypes.node,
  order: PropTypes.oneOf(['columned', 'rowed']),
}
