import React, { useState, useEffect, useContext } from 'react'
import styles from './Security.module.css'
import InputGroup from '../../../../components/common/InputGroup'
import Password, {
  passwordHandler,
  confirmPasswordHandler,
} from '../../../../components/common/Password'
import Alert from '../../../../components/common/Alert'
import ButtonPar from '../../../../components/customs/ButtonPar'
import IconLabel from '../../../../components/customs/IconLabel'
import { useInput } from '../../../../hooks/useInput'
import { getAuth, updatePassword } from 'firebase/auth'
import { signInWithEmailAndPassword } from 'firebase/auth'
import firebaseApp from '../../../../services/firebase/firebase'
import { BsPencilSquare } from 'react-icons/bs'
import Pack from '../../../../components/common/Pack'
import ThemeContext from '../../../../contexts/ThemeContext'

const Security = () => {
  const { theme } = useContext(ThemeContext)
  const auth = getAuth(firebaseApp)
  const [reset, setReset] = useState({ display: 'hidden', disabled: true })
  const [confirmState, setConfirmState] = useState('')
  const [confirmMessage, setConfirmMessage] = useState('')
  const [confirmValid, setConfirmValid] = useState(false)
  const [confirmInfo, setConfirmInfo] = useState(null)
  const [passwordState, setPasswordState] = useState('')
  const [passwordMessage, setPasswordMessage] = useState('')
  const [passwordValid, setPasswordValid] = useState(false)
  const [passwordInfo, setPasswordInfo] = useState(null)
  const [message, setMessage] = useState({ message: '', type: 'info' })

  const currentPassword = useInput({
    name: 'currentPassword',
    type: 'password',
    placeholder: 'Entry your current password',
  })
  const newPassword = useInput({
    name: 'newPassword',
    type: 'password',
    placeholder: 'Entry your new password',
    info: passwordInfo,
    handlerMethods: passwordHandler,
  })
  const confirmHandler = confirmPasswordHandler({
    setState: setConfirmState,
    setMessage: setConfirmMessage,
    setValid: setConfirmValid,
    setInfo: setConfirmInfo,
    password: newPassword.value,
  })

  const confirmPassword = {
    name: 'confirmPassword',
    type: 'password',
    placeholder: 'Entry your confirm password',
    value: confirmState,
    info: confirmInfo,
    changeHandler: confirmHandler.changeHandler,
    keyUpHandler: confirmHandler.keyUpHandler,
    blurHandler: confirmHandler.blurHandler,
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const displayReset = () => {
    if (reset.display === 'visible') {
      setReset({ display: 'hidden', disabled: true })
    } else {
      setReset({ display: 'visible', disabled: false })
    }
  }

  const handleCancel = (event) => {
    event.preventDefault()
    setPasswordState('')
    setPasswordValid(false)
    setPasswordInfo(null)
    setPasswordMessage('')
    newPassword.setState('')
    newPassword.setValid(false)
    newPassword.setInfo(null)
    setConfirmState('')
    setConfirmValid(false)
    setConfirmInfo(null)
    displayReset()
  }

  const handleClick = async (event) => {
    event.preventDefault()

    if (newPassword.valid && confirmValid && passwordState.length > 0) {
      await signInWithEmailAndPassword(
        auth,
        auth.currentUser.email,
        passwordState
      )
        .then(() => {
          setPasswordInfo('success')
          setPasswordMessage('')
          setConfirmValid(true)
          updatePassword(auth.currentUser, newPassword.value)
            .then(() => {
              setMessage({
                message: 'Password updated successfully',
                type: 'success',
              })
            })
            .catch((error) => {
              setMessage({
                message: error.message,
                type: 'error',
              })
              console.log(error, error.message)
            })
        })
        .catch((error) => {
          console.log(error)
          setPasswordInfo('error')
          setPasswordMessage('Your current password is incorrect')
          setPasswordValid(false)
        })
    } else {
      setMessage({ message: 'Invalid', type: 'error' })
    }
  }
  return (
    <>
      <Alert type={message.type} message={message.message} />
      <div className={styles.container}>
        <Pack theme={theme}>
          <form className={styles.group}>
            <IconLabel
              label="Edit Password"
              handleClick={handleCancel}
              iconType="normal"
              theme={theme}
            >
              <BsPencilSquare />
            </IconLabel>
            <InputGroup
              name={currentPassword.name}
              message={passwordMessage}
              valid={passwordValid}
              info={passwordInfo}
              label="Current Password"
              order="columned"
              theme={theme}
            >
              <Password
                {...currentPassword}
                value={passwordState}
                changeHandler={({ target }) => setPasswordState(target.value)}
                disabled={reset.disabled}
              />
            </InputGroup>
            <InputGroup
              name={newPassword.name}
              message={newPassword.message}
              valid={newPassword.valid}
              info={newPassword.info}
              label="New Password"
              order="columned"
              theme={theme}
            >
              <Password {...newPassword} disabled={reset.disabled} />
            </InputGroup>
            <InputGroup
              name={confirmPassword.name}
              message={confirmMessage}
              valid={confirmValid}
              info={confirmInfo}
              label="Confirm New Password"
              order="columned"
              theme={theme}
            >
              <Password {...confirmPassword} disabled={reset.disabled} />
            </InputGroup>
            <ButtonPar
              cancelClick={handleCancel}
              submitClick={handleClick}
              textSubmit="Update"
              type="button"
              display={reset.display}
            />
          </form>
        </Pack>
      </div>
    </>
  )
}

export default Security
