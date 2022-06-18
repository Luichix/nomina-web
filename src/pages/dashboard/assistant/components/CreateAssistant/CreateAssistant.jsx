import React, { useEffect } from 'react'
import styles from '../../Assistant.module.css'
import Button from '../../../../../components/common/Button'
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { UPDATED_CREATED_ASSISTANT } from '../../../../../services/graphql/mutation/user.mutation'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { createAssistant } from '../../../../../services/api/assistant.api'
import { modifyAssistant } from '../../../../../redux/actions/assistant.action'

const CreateAssistant = ({ setError, assistantState }) => {
  const dispatch = useDispatch()
  const { uid } = useSelector((state) => state.user)
  const [createNewAssistant, { loading, error, data }] = useMutation(
    UPDATED_CREATED_ASSISTANT
  )

  useEffect(() => {
    if (loading) {
      setError({ message: 'Loading...', type: 'info' })
    } else if (error) {
      setError({ message: 'Error to load graphql', type: 'error' })
    } else if (data) {
      dispatch(
        modifyAssistant({
          createdAssistant: true,
        })
      )
      setError({ message: 'Assistant Created', type: 'success' })
    }
  }, [loading, error, data])

  const createHandler = (event) => {
    event.preventDefault()

    try {
      let create = {
        workspace_id: assistantState.workspaceId,
        uid: uid,
        language: 'es',
      }

      createAssistant(create).then(() => {
        console.log('success create Assistant')

        createNewAssistant({
          variables: {
            assistantCreated: true,
            uid: uid,
          },
        })
      })
    } catch (error) {
      console.log(error)
      setError({ message: 'Error to createAssistant Api', type: 'error' })
    }
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
        onClick={createHandler}
        info="primary"
        size="large"
        style={styles.position}
      >
        Crear Asistente
      </Button>
    </div>
  )
}

export default CreateAssistant
