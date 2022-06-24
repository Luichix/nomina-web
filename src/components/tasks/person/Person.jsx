import React from 'react'
import InputGroup from '../../../components/common/InputGroup'
import Input, { inputHandler } from '../../../components/common/Input'
import Select, { selectHandler } from '../../../components/common/Select'
import { useInput } from '../../../hooks/useInput'
import styles from './Person.module.css'

function Person() {
  // const id = useInput({
  //   name: 'id',
  //   type: 'text',
  //   label: 'Id:',
  //   placeholder: '',
  //   handlerMethods: inputHandler,
  // })

  const name = useInput({
    name: 'name',
    type: 'text',
    label: 'Nombre:',
    placeholder: '',
    handlerMethods: inputHandler,
  })
  const surname = useInput({
    name: 'surname',
    type: 'text',
    label: 'Apellido:',
    placeholder: '',
    handlerMethods: inputHandler,
  })
  const identity = useInput({
    name: 'identity',
    type: 'text',
    label: 'N° de identidad:',
    placeholder: '',
    handlerMethods: inputHandler,
  })

  const document = useInput({
    name: 'document',
    type: 'array',
    label: 'Documento:',
    placeholder: '',
    handlerMethods: selectHandler,
  })
  const phone = useInput({
    name: 'phone',
    type: 'text',
    label: 'Teléfono:',
    placeholder: '',
    handlerMethods: inputHandler,
  })
  const area = useInput({
    name: 'area',
    type: 'text',
    label: 'Área:',
    placeholder: '',
    handlerMethods: inputHandler,
  })
  const job = useInput({
    name: 'job',
    type: 'text',
    label: 'Puesto:',
    placeholder: '',
    handlerMethods: inputHandler,
  })
  const salary = useInput({
    name: 'salary',
    type: 'text',
    label: 'Salario:',
    placeholder: '',
    handlerMethods: inputHandler,
  })
  const regime = useInput({
    name: 'regime',
    type: 'text',
    label: 'Régimen:',
    placeholder: '',
    handlerMethods: inputHandler,
  })
  const workday = useInput({
    name: 'workday',
    type: 'text',
    label: 'Jornada:',
    placeholder: '',
    handlerMethods: inputHandler,
  })
  const timeControl = useInput({
    name: 'timecontrol',
    type: 'text',
    label: 'Control de tiempo:',
    placeholder: '',
    handlerMethods: inputHandler,
  })
  const contract = useInput({
    name: 'contract',
    type: 'text',
    label: 'Contrato:',
    placeholder: '',
    handlerMethods: inputHandler,
  })
  const startContract = useInput({
    name: 'startcontract',
    type: 'date',
    label: 'Fecha de inicio:',
    placeholder: '',
    handlerMethods: inputHandler,
  })
  const endContract = useInput({
    name: 'endcontract',
    type: 'date',
    label: 'Fecha de finalización:',
    placeholder: '',
    handlerMethods: inputHandler,
  })
  const payAccount = useInput({
    name: 'payaccount',
    type: 'text',
    label: 'Cuenta de pago:',
    placeholder: '',
    handlerMethods: inputHandler,
  })
  const bankAccount = useInput({
    name: 'bankaccount',
    type: 'text',
    label: 'Cuenta bancaria:',
    placeholder: '',
    handlerMethods: inputHandler,
  })
  const status = useInput({
    name: 'status',
    type: 'text',
    label: 'Estado:',
    placeholder: '',
    handlerMethods: inputHandler,
  })

  const array = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqr', 'stu', 'vwx', 'yz']

  return (
    <div>
      <div>
        <form>
          <fieldset className={styles.fieldPerson}>
            <InputGroup {...name} order="columned" position="inside">
              <Input {...name} size="xs" />
            </InputGroup>
            <InputGroup {...surname} order="columned" position="inside">
              <Input {...surname} size="xs" />
            </InputGroup>
            <InputGroup {...identity} order="columned" position="inside">
              <Input {...identity} size="xs" />
            </InputGroup>
            <InputGroup {...document} order="columned" position="inside">
              <Select
                {...document}
                size="xs"
                option="Seleccione..."
                data={array}
              />
            </InputGroup>
            <InputGroup {...phone} order="columned" position="inside">
              <Input {...phone} size="xs" />
            </InputGroup>
          </fieldset>
          <fieldset className={styles.fieldPerson}>
            <InputGroup {...area} order="columned" position="inside">
              <Input {...area} size="xs" />
            </InputGroup>
            <InputGroup {...job} order="columned" position="inside">
              <Input {...job} size="xs" />
            </InputGroup>
            <InputGroup {...salary} order="columned" position="inside">
              <Input {...salary} size="xs" />
            </InputGroup>
            <InputGroup {...regime} order="columned" position="inside">
              <Select {...regime} size="xs" />
            </InputGroup>
            <InputGroup {...workday} order="columned" position="inside">
              <Select {...workday} size="xs" />
            </InputGroup>
            <InputGroup {...timeControl} order="columned" position="inside">
              <Input {...timeControl} size="xs" />
            </InputGroup>
            <InputGroup {...contract} order="columned" position="inside">
              <Select {...contract} size="xs" />
            </InputGroup>
            <InputGroup {...startContract} order="columned" position="inside">
              <Input {...startContract} size="xs" />
            </InputGroup>
            <InputGroup {...endContract} order="columned" position="inside">
              <Input {...endContract} size="xs" />
            </InputGroup>
          </fieldset>
          <fieldset className={styles.fieldPerson}>
            <InputGroup {...payAccount} order="columned" position="inside">
              <Input {...payAccount} size="xs" />
            </InputGroup>
            <InputGroup {...bankAccount} order="columned" position="inside">
              <Input {...bankAccount} size="xs" />
            </InputGroup>
            <InputGroup {...status} order="columned" position="inside">
              <Input {...status} size="xs" />
            </InputGroup>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default Person
