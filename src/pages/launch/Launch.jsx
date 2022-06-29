import React, { useContext } from 'react'
import Title from '../../components/common/Title'
import styles from './Launch.module.css'
import ThemeContext from '../../contexts/ThemeContext'
import Pack from '../../components/common/Pack'
function Launch() {
  const { theme } = useContext(ThemeContext)
  return (
    <Pack theme={theme}>
      <div className={styles.launch}>
        <Title color="primary" theme={theme}>
          Launch
        </Title>
      </div>
    </Pack>
  )
}

export default Launch
