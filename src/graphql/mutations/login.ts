import { gql } from '@apollo/client'
import userFragment from '../fragments/userFragment'

export default gql`
  mutation LOGIN($identifier: String!, $password: String!) {
    signin(identifier: $identifier, password: $password) {
      jwt
      user {
        ...UserFragment
      }
    }
  }
  ${userFragment}
`
