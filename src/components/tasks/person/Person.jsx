import React from 'react'
import InputGroup from '../../../components/common/InputGroup'
import Input, { inputHandler } from '../../../components/common/Input'
import { useInput } from '../../../hooks/useInput'
import styles from './Person.module.css'

function Person() {
  const id = useInput({
    name: 'id',
    type: 'text',
    placeholder: '',
    handlerMethod: inputHandler,
  })

  const name = useInput({
    name: 'name',
    type: 'text',
    placeholder: '',
    handlerMethod: inputHandler,
  })
  const surname = useInput({
    name: 'surname',
    type: 'text',
    placeholder: '',
    handlerMethod: inputHandler,
  })
  const identity = useInput({
    name: 'identity',
    type: 'text',
    placeholder: '',
    handlerMethod: inputHandler,
  })

  const document = useInput({
    name: 'document',
    type: 'text',
    placeholder: '',
    handlerMethod: inputHandler,
  })
  const phone = useInput({
    name: 'phone',
    type: 'text',
    placeholder: '',
    handlerMethod: inputHandler,
  })
  const area = useInput({
    name: 'area',
    type: 'text',
    placeholder: '',
    handlerMethod: inputHandler,
  })
  const job = useInput({
    name: 'job',
    type: 'text',
    placeholder: '',
    handlerMethod: inputHandler,
  })
  const salary = useInput({
    name: 'salary',
    type: 'text',
    placeholder: '',
    handlerMethod: inputHandler,
  })
  const regime = useInput({
    name: 'regime',
    type: 'text',
    placeholder: '',
    handlerMethod: inputHandler,
  })
  const workday = useInput({
    name: 'workday',
    type: 'text',
    placeholder: '',
    handlerMethod: inputHandler,
  })
  const timeControl = useInput({
    name: 'timecontrol',
    type: 'text',
    placeholder: '',
    handlerMethod: inputHandler,
  })
  const contract = useInput({
    name: 'contract',
    type: 'text',
    placeholder: '',
    handlerMethod: inputHandler,
  })
  const startContract = useInput({
    name: 'startcontract',
    type: 'text',
    placeholder: '',
    handlerMethod: inputHandler,
  })
  const endContract = useInput({
    name: 'endcontract',
    type: 'text',
    placeholder: '',
    handlerMethod: inputHandler,
  })
  const payAccount = useInput({
    name: 'payaccount',
    type: 'text',
    placeholder: '',
    handlerMethod: inputHandler,
  })
  const bankAccount = useInput({
    name: 'bankaccount',
    type: 'text',
    placeholder: '',
    handlerMethod: inputHandler,
  })
  const status = useInput({
    name: 'status',
    type: 'text',
    placeholder: '',
    handlerMethod: inputHandler,
  })
  const addedDate = useInput({
    name: 'addeddate',
    type: 'text',
    placeholder: '',
    handlerMethod: inputHandler,
  })
  const alterDate = useInput({
    name: 'alterdate',
    type: 'text',
    placeholder: '',
    handlerMethod: inputHandler,
  })
  const lowDate = useInput({
    name: 'lowdate',
    type: 'text',
    placeholder: '',
    handlerMethod: inputHandler,
  })
  const userAdd = useInput({
    name: 'useradd',
    type: 'text',
    placeholder: '',
    handlerMethod: inputHandler,
  })
  const userAlter = useInput({
    name: 'useralter',
    type: 'text',
    placeholder: '',
    handlerMethod: inputHandler,
  })
  const userLow = useInput({
    name: 'userlow',
    type: 'text',
    placeholder: '',
    handlerMethod: inputHandler,
  })

  return (
    <div>
      <div>
        <form>
          <fieldset className={styles.fieldPerson}>
            <InputGroup
              name={id.name}
              text={'Id Personal'}
              message={id.message}
              valid={id.valid}
              info={id.info}
              order="rowed"
            >
              <Input size="sm" {...id} />
            </InputGroup>
            <InputGroup
              name={name.name}
              text={'Nombre'}
              message={name.message}
              valid={name.valid}
              info={name.info}
              order="rowed"
            >
              <Input size="sm" {...name} />
            </InputGroup>
            <InputGroup
              name={surname.name}
              text={'Apellido'}
              message={surname.message}
              valid={surname.valid}
              info={surname.info}
              order="rowed"
            >
              <Input size="sm" {...surname} />
            </InputGroup>
            <InputGroup
              name={identity.name}
              text={'N° de identidad'}
              message={identity.message}
              valid={identity.valid}
              info={identity.info}
              order="rowed"
            >
              <Input size="sm" {...identity} />
            </InputGroup>
            <InputGroup
              name={document.name}
              text={'Documento'}
              message={document.message}
              valid={document.valid}
              info={document.info}
              order="rowed"
            >
              <Input size="sm" {...document} />
            </InputGroup>
            <InputGroup
              name={phone.name}
              text={'Phone'}
              message={phone.message}
              valid={phone.valid}
              info={phone.info}
              order="rowed"
            >
              <Input size="sm" {...phone} />
            </InputGroup>
          </fieldset>
          <fieldset className={styles.fieldPerson}>
            <InputGroup
              name={area.name}
              text={'Area'}
              message={area.message}
              valid={area.valid}
              info={area.info}
              order="rowed"
            >
              <Input size="sm" {...area} />
            </InputGroup>
            <InputGroup
              name={job.name}
              text={'Puesto'}
              message={job.message}
              valid={job.valid}
              info={job.info}
              order="rowed"
            >
              <Input size="sm" {...job} />
            </InputGroup>
            <InputGroup
              name={salary.name}
              text={'Salario'}
              message={salary.message}
              valid={salary.valid}
              info={salary.info}
              order="rowed"
            >
              <Input size="sm" {...salary} />
            </InputGroup>
            <InputGroup
              name={regime.name}
              text={'Regimen'}
              message={regime.message}
              valid={regime.valid}
              info={regime.info}
              order="rowed"
            >
              <Input size="sm" {...regime} />
            </InputGroup>
            <InputGroup
              name={workday.name}
              text={'Jornada'}
              message={workday.message}
              valid={workday.valid}
              info={workday.info}
              order="rowed"
            >
              <Input size="sm" {...workday} />
            </InputGroup>
            <InputGroup
              name={timeControl.name}
              text={'Control Horario'}
              message={timeControl.message}
              valid={timeControl.valid}
              info={timeControl.info}
              order="rowed"
            >
              <Input size="sm" {...timeControl} />
            </InputGroup>
            <InputGroup
              name={contract.name}
              text={'Contrato'}
              message={contract.message}
              valid={contract.valid}
              info={contract.info}
              order="rowed"
            >
              <Input size="sm" {...contract} />
            </InputGroup>

            <InputGroup
              name={startContract.name}
              text={'Inicio'}
              message={startContract.message}
              valid={startContract.valid}
              info={startContract.info}
              order="rowed"
            >
              <Input size="sm" {...startContract} />
            </InputGroup>
            <InputGroup
              name={endContract.name}
              text={'Fin'}
              message={endContract.message}
              valid={endContract.valid}
              info={endContract.info}
              order="rowed"
            >
              <Input size="sm" {...endContract} />
            </InputGroup>
            <InputGroup
              name={payAccount.name}
              text={'Cuenta de pago'}
              message={payAccount.message}
              valid={payAccount.valid}
              info={payAccount.info}
              order="rowed"
            >
              <Input size="sm" {...payAccount} />
            </InputGroup>
            <InputGroup
              name={bankAccount.name}
              text={'Cuenta de banco'}
              message={bankAccount.message}
              valid={bankAccount.valid}
              info={bankAccount.info}
              order="rowed"
            >
              <Input size="sm" {...bankAccount} />
            </InputGroup>
          </fieldset>
          <fieldset className={styles.fieldPerson}>
            <InputGroup
              name={status.name}
              text={'Estado'}
              message={status.message}
              valid={status.valid}
              info={status.info}
              order="rowed"
            >
              <Input size="sm" {...status} />
            </InputGroup>
            <InputGroup
              name={addedDate.name}
              text={'Fecha de ingreso'}
              message={addedDate.message}
              valid={addedDate.valid}
              info={addedDate.info}
              order="rowed"
            >
              <Input size="sm" {...addedDate} />
            </InputGroup>
            <InputGroup
              name={alterDate.name}
              text={'Fecha de modificación'}
              message={alterDate.message}
              valid={alterDate.valid}
              info={alterDate.info}
              order="rowed"
            >
              <Input size="sm" {...alterDate} />
            </InputGroup>
            <InputGroup
              name={lowDate.name}
              text={'Fecha de baja'}
              message={lowDate.message}
              valid={lowDate.valid}
              info={lowDate.info}
              order="rowed"
            >
              <Input size="sm" {...lowDate} />
            </InputGroup>
            <InputGroup
              name={userAlter.name}
              text={'Usuario de modificación'}
              message={userAlter.message}
              valid={userAlter.valid}
              info={userAlter.info}
              order="rowed"
            >
              <Input size="sm" {...userAlter} />
            </InputGroup>
            <InputGroup
              name={userLow.name}
              text={'Usuario de baja'}
              message={userLow.message}
              valid={userLow.valid}
              info={userLow.info}
              order="rowed"
            >
              <Input size="sm" {...userLow} />
            </InputGroup>
            <InputGroup
              name={userAdd.name}
              text={'Usuario de ingreso'}
              message={userAdd.message}
              valid={userAdd.valid}
              info={userAdd.info}
              order="rowed"
            >
              <Input size="sm" {...userAdd} />
            </InputGroup>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default Person
