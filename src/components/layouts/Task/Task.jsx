import React, { useRef } from 'react'
import Kit from '../Task/Kit'
import { Outlet } from 'react-router-dom'
import styles from './Task.module.css'
import Person from '../../tasks/person/Person'
import Modal from '../../common/Modal'

const Task = () => {
  const modalRef = useRef(null)
  const openModal = () => {
    modalRef.current.style.display = 'flex'
  }
  const closeModal = (event) => {
    event.preventDefault()
    modalRef.current.style.display = 'none'
  }
  return (
    <>
      <Modal refModal={modalRef} closeModal={closeModal}>
        <Person closeModal={closeModal} />
      </Modal>
      <div className={styles.container}>
        <div className={styles.group}>
          <div className={styles.tools}>
            <Kit handleModal={openModal} />
          </div>
          <div className={styles.grid}>
            <div className={styles.spacer}></div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default Task
