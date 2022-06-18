import axios from 'axios'
export const BASE_URL = import.meta.env.REACT_APP_API_ENDPOINT

export const findUser = async (query) => {
  const url = `${BASE_URL}/get-user-info`
  const params = { uid: query }
  try {
    return await axios.post(url, params)
  } catch (error) {
    return []
  }
}

export const createUser = async (newObject) => {
  const url = `${BASE_URL}/user-info`
  try {
    return await axios.post(url, newObject)
  } catch (error) {
    return []
  }
}

export const updateUser = async (newObject) => {
  const url = `${BASE_URL}/user-info`
  try {
    return await axios.put(url, newObject)
  } catch (error) {
    return []
  }
}
