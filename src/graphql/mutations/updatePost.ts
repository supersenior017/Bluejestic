import { gql } from '@apollo/client'

const query = gql`
  mutation UPDATEPOST($id: ID!, $content: String!) {
    updatePost(input: { where: { id: $id }, data: { content: $content } }) {
      post {
        id
        content
      }
    }
  }
`

export default query
