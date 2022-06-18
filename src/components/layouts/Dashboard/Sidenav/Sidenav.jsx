import React from 'react'
import styles from './Sidenav.module.css'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { IoMdPhonePortrait } from 'react-icons/io'
import { GiVirtualMarker } from 'react-icons/gi'
import {
  //  MdPayment,
  MdOutlineSecurity,
} from 'react-icons/md'
import { MdQuestionAnswer } from 'react-icons/md'
import userPicture from '../../../../assets/userPicture.png'

const Sidenav = ({ nav, handleNav }) => {
  const info = useSelector((state) => state.user)
  return (
    <div className={classNames(styles.sidenav, styles[nav])}>
      <div className={styles.profile}>
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

        <h2 className={styles.displayName}>{info.name}</h2>
        <p className={styles.displayEmail}>{info.email}</p>
      </div>
      <div className={styles.group}>
        <h4 className={styles.title}>Account</h4>

        <Link to="/account" onClick={handleNav} className={styles.link}>
          <IoMdPhonePortrait />
          Personal Info
        </Link>
        <Link to="/assistant" onClick={handleNav} className={styles.link}>
          <GiVirtualMarker />
          Virtual Assistant
        </Link>
        {info.assistantAsigned && (
          <Link to="/answer" onClick={handleNav} className={styles.link}>
            <MdQuestionAnswer />
            Answers
          </Link>
        )}
        <Link to="/security" onClick={handleNav} className={styles.link}>
          <MdOutlineSecurity />
          Security
        </Link>
        {/* <Link to="/payment" onClick={handleNav} className={styles.link}>
          <MdPayment />
          Payment
        </Link> */}
      </div>
    </div>
  )
}

export default Sidenav
