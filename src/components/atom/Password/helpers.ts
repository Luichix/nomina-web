export const passwordHandler = ({
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
  const validRegExp = /(?=.*?[<>])/;
  const uppercaseRegExp = /(?=.*?[A-Z])/;
  const lowercaseRegExp = /(?=.*?[a-z])/;
  const digitsRegExp = /(?=.*[0-9])/;
  const specialCharRegExp = /(?=.*[#?!@$%^&*-])/;
  const minLengthRegExp = /.{8,}/;

  const changeHandler = (event: { target: { value: string } }) => {
    if (!validRegExp.test(event.target.value.trim())) {
      setState(event.target.value);
    }
  };

  const keyUpHandler = (event: { target: { value: string } }) => {
    const passwordInputValue = event.target.value.trim();

    const passwordLength = passwordInputValue.length;
    const uppercasePassword = uppercaseRegExp.test(passwordInputValue);
    const lowercasePassword = lowercaseRegExp.test(passwordInputValue);
    const digitsPassword = digitsRegExp.test(passwordInputValue);
    const specialCharPassword = specialCharRegExp.test(passwordInputValue);
    const minLengthPassword = minLengthRegExp.test(passwordInputValue);

    let errMessage = '';
    if (passwordLength === 0) {
      errMessage = 'Password is empty';
    } else if (!uppercasePassword) {
      errMessage = 'At least one Uppercase';
    } else if (!lowercasePassword) {
      errMessage = 'At least one Lowercase';
    } else if (!digitsPassword) {
      errMessage = 'At least one digit';
    } else if (!specialCharPassword) {
      errMessage = 'At least one Special Characters';
    } else if (!minLengthPassword) {
      errMessage = 'At least minimun 8 characters';
    } else {
      errMessage = '';
    }

    if (errMessage === '') {
      setValid(true);
      setInfo('success');
      setMessage(errMessage);
    } else {
      setValid(false);
      setInfo('error');
      setMessage(errMessage);
      setState(event.target.value.trim());
    }
  };

  const blurHandler = (event: { target: { value: string } }) => {
    if (!validRegExp.test(event.target.value.trim())) {
      setState(event.target.value.trim());
    }
  };

  const inputMethods = {
    changeHandler,
    keyUpHandler,
    blurHandler,
  };
  return inputMethods;
};

export const confirmPasswordHandler = ({
  setState,
  setMessage,
  setValid,
  setInfo,
  password,
}: {
  setState: (state: string) => void;
  setMessage: (message: string) => void;
  setValid: (valid: boolean) => void;
  setInfo: (info: string) => void;
  password: string;
}) => {
  const changeHandler = (event: { target: { value: string } }) => {
    setState(event.target.value);
  };

  const keyUpHandler = (event: { target: { value: string } }) => {
    const passwordConfirm = event.target.value;

    let errMessage = '';
    if (passwordConfirm.length >= password.length) {
      if (passwordConfirm !== password) {
        errMessage = 'Passwords do not match';
      } else {
        errMessage = '';
      }
    }

    if (errMessage === '') {
      setValid(true);
      setInfo('success');
      setMessage(errMessage);
    } else {
      setValid(false);
      setInfo('error');
      setMessage(errMessage);
      setState(event.target.value.trim());
    }
  };

  const blurHandler = (event: { target: { value: string } }) => {
    setState(event.target.value);
  };

  const inputMethods = {
    changeHandler,
    keyUpHandler,
    blurHandler,
  };
  return inputMethods;
};
