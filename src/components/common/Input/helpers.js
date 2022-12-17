export const inputHandler = ({ setState, setMessage, setValid, setInfo }) => {
  const validRegExp = /[^\s\w]/
  const minLengthRegExp = /.{5,}/
  const changeHandler = (event) => {
    if (!validRegExp.test(event.target.value.trimStart())) {
      if (event.target.value.endsWith('  ')) {
        setMessage('Multiple spaces are not allowed')
        setValid(false)
        setInfo('error')
      } else {
        setState(event.target.value)
      }
    }
  }
  const keyUpHandler = (event) => {
    if (minLengthRegExp.test(event.target.value.trim())) {
      setValid(true)
      setInfo('success')
      setMessage('')
    }
  }
  const blurHandler = (event) => {
    if (!minLengthRegExp.test(event.target.value.trim())) {
      setMessage('At least 5 characters')
      setValid(false)
      setInfo('error')
    } else {
      setState(event.target.value.trim())
      setValid(true)
      setInfo('success')
      setMessage('')
    }
  }

  const inputMethods = { changeHandler, keyUpHandler, blurHandler }
  return inputMethods
}

export const emailHandler = ({ setState, setMessage, setValid, setInfo }) => {
  const validRegExp = /[^\w@.]/
  const emailValidRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const changeHandler = (event) => {
    if (!validRegExp.test(event.target.value.trim())) {
      setState(event.target.value)
    }
  }
  const keyUpHandler = (event) => {
    if (emailValidRegExp.test(event.target.value.trim())) {
      setValid(true)
      setInfo('success')
      setMessage('')
    }
  }
  const blurHandler = (event) => {
    if (!emailValidRegExp.test(event.target.value.trim())) {
      setMessage('Please enter a valid email')
      setValid(false)
      setInfo('error')
    } else {
      setState(event.target.value.trim())
      setValid(true)
      setInfo('success')
      setMessage('')
    }
  }

  const inputMethods = { changeHandler, keyUpHandler, blurHandler }
  return inputMethods
}
