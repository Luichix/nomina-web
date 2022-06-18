export const selectHandler = ({ setState, setMessage, setValid, setInfo }) => {
  const validRegExp = /[^\s\w]/
  const changeHandler = (event) => {
    if (!validRegExp.test(event.target.value.trim())) {
      setState(event.target.value)
    }
  }
  const keyUpHandler = (event) => {
    if (!event.target.value.trim() === '') {
      setValid(true)
      setInfo('success')
      setMessage('')
    }
  }
  const blurHandler = (event) => {
    if (!event.target.value.trim() === '') {
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
