import React from 'react'
import styles from './Load.module.css'

const Load = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.loader}>
          <div className={styles.inner}></div>
        </div>
      </div>
    </div>
  )
}

export default Load
