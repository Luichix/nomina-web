import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import styles from './TableData.module.css'
import { BsPencilSquare } from 'react-icons/bs'
import CheckBox from '../../../components/common/CheckBox'
import TextArea from '../../../components/common/TextArea'
import { toKebabCase } from '../../../utilities/scripts/toKebabCase'
import PropTypes from 'prop-types'

function TablaData({
  id,
  intent,
  answer,
  enable,
  visible,
  disabled,
  setModal,
  modalHandler = () => {},
  edit,
  dataTable,
  setDataTable,
  style,
}) {
  const [active, setActive] = useState(enable)
  const [input, setInput] = useState(answer)

  useEffect(() => {
    if (!edit) {
      setActive(enable)
      setInput(answer)
    }
  }, [edit])

  const modifyData = () => {
    const dataSend = dataTable.map((item) =>
      item.intent === intent ? (item = { ...item, answer: input }) : item
    )
    setDataTable(dataSend)
  }

  const checkedHandler = () => {
    if (active) {
      setActive(false)
      const dataSend = dataTable.map((item) =>
        item.intent === intent ? (item = { ...item, enable: false }) : item
      )
      setDataTable(dataSend)
    } else {
      setActive(true)
      const dataSend = dataTable.map((item) =>
        item.intent === intent ? (item = { ...item, enable: true }) : item
      )
      setDataTable(dataSend)
    }
  }

  const handleModal = () => {
    setModal({ intent: intent, enable: enable, answer: answer })
    modalHandler()
  }

  return (
    <tbody className={styles.table}>
      <tr className={classNames(style, styles.table)}>
        <td className={classNames(styles.td, styles.id)}>{id}</td>
        <td className={classNames(styles.td, styles.intent)}>
          <CheckBox
            visible={visible}
            checked={active}
            checkedHandler={checkedHandler}
          />
          #{toKebabCase(intent)}
        </td>
        <td className={classNames(styles.answer)}>
          <TextArea
            type="table"
            length="150"
            autoComplete="off"
            value={input}
            changeHandler={({ target }) => setInput(target.value)}
            disabled={disabled}
            placeholder="Answer"
            blurHandler={modifyData}
            style={classNames({
              [styles.nonDisabled]: !disabled,
              [styles.disabled]: disabled,
            })}
          />
        </td>
        <td className={classNames(styles.td, styles.action)}>
          <div className={styles.buttons}>
            <button className={styles.pencil} onClick={handleModal}>
              <BsPencilSquare />
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  )
}

export default TablaData

TablaData.propTypes = {
  id: PropTypes.number,
  intent: PropTypes.string,
  answer: PropTypes.string,
  enable: PropTypes.bool,
  visible: PropTypes.string,
  disabled: PropTypes.bool,
  setModal: PropTypes.func,
  modalHandler: PropTypes.func,
  edit: PropTypes.bool,
  dataTable: PropTypes.array,
  setDataTable: PropTypes.func,
}
