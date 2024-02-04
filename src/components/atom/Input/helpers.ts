import { Dispatch, SetStateAction } from 'react';

export const inputHandler = ({
  setState,
  setMessage,
  setValid,
  setInfo,
}: {
  setState: Dispatch<SetStateAction<string>>;
  setMessage: Dispatch<SetStateAction<string>>;
  setValid: Dispatch<SetStateAction<boolean>>;
  setInfo: Dispatch<SetStateAction<string | null>>;
}) => {
  const validRegExp = /[^\s\w]/;
  const minLengthRegExp = /.{5,}/;
  const changeHandler = (event: { target: { value: string } }) => {
    if (!validRegExp.test(event.target.value.trimStart())) {
      if (event.target.value.endsWith('  ')) {
        setMessage('Multiple spaces are not allowed');
        setValid(false);
        setInfo('error');
      } else {
        setState(event.target.value);
      }
    }
  };
  const keyUpHandler = (event: { target: { value: string } }) => {
    if (minLengthRegExp.test(event.target.value.trim())) {
      setValid(true);
      setInfo('success');
      setMessage('');
    }
  };
  const blurHandler = (event: { target: { value: string } }) => {
    if (!minLengthRegExp.test(event.target.value.trim())) {
      setMessage('At least 5 characters');
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

export const emailHandler = ({
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
  const validRegExp = /[^\w@.]/;
  const emailValidRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const changeHandler = (event: { target: { value: string } }) => {
    if (!validRegExp.test(event.target.value.trim())) {
      setState(event.target.value);
    }
  };
  const keyUpHandler = (event: { target: { value: string } }) => {
    if (emailValidRegExp.test(event.target.value.trim())) {
      setValid(true);
      setInfo('success');
      setMessage('');
    }
  };
  const blurHandler = (event: { target: { value: string } }) => {
    if (!emailValidRegExp.test(event.target.value.trim())) {
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
