import React, { useContext } from 'react'
import styles from './Kit.module.css'
import classNames from 'classnames'
import ThemeContext from '../../../../contexts/ThemeContext'
import { BsPersonLinesFill } from 'react-icons/bs'
import { MdMoreTime, MdOutlineFastfood } from 'react-icons/md'
import { RiBankFill } from 'react-icons/ri'
import { HiReceiptTax } from 'react-icons/hi'
import { TbFilePencil } from 'react-icons/tb'
import { TbReportAnalytics } from 'react-icons/tb'
import { BsFillInboxFill } from 'react-icons/bs'
import { BsJournalBookmarkFill } from 'react-icons/bs'
import { BsCalendar3 } from 'react-icons/bs'

const Kit = ({ handleModal }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={classNames(styles.kit, styles[theme])}>
      <div className={styles.tools}>
        <span className={styles.item} onClick={handleModal}>
          <BsPersonLinesFill
            className={classNames(styles.icon, styles.colorSky)}
          />
        </span>
        <span className={classNames(styles.item)}>
          <MdMoreTime
            className={classNames(styles.icon, styles.colorEsmerald)}
          />
        </span>
        <hr className={styles.line}></hr>
        <span className={classNames(styles.item)}>
          <RiBankFill className={classNames(styles.icon, styles.colorGray)} />
        </span>
        <span className={styles.item}>
          <HiReceiptTax className={classNames(styles.icon, styles.colorPink)} />
        </span>
        <span className={styles.item}>
          <MdOutlineFastfood
            className={classNames(styles.icon, styles.colorYellow)}
          />
        </span>
        <span className={styles.item}>
          <TbFilePencil
            className={classNames(styles.icon, styles.colorGreen)}
          />
        </span>
        <hr className={styles.line}></hr>
        <span className={styles.item}>
          <TbReportAnalytics
            className={classNames(styles.icon, styles.colorBlue)}
          />
        </span>
        <span className={styles.item}>
          <BsFillInboxFill
            className={classNames(styles.icon, styles.colorViolet)}
          />
        </span>
        <hr className={styles.line}></hr>
        <span className={classNames(styles.item)}>
          <BsJournalBookmarkFill
            className={classNames(styles.icon, styles.colorRed)}
          />
        </span>
        <span className={styles.item}>
          <BsCalendar3 className={classNames(styles.icon, styles.colorPink)} />
        </span>
      </div>
    </div>
  )
}

export default Kit
