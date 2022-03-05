import { gql } from '@apollo/client'

export default gql`
  query GETUSERS($excludeUser: [ID]!) {
    users(where: { id_nin: $excludeUser }) {
      id
      username
    }
  }
`
