import React from 'react'

export const Column = ({
  headers = [],
  styles,
}: {
  headers: []
  styles: any
}) => {
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
