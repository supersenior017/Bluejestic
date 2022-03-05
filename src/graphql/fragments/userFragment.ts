import { gql } from '@apollo/client'

export default gql`
  fragment UserFragment on UsersPermissionsUser {
    id
    username
    email
    friends {
      user {
        id
        username
        email
      }
      connectedAt
      requestedByMe
    }
    joined
    about
    jobTitle
    relationshipStatus
    events
    bday
    website
    address
    gender
    hobbies
    workExperience
    otherInterests
    education
    profileImage {
      url
      alternativeText
    }
  }
`
