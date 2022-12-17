import React, { useState } from 'react'
import Input from '../Input'
import styles from './Password.module.css'
import classNames from 'classnames'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'

function Password(props) {
  const [see, setSee] = useState(false)

  const seeHandle = (event) => {
    event.preventDefault()
    if (see) setSee(false)
    else setSee(true)
  }

  return (
    <div className={styles.password}>
      <Input {...props} type={see ? 'text' : 'password'} />
      <button onClick={seeHandle} className={classNames(styles.view)}>
        <i>{see ? <AiFillEye /> : <AiFillEyeInvisible />}</i>
      </button>
    </div>
  )
}

export default Password
