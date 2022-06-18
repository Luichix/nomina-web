export const adapterUser = ({
  uid = '',
  name = '',
  email = '',
  phoneNumber = '',
  industry = '',
  employeeCount = '',
  country = '',
  city = '',
  address = '',
  company = '',
  assistantAsigned = null,
}) => {
  const variables = {
    address,
    city,
    company,
    country,
    email,
    employeeCount,
    industry,
    name,
    phoneNumber,
    uid,
    assistantAsigned,
  }
  return variables
}

export const adapterFormBasic = ({
  uid,
  name,
  email,
  company,
  phoneNumber,
}) => {
  const variables = {
    uid,
    name,
    email,
    company,
    phoneNumber,
  }
  return variables
}

export const adapterFormAddress = ({ uid, country, city, address }) => {
  const variables = {
    uid,
    country,
    city,
    address,
  }
  return variables
}

export const adapterUserCredentials = (credentials) => {
  const variables = {
    user: credentials.user.displayName,
    email: credentials.user.email,
    emailVerified: credentials.user.emailVerified,
    photoURL: credentials.user.photoURL,
    uid: credentials.user.uid,
    accessToken: credentials.user.accessToken,
  }
  return variables
}
