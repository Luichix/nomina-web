import React, { useContext } from 'react'
import styles from './Sidenav.module.css'
import classNames from 'classnames'
import { ThemeContext } from '@Contexts/index'
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
// import userPicture from '../../../../assets/userPicture.png'
import { RootState } from '@Redux/store'

const Sidenav = ({
  nav,
  handleNav,
}: {
  nav: string
  handleNav: () => void
}) => {
  const info = useSelector((state: RootState) => state.user)
  const { theme } = useContext(ThemeContext)
  return (
    <div className={classNames(styles.sidenav, styles[nav], styles[theme])}>
      <div className={styles.list}>
        <a href="/account" onClick={handleNav}>
          <div className={styles.profile}>
            <div className={classNames(styles.item)}>
              <span className={styles.letterUser}>
                {info.name[0].toUpperCase()}
              </span>
              {/* {info.avatar !== '' && info.avatar !== null ? (
                <figure className={styles.figure}>
                  <img
                    alt="user"
                    src={info.avatar}
                    className={styles.image}
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.display = 'none'
                    }}
                  />
                </figure>
              ) : (
                <img alt="cover" src={userPicture} height={45} width={45} />
              )} */}
            </div>
            <div className={classNames(styles.user)}>
              <h2>{info.name}</h2>
              <p>{info.email}</p>
            </div>
          </div>
        </a>
        <hr className={styles.line}></hr>
        <a href="/reports" onClick={handleNav} className={styles.group}>
          <div className={classNames(styles.item, styles.colorGreen)}>
            <GiHistogram />
          </div>
          <div className={styles.link}>Reportes</div>
        </a>
        <a href="/personal" onClick={handleNav} className={styles.group}>
          <div className={classNames(styles.item, styles.colorYellow)}>
            <BsFileEarmarkPerson />
          </div>
          <div className={styles.link}>Personal</div>
        </a>
        <a href="/hours" onClick={handleNav} className={styles.group}>
          <div className={classNames(styles.item, styles.colorRed)}>
            <AiOutlineFieldTime />
          </div>
          <div className={styles.link}>Horas</div>
        </a>
        <a href="/consolidated" onClick={handleNav} className={styles.group}>
          <div className={classNames(styles.item, styles.colorBlue)}>
            <MdBackupTable />
          </div>
          <div className={styles.link}>Consolidado</div>
        </a>
        <a href="/payroll" onClick={handleNav} className={styles.group}>
          <div className={classNames(styles.item, styles.colorEsmerald)}>
            <BsCashCoin />
          </div>
          <div className={styles.link}>Planilla</div>
        </a>
        <a href="/complements" onClick={handleNav} className={styles.group}>
          <div className={classNames(styles.item, styles.colorViolet)}>
            <AiOutlineAppstoreAdd />
          </div>
          <div className={styles.link}>Complementos</div>
        </a>
        <a href="/setting" onClick={handleNav} className={styles.group}>
          <div className={classNames(styles.item, styles.colorGray)}>
            <AiFillSetting />
          </div>
          <div className={styles.link}>Configuración</div>
        </a>
        <a href="/help" onClick={handleNav} className={styles.group}>
          <div className={classNames(styles.item, styles.colorSky)}>
            <MdOutlineHelp />
          </div>
          <div className={styles.link}>Ayuda</div>
        </a>
      </div>
    </div>
  )
}

export default Sidenav
