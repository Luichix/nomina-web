import React from 'react'

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

export default Column
