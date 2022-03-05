import { gql } from '@apollo/client'

const query = gql`
  mutation CREATECOMMENT($data: CommentInput) {
    createComment(input: { data: $data }) {
      comment {
        comment
      }
    }
  }
`
export default query
