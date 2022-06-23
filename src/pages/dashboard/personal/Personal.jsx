import React from 'react'
import styles from './Personal.module.css'
import Table from '../../../components/customs/Table'

const fecha = new Date()

const word = {
  es: {
    ID_PERSONAL: 'Id',
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
    FK_USER_ADD: 'Usuario de Registro',
    FK_USER_ALTER: 'Usuario de Modificacion',
    FK_USER_LOW: 'Usuario de Baja',
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
    BankAccount: 'LAFISE',
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
    BankAccount: 'LAFISE',
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
  console.log(head)
  return head
}
const headers = getHead(word.es)

function Personal() {
  return (
    <div className={styles.Personal}>
      <Table headers={headers} records={data} />
    </div>
  )
}

export default Personal
