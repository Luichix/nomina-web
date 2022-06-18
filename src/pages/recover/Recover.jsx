import React, { useState, useEffect, useRef } from 'react'
import styles from './Send.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import firebaseApp from '../../../services/firebase/firebase'
import Modal from '../../../components/common/Modal'
import check from '../../../assets/check.jpg'
import Input from '../../../components/common/Input'
import Button from '../../../components/common/Button'
import Paragraph from '../../../components/common/Paragraph'
import Alert from '../../../components/common/Alert'
import Title from '../../../components/common/Title'

const Send = () => {
  const auth = getAuth(firebaseApp)
  const modalRef = useRef(null)
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)
  const handleEmail = (event) => setEmail(event.target.value)
  let navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleReSend = async () => {
    await sendPasswordResetEmail(auth, email).then(() => {
      navigate('/login', { replace: true })
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await sendPasswordResetEmail(auth, email)
      .then(() => {
        openModal()
      })
      .catch(() => {
        setError('Wrong Credentials')
        setTimeout(() => setError(null), 5000)
      })
  }
  const openModal = () => {
    modalRef.current.style.display = 'flex'
  }

  const closeModal = (event) => {
    event.preventDefault()
    modalRef.current.style.display = 'none'
  }

  return (
    <>
      <Alert message={error} type="error" />
      <Modal refModal={modalRef} closeModal={closeModal}>
        <div className={styles.modal}>
          <img
            src={check}
            style={{ width: '100px', opacity: '0.8', padding: '5px' }}
            className
          ></img>
          <Title color="primary" size="lg" weight="normal">
            Done, we will send you the email
          </Title>
          <div className={styles.modalBody}>
            <Paragraph isCentered size="xs" color="base">
              You can now recover y by entering the email we sent to {email}
            </Paragraph>
            <div className={styles.retry}>
              <Paragraph isCentered size="xs" color="base">
                Didn&apos;t you receive the email?
              </Paragraph>
              <i className={styles.link} onClick={handleReSend}>
                Retry
              </i>
            </div>
          </div>
          <div className={styles.modalFooter}>
            <Link to="/login" className={styles.link}>
              &gt; Back to login
            </Link>
          </div>
        </div>
      </Modal>

      <div className={styles.container}>
        <div className={styles.head}>
          <h3 className={styles.title}>Forgot your password?</h3>
          <p className={styles.text}>We will send you a recovery email.</p>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.input}>
            <p className=" text-gray-800 text-sm">Enter your email</p>
            <Input
              name="email"
              type="email"
              placeholder={'Enter your email'}
              value={email}
              changeHandler={handleEmail}
              autoComplete="off"
              required
            />
          </div>
          <Button type="submit" info="primary" size="large">
            Send
          </Button>
          <Paragraph isCentered size="xs" color="primary">
            <Link to="/login" className={styles.link}>
              <i> &gt; Go back</i>
            </Link>
          </Paragraph>
        </form>
      </div>
    </>
  )
}

export default Send
