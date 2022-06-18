import { userEmptyState } from '../../constants/user.constants'
import { assistantEmptyState } from '../../constants/assistant.constants'

/**
Funciones y objetos para interceptar y transformar el objeto recibido,
retornando propiedades validas.
*/

const dataEmpty = {
  user: { ...userEmptyState },
  assistant: { ...assistantEmptyState },
}

/**
Intercepta la información del usuario proveniente de graphql
y retorna un objeto con estructura valida.
*/

export const userInterceptor = ({ loading, error, data, uid }) => {
  if (loading === true) {
    return userEmptyState
  } else if (error) {
    console.log(error)
    return userEmptyState
  } else if (data) {
    const info = {}
    Object.keys(data.userInfo).map((key) => {
      if (data.userInfo[key] !== null) {
        info[key] = data.userInfo[key]
      }
    })
    info.uid = uid
    return info
  }
  return userEmptyState
}

/**
Intercepta la información del usuario y  proveniente de graphql y
retorna un objeto con los datos o un objeto con propiedades nulas.
*/
export const dataInterceptor = ({ loading, error, data, uid }) => {
  if (loading === true) {
    return dataEmpty
  } else if (error) {
    console.log(error)
    return dataEmpty
  } else if (data) {
    const newData = {}
    newData.user = mapData({
      data: data.userInfo,
      uid: uid,
      template: userEmptyState,
    })
    newData.assistant = mapData({
      data: data.inventoryInfo,
      uid: uid,
      template: assistantEmptyState,
    })
    return newData
  }
  return dataEmpty
}

/**
Función para mapear los datos provenientes de graphql
añade propiedades con valores y agrega el uid.
*/

const mapData = ({ data, uid }) => {
  const object = {}
  Object.keys(data).map((key) => {
    if (data[key] !== null) {
      object[key] = data[key]
    }
  })
  object.uid = uid
  return object
}
