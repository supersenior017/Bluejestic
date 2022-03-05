import { gql } from '@apollo/client'

const query = gql`
  mutation DELETELIKE($id: ID!) {
    deleteLike(input: { where: { id: $id } }) {
      like {
        post {
          id
        }
        user {
          id
        }
      }
    }
  }
`

export default query
