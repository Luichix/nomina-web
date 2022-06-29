import React, { useEffect, useState, useRef, useContext } from 'react'
import styles from './Account.module.css'
import classNames from 'classnames'
import { FaSave } from 'react-icons/fa'
import { GiCancel } from 'react-icons/gi'
import { BsPencilSquare } from 'react-icons/bs'
import { modifyUser } from '../../../redux/actions/user.action'
import Country from '../../../components/common/Country'
import InputGroup from '../../../components/common/InputGroup'
import Input from '../../../components/common/Input'
import 'react-phone-number-input/style.css'
import Phone from 'react-phone-number-input'
import IconLabel from '../../../components/customs/IconLabel'
import Button from '../../../components/common/Button'
import { useMutation } from '@apollo/client'
import { useSelector, useDispatch } from 'react-redux'
import { UPDATED_BASIC_INFO } from '../../../services/graphql/mutation/user.mutation'
import { UPDATED_ADDRESS_INFO } from '../../../services/graphql/mutation/user.mutation'
import { adapterFormBasic } from '../../../utilities/adapters/formattedUser'
import { adapterFormAddress } from '../../../utilities/adapters/formattedUser'
import { getAuth, updateEmail } from 'firebase/auth'
import FirebaseApp from '../../../services/firebase/firebase'
import Security from './security'
import Pack from '../../../components/common/Pack/Pack'
import ThemeContext from '../../../contexts/ThemeContext'
import Title from '../../../components/common/Title'

