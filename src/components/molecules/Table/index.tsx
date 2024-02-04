import React from 'react';
import styles from './styles.module.css';

type Headers = string[];
type Register = Record<string, string>;

interface TableProps {
  headers: Headers;
  register: Register[];
}

export function Table({ headers, register }: TableProps) {
  return (
    <table className={styles.table}>
      <thead>
        <Column styles={styles.th} headers={headers} />
      </thead>
      <tbody>
        {register.map((record, index) => (
          <Row key={index} register={record} styles={styles.td} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;

const Column = ({
  headers = [],
  styles,
}: {
  headers: Headers;
  styles: string;
}) => {
  return (
    <tr>
      {headers.map((header, index) => (
        <th key={index} className={styles}>
          {header}
        </th>
      ))}
    </tr>
  );
};

const Row = ({ register, styles }: { register: Register; styles: string }) => {
  return (
    <tr>
      {Object.keys(register).map((item, index) => (
        <td key={index} className={styles}>
          {register[item]}
        </td>
      ))}
    </tr>
  );
};
