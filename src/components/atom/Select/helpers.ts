export const selectHandler = ({
  setState,
  setMessage,
  setValid,
  setInfo,
}: {
  setState: (state: string) => void;
  setMessage: (message: string) => void;
  setValid: (valid: boolean) => void;
  setInfo: (info: string) => void;
}) => {
  const validRegExp = /[^\s\w]/;
  const changeHandler = (event: { target: { value: string } }) => {
    if (!validRegExp.test(event.target.value.trim())) {
      setState(event.target.value);
    }
  };
  const keyUpHandler = (event: { target: { value: string } }) => {
    if (!event.target.value.trim()) {
      setValid(true);
      setInfo('success');
      setMessage('');
    }
  };
  const blurHandler = (event: { target: { value: string } }) => {
    if (!event.target.value.trim()) {
      setMessage('Please enter a valid email');
      setValid(false);
      setInfo('error');
    } else {
      setState(event.target.value.trim());
      setValid(true);
      setInfo('success');
      setMessage('');
    }
  };

  const inputMethods = { changeHandler, keyUpHandler, blurHandler };
  return inputMethods;
};
