import React from 'react';
import styles from './styles.module.css';
import PropType from 'prop-types';

const Modal = ({ children, closeModal, refModal }: any) => {
  const handleModalContent = (e: any) => e.stopPropagation();

  return (
    <article className={styles.modal} onClick={closeModal} ref={refModal}>
      <div className={styles.content} onClick={handleModalContent}>
        <button className={styles.close} onClick={closeModal}>
          &times;
        </button>
        {children}
      </div>
    </article>
  );
};

export default Modal;

Modal.prototype = {
  children: PropType.node.isRequired,
  closeModal: PropType.func.isRequired,
  refModal: PropType.func,
};
