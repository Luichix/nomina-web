import React, { PropsWithChildren, useRef } from 'react'
import Kit from './Kit'
import styles from './styles.module.css'
// import Person from '../../tasks/person/Person'
import Modal from '@Components/common/Modal'
import NoSSR from '../NoSSR'

const Task = ({ children }: PropsWithChildren) => {
  const modalRef = useRef<HTMLElement | null>(null)
  const openModal = () => {
    if (modalRef?.current) modalRef.current.style.display = 'flex'
  }
  const closeModal = (event: any) => {
    event.preventDefault()
    if (modalRef?.current) modalRef.current.style.display = 'none'
  }
  return (
    <>
      <NoSSR>
        <Modal ref={modalRef} onClose={closeModal}>
          <div style={{ background: 'white', width: '100px', height: '100px' }}>
            Hello
          </div>
          {/* <Person closeModal={closeModal} /> */}
        </Modal>
      </NoSSR>
      <div className={styles.container}>
        <div className={styles.group}>
          <div className={styles.tools}>
            <Kit handleModal={openModal} />
          </div>
          <div className={styles.grid}>
            <div className={styles.spacer}></div>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default Task
