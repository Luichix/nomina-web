import React, { useContext } from 'react'
import styles from './Report.module.css'
import Table from '../../../components/customs/Table'
import classNames from 'classnames'
import ThemeContext from '../../../contexts/ThemeContext'
const fecha = new Date()

const word = {
  es: {
    ID_PERSONAL: 'Id Personal',
    Name: 'Nombre',
    Surname: 'Apellido',
    IdentityCard: 'N° de Identidad',
    TypeCard: 'Documento',
    PhoneNumber: 'Telefono',
    WorkArea: 'Area',
    Job: 'Puesto',
    Salary: 'Salario',
    FK_REGIMENT: 'Regimen',
    FK_WORKINGDAY: 'jornada',
    TimeControl: 'Control Horario',
    FK_CONTRACT: 'Contrato',
    StartContract: 'Inicio',
    EndContract: 'Finalizacion',
    FK_PAYACCOUNT: 'Cuenta de Pago',
    BankAccount: 'Cuenta Bancaria',
    Status: 'Estado',
    AddedDate: 'Registro',
    AlterDate: 'Modificacion',
    LowDate: 'Baja',
    FK_USER_ADD: 'Registrador',
    FK_USER_ALTER: 'Modificador',
    FK_USER_LOW: 'Finalizador',
  },
}

const data = [
  {
    ID_PERSONAL: '1',
    Name: 'Luis',
    Surname: 'Pérez',
    IdentityCard: '081-250860-0008M',
    TypeCard: 'Cedula',
    PhoneNumber: '+505 8455-5589',
    WorkArea: 'Administración',
    Job: 'Administrador',
    Salary: '28000',
    FK_REGIMENT: 'General',
    FK_WORKINGDAY: 'General',
    TimeControl: 'No',
    FK_CONTRACT: 'Permanente',
    StartContract: fecha.toLocaleDateString(),
    EndContract: fecha.toLocaleDateString(),
    FK_PAYACCOUNT: 'ACH',
    BankAccount: '11318848',
    Status: 'Active',
    AddedDate: fecha.toLocaleDateString(),
    AlterDate: fecha.toLocaleDateString(),
    LowDate: fecha.toLocaleDateString(),
    FK_USER_ADD: 'Luichix',
    FK_USER_ALTER: 'Luichix',
    FK_USER_LOW: 'Luichix',
  },
  {
    ID_PERSONAL: '2',
    Name: 'Luis',
    Surname: 'Pérez',
    IdentityCard: '081-250860-0008M',
    TypeCard: 'Cedula',
    PhoneNumber: '+505 8455-5589',
    WorkArea: 'Administración',
    Job: 'Administrador',
    Salary: '28000',
    FK_REGIMENT: 'General',
    FK_WORKINGDAY: 'General',
    TimeControl: 'No',
    FK_CONTRACT: 'Permanente',
    StartContract: fecha.toLocaleDateString(),
    EndContract: fecha.toLocaleDateString(),
    FK_PAYACCOUNT: 'ACH',
    BankAccount: '184351813',
    Status: 'Active',
    AddedDate: fecha.toLocaleDateString(),
    AlterDate: fecha.toLocaleDateString(),
    LowDate: fecha.toLocaleDateString(),
    FK_USER_ADD: 'Luichix',
    FK_USER_ALTER: 'Luichix',
    FK_USER_LOW: 'Luichix',
  },
]

const getHead = (data) => {
  const head = []

  for (const key in data) {
    head.push(data[key])
  }
  return head
}
const headers = getHead(word.es)

function Report() {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={classNames(styles.personal, styles[theme])}>
      <Table headers={headers} records={data} />
    </div>
  )
}

export default Report
