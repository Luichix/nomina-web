import { gql } from '@apollo/client'

/**Este metodo permite traer los parametros del asistente como integration id o service instance id, esta data te permite crear el  embedded javascript  snippet para que cada cliente pueda integrar su asistente a a su pagina web.  */
export const GET_ASSISTANT_INVENTORY = gql`
  query getInventoryInfo($uid: String!) {
    inventoryInfo(uid: $uid) {
      uid
      integrationId
      serviceInstanceId
      workspaceId
      busy
      name
      description
    }
  }
`

/**Este endpoint trae del inventario un asistente libre, permite obtener un workspaceId el cual puede ser utilizado despues para asignarse un asistente. */
export const GET_FREE_ASSISTANTS = gql`
  query get_free_assistans {
    getFreeAssistants {
      workspaceId
      uid
      integrationId
      serviceInstanceId
      busy
      name
      description
    }
  }
`

export const GET_ANSWERS = gql`
  query getAnswers($uid: String!, $language: String!) {
    getAnswers(uid: $uid, language: $language) {
      uid
      language
      answers {
        enable
        intent
        answer
        category
      }
    }
  }
`
