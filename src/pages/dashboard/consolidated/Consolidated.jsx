import React, { useContext } from 'react'
import styles from './Consolidated.module.css'
import Table from '../../../components/customs/Table'
import classNames from 'classnames'
import ThemeContext from '../../../contexts/ThemeContext'
const fecha = new Date()

const word = {
  es: {
    ID_PERSONAL: 'Id Personal',
    Name: 'Nombre',
    Surname: 'Apellido',
    WorkHours: 'Horas de trabajo',
    WorkedHours: 'Horas Trabajadas',
    OrdinaryHours: 'Horas Ordinarias',
    ExtraHours: 'Horas Extras',
    MissingHours: 'Horas Faltantes',
    RecoveredTime: 'Tiempo Recuperado',
    TimeBalance: 'Balance de Tiempo',
    WorkedDays: 'Dias Trabajados',
    Holidays: 'Dias Festivos',
    PendingDays: 'Dias Pendientes',
    WorkDays: 'Dias de Trabajo',
    RestDay: 'Dia de Descanso',
    Review: 'Revisión',
    ExemptHours: 'Exonerar Horas',
    CancelOvertime: 'Cancelar Horas Extra',
    TimeControl: 'Control de Tiempo',
  },
}

const data = [
  {
    ID_PERSONAL: '12345',
    Name: 'Luis',
    Surname: 'Perez',
    WorkHours: fecha.toLocaleTimeString(),
    WorkedHours: fecha.toLocaleTimeString(),
    OrdinaryHours: fecha.toLocaleTimeString(),
    ExtraHours: fecha.toLocaleTimeString(),
    MissingHours: fecha.toLocaleTimeString(),
    RecoveredTime: fecha.toLocaleTimeString(),
    TimeBalance: fecha.toLocaleTimeString(),
    WorkedDays: fecha.getDay(10000),
    Holidays: fecha.getDay(),
    PendingDays: fecha.getDay(),
    WorkDays: fecha.getDay(),
    RestDay: fecha.getDay(),
    Review: false,
    ExemptHours: false,
    CancelOvertime: false,
    TimeControl: true,
  },
  {
    ID_PERSONAL: '12345',
    Name: 'Luis',
    Surname: 'Perez',
    WorkHours: fecha.toLocaleTimeString(),
    WorkedHours: fecha.toLocaleTimeString(),
    OrdinaryHours: fecha.toLocaleTimeString(),
    ExtraHours: fecha.toLocaleTimeString(),
    MissingHours: fecha.toLocaleTimeString(),
    RecoveredTime: fecha.toLocaleTimeString(),
    TimeBalance: fecha.toLocaleTimeString(),
    WorkedDays: fecha.getDay(10000),
    Holidays: fecha.getDay(),
    PendingDays: fecha.getDay(),
    WorkDays: fecha.getDay(),
    RestDay: fecha.getDay(),
    Review: false,
    ExemptHours: false,
    CancelOvertime: false,
    TimeControl: true,
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

function Consolidated() {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={classNames(styles.personal, styles[theme])}>
      <Table headers={headers} records={data} />
    </div>
  )
}

export default Consolidated
