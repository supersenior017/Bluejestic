import { gql } from '@apollo/client'

export default gql`
  mutation CREATEPOST($content: String!) {
    createPost(input: { data: { content: $content } }) {
      post {
        id
        content
      }
    }
  }
`
