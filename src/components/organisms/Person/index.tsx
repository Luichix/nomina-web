'use client';
import React, { useState, useEffect, useContext } from 'react';
import {
  Title,
  Switch,
  Button,
  InputGroup,
  Input,
  Select,
} from '@/components/atom';
import styles from './styles.module.css';
import classNames from 'classnames';

export function Person({ closeModal }: { closeModal: () => void }) {
  const [nameValue, setName] = useState('');
  const [surnameValue, setSurname] = useState('');
  const [identityValue, setIdentity] = useState('');
  const [documentValue, setDocument] = useState('');
  // const [phoneValue, setPhone] = useState('');
  const [areaValue, setArea] = useState('');
  const [jobValue, setJob] = useState('');
  const [regimeValue, setRegime] = useState('');
  const [workdayValue, setWorkday] = useState('');
  const [contractValue, setContract] = useState('');
  const [timeControlValue, setTimeControl] = useState(false);
  const [payAccountValue, setPayAccount] = useState('');
  const [salaryValue, setSalary] = useState('');
  const [startContractValue, setStartContract] = useState('');
  const [endContractValue, setEndContract] = useState('');
  const [bankAccountValue, setBankAccount] = useState('');

  // Now you can use these values and setter functions in your component

  const stepHandler = () => {
    switch (step) {
      case 'personal':
        setStep('contract');
        break;
      case 'contract':
        setStep('payment');
        break;
      case 'payment':
    }
  };

  const [step, setStep] = useState('personal');
  const [input, setInput] = useState('');

  // useEffect(() => {
  //   phone.setState({ ...phone, value: input });
  // }, [input]);

  const array: Record<string, string>[] = [
    { cedula: 'cedula' },
    { area: 'administración' },
    { trabajo: 'administrador' },
    { regimen: 'general' },
    { jornada: 'administrativo' },
    { contrato: 'permanente' },
    { cuenta: 'ACH' },
  ];

  return (
    <div className={classNames(styles.person)}>
      <div className={classNames(styles.head)}>
        <Title color="secondary">Nuevo Registro</Title>
        <div className={styles.tab}>
          <div
            className={styles.item}
            onClick={() => {
              setStep('personal');
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
              setStep('contract');
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
              setStep('payment');
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
            <Title color="primary" size="xs">
              Datos personales
            </Title>
            <fieldset className={styles.fieldPerson}>
              <InputGroup
                name="name"
                order="columned"
                position="inside"
                alert={false}
              >
                <Input
                  name="name"
                  value={nameValue}
                  changeHandler={setName}
                  size="xs"
                />
              </InputGroup>
              <InputGroup
                name="surname"
                order="columned"
                position="inside"
                alert={false}
              >
                <Input
                  name="surname"
                  value={surnameValue}
                  changeHandler={setSurname}
                  size="xs"
                />
              </InputGroup>
              <InputGroup
                name="identity"
                order="columned"
                position="inside"
                alert={false}
              >
                <Input
                  name="identity"
                  value={identityValue}
                  changeHandler={setIdentity}
                  size="xs"
                />
              </InputGroup>
              <InputGroup
                name="document"
                order="columned"
                position="inside"
                alert={false}
              >
                <Select
                  name="document"
                  size="xs"
                  value={documentValue}
                  setState={setDocument}
                  option="Seleccione..."
                  data={array}
                />
              </InputGroup>
            </fieldset>
          </form>
        )}
        {step === 'contract' && (
          <form className={styles.form}>
            <Title color="primary" size="xs">
              Datos de contratación
            </Title>
            <fieldset className={styles.fieldPerson}>
              <InputGroup
                name="area"
                order="columned"
                position="inside"
                alert={false}
              >
                <Select
                  name="area"
                  value={areaValue}
                  setState={setArea}
                  size="xs"
                  option="Seleccione..."
                  data={array}
                />
              </InputGroup>
              <InputGroup
                name="job"
                order="columned"
                position="inside"
                alert={false}
              >
                <Select
                  name="job"
                  value={jobValue}
                  setState={setJob}
                  size="xs"
                  option="Seleccione..."
                  data={array}
                />
              </InputGroup>
              <InputGroup
                name="salary"
                order="columned"
                position="inside"
                alert={false}
              >
                <Input
                  name="salary"
                  value={salaryValue}
                  changeHandler={setSalary}
                  size="xs"
                />
              </InputGroup>
              <InputGroup
                name="regime"
                order="columned"
                position="inside"
                alert={false}
              >
                <Select
                  name="regime"
                  value={regimeValue}
                  setState={setRegime}
                  size="xs"
                  option="Seleccione..."
                  data={array}
                />
              </InputGroup>
              <InputGroup
                name="workday"
                order="columned"
                position="inside"
                alert={false}
              >
                <Select
                  name="workday"
                  value={workdayValue}
                  setState={setWorkday}
                  size="xs"
                  option="Seleccione..."
                  data={array}
                />
              </InputGroup>
              <InputGroup
                name="contract"
                order="columned"
                position="inside"
                alert={false}
              >
                <Select
                  name="contract"
                  value={contractValue}
                  setState={setContract}
                  size="xs"
                  option="Seleccione..."
                  data={array}
                />
              </InputGroup>
              <InputGroup
                name="startContract"
                order="columned"
                position="inside"
                alert={false}
              >
                <Input
                  name="startContract"
                  value={startContractValue}
                  changeHandler={setStartContract}
                  size="xs"
                />
              </InputGroup>
              <InputGroup
                name="endContract"
                order="columned"
                position="inside"
                alert={false}
              >
                <Input
                  name="endContract"
                  value={endContractValue}
                  changeHandler={setEndContract}
                  size="xs"
                />
              </InputGroup>
              <InputGroup
                name="timeControl"
                order="columned"
                position="inside"
                alert={false}
              >
                <Switch
                  name="timeControl"
                  checked={timeControlValue}
                  checkedHandler={setTimeControl}
                />
              </InputGroup>
            </fieldset>
          </form>
        )}
        {step === 'payment' && (
          <form className={styles.form}>
            <Title color="primary" size="xs">
              Datos de pago
            </Title>
            <fieldset className={styles.fieldPerson}>
              <InputGroup
                name="payAccount"
                order="columned"
                position="inside"
                alert={false}
              >
                <Select
                  name="payAccount"
                  value={payAccountValue}
                  setState={setPayAccount}
                  size="xs"
                  option="Seleccione..."
                  data={array}
                />
              </InputGroup>
              <InputGroup
                name="bankAccount"
                order="columned"
                position="inside"
                alert={false}
              >
                <Input
                  name="bankAccount"
                  value={bankAccountValue}
                  changeHandler={setBankAccount}
                  size="xs"
                />
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
  );
}

export default Person;
