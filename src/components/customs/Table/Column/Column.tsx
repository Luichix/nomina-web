import React from 'react'
import { SlOptionsVertical } from 'react-icons/sl'
export const Column = ({
  headers = [],
  headStyles,
  styles,
}: {
  headers: []
  headStyles: any
  styles: any
}) => {
  return (
    <tr>
      {headers.map((header, index) => (
        <th key={index} className={styles}>
          <span className={headStyles}>
            {header}
            <SlOptionsVertical />
          </span>
        </th>
      ))}
    </tr>
  )
}

export default Column
