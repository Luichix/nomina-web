'use client';
import React, { useState } from 'react';
import { Title, Button } from '@/components/atom';
import styles from './styles.module.css';
import classNames from 'classnames';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { GiSkills } from 'react-icons/gi';
import { FaFileContract } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

import PhoneInput from 'react-phone-number-input/react-hook-form-input';
import { RiUserSettingsFill } from 'react-icons/ri';
import data from '@/../public/data/personal-dummies.json';

const array: Record<string, string>[] = [
  { area: 'administración' },
  { trabajo: 'administrador' },
  { regimen: 'general' },
  { jornada: 'administrativo' },
  { contrato: 'permanente' },
  { cuenta: 'ACH' },
];

const documents: Record<string, string>[] = [
  { Cedula: 'Cedula' },
  { passport: 'Pasaporte' },
];

const areas: Record<string, string>[] = [{ area: 'Administración' }];
const job: Record<string, string>[] = [{ trabajo: 'Administrador' }];
const regime: Record<string, string>[] = [{ regime: 'General' }];
const workday: Record<string, string>[] = [{ jornada: 'Administrativo' }];
const contract: Record<string, string>[] = [{ regimen: 'Permanente' }];
const account: Record<string, string>[] = [{ regimen: 'ACH' }];

export default function AddPerson({ params }: { params: { id: string } }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm();

  const { id } = params;

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
              <RiUserSettingsFill /> Opciones de Configuración
            </legend>
            <span>
              Contrato
              <input
                id="timeControl"
                type="checkbox"
                {...register('timeControl')}
              />
              <label htmlFor="timeControl" />
            </span>
            <span>
              Traslado
              <input
                id="timeControl"
                type="checkbox"
                {...register('timeControl')}
              />
              <label htmlFor="timeControl" />
            </span>
            <span>
              Aumento
              <input
                id="timeControl"
                type="checkbox"
                {...register('timeControl')}
              />
              <label htmlFor="timeControl" />
            </span>
            <span>
              Reintegro
              <input
                id="timeControl"
                type="checkbox"
                {...register('timeControl')}
              />
              <label htmlFor="timeControl" />
            </span>
            <span>
              Baja
              <input
                id="timeControl"
                type="checkbox"
                {...register('timeControl')}
              />
              <label htmlFor="timeControl" />
            </span>
            <span>
              Otros
              <input
                id="timeControl"
                type="checkbox"
                {...register('timeControl')}
              />
              <label htmlFor="timeControl" />
            </span>
          </fieldset>
          <fieldset className={styles.fieldset}>
            <legend>
              <BsFillPersonLinesFill /> Información Personal
            </legend>
            <label>
              Nombre:
              <input
                defaultValue={data[parseInt(id)].name}
                {...register('name', {
                  required: true,
                })}
              />
              <p className={classNames({ [styles.error]: errors.name })}>
                Ingrese el nombre.
              </p>
            </label>
            <label>
              Apellido:
              <input
                defaultValue={data[parseInt(id)].surname}
                {...register('surname', {
                  required: true,
                })}
              />
              <p className={classNames({ [styles.error]: errors.surname })}>
                Ingrese el apellido.
              </p>
            </label>
            <label>
              Número de Identidad:
              <input
                defaultValue={data[parseInt(id)].identityCard}
                {...register('identity', {
                  required: true,
                })}
              />
              <p className={classNames({ [styles.error]: errors.identity })}>
                Ingrese el número de identificación.
              </p>
            </label>
            <label>
              Tipo de Documento:
              <select
                defaultValue={data[parseInt(id)].typeCard}
                {...register('document', {
                  required: true,
                })}
              >
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
            <label>
              Telefono:
              <PhoneInput
                name="phone"
                defaultValue={data[parseInt(id)].phoneNumber}
                control={control}
                rules={{
                  required: true,
                }}
              />
              <p className={classNames({ [styles.error]: errors.phone })}>
                Ingrese el numero de telefono.
              </p>
            </label>
          </fieldset>
          <fieldset className={styles.fieldset}>
            <legend>
              <GiSkills /> Información del Puesto
            </legend>
            <label>
              Área de Trabajo:
              <select
                defaultValue={data[parseInt(id)].workArea}
                {...register('area', {
                  required: true,
                })}
              >
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
              <select
                defaultValue={data[parseInt(id)].job}
                {...register('job', {
                  required: true,
                })}
              >
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
                defaultValue={data[parseInt(id)].salary}
                type="number"
                {...register('salary', { required: true })}
              />
              <p className={classNames({ [styles.error]: errors.salary })}>
                Ingrese el salario mensual.
              </p>
            </label>
            <label>
              Regimen de Horas:
              <select
                defaultValue={data[parseInt(id)].regimen}
                {...register('regime', { required: true })}
              >
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
              <select
                defaultValue={data[parseInt(id)].workingDay}
                {...register('workday', { required: true })}
              >
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
              <select
                defaultValue={data[parseInt(id)].contract}
                {...register('contract', { required: true })}
              >
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
              <input
                defaultValue={data[parseInt(id)].startContract}
                type="date"
                {...register('startContract')}
              />
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
              <input
                defaultValue={data[parseInt(id)].endContract}
                type="date"
                {...register('endContract')}
              />
              <p className={classNames({ [styles.error]: errors.endContract })}>
                Indique la fecha de fin de contrato.
              </p>
            </label>
            <span>
              ¿Requiere control de tiempo?
              <input
                id="timeControl"
                type="checkbox"
                defaultValue={data[parseInt(id)].timeControl}
                {...register('timeControl')}
              />
              <label htmlFor="timeControl" />
            </span>
          </fieldset>
          <fieldset className={styles.fieldset}>
            <legend>Información de Pagos</legend>
            <label>
              Cuenta de Pagos:
              <select
                defaultValue={data[parseInt(id)].payAccount}
                {...register('payAccount', { required: true })}
              >
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
              <input
                defaultValue={data[parseInt(id)].bankAccount}
                {...register('bankAccount')}
              />
            </label>
            <div className={styles.actions}>
              <Button info="secondary" type="submit">
                Cancelar
              </Button>
              <Button info="primary" type="submit">
                Guardar Cambios
              </Button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
