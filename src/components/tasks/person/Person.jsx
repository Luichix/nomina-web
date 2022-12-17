import React, { useState, useEffect, useContext } from 'react'
import InputGroup from '../../../components/common/InputGroup'
import Input, { inputHandler } from '../../../components/common/Input'
import Select, { selectHandler } from '../../../components/common/Select'
import { useInput } from '../../../hooks/useInput'
import { phoneHandler } from '../../../components/common/Phone'
import styles from './Person.module.css'
import 'react-phone-number-input/style.css'
import Phone from 'react-phone-number-input'
import classNames from 'classnames'
import Title from '../../../components/common/Title'
import Switch from '../../common/Switch'
import Button from '../../common/Button'
import ThemeContext from '../../../contexts/ThemeContext'

function Person({ closeModal }) {
  const { theme } = useContext(ThemeContext)

  const name = useInput({
    name: 'name',
    type: 'text',
    label: 'Nombre',
    placeholder: '',
    handlerMethods: inputHandler,
  })
  const surname = useInput({
    name: 'surname',
    type: 'text',
    label: 'Apellido',
    placeholder: '',
    handlerMethods: inputHandler,
  })
  const identity = useInput({
    name: 'identity',
    type: 'text',
    label: 'N° de identidad',
    placeholder: '',
    handlerMethods: inputHandler,
  })

  const document = useInput({
    name: 'document',
    type: 'array',
    label: 'Documento',
    placeholder: '',
    handlerMethods: selectHandler,
  })
  const phone = useInput({
    name: 'phone',
    type: 'text',
    label: 'Teléfono',
    placeholder: '',
    handlerMethods: phoneHandler,
  })
  const area = useInput({
    name: 'area',
    type: 'array',
    label: 'Área',
    placeholder: '',
    handlerMethods: selectHandler,
  })
  const job = useInput({
    name: 'job',
    type: 'array',
    label: 'Puesto',
    placeholder: '',
    handlerMethods: selectHandler,
  })
  const salary = useInput({
    name: 'salary',
    type: 'text',
    label: 'Salario',
    placeholder: '',
    handlerMethods: inputHandler,
  })
  const regime = useInput({
    name: 'regime',
    type: 'array',
    label: 'Régimen',
    placeholder: '',
    handlerMethods: selectHandler,
  })
  const workday = useInput({
    name: 'workday',
    type: 'array',
    label: 'Jornada',
    placeholder: '',
    handlerMethods: selectHandler,
  })
  const contract = useInput({
    name: 'contract',
    type: 'array',
    label: 'Tipo de Contrato',
    placeholder: '',
    handlerMethods: selectHandler,
  })
  const timeControl = useInput({
    name: 'timecontrol',
    type: 'radio',
    label: 'Control de tiempo',
    placeholder: '',
    handlerMethods: inputHandler,
  })
  const startContract = useInput({
    name: 'startcontract',
    type: 'date',
    label: 'Fecha de inicio',
    placeholder: '',
    handlerMethods: inputHandler,
  })
  const endContract = useInput({
    name: 'endcontract',
    type: 'date',
    label: 'Fecha de finalización',
    placeholder: '',
    handlerMethods: inputHandler,
  })
  const payAccount = useInput({
    name: 'payaccount',
    type: 'array',
    label: 'Cuenta de pago',
    placeholder: '',
    handlerMethods: selectHandler,
  })
  const bankAccount = useInput({
    name: 'bankaccount',
    type: 'text',
    label: 'Cuenta bancaria',
    placeholder: '',
    handlerMethods: inputHandler,
  })

  const stepHandler = () => {
    switch (step) {
      case 'personal':
        setStep('contract')
        break
      case 'contract':
        setStep('payment')
        break
      case 'payment':
    }
  }

  const [step, setStep] = useState('personal')
  const [input, setInput] = useState('')

  useEffect(() => {
    phone.setState({ ...phone, value: input })
  }, [input])

  const array = [
    'cedula',
    'administración',
    'administrador',
    'general',
    'administrativo',
    'permanente',
    'ACH',
  ]

  return (
    <div className={classNames(styles.person, styles[theme])}>
      <div className={classNames(styles.head)}>
        <Title theme={theme} color="white">
          Nuevo Registro
        </Title>
        <div className={styles.tab}>
          <div
            className={styles.item}
            onClick={() => {
              setStep('personal')
            }}
          >
            <span>
              <label>1</label>
            </span>
            Personal
          </div>
          <hr />
          <div
            className={styles.item}
            onClick={() => {
              setStep('contract')
            }}
          >
            <span>
              <label>2</label>
            </span>
            Contratación
          </div>
          <hr />
          <div
            className={styles.item}
            onClick={() => {
              setStep('payment')
            }}
          >
            <span>
              <label>3</label>
            </span>
            Pagos
          </div>
        </div>
      </div>
      <div>
        {step === 'personal' && (
          <form className={styles.form}>
            <Title theme={theme} color="primary" size="xs">
              Datos personales
            </Title>
            <fieldset className={styles.fieldPerson}>
              <InputGroup
                {...name}
                order="columned"
                position="inside"
                alert={false}
                theme={theme}
              >
                <Input {...name} size="xs" />
              </InputGroup>
              <InputGroup
                {...surname}
                order="columned"
                position="inside"
                alert={false}
                theme={theme}
              >
                <Input {...surname} size="xs" />
              </InputGroup>
              <InputGroup
                {...identity}
                order="columned"
                position="inside"
                alert={false}
                theme={theme}
              >
                <Input {...identity} size="xs" />
              </InputGroup>
              <InputGroup
                {...document}
                order="columned"
                position="inside"
                alert={false}
                theme={theme}
              >
                <Select
                  {...document}
                  size="xs"
                  option="Seleccione..."
                  data={array}
                />
              </InputGroup>
              <InputGroup
                {...phone}
                order="columned"
                position="inside"
                alert={false}
                theme={theme}
              >
                <Phone
                  value={input}
                  onChange={setInput}
                  placeholder={phone.placeholder}
                  onBlur={phone.blurHandler}
                  className={classNames(
                    styles.input,
                    styles.xs,
                    styles[phone.info]
                  )}
                />
              </InputGroup>
            </fieldset>
          </form>
        )}
        {step === 'contract' && (
          <form className={styles.form}>
            <Title theme={theme} color="primary" size="xs">
              Datos de contratación
            </Title>
            <fieldset className={styles.fieldPerson}>
              <InputGroup
                {...area}
                order="columned"
                position="inside"
                alert={false}
                theme={theme}
              >
                <Select
                  {...area}
                  size="xs"
                  option="Seleccione..."
                  data={array}
                />
              </InputGroup>
              <InputGroup
                {...job}
                order="columned"
                position="inside"
                alert={false}
                theme={theme}
              >
                <Select
                  {...job}
                  size="xs"
                  option="Seleccione..."
                  data={array}
                />
              </InputGroup>
              <InputGroup
                {...salary}
                order="columned"
                position="inside"
                alert={false}
                theme={theme}
              >
                <Input {...salary} size="xs" />
              </InputGroup>
              <InputGroup
                {...regime}
                order="columned"
                position="inside"
                alert={false}
                theme={theme}
              >
                <Select
                  {...regime}
                  size="xs"
                  option="Seleccione..."
                  data={array}
                />
              </InputGroup>
              <InputGroup
                {...workday}
                order="columned"
                position="inside"
                alert={false}
                theme={theme}
              >
                <Select
                  {...workday}
                  size="xs"
                  option="Seleccione..."
                  data={array}
                />
              </InputGroup>
              <InputGroup
                {...contract}
                order="columned"
                position="inside"
                alert={false}
                theme={theme}
              >
                <Select
                  {...contract}
                  size="xs"
                  option="Seleccione..."
                  data={array}
                />
              </InputGroup>
              <InputGroup
                {...startContract}
                order="columned"
                position="inside"
                alert={false}
                theme={theme}
              >
                <Input {...startContract} size="xs" />
              </InputGroup>
              <InputGroup
                {...endContract}
                order="columned"
                position="inside"
                alert={false}
                theme={theme}
              >
                <Input {...endContract} size="xs" />
              </InputGroup>
              <InputGroup
                {...timeControl}
                order="columned"
                name="time"
                position="inside"
                alert={false}
                theme={theme}
              >
                <Switch {...timeControl} />
              </InputGroup>
            </fieldset>
          </form>
        )}
        {step === 'payment' && (
          <form className={styles.form}>
            <Title theme={theme} color="primary" size="xs">
              Datos de pago
            </Title>
            <fieldset className={styles.fieldPerson}>
              <InputGroup
                {...payAccount}
                order="columned"
                position="inside"
                alert={false}
                theme={theme}
              >
                <Select
                  {...payAccount}
                  size="xs"
                  option="Seleccione..."
                  data={array}
                />
              </InputGroup>
              <InputGroup
                {...bankAccount}
                order="columned"
                position="inside"
                alert={false}
                theme={theme}
              >
                <Input {...bankAccount} size="xs" />
              </InputGroup>
            </fieldset>
          </form>
        )}
      </div>
      <div className={styles.actions}>
        <Button info="tertiary" onClick={closeModal}>
          Cancelar
        </Button>
        <Button info="primary" onClick={stepHandler}>
          Next
        </Button>
      </div>
    </div>
  )
}

export default Person
