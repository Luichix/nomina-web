import React, { useEffect, useContext } from 'react'
import styles from './Setting.module.css'
import { Outlet, Link } from 'react-router-dom'
import Pack from '../../../components/common/Pack'
import Title from '../../../components/common/Title'
import ThemeContext from '../../../contexts/ThemeContext'
import Paragraph from '../../../components/common/Paragraph'

const Setting = () => {
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className={styles.container}>
        <Pack theme={theme} style={styles.group}>
          <Title theme={theme} style={styles.title}>
            Configuración
          </Title>
          <hr className={styles.hr} />
          <div className={styles.list}>
            <Link to="/setting/time">
              <Paragraph size="xs" theme={theme} style={styles.link}>
                Tiempo
              </Paragraph>
              <hr className={styles.line} />
            </Link>
            <Link to="/setting/payment">
              <Paragraph size="xs" theme={theme} style={styles.link}>
                Pagos
              </Paragraph>
              <hr className={styles.line} />
            </Link>
            <Link to="/setting/workday">
              <Paragraph size="xs" theme={theme} style={styles.link}>
                Jornadas
              </Paragraph>
              <hr className={styles.line} />
            </Link>
            <Link to="/setting/overtime">
              <Paragraph size="xs" theme={theme} style={styles.link}>
                Horas extras
              </Paragraph>
              <hr className={styles.line} />
            </Link>
            <Link to="/setting/holidays">
              <Paragraph size="xs" theme={theme} style={styles.link}>
                Vacaciones
              </Paragraph>
              <hr className={styles.line} />
            </Link>
            <Link to="/setting/contract">
              <Paragraph size="xs" theme={theme} style={styles.link}>
                Contrato
              </Paragraph>
              <hr className={styles.line} />
            </Link>
            <Link to="/setting/regimens">
              <Paragraph size="xs" theme={theme} style={styles.link}>
                Régimen
              </Paragraph>
              <hr className={styles.line} />
            </Link>
            <Link to="/setting/taxes">
              <Paragraph size="xs" theme={theme} style={styles.link}>
                Impuestos
              </Paragraph>
              <hr className={styles.line} />
            </Link>
            <Link to="/setting/users">
              <Paragraph size="xs" theme={theme} style={styles.link}>
                Usuarios
              </Paragraph>
              <hr
                className={styles.line}
                style={{ backgroundColor: 'transparent' }}
              />
            </Link>
          </div>
        </Pack>
      </div>
      <Outlet />
    </>
  )
}

export default Setting
