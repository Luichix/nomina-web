import React, { ReactNode, useRef } from 'react';
import Kit from './Kit';
import styles from './styles.module.css';
import { Person } from '@/components/organisms';
// import { Modal } from '@/components/atom';

const Task = ({ children }: { children: ReactNode }) => {
  // const modalRef = useRef(null);
  const openModal = () => {
    // modalRef.current.style.display = 'flex';
  };
  // const closeModal = (event) => {
  //   event.preventDefault();
  //   modalRef.current.style.display = 'none';
  // };
  return (
    <>
      {/* <Modal refModal={modalRef} closeModal={closeModal}>
        <Person closeModal={closeModal} />
      </Modal> */}
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
  );
};

export default Task;
