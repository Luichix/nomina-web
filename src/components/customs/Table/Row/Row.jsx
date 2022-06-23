import React from 'react'

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

export default Row
