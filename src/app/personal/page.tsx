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
import { useRowSelect } from '@table-library/react-table-library/select';
import { useSort } from '@table-library/react-table-library/sort';
import { useCustom } from '@table-library/react-table-library/table';
import {
  findNodeById,
  insertNode,
} from '@table-library/react-table-library/common';

import {
  FaPen,
  FaSearch,
  FaChevronRight,
  FaChevronDown,
  FaChevronUp,
} from 'react-icons/fa';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';

type CellFunction = (item: any) => any;

function Personal() {
  const data = { nodes };

  /* Theme */
  const theme = useTheme([
    getTheme(),
    {
      Table: `
        border-radius: 4px;
        --data-table-library_grid-template-columns: 60px repeat(24, minmax(150px, 1fr));
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

  /* Pagination */
  const pagination = usePagination(data, {
    state: {
      page: 0,
      size: 5,
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

  /* Search */
  const [search, setSearch] = useState('');

  useCustom('search', data, {
    state: { search },
    onChange: onSearchChange,
  });

  function onSearchChange(action: any, state: any) {
    console.log(action, state);
    pagination.fns.onSetPage(0);
  }

  //* Filter *//

  const [isHide, setHide] = React.useState(false);

  useCustom('filter', data, {
    state: { isHide },
    onChange: onFilterChange,
  });

  function onFilterChange(action: any, state: any) {
    console.log(action, state);
    pagination.fns.onSetPage(0);
  }

  /* Select */
  const select = useRowSelect(data, {
    onChange: onSelectChange,
  });

  function onSelectChange(action: any, state: any) {
    console.log(action, state);
  }

  //* Sort *//

  const sort = useSort(
    data,
    {
      onChange: onSortChange,
    },
    {
      sortIcon: {
        iconDefault: null,
        iconUp: <FaChevronUp />,
        iconDown: <FaChevronDown />,
      },
      sortFns: {
        ID: (array) => array.sort((a, b) => a.idPersonal - b.idPersonal),
        NAME: (array) => array.sort((a, b) => a.name.localeCompare(b.name)),
        SURNAME: (array) =>
          array.sort((a, b) => a.surname.localeCompare(b.surname)),
        SALARY: (array) => array.sort((a, b) => a.salary - b.salary),
        WORKAREA: (array) =>
          array.sort((a, b) => a.workArea.localeCompare(b.workArea)),
      },
    }
  );

  function onSortChange(action: any, state: any) {
    console.log(action, state);
  }

  //* Drawer *//

  // const [drawerId, setDrawerId] = React.useState(null);
  // const [edited, setEdited] = React.useState('');

  // const handleEdit = (event: any) => {
  //   setEdited(event.target.value);
  // };

  // const handleCancel = () => {
  //   setEdited('');
  //   setDrawerId(null);
  // };

  // const handleSave = () => {
  //   const node = findNodeById(data.nodes, drawerId);
  //   const editedNode = { ...node, name: edited };
  //   const nodes = insertNode(data.nodes, editedNode);

  //   setData({
  //     nodes,
  //   });

  //   setEdited('');
  //   setDrawerId(null);
  // };

  //* Modal *//

  // const [modalOpened, setModalOpened] = React.useState(false);

  //* Custom Modifiers *//

  let modifiedNodes = data.nodes;

  // search;
  modifiedNodes = modifiedNodes.filter((node) =>
    node.name.toLowerCase().includes(search.toLowerCase())
  );

  // filter
  // modifiedNodes = isHide
  //   ? modifiedNodes.filter((node) => !node.isComplete)
  //   : modifiedNodes;

  //* COLUMNS *//
  const COLUMNS: Record<string, string | CellFunction | object>[] = [
    {
      label: '',
      renderCell: (item) => (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Link href={`/personal/personal-actions/${item.id}`}>
            <FaPen />
          </Link>
        </div>
      ),
    },
    {
      label: 'Id',
      renderCell: (item) => item.idPersonal,
      sort: { sortKey: 'ID' },
    },
    {
      label: 'Nombre',
      renderCell: (item) => item.name,
      sort: { sortKey: 'NAME' },
    },
    {
      label: 'Apellido',
      renderCell: (item) => item.surname,
      sort: { sortKey: 'SURNAME' },
    },
    { label: 'N° de Identidad', renderCell: (item) => item.identityCard },
    { label: 'Documento', renderCell: (item) => item.typeCard },
    { label: 'Telefono', renderCell: (item) => item.phoneNumber },
    {
      label: 'Area',
      renderCell: (item) => item.workArea,
      sort: { sortKey: 'WORKAREA' },
    },
    { label: 'Puesto', renderCell: (item) => item.job },
    {
      label: 'Salario',
      renderCell: (item) => item.salary,
      sort: { sortKey: 'SALARY' },
    },
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
  return (
    <div className={styles.container}>
      <div className={styles.cinta}>
        <label htmlFor="search" className="flex gap-2 items-center text-dark">
          Buscar por Nombre:&nbsp;
          <input
            id="search"
            type="text"
            value={search}
            onChange={({ target }) => setSearch(target.value)}
            className="py-1 px-2 bg-white border-l-2 border-b rounded outline-none border-primary  auto"
            autoComplete="off"
            placeholder="Buscar por nombre"
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
      </div>
      <CompactTable
        columns={COLUMNS}
        data={{ ...data, nodes: modifiedNodes }}
        theme={theme}
        layout={{ custom: true, horizontalScroll: true }}
        pagination={pagination}
        select={select}
        sort={sort}
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
