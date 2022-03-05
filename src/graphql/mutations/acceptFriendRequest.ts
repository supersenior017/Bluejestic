import { gql } from '@apollo/client'
import userFragment from '../fragments/userFragment'

const query = gql`
  mutation ACCEPTFRIENDREQUEST($id: ID!) {
    acceptFriendRequest(friend: $id) {
      user {
        ...UserFragment
      }
    }
  }
  ${userFragment}
`
export default query
