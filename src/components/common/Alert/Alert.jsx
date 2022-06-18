import React, { useState, useEffect } from 'react'
import styles from './Alert.module.css'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { ImFire } from 'react-icons/im'
import { BsFillInfoSquareFill } from 'react-icons/bs'
import { SiCheckmarx } from 'react-icons/si'
import { TiWarning } from 'react-icons/ti'

const Alert = ({ message, type }) => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    let isShow = true
    if (isShow) {
      if (message) {
        setShow(true)
        setInterval(() => {
          setShow(false)
        }, 5000)
      }
    }
    return () => {
      isShow = false
    }
  }, [message])
  return (
    <div
      className={classNames(styles.alert, {
        [styles.show]: show,
        [styles.hidden]: !show,
      })}
    >
      <div className={classNames(styles.icon, styles[`${type}Icon`])}>
        {type === 'error' && <ImFire />}
        {type === 'info' && <BsFillInfoSquareFill />}
        {type === 'success' && <SiCheckmarx />}
        {type === 'warning' && <TiWarning />}
      </div>
      <div className={classNames(styles.message, styles[`${type}Message`])}>
        {message}
      </div>
    </div>
  )
}

export default Alert

Alert.prototype = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}
