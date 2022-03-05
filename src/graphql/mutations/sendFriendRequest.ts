import { gql } from '@apollo/client'
import userFragment from '../fragments/userFragment'

const query = gql`
  mutation SENDFRIENDREQUEST($id: ID!) {
    sendFriendRequest(friend: $id) {
      user {
        ...UserFragment
      }
    }
  }
  ${userFragment}
`
export default query
