'use client';
import React, { useState } from 'react';
import { Title, Button } from '@/components/atom';
import styles from './styles.module.css';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { GiSkills } from 'react-icons/gi';
import { FaFileContract } from 'react-icons/fa';

const array: Record<string, string>[] = [
  { area: 'administración' },
  { trabajo: 'administrador' },
  { regimen: 'general' },
  { jornada: 'administrativo' },
  { contrato: 'permanente' },
  { cuenta: 'ACH' },
];

const documents: Record<string, string>[] = [
  { cedula: 'Cedula' },
  { passport: 'Pasaporte' },
];

const areas: Record<string, string>[] = [{ area: 'Administración' }];
const job: Record<string, string>[] = [{ trabajo: 'Administrador' }];
const regime: Record<string, string>[] = [{ regime: 'General' }];
const workday: Record<string, string>[] = [{ jornada: 'Administrativo' }];
const contract: Record<string, string>[] = [{ regimen: 'Permanente' }];
const account: Record<string, string>[] = [{ regimen: 'ACH' }];

export default function Page({ params }: { params: { id: string } }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className={styles.container}>
      <Title color="primary">Acciones de Personal</Title>
      <div>
        <form
          className={styles.form}
          onSubmit={handleSubmit((data) => console.log(data))}
        >
          <fieldset className={styles.fieldset}>
            <legend>
              <BsFillPersonLinesFill /> Información Personal
            </legend>
            <label>
              Nombre:
              <input {...register('name', { required: true })} />
              <p className={classNames({ [styles.error]: errors.name })}>
                Ingrese el nombre.
              </p>
            </label>
            <label>
              Apellido:
              <input {...register('surname', { required: true })} />
              <p className={classNames({ [styles.error]: errors.surname })}>
                Ingrese el apellido.
              </p>
            </label>
            <label>
              Número de Identidad:
              <input {...register('identity', { required: true })} />
              <p className={classNames({ [styles.error]: errors.identity })}>
                Ingrese el número de identificación.
              </p>
            </label>
            <label>
              Tipo de Documento:
              <select {...register('document', { required: true })}>
                <option value="" defaultValue="" disabled={true}>
                  Seleccione...
                </option>
                {documents &&
                  documents.map((e) =>
                    Object.keys(e).map((item, index) => (
                      <option key={index} value={item}>
                        {e[item]}
                      </option>
                    ))
                  )}
              </select>
              <p className={classNames({ [styles.error]: errors.document })}>
                Seleccione el tipo de documento.
              </p>
            </label>
          </fieldset>
          <fieldset className={styles.fieldset}>
            <legend>
              <GiSkills /> Información del Puesto
            </legend>
            <label>
              Área de Trabajo:
              <select {...register('area', { required: true })}>
                <option value="" defaultValue="" disabled={true}>
                  Seleccione...
                </option>
                {areas &&
                  areas.map((e) =>
                    Object.keys(e).map((item, index) => (
                      <option key={index} value={item}>
                        {e[item]}
                      </option>
                    ))
                  )}
              </select>
              <p className={classNames({ [styles.error]: errors.area })}>
                Seleccione el área de trabajo.
              </p>
            </label>
            <label>
              Puesto de Trabajo:
              <select {...register('job', { required: true })}>
                <option value="" defaultValue="" disabled={true}>
                  Seleccione...
                </option>
                {job &&
                  job.map((e) =>
                    Object.keys(e).map((item, index) => (
                      <option key={index} value={item}>
                        {e[item]}
                      </option>
                    ))
                  )}
              </select>
              <p className={classNames({ [styles.error]: errors.job })}>
                Seleccione el puesto de trabajo.
              </p>
            </label>
            <label>
              Salario Mensual:
              <input
                type="number"
                {...register('salary', { required: true })}
              />
              <p className={classNames({ [styles.error]: errors.salary })}>
                Ingrese el salario mensual.
              </p>
            </label>
            <label>
              Regimen de Horas:
              <select {...register('regime', { required: true })}>
                <option value="" defaultValue="" disabled={true}>
                  Seleccione...
                </option>
                {regime &&
                  regime.map((e) =>
                    Object.keys(e).map((item, index) => (
                      <option key={index} value={item}>
                        {e[item]}
                      </option>
                    ))
                  )}
              </select>
              <p className={classNames({ [styles.error]: errors.regime })}>
                Seleccione el regimen de horas.
              </p>
            </label>
            <label>
              Jornada de Trabajo:
              <select {...register('workday', { required: true })}>
                <option value="" defaultValue="" disabled={true}>
                  Seleccione...
                </option>
                {workday &&
                  workday.map((e) =>
                    Object.keys(e).map((item, index) => (
                      <option key={index} value={item}>
                        {e[item]}
                      </option>
                    ))
                  )}
              </select>
              <p className={classNames({ [styles.error]: errors.workday })}>
                Seleccione la jornada de trabajo.
              </p>
            </label>
          </fieldset>
          <fieldset className={styles.fieldset}>
            <legend>
              <FaFileContract /> Datos de contratación
            </legend>
            <label>
              Tipo de Contrato:
              <select {...register('contract', { required: true })}>
                <option value="" defaultValue="" disabled={true}>
                  Seleccione...
                </option>
                {contract &&
                  contract.map((e) =>
                    Object.keys(e).map((item, index) => (
                      <option key={index} value={item}>
                        {e[item]}
                      </option>
                    ))
                  )}
              </select>
              <p className={classNames({ [styles.error]: errors.contract })}>
                Seleccione el tipo de contrato.
              </p>
            </label>
            <label>
              Inicio del Contrato:
              <input type="date" {...register('startContract')} />
              <p
                className={classNames({
                  [styles.error]: errors.startContract,
                })}
              >
                Indique la fecha de inicio de contrato.
              </p>
            </label>
            <label>
              Fin del Contrato:
              <input type="date" {...register('endContract')} />
              <p className={classNames({ [styles.error]: errors.endContract })}>
                Indique la fecha de fin de contrato.
              </p>
            </label>
            <span>
              ¿Requiere control de tiempo?
              <input
                id="timeControl"
                type="checkbox"
                {...register('timeControl')}
              />
              <label htmlFor="timeControl" />
            </span>
          </fieldset>
          <fieldset className={styles.fieldset}>
            <legend>Información de Pagos</legend>
            <label>
              Cuenta de Pagos:
              <select {...register('payAccount', { required: true })}>
                <option value="" defaultValue="" disabled={true}>
                  Seleccione...
                </option>
                {account &&
                  account.map((e) =>
                    Object.keys(e).map((item, index) => (
                      <option key={index} value={item}>
                        {e[item]}
                      </option>
                    ))
                  )}
              </select>
              <p className={classNames({ [styles.error]: errors.payAccount })}>
                Seleccione la cuenta de pagos.
              </p>
            </label>
            <label>
              Cuenta de Banco:
              <input {...register('bankAccount')} />
            </label>
          </fieldset>
          <div className={styles.actions}>
            <Button info="primary" type="submit">
              Registrar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
