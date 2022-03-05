import { gql } from '@apollo/client'

export default gql`
  query GETLIKES {
    likes {
      user {
        id
      }
      post {
        id
      }
    }
  }
`
