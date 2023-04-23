import React from 'react'
import styles from './Table.module.css'

function Table({ headers, records }) {
  return (
    <table className={styles.table}>
      <thead>
        <Column styles={styles.th} headers={headers} />
      </thead>
      <tbody>
        {records.map((record, index) => (
          <Row key={index} records={record} styles={styles.td} />
        ))}
      </tbody>
    </table>
  )
}

export default Table

const Column = ({ headers = [], styles }) => {
  return (
    <tr>
      {headers.map((header, index) => (
        <th key={index} className={styles}>
          {header}
        </th>
      ))}
    </tr>
  )
}

const Row = ({ records = [], styles }) => {
  return (
    <tr>
      {Object.keys(records).map((key, index) => (
        <td key={index} className={styles}>
          {records[key]}
        </td>
      ))}
    </tr>
  )
}
