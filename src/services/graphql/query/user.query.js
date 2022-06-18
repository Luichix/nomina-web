import { gql } from '@apollo/client'

export const GET_USER_INFO = gql`
  query getUserInfo($uid: String!) {
    userInfo(uid: $uid) {
      name
      email
      phoneNumber
      industry
      employeeCount
      city
      address
      company
      country
      assistantAsigned
      assistantCreated
    }
  }
`

export const GET_USER_DATA = gql`
  query getUserData($uid: String!) {
    userInfo(uid: $uid) {
      name
      email
      phoneNumber
      industry
      employeeCount
      city
      address
      company
      country
      assistantAsigned
      assistantCreated
    }
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
