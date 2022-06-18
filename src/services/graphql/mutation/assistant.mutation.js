import { gql } from '@apollo/client'

/**Este metodo permite asignar un asistente a un usuario del inventario. Cada vez que un cliente cree un nuevo asistente  es necesario marcar como ocupado uno de los registros del inventario de asistentes, esto debido a que se cuenta con un limitado numero de “licencias”.  */
export const ASSIGN_ASSISTANT_CLIENT = gql`
  mutation assing_assistant(
    $uid: String
    $description: String
    $busy: Boolean
    $assistantName: String
    $workspaceId: String
  ) {
    assignAssistant(
      uid: $uid
      description: $description
      busy: $busy
      assistantName: $assistantName
      workspaceId: $workspaceId
    ) {
      modified
    }
  }
`

export const ADD_ANSWERS = gql`
  mutation add_answers(
    $answers: [answerObject]
    $language: String
    $uid: String
  ) {
    addAnswers(answers: $answers, language: $language, uid: $uid) {
      modified
    }
  }
`

export const UPDATE_ANSWERS = gql`
  mutation update_answers(
    $answers: [answerObject]
    $language: String
    $uid: String
  ) {
    updateAnswers(answers: $answers, language: $language, uid: $uid) {
      modified
    }
  }
`

export const PROCESS_CREATE_ASSISTANT = gql`
  mutation ProcessCreateAssistant(
    $uid: String
    $assistantAsigned: Boolean
    $assistantName: String
    $busy: Boolean
    $description: String
    $workspaceId: String
    $answers: [answerObject]
    $language: String
  ) {
    addAnswers(answers: $answers, language: $language, uid: $uid) {
      modified
    }
    assignAssistant(
      assistantName: $assistantName
      busy: $busy
      description: $description
      uid: $uid
      workspaceId: $workspaceId
    ) {
      modified
    }
    addUserInfo(
      UserDataM: { uid: $uid, assistantAsigned: $assistantAsigned }
      updateUser: true
    ) {
      modified
      mid
    }
  }
`
