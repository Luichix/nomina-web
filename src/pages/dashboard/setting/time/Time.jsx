import React, { useContext } from 'react'
import styles from './Time.module.css'
import Pack from '../../../../components/common/Pack'
import ThemeContext from '../../../../contexts/ThemeContext'

const Time = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <Pack theme={theme}>
      <div className={styles.section}>Hola Probando</div>
    </Pack>
  )
}

export default Time
