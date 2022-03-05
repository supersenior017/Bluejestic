import { gql } from '@apollo/client'

export default gql`
  query GET_STORES_PAGE_QUERY {
    categories {
      id
      name
      description
      image {
        alternativeText
        url
      }
      color
    }
    stores(where: { isActive: true }) {
      id
      businessInformation {
        name
      }
      description
      location
      isPopular
      isActive
      profileImage {
        alternativeText
        url
      }
      coverImage {
        alternativeText
        url
      }
    }
  }
`
