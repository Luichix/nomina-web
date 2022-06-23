import React from 'react'
import Row from './Row'
import Column from './Column'
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
