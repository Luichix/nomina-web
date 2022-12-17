import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Bold.module.css'

const Bold = ({ children, bold, line, unique, styleUnique = 'bigBold' }) => {
  const boldReplace = (str, bold, line) => {
    if (bold) {
      const bolded = bold.split(' ')
      const lined = line.split(' ')
      const array = str.split(' ')
      return (
        <span className={styles.text}>
          {array.map((item, index) => {
            if (item === unique) {
              return (
                <span key={index} className={classNames(styles[styleUnique])}>
                  <b>{item}</b>
                  &nbsp;
                </span>
              )
            } else if (lined.includes(item)) {
              return (
                <span key={index} className={classNames(styles.lined)}>
                  <br />
                  <b>{item}</b>
                  &nbsp;
                </span>
              )
            } else if (bolded.includes(item)) {
              return (
                <span key={index} className={classNames(styles.bold)}>
                  <b>{item}</b>
                  &nbsp;
                </span>
              )
            } else {
              return <span key={index}> {item}&nbsp;</span>
            }
          })}
        </span>
      )
    } else return <span>str</span>
  }
  const text = boldReplace(children, bold, line, unique)

  return <>{text}</>
}

export default Bold

Bold.propTypes = {
  children: PropTypes.string.isRequired,
  bold: PropTypes.string,
  line: PropTypes.string,
  unique: PropTypes.string,
  styleUnique: PropTypes.oneOf(['bigBold', 'primaryLine']),
}
