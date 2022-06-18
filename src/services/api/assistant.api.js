import axios from 'axios'
const BASE_URL = import.meta.env.VITE_API_ENDPOINT

const config = {
  auth: {
    username: import.meta.env.VITE_API_USERNAME,
    token: import.meta.env.VITE_API_TOKEN,
  },
  headers: {
    'Content-Type': 'text/csv',
    'Content-Disposition': 'attachment; filename=file',
  },
}

export const uploadIntentFile = async (newObject) => {
  const url = `${BASE_URL}/assistant/intentFile`
  const response = await axios.put(url, newObject, config)
  return response.data
}

export const uploadEntitieFile = async (newObject) => {
  const url = `${BASE_URL}/assistant/entitieFile`
  const response = await axios.put(url, newObject)
  return response.data
}

export const createAssistant = async (newObject) => {
  const url = `${BASE_URL}/assistant/createAssistant`
  const response = await axios.post(url, newObject)
  return response.data
}

// export const getClientAnswers = async (newObject) => {
//   const url = `${BASE_URL}/assistant/getClientAnswers`
//   const response = await axios.post(url, newObject)
//   return response.data
// }
