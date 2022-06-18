import { gql } from '@apollo/client'

export const UPLOAD_CSV = gql`
  mutation uploadCSV($file: Upload!) {
    uploadCSV(file: $file)
  }
`

export const ADD_USER_INFO = gql`
  mutation addUserInfo(
    $address: String
    $city: String
    $company: String
    $country: String
    $email: String!
    $employeeCount: String
    $industry: String
    $name: String
    $phoneNumber: String
    $uid: String!
    $assistantAsigned: Boolean
    $assistantCreated: Boolean
  ) {
    addUserInfo(
      UserDataM: {
        address: $address
        city: $city
        company: $company
        country: $country
        email: $email
        employeeCount: $employeeCount
        industry: $industry
        name: $name
        phoneNumber: $phoneNumber
        uid: $uid
        assistantAsigned: $assistantAsigned
        assistantCreated: $assistantCreated
      }
    ) {
      mid
    }
  }
`
export const UPDATED_BASIC_INFO = gql`
  mutation editBasicInfo(
    $uid: String!
    $name: String!
    $email: String!
    $company: String!
    $phoneNumber: String!
  ) {
    addUserInfo(
      UserDataM: {
        uid: $uid
        name: $name
        email: $email
        company: $company
        phoneNumber: $phoneNumber
      }
      updateUser: true
    ) {
      modified
      mid
    }
  }
`
export const UPDATED_ADDRESS_INFO = gql`
  mutation editAddressInfo(
    $uid: String!
    $country: String!
    $city: String!
    $address: String!
  ) {
    addUserInfo(
      UserDataM: {
        uid: $uid
        country: $country
        city: $city
        address: $address
      }
      updateUser: true
    ) {
      modified
      mid
    }
  }
`

export const UPDATED_ASSIGNED_ASSISTANT = gql`
  mutation editStateAssistant($uid: String!, $assistantAsigned: Boolean!) {
    addUserInfo(
      UserDataM: { uid: $uid, assistantAsigned: $assistantAsigned }
      updateUser: true
    ) {
      modified
      mid
    }
  }
`

export const UPDATED_CREATED_ASSISTANT = gql`
  mutation editStateAssistant($uid: String!, $assistantCreated: Boolean!) {
    addUserInfo(
      UserDataM: { uid: $uid, assistantCreated: $assistantCreated }
      updateUser: true
    ) {
      modified
      mid
    }
  }
`
