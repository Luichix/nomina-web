import React from 'react'
import { AiFillCloseCircle, AiFillCheckCircle } from 'react-icons/ai'
import InfoText from '../InfoText'
import PropTypes from 'prop-types'
import styles from './InputGroup.module.css'
import classNames from 'classnames'

function InputGroup({
  name,
  label,
  message,
  info = null,
  valid,
  children,
  order = 'columned',
  position = 'outside',
  alert = true,
  theme = 'light',
}) {
  return (
    <div className={classNames(styles.inputGroup, styles[order])}>
      <label
        htmlFor={name}
        className={classNames(styles.label, [styles[`${info}-${theme}`]])}
      >
        {label}
      </label>
      <div className={styles.group}>
        <div className={styles.input}>
          {children}
          {alert && (
            <div className={classNames(styles.icon, styles[position])}>
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
          )}
        </div>
        {alert && (
          <div className={styles.message}>
            {info && message && <InfoText info={info} message={message} />}
          </div>
        )}
      </div>
    </div>
  )
}

export default InputGroup

InputGroup.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
  message: PropTypes.string,
  info: PropTypes.oneOf(['success', 'error', 'normal']),
  valid: PropTypes.bool,
  children: PropTypes.node,
  order: PropTypes.oneOf(['columned', 'rowed']),
}
