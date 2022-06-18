import axios from 'axios'

export const API = import.meta.env.REACT_APP_API_ENDPOINT

export const apiData = async (query) => {
  const url = `${API}/users?uid=${query}`

  return await axios.get(url)
}

apiData('ytFUp1wfLpMukMJAw4giROyeFxD2')
