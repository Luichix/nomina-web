import { useState } from 'react'

interface UseInputProps {
  name: string
  type: string
  label: string
  placeholder: string
  handlerMethods: any
}

export const useInput = ({
  name,
  type,
  label,
  placeholder,
  handlerMethods = () => {
    return {
      changeHandler: () => {},
      keyUpHandler: () => {},
      blurHandler: () => {},
    }
  },
}: UseInputProps) => {
  const [state, setState] = useState('')
  const [message, setMessage] = useState('')
  const [valid, setValid] = useState(false)
  const [info, setInfo] = useState(null)

  const handler = handlerMethods({ setState, setMessage, setValid, setInfo })

  return {
    name,
    type,
    label,
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