const Account = () => {
  const { theme } = useContext(ThemeContext)
  const auth = getAuth(FirebaseApp)
  const userState = useSelector((state) => state.user)
  const [form, setForm] = useState(userState)
  const [input, setInput] = useState('')
  const [basic, setBasic] = useState({ display: 'hidden', disabled: true })
  const [address, setAddress] = useState({ display: 'hidden', disabled: true })
  const refSaveBas = useRef(null)
  const refSaveAdd = useRef(null)
  const [updateBasicInfo] = useMutation(UPDATED_BASIC_INFO)
  const [updateAddressInfo] = useMutation(UPDATED_ADDRESS_INFO)
  const dispatch = useDispatch()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (userState) {
      setForm({ ...form, ...userState })
      setInput(userState.phoneNumber)
    }
  }, [userState])

  useEffect(() => {
    setForm({ ...form, phoneNumber: input })
  }, [input])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmitBasic = async (event) => {
    event.preventDefault()
    const adapter = adapterFormBasic(form)
    await updateBasicInfo({ variables: adapter })
      .then(() => {
        displayBasic()
        dispatch(modifyUser(adapter))
      })
      .catch((errormsg) => {
        console.log(errormsg)
      })
  }
  const handleSubmitAddress = async (event) => {
    event.preventDefault()
    const adapter = adapterFormAddress(form)
    if (form.email !== userState.email) {
      updateEmail(auth.currentUser, form.email)
    }
    await updateAddressInfo({ variables: adapter })
      .then(() => {
        displayAddress()
        dispatch(modifyUser(adapter))
      })
      .catch((errormsg) => {
        console.log(errormsg)
      })
  }

  const handleCancelBasic = (event) => {
    event.preventDefault()
    setForm({ ...form, ...userState })
    displayBasic()
  }
  const handleCancelAddress = (event) => {
    event.preventDefault()
    setForm({ ...form, ...userState })
    displayAddress()
  }

  const displayBasic = () => {
    if (basic.display === 'visible') {
      setBasic({ display: 'hidden', disabled: true })
    } else {
      setBasic({ display: 'visible', disabled: false })
    }
  }

  const displayAddress = () => {
    if (address.display === 'visible') {
      setAddress({ display: 'hidden', disabled: true })
    } else {
      setAddress({ display: 'visible', disabled: false })
    }
  }

  return (
    <div className={styles.container}>
      <Pack theme={theme}>
        <form className={styles.group}>
          <IconLabel
            label="Basic Information"
            handleClick={handleCancelBasic}
            iconType="normal"
            theme={theme}
          >
            <BsPencilSquare />
          </IconLabel>
          <InputGroup
            label="Full Name"
            name="name"
            order="columned"
            theme={theme}
          >
            <Input
              name="name"
              type="text"
              info="normal"
              placeholder="My name"
              value={form.name}
              changeHandler={handleChange}
              disabled={basic.disabled}
              required={false}
            />
          </InputGroup>
          <InputGroup label="Email" name="email" order="columned" theme={theme}>
            <Input
              name="email"
              type="email"
              info="normal"
              placeholder="My email"
              value={form.email}
              changeHandler={handleChange}
              disabled={basic.disabled}
              required={false}
            />
          </InputGroup>
          <InputGroup
            label="Company Name"
            name="company"
            order="columned"
            theme={theme}
          >
            <Input
              name="company"
              type="text"
              info="normal"
              placeholder="My company"
              value={form.company}
              changeHandler={handleChange}
              disabled={basic.disabled}
              required={false}
            />
          </InputGroup>
          <InputGroup
            label="Phone Number"
            name="phoneNumber"
            order="columned"
            theme={theme}
          >
            <Phone
              value={input}
              onChange={setInput}
              placeholder="phone number"
              disabled={basic.disabled}
              required={false}
              className={classNames(styles.input, styles[theme])}
            />
          </InputGroup>
          <div
            className={classNames(styles.actions, styles[basic.display])}
            ref={refSaveBas}
          >
            <Button
              onClick={(event) => {
                handleCancelBasic(event)
              }}
              info="danger"
              size="large"
            >
              <GiCancel />
              Cancel
            </Button>
            <Button
              onClick={(event) => {
                handleSubmitBasic(event)
              }}
              info="primary"
              size="large"
            >
              <FaSave />
              Save
            </Button>
          </div>
        </form>
      </Pack>
      <Pack theme={theme}>
        <form className={styles.group} onSubmit={handleSubmitAddress}>
          <IconLabel
            label="Address"
            handleClick={handleCancelAddress}
            iconType="normal"
            theme={theme}
          >
            <BsPencilSquare />
          </IconLabel>
          <InputGroup
            label="Country"
            name="country"
            order="columned"
            theme={theme}
          >
            <Country
              name="country"
              info="normal"
              value={form.country}
              handleChange={handleChange}
              option="Select Country"
              disabled={address.disabled}
              required={false}
            />
          </InputGroup>
          <InputGroup label="City" name="city" order="columned" theme={theme}>
            <Input
              name="city"
              type="text"
              info="normal"
              placeholder="My city"
              value={form.city}
              changeHandler={handleChange}
              disabled={address.disabled}
              required={false}
            />
          </InputGroup>
          <InputGroup
            label="Address"
            name="address"
            order="columned"
            theme={theme}
          >
            <Input
              name="address"
              type="text"
              info="normal"
              placeholder="My address"
              value={form.address}
              changeHandler={handleChange}
              disabled={address.disabled}
              required={false}
            />
          </InputGroup>
          <div
            className={classNames(styles.actions, styles[address.display])}
            ref={refSaveAdd}
          >
            <Button onClick={handleCancelAddress} info="danger" size="large">
              <GiCancel />
              Cancel
            </Button>
            <Button onClick={handleSubmitAddress} info="primary" size="large">
              <FaSave />
              Save
            </Button>
          </div>
        </form>
      </Pack>
      <Security />
      <Pack theme={theme}>
        <div className={styles.section}>
          <Title theme={theme} color="primary" style={styles.title}>
            Delete your Account
          </Title>
          <p className={styles.text}>
            When you delete your account, you lose access to Front account
            services, and we permanently delete your personal data. You can
            cancel the deletion for 14 days.
          </p>
          <Button info="danger" size="large">
            Delete
          </Button>
        </div>
      </Pack>
    </div>
  )
}

export default Account
