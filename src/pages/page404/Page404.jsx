import React, { useContext } from 'react'
import styles from './Page404.module.css'
import { Link } from 'react-router-dom'
import Button from '../../components/common/Button'
import ThemeContext from '../../contexts/ThemeContext'
import Pack from '../../components/common/Pack'
import Paragraph from '../../components/common/Paragraph/Paragraph'

function Page404() {
  const { theme } = useContext(ThemeContext)
  return (
    <Pack theme={theme}>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.section}>
            <Paragraph size="sm" isCentered theme={theme}>
              ¡Ups! Parece que seguiste un enlace incorrecto.
            </Paragraph>
          </div>
          <Link to="/" className={styles.space}>
            <Button info="primary" size="large">
              Regresar al inicio
            </Button>
          </Link>
        </main>
      </div>
    </Pack>
  )
}

export default Page404
