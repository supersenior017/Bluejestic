import { gql } from '@apollo/client'
import userFragment from '../fragments/userFragment'

const query = gql`
  mutation UNFRIEND($id: ID!) {
    unFriend(friend: $id) {
      user {
        ...UserFragment
      }
    }
  }
  ${userFragment}
`
export default query
