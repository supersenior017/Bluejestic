import { gql } from '@apollo/client'

const query = gql`
  mutation CREATELIKE($data: LikeInput) {
    createLike(input: { data: $data }) {
      like {
        user {
          id
        }
      }
    }
  }
`
export default query
