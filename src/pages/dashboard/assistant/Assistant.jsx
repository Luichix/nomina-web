import React, { useEffect, useState, useRef } from 'react'
import styles from './Assistant.module.css'
import { useSelector } from 'react-redux'
import GetAssistant from './components/GetAssistant'
import AssignAssistant from './components/AssignAssistant'
import Modal from '../../../components/common/Modal'
import Alert from '../../../components/common/Alert'
// // import ChatBox from './components/ChatBox/ChatBox'
import CreateAssistant from './components/CreateAssistant'

const VirtualAssistant = () => {
  const modalRef = useRef(null)
  const assistantState = useSelector((state) => state.assistant)
  const { assistantAsigned, assistantCreated } = useSelector(
    (state) => state.user
  )

  const [form, setForm] = useState(assistantState)
  const [error, setError] = useState({ message: '', type: '' })

  useEffect(() => {
    if (assistantState) {
      setForm({ ...form, ...assistantState })
    }
  }, [assistantState])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const openModal = () => {
    modalRef.current.style.display = 'flex'
  }
  const closeModal = (event) => {
    event.preventDefault()
    modalRef.current.style.display = 'none'
  }

  return (
    <>
      {assistantAsigned === false && (
        <Modal refModal={modalRef} closeModal={closeModal}>
          <AssignAssistant
            closeModal={closeModal}
            form={form}
            setError={setError}
          />
        </Modal>
      )}
      <Alert message={error.message} type={error.type} />
      <div className={styles.container}>
        {assistantAsigned === false && (
          <GetAssistant
            openModal={openModal}
            setForm={setForm}
            setError={setError}
            assistantState={assistantState}
            form={form}
          />
        )}
        {assistantCreated === false && assistantAsigned === true && (
          <CreateAssistant
            openModal={openModal}
            setForm={setForm}
            setError={setError}
            assistantState={assistantState}
            form={form}
          />
        )}
        {/* {assistantAsigned === true && assistantCreated === true && (
          <ChatBox chatConfig={assistantState} />
        )} */}
      </div>
    </>
  )
}

export default VirtualAssistant
