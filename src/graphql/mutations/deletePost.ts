import { gql } from '@apollo/client'

const query = gql`
  mutation DELETEPOST($id: ID!) {
    deletePost(input: { where: { id: $id } }) {
      post {
        id
      }
    }
  }
`
export default query
