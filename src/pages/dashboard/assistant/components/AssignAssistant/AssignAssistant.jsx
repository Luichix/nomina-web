import React, { useState, useEffect } from 'react'
import IconLabel from '../../../../../components/customs/IconLabel'
import InputGroup from '../../../../../components/common/InputGroup'
import Input, { inputHandler } from '../../../../../components/common/Input'
import Select, { selectHandler } from '../../../../../components/common/Select'
import { useInput } from '../../../../../hooks/useInput'
import TextArea, {
  textAreaHandler,
} from '../../../../../components/common/TextArea'
import styles from '../../Assistant.module.css'
import ButtonPar from '../../../../../components/customs/ButtonPar'
import { PROCESS_CREATE_ASSISTANT } from '../../../../../services/graphql/mutation/assistant.mutation'
import { useMutation } from '@apollo/client'
import { adapterAssignAssistant } from '../../../../../utilities/adapters/assignAssistant.adapter'
import { ANSWER_CONSTANT } from '../../../../../constants/answer.constants'
import { useDispatch } from 'react-redux'
import { modifyUser } from '../../../../../redux/actions/user.action'
import { modifyAssistant } from '../../../../../redux/actions/assistant.action'

const AssignAssistant = ({ closeModal, form, setError }) => {
  const dispatch = useDispatch()
  const [processAssistant, { loading, error, data }] = useMutation(
    PROCESS_CREATE_ASSISTANT
  )
  const [load, setLoad] = useState(false)

  const assistantName = useInput({
    name: 'assistantName',
    type: 'text',
    placeholder: 'Please, entry your assistant name',
    handlerMethods: inputHandler,
  })

  const language = useInput({
    name: 'language',
    type: 'object',
    placeholder: 'Please, select your assistant language',
    handlerMethods: selectHandler,
  })

  const description = useInput({
    name: 'description',
    type: 'box',
    placeholder: 'Please, entry your description',
    handlerMethods: textAreaHandler,
  })

  useEffect(() => {
    if (loading) {
      setLoad(true)
    } else if (error) {
      setLoad(false)
      setError({ message: 'Error to load graphql', type: 'error' })
    } else if (data) {
      setLoad(false)
      dispatch(modifyUser({ assistantAsigned: true }))
      setError({ message: 'Assistant Asgined', type: 'success' })
    }
  }, [loading, error, data])

  const submitHandler = (event) => {
    event.preventDefault()
    if (assistantName.valid && language.valid && description.valid) {
      try {
        const adapter = adapterAssignAssistant({
          ...form,
          assistantName: assistantName.value,
          language: language.value,
          description: description.value,
          busy: true,
          assistantAsigned: true,
          answers: ANSWER_CONSTANT[language.value],
        })

        processAssistant({ variables: adapter })
        dispatch(
          modifyAssistant({
            ...form,
            assistantName: assistantName.value,
            language: language.value,
            description: description.value,
            busy: true,
          })
        )
      } catch (error) {
        console.log(error)
        setError({ message: 'Error to createAssistant Api', type: 'error' })
      }
    } else {
      setError({ message: 'Please, complete all fields', type: 'warning' })
    }
  }

  const cancelHandler = (event) => {
    assistantName.setState('')
    assistantName.setValid(false)
    assistantName.setInfo(null)
    language.setState('')
    language.setValid(false)
    language.setInfo(null)
    description.setState('')
    description.setValid(false)
    description.setInfo(null)
    closeModal(event)
  }

  return (
    <>
      <IconLabel label="Obtener Asistente"></IconLabel>
      <form className={styles.form}>
        <InputGroup
          name={assistantName.name}
          text={'Assistant Name'}
          message={assistantName.message}
          valid={assistantName.valid}
          info={assistantName.info}
        >
          <Input {...assistantName} />
        </InputGroup>
        <InputGroup
          name={language.name}
          text={'Language'}
          message={language.message}
          valid={language.valid}
          info={language.info}
        >
          <Select
            {...language}
            option={'Select your language'}
            data={languageData}
          />
        </InputGroup>
        <InputGroup
          name={description.name}
          text={'Description'}
          message={description.message}
          valid={description.valid}
          info={description.info}
        >
          <TextArea {...description} length={'150'} />
        </InputGroup>
        {load && 'loading...'}
        <ButtonPar
          cancelClick={(event) => cancelHandler(event)}
          submitClick={submitHandler}
          type="submit"
          textSubmit="Obtein"
        />
      </form>
    </>
  )
}

export default AssignAssistant

const languageData = [
  { value: 'es', label: 'spanish' },
  { value: 'en', label: 'english' },
]
