import React, { useState, useEffect, useContext } from 'react'
import firebaseApp from '../../services/firebase/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { getAuth, sendEmailVerification } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import LanguageContext from '../../contexts/LanguageContext'
import InputGroup from '../../components/common/InputGroup'
import Input from '../../components/common/Input'
import { inputHandler, emailHandler } from '../../components/common/Input'
import { phoneHandler } from '../../components/common/Phone'
import 'react-phone-number-input/style.css'
import Phone from 'react-phone-number-input'
import Select, { selectHandler } from '../../components/common/Select'
import Password, { passwordHandler } from '../../components/common/Password'
import Load from '../../components/common/Load'
import Bold from '../../components/common/Bold'
import styles from './Signup.module.css'
import { useInput } from '../../hooks/useInput'
import { useMutation } from '@apollo/client'
import { ADD_USER_INFO } from '../../services/graphql/mutation/user.mutation'
import { adapterUser } from '../../utilities/adapters/formattedUser'
import { useDispatch } from 'react-redux'
import { modifyUser } from '../../redux/actions/user.action'
import word from '../../data/signup.json'
import classNames from 'classnames'

const Signup = () => {
  const auth = getAuth(firebaseApp)
  const { language } = useContext(LanguageContext)
  const texts = word[language]
  auth.useDeviceLanguage()
  let navigate = useNavigate() // REVIEW Navigate to login or home
  const [addUserInfo] = useMutation(ADD_USER_INFO)
  const [load, setLoad] = useState(false)
  const dispatch = useDispatch()
  const [input, setInput] = useState('')

  useEffect(() => {
    phone.setState({ ...phone, value: input })
  }, [input])

  const name = useInput({
    name: 'name',
    type: 'text',
    placeholder: 'Entry your name',
    handlerMethods: inputHandler,
  })
  const email = useInput({
    name: 'email',
    type: 'text',
    placeholder: 'Entry your email',
    handlerMethods: emailHandler,
  })
  const phone = useInput({
    name: 'phone',
    type: 'text',
    placeholder: 'Entry your phone',
    handlerMethods: phoneHandler,
  })
  const industry = useInput({
    name: 'industry',
    type: 'array',
    placeholder: 'Entry your industry',
    handlerMethods: selectHandler,
  })
  const employee = useInput({
    name: 'employee',
    type: 'array',
    placeholder: 'Entry your employee',
    handlerMethods: selectHandler,
  })
  const password = useInput({
    name: 'password',
    type: 'password',
    placeholder: 'Entry your password',
    handlerMethods: passwordHandler,
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const submitHandler = (e) => {
    e.preventDefault()

    if (
      name.valid &&
      email.valid &&
      phone.valid &&
      password.valid &&
      industry.valid &&
      employee.valid
    ) {
      setLoad(true)
      createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((response) => {
          sendEmailVerification(auth.currentUser)
          if (response.user) {
            const adapter = adapterUser({
              uid: response.user.uid,
              name: name.value,
              email: email.value,
              phoneNumber: phone.value,
              industry: industry.value,
              employeeCount: employee.value,
              assistantAsigned: false,
              assistantCreated: false,
            })
            addUserInfo({ variables: adapter })
              .then(() => {
                dispatch(modifyUser(adapter))
                navigate('/'), { replace: true }
              })
              .catch((error) => {
                console.log(error)
              })
          }
        })
        .catch((exception) => {
          console.log('error', exception)
        })
    }
  }

  return (
    <div className={styles.signup}>
      <div className={styles.container}>
        <div className={styles.section}>
          <span className={styles.message}>
            <Bold
              bold={texts.adviceBold}
              line={texts.adviceLine}
              unique={texts.adviceUnique}
              styleUnique={'primaryLine'}
            >
              {texts.adviceRegister}
            </Bold>
            <p className={styles.subtitle}>{texts.objectiveRegister}</p>
          </span>
          <figure className={styles.figure}>
            <img
              src="https://godigitpage-eyvhte74x-gtavo95.vercel.app/assets/svg/illustrations/oc-growing.svg"
              className={styles.image}
              alt=""
            />
          </figure>
        </div>
        <div className={styles.register}>
          <form onSubmit={submitHandler} className={styles.form}>
            <InputGroup
              name={name.name}
              label={texts.nameRegister}
              message={name.message}
              valid={name.valid}
              info={name.info}
            >
              <Input {...name} />
            </InputGroup>
            <InputGroup
              name={email.name}
              label={texts.emailRegister}
              message={email.message}
              valid={email.valid}
              info={email.info}
            >
              <Input {...email} />
            </InputGroup>
            <InputGroup
              name={phone.name}
              label={texts.phoneRegister}
              message={phone.message}
              valid={phone.valid}
              info={phone.info}
            >
              <Phone
                value={input}
                onChange={setInput}
                placeholder={phone.placeholder}
                onBlur={phone.blurHandler}
                className={classNames(styles.input, styles[phone.info])}
              />
            </InputGroup>
            <InputGroup
              name={industry.name}
              label={texts.industryRegister}
              message={industry.message}
              valid={industry.valid}
              info={industry.info}
            >
              <Select
                {...industry}
                option={texts.placeIndustryRegister}
                data={texts.industrySelectRegister}
              />
            </InputGroup>
            <InputGroup
              name={employee.name}
              label={texts.employeeRegister}
              message={employee.message}
              valid={employee.valid}
              info={employee.info}
            >
              <Select
                {...employee}
                option={texts.placeEmployeeRegister}
                data={texts.employeeSelectRegister}
              />
            </InputGroup>
            <InputGroup
              name="Password"
              label={texts.passwordRegister}
              message={password.message}
              valid={password.valid}
              info={password.info}
            >
              <Password
                {...password}
                placeholder={texts.placePasswordRegister}
              />
            </InputGroup>
            <div className={styles.terms}>
              <p className={styles.text}>
                {texts.acceptRegister}{' '}
                <Link to="/privacy-policy" className={styles.linkText}>
                  {texts.termsRegister}
                </Link>
              </p>
            </div>
            <button type="submit" className={styles.button}>
              {load && <Load />}
              {texts.buttonRegister}
            </button>
          </form>
          <p className={styles.text}>
            <i>{texts.accountRegister} </i>
            <Link to="/login" className={styles.linkText}>
              {texts.loginRegister}
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup
