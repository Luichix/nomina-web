import React from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';
import { BsPersonLinesFill } from 'react-icons/bs';
import { MdMoreTime, MdOutlineFastfood } from 'react-icons/md';
import { RiBankFill } from 'react-icons/ri';
import { HiReceiptTax } from 'react-icons/hi';
import { TbFilePencil } from 'react-icons/tb';
import { TbReportAnalytics } from 'react-icons/tb';
import { BsFillInboxFill } from 'react-icons/bs';
import { BsJournalBookmarkFill } from 'react-icons/bs';
import { BsCalendar3 } from 'react-icons/bs';

const Kit = ({ handleModal }: { handleModal: () => void }) => {
  return (
    <div className={classNames(styles.kit)}>
      <div className={styles.tools}>
        <span className={styles.item} onClick={handleModal}>
          Empleados
          <BsPersonLinesFill
            className={classNames(styles.icon, styles.colorSky)}
          />
        </span>
        <span className={classNames(styles.item)}>
          Asistencias
          <MdMoreTime
            className={classNames(styles.icon, styles.colorEsmerald)}
          />
        </span>
        <hr className={styles.line}></hr>
        <span className={classNames(styles.item)}>
          Prestamos
          <RiBankFill className={classNames(styles.icon, styles.colorGray)} />
        </span>
        <span className={styles.item}>
          Comision
          <HiReceiptTax className={classNames(styles.icon, styles.colorPink)} />
        </span>
        <span className={styles.item}>
          Viaticos
          <MdOutlineFastfood
            className={classNames(styles.icon, styles.colorYellow)}
          />
        </span>
        <span className={styles.item}>
          Ajustes
          <TbFilePencil
            className={classNames(styles.icon, styles.colorGreen)}
          />
        </span>
        <hr className={styles.line}></hr>
        <span className={styles.item}>
          Reportes
          <TbReportAnalytics
            className={classNames(styles.icon, styles.colorBlue)}
          />
        </span>
        <span className={styles.item}>
          Colillas
          <BsFillInboxFill
            className={classNames(styles.icon, styles.colorViolet)}
          />
        </span>
        <hr className={styles.line}></hr>
        <span className={classNames(styles.item)}>
          Agenda
          <BsJournalBookmarkFill
            className={classNames(styles.icon, styles.colorRed)}
          />
        </span>
        <span className={styles.item}>
          Calendario
          <BsCalendar3 className={classNames(styles.icon, styles.colorPink)} />
        </span>
      </div>
    </div>
  );
};

export default Kit;
