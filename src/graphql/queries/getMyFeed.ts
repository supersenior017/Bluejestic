import { gql } from '@apollo/client'

export default gql`
  query MYFEED {
    myFeed {
      feed {
        id
        content
        attachments {
          url
          mime
          alternativeText
        }
        comments {
          id
          user {
            id
            username
          }
          comment
        }
        user {
          id
          username
        }
        likes {
          id
          user {
            id
          }
        }
        created_at
      }
    }
  }
`
