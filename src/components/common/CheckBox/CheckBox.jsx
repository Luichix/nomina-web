import React from 'react'
import classNames from 'classnames'
import styles from './CheckBox.module.css'
import PropTypes from 'prop-types'

const CheckBox = ({
  visible = 'visible',
  checked,
  checkedHandler = () => {},
}) => {
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
  )
}

export default CheckBox

CheckBox.propTypes = {
  visible: PropTypes.string,
  checked: PropTypes.bool,
  checkedHandler: PropTypes.func,
}
