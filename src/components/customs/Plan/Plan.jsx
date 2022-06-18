import React from 'react'
import styles from './Plan.module.css'
import { BsCheck2 } from 'react-icons/bs'
import Title from '../../common/Title'
import PropTypes from 'prop-types'

function Plan({ data }) {
  const handleClick = (event) => {
    event.preventDefault()
  }
  return (
    <div className={styles.typePlan}>
      <div className={styles.line}></div>
      <Title size="md" color="primary" isCentered={true}>
        {data.title}
      </Title>
      <span className={styles.limitPlan}>
        <b>{data.subtitle}</b>
      </span>
      <div className={styles.points}>
        {data.points.map((item, index) => {
          return (
            <div key={index} className={styles.item}>
              <div className={styles.icon}>
                <BsCheck2 />
              </div>
              <span className={styles.text}>{item}</span>
            </div>
          )
        })}
      </div>
      <div className={styles.price}>
        {/* <span className={styles.value}>
          {data.value}
          <span className={styles.sign}>{data.currency}</span>
        </span> */}
        <button onClick={handleClick} className={styles.button}>
          {/* {data.button} */}
        </button>
      </div>
    </div>
  )
}

export default Plan

Plan.propTypes = {
  data: PropTypes.object.isRequired,
}
