import React, { useState, useEffect } from 'react'
import propType from 'prop-types'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai'
import styles from './Paginate.module.css'
import classNames from 'classnames'

const Paginate = ({ data, itemsPerPage, setData, setPage }) => {
  const [pageData, setPageData] = useState(null)
  const [totalPages, setTotalPages] = useState(null)
  const [currentClickedNumber, setCurrentClickedNumber] = useState(1)
  const [activeButton, setActiveButton] = useState(1)

  /** determineNumberOfPages: Determina el numero de paginas a mostrar */
  const determineNumberOfPages = () => {
    let paginateDataObject = {}
    let index = 0
    let dataLength = data.length
    let chunckArray = []

    for (index = 0; index < dataLength; index += itemsPerPage) {
      let newChunck = data.slice(index, index + itemsPerPage)
      chunckArray.push(newChunck)
    }

    chunckArray.forEach((chunk, i) => {
      paginateDataObject[i + 1] = chunk
    })

    setTotalPages(chunckArray.length)
    setPageData(paginateDataObject)
  }

  /** handleClickedNumber: maneja la pagina actual que se ha seleccionado */
  const handleClickedNumber = (e) => {
    setCurrentClickedNumber(parseInt(e.target.innerText))
  }

  /** moveToLasPage: nos mueve a la ultima pagina */
  const moveToLastPage = () => {
    setCurrentClickedNumber(totalPages)
    setActiveButton(totalPages)
  }

  /** moveToFirstPage: nos mueve a la primera pagina */
  const moveToFirstPage = () => {
    setCurrentClickedNumber(1)
    setActiveButton(1)
  }

  /** moveToNextPage: nos mueve a la pagina siguiente */
  const moveOnePageForward = () => {
    setCurrentClickedNumber(
      currentClickedNumber + 1 > totalPages
        ? totalPages
        : currentClickedNumber + 1
    )
    setActiveButton(
      currentClickedNumber + 1 > totalPages
        ? totalPages
        : currentClickedNumber + 1
    )
  }

  /** moveToPreviousPage: nos mueve a la pagina anterior */
  const moveOnePageBackward = () => {
    setCurrentClickedNumber(
      currentClickedNumber - 1 < 1 ? 1 : currentClickedNumber - 1
    )
    setActiveButton(currentClickedNumber - 1 < 1 ? 1 : currentClickedNumber - 1)
  }

  /** useEffect [data]: Determina la cantidad de paginas  */
  useEffect(() => {
    determineNumberOfPages()
  }, [data])

  /** useEffect [currentClickedNumber]: Determina la pagina actual */
  useEffect(() => {
    if (pageData) {
      setData(pageData[currentClickedNumber])
      setPage(parseInt(currentClickedNumber))
    }
  }, [currentClickedNumber])

  /** activeButton: Selección el boton activo */
  const activateButton = (e) => {
    setActiveButton(parseInt(e.target.value))
  }

  /** pageNumberRender: Renderiza la principales paginas a mostrar */
  const pageNumberRender = () => {
    let pages = []
    let i, cont
    if (totalPages === 1) {
      i = currentClickedNumber
      cont = 1
    } else if (currentClickedNumber - 1 === 0) {
      i = currentClickedNumber
      cont = 2
    } else {
      i = currentClickedNumber - 1
      if (currentClickedNumber === totalPages) {
        cont = currentClickedNumber
      } else {
        cont = currentClickedNumber + 1
      }
    }

    for (i; i <= cont; i++) {
      pages.push(
        <button
          className={
            activeButton === i
              ? classNames(styles.item, styles.active)
              : styles.item
          }
          onClick={activateButton}
          value={i}
          key={i}
        >
          {i}
        </button>
      )
    }
    return pages
  }

  return (
    <div className={styles.container}>
      {currentClickedNumber > 1 ? (
        <div className={styles.right}>
          <button
            onClick={moveToFirstPage}
            className={classNames(styles.arrow, styles.item)}
          >
            <AiOutlineDoubleLeft />
          </button>
          <button
            onClick={moveOnePageBackward}
            className={classNames(styles.arrow, styles.item)}
          >
            <AiOutlineLeft />
          </button>
        </div>
      ) : (
        <div />
      )}
      <div className={styles.center} onClick={handleClickedNumber}>
        {pageNumberRender()}
      </div>
      {currentClickedNumber < totalPages ? (
        <div className={styles.left}>
          <button
            onClick={moveOnePageForward}
            className={classNames(styles.arrow, styles.item)}
          >
            <AiOutlineRight />
          </button>
          <button
            onClick={moveToLastPage}
            className={classNames(styles.arrow, styles.item)}
          >
            <AiOutlineDoubleRight />
          </button>
        </div>
      ) : (
        <div />
      )}
    </div>
  )
}

Paginate.propType = {
  data: propType.array.isRequired,
  setData: propType.func.isRequired,
  itemsPerPage: propType.number.isRequired,
  setPage: propType.func.isRequired,
}

export default Paginate
