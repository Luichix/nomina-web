import React, { useEffect } from 'react'
import styles from './Setting.module.css'
import { Outlet, Link } from 'react-router-dom'
import Title from '../../../components/common/Title'

const Setting = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className={styles.container}>
        <div className={styles.group}>
          <Title style={styles.title}>Configuración</Title>
          <hr className={styles.hr} />
          <div className={styles.list}>
            <Link className={styles.link} to="/setting/time">
              Tiempo
              <hr />
            </Link>
            <Link className={styles.link} to="/setting/payment">
              Pagos
              <hr />
            </Link>
            <Link className={styles.link} to="/setting/workday">
              Jornadas
              <hr />
            </Link>
            <Link className={styles.link} to="/setting/overtime">
              Horas extras
              <hr />
            </Link>
            <Link className={styles.link} to="/setting/holidays">
              Vacaciones
              <hr />
            </Link>
            <Link className={styles.link} to="/setting/contract">
              Contrato
              <hr />
            </Link>
            <Link className={styles.link} to="/setting/regimens">
              Régimen
              <hr />
            </Link>
            <Link className={styles.link} to="/setting/taxes">
              Impuestos
              <hr />
            </Link>
            <Link className={styles.link} to="/setting/users">
              Usuarios
              <hr />
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Setting
