'use client';
import React, { useState } from 'react';
import styles from './styles.module.css';
import nodes from '@/../public/data/personal-dummies.json';
import { BsPersonPlusFill, BsPersonRaisedHand } from 'react-icons/bs';
import Link from 'next/link';

import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from '@table-library/react-table-library/theme';
import { getTheme } from '@table-library/react-table-library/baseline';
import { usePagination } from '@table-library/react-table-library/pagination';

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';

type CellFunction = (item: any) => any;

const COLUMNS: Record<string, string | CellFunction>[] = [
  { label: 'Id', renderCell: (item) => item.id },
  { label: 'Nombre', renderCell: (item) => item.name },
  { label: 'Apellido', renderCell: (item) => item.surname },
  { label: 'N° de Identidad', renderCell: (item) => item.identityCard },
  { label: 'Documento', renderCell: (item) => item.typeCard },
  { label: 'Telefono', renderCell: (item) => item.phoneNumber },
  { label: 'Area', renderCell: (item) => item.workArea },
  { label: 'Puesto', renderCell: (item) => item.job },
  { label: 'Salario', renderCell: (item) => item.salary },
  { label: 'Regimen', renderCell: (item) => item.regimen },
  { label: 'jornada', renderCell: (item) => item.workingDay },
  { label: 'Control Horario', renderCell: (item) => item.timeControl },
  { label: 'Contrato', renderCell: (item) => item.contract },
  {
    label: 'Inicio',
    renderCell: (item) => {
      return new Date(item.startContract).toLocaleDateString('es', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });
    },
  },
  {
    label: 'Finalizacion',
    renderCell: (item) => {
      return new Date(item.endContract).toLocaleDateString('es', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });
    },
  },
  { label: 'Cuenta de Pago', renderCell: (item) => item.payAccount },
  { label: 'Cuenta Bancaria', renderCell: (item) => item.bankAccount },
  { label: 'Estado', renderCell: (item) => item.status },
  { label: 'Registro', renderCell: (item) => item.addedDate },
  { label: 'Modificacion', renderCell: (item) => item.alterDate },
  { label: 'Baja', renderCell: (item) => item.lowDate },
  { label: 'Registrador', renderCell: (item) => item.userAdd },
  { label: 'Modificador', renderCell: (item) => item.userAlter },
  { label: 'Finalizador', renderCell: (item) => item.userLow },
];

function Personal() {
  const data = { nodes };

  /* Theme */
  const theme = useTheme([
    getTheme(),
    {
      Table: `
        border-radius: 4px;
        --data-table-library_grid-template-columns: repeat(24, minmax(150px, 1fr));
      `,
      HeaderRow: `
        background-color: var(--color-primary);
        color: var(--color-base-white);
        
      `,
      Row: `
      color : var(--color-font-base);

        &:hover {
          color: var(--color-secondary);
          background-color: var(--color-base-gray);
        }
      `,
    },
  ]);

  /* Search */
  const [search, setSearch] = useState('');

  const handleSearch = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearch(event.target.value);
  };

  const searchData = {
    nodes: data.nodes.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    ),
  };

  /* Pagination */
  const pagination = usePagination(data, {
    state: {
      page: 0,
      size: 10,
    },
    onChange: onPaginationChange,
  });

  function onPaginationChange(action: any, state: any) {
    console.log(action, state);
  }

  const [currentPage, setCurrentPage] = useState(0);

  const setPage = (index: number) => {
    pagination.fns.onSetPage(index);
    setCurrentPage(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.cinta}>
        <label htmlFor="search" className="flex gap-2 items-center text-dark">
          Buscar por Nombre:&nbsp;
          <input
            id="search"
            type="text"
            value={search}
            onChange={handleSearch}
            className="py-1 px-2 bg-white border-l-2 border-b rounded outline-none border-primary  auto"
            autoComplete="off"
          />
        </label>
        <br />
        <Link
          href="/personal/add-personal"
          className={styles.item}
          type="button"
        >
          <BsPersonPlusFill className={styles.icon} />
          Añadir Empleados
        </Link>
        <Link href="/personal/agregar" className={styles.item} type="button">
          <BsPersonRaisedHand className={styles.icon} />
          Acciones de Personal
        </Link>
      </div>
      <CompactTable
        columns={COLUMNS}
        data={searchData}
        theme={theme}
        layout={{ custom: true, horizontalScroll: true }}
        pagination={pagination}
      />
      <br />
      <div className="flex flex-row gap-16 text-dark  justify-start items-center">
        <span>
          Pagina {currentPage + 1} de &nbsp;
          {pagination.state.getTotalPages(data.nodes)}
        </span>
        <span className="flex gap-2 items-center">
          <button
            className=" w-8 h-8 flex items-center justify-center bg-grey text-primary hover:text-white rounded hover:bg-primary"
            onClick={() => {
              pagination.fns.onSetPage(0);
              setCurrentPage(0);
            }}
          >
            <AiOutlineDoubleLeft />
          </button>
          <button
            className=" w-8 h-8 flex items-center justify-center bg-grey text-primary hover:text-white rounded hover:bg-primary"
            onClick={() => {
              if (currentPage > 0) {
                pagination.fns.onSetPage(currentPage - 1);
                setCurrentPage(currentPage - 1);
              }
            }}
          >
            <AiOutlineLeft />
          </button>
          {pagination.state
            .getPages(data.nodes)
            .map((_: any, index: number) => (
              <button
                key={index}
                type="button"
                className=" w-8 h-8 flex items-center justify-center bg-primary text-white rounded hover:bg-primary"
                style={{
                  fontWeight:
                    pagination.state.page === index ? 'bold' : 'normal',
                }}
                onClick={() => setPage(index)}
              >
                {index + 1}
              </button>
            ))}
          <button
            className=" w-8 h-8 flex items-center justify-center bg-grey text-primary hover:text-white rounded hover:bg-primary"
            onClick={() => {
              if (
                currentPage + 1 <
                pagination.state.getTotalPages(data.nodes)
              ) {
                setCurrentPage(currentPage + 1);
                pagination.fns.onSetPage(currentPage + 1);
              }
            }}
          >
            <AiOutlineRight />
          </button>
          <button
            className=" w-8 h-8 flex items-center justify-center bg-grey text-primary hover:text-white rounded hover:bg-primary"
            onClick={() => {
              const lastPage = pagination.state.getTotalPages(data.nodes) - 1;
              setCurrentPage(lastPage);
              pagination.fns.onSetPage(lastPage);
            }}
          >
            <AiOutlineDoubleRight />
          </button>
        </span>
      </div>
    </div>
  );
}

export default Personal;
