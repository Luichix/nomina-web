import React, { useState, useEffect, useRef } from 'react'
import styles from './Answer.module.css'
import classNames from 'classnames'
import { BiSearchAlt } from 'react-icons/bi'
import { BsPencilSquare } from 'react-icons/bs'
import Modal from '../../../components/common/Modal'
import Title from '../../../components/common/Title'
import Search from '../../../components/common/Search'
import Paginate from '../../../components/common/Paginate'
import IconLabel from '../../../components/customs/IconLabel'
import TableData from '../../../components/customs/TableData'
import ModalForm from './components/ModalForm'
import { useQuery } from '@apollo/client'
import { GET_ANSWERS } from '../../../services/graphql/query/assistant.query'
import ButtonPar from '../../../components/customs/ButtonPar'
import { useSelector } from 'react-redux'
import { useMutation } from '@apollo/client'
import { UPDATE_ANSWERS } from '../../../services/graphql/mutation/assistant.mutation'
import { answerInterceptor } from '../../../utilities/interceptors/answers.interceptor'

function Answer() {
  const modalRef = useRef(null)
  const { uid } = useSelector((state) => state.user)
  const [edit, setEdit] = useState(false)
  const [dataTable, setDataTable] = useState([])
  const [dataAnswer, setDataAnswer] = useState(null)
  const [dataFromPaginate, setDataFromPaginate] = useState(null)
  const [dataSearch, setDataSearch] = useState(null)
  const [itemsPerPage] = useState(20)
  const [page, setPage] = useState(0)
  const [search, setSearch] = useState('')
  const [table, setTable] = useState({ display: 'hidden', disabled: true })
  const [updateAnswers] = useMutation(UPDATE_ANSWERS)

  const { data } = useQuery(GET_ANSWERS, {
    variables: {
      uid: uid,
      language: 'es',
    },
  })
  const [modal, setModal] = useState({
    intent: '',
    answer: '',
    enable: false,
  })

  useEffect(() => {
    if (data) {
      const interceptor = answerInterceptor(data.getAnswers.answers)
      setDataAnswer(interceptor)
      setDataTable(interceptor)
    }
  }, [data])

  const sumbitTableHandler = () => {
    const adapter = { answers: dataTable, language: 'es', uid: uid }
    updateAnswers({ variables: adapter })
      .then(() => {
        setDataAnswer(dataTable)
        setTable({ display: 'hidden', disabled: true })
        setEdit(false)
      })
      .catch((errormsg) => {
        console.log(errormsg)
      })
  }

  const submitModalHandler = () => {
    const intent = modal.intent
    const answer = modal.answer
    const enable = modal.enable
    const dataSend = dataAnswer.map((item) =>
      item.intent === intent
        ? (item = { ...item, answer: answer, enable: enable })
        : item
    )
    const adapter = { answers: dataSend, language: 'es', uid: uid }
    updateAnswers({ variables: adapter })
      .then(() => {
        setDataTable(dataSend)
        setDataAnswer(dataSend)
        closeModal()
        setModal({
          intent: '',
          answer: '',
          enable: false,
        })
      })
      .catch((errormsg) => {
        console.log(errormsg)
      })
  }

  const updatedDataFromPaginate = (data) => setDataFromPaginate(data)

  const handleSearch = (value) => {
    if (value.length > 0) {
      const newData = dataAnswer.filter((item) => {
        return (
          item.intent.toLowerCase().includes(value.toLowerCase()) ||
          item.answer.toLowerCase().includes(value.toLowerCase())
        )
      })
      setDataSearch(newData)
    } else {
      setDataSearch(null)
    }
  }

  const displayTable = (event) => {
    event.preventDefault()
    if (table.display === 'visible') {
      setTable({ display: 'hidden', disabled: true })
      setEdit(false)
      setDataTable(dataAnswer)
    } else {
      setTable({ display: 'visible', disabled: false })
      setEdit(true)
    }
  }

  const openModal = () => {
    modalRef.current.style.display = 'flex'
  }

  const closeModal = () => {
    modalRef.current.style.display = 'none'
  }

  return (
    <>
      <Modal refModal={modalRef} closeModal={closeModal}>
        <IconLabel label="Edit Answer"></IconLabel>
        <ModalForm
          modal={modal}
          setModal={setModal}
          closeModal={closeModal}
          handleClick={submitModalHandler}
        />
      </Modal>
      <div className={styles.answer}>
        <div className={styles.header}>
          <IconLabel
            label="Intents and Answers"
            handleClick={displayTable}
            iconType="normal"
          >
            <BsPencilSquare />
          </IconLabel>
          <div className={styles.float}>
            <Search
              value={search}
              onChange={setSearch}
              handleSearch={handleSearch}
            >
              <BiSearchAlt />
            </Search>
          </div>
        </div>
        <Title color="base" size="lg" isCentered></Title>
        <div className={styles.container}>
          {dataAnswer ? (
            <Paginate
              data={dataAnswer}
              itemsPerPage={itemsPerPage}
              setData={updatedDataFromPaginate}
              setPage={setPage}
            />
          ) : null}
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>N°</th>
                <th className={styles.th}>Intent</th>
                <th className={classNames(styles.th, styles.thAnswer)}>
                  Answer
                </th>
                <th className={classNames(styles.th, styles.thAction)}>
                  Action
                </th>
              </tr>
            </thead>
            {dataSearch ? (
              dataSearch.length > 0 ? (
                dataSearch.map((info, index) => (
                  <TableData
                    key={index}
                    id={index + 1}
                    intent={info.intent}
                    answer={info.answer}
                    enable={info.enable}
                    visible={table.display}
                    disabled={table.disabled}
                    setModal={setModal}
                    modalHandler={openModal}
                    edit={edit}
                    dataTable={dataTable}
                    setDataTable={setDataTable}
                  />
                ))
              ) : (
                <tbody key="NAN">
                  <tr>
                    <td className={styles.td} colSpan={4}>
                      Sin resultados
                    </td>
                  </tr>
                </tbody>
              )
            ) : dataFromPaginate ? (
              dataFromPaginate.map((info, index) => (
                <TableData
                  key={index}
                  id={page * itemsPerPage + index - itemsPerPage + 1}
                  intent={info.intent}
                  answer={info.answer}
                  enable={info.enable}
                  visible={table.display}
                  disabled={table.disabled}
                  setModal={setModal}
                  modalHandler={openModal}
                  edit={edit}
                  dataTable={dataTable}
                  setDataTable={setDataTable}
                />
              ))
            ) : dataAnswer ? (
              dataAnswer.map((info, index) => {
                if (index < itemsPerPage) {
                  return (
                    <TableData
                      key={index}
                      id={index + 1}
                      intent={info.intent}
                      answer={info.answer}
                      enable={info.enable}
                      visible={table.display}
                      disabled={table.disabled}
                      setModal={setModal}
                      modalHandler={openModal}
                      edit={edit}
                      dataTable={dataTable}
                      setDataTable={setDataTable}
                    />
                  )
                }
              })
            ) : (
              <tbody>
                <tr>
                  <td className={styles.td} colSpan={4}>
                    Sin datos
                  </td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
        <ButtonPar
          display={table.display}
          cancelClick={displayTable}
          submitClick={sumbitTableHandler}
        />
      </div>
    </>
  )
}

export default Answer
