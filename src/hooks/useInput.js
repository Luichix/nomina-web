import { useState } from 'react'

export const useInput = ({
  name,
  type,
  placeholder,
  handlerMethods = () => {
    return {
      changeHandler: () => {},
      keyUpHandler: () => {},
      blurHandler: () => {},
    }
  },
}) => {
  const [state, setState] = useState('')
  const [message, setMessage] = useState('')
  const [valid, setValid] = useState(false)
  const [info, setInfo] = useState(null)

  const handler = handlerMethods({ setState, setMessage, setValid, setInfo })

  return {
    name,
    type,
    placeholder,
    value: state,
    setState,
    changeHandler: handler.changeHandler,
    keyUpHandler: handler.keyUpHandler,
    blurHandler: handler.blurHandler,
    info,
    message,
    valid,
    setValid,
    setInfo,
  }
}
