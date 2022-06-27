import React, { useContext } from 'react'
import styles from './Hours.module.css'
import Table from '../../../components/customs/Table'
import classNames from 'classnames'
import ThemeContext from '../../../contexts/ThemeContext'
const fecha = new Date()

const word = {
  es: {
    Date: 'Fecha',
    ID_PERSONAL: 'Id Personal',
    Name: 'Nombre',
    Surname: 'Apellido',
    HourFirst: 'Hora Inicial',
    HourLast: 'Hora Final',
    StartAnalysis: 'Análisis Inicial',
    EndAnalysis: 'Análisis Final',
    Review: 'Revisión',
    ReportDay: 'Reporte del día',
  },
}

const data = [
  {
    Date: fecha.toLocaleDateString(),
    ID_PERSONAL: '1',
    Name: 'Luis',
    Surname: 'Pérez',
    HourFirst: fecha.toLocaleTimeString(),
    HourLast: fecha.toLocaleTimeString(),
    StartAnalysis: fecha.toLocaleTimeString(),
    EndAnalysis: fecha.toLocaleTimeString(),
    Review: false,
    ReportDay: fecha.toLocaleTimeString(),
  },
  {
    Date: fecha.toLocaleDateString(),
    ID_PERSONAL: '2',
    Name: 'Luis',
    Surname: 'Pérez',
    HourFirst: fecha.toLocaleTimeString(),
    HourLast: fecha.toLocaleTimeString(),
    StartAnalysis: fecha.toLocaleTimeString(),
    EndAnalysis: fecha.toLocaleTimeString(),
    Review: false,
    ReportDay: fecha.toLocaleTimeString(),
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

function Hours() {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={classNames(styles.personal, styles[theme])}>
      <Table headers={headers} records={data} />
    </div>
  )
}

export default Hours
