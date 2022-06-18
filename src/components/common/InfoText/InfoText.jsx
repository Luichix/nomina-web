import React from 'react'
import PropTypes from 'prop-types'
import styles from './InfoText.module.css'
import classNames from 'classnames'
import { BiMessageAltError } from 'react-icons/bi'

function InfoText({ info, message }) {
  return (
    <p className={classNames(styles.textGroup, styles[info])}>
      <i>
        <BiMessageAltError className={classNames(styles.icon)} />
        {message}
      </i>
    </p>
  )
}
export default InfoText

InfoText.propTypes = {
  info: PropTypes.string, // test to check if the error is valid
  message: PropTypes.string, // message to display if the error is valid
}
