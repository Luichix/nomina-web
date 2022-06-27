import React, { useContext } from 'react'
import styles from './Sidenav.module.css'
import classNames from 'classnames'
import ThemeContext from '../../../../contexts/ThemeContext'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { GiHistogram } from 'react-icons/gi'
import { MdOutlineHelp } from 'react-icons/md'
import { MdBackupTable } from 'react-icons/md'
import {
  AiOutlineAppstoreAdd,
  AiFillSetting,
  AiOutlineFieldTime,
} from 'react-icons/ai'
import { BsCashCoin, BsFileEarmarkPerson } from 'react-icons/bs'
import userPicture from '../../../../assets/userPicture.png'

const Sidenav = ({ nav, handleNav }) => {
  const info = useSelector((state) => state.user)
  const { theme } = useContext(ThemeContext)
  return (
    <div className={classNames(styles.sidenav, styles[nav], styles[theme])}>
      <div className={styles.list}>
        <Link to="/account" onClick={handleNav}>
          <div className={styles.profile}>
            <div className={classNames(styles.item)}>
              {info.photoURL !== '' && info.photoURL !== null ? (
                <figure className={styles.figure}>
                  <img
                    alt="user"
                    src={info.photoURL}
                    className={styles.image}
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.display = 'none'
                    }}
                  />
                </figure>
              ) : (
                <img alt="cover" src={userPicture} height={45} width={45} />
              )}
            </div>
            <div className={styles.link}>
              <h2 className={styles.displayName}>{info.name}</h2>
              <p className={styles.displayEmail}>{info.email}</p>
            </div>
          </div>
        </Link>
        <hr className={styles.line}></hr>
        <Link to="/reports" onClick={handleNav} className={styles.group}>
          <div className={classNames(styles.item, styles.colorGreen)}>
            <GiHistogram />
          </div>
          <div className={styles.link}>Reportes</div>
        </Link>
        <Link to="/personal" onClick={handleNav} className={styles.group}>
          <div className={classNames(styles.item, styles.colorYellow)}>
            <BsFileEarmarkPerson />
          </div>
          <div className={styles.link}>Personal</div>
        </Link>
        <Link to="/hours" onClick={handleNav} className={styles.group}>
          <div className={classNames(styles.item, styles.colorRed)}>
            <AiOutlineFieldTime />
          </div>
          <div className={styles.link}>Horas</div>
        </Link>
        <Link to="/consolidated" onClick={handleNav} className={styles.group}>
          <div className={classNames(styles.item, styles.colorBlue)}>
            <MdBackupTable />
          </div>
          <div className={styles.link}>Consolidado</div>
        </Link>
        <Link to="/payroll" onClick={handleNav} className={styles.group}>
          <div className={classNames(styles.item, styles.colorEsmerald)}>
            <BsCashCoin />
          </div>
          <div className={styles.link}>Planilla</div>
        </Link>
        <Link to="/complements" onClick={handleNav} className={styles.group}>
          <div className={classNames(styles.item, styles.colorViolet)}>
            <AiOutlineAppstoreAdd />
          </div>
          <div className={styles.link}>Complementos</div>
        </Link>
        <Link to="/setting" onClick={handleNav} className={styles.group}>
          <div className={classNames(styles.item, styles.colorGray)}>
            <AiFillSetting />
          </div>
          <div className={styles.link}>Configuración</div>
        </Link>
        <Link to="/help" onClick={handleNav} className={styles.group}>
          <div className={classNames(styles.item, styles.colorSky)}>
            <MdOutlineHelp />
          </div>
          <div className={styles.link}>Ayuda</div>
        </Link>
      </div>
    </div>
  )
}

export default Sidenav
