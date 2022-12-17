import React from 'react'
import styles from './Frame.module.css'
import PropTypes from 'prop-types'

const Frame = ({ Icon, title, text }) => {
  return (
    <div className={styles.info}>
      <div className={styles.group}>
        <Icon className={styles.icon} />

        <h6 className={styles.title}> {title} </h6>
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  )
}

export default Frame

Frame.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.array.isRequired,
}
