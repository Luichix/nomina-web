import React from 'react'
import Column from './Column/Column'
import Row from './Row'
import styles from './Table.module.css'

function Table({ headers, records }: any) {
  return (
    <table className={styles.table}>
      <thead>
        <Column styles={styles.th} headers={headers} />
      </thead>
      <tbody>
        {records.map((record: any, index: any) => (
          <Row key={index} records={record} styles={styles.td} />
        ))}
      </tbody>
    </table>
  )
}

export default Table
