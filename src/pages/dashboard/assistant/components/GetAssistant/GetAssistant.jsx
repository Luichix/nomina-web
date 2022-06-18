import React, { useState, useEffect } from 'react'
import styles from '../../Assistant.module.css'
import Button from '../../../../../components/common/Button'
import { Link } from 'react-router-dom'
import { useLazyQuery } from '@apollo/client'
import { GET_FREE_ASSISTANTS } from '../../../../../services/graphql/query/assistant.query'
import { useSelector } from 'react-redux'

const GetAssistant = ({
  openModal,
  setForm,
  form,
  setError,
  assistantState,
}) => {
  const { uid } = useSelector((state) => state.user)
  const [getQuery, { loading, error, data }] = useLazyQuery(GET_FREE_ASSISTANTS)
  const [call, setCall] = useState(false)
  useEffect(() => {
    if (loading) setForm(assistantState)
    if (error) setError(error)
    if (data) {
      setForm({
        ...form,
        ...data.getFreeAssistants,
        description: '',
        uid: uid,
      })
      openModal()
    }
  }, [call, data])

  const handleClick = () => {
    console.log('handleClick')
    if (call) {
      setCall(false)
    } else {
      setCall(true)
    }
    getQuery()
  }

  return (
    <div className={styles.section}>
      <h3 className={styles.title}>Solicitar Asistente</h3>
      <div className={styles.group}>
        <p className={styles.text}>
          Como primer paso para crear nuestro asistente, presione el botón
          &nbsp;
          <b>Obtener Asistente</b>, este creará un espacio de trabajo y asignará
          un identificador único a su asistente. Si quieres más información
          click &nbsp;
          <Link to="/account" className={styles.link}>
            aqui...
          </Link>
        </p>
      </div>
      <Button
        onClick={handleClick}
        info="primary"
        size="large"
        style={styles.position}
      >
        Obtener Asistente
      </Button>
    </div>
  )
}

export default GetAssistant
