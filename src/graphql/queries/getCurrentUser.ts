import { gql } from '@apollo/client'
import userFragment from '../fragments/userFragment'

export default gql`
  query GETCURRENTUSER {
    currentUser {
      ...UserFragment
    }
  }
  ${userFragment}
`
